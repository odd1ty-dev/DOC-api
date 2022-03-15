/**  */
import aH from "express-async-handler";
import { Application } from "express";

import { celebrate } from "celebrate";

/**Middlewares */
import LanguageValidation from "../../middleware/Language.mw";
import { LanguageParams } from "src/middleware/Validation.mw";

/**Routes */
import AuthRoutes from "../04_Admin/0401_auth/auth.routes";
// import DoctorRoutes from "";
// import PatientRoutes from "";
// import AppointmentRoutes from "";

export default (app: Application): void => {
    //Auth
    app.use(
        `/api/v1/auth`,
        celebrate({
            params: LanguageParams,
        }),
        aH(LanguageValidation()),
        aH(AuthRoutes)
    );

    //Doctor Module
    // app.use(
    //     `/api/v1/doctors`,
    //     aH(DoctorRoutes)
    // );

    //Patient Module
    // app.use(
    //     `/api/v1/patients`,
    //     aH(PatientRoutes)
    // );
    //Appointment Module'
    // app.use(
    //     `/api/v1/appointments`,
    //     aH(AppointmentRoutes)
    // )
};
