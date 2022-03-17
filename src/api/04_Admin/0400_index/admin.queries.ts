import { Page } from "objection";
import { ModelAdmin} from "../../00_index/index.models";

interface IAdminQueryEmail {
    sAdminId?:string,
    sAdminEmail?: string;
    sPasswordHash?: string;
}

interface IAdminQueryUsername {
    sAdminId?:string,
    sAdminUsername?: string;
    sPasswordHash?: string;
}

interface ISavedUser {
    sAdminId?: string;
    sAdminUsername?: string;
    sAdminEmail?: string;
}


export default class AdminQueries {
    static async GetAdminByEmail(
        sAdminEmail: string
    ): Promise<IAdminQueryEmail> {
        const results: IAdminQueryEmail = await ModelAdmin.query()
            .select("sAdminId","sAdminEmail", "sPasswordHash")
            .where("bActive", true)
            .andWhere("sAdminEmail", sAdminEmail)
            .first();
        return results;
    }

    static async GetAdminByUsername(
        sAdminUsername: string
    ): Promise<IAdminQueryUsername> {
        const results: IAdminQueryUsername = await ModelAdmin.query()
            .select("sAdminId","sAdminUsername", "sPasswordHash")
            .where("bActive", true)
            .andWhere("sAdminUsername", sAdminUsername)
            .first();
        return results;
    }

    static async SaveUser({ sAdminUsername, sPasswordHash, sAdminEmail }): Promise<ISavedUser> {
        const results: ISavedUser= await ModelAdmin.query().insertGraph({
            sAdminUsername,
            sPasswordHash,
            sAdminEmail,
        });

        return results
    }
}
