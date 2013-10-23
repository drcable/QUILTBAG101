$(document).ready(function() {
    $('body').addClass('js');
    content = $('.content')
    if (window.location.hash){
        slide = window.location.hash;
    }else{
        slide = "#Introduction";
    }
    $('nav.topBar ul li a').each(function (i,v){
        v = $(v);
        v.click(
            function( event ){
                scrollTo(v.attr('href'));
                event.preventDefault()
            }
        );
    })
    $('a.sides.right').click(
            function(event){
                event.preventDefault();
                scrollNext()
            }
        )
    $('a.sides.left').click(
            function(event){
                event.preventDefault();
                scrollPrev()
            }
        )
})
scrollTo = function(id){
    content.css("left",-1*parseInt($(id).css('left').replace("px","")));
    slide = id;
}
scrollNext = function(){
    scrollTo("#" + $(slide).next().attr("id"));
}
scrollPrev = function(){
    scrollTo("#" + $(slide).prev().attr("id"));
}
