const personagens = [
    {
        clicar: document.querySelector('.viviana-p'),
        novoTextoName: 'Viviana',
        imagem: 'https://ark-1qo.pages.dev/PersonagensSeletor/Viviana_Elite_2.webp',
        elementos: {
            name: document.querySelector('.name'),
            imagemElemento: document.querySelector('.imagem-p')
        }
    },
    {
        clicar: document.querySelector('.amiya-p'),
        novoTextoName: 'Amiya',
        imagem: 'https://darkmoon.wuaze.com/wp-content/uploads/2025/03/Amiya_Medic-1.webp',
        elementos: {
            name: document.querySelector('.name'),
            imagemElemento: document.querySelector('.imagem-p')
        }
    }
];

// Coloque o restante do seu código aqui
personagens.forEach(function(personagem) {
    if (!personagem.clicar) {
        console.warn(`Elemento não encontrado para: ${personagem.novoTextoName}`);
        return;
    }

    personagem.clicar.addEventListener('click', function() {
        console.log(`Alterando imagem para: ${personagem.imagem}`);

        if (personagem.elementos.name) {
            personagem.elementos.name.textContent = personagem.novoTextoName;
        } else {
            console.warn(`Elemento de nome não encontrado para: ${personagem.novoTextoName}`);
        }

        if (personagem.elementos.imagemElemento) {
            personagem.elementos.imagemElemento.crossOrigin = "anonymous"; // Adicionando crossOrigin
            personagem.elementos.imagemElemento.src = personagem.imagem;
        } else {
            console.warn(`Elemento de imagem não encontrado para: ${personagem.novoTextoName}`);
        }
    });
});