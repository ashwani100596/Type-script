export {}
let message ="Welcome to the world of corona";
// console.log(message);


let x =10;
const y =20;

let sum;
const title ='Codevalution';

let isBeginner: boolean = true;
let total: number =0;
let name: string= "Vishawas";
let sentence: string= `My name is ${name}
I am beginner in typescript`;
console.log(sentence);
let n: null = null;
let u: undefined =undefined;
let isNew: boolean = null;
let myName: string =undefined;
let list1: number [] = [1,2,3];
let list2:Array<number> =[1,2,3];
let Person1:[string, number]= ["ashu", 20];
enum Color {red =5, green, blue};
let c: Color = Color.green;
console.log(c);

let randomValue: any =10;
randomValue = true;
randomValue = "Vishawas"

let myVariable:unknown =10;
function hasName(obj:any): obj is {name:string} {
    return !! obj &&
    typeof obj ==="object" &&
    "name" in obj
}
if(hasName(myVariable)){
    console.log(myVariable.name);
    
}
// (myVariable as string).toUpperCase();


let a;
a=10;
a= true;

let b=20;


let multiType: number | boolean;
 multiType =10;
 multiType=true;

 let anyType: any;
 anyType= 10;
 anyType= true;


 function  add(num1: number, num2?: number) : number{
     if (num2){
        return num1 + num2;
     }
     else{
        return num1;
     }
   
 }
add(5,10)
add (5);

interface Person {
    firstnme: string;
    lastName?: string;
}

function FullName (person: Person) {
    console.log(`${person.firstnme} ${person.lastName}`);
}
let p={
    firstnme:"Ashu",
    lastName:"kumar"
}
FullName(p);

class Employee {

    public employeeName: string;
    constructor(name: string){
        this.employeeName=name;
    }
greet(){
    console.log(`Good Morning ${this.employeeName}`); 
}
}
let emp1= new Employee('Vishawas')
console.log(emp1.employeeName);
emp1.greet();


class Manager extends Employee{
    constructor(managerName: string){
        super(managerName)
    }
    delegateWork(){
        console.log(`Manager delegating tasks`);
        
    }
}
let m1 =new Manager('Ashwani');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);

