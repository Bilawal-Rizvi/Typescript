// class chai{
//     flavour: string;
//     price: number;
//     constructor(flavour: string, price: number){
//         this.flavour = flavour;
//         this.price = price;
//     }
// }


// const masalaChai = new chai("Ginger",30);
// masalaChai.flavour = 'Masala';
// console.log(`Flavour: ${masalaChai.flavour}, Price: ${masalaChai.price}`)
class chai{
    public flavour: string= "Ginger";
    private price: number= 30;
    revealPrice(): number{
        return this.price;
    }
}

class shop {
    protected chai:string = "chai";
  
}

class branch extends shop{
    getName(): string{
        return this.chai;
    }
}

class wallet{
    #balance: number = 100;
    getBalance(): number{
        return this.#balance;
    }
}


class capacity{
    readonly maxCapacity: number = 100;
    constructor(maxCapacity: number){
        this.maxCapacity = maxCapacity;
    }
}


class Modernchai{
    private _sugar = 2;

    get sugar(): number{
        return this._sugar;
    }
    set sugar(value: number){ 
        if (value < 0){
            throw new Error("Sugar cannot be negative");
        }else if (value > 5){
            throw new Error("Sugar cannot be more than 5");
        }
    }
}