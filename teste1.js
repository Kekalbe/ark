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

    personagem.clicar.addEventListener('click', function() {
        console.log(`Alterando imagem para: ${personagem.imagem}`);

        // Aplica a animação no nome e na imagem
        if (personagem.elementos.name) {
            personagem.elementos.name.classList.remove('fade-in'); // Remove a classe para reiniciar a animação
            void personagem.elementos.name.offsetWidth; // Reflow para resetar a animação
            personagem.elementos.name.classList.add('fade-in'); // Aplica a animação
            personagem.elementos.name.textContent = personagem.novoTextoName;
        }

        if (personagem.elementos.imagemElemento) {
            personagem.elementos.imagemElemento.classList.remove('fade-in');
            void personagem.elementos.imagemElemento.offsetWidth;
            personagem.elementos.imagemElemento.classList.add('fade-in');
            personagem.elementos.imagemElemento.removeAttribute('srcset');
            personagem.elementos.imagemElemento.crossOrigin = "anonymous";
            personagem.elementos.imagemElemento.src = personagem.imagem;
        }
    });
});