"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JoiObjectKeys = exports.LanguageParams = exports.Filters = exports.CorrectEndDate = exports.CorrectStartDate = exports.NumberRange = exports.StringNumber = exports.StringNumberRange = exports.RequiredStringNumberRange = exports.StringRange = exports.RequiredStringRange = exports.RequiredNumberRange = exports.RequiredCorrectPhoneNumber = exports.CorrectPhoneNumber = exports.CorrectEmail = exports.RequiredCorrectEmail = exports.CorrectPassword = exports.StringCustomSort = exports.StringSort = exports.StringLength = exports.String = exports.Number = exports.RequiredNumberAllowNegative = exports.RequiredNumber = exports.RequiredLowString = exports.RequiredStringLength = exports.RequiredString = exports.ArrayItems = exports.RequiredArrayItems = exports.Array = exports.RequiredArray = exports.Boolean = exports.RequiredBoolean = void 0;
const celebrate_1 = require("celebrate");
function RequiredBoolean(error) {
    return celebrate_1.Joi.boolean().required().error(new Error(error));
}
exports.RequiredBoolean = RequiredBoolean;
function Boolean(error) {
    return celebrate_1.Joi.boolean().error(new Error(error));
}
exports.Boolean = Boolean;
function RequiredArray(error) {
    return celebrate_1.Joi.array().required().error(new Error(error));
}
exports.RequiredArray = RequiredArray;
function Array(error) {
    return celebrate_1.Joi.array().error(new Error(error));
}
exports.Array = Array;
function RequiredArrayItems(error, items) {
    return celebrate_1.Joi.array().required().items(items).error(new Error(error)).min(1);
}
exports.RequiredArrayItems = RequiredArrayItems;
function ArrayItems(error, items) {
    return celebrate_1.Joi.array().items(items).error(new Error(error)).min(1);
}
exports.ArrayItems = ArrayItems;
function RequiredString(error) {
    return celebrate_1.Joi.string().trim().required().error(new Error(error));
}
exports.RequiredString = RequiredString;
function RequiredStringLength(error, length) {
    return celebrate_1.Joi.string().trim().required().max(length).error(new Error(error));
}
exports.RequiredStringLength = RequiredStringLength;
function RequiredLowString(error) {
    return celebrate_1.Joi.string().trim().required().lowercase().error(new Error(error));
}
exports.RequiredLowString = RequiredLowString;
function RequiredNumber(error) {
    return celebrate_1.Joi.number().required().min(1).error(new Error(error));
}
exports.RequiredNumber = RequiredNumber;
function RequiredNumberAllowNegative(error) {
    return celebrate_1.Joi.number().required().error(new Error(error));
}
exports.RequiredNumberAllowNegative = RequiredNumberAllowNegative;
function Number(error) {
    return celebrate_1.Joi.number().error(new Error(error));
}
exports.Number = Number;
function String(error) {
    return celebrate_1.Joi.string().trim().allow("").allow(null).error(new Error(error));
}
exports.String = String;
function StringLength(error, length) {
    return celebrate_1.Joi.string().trim().allow("").max(length).allow(null).error(new Error(error));
}
exports.StringLength = StringLength;
function StringSort(error) {
    return celebrate_1.Joi.string().trim().valid('asc', 'desc').allow("").allow(null).error(new Error(error));
}
exports.StringSort = StringSort;
function StringCustomSort(error) {
    return celebrate_1.Joi.string().trim().valid('in', 'out').allow("").allow(null).error(new Error(error));
}
exports.StringCustomSort = StringCustomSort;
function CorrectPassword(error) {
    return celebrate_1.Joi.string().trim().regex(/(^[a-zA-Z0-9])*(^[a-zA-Z0-9?_`~;:!#%*+=@&.]+$)/).min(6).required().error(new Error(error));
}
exports.CorrectPassword = CorrectPassword;
function RequiredCorrectEmail(error) {
    return celebrate_1.Joi.string().trim().email().lowercase().options({
        convert: true
    }).max(70).regex(/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3}){1,2})$/).required().error(new Error(error));
}
exports.RequiredCorrectEmail = RequiredCorrectEmail;
function CorrectEmail(error) {
    return celebrate_1.Joi.string().trim().allow("").allow(null).email().lowercase().options({
        convert: true
    }).max(70).regex(/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3}){1,2})$/).error(new Error(error));
}
exports.CorrectEmail = CorrectEmail;
function CorrectPhoneNumber(error) {
    return celebrate_1.Joi.string()
        .trim()
        .allow("").allow(null)
        .min(7)
        .max(8)
        .regex(/^([0-9])+$/)
        .error(new Error(error));
}
exports.CorrectPhoneNumber = CorrectPhoneNumber;
function RequiredCorrectPhoneNumber(error) {
    return celebrate_1.Joi.string()
        .trim()
        .min(7)
        .max(8)
        .regex(/^([0-9])+$/)
        .required()
        .error(new Error(error));
}
exports.RequiredCorrectPhoneNumber = RequiredCorrectPhoneNumber;
function RequiredNumberRange(error, min, max) {
    return celebrate_1.Joi.number()
        .min(min)
        .max(max)
        .required()
        .error(new Error(error));
}
exports.RequiredNumberRange = RequiredNumberRange;
function RequiredStringRange(error, min, max) {
    return celebrate_1.Joi.string()
        .trim()
        .min(min)
        .max(max)
        .required()
        .error(new Error(error));
}
exports.RequiredStringRange = RequiredStringRange;
function StringRange(error, min, max) {
    return celebrate_1.Joi.string()
        .trim()
        .allow("").allow(null)
        .min(min)
        .max(max)
        .error(new Error(error));
}
exports.StringRange = StringRange;
function RequiredStringNumberRange(error, min, max) {
    return celebrate_1.Joi.string()
        .trim()
        .min(min)
        .max(max)
        .regex(/^([0-9])+$/)
        .required()
        .error(new Error(error));
}
exports.RequiredStringNumberRange = RequiredStringNumberRange;
function StringNumberRange(error, min, max) {
    return celebrate_1.Joi.string()
        .trim()
        .allow("").allow(null)
        .min(min)
        .max(max)
        .regex(/^([0-9])+$/)
        .error(new Error(error));
}
exports.StringNumberRange = StringNumberRange;
function StringNumber(error) {
    return celebrate_1.Joi.string()
        .trim()
        .allow("").allow(null)
        .regex(/^([0-9])+$/)
        .error(new Error(error));
}
exports.StringNumber = StringNumber;
function NumberRange(error, min, max) {
    return celebrate_1.Joi.number()
        .min(min)
        .max(max)
        .regex(/^([0-9])+$/)
        .required()
        .error(new Error(error));
}
exports.NumberRange = NumberRange;
function CorrectStartDate(error) {
    return celebrate_1.Joi.date()
        .iso()
        .allow("").allow(null)
        .error(new Error(error));
}
exports.CorrectStartDate = CorrectStartDate;
function CorrectEndDate(error) {
    return celebrate_1.Joi.date()
        .iso()
        .greater(celebrate_1.Joi.ref("tStart"))
        .allow("").allow(null)
        .error(new Error(error));
}
exports.CorrectEndDate = CorrectEndDate;
exports.Filters = {
    sSearch: celebrate_1.Joi.string().lowercase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").allow("").allow(null).error(new Error("sSearch Filters")),
    iPageNumber: celebrate_1.Joi.number()
        .min(1)
        .allow()
        .error(new Error("iPageNumber Filters")),
    iItemsPerPage: celebrate_1.Joi.number()
        .allow("").allow(null)
        .error(new Error("iItemsPerPage Filters")),
};
exports.LanguageParams = {
    sLang: celebrate_1.Joi.string().required().error(new Error("sLang Translations"))
};
function JoiObjectKeys(oKeys) {
    return celebrate_1.Joi.object().keys(oKeys);
}
exports.JoiObjectKeys = JoiObjectKeys;
