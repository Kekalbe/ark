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

        const nameElement = personagem.elementos.name;
        if (nameElement) {
            // Aplica o fade-out
            nameElement.classList.add('fade-out');

            // Aguarda o fim da animação para mudar o texto e aplicar fade-in
            nameElement.addEventListener('transitionend', function atualizarTexto() {
                nameElement.textContent = personagem.novoTextoName;
                nameElement.classList.remove('fade-out');
                nameElement.classList.add('fade-in');

                // Remove o listener para evitar múltiplas execuções
                nameElement.removeEventListener('transitionend', atualizarTexto);
            }, { once: true }); // 'once' garante que só execute uma vez
        }
    });
});
