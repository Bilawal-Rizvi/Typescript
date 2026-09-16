type ChaiOrder = {
    type: string;
    sugar: number;
    strong: boolean;
};

function makeChai (order:ChaiOrder){
    console.log('Making a chai with the following order:');
}

function serveChai (order:ChaiOrder){
    console.log('Serving the chai with the following order:');
}

type Tearecipe = {
    water: number;
    milk: number;
    sugar: number;
}

// class Chai implements Tearecipe {
// //     water = 200;
// //     milk = 100;
// //     sugar = 10;
// // }

interface Cupsize {
    size: "small" | "medium" | "large";
}

class ChaiCup implements Cupsize {
    size: "small" | "medium" | "large" = "medium";
}



type BaseChai = {tealeaves: number}
type MasalaChai = {spices?: string}
type Chai = BaseChai & MasalaChai;
const cup : Chai = {
    tealeaves: 5
};