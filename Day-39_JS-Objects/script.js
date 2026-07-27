console.log("Hello world..")

let obj={
    name:"Harsh",
    age:26,
    isStudent:true,
};
console.log(obj)


let obj1={
    name:"Harsh",
    23:26,
    true:true,
};

console.log(obj1)

console.log(obj.name)
console.log(obj['name'])

let user='age';
console.log(obj[user]);

let name='Pooja';

let obj2={
    name:name,
};

console.log(obj2);

let role=['admin'];

let obj3={
    [role]:"Harsh",
}
console.log(obj3);

let user1={
    name:"harsh",
    address:{
        pin:384745,
        location:{
            lat:45.6,
            lan:56.7,
        },
    },
};

console.log(user1.address.location.lat);
let {lat,lan}=user1.address.location;
console.log({lat,lan}=user1.address.location);


let obj4={
    name:"harsh",
    age:34,
    location:"Bhopal",
    city:"Panjab",
};

for(let key in obj4){
    console.log(key,obj4[key]);
 }

 let course={
     Javascript:"4 weeks",
     html:"2 weeks",
 }

 console.log(Object.entries(course));
