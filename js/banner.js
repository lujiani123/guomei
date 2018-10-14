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
             oSpan[i].className = ""

        }
        oLi[index].className="active";
 		oSpan[index].className = "active"
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
		 oSpan[i].className = ""
    }
    oLi[index].className="active"
     oSpan[index].className = "active"
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
					oSpan[i].className=""
                }
                oLi[index].className = "active";
                 oSpan[index].className = "active"
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
//大的轮播图
$(function(){
	
	$("#itme_list li").hover(function(){
		var index=$(this).index();
//		console.log(index);
		$("#itme_list li").eq(index).addClass("active").siblings("li").removeClass("active")
		$("#first .main").eq(index).addClass("active").siblings(".main").removeClass("active")
	})
	
	
	$("#first u").click(function(){
	  if(index>=$("#first .main").length){
		return index=0
		}else{
		index++;
		}
		console.log(index)
	 	$("#itme_list li").eq(index).addClass("active").siblings("li").removeClass("active")
		$("#first .main").eq(index).addClass("active").siblings(".main").removeClass("active")
             	
	})		
		
})

   $(function(){
            var n=0;//变量
          function run(){
            n++;
            n=(n==3)?0:n;// 三元表达式 如果n=5.那么n=0.如果n=n.则n=n
//              if(n==5){//如果n=5
//                  n=0;
//              }
            $("#frist_tu li").eq(n).fadeIn(2900).siblings("li").fadeOut(2900); //fadeIn显示，fadeOut隐藏 
            $("#frist_ol ol").eq(n).css({"background":"#f5004b"}).siblings("ol").css({"background":"#fff"});  
        }
            var timer= setInterval(run,3000);//替换时间。
            $("#frist_tu li").mouseenter(function(){//鼠标移入事件
                clearInterval(timer);//停止替换
                var i=$(this).index();//取出当前li的索引
//                alert(i);//弹出
                $("#frist_tu li").eq(i).fadeIn(1000).siblings("li").fadeOut(1000)//让鼠标移入当前的li显示对应的img.兄弟节点隐藏(淡出)
                $("#frist_ol ol").eq(i).css({"background":"#f5004b"}).siblings("li").css({"background":"#fff"});
                //$(this).css({"background":"red"}).siblings("li").css({"background":"#000"});
                //找到第.eq(i).li、当前i变成红色。兄弟节点其余变成黑色、 
            })
            .mouseleave(function(){
                timer=setInterval(run,3000);
            })//鼠标移除继续轮播
          })

//2f
$(function(){
	
	$("#two_list li").hover(function(){
		var index=$(this).index();
//		console.log(index);
		$("#two_list li").eq(index).addClass("active").siblings("li").removeClass("active")
		$("#two .main").eq(index).addClass("active").siblings(".main").removeClass("active")
	})
	
	$("#two u").click(function(){
	  if(index>=$("#two .main").length){
		return index=0
		}else{
		index++;
		}
		console.log(index)
	 	$("#two_list li").eq(index).addClass("active").siblings("li").removeClass("active")
		$("#two .main").eq(index).addClass("active").siblings(".main").removeClass("active")
             	
	})		
})

