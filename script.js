<script>
jQuery(document).ready(function ($) {

    /// Acessibilidade ///////////////////////////////////////////////////////////////////////


    $('body:not(".mobile") #uerj-vlibras').click(function () {
        $('.link-vlibras').toggleClass('visivel');
    });
    
    $(document).on('click', '.mobile #uerj-vlibras', function () {
        window.open('http://www.vlibras.gov.br/', '_blank');

    });


    // Alto contraste
    var carragouEstiloAltoContraste = 0;

    if (localStorage.getItem("alto_contraste") == 1) {
        $('body').addClass('alto_contraste');
        $('head').append('<link id="estilo_alto_contraste" href="' + location.protocol + '//' + window.location.hostname + '/wp-content/uploads/acessibility/contrast.css" type="text/css" rel="stylesheet">');
        carragouEstiloAltoContraste++;
    }

    $('#alto_contraste').click(function () {
        if ($('body.alto_contraste').length > 0) {
            $('body').removeClass('alto_contraste');
            localStorage.setItem("alto_contraste", 0);
        } else {
            if (carragouEstiloAltoContraste == 0) {
                $('head').append('<link id="estilo_alto_contraste" href="' + location.protocol + '//' + window.location.hostname + '/wp-content/uploads/acessibility/contrast.css" type="text/css" rel="stylesheet">');
                carragouEstiloAltoContraste++;
            }
            $('body').addClass('alto_contraste');
            localStorage.setItem("alto_contraste", 1);
        }

    });

    // tamanho da fonte ////////////

    var tamanho_minimo = parseInt($('html').css('font-size'));
    var tamanho_maximo = tamanho_minimo + 5;

    if (localStorage.getItem("tamanho_fonte_uerj")) {
        var tamanho = localStorage.getItem("tamanho_fonte_uerj");
        $('html').css('font-size', tamanho + 'px');
    }

    $('#aumenta_fonte').click(function () {
        var tamanho_fonte = parseInt($('html').css('font-size'));
        if (tamanho_maximo === tamanho_fonte) {
            return false;
        }
        var tamanho_novo_fonte = tamanho_fonte + 1;
        $('html').css('font-size', tamanho_novo_fonte + 'px');
        localStorage.setItem("tamanho_fonte_uerj", tamanho_novo_fonte);
    });

    $('#diminui_fonte').click(function () {
        var tamanho_fonte = parseInt($('html').css('font-size'));
        if (tamanho_minimo === tamanho_fonte) {
            return false;
        }
        var tamanho_novo_fonte = tamanho_fonte - 1;
        $('html').css('font-size', tamanho_novo_fonte + 'px');
        localStorage.setItem("tamanho_fonte_uerj", tamanho_novo_fonte);
    });

    $('#reset_fonte').click(function () {
        $('html').removeAttr('style');
        localStorage.removeItem("tamanho_fonte_uerj");
    });

    // Icones Acessibilidade
    var tamanho_acessibilidade = 0;
    var icones_acessibilidade = 0;
    $('.icones-acessibilidade a').each(function () {
        tamanho_acessibilidade += $(this).find('i').outerWidth();
        icones_acessibilidade++;
    });
    $('#aciona_acesssibilidade').click(function () {

        $('.icones-acessibilidade.aberto').width($(this).find('i').outerWidth());
        $('.icones-acessibilidade').toggleClass('aberto');
        $('.icones-acessibilidade.aberto').outerWidth(tamanho_acessibilidade + icones_acessibilidade * 6 + 20);

    });
});
</script>
