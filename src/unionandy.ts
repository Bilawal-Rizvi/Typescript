function getChai(kind: string | number){
    if(typeof kind === "string"){
        return `Making a cup of ${kind} tea.`;
    }
    return `Making a cup of ${kind} tea.`;

}
function serverOOrder(msg?: string){
    if(msg) {
        return `Order received: ${msg}`;
    }   
    return `No order received.`;
}
type Order ={
    type: string,
    sugar: number;
}

function  isOrder(obj: any): obj is Order {
    return obj && typeof obj.type === "string" && typeof obj.sugar === "number";
}


function ProcessOrder(order:Order | string){
    if(isOrder(order)){
        // Process the order
        return `Processing order for ${order.type} tea with ${order.sugar} sugar.`;
    }
}