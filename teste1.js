jQuery(document).ready(function($) {
    // Manipulador de clique para cada personagem
    $('.viviana-p').on('click', function() {
        changeCharacter('viviana');
    });

    $('.amiya-p').on('click', function() {
        changeCharacter('amiya');
    });

    function changeCharacter(character) {
        let newImageUrl;

        // Verifique todos os elementos img para ver se o seletor está correto
        console.log("Imagens disponíveis:", $('img'));

        // Tente selecionar diretamente a imagem com o data-id "ed5692c"
        let imgElement = $('img[data-id="ed5692c"]');
        if (imgElement.length === 0) {
            console.error('Imagem com data-id="ed5692c" não encontrada');
            return;
        }

        // Se a imagem foi encontrada, continue a troca
        let currentImageUrl = imgElement.attr('src');
        console.log("Imagem atual:", currentImageUrl);

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

        // Trocar o src da imagem
        imgElement.attr('src', newImageUrl);
        console.log("Imagem após troca:", imgElement.attr('src'));  // Verificando a troca
    }
});
