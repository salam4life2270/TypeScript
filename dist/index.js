"use strict";
let sales = 123456789;
let course = 'Typescript';
let is_published = true;
let render = (document) => {
    console.log(document);
};
let numbers = [1, 3, 4];
let number = [];
numbers.forEach(n => n.toExponential);
let user = [1, 'Mosh',];
user.push(1);
const small = 1;
const medium = 2;
const large = 3;
;
let mySize = 2;
console.log(mySize);
const calculateTax = (income, taxYear = 2022) => {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
};
calculateTax(10000, 2022);
let employee = {
    id: 1,
    name: ' Mosh',
    retire: (date) => {
        console.log(date);
    }
};
const kgToLbs = (weight) => {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
};
kgToLbs(10);
kgToLbs('10kg');
let weight;
let textBox = {
    drag: () => { },
    resize: () => { },
};
let quantity = 100;
const greet = (name) => {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log('Hola');
};
greet(null);
const getCustomer = (id) => {
    return id === 0 ? null : { birthday: new Date() };
};
let customer = getCustomer(1);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
//# sourceMappingURL=index.js.map