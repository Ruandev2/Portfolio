document.addEventListener('DOMContentLoaded',function() {
    fetch('projeto.json')
    .then(response => response.json())
    .then(projetos => {
        const projetosContainer = document.getElementById('projetosContainer');
        projetos.forEach(projeto => {
            const div = document.createElement('div');
            div.classList.add('projeto')
            div.innerHTML = `
            <h3>${ projeto.nomeProjeto}</h3>
            <img src="${ projeto.url}" alt="${projeto.description}">
            <p>${ projeto.description}</p>
            <a href="${projeto.urlSate}" target="_blank">${projeto.urlSate}</a>
        
        `;
        projetosContainer.appendChild(div);
        })  
        // Exibindo as fotgod pagina HTML
    })
    .catch( error =>console.error('Error ao carregar a fotos', error))

}) // Convertendo o objeto JavaScript em Json 

