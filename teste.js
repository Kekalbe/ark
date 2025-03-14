document.addEventListener('DOMContentLoaded', function() {
    const personagens = [
        {
            clicar: document.querySelector('.viviana-p'),
            novoTextoName: 'Viviana',
            imagem: 'Personagens Seletor/Viviana_Elite_2.webp',
            elementos: {
                name: document.querySelector('.name'),
                imagemElemento: document.querySelector('.imagem')
            }
        },
        {
            clicar: document.querySelector('.amiya-p'),
            novoTextoName: 'Amiya',
            imagem: 'Personagens Seletor/Amiya_(Medic).webp',
            elementos: {
                name: document.querySelector('.name'),
                imagemElemento: document.querySelector('.imagem')
            }
        },
        {
            clicar: document.querySelector('.civilight-p'),
            novoTextoName: 'Civilight Eterna',
            imagem: 'Personagens Seletor/Civilight_Eterna_Elite_2.webp',
            elementos: {
                name: document.querySelector('.name'),
                imagemElemento: document.querySelector('.imagem')
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
});