import MyError from "./Error.mw";
import { Request, Response, NextFunction } from "express";

export default () => (req: Request, res: Response, next: NextFunction) => {
    const {
        sLang
    } = req.params;

    const ValidLanguages: string[] = ['sp'];

    if (ValidLanguages.includes(sLang)) {
        res.locals.sLang = sLang;
        return next();
    } else {
        return next(new MyError(404, `This language '${sLang}' does not exists.`))
    }
}