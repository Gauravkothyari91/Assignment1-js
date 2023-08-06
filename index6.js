let Uname = "Mithun";
let email = "mithun.s@pw.live";
let age = "21";

if(typeof Uname !== "string"){
    console.log("Name should be a string");
} else if(typeof email !== "string"){
    console.log("Email should be a string");
} else if(typeof age !== Number){
    console.log("Age should be a number");
} else{
    console.log("All details are correct.");
}