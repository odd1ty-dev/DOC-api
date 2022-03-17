"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComparePassword = exports.ConfirmPassword = exports.HashPassword = exports.CreateToken = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// import moment from moment;
const IndexServices = __importStar(require("../../../services/index.service"));
const date = new Date();
let dateString = `${date.getUTCMonth}/${date.getUTCDate}/${date.getUTCFullYear}`;
function CreateToken(payload) {
    const { sAdminId } = payload;
    const NewPayload = {
        sAdminId: sAdminId,
        tDate: dateString
    };
    return jsonwebtoken_1.default.sign({
        hash: IndexServices.encryptObject(NewPayload)
    }, process.env.JWT_SECRET);
}
exports.CreateToken = CreateToken;
function HashPassword(sPassword) {
    const Password = bcryptjs_1.default.hashSync(sPassword, bcryptjs_1.default.genSaltSync(10));
    return Password;
}
exports.HashPassword = HashPassword;
function ConfirmPassword(sPassword, sNewPassword) {
    return sPassword != sNewPassword;
}
exports.ConfirmPassword = ConfirmPassword;
function ComparePassword(sPassword, sHash) {
    return bcryptjs_1.default.compareSync(sPassword, sHash);
}
exports.ComparePassword = ComparePassword;
