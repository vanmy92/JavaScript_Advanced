// function printName() {
//   return 'Andre anedd'
// }

// function findName() {
//     function a(){

//     }
//   return printName()
// }

// function sayMyName() {
//   return findName()
// }

// console.log(sayMyName())

// a()

// function a() {
//   console.log('hi')
// }

// function a() {
//   console.log('bye')
// }

// ================Hoisting==========

// one = undefined;
// var one = 1;
// var one = 2;
// console.log(one)

// a()

// // function a() {
// //   console.log('hi')
// // }

// // function a() {
// //   console.log('bye')
// // }

// //================Hoisting 2==========

// var favouritefood = undefined;
// var favouritefood = "graphs";

// var foodThroughts = undefined;

// favouritefood = "graphs";

// foodThroughts = function () {
//   console.log("Original favourite food:" + favouritefood);

//      favouritefood = "Sushi";

//   console.log("New favourite food:" + favouritefood);
// };

// foodThroughts();

// ================Function Invocation==========

// // function expression
// var canada = () => {
//   console.log('cold')
// }
// //function declaration
// function india() {
//   console.log(arguments)
//   console.log('warm')
// }

// // canada()
// india()

// function marry(person1, person2){
//     console.log('arguments', arguments)
//     console.log(Array.from(arguments))
//     return `${person1} is now married to ${person2}`
// }
// console.log(marry('Tim', 'Tina'))

// function marr2(...args){
//     console.log('arguments', arguments)
//     console.log(Array.from(arguments))
//     return `${args[0]} is now married to ${args[1]}`
// }
// marr2('Tim', 'Tina')

// //================arguments Keyword==========

// //arguments
// // function marry(person1, person2) {
// //   console.log('arguments',
// //     arguments)
// //   console.log(Array.from(arguments))
// //   return `${person1} is now married to ${person2}`
// // }

// // marry('a', 'b')

// // function marry2(...args) {
// //   console.log('arguments',
// //     args)
// //   console.log(Array.from(arguments))
// //   return `${args[0]} is now married to ${args[1]}`
// // }

// // marry2('a', 'b')

// //================Variable evironment==========
// function two(){
//   var isValid;  //underfined
// }

// function one(){
//   var isValid = true; //local environment
//   two();  // new EC
// }

// var isValid = false;
// console.log(one());

// //================return==========

// // let login = function(password){
// //   if(password === "123123"){
// //     return "successfull logged in";
// //   }
// //   else{
// //     return "password incorrect, please try again";
// //   }
// // };

// // console.log(login("123123"));

// //================Scope chain==========

// var x = 'x'
// function findName() {
//   console.log(x)
//   var b = 'b';
//   return printName();
// }

// function printName() {
//   console.log(x)
//   var c = 'c';
//   return 'Andreio Neagoie';
// }

// function sayMyName() {
//   var a = 'a';
//   return findName();
// }

// console.log(sayMyName())

// function sayMyName(){
//   var a = 'a';
//   return function findName(){
//     var b = 'b';
//     console.log(c);
//     return function printName(){
//       var c = 'c';
//     // console.log(a);
//       return 'Andreio Neagoie';
//     }
//   }
// }

// console.log(sayMyName()()())

//================JS is weird==========

// function weired (){
//   var height = 50;
//   return height
// }
// console.log(weired())

// function scope
// vs
// block scope

//================Function Scope vs Block Scope==========

// function loop(){
//    for(var i = 0; i < 5; i++){
//      console.log(i)
//    }
//   console.log('final', i)
// }
// loop()

// (function(){
//   var a = 1
// }());

// function(){}()

//================This keyword==========
// 1. gives methods acess to their object
// 2. execute same code for multiple objects

// const obj = {
//   name: "Billy",
//   sing() {
//     return "lalala Billy " + this.name;
//   },
//   singAgain(){
//     return " qwqwqw  Billy   " + this.sing() + "!"
//   }
// };
// console.log(obj.singAgain())

// function importPerson() {
//   console.log(this.name + '!');
// }
// const name = "Sunnyiasdafsd";

// const obj1 = {
//   name: "Cassy",
//   importPerson: importPerson
// };

// const obj2 = {
//   name: "Jaccd",
//   importPerson: importPerson
// };
// importPerson()
// obj1.importPerson()
// // obj2.importPerson()

