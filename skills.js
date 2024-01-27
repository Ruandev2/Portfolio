    document.addEventListener('DOMContentLoaded',function() {
        fetch('skill.json')
        .then(response => response.json())
        .then(skills => {
            const skillContainer = document.getElementById('skillContainer');
            skills.forEach(skill => {
                const div = document.createElement('div');
                div.classList.add('skill')
                div.innerHTML = `
                <h3>${ skill.nomeSkill}</h3>
                <img src="${ skill.url}" alt="${skill.description}">
                <p>${ skill.description}</p>
            
            `;
            skillContainer.appendChild(div);
            })  
            // Exibindo as fotgod pagina HTML
        })
        .catch( error =>console.error('Error ao carregar a fotos', error))
            // Exibindo as fotgod pagina HTML       
});

        


