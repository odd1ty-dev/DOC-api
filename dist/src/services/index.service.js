"use strict";
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersFolio =
    exports.FindIndexDuplicates =
    exports.FindDuplicates =
    exports.PairDecrypt =
    exports.PairEncrypt =
    exports.RandomNumbers =
    exports.randomPassword =
    exports.GetDate =
    exports.GetDiff =
    exports.GetTime =
    exports.CreateRandomToken =
    exports.ExpireToken =
    exports.decryptObject =
    exports.encryptObject =
        void 0;
const crypto_js_1 = __importDefault(require("crypto-js"));
const crypto_1 = __importDefault(require("crypto"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
function encryptObject(object) {
    let stringify = JSON.stringify(object);
    return crypto_js_1.default.AES.encrypt(
        stringify,
        process.env.AES_SECRET
    ).toString();
}
exports.encryptObject = encryptObject;
function decryptObject(string) {
    const text = crypto_js_1.default.AES.decrypt(
        string,
        process.env.AES_SECRET
    ).toString(crypto_js_1.default.enc.Utf8);
    const parse = JSON.parse(text);
    return parse;
}
exports.decryptObject = decryptObject;
function ExpireToken(tDate, iMinutes) {
    return new Date(tDate.getTime() + iMinutes * 60000);
}
exports.ExpireToken = ExpireToken;
function CreateRandomToken(iBytes) {
    return crypto_1.default.randomBytes(iBytes).toString("hex");
}
exports.CreateRandomToken = CreateRandomToken;
function GetTime(tDate) {
    const offset = tDate.getTimezoneOffset();
    const localDateInMilliseconds = tDate.setHours(
        tDate.getHours() - offset / 60
    );
    tDate = new Date(localDateInMilliseconds);
    return tDate.getTime();
}
exports.GetTime = GetTime;
function GetDiff(timeZone) {
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
exports.GetDiff = GetDiff;
function GetDate(tDate) {
    const offset = GetDiff("America/Monterrey");
    const localDateInMilliseconds = tDate.setHours(
        tDate.getHours() + offset / 60
    );
    return new Date(localDateInMilliseconds);
}
exports.GetDate = GetDate;
function randomPassword(iLength) {
    let random = crypto_1.default.randomBytes(iLength).toString();
    let encrypt = crypto_js_1.default.AES.encrypt(
        random,
        process.env.AES_SECRET
    ).toString();
    let temporal = encrypt.slice(0, iLength);
    const HashPassword = bcryptjs_1.default.hashSync(
        temporal,
        bcryptjs_1.default.genSaltSync(10)
    );
    return {
        hash: HashPassword,
        plane: temporal,
    };
}
exports.randomPassword = randomPassword;
function RandomNumbers(iLength) {
    const numbers = [1, 2, 3, 5, 6, 7, 8, 9, 0];
    let result = [];
    for (let i = 0; i < iLength; i++) {
        result.push(numbers[Math.floor(Math.random() * 10)].toString());
    }
    return result.join("");
}
exports.RandomNumbers = RandomNumbers;
function PairEncrypt(data, key) {
    return crypto_1.default.publicEncrypt(key, Buffer.from(data));
}
exports.PairEncrypt = PairEncrypt;
function PairDecrypt(data, key) {
    return crypto_1.default.privateDecrypt(key, Buffer.from(data));
}
exports.PairDecrypt = PairDecrypt;
function FindDuplicates(arry) {
    return arry.filter((item, index) => arry.indexOf(item) !== index);
}
exports.FindDuplicates = FindDuplicates;
function FindIndexDuplicates(array) {
    return array.map((item, index) => {
        if (array.indexOf(item) !== index) {
            return index;
        }
    });
}
exports.FindIndexDuplicates = FindIndexDuplicates;
function OrdersFolio(sType) {
    const Prefix = {
        sales: "SO",
        purchase: "PO",
    };
    const Allows = Object.values(Prefix);
    if (!Allows.includes(sType)) return "0";
    let number = crypto_1.default.randomBytes(4).join("");
    let pincode = [];
    let loopTimes = number.length;
    for (let i = 0; i < loopTimes; i++) {
        let numeric = Date.now() - (parseInt(number) / 4) * (i + 1);
        let random = Math.floor(Math.random() * (numeric * (i + 1)))
            .toString()
            .split("");
        let index = Math.floor(Math.random() * random.length);
        pincode.push(random[index]);
    }
    return sType + "-" + pincode.join("").toString().slice(0, 6);
}
exports.OrdersFolio = OrdersFolio;
