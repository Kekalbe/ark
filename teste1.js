// main.js
import personagens from './Personagens.js';

personagens.forEach(function(personagem) {
    if (!personagem.clicar) return;

    personagem.clicar.addEventListener('click', function () {
        console.log(`Alterando para: ${personagem.novoTextoName}`);

        const { name, imagemElemento } = personagem.elementos;

        if (name) {
            name.classList.remove('animatingTexto');
            void name.offsetWidth;
            name.textContent = personagem.novoTextoName;
            name.innerHTML = personagem.novoTextoName;
            name.classList.add('animatingTexto');
        }

        if (imagemElemento) {
            imagemElemento.removeAttribute('srcset');
            imagemElemento.crossOrigin = "anonymous";

            imagemElemento.classList.remove('entradaImagem', 'animatingImagem');
            void imagemElemento.offsetWidth;

            imagemElemento.src = personagem.imagem;
            imagemElemento.alt = personagem.novoTextoName;
            imagemElemento.srcset = personagem.imagem;
            imagemElemento.classList.add('animatingImagem');
        }
    });
});