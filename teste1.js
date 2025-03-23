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

        // Atualiza o nome e aplica animação corretamente
        if (personagem.elementos.name) {
            const nameElement = personagem.elementos.name;
            nameElement.textContent = personagem.novoTextoName;

            // Remove e adiciona a classe para forçar a reexecução da animação
            nameElement.classList.remove('fade-in');
            void nameElement.offsetWidth; // Força o reflow
            nameElement.classList.add('fade-in');
        }

        // Atualiza a imagem e aplica animação corretamente
        if (personagem.elementos.imagemElemento) {
            const imgElement = personagem.elementos.imagemElemento;
            imgElement.removeAttribute('srcset'); // Remove srcset
            imgElement.crossOrigin = "anonymous"; // Mantém o crossOrigin
            imgElement.src = personagem.imagem; // Define a nova imagem

            // Remove e adiciona a classe para reiniciar a animação
            imgElement.classList.remove('fade-in');
            void imgElement.offsetWidth; // Força o reflow
            imgElement.classList.add('fade-in');
        }
    });
});