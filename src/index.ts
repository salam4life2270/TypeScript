let sales = 123_456_789;
let course = 'Typescript';
let is_published = true;

// The code below explains the 'any' type
let render = (document: any) => {
    console.log(document)
}
//Arrays if every element is a number then we can remove the type annotation : number[] 

let numbers = [1,3, 4]
let number = [] //type here will be any. we have to apply an anotation to avoid error because element could be any type

numbers.forEach(n => n.toExponential)

//Tuple recommende we use only two values for tuple
//1, 'Mosh'
let user: [number, string] = [1, 'Mosh',]; // first has to be number and second has to be string
user.push(1);// Now I can push this element into the array which is not good for ts

//Enums used to group a list of related element or content
const small = 1;
const medium = 2;
const large = 3;
// PascalCase
const enum Size { Small = 1, Medium, Large };
let mySize: Size = Size.Medium;
console.log(mySize) // In the terminal,run tsc and then node dist/index.js. We see mySize logs 2

//Functions
const calculateTax = (income: number, taxYear = 2022): number => {
  
if (taxYear < 2022)
return income * 1.2;
return income * 1.3;
}

calculateTax(10_000, 2022)

//Objects and //Type Aliases
type Employee = {
    readonly id: number,
     name: string
     retire: (date: Date) => void

}
let employee: Employee= { 
    id: 1, 
    name:' Mosh',
    retire: (date: Date) => {
        console.log(date)
    }
};

//Union type
const kgToLbs =( weight: number | string ): number => {
// We use a technique called narrowing to narrow down to a spwcific type
if (typeof weight === 'number') 
    return weight * 2.2;
    else
    return parseInt(weight) * 2.2;
}
kgToLbs(10)
kgToLbs('10kg')

// Intersection type
let weight: number & string;
type Draggable = {
    drag: () => void
};

type Resizable = {
    resize: () => void
};

type UIWidget = Draggable & Resizable; // type intersection in action
let textBox: UIWidget = {
    drag: () => {},
    resize: () => {},
}
// Limiting the value of variables. we use Literal (exact,specific)
type Quantity = 50 | 100;
let quantity: Quantity = 100;

//Nullable Types
const greet = (name: string | null) => {
    if (name)
console.log(name.toUpperCase());
else
console.log('Hola');

}
greet(null); //we can run this in JS but our program is going to crash


//Optional Chaining
type Customer = {
    birthday?: Date
};
const getCustomer = (id: number): Customer | null | undefined => {
return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
//if (customer !== null && customer !== undefined) instead of this if statement, we can use the optional property access operator
console.log(customer?.birthday.getFullYear());

//Optional element access operator
// customers?.[0]

//Optional call
let log: any = null;
log?.('a');