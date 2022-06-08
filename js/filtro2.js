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
        let seccion = $('#seccion').offset().top,
        dos1= $('#dos1').offset().top,
        
        dos= $('#dos').offset().top,
        tres = $('#tres').offset().top,
        contacto = $('#contacto').offset().top;
        window.addEventListener('resize', function(){
        let seccion = $('#seccion').offset().top,
        dos1= $('#dos').offset().top,
        
       dos = $('#dos').offset().top,
        tres = $('#tres').offset().top,
        contacto = $('#contacto').offset().top;
       
    });
        $('#enlace-inicio').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        },600);
    });

    $('#enlace-seccion').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: seccion -100
        },600);
    });

    $('#enlace-dos1').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: dos1 -100
        },600);
    });

    $('#enlace-dos').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: dos -100
        },600);
    });

     $('#enlace-tres').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: tres -100
        },600);
    });

    });