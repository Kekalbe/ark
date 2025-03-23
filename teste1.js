const personagens = [
    {
        clicar: document.querySelector('.viviana-p'),
        novoTextoName: 'Viviana',
        imagem: 'https://cdn.jsdelivr.net/gh/Kekalbe/ark@refs/heads/master/PersonagensSeletor/Viviana/Viviana_Elite_2.webp',
        elementos: {
            name: document.querySelector('.name'),
            imagemElemento: document.querySelector('.imagem-p img')
        }
    },
    {
        clicar: document.querySelector('.amiya-p'),
        novoTextoName: 'Amiya',
        imagem: 'https://cdn.jsdelivr.net/gh/Kekalbe/ark@refs/heads/master/PersonagensSeletor/Amiya%20Medic/Amiya_(Medic).webp',
        elementos: {
            name: document.querySelector('.name'),
            imagemElemento: document.querySelector('.imagem-p img')
        }
    }
];

// Adiciona eventos de clique para cada personagem
personagens.forEach(function(personagem) {
    if (!personagem.clicar) return;

    personagem.clicar.addEventListener('click', function () {
        console.log(`Alterando imagem para: ${personagem.imagem}`);

        // Atualiza o nome e aplica animação
        if (personagem.elementos.name) {
            const nameElement = personagem.elementos.name;
            nameElement.textContent = personagem.novoTextoName;

            // Força a reexecução da animação
            nameElement.style.animation = "none";
            void nameElement.offsetWidth;
            nameElement.style.animation = "fadeIn 1s ease-out forwards";
        }

        // Atualiza a imagem e aplica animação
        if (personagem.elementos.imagemElemento) {
            const imgElement = personagem.elementos.imagemElemento;
            imgElement.removeAttribute('srcset'); // Remove srcset
            imgElement.crossOrigin = "anonymous"; // Mantém o crossOrigin
            imgElement.src = personagem.imagem; // Define a nova imagem

            // Força a reexecução da animação
            imgElement.style.animation = "none";
            void imgElement.offsetWidth;
            imgElement.style.animation = "fadeIn 1s ease-out forwards";
        }
    });
});