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
// Generics


function wrapInArray<T>(value:T):T[]{
    return [value]
}

wrapInArray("Hello");
 
function pair<T,U>(t:T,u:U):[T,U]{
    return [t,u]
}


interface Box<T>{
    value:T;
}



const box:Box<string> = {
    value:"Hello"
}

const box2:Box<number> = {  
    value:42
   }

   interface Apipromise<T>{
    name:string;
    data:T;
   }

const res: Apipromise<{flavour:string}> = {
    name:"Chai",
    data:{flavour:"Masala"}
}