"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MyError extends Error {
    constructor(code, message, callstack) {
        super(message);
        this.name = "CustomError";
        this.statusCode = code;
        if (callstack)
            this.stack = callstack;
    }
}
exports.default = MyError;
