jQuery(document).ready(function($) {
    // Manipulador de clique para cada personagem
    $('.viviana-p').on('click', function() {
        changeCharacter('viviana');
    });

    $('.amiya-p').on('click', function() {
        changeCharacter('amiya');
    });

    function changeCharacter(character) {
        switch (character) {
            case 'viviana':
                $('#img').attr('src', 'https://cdn.jsdelivr.net/gh/Kekalbe/ark@master/PersonagensSeletor/Viviana/Viviana_Elite_2.webp');
                $('#name').text('Viviana');
                break;
            case 'amiya':
                $('#img').attr('src', 'https://cdn.jsdelivr.net/gh/Kekalbe/ark@master/PersonagensSeletor/Amiya%20Medic/Amiya_(Medic).webp');
                $('#name').text('Amiya');
                break;
            default:
                console.log('Personagem desconhecido');
                break;
        }
    }
});
