"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Error_mw_1 = __importDefault(require("./Error.mw"));
exports.default = () => (req, res, next) => {
    const { sLang } = req.params;
    const ValidLanguages = ['sp', 'en'];
    if (ValidLanguages.includes(sLang)) {
        res.locals.sLang = sLang;
        return next();
    }
    else {
        return next(new Error_mw_1.default(404, `This language '${sLang}' does not exists.`));
    }
};