// console.log(importPerson())

//================Exercise: Dynamic Scope vs Lexical Scope==========

// const obj = {
//   name : "billy",
//   sing () {
//     console.log('a',this);
//     var anotherFunc = function(){
//       console.log('b',this)
//     }
//     anotherFunc()
//   }
// }

//================call(), apply()==========
// function a(){
//   console.log('hi')
// }

// a.apply()

// const wizard = {
//   name: "merlin",
//   health: 50,
//   heal(num1, num2) {
//     return (this.health += num1 + num2);
//   },
//   // heal() {
//   //   return this.health = 1000;
//   // },
// };

// const archer = {
//   name: "robin hood",
//   health: 30,
// };

// console.log("1", archer);
// console.log(wizard.heal.call(archer, 50,30))

// console.log('2')
// const healArchrt = wizard.heal.bind(archer, 1, 1);
// healArchrt();
// console.log("2", archer);

//================function currying==========

// function multiple (a,b) {
//   return a*b
// }

// let multipleByTwo = multiple.bind(this,2)

// console.log(multipleByTwo(4))

// let multipleByTen = multiple.bind(this,10)

// console.log(multipleByTen(4))

//================this Keyword==========
// var b = {
//   name: 'jay',
//   say() { console.log(this) }
// }

// var c = {
//   name: 'jay',
//   say() { return function() { console.log(this) } }
// }

// var d = {
//   name: 'jay',
//   say() { return () => console.log(this) }
// }

// b.say()
// console.log(`----`)
// c.say()
// console.log(`----`)
// c.say()()
// console.log(`----`)
// console.log(d.say())

//================Section OverView==========

// console.log(typeof Symbol('just me'))
// console.log(typeof 5)
// console.log(typeof true)
// console.log(typeof 'to be or not to be')
// console.log(typeof undefined)
// console.log(typeof null)
// console.log(typeof {})
// console.log(typeof [])
// console.log(typeof function(){})
// console.log(true.toString())

//================Array.isArry()==========

// console.log(Array.isArray(['1']))

//================Pass By Value vs Pass By Reference==========

// var a = 5
// var b = a

// b++

// let obj =  { a: 'a', b: 'b', c: 'c' }
// let clone = obj
// let clone = Object.assign({}, obj)
// console.log(clone)

// obj.c= 5
// console.log(clone)

// var c = [1,2,3,4,5]
// var d=c
// d.push(1341234)
// console.log(c)
// console.log(d)

// console.log(a)
// console.log(b)
// let obj1 = {
//     name:'yao',
//     passsword:'123'
// }
// let obj2 = obj1
// obj2.passsword = 'easypeasy'

// console.log(obj1)
// console.log(obj2)

//===============Functions Are Objects==========
// const obj = {
//   two () {
//     return 2;
//   },
// };

// console.log(obj.two())


// function three(){

//     return 3
// }
// console.log(three.call())


// const four =  new Function('return 4')
// console.log(four())



//===============Fisrt Class Citizens==========
// //1
//     var stuff = function(){

//     }
// //2
// function a (fn){
//     fn()
// }

// a(function(){
//     console.log('hi there')
// })
// //3
// function b (){
//     return function c(){
//         console.log('bye')
//     }
// }

// console.log(b()())



//==============Higher Order Function==========




// const giveAccessTo = (name) => 'Access Greanted to ' + name

// function authentication(verify){
//     let arry = []
//     for(let i = 0; i < verify; i++){
//         arry.push(i)
//     }
//     return giveAccessTo(person.name)
// }
// function sing(person){
//     return 'la la la my name in ' + person.name
// }
// function letPerson(person, fn){
//     if(person.level==='admin'){
//        return fn(person)
//     }
//     else if(person.level==='user'){
//         return fn(person)
//     }

// }


// console.log(letPerson({level: 'admin', name:'Tiasdfadsm'}, sing) )



// const multiplyBy = function (num1){
//     return function(num2){
//         return num1*num2
//     }
// }

// const multiplyBy = (num1) => (num2) => num1*num2


// const multiplyByTwo = multiplyBy(2)
// const multiplyByFive = multiplyBy(5)

// console.log(multiplyByTwo(4))
// console.log(multiplyByTwo(10))
// console.log(multiplyByFive(6))

// console.log(multiplyBy(6)(4))


//==============closures==========

