const personagens = [
    {
        clicar: document.querySelector('.viviana-p'),
        novoTextoName: 'Viviana',
        imagem: 'https://cdn.jsdelivr.net/gh/Kekalbe/ark@master/PersonagensSeletor/Viviana/Viviana_Elite_2.webp',
        elementos: {
            name: document.querySelector('.name'),
            imagemElemento: document.querySelector('.imagem-p')
        }
    },
    {
        clicar: document.querySelector('.amiya-p'),
        novoTextoName: 'Amiya',
        imagem: 'https://cdn.jsdelivr.net/gh/Kekalbe/ark@master/PersonagensSeletor/Amiya%20Medic/Amiya_(Medic).webp',
        elementos: {
            name: document.querySelector('.name'),
            imagemElemento: document.querySelector('.imagem-p')
        }
    }
];

personagens.forEach(function (personagem) {
    if (!personagem.clicar) {
        console.warn(`Elemento não encontrado para: ${personagem.novoTextoName}`);
        return;
    }

    personagem.clicar.addEventListener('click', function () {
        console.log(`Alterando imagem para: ${personagem.imagem}`);

        if (personagem.elementos.name) {
            personagem.elementos.name.textContent = personagem.novoTextoName;
        } else {
            console.warn(`Elemento de nome não encontrado para: ${personagem.novoTextoName}`);
        }

        if (personagem.elementos.imagemElemento) {
            personagem.elementos.imagemElemento.crossOrigin = "anonymous"; // Configurar antes da troca
            personagem.elementos.imagemElemento.onload = function () {
                console.log("Imagem carregada com sucesso:", personagem.imagem);
            };
            personagem.elementos.imagemElemento.onerror = function () {
                console.error("Erro ao carregar imagem:", personagem.imagem);
            };
            personagem.elementos.imagemElemento.src = personagem.imagem;
        } else {
            console.warn(`Elemento de imagem não encontrado para: ${personagem.novoTextoName}`);
        }
    });
});