jQuery(document).ready(function($) {
    const personagens = [
        {
            clicar: $('.viviana-p'),
            novoTextoName: 'Viviana',
            nomeImagem: 'viviana',
            elementos: {
                name: $('.name'),
                imagemElemento: $('.imagem-p')
            }
        },
        {
            clicar: $('.amiya-p'),
            novoTextoName: 'Amiya',
            nomeImagem: 'amiya',
            elementos: {
                name: $('.name'),
                imagemElemento: $('.imagem-p')
            }
        }
    ];

    const imagensPersonagens = {
        viviana: 'https://cdn.jsdelivr.net/gh/Kekalbe/ark@master/PersonagensSeletor/Viviana/Viviana_Elite_2.webp',
        amiya: 'https://cdn.jsdelivr.net/gh/Kekalbe/ark@master/PersonagensSeletor/Amiya%20Medic/Amiya_(Medic).webp'
    };

    personagens.forEach(function (personagem) {
        if (personagem.clicar.length === 0) {
            console.warn(`Elemento não encontrado para: ${personagem.novoTextoName}`);
            return;
        }

        personagem.clicar.on('click', function () {
            console.log(`Alterando imagem para: ${imagensPersonagens[personagem.nomeImagem]}`);

            if (personagem.elementos.name.length > 0) {
                personagem.elementos.name.text(personagem.novoTextoName);
            } else {
                console.warn(`Elemento de nome não encontrado para: ${personagem.novoTextoName}`);
            }

            if (personagem.elementos.imagemElemento.length > 0) {
                personagem.elementos.imagemElemento.attr('crossOrigin', 'anonymous'); // Configurar antes da troca

                personagem.elementos.imagemElemento.on('load', function() {
                    console.log('Imagem carregada com sucesso:', imagensPersonagens[personagem.nomeImagem]);
                });

                personagem.elementos.imagemElemento.on('error', function() {
                    console.error('Erro ao carregar imagem:', imagensPersonagens[personagem.nomeImagem]);
                });

                personagem.elementos.imagemElemento.attr('src', imagensPersonagens[personagem.nomeImagem]);
            } else {
                console.warn(`Elemento de imagem não encontrado para: ${personagem.novoTextoName}`);
            }
        });
    });
});
