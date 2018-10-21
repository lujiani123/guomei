$(".goods_list").hover(function () {

    $(".goods_list_nav").css({
        "display":"block"
    })
})
$(".goods_list").mouseout(function () {
    $(".goods_list_nav").css({
        "display":"none"
    })
})



//轮播图

$(function(){
    var n=0;//变量

    function run(){
        n++;
        n=(n==2)?0:n;// 三元表达式 如果n=5.那么n=0.如果n=n.则n=n
             // if(n==2){//如果n=5
             //     n=0;
             // }
        $(".goods_banner li").eq(n).addClass("active").siblings("li").removeClass("active"); //fadeIn显示，fadeOut隐藏
        $(".goods_banner  ol").eq(n).addClass("active").siblings("ol").removeClass("active");
    }
    var timer= setInterval(run,3000);//替换时间。
    $(".goods_banner li").eq(i).fadeIn(1000).siblings("li").fadeOut(1000)//让鼠标移入当前的li显示对应的img.兄弟节点隐藏(淡出)
    $(".goods_banner  ol").eq(i).addClass("active").siblings("ol").removeClass("active");
    //$(this).css({"background":"red"}).siblings("li").css({"background":"#000"});
    //找到第.eq(i).li、当前i变成红色。兄弟节点其余变成黑色、
    $(" .goods_banner .left").click(function(){
        clearInterval(timer);
        i = i>0?(--i):2;
        $(".goods_banner li").eq(i).fadeIn(1000).siblings("li").fadeOut(1000)//让鼠标移入当前的li显示对应的img.兄弟节点隐藏(淡出)
        $(".goods_banner  ol").eq(i).addClass("active").siblings("ol").removeClass("active");
    })
    $(".goods_banner .right").click(function () {
        clearInterval(timer);
        $(".goods_banner li").mouseenter(function(){//鼠标移入事件
            clearInterval(timer);//停止替换
            var i=$(this).index();//取出当前li的索引
//                alert(i);//弹出
            i = i>=2?0:(++i);
            $(".goods_banner li").eq(i).fadeIn(1000).siblings("li").fadeOut(1000)//让鼠标移入当前的li显示对应的img.兄弟节点隐藏(淡出)
            $(".goods_banner  ol").eq(i).addClass("active").siblings("ol").removeClass("active");

        })
    })
        .mouseleave(function(){
            timer=setInterval(run,3000);
        })//鼠标移除继续轮播
})