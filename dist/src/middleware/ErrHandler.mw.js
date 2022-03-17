"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ValidationError_util_1 = __importDefault(require("../Utils/ValidationError.util"));
const Error_mw_1 = __importDefault(require("./Error.mw"));
const objection_1 = require("objection");
exports.default = () => (err, req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (err.hasOwnProperty("joi")) {
        err.type = "JoiValidationError";
    }
    console.log("———————————————————————————————————————————————————————————————————————————");
    if (err.name === "CustomError") {
        console.log(err);
        let { sPassword } = req.body;
        let body = Object.assign({}, req.body);
        if (sPassword)
            body.sPassword = "*********";
        console.log({
            body: body,
            params: req.params,
            query: req.query,
        });
        return next(err);
    }
    if (err instanceof objection_1.ValidationError) {
        console.log("this is a validation error.");
        switch (err.type) {
            case "ModelValidation":
                next(new Error_mw_1.default(400, err.message));
                break;
            case "RelationExpression":
                next(new Error_mw_1.default(400, err.message));
                break;
            case "UnallowedRelation":
                next(new Error_mw_1.default(400, err.message));
                break;
            case "InvalidGraph":
                next(new Error_mw_1.default(400, err.message));
                break;
            default:
                next(new Error_mw_1.default(400, err.message));
                break;
        }
    }
    else if (err instanceof objection_1.NotFoundError) {
        return next(new Error_mw_1.default(404, err.message));
    }
    else if (err instanceof objection_1.UniqueViolationError) {
        if (err.columns.includes("sEmail")) {
            return next(new Error_mw_1.default(409, "Ese correo ya existe, favor de ingresar otro correo!"));
        }
        else {
            return next(new Error_mw_1.default(409, err.message));
        }
    }
    else if (err instanceof objection_1.NotNullViolationError) {
        return next(new Error_mw_1.default(400, "Es necesario llenar todos los datos requeridos"));
    }
    else if (err instanceof objection_1.ForeignKeyViolationError) {
        return next(new Error_mw_1.default(409, err.message));
    }
    else if (err instanceof objection_1.CheckViolationError) {
        return next(new Error_mw_1.default(400, err.message));
    }
    else if (err instanceof objection_1.DataError) {
        console.log(err);
        console.log("DATA ERROR");
        return next(new Error_mw_1.default(400, "Verifique que los campos ingresados sean correctos."));
    }
    else if (err instanceof objection_1.DBError) {
        return next(new Error_mw_1.default(500, err.message));
    }
    else if (err instanceof URIError) {
        return next(new Error_mw_1.default(400, 'Bad request.'));
    }
    else if (err.name === "JsonWebTokenError") {
        return next(
        //@ts-ignore
        new Error_mw_1.default(401, ValidationError_util_1.default.Middleware.invalidToken['sp']));
    }
    else if (err.type === "JoiValidationError") {
        console.log("JOIVALIDATIONERROR", res.locals.sLang, err.message);
        const [langCode, type, message] = [
            res.locals.sLang,
            err.message.split(" ")[0],
            err.message.split(" ")[1],
        ];
        if (err.message.includes("allowed")) {
            return next(new Error_mw_1.default(409, err.message));
        }
        else {
            return next(new Error_mw_1.default(409, ValidationError_util_1.default[err.type][type][message][langCode]));
        }
    }
    else {
        console.log(err);
        return next(new Error_mw_1.default(500, err.message));
    }
});
