// const teacher = {
//   firstname: "Minh",
//   lastname: "Thu",
// };

// function greet(greeting, message) {
//   return `${greeting} ${this.firstname} ${this.lastname}. ${message} `;
// }

// let result = greet.apply(teacher, [
//   "Em chào côooo ",
//   "Cô day môn gì thế ah ? Đã xem cô live stream  1 tiếng",
// ]);

// console.log(result);
// result = greet.call(
//   teacher,
//   "Em chào cô ",
//   "Cô day môn gì thế ah ? Đã xem cô live stream  1 tiếng"
// );

// console.log(result);







// const teacher = {
//   firstname: "Minh",
//   lastname: "Thu",
//   isOnline: false,
//   goOnline(){
//     this.isOnline = true,
//     console.log(` ${this.firstname} ${this.lastname} is Online`)
//   },
//   goOffline(){
//     this.isOffline = false,
//     console.log(` ${this.firstname} ${this.lastname} is Offline`)
//   }
// };


// const me ={
//     firstname: "Minh",
//     lastname: "Thu",
//     isOnline: false,
// }

// console.log('Teacher:  ', teacher.isOnline)
// teacher.goOnline()
// console.log('Teacher:  ', teacher.isOnline)

// console.log('=================')
// console.log('Student:  ', me.isOnline)
// teacher.goOnline.apply(me)
// console.log('Student:  ', me.isOnline)






function Animal(name, weight){
    this.name = name;
    this.weight = weight;

}
function Parrot(name, weight){
    Animal.apply(this, arguments);
    this.speak = function(){
        console.log('Nhà có khách ! ')
    }
}
const conVet = new Parrot('Vet', 3000)
console.log(conVet)










