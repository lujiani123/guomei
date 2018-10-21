

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



// (function(window, document, undefined) {
//     var dog = {//声明一个命名空间，或者称为对象
//         $ : function(id) {
//             return document.querySelector(id);
//         },
//         on : function(el, type, handler) {
//             el.addEventListener(type, handler, false);
//         },
//         off : function(el, type, handler) {
//             el.removeEventListener(type, handler, false);
//         }
//     };
//     //封装一个滑块类
//     function Slider() {
//         var args = arguments[0];
//         for ( var i in args) {
//             this[i] = args[i]; //一种快捷的初始化配置
//         }
//         //直接进行函数初始化，表示生成实例对象就会执行初始化
//         this.init();
//     }
//     Slider.prototype = {
//         constructor : Slider,
//         init : function() {
//             this.getDom();
//             this.dragBar(this.handler);
//         },
//         getDom : function() {
//             this.slider = dog.$('#' + this.id);
//             this.handler = dog.$('.handler');
//             this.bg = dog.$('.drag_bg');
//         },
//         dragBar : function(handler) {
//             var that = this, startX = 0, lastX = 0, doc = document, width = this.slider.offsetWidth, max = width
//                 - handler.offsetWidth, drag = {
//                 down : function(e) {
//                     var e = e || window.event;
//                     that.slider.classList.add('unselect');
//                     startX = e.clientX - handler.offsetLeft;
//                     console.log('startX: ' + startX + ' px');
//                     dog.on(doc, 'mousemove', drag.move);
//                     dog.on(doc, 'mouseup', drag.up);
//                     return false;
//                 },
//                 move : function(e) {
//                     var e = e || window.event;
//                     lastX = e.clientX - startX;
//                     lastX = Math.max(0, Math.min(max, lastX)); //这一步表示距离大于0小于max，巧妙写法
//                     console.log('lastX: ' + lastX + ' px');
//                     if (lastX >= max) {
//                         handler.classList.add('handler_ok_bg');
//                         that.slider.classList.add('slide_ok');
//                         dog.off(handler, 'mousedown', drag.down);
//                         drag.up();
//                     }
//                     that.bg.style.width = lastX + 'px';
//                     handler.style.left = lastX + 'px';
//                 },
//                 up : function(e) {
//                     var e = e || window.event;
//                     that.slider.classList.remove('unselect');
//                     if (lastX < width) {
//                         that.bg.classList.add('ani');
//                         handler.classList.add('ani');
//                         that.bg.style.width = 0;
//                         handler.style.left = 0;
//                         setTimeout(function() {
//                             that.bg.classList.remove('ani');
//                             handler.classList.remove('ani');
//                         }, 300);
//                     }
//                     dog.off(doc, 'mousemove', drag.move);
//                     dog.off(doc, 'mouseup', drag.up);
//                 }
//             };
//             dog.on(handler, 'mousedown', drag.down);
//         }
//     };
//     window.S = window.Slider = Slider;
// })(window, document);
// var defaults = {
//     id : 'slider'
// };
// new S(defaults);














oBtn.onclick=function() {
    var oBtn=document.getElementById("btn")
    var name =document.getElementById("username").value;
    var psw = document.getElementById("pwd").value;
    console.log(name)
    $.ajax({
        type: "GET",
        url: "http://localhost:8888/proxy/localhost/php/register.1.php",
        data: `username=${name}&password=${psw}`,
        dataType:"html",
        success: function (res) {
            alert(res)
           if (name&&psw!=""){
               location.href="Login.html";
           }
        }

    })
}
