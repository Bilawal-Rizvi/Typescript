"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let response = "32";
let numericlength = response.length;
let Value = "Name: John Doe";
Value = 23;
Value = true;
Value = 2.4;
Value.toUpperCase();
let newValue;
newValue = "Hello World";
newValue = 42;
if (typeof newValue === 'string') {
    newValue.toLowerCase();
    try {
    }
    catch (e) {
        if (e instanceof Error) {
            console.log(e.message);
        }
        console.log("An error occurred.");
    }
}
const data = "Hello, TypeScript!";
let message = data;
function redirectRole(role) {
    if (role === "admin") {
        console.log("Redirecting to admin dashboard...");
        return;
    }
    if (role === "user") {
        console.log("Redirecting to user dashboard...");
        return;
    }
    role;
}
//# sourceMappingURL=moreTypes.js.map