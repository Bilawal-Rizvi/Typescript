interface Chai{
    flavour:string;
    price:number;
}


interface Discount{
    (price:number):number;
}

const applyDiscount:Discount = (price:number):number => price * 0.9;



interface TeaMachine{
    start():void;
    stop():void;
}


const teaMachine:TeaMachine = {
    start: () => console.log("Tea machine started"),
    stop: () => console.log("Tea machine stopped")
}
//  IndexSignature

interface Ratings{
    [key:string]:number;
}


const ratings:Ratings = {
    "Masala Chai":5,
    "Green Tea":4,
    "Black Tea":3
}


interface User{
    name:string;
}

interface User{
    age:number;
}


const user:User = {
    name:"John Doe",
    age:30
}

interface A{
    propA:string;
}
interface B{
    propB:number;
}

interface C extends A,B{
    propC:boolean;
}
