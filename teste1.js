document.addEventListener("DOMContentLoaded", function () {
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

        personagem.clicar.addEventListener('click', function () {
            console.log(`Alterando imagem para: ${personagem.imagem}`);

            if (personagem.elementos.name) {
                const nameElement = personagem.elementos.name;

                // Reinicia a animação corretamente
                nameElement.style.opacity = "0";
                nameElement.style.transform = "translateX(100px)";
                setTimeout(() => {
                    nameElement.textContent = personagem.novoTextoName;
                    nameElement.classList.remove('fade-in');
                    void nameElement.offsetWidth; // Força reflow
                    nameElement.classList.add('fade-in');
                    nameElement.style.opacity = "1"; // Garante visibilidade
                    nameElement.style.transform = "translateX(0)";
                }, 200);
            }

            if (personagem.elementos.imagemElemento) {
                const imgElement = personagem.elementos.imagemElemento;
                imgElement.removeAttribute('srcset');
                imgElement.crossOrigin = "anonymous";
                imgElement.src = personagem.imagem;

                imgElement.classList.remove('fade-in');
                void imgElement.offsetWidth;
                imgElement.classList.add('fade-in');
            }
        });
    });
});