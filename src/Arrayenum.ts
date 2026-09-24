const ChainFlavours: string[] = [
    'Masala',
    'Ginger',
]

type Chai ={
    name: string,
    price:number
}

const menu:Chai[] = [{
    name:"Masala", price: 30
}]

const table:number[][]= [[1,2,4]]


let ChaiTuple: [string, number] = ['Masala', 30]
let chaiItems: [name: string, price: number]= ['Masala',30]


enum Chaitype {
    MASALA = 'Masala',
    GINGER = 'Ginger'
}


function CHai (type: Chaitype){
  console.log(`Making ${type} chai`);
}



CHai(Chaitype.GINGER)