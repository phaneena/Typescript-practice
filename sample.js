//infer type
// let username="haneena"
// username=20
//defining type
// let username:string="hani"
// let age:number=20
// let success:boolean=true
var skills = ["html", "css", "js"];
// let count:number[]=[1,2,3,4]
// let userdetail:{name:string,age:number}={
//     name:"haniii",
//     age:20
// }
//interface
// interface Details{
//     name:string,
//     age:number,
//     salary:number,
// }
// let userDetails:Details={
//     name:"hanii",
//     age:22,
//     salary:20000
// }
// console.log(userDetails)
// union
// let skill:(string | number)[]=["html","css",12,34]
// console.log(skill)
//optional
// type Details={
//     name:string,
//     age?:number
// }
// var user:Details={
//     name:"hnnnn"
// }
// type Details={
//     name:string,
//     age:number,
//     salary?:number
//     getName?:()=>void
// }
// let userDe:Details={
//     name:"haniiii",
//     age:20,
// }
// function getUsername(userDe:Details){
//     return userDe.name 
// }
// console.log(getUsername(userDe)) 
// function add(num1:number|string,num2:number|string):number|string{
//     if(typeof num1==="string" || typeof num2==="string"){
//         return num1+ ""+num2
//     }
//     return num1+num2
// }
// function add1(num1:any,num2:any):any{
//     return num1+num2
// }
// console.log(add1(2,2))
// console.log(add1("2","2"))
//function overloading
// function add(num1:number,num2:number):number
// function add(num1:string,num2:string):string
// function add(num1:any,num2:any):any{
//     return num1+num2
// }
// console.log(add(2,2))
// console.log(add("2","2"))
//generics
function getAge(age) {
    return age;
}
console.log(getAge("23"));
console.log(getAge(23));
