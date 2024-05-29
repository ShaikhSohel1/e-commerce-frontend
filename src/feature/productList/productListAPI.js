export function fetchCount(amount =1){
    return new Promise((resolve) =>{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
        resolve(data)
    })
}