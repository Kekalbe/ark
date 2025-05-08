// main.js
import personagens from './Personagens.js';

personagens.forEach(function(personagem) {
    if (!personagem.clicar) return;

    personagem.clicar.addEventListener('click', function () {
        console.log(`Alterando para: ${personagem.novoTextoName}`);

        const { name, imagemElemento } = personagem.elementos;

        if (name) {
            name.classList.remove('entradaNome', 'animatingTexto');
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

// Menu Estrutura

const btn = document.querySelector('.menu-bpg');
const menuV = document.querySelector('.menu-v');
const BannerP = document.querySelector('banner-pbg');

// Adiciona o evento de clique no botão
btn.addEventListener('click', () => {
    // Alterna a classe 'active' no menu
menuV.classList.toggle('active');
        
        if (menuV.classList.contains('active')) {
            BannerP.style.opacity = '0.5';
        } else {
            BannerP.style.opacity = '1';
        }
});