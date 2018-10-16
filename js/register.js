// 用户名
var oUsername=document.getElementById("username");
var sUsername=oUsername.value;
var oText1=document.getElementById("text1");
var regUsr = /^[\u4e00-\u9fa5a-z0-9\-_、]{4,20}$/;
var oS1=document.getElementById("s1")
oUsername.onfocus=function(){
    oText1.style.display="block"
}
oUsername.onblur=function() {
    if(regUsr.test(sUsername)){
        oText1.innerHTML="";
        oS1.style.display="block"

    }else{
        oText1.innerHTML="用户名只能由中文、英文、数字及\"-\"、\"_\"组成";
        oText1.style.color="red";
        oUsername.style.borderColor="red"

    }
        var numreg=/^\d+$/;
        if(numreg.test(sUsername)){
            oText1.innerHTML="不能为纯数字";
            oText1.style.color="red";
            return 0;
            oUsername.style.borderColor="red"
        }


    }

