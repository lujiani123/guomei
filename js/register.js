
$("#username").focus(function () {
    $("#text1").css({
        "display":"block"
    })
})
$("#username").blur(function () {
    var regUsr = /^[\u4e00-\u9fa5a-z0-9\-_、]{4,20}$/;
    var numreg=/^\d+$/;
    if(numreg.test($("#username").val())){
        $("#text1").html("不能为纯数字")
        $("#text1").css({
            "color":"red"
        })
        $("#username").css({
            "border-color":"red"
        })
        // return 0;
    }
    if(regUsr.test($("#username").val())){
        $("#text1").css({
            "display":"none"
        })
       $("#s1").css({
           "display":"block"
       })
        $("#username").css({
            "border-color":"#ccc"
        })

    }else{
        $("#text1").html("用户名只能由中文、英文、数字及\"-\"、\"_\"组成");
        $("#text1").css({
            "color":"red"
        })
        $("#username").css({
            "border-color":"red"
        })


    }

})



//设置密码时
$("#pwd").focus(function () {
    $("#text2").css({
        "display":"block"
    })
    $("#text2").html("6-20个字符，建议使用两个字符以上")
})
$("#pwd").blur(function () {

    var rate = 0;
    var regNumber = /\d/;
    var regWord = /[a-zA-Z]/;
    var regSymbol = /[\!\@\#\$\%\^\&\*\)\_]/;
    if(regNumber.test($("#pwd").val())){
        $("#text2").html("不能为纯数字")
        $("#text2").css({
            "color":"red"
        })
        $("#pwd").css({
            "border-color":"red"
        })
        // return 0;
    }
    if(regNumber.test($("#pwd").val())){
        rate++
    }
    if(regWord.test($("#pwd").val())){
        rate++
    }
    if(regSymbol.test($("#pwd").val())){
        rate++
    }

    switch(rate){
        case 1 :
        $("#u1").html("强度：低")
           $("#u1").css({
               "display":"block",
               "background":"red"
           })
            break;
        case 2 :
            $("#u1").html("强度：中")
            $("#u1").css({
                "display":"block",
                "background":"yellow"
            })
            $("#s2").css({
                "display":"block"
            })
            $("#text2").css({
                "display":"none"
            })
            $("#pwd").css({
                "border-color":"#ccc"
            })
            break;
        case 3 :
            $("#s2").css({
                "display":"block"
            })
            $("#u1").html("强度：高")
            $("#u1").css({
                "display":"block",
                "background":"green"
            })
            $("#text2").css({
                "display":"none"
            })
            $("#pwd").css({
                "border-color":"#ccc"
            })
            break;
    }
})

$("#que").focus(function () {
    $("#text3").css({
        "display":"block"
    })
    $("#text3").html("请再次输入密码")
})
$("#que").blur(function () {
    if ($("#que").val()==$("#pwd").val()){

        $("#text3").css({
            "display":"none"
        })
        $("#s3").css({
            "display":"block"
        })
    }else {
        $("#text3").html("密码不一致")
        $("#que").css({
            "border":"red"
        })
    }
})


//手机号
$("#pho").blur(function () {
    var str = $(this).val();
    // console.log(str)
    if(str != ""){
        var reg = /^(156|158|188)\d{8}$/;
        if(reg.test(str)){
            $("#s4").css({
                "display":"block"
            })
            $("#text4").css({
                "display":"none",

            })
        }else{
            $("#text4").css({
                "display":"block",
                "color":"red"
            })
            $("#text4").html("号码格式不对")
        }
    }
    else {
        $("#text4").html("号码不能为空")
        $("#text4").css({

            "color":"red"
        })
    }
})


var oBtn=document.getElementById("btn")
var name =$("#username").val()
var psw = document.getElementById("pwd").value;
oBtn.onclick=function() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8888/proxy/localhost/php/register1.php",
        data: `username=${name}&password=${psw}`,

        dataType:"html",
        success: function (res) {
            console.log(data)
            // alert(res)
            location.href="Login.html";
        }

    })
}
