import MyError from "src/middleware/Error.mw";
import Bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
// import moment from moment;
import * as IndexServices from '../../../services/index.service';

interface IPayLoad {
    sAdminId: string
}

const date =  new Date();
let dateString = `${date.getUTCMonth()}/${date.getUTCDate()}/${date.getUTCFullYear()}` 

export function CreateToken(payload: IPayLoad): string{
    const {sAdminId} = payload;
    const NewPayload={
        sAdminId:sAdminId,
        tDate: dateString
    }

    return jwt.sign({
        hash: IndexServices.encryptObject(NewPayload)
    },process.env.JWT_SECRET)
}

export function HashPassword(sPassword: string): string {
    const Password = Bcrypt.hashSync(sPassword, Bcrypt.genSaltSync(10));
    return Password;
}

export function ConfirmPassword(sPassword: string, sNewPassword: string): boolean {
    return sPassword != sNewPassword;
}

export function ComparePassword(sPassword: string, sHash: string): boolean {
    return Bcrypt.compareSync(sPassword, sHash);
}