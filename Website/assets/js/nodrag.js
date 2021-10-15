//img no drag

$(function(){
    $('img, a').attr('onmousedown', 'return false');
    $('img, a').attr('onselectstart', 'return false');
});