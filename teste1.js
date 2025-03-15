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

        // Verifique o src da imagem atual antes de qualquer troca
        let currentImageUrl = $('img[data-id="ed5692c"]').attr('src');
        console.log("Imagem atual:", currentImageUrl);

        switch (character) {
            case 'viviana':
                newImageUrl = 'https://cdn.jsdelivr.net/gh/Kekalbe/ark@master/PersonagensSeletor/Viviana/Viviana_Elite_2.webp?' + new Date().getTime();  // Adicionando um timestamp
                $('#name').text('Viviana');
                break;
            case 'amiya':
                newImageUrl = 'https://cdn.jsdelivr.net/gh/Kekalbe/ark@master/PersonagensSeletor/Amiya%20Medic/Amiya_(Medic).webp?' + new Date().getTime();  // Adicionando um timestamp
                $('#name').text('Amiya');
                break;
            default:
                console.log('Personagem desconhecido');
                return;
        }

        // Alterar o src da imagem com timestamp
        $('img[data-id="ed5692c"]').fadeOut(300, function() {
            $('img[data-id="ed5692c"]').attr('src', newImageUrl); // Mudando a imagem
            console.log("Imagem após troca:", $('img[data-id="ed5692c"]').attr('src'));  // Verificando a troca

            $('img[data-id="ed5692c"]').fadeIn(300, function() {
                console.log('Imagem carregada com sucesso:', newImageUrl);
            });
        });
    }
});
