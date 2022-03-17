"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_services_1 = require("../../04_Admin/0401_auth/auth.services");
const index_models_1 = require("../../00_index/index.models");
const Error_mw_1 = __importDefault(require("../../../middleware/Error.mw"));
const index_messages_1 = __importDefault(require("../../00_index/index.messages"));
class Controllers {
    static Login(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { sLang } = res.locals;
            const { sAdminUsername, sAdminPassword, sAdminEmail } = req.body;
            let admin;
            console.log('PasswordVal', sAdminPassword, admin.sPasswordHash);
            if (sAdminEmail) {
                admin = yield index_models_1.Admin.GetAdminByEmail(sAdminEmail);
            }
            else if (sAdminUsername) {
                admin = yield index_models_1.Admin.GetAdminByUsername(sAdminUsername);
            }
            if (!admin)
                return next(new Error_mw_1.default(401, index_messages_1.default.auth.login.invalidCredentials[sLang]));
            const password = (0, auth_services_1.ComparePassword)(sAdminPassword, admin.sPasswordHash);
            if (!password)
                return next(new Error_mw_1.default(401, index_messages_1.default.auth.login.invalidCredentials[sLang]));
            const token = (0, auth_services_1.CreateToken)({
                sAdminId: admin.sAdminId
            });
            return res.status(200).json({
                token: token,
                message: "GREAT SCOTT"
            });
        });
    }
    static SaveUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
}
exports.default = Controllers;
