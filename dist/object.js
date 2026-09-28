"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai = {
    name: 'masala chai',
    price: 20,
    ishot: true
};
let tea;
tea = {
    name: 'green tea',
    price: 15,
    ishot: false
};
const herablTea = {
    name: 'herbal tea',
    price: 25,
    ingredients: ['ginger', 'tulsi', 'lemon']
};
const smallCup = {
    size: 'small'
};
const UpdateChai = (updates) => {
    return { "updating": updates };
};
UpdateChai({ name: 'masala chai', price: 30 });
UpdateChai({ name: 'masala chai' });
UpdateChai({});
//# sourceMappingURL=object.js.map