//大的轮播图
$(function(){
	
	$("#tow_list li").hover(function(){
		var index=$(this).index();
//		console.log(index);
		$("#tow_list li").eq(index).addClass("active").siblings("li").removeClass("active")
		$("#tow .main").eq(index).addClass("active").siblings(".main").removeClass("active")
	})
	$("#tow u").click(function(){
//		index=0;
		var s=$("#tow .main").length;
//		console.log(s)
		
		
		
//		index=index-1;
//	
	 	$("#tow_list li").eq(index).addClass("active").siblings("li").removeClass("active")
		$("#tow .main").eq(index).addClass("active").siblings(".main").removeClass("active")
                
          if(index==s){
		return index=0
		}else{
		index++;

		}
			console.log(index)
		})
})

   $(function(){
            var n=0;//变量
          function run(){
            n++;
            n=(n==3)?0:n;// 三元表达式 如果n=5.那么n=0.如果n=n.则n=n
//              if(n==5){//如果n=5
//                  n=0;
//              }
            $("#tow_tu li").eq(n).fadeIn(2900).siblings("li").fadeOut(2900); //fadeIn显示，fadeOut隐藏 
            $("#tow_ol ol").eq(n).css({"background":"#f5004b"}).siblings("ol").css({"background":"#fff"});  
        }
            var timer= setInterval(run,3000);//替换时间。
            $("#tow_tu li").mouseenter(function(){//鼠标移入事件
                clearInterval(timer);//停止替换
                var i=$(this).index();//取出当前li的索引
//                alert(i);//弹出
                $("#tow_tu li").eq(i).fadeIn(1000).siblings("li").fadeOut(1000)//让鼠标移入当前的li显示对应的img.兄弟节点隐藏(淡出)
                $("#tow_ol ol").eq(i).css({"background":"#f5004b"}).siblings("ol").css({"background":"#fff"});
                //$(this).css({"background":"red"}).siblings("li").css({"background":"#000"});
                //找到第.eq(i).li、当前i变成红色。兄弟节点其余变成黑色、 
            })
            .mouseleave(function(){
                timer=setInterval(run,3000);
            })//鼠标移除继续轮播
          })


//3f
$(function(){
	
	$("#three_list li").hover(function(){
		var index=$(this).index();
//		console.log(index);
		$("#three_list li").eq(index).addClass("active").siblings("li").removeClass("active")
		$("#three .main").eq(index).addClass("active").siblings(".main").removeClass("active")
	})
	$("#three u").click(function(){
	  if(index>=$("#three .main").length){
		return index=0
		}else{
		index++;
		}
		console.log(index)
	 	$("#three_list li").eq(index).addClass("active").siblings("li").removeClass("active")
		$("#three .main").eq(index).addClass("active").siblings(".main").removeClass("active")
             	
	})		
})
  $(function(){
            var n=0;//变量
          function run(){
            n++;
            n=(n==3)?0:n;// 三元表达式 如果n=5.那么n=0.如果n=n.则n=n
//              if(n==5){//如果n=5
//                  n=0;
//              }
            $("#three_tu li").eq(n).fadeIn(2900).siblings("li").fadeOut(2900); //fadeIn显示，fadeOut隐藏 
            $("#ol_three ol").eq(n).css({"background":"#f5004b"}).siblings("ol").css({"background":"#fff"});  
        }
            var timer= setInterval(run,3000);//替换时间。
            $("#three_tu li").mouseenter(function(){//鼠标移入事件
                clearInterval(timer);//停止替换
                var i=$(this).index();//取出当前li的索引
//                alert(i);//弹出
                $("#three_tu li").eq(i).fadeIn(1000).siblings("li").fadeOut(1000)//让鼠标移入当前的li显示对应的img.兄弟节点隐藏(淡出)
                $("#ol_three ol").eq(i).css({"background":"#f5004b"}).siblings("ol").css({"background":"#fff"});
                //$(this).css({"background":"red"}).siblings("li").css({"background":"#000"});
                //找到第.eq(i).li、当前i变成红色。兄弟节点其余变成黑色、 
            })
            .mouseleave(function(){
                timer=setInterval(run,3000);
            })//鼠标移除继续轮播
          })

