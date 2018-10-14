
//1f

//热卖商品里的轮播图
var oBox1=document.getElementById("frist_tu");
    var  oLi1=document.querySelectorAll("#frist_tu li")
    var oSpan1=document.querySelectorAll("#frist_ol ol")
    var oLeft1=document.getElementById("first_btn_left");
    var oRight1=document.getElementById("first_btn_right")


    var  timer1=null;
    var  index1=0;

 //点击左边时
    oRight1.onclick=function(){
        clearInterval(timer1);//点击时关闭定时器
        if(index1=oLi1.length-1){
            index1=0;
        }
        else{
            index1++
        }
        for(i=0;i<=oLi1.length-1;i++){
            oLi1[i].className="";
            oSpan1[i].className = ""

        }
        oLi1[index1].className="active";
 		oSpan1[index1].className = "active"
    }

    //点击右边时
    oLeft1.onclick=function(){
        clearInterval(1);//点击时关闭定时器
        if(index1==0){

            index1=oLi1.length-1;
    }
    else{
        index1--;
    }
    for(i=0;i<=oLi1.length-1;i++){
        oLi1[i].className="";
		 oSpan1[i].className = ""
    }
    oLi1[index1].className="active"
     oSpan1[index1].className = "active"
    }


       function  zidong1() {
        timer1= setInterval(function() {
            for (var i=0;i<=oLi1.length-1;i++) {

                if (index1 == oLi1.length - 1) {
                    index1= 0;
                }
                else {
                    index1++
                }
                for (i = 0; i <= oLi1.length - 1; i++) {
                    oLi1[i].className = "";
				 oSpan1[i].className = ""
                }
                oLi1[index1].className = "active";
                oSpan1[index1].className = "active"
            }
        },3000)
    }
    zidong1();

    //鼠标移入盒子时定时器关闭
    oBox1.onmouseenter=function () {

        clearInterval(timer1);

    }

    //鼠标移出盒子时自动播放
    oBox1.onmouseleave=function () {

        zidong1()

    }

    for (var k=0;k<=oSpan1.length-1;k++) {
        oSpan1[k].a = k;
        oSpan1[k].onmouseenter = function () {
            clearInterval(timer1);
            for (i = 0; i <= oLi1.length - 1; i++) {
                oLi1[i].className = "";
                oSpan1[i].className = "";
            }
            oLi1[this.a].className = "active";
            oSpan1[this.a].className = "active"
        }

    }
    oBox1.onmouseleave=function () {

zidong1()

    }
