document.addEventListener("DOMContentLoaded", function () {
    let personagemAtual = null;

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

    personagens.forEach(function(personagem) {
        if (!personagem.clicar) return;

        personagem.clicar.addEventListener('click', function() {
            if (personagemAtual === personagem.novoTextoName) {
                console.log(`Personagem ${personagem.novoTextoName} já está selecionado.`);
                return;
            }

            console.log(`Alterando para: ${personagem.novoTextoName}`);
            personagemAtual = personagem.novoTextoName;

            // Atualiza o nome com a animação
            if (personagem.elementos.name) {
                const nameElement = personagem.elementos.name;

                // Remove a classe de animação anterior
                nameElement.classList.remove('animar-name');
                
                // Força o reflow para reiniciar a animação
                void nameElement.offsetWidth;

                // Altera o nome APÓS um pequeno atraso
                setTimeout(() => {
                    nameElement.textContent = personagem.novoTextoName;
                    nameElement.classList.add('animar-name');
                }, 10); // Pequeno atraso para garantir que o texto mude antes da animação começar
            }

            // Atualiza a imagem com a animação
            if (personagem.elementos.imagemElemento) {
                const imgElement = personagem.elementos.imagemElemento;

                imgElement.classList.remove('animar-imagem');
                void imgElement.offsetWidth;
                imgElement.classList.add('animar-imagem');

                imgElement.removeAttribute('srcset');
                imgElement.crossOrigin = "anonymous";
                imgElement.src = personagem.imagem;
            }
        });
    });
});