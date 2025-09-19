async function carregarPersonagens() {
    try {
        const resposta = await fetch('/personagens.json');
        const personagens = await resposta.json();

        personagens.forEach(personagem => {
            const clicar = document.getElementById(personagem.id);

            // Os elementos de destino (nome e imagem)
            const name = document.querySelector('.name');
            const imagemElemento = document.querySelector('.imagem-p img');

            if (!clicar) return;

            clicar.addEventListener('click', () => {
                console.log(`Alterando para: ${personagem.novoTextoName}`);

                // Troca de nome com animação
                if (name) {
                    name.classList.remove('animatingTexto');
                    void name.offsetWidth; // força reflow
                    name.textContent = personagem.novoTextoName;
                    name.classList.add('animatingTexto');
                }

                // Troca de imagem com animação
                if (imagemElemento) {
                    imagemElemento.classList.remove('animatingImagem');
                    void imagemElemento.offsetWidth;

                    imagemElemento.src = personagem.imagem;
                    imagemElemento.srcset = personagem.imagem;

                    imagemElemento.onload = () => {
                        imagemElemento.classList.add('animatingImagem');
                    };

                    if (imagemElemento.complete) {
                        imagemElemento.classList.add('animatingImagem');
                    }
                }
            });
        });

    } catch (erro) {
        console.error('Erro ao carregar personagens:', erro);
    }
}

carregarPersonagens();
