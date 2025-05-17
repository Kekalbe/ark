// main.js
import personagens from './Personagens.js';

personagens.forEach(function(personagem) {
    if (!personagem.clicar) return;

    personagem.clicar.addEventListener('click', function () {
        console.log(`Alterando para: ${personagem.novoTextoName}`);

        const { name, imagemElemento } = personagem.elementos;

        if (name) {
            // Remover e re-adicionar a classe para garantir que a animação seja executada a cada clique
            name.classList.remove('animatingTexto');
            // Forçar reflow para garantir que a animação seja reiniciada
            void name.offsetWidth;
            name.textContent = personagem.novoTextoName;
            name.innerHTML = personagem.novoTextoName;
            name.classList.add('animatingTexto');
        }

        if (imagemElemento) {
            // Reiniciar a animação da imagem
            imagemElemento.classList.remove('animatingImagem');
            // Forçar reflow para garantir que a animação seja reiniciada
            void imagemElemento.offsetWidth;
            imagemElemento.classList.add('animatingImagem');
            imagemElemento.src = personagem.imagem;
            imagemElemento.srcset = personagem.imagem;
        }
    });
});
