jQuery(document).ready(function($) {
    const personagens = [
        {
            clicar: $('.viviana-p'),
            novoTextoName: 'Viviana',
            nomeImagem: 'viviana',
            imagemUrl: 'https://cdn.jsdelivr.net/gh/Kekalbe/ark@master/PersonagensSeletor/Viviana/Viviana_Elite_2.webp',
            elementos: {
                name: $('.name'),
                imagemElemento: $('.imagem-p')
            }
        },
        {
            clicar: $('.amiya-p'),
            novoTextoName: 'Amiya',
            nomeImagem: 'amiya',
            imagemUrl: 'https://cdn.jsdelivr.net/gh/Kekalbe/ark@master/PersonagensSeletor/Amiya%20Medic/Amiya_(Medic).webp',
            elementos: {
                name: $('.name'),
                imagemElemento: $('.imagem-p')
            }
        }
    ];

    personagens.forEach(function(personagem) {
        if (personagem.clicar.length === 0) {
            console.warn(`Elemento não encontrado para: ${personagem.novoTextoName}`);
            return;
        }

        personagem.clicar.on('click', function() {
            console.log(`Alterando imagem para: ${personagem.imagemUrl}`);

            // Troca o nome do personagem
            if (personagem.elementos.name.length > 0) {
                personagem.elementos.name.text(personagem.novoTextoName);
            } else {
                console.warn(`Elemento de nome não encontrado para: ${personagem.novoTextoName}`);
            }

            // Remove qualquer imagem anterior e configura a nova imagem
            if (personagem.elementos.imagemElemento.length > 0) {
                personagem.elementos.imagemElemento.fadeOut(300, function() {
                    // Após a animação de fadeOut (remover a imagem anterior), muda a imagem
                    personagem.elementos.imagemElemento.attr('src', personagem.imagemUrl);

                    // Reaparece a imagem com a nova (fadeIn)
                    personagem.elementos.imagemElemento.fadeIn(300, function() {
                        console.log('Imagem carregada com sucesso:', personagem.imagemUrl);
                    });
                });
            } else {
                console.warn(`Elemento de imagem não encontrado para: ${personagem.novoTextoName}`);
            }
        });
    });
});