//4f
$(function(){
	
	$("#four_list li").hover(function(){
		var index=$(this).index();
//		console.log(index);
		$("#four_list li").eq(index).addClass("active").siblings("li").removeClass("active")
		$("#four .main").eq(index).addClass("active").siblings(".main").removeClass("active")
	})
	$("#four u").click(function(){
	  if(index>=$("#four .main").length){
		return index=0
		}else{
		index++;
		}
		console.log(index)
	 	$("#four_list li").eq(index).addClass("active").siblings("li").removeClass("active")
		$("#four .main").eq(index).addClass("active").siblings(".main").removeClass("active")
             	
	})		
})

  $(function(){
            var n=0;//变量
          function run(){
            n++;
            n=(n==3)?0:n;// 三元表达式 如果n=5.那么n=0.如果n=n.则n=n
//              if(n==5){//如果n=5
//                  n=0;
//              }
            $("#four_tu li").eq(n).fadeIn(2900).siblings("li").fadeOut(2900); //fadeIn显示，fadeOut隐藏 
            $("#four_ol ol").eq(n).css({"background":"#f5004b"}).siblings("ol").css({"background":"#fff"});  
        }
            var timer= setInterval(run,3000);//替换时间。
            $("#four_tu li").mouseenter(function(){//鼠标移入事件
                clearInterval(timer);//停止替换
                var i=$(this).index();//取出当前li的索引
//                alert(i);//弹出
                $("#four_tu li").eq(i).fadeIn(1000).siblings("li").fadeOut(1000)//让鼠标移入当前的li显示对应的img.兄弟节点隐藏(淡出)
                $("#four_ol ol").eq(i).css({"background":"#f5004b"}).siblings("ol").css({"background":"#fff"});
                //$(this).css({"background":"red"}).siblings("li").css({"background":"#000"});
                //找到第.eq(i).li、当前i变成红色。兄弟节点其余变成黑色、 
            })
            .mouseleave(function(){
                timer=setInterval(run,3000);
            })//鼠标移除继续轮播
          })

//5F
$(function(){
	
	$("#five_list li").hover(function(){
		var index=$(this).index();
//		console.log(index);
		$("#five_list li").eq(index).addClass("active").siblings("li").removeClass("active")
		$("#five .main").eq(index).addClass("active").siblings(".main").removeClass("active")
	})
	$("#five u").click(function(){
	  if(index>=$("#five .main").length){
		return index=0
		}else{
		index++;
		}
		console.log(index)
	 	$("#five_list li").eq(index).addClass("active").siblings("li").removeClass("active")
		$("#five .main").eq(index).addClass("active").siblings(".main").removeClass("active")
             	
	})	
})

  $(function(){
            var n=0;//变量
          function run(){
            n++;
            n=(n==3)?0:n;// 三元表达式 如果n=5.那么n=0.如果n=n.则n=n
//              if(n==5){//如果n=5
//                  n=0;
//              }
            $("#five_tu li").eq(n).fadeIn(2900).siblings("li").fadeOut(2900); //fadeIn显示，fadeOut隐藏 
            $("#five_ol ol").eq(n).css({"background":"#f5004b"}).siblings("ol").css({"background":"#fff"});  
        }
            var timer= setInterval(run,3000);//替换时间。
            $("#five_tu li").mouseenter(function(){//鼠标移入事件
                clearInterval(timer);//停止替换
                var i=$(this).index();//取出当前li的索引
//                alert(i);//弹出
                $("#five_tu li").eq(i).fadeIn(1000).siblings("li").fadeOut(1000)//让鼠标移入当前的li显示对应的img.兄弟节点隐藏(淡出)
                $("#five_ol ol").eq(i).css({"background":"#f5004b"}).siblings("ol").css({"background":"#fff"});
                //$(this).css({"background":"red"}).siblings("li").css({"background":"#000"});
                //找到第.eq(i).li、当前i变成红色。兄弟节点其余变成黑色、 
            })
            .mouseleave(function(){
                timer=setInterval(run,3000);
            })//鼠标移除继续轮播
          })
