$(function (){
    $(".tabLeft").click(function () {
        $(".saoma").css({
            "display":"block"
        })
        $(".zhanghao").css({
            "display":"none"
        })
    })
    $(".tabRight").click(function () {
        $(".zhanghao").css({
            "display":"block"
        })
        $(".saoma").css({
            "display":"none"
        })
    })


})