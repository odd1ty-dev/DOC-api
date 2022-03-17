import {Joi} from "celebrate";
import * as Validations from "../../../middleware/Validation.mw"

export const LoginBody = Joi.object({
    sAdminEmail:Validations.CorrectEmail('Login sEmail'),
    sAdminUsername:Validations.String('Login sUsername'),
    sAdminPassword:Validations.CorrectPassword('Login sPassword')
})

export const SignIn = Joi.object({
    sEmail:Validations.RequiredCorrectEmail('SignIn sEmail')
})

export const PasswordRecovery = Joi.object({
    sNewUsername:Validations.String('RecoveryPassword sUsername'),
    sNewPassword:Validations.CorrectPassword('RecoveryPassword sNewPassword')
})