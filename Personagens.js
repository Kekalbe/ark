// personagens.js

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
    },
    {
        clicar: document.querySelector('.virtuosa-p'),
        novoTextoName: 'Virtuosa',
        imagem: 'https://cdn.jsdelivr.net/gh/Kekalbe/ark@55b5840271070fe4a6e147c2c3f6dea7f910c86b/PersonagensSeletor/imagem_2025-05-02_210907593-removebg-preview.png',
        elementos: {
            name: document.querySelector('.name'),
            imagemElemento: document.querySelector('.imagem-p img')
        }
    },
    {
        clicar: document.querySelector('.ines-p'),
        novoTextoName: 'Ines',
        imagem: 'https://cdn.jsdelivr.net/gh/Kekalbe/ark@eba535a574fc50a089034cca5ceed40dd917fb14/PersonagensSeletor/Ines/Ines_Skin_2.png',
        elementos: {
            name: document.querySelector('.name'),
            imagemElemento: document.querySelector('.imagem-p img')
        }
    }
];

export default personagens;