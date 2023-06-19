// function random(){
//     console.log(Math.random)
// }
// random.call()

// const teacher = {
//     firstname: 'Minh',
//     lastname :'Thu'
// }
// const me = {
//     firstname: 'Son',
//     lastname : 'Dang',
//     showFullName(){
//         console.log(`${this.firstname} ${this.lastname}`)
//     }
// }

// me.showFullName.call( teacher )




// 'use strict';
//     this.firstname = 'Son',
//     this.lastname = 'Dang',
//     function showFullName(){
//         console.log(`${this.firstname} ${this.lastname}`)
//     }


// showFullName.call(this)





//OOP

// function Animals(name, weight){
//     this.name = name
//     this.weight = weight
// }

// function Chicken(name,weight, legs){
//     Animals.call(this, name, weight)
//     this.legs = legs
// }

// const sondang = new Chicken('son dang', 66, 2)
// console.log(sondang)



// console.log(1,2,3,4,1,1,2)
function logger(){
    
    const arr = Array.prototype.slice.call(arguments)
 
    arr.forEach(element => {
        console.log(element) 
    });

    
    // const arr = Array.prototype.forEach.call(arguments, item => {
    //     console.log(item)
    // })
    // console.log(arr)

    // const cars = ['bmw', 'honda']
    // cars.forEach(car =>{
    //     console.log(car)
    // })

}

logger( 1,2,3,4,5)