const personagens = [
        {
            clicar: document.querySelector('.viviana-p'),
            novoTextoName: 'Viviana',
            imagem: 'https://43ee0d29.ark-1qo.pages.dev/PersonagensSeletor/Viviana_Elite_2.webp',
            elementos: {
                name: document.querySelector('.name'),
                imagemElemento: document.querySelector('.imagem-p')
            }
        },
        {
            clicar: document.querySelector('.amiya-p'),
            novoTextoName: 'Amiya',
            imagem: 'https://43ee0d29.ark-1qo.pages.dev/PersonagensSeletor/Amiya_(Medic).webp',
            elementos: {
                name: document.querySelector('.name'),
                imagemElemento: document.querySelector('.imagem-p')
            }
        },
        {
            clicar: document.querySelector('.civilight-p'),
            novoTextoName: 'Civilight Eterna',
            imagem: 'https://43ee0d29.ark-1qo.pages.dev/PersonagensSeletor/Civilight_Eterna_Elite_2.webp',
            elementos: {
                name: document.querySelector('.name'),
                imagemElemento: document.querySelector('.imagem-p')
            }
        }
    ];

    // Coloque o restante do seu código aqui
    personagens.forEach(function(personagem) {
        personagem.clicar.addEventListener('click', function() {
            // Alterando os textos e outros dados
            personagem.elementos.name.textContent = personagem.novoTextoName;
            personagem.elementos.imagemElemento.src = personagem.imagem;
        });
    });