// main.js
import personagens from './Personagens.js';

personagens.forEach(function(personagem) {
    if (!personagem.clicar) return;

    personagem.clicar.addEventListener('click', function () {
        console.log(`Alterando para: ${personagem.novoTextoName}`);

        const { name, imagemElemento } = personagem.elementos;

        if (name) {
            name.classList.add('animatingTexto');
            void name.offsetWidth;
            name.textContent = personagem.novoTextoName;
            name.innerHTML = personagem.novoTextoName;
            
        }

        if (imagemElemento) {
            imagemElemento.classList.add('animatingImagem');
            void imagemElemento.offsetWidth;
            imagemElemento.src = personagem.imagem;
            imagemElemento.srcset = personagem.imagem;
        }
    });
});