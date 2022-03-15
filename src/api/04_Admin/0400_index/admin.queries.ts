import { Page } from "objection";
import { ModelAdmin} from "../../00_index/index.models";

interface IAdminQueryEmail {
    sAdminEmail?: string;
    sPasswordHash?: string;
}

interface IAdminQueryUsername {
    sAdminUsername?: string;
    sPasswordHash?: string;
}

interface ISavedUser {
    sAdminId?: string;
    sAdminUsername?: string;
    sAdminEmail?: string;
}


export default class AdminQueries {
    async GetAdminByEmail(
        sAdminEmail: string
    ): Promise<IAdminQueryEmail> {
        const results: IAdminQueryEmail = await ModelAdmin.query()
            .select("sAdminEmail", "sPasswordHash")
            .where("bActive", true)
            .andWhere("sAdminEmail", sAdminEmail)
            .first();
        return results;
    }

    async GetAdminByUsername(
        sAdminUsername: string
    ): Promise<IAdminQueryUsername> {
        const results: IAdminQueryUsername = await ModelAdmin.query()
            .select("sAdminUsername", "sPasswordHash")
            .where("bActive", true)
            .andWhere("sAdminUsername", sAdminUsername)
            .first();
        return results;
    }

    async SaveUser({ sAdminUsername, sPasswordHash, sAdminEmail }): Promise<ISavedUser> {
        const results: ISavedUser= await ModelAdmin.query().insertGraph({
            sAdminUsername,
            sPasswordHash,
            sAdminEmail,
        });

        return results
    }
}
