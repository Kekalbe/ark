const personagens = [
    {
        clicar: document.querySelector('.viviana-p'),
        novoTextoName: 'Viviana',
        imagem: 'https://cdn.jsdelivr.net/gh/Kekalbe/ark@refs/heads/master/PersonagensSeletor/Viviana/Viviana_Elite_2.webp',
        elementos: {
            name: document.querySelector('.name'),
            imagemElemento: document.querySelector('.imagem-p img'),
            imagemContainer: document.querySelector('.imagem-p')
        }
    },
    {
        clicar: document.querySelector('.amiya-p'),
        novoTextoName: 'Amiya',
        imagem: 'https://cdn.jsdelivr.net/gh/Kekalbe/ark@refs/heads/master/PersonagensSeletor/Amiya%20Medic/Amiya_(Medic).webp',
        elementos: {
            name: document.querySelector('.name'),
            imagemElemento: document.querySelector('.imagem-p img'),
            imagemContainer: document.querySelector('.imagem-p')
        }
    }
];

// Adiciona eventos de clique para cada personagem
personagens.forEach(function(personagem) {
    if (!personagem.clicar) return;

    personagem.clicar.addEventListener('click', function () {
        console.log(`Alterando para: ${personagem.novoTextoName}`);

        const { name, imagemElemento, imagemContainer } = personagem.elementos;

        // Troca do nome com animação
        if (name) {
            name.classList.remove('entradaNome', 'animatingTexto'); 
            
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    name.textContent = personagem.novoTextoName;
                    name.classList.add('animatingTexto');
                });
            });
        }

        // Troca da imagem com animação
        if (imagemElemento && imagemContainer) {
            imagemContainer.classList.remove('entradaImagem', 'animatingImagem'); 

            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    imagemElemento.src = personagem.imagem;
                    imagemElemento.alt = personagem.novoTextoName;
                    imagemElemento.srcset = personagem.imagem;
                    imagemContainer.classList.add('animatingImagem');
                });
            });
        }
    });
});
