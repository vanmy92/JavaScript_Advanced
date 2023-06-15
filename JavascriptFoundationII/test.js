const promise = new Promise((resolve, reject)=>{
    if(true){
        resolve('stuff worked ')

    }else{
        reject('Error, it broke ')
    }
})
const promise2 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 100, 'HIII')
})


const promise3 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 1000, 'Pookie')
})

const promise4 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 5000, 'Is it me you are looking for ?')
})
Promise.all([promise, promise2, promise3, promise4])
    .then(values => {
        console.log(values)
    })



promise
    .then(result => result + '!')
    .then(result2 => result2 + '!')
    .catch(() => console.log('error !'))
    .then(result3 =>{
        console.log(result3 + '!')
    })

   
const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]    

Promise.all(ulrs.map(url=>{
    return fetch(url).then(resp => resp.json())
})).then(results => {
    console.log(results[0])
    console.log(results[1])
    console.log(results[3])

})


movePlayer(100, 'Left')
    .then(()=> movePlayer(400, 'Left'))
    .then(()=> movePlayer(10, 'Right'))
    .then(()=> movePlayer(300, 'Left')) 

    async function playerStart(){
        const fisrtMove = await movePlayer(100, 'Left')
        await movePlayer(400,'Left')
        await movePlayer(10,'Right')
        await movePlayer(300,'Left')
    }


fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(console.log)