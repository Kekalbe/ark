jQuery(document).ready(function($) {
    // Manipulador de clique para cada personagem
    $('.viviana-p').on('click', function() {
        changeCharacter('viviana');
    });

    $('.amiya-p').on('click', function() {
        changeCharacter('amiya');
    });

    function changeCharacter(character) {
        // Selecionando a imagem com o novo data-id="43c34b5"
        let imgElement = $('img[data-id="43c34b5"]');

        // Verificando se a imagem foi encontrada
        if (imgElement.length === 0) {
            console.error('Imagem com data-id="43c34b5" não encontrada');
            return;
        } else {
            console.log('Imagem encontrada:', imgElement);
        }

        let newImageUrl;
        let currentImageUrl = imgElement.attr('src');
        console.log("Imagem atual:", currentImageUrl);

        // Definindo as novas imagens dependendo do personagem clicado
        switch (character) {
            case 'viviana':
                newImageUrl = 'https://cdn.jsdelivr.net/gh/Kekalbe/ark@master/PersonagensSeletor/Viviana/Viviana_Elite_2.webp';
                $('#name').text('Viviana');
                break;
            case 'amiya':
                newImageUrl = 'https://cdn.jsdelivr.net/gh/Kekalbe/ark@master/PersonagensSeletor/Amiya%20Medic/Amiya_(Medic).webp';
                $('#name').text('Amiya');
                break;
            default:
                console.log('Personagem desconhecido');
                return;
        }

        // Mudando o src da imagem apenas se o elemento foi encontrado
        imgElement.attr('src', newImageUrl);
        console.log("Imagem após troca:", imgElement.attr('src'));  // Verificando a troca
    }
});
