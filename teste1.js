document.addEventListener('DOMContentLoaded', function() {
    const personagens = [
        {
            clicar: document.querySelector('.viviana-p'),
            novoTextoName: 'Viviana',
            imagem: 'https://ark-1qo.pages.dev/PersonagensSeletor/Viviana_Elite_2.webp',
            elementos: {
                name: document.querySelector('.name'),
                imagemElemento: document.querySelector('.imagem')
            }
        },
        {
            clicar: document.querySelector('.amiya-p'),
            novoTextoName: 'Amiya',
            imagem: 'https://ark-1qo.pages.dev/PersonagensSeletor/Amiya_(Medic).webp',
            elementos: {
                name: document.querySelector('.name'),
                imagemElemento: document.querySelector('.imagem')
            }
        },
        {
            clicar: document.querySelector('.civilight-p'),
            novoTextoName: 'Civilight Eterna',
            imagem: 'https://ark-1qo.pages.dev/PersonagensSeletor/Civilight_Eterna_Elite_2.webp',
            elementos: {
                name: document.querySelector('.name'),
                imagemElemento: document.querySelector('.imagem')
            }
        }
    ];

    personagens.forEach(function(personagem) {
        if (personagem.clicar) { // Verifica se o botão existe antes de adicionar o evento
            personagem.clicar.addEventListener('click', function() {
                if (personagem.elementos.name && personagem.elementos.imagemElemento) {
                    personagem.elementos.name.textContent = personagem.novoTextoName;
                    personagem.elementos.imagemElemento.src = personagem.imagem;
                }
            });
        } else {
            console.warn(`Elemento ${personagem.novoTextoName} não encontrado!`);
        }
    });
});
