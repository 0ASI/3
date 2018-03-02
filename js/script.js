//document.addEventListener('DOMContentLoaded', function(){
//
//   
//
//    var resetElement = document.querySelector('.reset');
//    if(resetElement) {
//        resetElement.addEventListener('click', function() {
//            document.getElementById('typed')._typed.reset();
//        });
//    }
//
//});



$(document).ready(function () {

    Typed.new("#typed", {
        stringsElement: document.getElementById('typed-strings'),
        typeSpeed: 200,
        backDelay: 800,
        loop: true,
    });
    // header Height by default
    $('.header').height($(window).height()); 
    // header height on resize   
    $(window).resize(function () {
        $('.header').height($(window).height());
        $('.intro').css("margin-top",($(window).height() -($('.navbar').height() + $('.intro').height())) / 2);
    });
    // intro margin top with js 
    $('.intro').css("margin-top",($(window).height() -($('.navbar').height() + $('.intro').height())) / 2);
    // flyout menu
    $(".icon i").click(function () {
        $(".icon-links").toggleClass("show-links"); 
    });
    $(".icon2 i").click(function () {
        $(".icon-links").toggleClass("show-links"); 
    });

    $('body').scrollspy({target: ".navbar", offset: 20});   

    $("body a").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var fromTop = 0;

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top - fromTop
            }, 800, function(){

                window.location.hash = hash;
            });
        }  

    
    });



    var url = $("#cartoonVideo").attr('src');

    /* Assign empty url value to the iframe src attribute when
    modal hide, which stop the video playing */
    $("#myModal").on('hide.bs.modal', function(){
        $("#cartoonVideo").attr('src', '');
    });

    /* Assign the initially stored url back to the iframe src
    attribute when modal is displayed again */
    $("#myModal").on('show.bs.modal', function(){
        $("#cartoonVideo").attr('src', url);
    }); 

    $('.thumbnail').hover(
        function(){
            $(this).find('.caption').slideDown(250); //.fadeIn(250)
        },
        function(){
            $(this).find('.caption').slideUp(250); //.fadeOut(205)
        }
    ); 

    loadGallery(true, 'a.thumbnail');

    //This function disables buttons when needed
    function disableButtons(counter_max, counter_current){
        $('#show-previous-image, #show-next-image').show();
        if(counter_max == counter_current){
            $('#show-next-image').hide();
        } else if (counter_current == 1){
            $('#show-previous-image').hide();
        }
    }

    /**
     *
     * @param setIDs        Sets IDs when DOM is loaded. If using a PHP counter, set to false.
     * @param setClickAttr  Sets the attribute for the click handler.
     */

    function loadGallery(setIDs, setClickAttr){
        var current_image,
            selector,
            counter = 0;

        $('#show-next-image, #show-previous-image').click(function(){
            if($(this).attr('id') == 'show-previous-image'){
                current_image--;
            } else {
                current_image++;
            }

            selector = $('[data-image-id="' + current_image + '"]');
            updateGallery(selector);
        });

        function updateGallery(selector) {
            var $sel = selector;
            current_image = $sel.data('image-id');
            $('#image-gallery-caption').text($sel.data('caption'));
            $('#image-gallery-title').text($sel.data('title'));
            $('#image-gallery-image').attr('src', $sel.data('image'));
            disableButtons(counter, $sel.data('image-id'));
        }

        if(setIDs == true){
            $('[data-image-id]').each(function(){
                counter++;
                $(this).attr('data-image-id',counter);
            });
        }
        $(setClickAttr).on('click',function(){
            updateGallery($(this));
        });
    }
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })
    
    $('.map-container')
	.click(function(){
			$(this).find('iframe').addClass('clicked')})
	.mouseleave(function(){
			$(this).find('iframe').removeClass('clicked')});

});

(function animatedArrow () {
    $(".arrow-up").animate({bottom:"20px"},900, function () {
        $(this).animate({bottom:"-10px"},900, function () {
            animatedArrow();
        });
    });
})();

$(".arrow-up").click(function () {
    $("html,body").animate({
        scrollTop:0
    },800); 
});
