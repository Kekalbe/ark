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
    if (!personagem.clicar) {
        console.warn(`Elemento não encontrado para: ${personagem.novoTextoName}`);
        return;
    }

    personagem.clicar.addEventListener('click', function() {
        console.log(`Alterando imagem para: ${personagem.imagem}`);

        // Atualiza o nome, se existir
        if (personagem.elementos.name) {
            personagem.elementos.name.textContent = personagem.novoTextoName;
        } else {
            console.warn(`Elemento de nome não encontrado para: ${personagem.novoTextoName}`);
        }

        // Atualiza a imagem e remove srcset
        if (personagem.elementos.imagemElemento) {
            personagem.elementos.imagemElemento.removeAttribute('srcset'); // Remove srcset
            personagem.elementos.imagemElemento.crossOrigin = "anonymous"; // Mantém o crossOrigin
            personagem.elementos.imagemElemento.src = personagem.imagem; // Define a nova imagem
        } else {
            console.warn(`Elemento de imagem não encontrado para: ${personagem.novoTextoName}`);
        }
    });
});
