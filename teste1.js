const personagens = [
    {
        clicar: document.querySelector('.viviana-p'),
        novoTextoName: 'Viviana',
        imagem: 'https://cdn.jsdelivr.net/gh/Kekalbe/ark@refs/heads/master/PersonagensSeletor/Viviana/Viviana_Elite_2.webp'
    },
    {
        clicar: document.querySelector('.amiya-p'),
        novoTextoName: 'Amiya',
        imagem: 'https://cdn.jsdelivr.net/gh/Kekalbe/ark@refs/heads/master/PersonagensSeletor/Amiya%20Medic/Amiya_(Medic).webp'
    }
];

// Seleciona os elementos fixos
const nameElement = document.querySelector('.name');
const imgElement = document.querySelector('.imagem-p img');

if (nameElement && imgElement) {
    personagens.forEach(personagem => {
        if (!personagem.clicar) return;

        personagem.clicar.addEventListener('click', function () {
            console.log(`Alterando para: ${personagem.novoTextoName}`);

            // Troca do nome com animação
            nameElement.classList.remove('fadeTrocaTexto');
            void nameElement.offsetWidth; // Força reflow para reiniciar a animação
            nameElement.textContent = personagem.novoTextoName;
            nameElement.classList.add('fadeTrocaTexto');

            // Troca da imagem com animação
            imgElement.classList.remove('fadeIn');
            void imgElement.offsetWidth; // Força reflow
            imgElement.src = personagem.imagem;
            imgElement.classList.add('fadeIn');
        });
    });
}
