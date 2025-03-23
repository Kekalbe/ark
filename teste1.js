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
        console.log(`Alterando para: ${personagem.novoTextoName}`);

        // Atualiza o nome com animação
        if (personagem.elementos.name) {
            const nameElement = personagem.elementos.name;

            nameElement.classList.remove('fade-in');
            nameElement.style.opacity = "0"; // Some antes de mudar o texto
            setTimeout(() => {
                nameElement.textContent = personagem.novoTextoName;
                nameElement.classList.add('fade-in');
            }, 100); // Pequeno delay
        }

        // Atualiza a imagem com animação
        if (personagem.elementos.imagemElemento) {
            const imgElement = personagem.elementos.imagemElemento;
            
            imgElement.classList.remove('fade-in');
            imgElement.style.opacity = "0"; // Some antes de mudar a imagem
            setTimeout(() => {
                imgElement.src = personagem.imagem;
                imgElement.classList.add('fade-in');
            }, 90);
        }
    });
});