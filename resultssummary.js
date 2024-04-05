
let reaction = document.querySelector('#red')
let memory = document.querySelector('#yellow') 
let verbal = document.querySelector('#green')
let visual= document.querySelector('#blue')

function botão(){

    fetch("data.json").then((response)=> {
        response.json().then((data) =>{
           data.results.map((result)=>{
            
        
           })
        })
    })
}