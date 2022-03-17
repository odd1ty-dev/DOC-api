import messages from "../Utils/ValidationError.util";
import { Request, Response, NextFunction } from "express";
import MyError from "./Error.mw";
import {
    ValidationError,
    NotFoundError,
    DBError,
    UniqueViolationError,
    NotNullViolationError,
    ForeignKeyViolationError,
    CheckViolationError,
    DataError,
} from "objection";
import { IMyError } from "./SendAsJson.mw";

interface IErrHandler extends IMyError {
    type: string
}

export default () => async (err: IErrHandler, req: Request, res: Response, next: NextFunction) => {
    if (err.hasOwnProperty("joi")) {
        err.type = "JoiValidationError";
    }
    console.log(
        "———————————————————————————————————————————————————————————————————————————"
    );
    if (err.name === "CustomError") {
        console.log(err);
        let { sPassword } = req.body;
        let body = { ...req.body };
        if (sPassword) body.sPassword = "*********";
        console.log({
            body: body,
            params: req.params,
            query: req.query,
        });
        return next(err);
    }
    if (err instanceof ValidationError) {
        console.log("this is a validation error.");
        switch (err.type) {
            case "ModelValidation":
                next(new MyError(400, err.message));
                break;
            case "RelationExpression":
                next(new MyError(400, err.message));
                break;
            case "UnallowedRelation":
                next(new MyError(400, err.message));
                break;
            case "InvalidGraph":
                next(new MyError(400, err.message));
                break;
            default:
                next(new MyError(400, err.message));
                break;
        }
    } else if (err instanceof NotFoundError) {
        return next(new MyError(404, err.message));
    } else if (err instanceof UniqueViolationError) {
        if (err.columns.includes("sEmail")) {
            return next(
                new MyError(409, "Ese correo ya existe, favor de ingresar otro correo!")
            );
        } else {
            return next(new MyError(409, err.message));
        }
    } else if (err instanceof NotNullViolationError) {
        return next(
            new MyError(400, "Es necesario llenar todos los datos requeridos")
        );
    } else if (err instanceof ForeignKeyViolationError) {
        return next(new MyError(409, err.message));
    } else if (err instanceof CheckViolationError) {
        return next(new MyError(400, err.message));
    } else if (err instanceof DataError) {
        console.log(err);
        console.log("DATA ERROR");
        return next(
            new MyError(400, "Verifique que los campos ingresados sean correctos.")
        );
    } else if (err instanceof DBError) {
        return next(new MyError(500, err.message));
    } else if (err instanceof URIError) {
        return next(
            new MyError(400, 'Bad request.')
        )
    } else if (err.name === "JsonWebTokenError") {
        return next(
            //@ts-ignore
            new MyError(401, messages.Middleware.invalidToken['sp'])
        );
    } else if (err.type === "JoiValidationError") {
        console.log("JOIVALIDATIONERROR",res.locals.sLang,err.message);
        const [langCode, type, message] = [
           res.locals.sLang,
            err.message.split(" ")[0],
            err.message.split(" ")[1],
        ];
        if (err.message.includes("allowed")) {
            return next(new MyError(409, err.message));
        } else {
            return next(
                new MyError(409, messages[err.type][type][message][langCode])
            );
        }
    } else {
        return next(new MyError(500, err.message));
    }
}