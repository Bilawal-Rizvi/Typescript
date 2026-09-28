"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class chai {
    flavour;
    price;
    constructor(flavour, price) {
        this.flavour = flavour;
        this.price = price;
    }
}
const masalaChai = new chai("Ginger", 30);
masalaChai.flavour = 'Masala';
console.log(`Flavour: ${masalaChai.flavour}, Price: ${masalaChai.price}`);
//# sourceMappingURL=oop.js.map