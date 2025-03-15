const personagens = [
    {
        clicar: document.querySelector('.viviana-p'),
        novoTextoName: 'Viviana',
        nomeImagem: 'viviana',
        elementos: {
            name: document.querySelector('.name'),
            imagemElemento: document.querySelector('.imagem-p')
        }
    },
    {
        clicar: document.querySelector('.amiya-p'),
        novoTextoName: 'Amiya',
        nomeImagem: 'amiya',
        elementos: {
            name: document.querySelector('.name'),
            imagemElemento: document.querySelector('.imagem-p')
        }
    }
];

const imagensPersonagens = {
    viviana: 'https://cdn.jsdelivr.net/gh/Kekalbe/ark@master/PersonagensSeletor/Viviana/Viviana_Elite_2.webp',
    amiya: 'https://cdn.jsdelivr.net/gh/Kekalbe/ark@master/PersonagensSeletor/Amiya%20Medic/Amiya_(Medic).webp'
};

personagens.forEach(function (personagem) {
    if (!personagem.clicar) {
        console.warn(`Elemento não encontrado para: ${personagem.novoTextoName}`);
        return;
    }

    personagem.clicar.addEventListener('click', function () {
        console.log(`Alterando imagem para: ${imagensPersonagens[personagem.nomeImagem]}`);

        if (personagem.elementos.name) {
            personagem.elementos.name.textContent = personagem.novoTextoName;
        } else {
            console.warn(`Elemento de nome não encontrado para: ${personagem.novoTextoName}`);
        }

        if (personagem.elementos.imagemElemento) {
            personagem.elementos.imagemElemento.crossOrigin = "anonymous"; // Configurar antes da troca
            personagem.elementos.imagemElemento.onload = function () {
                console.log("Imagem carregada com sucesso:", imagensPersonagens[personagem.nomeImagem]);
            };
            personagem.elementos.imagemElemento.onerror = function () {
                console.error("Erro ao carregar imagem:", imagensPersonagens[personagem.nomeImagem]);
            };
            personagem.elementos.imagemElemento.src = imagensPersonagens[personagem.nomeImagem];
        } else {
            console.warn(`Elemento de imagem não encontrado para: ${personagem.novoTextoName}`);
        }
    });
});
