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
Object.defineProperty(exports, "__esModule", { value: true });
const index_models_1 = require("../../00_index/index.models");
class AdminQueries {
    static GetAdminByEmail(sAdminEmail) {
        return __awaiter(this, void 0, void 0, function* () {
            const results = yield index_models_1.ModelAdmin.query()
                .select("sAdminId", "sAdminEmail", "sPasswordHash")
                .where("bActive", true)
                .andWhere("sAdminEmail", sAdminEmail)
                .first();
            return results;
        });
    }
    static GetAdminByUsername(sAdminUsername) {
        return __awaiter(this, void 0, void 0, function* () {
            const results = yield index_models_1.ModelAdmin.query()
                .select("sAdminId", "sAdminUsername", "sPasswordHash")
                .where("bActive", true)
                .andWhere("sAdminUsername", sAdminUsername)
                .first();
            return results;
        });
    }
    static SaveUser({ sAdminUsername, sPasswordHash, sAdminEmail }) {
        return __awaiter(this, void 0, void 0, function* () {
            const results = yield index_models_1.ModelAdmin.query().insertGraph({
                sAdminUsername,
                sPasswordHash,
                sAdminEmail,
            });
            return results;
        });
    }
}
exports.default = AdminQueries;
