$(document).ready(function() {
    $('body').addClass('js');
    content = $('.content')
    content.css('left',0);
})
next = function(){
    content.css('left',parseInt(content.css('left').replace("px","")) - content.width())
}
prev = function(){
    content.css('left',parseInt(content.css('left').replace("px","")) + content.width())
}
