//SHALLOW copy

// let obj = {
//   firstName: "John",
//   lastName: "Doe",
//   address: {
//     street: "North 1st street",
//     city: "San Jose",
//     state: "CA",
//     country: "USA",
//   },
// };

// let newObj = obj;
// let newObj = { ...obj };
// let newObj = Object.assign({}, obj);
// const newObj = JSON.parse(JSON.stringify(obj));
// console.log(newObj);

// newObj.firstName = "abc";
// newObj.address.street = "thane";
// console.log(obj);
// console.log(newObj);

// DEEP copy

// let obj2 = {
//   firstname: "efc",
//   lastname: "qwe",
//   callName: function () {
//     return `${this.firstname}`;
//   },
// };

// console.log(obj2.callName());

// let newObj = JSON.parse(JSON.stringify(obj2));
// newObj.lastname = "dfg";
// console.log(obj2);
// console.log(newObj);

// use loadash for deep copy
