function carregar() {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      const resultado = document.querySelector("#results");
      
      data.map((d,key) => {
        const cardsummary = document.createElement("div");
        cardsummary.classList.add("card-summary");

        const icon = document.createElement("img");
        icon.src = d.icon;

        const categoria = document.createElement('h3')
        categoria.textContent = d.category

        const score = document.createElement('p')
        score.textContent = d.score

        //i am adding the weight of the font and the color using a id on the const score
        score.setAttribute('id', 'score')
        //here i am using a setAttribute to change dinamycally the styles of each results
         cardsummary.setAttribute("id",'resultscss'+key)
        cardsummary.appendChild(icon)
        cardsummary.appendChild(categoria)
        cardsummary.appendChild(score)
        resultado.appendChild(cardsummary)

        cardsummary.innerHTML += '<p>/100</p>'
      });
      
    
    });
    
}


