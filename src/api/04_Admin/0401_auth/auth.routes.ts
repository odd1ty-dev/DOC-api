import {Router, Request, Response, NextFunction} from 'express';
import aH from 'express-async-handler';
import { celebrate } from "celebrate";
import Controllers from './auth.controllers';
import * as Validations from "./auth.validations";

const router = Router();

router
    .post('/signup',
        aH(celebrate({body:Validations.SignIn})),
        aH(Controllers.SaveUser)
    )
    .post('/login',
        aH(celebrate({body:Validations.LoginBody})),
        aH(Controllers.Login)
    )
    .post('/password-recovery',
        aH(celebrate({body:Validations.PasswordRecovery})), 
        aH(Controllers.ChangePassword)
    )
export default router
