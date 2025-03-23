document.addEventListener("DOMContentLoaded", function () {
    let personagemAtual = null; // Armazena o personagem selecionado atualmente

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
                return; // Evita repetição da animação no mesmo personagem
            }

            console.log(`Alterando para: ${personagem.novoTextoName}`);
            personagemAtual = personagem.novoTextoName; // Atualiza o personagem atual

            // Atualiza o nome com a classe de animação
            if (personagem.elementos.name) {
                personagem.elementos.name.classList.remove('animar'); 
                void personagem.elementos.name.offsetWidth; // Reseta a classe forçando reflow
                personagem.elementos.name.classList.add('animar');
                personagem.elementos.name.textContent = personagem.novoTextoName;
            }

            // Atualiza a imagem com a classe de animação
            if (personagem.elementos.imagemElemento) {
                personagem.elementos.imagemElemento.classList.remove('animar');
                void personagem.elementos.imagemElemento.offsetWidth; // Reseta a classe forçando reflow
                personagem.elementos.imagemElemento.classList.add('animar');
                personagem.elementos.imagemElemento.removeAttribute('srcset');
                personagem.elementos.imagemElemento.crossOrigin = "anonymous";
                personagem.elementos.imagemElemento.src = personagem.imagem;
            }
        });
    });
});