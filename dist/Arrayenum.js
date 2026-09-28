"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ChainFlavours = [
    'Masala',
    'Ginger',
];
const menu = [{
        name: "Masala", price: 30
    }];
const table = [[1, 2, 4]];
let ChaiTuple = ['Masala', 30];
let chaiItems = ['Masala', 30];
var Chaitype;
(function (Chaitype) {
    Chaitype["MASALA"] = "Masala";
    Chaitype["GINGER"] = "Ginger";
})(Chaitype || (Chaitype = {}));
function CHai(type) {
    console.log(`Making ${type} chai`);
}
CHai(Chaitype.GINGER);
//# sourceMappingURL=Arrayenum.js.map