/**  */
import aH from "express-async-handler";
import { Application } from "express";

import { celebrate } from "celebrate";

/**Middlewares */
import LanguageValidation from "../../middleware/Language.mw";
import { LanguageParams } from "../../middleware/Validation.mw";
/**Routes */
import AuthRoutes from "../04_Admin/0401_auth/auth.routes";
// import DoctorRoutes from "";
// import PatientRoutes from "";
// import AppointmentRoutes from "";

export default (app: Application): void => {
    //Auth Module
    app.use(
        `/api/:sLang/v1/auth`,
        aH(celebrate({
            params: LanguageParams,
        })),
        aH(LanguageValidation()),
        aH(AuthRoutes)
    );

    //Doctor Module
    // app.use(
    //     `/api/v1/doctors`,
    //     aH(celebrate({
    //         params: LanguageParams,
    //     })),
    //     aH(LanguageValidation()),
    //     aH(DoctorRoutes)
    // );

    //Patient Module
    // app.use(
    //     `/api/v1/patients`,
    //     aH(celebrate({
    //         params: LanguageParams,
    //     })),
    //     aH(LanguageValidation()),
    //     aH(PatientRoutes)
    // );

    //Appointment Module'
    // app.use(
    //     `/api/v1/appointments`,
    //     aH(celebrate({
    //         params: LanguageParams,
    //     })),
    //     aH(LanguageValidation()),
    //     aH(AppointmentRoutes)
    // )

};
