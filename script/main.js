$(function(){

$(".sub, .sub_bg").hide()

$(".main > li, .sub_bg").hover(function(){
    $(".sub, .sub_bg").stop().slideDown();
},function(){
    $(".sub, .sub_bg").stop().slideUp();
})//hover


var n = 0;
setInterval(function(){
    if(n == 2){
        n=0;
    }else{
        n++;
    }
    pos = n * (-1200) + "px"
// console.log(n);

$(".left_move").animate({left: pos}, 500);

}, 2500)//setInterval


//팝업

$(".p_click").click(function(){
    $(".pop, .modal").show();
})


$(".close").click(function(){
    $(".pop, .modal").hide();
})


})//jqery