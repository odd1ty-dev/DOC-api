import { Joi } from "celebrate";

export function RequiredBoolean(error: string): string  {
    return Joi.boolean().required().error(new Error(error));
}

export function Boolean(error: string): string {
    return Joi.boolean().error(new Error(error));
}

export function RequiredArray(error: string): string {
    return Joi.array().required().error(new Error(error))
}

export function Array(error: string): string {
    return Joi.array().error(new Error(error))
}

export function RequiredArrayItems(error: string, items: object): string {
    return Joi.array().required().items(items).error(new Error(error)).min(1)
}

export function ArrayItems(error: string, items: object): string {
    return Joi.array().items(items).error(new Error(error)).min(1)
}

export function RequiredString(error: string): string {
    return Joi.string().trim().required().error(new Error(error));
}

export function RequiredStringLength(error: string, length?: number): string {
    return Joi.string().trim().required().max(length).error(new Error(error));
}

export function RequiredLowString(error: string): string {
    return Joi.string().trim().required().lowercase().error(new Error(error));
}

export function RequiredNumber(error: string): string {
    return Joi.number().required().min(1).error(new Error(error));
}

export function RequiredNumberAllowNegative(error: string): string {
    return Joi.number().required().error(new Error(error));
}

export function Number(error: string): string {
    return Joi.number().error(new Error(error));
}

export function String(error: string): string {
    return Joi.string().trim().allow("").allow(null).error(new Error(error));
}

export function StringLength(error: string, length: number): string {
    return Joi.string().trim().allow("").max(length).allow(null).error(new Error(error));
}

export function StringSort(error: string): string {
    return Joi.string().trim().valid('asc', 'desc').allow("").allow(null).error(new Error(error));
}

export function StringCustomSort(error: string): string {
    return Joi.string().trim().valid('in', 'out').allow("").allow(null).error(new Error(error));
}

export function CorrectPassword(error: string): string {
    return Joi.string().trim().regex(/(^[a-zA-Z0-9])*(^[a-zA-Z0-9?_`~;:!#%*+=@&.]+$)/).min(6).required().error(new Error(error));
}

export function RequiredCorrectEmail(error: string): string {
    return Joi.string().trim().email().lowercase().options({
        convert: true
    }).max(70).regex(/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3}){1,2})$/).required().error(new Error(error));
}

export function CorrectEmail(error: string): string {
    return Joi.string().trim().allow("").allow(null).email().lowercase().options({
        convert: true
    }).max(70).regex(/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3}){1,2})$/).error(new Error(error));
}

export function CorrectPhoneNumber(error: string): string {
    return Joi.string()
        .trim()
        .allow("").allow(null)
        .min(7)
        .max(8)
        .regex(/^([0-9])+$/)
        .error(new Error(error));
}

export function RequiredCorrectPhoneNumber(error: string): string {
    return Joi.string()
        .trim()
        .min(7)
        .max(8)
        .regex(/^([0-9])+$/)
        .required()
        .error(new Error(error));
}

export function RequiredNumberRange(error: string, min: number, max: number): string {
    return Joi.number()
        .min(min)
        .max(max)
        .required()
        .error(new Error(error));
}

export function RequiredStringRange(error: string, min: number, max: number): string {
    return Joi.string()
        .trim()
        .min(min)
        .max(max)
        .required()
        .error(new Error(error));
}

export function StringRange(error: string, min: number, max: number): string {
    return Joi.string()
        .trim()
        .allow("").allow(null)
        .min(min)
        .max(max)
        .error(new Error(error));
}

export function RequiredStringNumberRange(error: string, min: number, max: number): string {
    return Joi.string()
        .trim()
        .min(min)
        .max(max)
        .regex(/^([0-9])+$/)
        .required()
        .error(new Error(error));
}

export function StringNumberRange(error: string, min: number, max: number): string {
    return Joi.string()
        .trim()
        .allow("").allow(null)
        .min(min)
        .max(max)
        .regex(/^([0-9])+$/)
        .error(new Error(error));
}

export function StringNumber(error:string): string {
    return Joi.string()
        .trim()
        .allow("").allow(null)
        .regex(/^([0-9])+$/)
        .error(new Error(error));
}

export function NumberRange(error: string, min: number, max: number): string {
    return Joi.number()
        .min(min)
        .max(max)
        .regex(/^([0-9])+$/)
        .required()
        .error(new Error(error));
}

export function CorrectStartDate(error: string): string {
    return Joi.date()
        .iso()
        .allow("").allow(null)
        .error(new Error(error));
}

export function CorrectEndDate(error: string): string {
    return Joi.date()
        .iso()
        .greater(Joi.ref("tStart"))
        .allow("").allow(null)
        .error(new Error(error));
}

export const Filters = {
    sSearch: Joi.string().lowercase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").allow("").allow(null).error(new Error("sSearch Filters")),
    iPageNumber: Joi.number()
        .min(1)
        .allow()
        .error(new Error("iPageNumber Filters")),
    iItemsPerPage: Joi.number()
        .allow("").allow(null)
        .error(new Error("iItemsPerPage Filters")),
};

export const LanguageParams: object = {
    sLang: Joi.string().required().error(new Error("sLang Translations"))
}

export function JoiObjectKeys(oKeys: any) {
    return Joi.object().keys(oKeys)
}