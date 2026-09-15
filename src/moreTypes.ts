let response:any = "32";
let numericlength = (response as string).length

let Value:any = "Name: John Doe";
Value = 23;
Value = true;
Value =2.4
Value.toUpperCase();
let newValue:unknown;
newValue = "Hello World";
newValue = 42;
if (typeof newValue === 'string'){
    newValue.toLowerCase();

    try{

    }catch(e){
        if (e instanceof Error){
            console.log(e.message);
        }
        console.log("An error occurred.");
    }
}

const data: unknown = "Hello, TypeScript!";
let message: string= data as string;

type  Role = "admin" | "user"|'guest' ;
  

function redirectRole(role:Role){
    if(role ==="admin")
    {
        console.log("Redirecting to admin dashboard...");
        return
    }
    if(role ==="user")
    {
        console.log("Redirecting to user dashboard...");
        return;
    }
    role;
}


