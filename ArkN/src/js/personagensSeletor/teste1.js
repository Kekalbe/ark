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
                    void nameEl.offsetWidth;
                    nameEl.textContent = personagem.novoTextoName;
                    nameEl.classList.add("animatingTexto");
                }

                // Troca imediata da imagem
                if (imgEl) {
                    imgEl.classList.remove("animatingImagem");
                    void imgEl.offsetWidth;
                    imgEl.src = personagem.imagem;
                    imgEl.srcset = personagem.imagem;
                    imgEl.classList.add("animatingImagem");

                    // Pré-carrega próxima imagem para evitar flicker futuro
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
