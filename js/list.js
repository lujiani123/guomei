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
        this.bindEvent();

    },
    //加载数据
    loadJson:function(){
        var opt = {
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
        // console.log(json[0].iid)
        // console.log(json1.result.wall.list.iid)
        var html="";
        for( var i=0; i<json.length; i++){

            html+=`
                <figure>
                <!--<a href="">-->
                     <img src="${json[i].show.img}" data-id="${i}">
                <!--</a>-->
			
				<figcaption>
					<p>${json[i].title}</p>
					<h5>
						<span>售价 </span>
						<i>${json[i].price}</i>
					</h5>
		
                    <h4 id="addcar" data-id="${i}">加入购物车<em></em></h4>
                   
                   <div class="car"> <a  href="car.html">查看购物车</a></div>
				    </figcaption>
			    </figure>
                `

        }


        this.main.html(this.main.html() + html);
        // this.sortPage();
        this.loading = false;

    },
    bindEvent:function(){
        $(window).on("scroll",this.ifLoad.bind(this));

    },
    //是否加载   滚动就会触发此事件
    ifLoad:function(){
        var scrollTop = $("html,body").scrollTop();
        var clientHeight = $("html")[0].clientHeight;
        var lastBox = this.main.children(":last");
        //加载到最后一张图片再次加载数据
        if(scrollTop + clientHeight > lastBox.offset().top){
            //如果已经加载，就return 0关闭，如果为false关闭就变为true
            if(this.loading){
                return 0
            }
            this.loading = true;
            // console.log("加载");
            this.page ++;
            this.loadJson()
                .done(function(res){
                    this.renderPage(res);

                })
        }

    }
})

var waterfall = new WaterFall();
waterfall.init();

var olist = document.getElementById("wrap");
//事件委托：
olist.onclick =function(event){
    var imglist = document.querySelectorAll("#wrap img");
    var imgArr = Array.from(imglist);
    // console.log(imglist)
    // console.log(imgArr)

    var e =event || window.event;
    var target = e.target || e.srcElement;
    if(imgArr.indexOf(target)!=-1){
        // 页面跳转;
        // 先要储存cookie;
        cookie("id",target.getAttribute("data-id"))
        location.href="detail.html"
    }

}

new Promise(function(resolve,reject) {
    $.ajax({
        type: "get",
        url: "https://list.mogujie.com/search",
        dataType: "jsonp",
        data: {},
        success: function (data) {
            var goods = data.result.wall.list;
            console.log(goods)
                $("#wrap").click(function (e) {
                    var target = e.target;
                    if ($(target).prop("id") == "addcar") {
                        // var id=goods[i].idd;
                        // console.log(id)
                        var id=$(target).parent().parent().children(0).attr("data-id");
                        var good = {};
                        if (localStorage.infos) {
                            var goods = JSON.parse(localStorage.infos);
                            console.log(goods)
                            var bstop = true;
                            for (var key in goods) {
                                if (goods[key].id == id) {
                                    bstop = false;
                                    goods[key].num = 1 + parseInt(goods[key].num);
                                    goods[key].id = id;
                                    localStorage.infos = JSON.stringify(goods);
                                }
                            }
                            if (bstop) {
                                good.num = 1;
                                good.id = id;
                                goods.push(good);
                                localStorage.infos = JSON.stringify(goods);
                            }
                        } else {
                            var goods = [];
                            good.num = 1;
                            good.id = id;
                            goods.img =
                            goods.push(good);
                            localStorage.infos = JSON.stringify(goods);
                        }
                    }
                })


        }

    })
})