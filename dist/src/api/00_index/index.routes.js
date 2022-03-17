"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**  */
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const celebrate_1 = require("celebrate");
/**Middlewares */
const Language_mw_1 = __importDefault(require("../../middleware/Language.mw"));
const Validation_mw_1 = require("../../middleware/Validation.mw");
/**Routes */
const auth_routes_1 = __importDefault(require("../04_Admin/0401_auth/auth.routes"));
// import DoctorRoutes from "";
// import PatientRoutes from "";
// import AppointmentRoutes from "";
exports.default = (app) => {
    //Auth
    app.use(`/api/:sLang/v1/auth`, (0, express_async_handler_1.default)((0, celebrate_1.celebrate)({
        params: Validation_mw_1.LanguageParams,
    })), (0, express_async_handler_1.default)((0, Language_mw_1.default)()), (0, express_async_handler_1.default)(auth_routes_1.default));
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