//6F
$(function(){
	
	$("#six_list li").hover(function(){
		var index=$(this).index();
//		console.log(index);
		$("#six_list li").eq(index).addClass("active").siblings("li").removeClass("active")
		$("#six .main").eq(index).addClass("active").siblings(".main").removeClass("active")
	})
	$("#six u").click(function(){
	  if(index>=$("#six .main").length){
		return index=0
		}else{
		index++;
		}
		console.log(index)
	 	$("#six_list li").eq(index).addClass("active").siblings("li").removeClass("active")
		$("#six .main").eq(index).addClass("active").siblings(".main").removeClass("active")
             	
	})	
})
 $(function(){
            var n=0;//变量
          function run(){
            n++;
            n=(n==3)?0:n;// 三元表达式 如果n=5.那么n=0.如果n=n.则n=n
//              if(n==5){//如果n=5
//                  n=0;
//              }
            $("#six_tu li").eq(n).fadeIn(2900).siblings("li").fadeOut(2900); //fadeIn显示，fadeOut隐藏 
            $("#six_ol ol").eq(n).css({"background":"#f5004b"}).siblings("ol").css({"background":"#fff"});  
        }
            var timer= setInterval(run,3000);//替换时间。
            $("#six_tu li").mouseenter(function(){//鼠标移入事件
                clearInterval(timer);//停止替换
                var i=$(this).index();//取出当前li的索引
//                alert(i);//弹出
                $("#six_tu li").eq(i).fadeIn(1000).siblings("li").fadeOut(1000)//让鼠标移入当前的li显示对应的img.兄弟节点隐藏(淡出)
                $("#six_ol ol").eq(i).css({"background":"#f5004b"}).siblings("ol").css({"background":"#fff"});
                //$(this).css({"background":"red"}).siblings("li").css({"background":"#000"});
                //找到第.eq(i).li、当前i变成红色。兄弟节点其余变成黑色、 
            })
            .mouseleave(function(){
                timer=setInterval(run,3000);
            })//鼠标移除继续轮播
          })
//7F
$(function(){
	
	$("#seven_list li").hover(function(){
		var index=$(this).index();
//		console.log(index);
		$("#seven_list li").eq(index).addClass("active").siblings("li").removeClass("active")
		$("#seven .main").eq(index).addClass("active").siblings(".main").removeClass("active")
	})
	$("#seven u").click(function(){
	  if(index>=$("#seven .main").length){
		return index=0
		}else{
		index++;
		}
		console.log(index)
	 	$("#seven_list li").eq(index).addClass("active").siblings("li").removeClass("active")
		$("#seven .main").eq(index).addClass("active").siblings(".main").removeClass("active")
             	
	})	
})
$(function(){
            var n=0;//变量
          function run(){
            n++;
            n=(n==3)?0:n;// 三元表达式 如果n=5.那么n=0.如果n=n.则n=n
//              if(n==5){//如果n=5
//                  n=0;
//              }
            $("#seven_tu li").eq(n).fadeIn(2900).siblings("li").fadeOut(2900); //fadeIn显示，fadeOut隐藏 
            $("#seven_ol ol").eq(n).css({"background":"#f5004b"}).siblings("ol").css({"background":"#fff"});  
        }
            var timer= setInterval(run,3000);//替换时间。
            $("#seven_tu li").mouseenter(function(){//鼠标移入事件
                clearInterval(timer);//停止替换
                var i=$(this).index();//取出当前li的索引
//                alert(i);//弹出
                $("#seven_tu li").eq(i).fadeIn(1000).siblings("li").fadeOut(1000)//让鼠标移入当前的li显示对应的img.兄弟节点隐藏(淡出)
                $("#seven_ol ol").eq(i).css({"background":"#f5004b"}).siblings("ol").css({"background":"#fff"});
                //$(this).css({"background":"red"}).siblings("li").css({"background":"#000"});
                //找到第.eq(i).li、当前i变成红色。兄弟节点其余变成黑色、 
            })
            .mouseleave(function(){
                timer=setInterval(run,3000);
            })//鼠标移除继续轮播
          })
