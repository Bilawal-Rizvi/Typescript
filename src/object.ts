const chai ={
    name:'masala chai',
    price:20,
    ishot:true
}

let tea:{
    name:string,
    price:number,
    ishot:boolean
}

tea = {
    name:'green tea',
    price:15,
    ishot:false
}

type Tea = {
    name:string,
    price:number,
    ingredients:string[]
}

const herablTea:Tea={
    name:'herbal tea',
    price:25,
    ingredients:['ginger','tulsi','lemon']
}


type Cup={
    size:string,
}

const smallCup:Cup={
    size:'small'
}

// const BigCup:Cup = {size:'big',material:'glass'}

// smallCup = BigCup //error because smallCup is of type Cup and BigCup has an extra property 'material' which is not in Cup type

type Chai = {
    name:string,
    price:number,
    ishot:boolean
}

const UpdateChai=(updates:Partial<Chai>)=>{
    return {"updating":updates}
}



UpdateChai({name:'masala chai',price:30})
UpdateChai({name:'masala chai'})
UpdateChai({})



type Item ={
    name:string,
    price:number,
    ishot:boolean
}
type Address = {
    street:string,
    city:string,
    state:string,
    country:string
}

type Order = {
    items:Item[],
    address:Address
}