function carregar() {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      const resultado = document.querySelector("#results");
      data.map((d) => {
        const cardsummary = document.createElement("div");
        cardsummary.classList.add("card-summary");

        const icon = document.createElement("img");
        icon.src = d.icon;

        const categoria = document.createElement('h3')
        categoria.textContent = d.category

        const score = document.createElement('p')
        score.textContent = d.score

        cardsummary.appendChild(icon)
        cardsummary.appendChild(categoria)
        cardsummary.appendChild(score)
        resultado.appendChild(cardsummary)
        resultado.innerHTML += '<p>/100</p>'
      });
    });
}

