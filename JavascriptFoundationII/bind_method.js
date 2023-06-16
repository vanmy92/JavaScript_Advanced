
// this.firstname = "minh"
// this.lastname =  "thu"

// const teacher = {
//     firstname: "minh",
//     lastname: "thao",
//     getfullName(){
//         console.log(`${this.firstname} ${this.lastname}`)
//     }
// }
// const button = document.querySelector('button')
// // button.onclick = function () {
// //     teacher.getfullName()
// // }

// button.onclick = teacher.getfullName.bind(teacher)




const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

// console.log($('#heading').innerHTML)
const app = (() =>{
    const cars = ['BMW']
    const root = $('#root')
    const input = $('#input')
    const submit = $('#submit')

    return {
        add(car){
            cars.push(car)
        },
        delete(index){
            cars.splice(index, 1)
        },
        render(){
            const html = cars.map((car, index) =>
                `<li> ${car}
                    <span class="delete" data-index=${index}>&times</span>
                </li>`
            ).join('')
            root.innerHTML = html
        },
        handleDelete(e){
            const deleteBtn = e.target.closest('.delete')
            if(deleteBtn){
                const index= deleteBtn.dataset.index
                this.delete(index)
                this.render()
            }
        },
        innit(){

            //handle DOM Events
            submit.onclick= () =>{
                const car = input.value
                this.add(car)
                this.render()
                input.value =null
                input.focus()
            }
            root.onclick= this.handleDelete.bind(this)
            this.render()
        }
    }



})()
app.innit()

// Delegate 