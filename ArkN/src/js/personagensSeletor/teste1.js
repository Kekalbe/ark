async function S() {
    try {
        const personagens = await (await fetch(
            "https://cdn.jsdelivr.net/gh/Kekalbe/ark@8e820f21d0e923382c3d48e11e7c616c59b7b19f/ArkN/dist/personagens.json"
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
                    void nameEl.offsetWidth;
                    nameEl.textContent = personagem.novoTextoName;
                    nameEl.classList.add("animatingTexto");
                }

                // Troca de imagem sem piscada
                if (imgEl) {
                    const novaImg = new Image();
                    novaImg.src = personagem.imagem;
                    novaImg.srcset = personagem.imagem;

                    novaImg.onload = () => {
                        imgEl.classList.remove("animatingImagem");
                        void imgEl.offsetWidth;
                        imgEl.src = novaImg.src;
                        imgEl.srcset = novaImg.srcset;
                        imgEl.classList.add("animatingImagem");
                    };

                    // Caso a imagem já esteja no cache
                    if (novaImg.complete) {
                        novaImg.onload();
                    }

                    // Pré-carrega próxima imagem (opcional)
                    const tmpImg = new Image();
                    tmpImg.src = personagem.imagem;
                }
            });
        });

    } catch (erro) {
        console.error("Erro ao carregar personagens:", erro);
    }
}

S();
