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









// 放大镜
 var oSmall=document.getElementById("small");
var oFrame=document.getElementById("frame");
var oBig=document.getElementById("big");
var oBigImg = oBig.children[0];
var oSmallImg = oSmall.children[2];

oSmall.onmouseenter=function () {
    oBig.style.display="block";
    oFrame.style.display="block";
    oSmallImg.style.opacity = 1;
    // oFrame.style.opacity=.5;
}
oSmall.onmouseleave=function () {
    oBig.style.display="none";
    oFrame.style.display="none";
    oSmallImg.style.opacity = 1;
}
oSmall.onmousemove=function (event) {

    // 1. 获取定位的x,y 值;
    var e=event||window.event;
    var offsetX=e.offsetX;
    var offsetY=e.offsetY;
    // 2. 给元素设置的left 值 和top值;
    var nLeft=offsetX-50;
    var nTop=offsetY-50;

    //边界检测：最小值；最大值；


    //最小值；
    nLeft=nLeft<0?0:nLeft;
    nTop=nTop<0?0:nTop;

    //最大值

   var   maxLeft=oSmall.offsetWidth-oFrame.offsetWidth;
    var  maxTop= oSmall.offsetHeight-oFrame.offsetHeight;

    nLeft=nLeft>maxLeft?maxLeft:nLeft;
    nTop=nTop>maxTop?maxTop:nTop;

    oFrame.style.left=nLeft+"px";
    oFrame.style.top=nTop+"px";

    var propX=oBig.offsetWidth/oFrame.offsetWidth;
    var propY=oBig.offsetHeight/oFrame.offsetHeight;

    oBigImg.style.left=-nLeft*propX+"px";
    oBigImg.style.top=-nTop*propY+"px";

}


//面向对象编程
function WaterFall(){}
$.extend(WaterFall.prototype,{
    //初始化
    init:function(){
        //当前页数
        this.page=1;
        this.main = $("#wrap");
        //判断是否在加载中
        this.loading = false;
        //和promise .then相似
        this.loadJson()     //返回值是deferred对象（promise前身）
            .done(function(res){
                // deferred 的 done 回调 this指向的都是 jquery 对象本身
                this.renderPage(res);
            })


    },
    //加载数据
    loadJson:function(){
        var opt = {
            // url:"http://www.wookmark.com/api/json/popular",
            url:"https://list.mogujie.com/search",
            dataType:"jsonp",
            data:{page:this.page},
            //this  ===>指向实例化对象
            context:this
        }
        return $.ajax(opt);


    },

    //渲染页面
    renderPage:function(json1){
        //console.log(json1.result.wall.list);
        var json=json1.result.wall.list;
        console.log(json,json[0].show.img)
        var sBig=document.getElementById("bigimg")
        var oimg = document.getElementById("smallimg");
        console.log(oimg)
        var oTit = document.getElementById("tit");
        var nowPrice = document.getElementById("nowprice");
        // var i="";
        //判断cookie中是否有id
        // var res="";
        if( cookie("id")){
            i=cookie("id");   //cookie("id")一个参数，是查找，返回value
            console.log(i);
            oimg.src = json[i].show.img;
            oTit.innerHTML = json[i].title;
            nowPrice.innerHTML = json[i].price;
            sBig.src=json[i].show.img;

        }
    }


})

var waterfall = new WaterFall();
waterfall.init();

