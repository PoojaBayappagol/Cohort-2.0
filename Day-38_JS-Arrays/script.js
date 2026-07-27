let fruits=["apple","banana","orange"];

console.log(fruits[1]);

fruits.push("Mango");
fruits.unshift("Pineapple");

console.log(fruits);

fruits.splice(2,1,"kiwi");
console.log(fruits)

let arr1=[1,2,3,4,5,6,7,8,9];

console.log(arr1.slice(3,6));
console.log(arr1);

let names=["Zara","Meera","Bhavya","Vinay"];
console.log(names.sort());

console.log(names.sort().reverse());

let newarr=arr1.map(function(val){
    return val*val;
})

console.log(newarr);


let arr2=[5,12,8,20,56,6,34];
let newarr1=arr2.filter(function(val){
    return val>10;
})

console.log(newarr1);


let  newarr2=arr2.reduce(function(acc,val){
    return acc+val;
},0);

console.log(newarr2);

let newarr3=arr2.find(function(val){
    return val<10;
})

console.log(newarr3);


let marks=[23,56,78,34,35,67,98];

let newarr4=marks.some(function(val){
    return val<35;
});

console.log(newarr4);

let newarr5=marks.every(function(val){
    return val<90;
});

console.log(newarr5)


//DEstructuring the array

let student=["Sharma","Harsh"];
let [lastname,firstname]=student;

console.log(firstname);
console.log(lastname);

let num1=[1,2,3,4];
let num2=[5,6,7,8];

let allnum=[...num1, ...num2];
console.log(allnum)