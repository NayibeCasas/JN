$(function () {
    $('.filter').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        let valor = $(this).attr('data-nombre');
        if (valor == 'todos') {
            $('.cont-work').show('1000');
        } else {
            $('.cont-work').not('.' + valor).hide('1000');
            $('.cont-work').filter('.' + valor).show('1000');
        }
    });
        let jn = $('#jn').offset().top,
        prototipo = $('#prototipo').offset().top,
        usuarios = $('#usuarios').offset().top,
    
        contacto = $('#contacto').offset().top;
        window.addEventListener('resize', function(){
        let jn = $('#jn').offset().top,
        prototipo = $('#prototipo').offset().top,
        usuarios = $('#usuarios').offset().top,
    
        contacto = $('#contacto').offset().top;
       
    });
        $('#enlace-inicio').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        },600);
    });

   

    $('#enlace-jn').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: jn -100
        },600);
    });

    $('#enlace-prototipo').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: prototipo-100
        },600);
    });

     $('#enlace-usuarios').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: usuarios -100
        },600);
    });

    $('#enlace-contacto').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: contacto -100
        },600);
    });
    });