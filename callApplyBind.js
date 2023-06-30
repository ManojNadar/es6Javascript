// CALL METHOD

// let myObj = {
//   name: "qwe",
//   age: 56,
//   objDetails: function () {
//     console.log(this.name);
//   },
// };

// myObj.objDetails();

// let myObj2 = {
//   name: "bob",
//   age: 56,
// };

// // myObj2.objDetails();
// // function borrowing
// myObj.objDetails.call(myObj2);

// let user = {
//   name: "xyz",
//   age: 22,
//   location: "thane",
// };

// function userDetails(state, city) {
//   console.log(this, state, city);
// }
// // call can add multiple strings or values
// userDetails.call(user, "maharashtra", "mumbai");

// console.log(user.state);

// APPLY METHOD

// let user2 = {
//   name: "abc",
//   age: 32,
//   location: "CSMT",
// };

// function userDetails(state, city) {
//   console.log(this, state, city);
// }
// // apply uses array []
// userDetails.apply(user2, ["maharashtra", "mumbai"]);

// BIND

// let user3 = {
//   name: "abc",
//   age: 33,
//   location: "dombivli",
// };

// function userDetails(state, city) {
//   console.log(this, state, city);
// }

// let bindUser = userDetails.bind(user, ["maharashtra", "mumbai"]);

// bindUser();
