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
        imagem: 'https://cdn.jsdelivr.net/gh/Kekalbe/ark@7b41b71bd988742eb03c1ea2f43a28e54743d83e/PersonagensSeletor/__virtuosa_arknights_drawn_by_vxdrq__sample-3d6058c312f18b8f4d8de8b072b28a8a-removebg-preview.png',
        elementos: {
            name: document.querySelector('.name'),
            imagemElemento: document.querySelector('.imagem-p img')
        }
    }
];

export default personagens;