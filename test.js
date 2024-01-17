// // console.log("Hello");
// let arr = [1, 2, 3, 4];
// // console.log(Object.getPrototypeOf(arr));
// function Oj() {}

// Oj.prototype.eat = function (num) {
//   console.log("eat " + num);
// };

// const per = new Oj();
// per.eat(20);

// object will use new and array will use . operator
// Array.prototype.customfunc = () => {
//   for (let i = 0; i < this.length; i++) {
//     console.log(arr[i]);
//   }
// };
// const arr = [1, 23, 4, 5];
// arr.customfunc();

// call bind and appy
// let obj = { fname: "John", lname: "Doe" };
// const person = function (name, named) {
//   console.log(this.fname + this.lname + name + named);
// };
// person.apply(obj, ["check", "ert"]);

// var employee1 = { firstName: "John", lastName: "Rodson" };
// var employee2 = { firstName: "Jimmy", lastName: "Baily" };

// function invite(greeting1, greeting2) {
//   console.log(
//     greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
//   );
// }

// var inviteEmployee1 = invite.bind(employee1);
// var inviteEmployee2 = invite.bind(employee2);
// inviteEmployee1("Hello", "How are you?"); // Hello John Rodson, How are you?
// inviteEmployee2("Hello", "How are you?");

// const promises

// function delay(ms) {
//   const pr = new Promise((resolve, reject) => {
//     if (ms) {
//       setTimeout(() => {
//         resolve("You are done with it");
//       }, ms);
//     } else {
//       reject("NOT GOOD");
//     }
//   });

//   return pr;
// }
// console.log("working");
// delay(0)
//   .then((value) => alert(value))
//   .catch((err) => console.log(err));