//8F
$(function(){
	
	$("#eight_list li").hover(function(){
		var index=$(this).index();
//		console.log(index);
		$("#eight_list li").eq(index).addClass("active").siblings("li").removeClass("active")
		$("#eight .main").eq(index).addClass("active").siblings(".main").removeClass("active")
	})
	$("#eight u").click(function(){
	  if(index>=$("#eight .main").length){
		return index=0
		}else{
		index++;
		}
		console.log(index)
	 	$("#eight_list li").eq(index).addClass("active").siblings("li").removeClass("active")
		$("#eight .main").eq(index).addClass("active").siblings(".main").removeClass("active")
             	
	})	
})
$(function(){
            var n=0;//变量
          function run(){
            n++;
            n=(n==3)?0:n;// 三元表达式 如果n=5.那么n=0.如果n=n.则n=n
//              if(n==5){//如果n=5
//                  n=0;
//              }
            $("#eight_tu li").eq(n).fadeIn(2900).siblings("li").fadeOut(2900); //fadeIn显示，fadeOut隐藏 
            $("#eight_ol ol").eq(n).css({"background":"#f5004b"}).siblings("ol").css({"background":"#fff"});  
        }
            var timer= setInterval(run,3000);//替换时间。
            $("#eight_tu li").mouseenter(function(){//鼠标移入事件
                clearInterval(timer);//停止替换
                var i=$(this).index();//取出当前li的索引
//                alert(i);//弹出
                $("#eight_tu li").eq(i).fadeIn(1000).siblings("li").fadeOut(1000)//让鼠标移入当前的li显示对应的img.兄弟节点隐藏(淡出)
                $("#eight_ol ol").eq(i).css({"background":"#f5004b"}).siblings("ol").css({"background":"#fff"});
                //$(this).css({"background":"red"}).siblings("li").css({"background":"#000"});
                //找到第.eq(i).li、当前i变成红色。兄弟节点其余变成黑色、 
            })
            .mouseleave(function(){
                timer=setInterval(run,3000);
            })//鼠标移除继续轮播
          })
//9F
$(function(){
	
	$("#nine_list li").hover(function(){
		var index=$(this).index();
//		console.log(index);
		$("#nine_list li").eq(index).addClass("active").siblings("li").removeClass("active")
		$("#nine .main").eq(index).addClass("active").siblings(".main").removeClass("active")
	})
	$("#nine u").click(function(){
	  if(index>=$("#nine .main").length){
		return index=0
		}else{
		index++;
		}
		console.log(index)
	 	$("#nine_list li").eq(index).addClass("active").siblings("li").removeClass("active")
		$("#nine .main").eq(index).addClass("active").siblings(".main").removeClass("active")
             	
	})	
})
$(function(){
            var n=0;//变量
          function run(){
            n++;
            n=(n==3)?0:n;// 三元表达式 如果n=5.那么n=0.如果n=n.则n=n
//              if(n==5){//如果n=5
//                  n=0;
//              }
            $("#nine_tu li").eq(n).fadeIn(2900).siblings("li").fadeOut(2900); //fadeIn显示，fadeOut隐藏 
            $("#nine_ol ol").eq(n).css({"background":"#f5004b"}).siblings("ol").css({"background":"#fff"});  
        }
            var timer= setInterval(run,3000);//替换时间。
            $("#nine_tu li").mouseenter(function(){//鼠标移入事件
                clearInterval(timer);//停止替换
                var i=$(this).index();//取出当前li的索引
//                alert(i);//弹出
                $("#nine_tu li").eq(i).fadeIn(1000).siblings("li").fadeOut(1000)//让鼠标移入当前的li显示对应的img.兄弟节点隐藏(淡出)
                $("#nine_ol ol").eq(i).css({"background":"#f5004b"}).siblings("ol").css({"background":"#fff"});
                //$(this).css({"background":"red"}).siblings("li").css({"background":"#000"});
                //找到第.eq(i).li、当前i变成红色。兄弟节点其余变成黑色、 
            })
            .mouseleave(function(){
                timer=setInterval(run,3000);
            })//鼠标移除继续轮播
          })