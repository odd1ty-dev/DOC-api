import {Joi} from "celebrate";
import * as Validations from "../../../middleware/Validation.mw"

export const LoginBody = Joi.object().key({
    sAdminEmail:Validations.CorrectEmail('Login sAdminEmail'),
    sAdminUsername:Validations.String('Login sAdminUsername'),
    sPassword:Validations.CorrectPassword('Login sPassword')
})

export const SignIn = Joi.object().key({
    sAdminEmail:Validations.CorrectEmail('Login sAdminEmail'),
    sAdminUsername:Validations.String('Login sAdminUsername'),
    sPassword:Validations.CorrectPassword('Login sPassword')
})