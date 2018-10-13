// 导航下轮播图

var oBox=document.getElementById("box");
    var  oLi=document.querySelectorAll("#box li")
    var oSpan=document.querySelectorAll("#span li")
      var oLeft=document.getElementById("left");
    var oRight=document.getElementById("right")


    var  timer=null;
    var  index=0;

 //点击左边时
    oRight.onclick=function(){
        clearInterval(timer);//点击时关闭定时器
        if(index==oLi.length-1){
            index=0;
        }
        else{
            index++
        }
        for(i=0;i<=oLi.length-1;i++){
            oLi[i].className="";

        }
        oLi[index].className="active";

    }

    //点击右边时
    oLeft.onclick=function(){
        clearInterval(timer);//点击时关闭定时器
        if(index==0){

            index=oLi.length-1;
    }
    else{
        index--;
    }
    for(i=0;i<=oLi.length-1;i++){
        oLi[i].className="";

    }
    oLi[index].className="active"
    }


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

                }
                oLi[index].className = "active";
            }
        },3000)
    }
    zidong();

    //鼠标移入盒子时定时器关闭
    oBox.onmouseenter=function () {

        clearInterval(timer);

    }

    //鼠标移出盒子时自动播放
    oBox.onmouseleave=function () {

        zidong()

    }

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



//1f

//热卖商品里的轮播图


//大的轮播图
$(function(){
	
	$("#itme_list li").hover(function(){
		var index=$(this).index();
//		console.log(index);
		$("#itme_list li").eq(index).addClass("active").siblings("li").removeClass("active")
		$("#first .main").eq(index).addClass("active").siblings(".main").removeClass("active")
	})
})


//2f
$(function(){
	
	$("#two_list li").hover(function(){
		var index=$(this).index();
//		console.log(index);
		$("#two_list li").eq(index).addClass("active").siblings("li").removeClass("active")
		$("#two .main").eq(index).addClass("active").siblings(".main").removeClass("active")
	})
})


//3f
$(function(){
	
	$("#three_list li").hover(function(){
		var index=$(this).index();
//		console.log(index);
		$("#three_list li").eq(index).addClass("active").siblings("li").removeClass("active")
		$("#three .main").eq(index).addClass("active").siblings(".main").removeClass("active")
	})
})

//4f
$(function(){
	
	$("#four_list li").hover(function(){
		var index=$(this).index();
//		console.log(index);
		$("#four_list li").eq(index).addClass("active").siblings("li").removeClass("active")
		$("#four .main").eq(index).addClass("active").siblings(".main").removeClass("active")
	})
})