let summary = document.querySelector('.summary')
let reaction = document.querySelector('.reaction')
let memory = document.querySelector('.memory') 
let verbal = document.querySelector('.verbal')
let visual= document.querySelector('.visual')

fetch("data.json").then((response)=> {
    response.json().then((data) =>{
        data.results.map((el)=>{
           reaction.innerHTML += `${score}`
        })
    })
})