const personagens = [
    {
        classe: 'viviana-p',
        nome: 'Viviana',
        imagem: 'https://ark-1qo.pages.dev/PersonagensSeletor/Viviana_Elite_2.webp'
    },
    {
        classe: 'amiya-p',
        nome: 'Amiya',
        imagem: 'https://cdn.jsdelivr.net/gh/Kekalbe/ark@refs/heads/master/PersonagensSeletor/Amiya%20Medic/Amiya_(Medic).webp'
    }
];

// Selecionando elementos HTML
const nomeElemento = document.querySelector('.name');
const imagemElemento = document.querySelector('.elementor-element-43c34b5').style.backgroundImage = "url('https://arknights.wiki.gg/images/0/0b/Viviana_Skin_1.png?format=original')";

// Adicionando evento de clique para cada personagem
personagens.forEach(personagem => {
    const botao = document.querySelector(`.${personagem.classe}`);
    if (!botao) {
        console.warn(`Botão não encontrado para: ${personagem.nome}`);
        return;
    }

    botao.addEventListener('click', () => {
        switch (personagem.nome) {
            case 'Viviana':
            case 'Amiya':
                nomeElemento.textContent = personagem.nome;
                imagemElemento.src = personagem.imagem;
                imagemElemento.crossOrigin = "anonymous"; // Se necessário
                console.log(`Alterado para ${personagem.nome}`);
                break;
            default:
                console.warn(`Personagem não reconhecido: ${personagem.nome}`);
        }
    });
});
