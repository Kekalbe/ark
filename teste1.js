document.addEventListener('DOMContentLoaded', function() {
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

    personagens.forEach(personagem => {
        if (!personagem.clicar) return;

        personagem.clicar.addEventListener('click', function() {
            console.log(`Alterando imagem para: ${personagem.imagem}`);

            if (personagem.elementos.name) {
                const nameElement = personagem.elementos.name;

                // Remove a classe para resetar a animação
                nameElement.classList.remove('fade-in');

                // Aguarda um curto tempo para garantir que a remoção foi aplicada antes de adicionar novamente
                requestAnimationFrame(() => {
                    nameElement.textContent = personagem.novoTextoName;
                    nameElement.classList.add('fade-in');
                });
            }

            // Atualiza a imagem
            if (personagem.elementos.imagemElemento) {
                const imgElement = personagem.elementos.imagemElemento;
                imgElement.removeAttribute('srcset');
                imgElement.crossOrigin = "anonymous";
                imgElement.src = personagem.imagem;

                // Remove e readiciona a classe para reiniciar a animação
                imgElement.classList.remove('fade-in');
                requestAnimationFrame(() => {
                    imgElement.classList.add('fade-in');
                });
            }
        });
    });
});
