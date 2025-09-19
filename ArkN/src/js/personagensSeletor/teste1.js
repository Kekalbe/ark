async function S() {
    try {
        const personagens = await (await fetch(
            "https://cdn.jsdelivr.net/gh/Kekalbe/ark@e7a1941443b096556b95f787c21bb0633825d9e7/ArkN/dist/personagens.json"
        )).json();

        personagens.forEach(personagem => {
            const clicar = document.getElementById(personagem.id);
            const nameEl = document.querySelector(".name");
            const imgEl = document.querySelector(".imagem-p img");

            if (!clicar) return;

            clicar.addEventListener("click", () => {
                console.log(`Alterando para: ${personagem.novoTextoName}`);

                // Troca de nome com animação
                if (nameEl) {
                    nameEl.classList.remove("animatingTexto");
                    void nameEl.offsetWidth; // força reflow
                    nameEl.textContent = personagem.novoTextoName;
                    nameEl.classList.add("animatingTexto");
                }

                // Pré-carrega a imagem antes de atualizar o elemento real
                if (imgEl) {
                    const tmpImg = new Image();
                    tmpImg.src = personagem.imagem;
                    tmpImg.onload = () => {
                        imgEl.classList.remove("animatingImagem");
                        void imgEl.offsetWidth; // força reflow
                        imgEl.src = tmpImg.src;
                        imgEl.srcset = tmpImg.src;
                        imgEl.classList.add("animatingImagem");
                    };
                }
            });
        });

    } catch (erro) {
        console.error("Erro ao carregar personagens:", erro);
    }
}

S();
