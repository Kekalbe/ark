document.addEventListener("DOMContentLoaded", function () {
    let personagemAtual = null;

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

    personagens.forEach(function(personagem) {
        if (!personagem.clicar) return;

        personagem.clicar.addEventListener('click', function () {
            if (personagemAtual === personagem.novoTextoName) return;
            personagemAtual = personagem.novoTextoName;

            // Aplica animação ao nome
            if (personagem.elementos.name) {
                const el = personagem.elementos.name;
                el.classList.remove('animar-comum');
                void el.offsetWidth;
                el.textContent = personagem.novoTextoName;
                el.classList.add('animar-comum');
            }

            // Aplica animação à imagem
            if (personagem.elementos.imagemElemento) {
                const img = personagem.elementos.imagemElemento;
                img.classList.remove('animar-comum');
                void img.offsetWidth;
                img.src = personagem.imagem;
                img.classList.add('animar-comum');
            }
        });
    });
});