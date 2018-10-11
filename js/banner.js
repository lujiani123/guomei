var oBox=document.getElementById("box");
    var  oLi=document.querySelectorAll("#box li")
    var oSpan=document.querySelectorAll("#span li")

    var  timer=null;
    var  index=0;

    function  zidong() {
        timer= setInterval(function() {
            for (var i=0;i<=oLi.length-1;i++) {

                if (index == oLi.length - 1) {
                    index = 0;
                }
                else {
                    index++
                }
                for (i = 0; i <= oLi.length - 1; i++) {
                    oLi[i].className = "";
                    oSpan[i].className = ""
                }
                oLi[index].className = "active";
                oSpan[index].className = "active";


            }
        },3000)
    }
    zidong();



    for (var k=0;k<=oSpan.length-1;k++) {
        oSpan[k].a = k;
        oSpan[k].onmouseenter = function () {
            clearInterval(timer);
            for (i = 0; i <= oLi.length - 1; i++) {
                oLi[i].className = "";
                oSpan[i].className = "";
            }
            oLi[this.a].className = "active";
            oSpan[this.a].className = "active"
        }

    }
    oBox.onmouseleave=function () {

zidong()

    }
