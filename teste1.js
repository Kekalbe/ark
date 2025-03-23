const personagens = [
    {
        clicar: document.querySelector('.viviana-p'),
        novoTextoName: 'Viviana',
        imagem: 'https://cdn.jsdelivr.net/gh/Kekalbe/ark@refs/heads/master/PersonagensSeletor/Viviana/Viviana_Elite_2.webp',
    },
    {
        clicar: document.querySelector('.amiya-p'),
        novoTextoName: 'Amiya',
        imagem: 'https://cdn.jsdelivr.net/gh/Kekalbe/ark@refs/heads/master/PersonagensSeletor/Amiya%20Medic/Amiya_(Medic).webp',
    }
];

// Seleciona os elementos globais (que mudam)
const nameElement = document.querySelector('.name');
const imgElement = document.querySelector('.imagem-p img');

// Adiciona eventos de clique para cada personagem
personagens.forEach(personagem => {
    if (!personagem.clicar) return;

    personagem.clicar.addEventListener('click', function () {
        console.log(`Alterando para: ${personagem.novoTextoName}`);

        // Remove a animação atual para garantir a reinicialização
        nameElement.classList.remove('fadeTrocaTexto');
        imgElement.classList.remove('fadeIn');

        // Garante a remoção da animação antes de adicionar novamente
        void nameElement.offsetWidth;
        void imgElement.offsetWidth;

        // Atualiza o nome e imagem
        nameElement.textContent = personagem.novoTextoName;
        imgElement.src = personagem.imagem;

        // Aplica as novas animações
        nameElement.classList.add('fadeTrocaTexto');
        imgElement.classList.add('fadeIn');
    });
});

// Remove a classe de animação quando terminar
nameElement.addEventListener("animationend", () => {
    nameElement.classList.remove("fadeTrocaTexto");
});

imgElement.addEventListener("animationend", () => {
    imgElement.classList.remove("fadeIn");
});