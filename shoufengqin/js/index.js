// function showDl(obj){ //obj 对应的是li
//     var aDl = obj.getElementsByTagName('dl')[0];
//     aDl.style.display = 'block';
// }

// function hideDl(obj){
//     var aDl = obj.getElementsByTagName('dl')[0]
//     aDl.style.display = 'none';
// }
$(document).ready(function(){
    $('li').mouseover(function (){
        $(this).children('dl').css('display','block');
        $(this).children('span').addClass('on');
    })
    $('li').mouseout(function (){
        $(this).children('dl').css('display','none');
        $(this).children('span').removeClass('on');
    })
})
