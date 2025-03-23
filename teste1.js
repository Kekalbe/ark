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

        const { name, imagemElemento } = personagem.elementos;

        // Troca do nome com animação
        if (name) {
            name.classList.remove('entradaNome', 'animatingTexto'); 
            name.style.opacity = "0"; // Garante que desapareça antes de mudar
            
            setTimeout(() => {
                name.textContent = personagem.novoTextoName;
                void name.offsetWidth; // Força reflow
                name.classList.add('animatingTexto');
            }, 50); // Pequeno delay para resetar a opacidade
        }

        // Troca da imagem com animação
        if (imagemElemento) {
            imagemElemento.removeAttribute('srcset'); // Remove srcset
            imagemElemento.crossOrigin = "anonymous"; // Mantém o crossOrigin

            imagemElemento.classList.remove('entradaImagem', 'animatingImagem');

            setTimeout(() => {
                imagemElemento.src = personagem.imagem;
                imagemElemento.alt = personagem.novoTextoName;
                imagemElemento.srcset = personagem.imagem;
                void imagemElemento.offsetWidth; // Força o reflow
                imagemElemento.classList.add('animatingImagem');
            }, 50);
        }
    });
});
