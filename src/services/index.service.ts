import cryptojs from "crypto-js";
import crypto from "crypto";
import Bcrypt from 'bcryptjs';

export function encryptObject(object: object): string {
    let stringify = JSON.stringify(object);
    return cryptojs.AES.encrypt(stringify, process.env.AES_SECRET).toString();
    // return cryptojs.AES.e
};

export function decryptObject(string: string): IHashData {
    const text = cryptojs.AES.decrypt(string, process.env.AES_SECRET).toString(cryptojs.enc.Utf8);
    const parse = JSON.parse(text);

    return parse;
};

export function ExpireToken(tDate: Date, iMinutes: number): Date {
    return new Date(tDate.getTime() + (iMinutes * 60000))
}

export interface IHashData {
    sUserId: string;
    sSessionId: string;
}

export function CreateRandomToken(iBytes: number): string {
    return crypto.randomBytes(iBytes).toString('hex');
}

export function GetTime(tDate: Date): number {
    const offset = tDate.getTimezoneOffset();

    const localDateInMilliseconds = tDate.setHours(tDate.getHours() - (offset / 60));

    tDate = new Date(localDateInMilliseconds);

    return tDate.getTime();
}

export function GetDiff(timeZone: string): number {
    const timeZoneName = Intl.DateTimeFormat("ia", {
        timeZoneName: "short",
        timeZone,
    })
        .formatToParts()
        .find((i) => i.type === "timeZoneName").value;
    const offset = timeZoneName.slice(3);
    if (!offset) return 0;

    const matchData = offset.match(/([+-])(\d+)(?::(\d+))?/);
    if (!matchData) throw `cannot parse timezone name: ${timeZoneName}`;

    const [, sign, hour, minute] = matchData;
    let result = parseInt(hour) * 60;
    if (sign === "-") result *= -1;
    if (minute) result + parseInt(minute);

    return result;
}

export function GetDate(tDate: Date): Date {
    const offset = GetDiff('America/Monterrey');

    const localDateInMilliseconds = tDate.setHours(tDate.getHours() + (offset / 60));

    return new Date(localDateInMilliseconds);
}

export interface IFilters {
    iPageNumber?: number;
    iItemsPerPage?: number;
    sSearch?: string;
}


export function randomPassword(iLength: number): { hash: string, plane: string } {

    let random = crypto.randomBytes(iLength).toString();

    let encrypt = cryptojs.AES.encrypt(random, process.env.AES_SECRET).toString();

    let temporal = encrypt.slice(0, iLength)

    const HashPassword = Bcrypt.hashSync(temporal, Bcrypt.genSaltSync(10));

    return {
        hash: HashPassword,
        plane: temporal
    };
};

export function RandomNumbers(iLength: number): string {
    const numbers: number[] = [1, 2, 3, 5, 6, 7, 8, 9, 0];
    let result: string[] = [];
    for (let i = 0; i < iLength; i++) {
        result.push(numbers[Math.floor(Math.random() * 10)].toString());
    }
    return result.join('');
}

export function PairEncrypt(data: string, key: crypto.RsaPublicKey): Buffer {
    return crypto.publicEncrypt(key, Buffer.from(data));
}

export function PairDecrypt(data: string, key: crypto.RsaPrivateKey): Buffer {
    return crypto.privateDecrypt(key, Buffer.from(data));
}

export function FindDuplicates(arry: string[]): string[] {
    return arry.filter((item, index) => arry.indexOf(item) !== index)
}

export function FindIndexDuplicates(array: string[]): number[] {
    return array.map((item, index) => {
        if (array.indexOf(item) !== index) {
            return index
        }
    })
}

export function OrdersFolio(sType: string): string {
    const Prefix = {
        sales: 'SO',
        purchase: 'PO'
    };
    const Allows: string[] = Object.values(Prefix);

    if (!Allows.includes(sType)) return '0';

    let number: string = crypto.randomBytes(4).join('');
    let pincode: string[] = [];
    let loopTimes = number.length;

    for (let i = 0; i < loopTimes; i++) {
        let numeric: number = Date.now() - (parseInt(number) / 4) * (i + 1);
        let random: string[] = Math.floor(Math.random() * (numeric * (i + 1))).toString().split('');
        let index: number = Math.floor(Math.random() * random.length);
        pincode.push(random[index]);
    }

    return sType + '-' + pincode.join('').toString().slice(0, 6);
}