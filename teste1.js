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
            imagem: 'https://raw.githubusercontent.com/Kekalbe/ark/refs/heads/master/PersonagensSeletor/Amiya%20Medic/Amiya_(Medic).webp',
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
            personagem.elementos.imagemElemento.setAttribute('src', personagem.imagem);
        } else {
            console.warn(`Elemento de imagem não encontrado para: ${personagem.novoTextoName}`);
        }
    });
});
