
import { Response, Request, NextFunction } from "express";

export default class Controllers{
    static async Login(req:Request,res:Response, next: NextFunction): Promise<any>{
        const {
            sAdminUsername,
            sAdminPassword,
            sAdminEmail,
        }=req.body;
        
        return res.status(200).json({

        });
    }

    static async SaveUser(req:Request,res:Response, next: NextFunction){

    }
}