// main.js
import personagens from './Personagens.js';

personagens.forEach(function(personagem) {
    if (!personagem.clicar) return;

    personagem.clicar.addEventListener('click', function () {
        console.log(`Alterando para: ${personagem.novoTextoName}`);

        const { name, imagemElemento } = personagem.elementos;

        // Troca de nome com animação
        if (name) {
            // Remover e re-adicionar a classe para garantir que a animação seja executada a cada clique
            name.classList.remove('animatingTexto');
            void name.offsetWidth;  // Forçar reflow para garantir que a animação seja reiniciada
            name.textContent = personagem.novoTextoName;
            name.innerHTML = personagem.novoTextoName;
            name.classList.add('animatingTexto');
        }

        // Troca de imagem com animação
        if (imagemElemento) {
            // Primeiro, remova a animação existente
            imagemElemento.classList.remove('animatingImagem');
            
            // Forçar reflow para garantir que a animação seja reiniciada
            void imagemElemento.offsetWidth;
            
            // Defina o novo 'src' da imagem
            imagemElemento.src = personagem.imagem;
            imagemElemento.srcset = personagem.imagem;

            // Após a imagem ser carregada, adicione a animação
            imagemElemento.onload = function() {
                // Agora a imagem foi carregada, aplique a animação de entrada
                imagemElemento.classList.add('animatingImagem');
            };

            // Caso a imagem já tenha sido carregada (caso o src seja o mesmo ou já tenha carregado antes), dispare a animação imediatamente
            if (imagemElemento.complete) {
                imagemElemento.classList.add('animatingImagem');
            }
        }
    });
});

// Teste 3.