const reaction = document.querySelector('.summary-grades');

async function buscaData() {
    const conexao = await fetch("./data.json");
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}


const lista = document.querySelector('summary-grades');

function constroiCard(category, score, icon) {
    const listaConstruida = document.createElement('div');
    listaConstruida.className = `grade ${category.toLowerCase()}`;
    listaConstruida.innerHTML = 
                    `
                    <p> <img src=${icon} alt=""> ${category}</p>
                    <p> <span class="graded">${score}</span> <span class="grade-total">/ 100</span></p>
                        
                    `
    return listaConstruida;
    
}

async function listaData() {
    try {
        const listaApi = await buscaData();
        listaApi.forEach(elemento => reaction.appendChild(
            constroiCard(elemento.category, elemento.score, elemento.icon)));
    } catch {
        reaction.innerHTML = `<h2 class='mensagem__titulo'>It was not possible to load data from DataBase.`;
    }
}

listaData();
