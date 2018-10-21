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

//二维码定时更新
var timer = setInterval(function() {
    $("#q_faild_mk").css("display", "block");
    $(".q_faild_mk_cn").click(function() {
        var ram = parseInt(1000000000000 + Math.random() * 9000000000000);
        // $(".SI_section_qr>:eq(0)>img").attr("src", "http://m.5lux.com/api/gen2qrcode?t=" + ram);
        $("#q_faild_mk").css("display", "none");
    });
}, 15000);


var username = document.getElementById("SI_section_tab3_text1");
var password = document.getElementById("SI_section_tab3_text2");
var obtn = document.getElementById("SI_section_tab3_btn");

obtn.onclick = function(){
    $.ajax({
        url:"http://localhost:8888/proxy/localhost/php/login.php",
        type:"GET",
        data:`username=${username.value}&password=${password.value}`,
        success:function(res){
            if(res=="登录成功"){
                location.href="index.html"
            }else{
                alert(res)
            }
        }




    })
}
