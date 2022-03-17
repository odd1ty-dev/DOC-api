import { Response, Request, NextFunction } from "express";
import {
    ComparePassword,
    CreateToken,
    HashPassword,
} from "../../04_Admin/0401_auth/auth.services";
import { IAdmin, ModelAdmin, Admin } from "../../00_index/index.models";
import MyError from "../../../middleware/Error.mw";
import Messages from "../../00_index/index.messages";

export default class Controllers {
    static async Login(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response | any> {
        const { sLang } = res.locals;
        const { sAdminUsername, sAdminPassword, sAdminEmail } = req.body;
        let admin: {
            sAdminId?: string;
            sAdminEmail?: string;
            sPasswordHash?: string;
        };
        if (sAdminEmail) {
            admin = await Admin.GetAdminByEmail(sAdminEmail);
        } else if (sAdminUsername) {
            admin = await Admin.GetAdminByUsername(sAdminUsername);
        } else {
            return next(
                new MyError(400, Messages.auth.login.missingCredentials[sLang])
            );
        }

        if (!admin)
            return next(
                new MyError(401, Messages.auth.login.invalidCredentials[sLang])
            );

        const password: boolean = ComparePassword(
            sAdminPassword,
            admin.sPasswordHash
        );

        if (!password)
            return next(
                new MyError(401, Messages.auth.login.invalidCredentials[sLang])
            );

        const token: string = CreateToken({
            sAdminId: admin.sAdminId,
        });
        return res.status(200).json({
            token: token,
            message: "GREAT SCOTT",
        });
    }

    static async SaveUser(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<any> {
        const { sLang } = res.locals;
        const { sNewEmail } = req.body;

        const adminExists = await Admin.GetAdminByEmail(sNewEmail);
        if(adminExists) return next(new MyError(409,Messages.auth.signin.emailAlreadyExists[sLang]))
        return res.status(200).json({
            message:"GREAT SCOTT"
        })
        // Format req.body to workable obj.
        // Check if email already exists in Admin table. (Messages.auth.signin.emailAlreadyExists[lang])


    }

    static async ChangePassword(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<any> {
        //Format req.body to workable obj.

        //Check if token provided token is valid/signed properly. (Messages.auth.recovery.tokenInvalid[lang])
        //If valid, check if token exists in Temporary Recovery Password. (Messages.auth.recovery.tokenInvalid[lang])
        //Retreive Admin record based on Id.
        //Check if Admin record has a username.
        //If it doesnt have a username, change username to username provided.(Messages.auth.recovery.missingCredentials[lang])
        //Change password to newPassword.
    }
}
