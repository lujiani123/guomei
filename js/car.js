//	1、点击全选所有的商品复选框都选中，
var oAll=document.querySelectorAll(".all");
var oCheck=document.getElementsByClassName("check");
var oPricetotle=document.getElementById("allprice");
var oSelfsun=document.getElementsByClassName("selfsum");
var oDelall=document.getElementById("delall");
var oNum=document.getElementsByClassName("n");
var oPricea=document.getElementsByClassName("price");
var oList=document.getElementById("list");
var count=0;
var oCount=document.getElementById("count");
new Promise(function(resolve,reject){
    $.ajax({
    type:"get",
    url:"https://list.mogujie.com/search",
    dataType: "jsonp",
    data:{},
    success:function(data){
        //console.log(data);
        var goods = data.result.wall.list;
        var str="";
        var infos=JSON.parse(localStorage.infos);
        console.log(infos);
        for(var i=0;i<1;i++){
            if(infos){
                for(var j in infos){
                    if(infos[j].id){
                        str+=`
                        <div class="goods_box_title">
                        <span class="xuan">
                        <input type="checkbox"/>
                        </span>
                        <a href="#" class="cart-col">       PADEN旗舰店      </a>
                        <a href="#" class="dian">
                        <i></i>
                        <u>联系客服</u>
                        </a>
                        <a href="" class="cart-coupon">

                        </a>

                        </div>
                        <div class="cart-shop-good clearfix">
                        <span class="xuan">
                        <input type="checkbox"/>
                        </span>
                        <div class="my_floor">
                        <a href="#">
                            <img class="myimg" style="width: 80px; height: 80px" src="${goods[j].show.img}" data-id="${i}">
                        </a>
                        </div>
                        <div class="floor_title">
                        <a href="#">
                            PADEN 北欧风 电视柜 茶几 边柜 斗柜 落地书柜 组合客厅家具 小户型书房复古色书柜床头柜实木桌脚...

                        </a>

                        </div>
                        <div class="cart-good-pro">
                        <div class="cart-salesPro-item">
                            <span class="cart-good-key" title="颜色">颜色</span>
                            <span class="cart-good-value" title="多彩茶几白配蓝 1米">：多彩茶几白配蓝 1米</span>
                        </div>
                        <div class="cart-salesPro-item">
                        <span class="cart-good-key" title="安装方式">安装方式</span>
                        <span class="cart-good-value" title="组装">：组装</span>
                        </div>
                        <div class="cart-salesPro-item">
                        <span class="cart-good-key" title="发货时间">发货时间</span>
                        <span class="cart-good-value" title="72小时内发货">：72小时内发货</span>
                        </div>

                        </div>
                        <div class="cart-good-real-price ">
                        <!--主品-->     ${goods[j].price}
                        </div>
                        <div class="shu">
                        <a href="#" class="jian reduce">-</a>
                        <a href="#" class="jia add">+</a>
                        <input  class="n" type="text" value="${infos[j].num}"/>

                        </div>
                        <div class="price">
                        ￥${goods[i].pirce*infos[j].num}
                        </div>
                        <div class="del_goods">
                        <i></i>
                        <span>删除</span>

                        </div>

                        </div>
                        `;
                    }
                }
            }
        }
        
        oList.innerHTML=str;
        resolve()
    },
    error:function(e){
        console.log(e);
    }
})
}).then(function(){
var oAll=$(".all");
var oCheck=$(".check");
var oPricetotle=$("#allprice");
var oSelfsun=$(".selfsum");
var oDelall=$("#delall");
var oNum=$(".n");
var oPricea=$(".price");
var oList=$("#list");
var count=0;
var oCount=$("#count");
init();
function init(){
var tt=0;
var nn=0;
oAll.eq(0).prop("checked",true);
oAll.eq(1).prop("checked",true);
oCheck.each(function(i){
    var price=parseInt(oPricea.eq(i).text().slice(1));
    oCheck.eq(i).prop("checked",true);
    //oCheck[i].checked=true;
    var sn=parseInt(oNum.eq(i).val());
    //console.log(price,sn);
    //oSelfsun[i].innerText="￥"+price*sn;
    oSelfsun.eq(i).text("￥"+price*sn);
    nn+=sn;
    //console.log(oPriceall)
    //tt+=parseInt(oSelfsun[i].innerText.slice(1));
    tt+=parseInt(oSelfsun.eq(i).text().slice(1));
})
oPricetotle.text("￥"+tt);
count=nn;
//oCount.innerText=count;
oCount.text(count);
}
oAll.eq(0).click(function(){
var totle=0;
var count1=0;
if($(this).is(":checked")){
    oAll.eq(1).prop("checked",true);
    //oAll[1].checked=true;
    oCheck.each(function(i){
            oCheck.eq(i).prop("checked",true);
            count1+=parseInt(oNum.eq(i).val());
            totle+=parseInt(oSelfsun.eq(i).text().slice(1));
    })
    oPricetotle.text("￥"+totle);
    oCount.text(count1)
}
else{
    oAll.eq(1).prop("checked",false);
    oCheck.each(function(i){
            oCheck.eq(i).prop("checked",false);
    })
     oPricetotle.text("￥"+0);
    oCount.text(0)
    
}
})
oAll.eq(1).click(function(){
var totle=0;
var count1=0;
if($(this).is(":checked")){
    oAll.eq(0).prop("checked",true);
    //oAll[1].checked=true;
    oCheck.each(function(i){
            oCheck.eq(i).prop("checked",true);
            count1+=parseInt(oNum.eq(i).val());
            totle+=parseInt(oSelfsun.eq(i).text().slice(1));
    })
    oPricetotle.text("￥"+totle);
    oCount.text(count1)
}
else{
    oAll.eq(0).prop("checked",false);
    oCheck.each(function(i){
            oCheck.eq(i).prop("checked",false);
    })
     oPricetotle.text("￥"+0);
    oCount.text(0)
    
}
})

//2、所有的商品复选框都选中全选框也进行选中

//4、小计

oList.click(function(e){
var target=e.target;

    if($(target).prop("class")=="check"){
        
    var li=$(target).parent().parent();
    var oPrice1=li.find(".price");
    var oPrice2=li.find(".selfsum");
    var oNum=li.find(".n");
    var count=parseInt(oCount.text());
    var price=oPrice1.text().slice(1);
    var priceall=oPrice2.text().slice(1);
    var totle=parseInt(oPricetotle.text().slice(1)); 
    if($(target).is(":checked")){
        //3、选中加上背景颜色
        count+=parseInt(oNum.val());
        totle+=parseInt(priceall);
        oPricetotle.text("￥"+totle);
        //li.style.background="#fff4e8";
        li.css("background","#fff4e8");
        oCount.text(count);
    }
    else{
        count-=parseInt(oNum.val());
        oCount.text(count);
        li.css("background","#fff");
        //li.style.background="#fff";
        totle-=parseInt(priceall);
        oPricetotle.text("￥"+totle);
    }
    var checkall=true;
    oCheck.each(function(i){
        if(!oCheck.eq(i).is(":checked")){
            checkall=false;
        }
    })
    
    
    if(checkall){
        oAll.eq(1).prop("checked",true);
        oAll.eq(0).prop("checked",true);
        
        
    }
    else{
        oAll.eq(1).prop("checked",false);
        oAll.eq(0).prop("checked",false);
        
    }
}
if($(target).prop("class")=="reduce"){
    var oNum=$(target).next();
    var oPrice1=$(target).parent().prev();
    var oPrice2=$(target).parent().next();
    var price=oPrice1.text().slice(1);
    var priceall=oPrice2.text().slice(1);
    var totle=parseInt(oPricetotle.text().slice(1));
    var checks=$(target).parent().parent().find(".check");
    var count=parseInt(oCount.text());
    var num=oNum.val();
    if(num>1){
        num--;
        
        oNum.val(num);
        priceall=num*price;
        oPrice2.text("￥"+priceall);
        if(checks.is(":checked")){
            totle-=parseInt(price);
            oPricetotle.text("￥"+totle);
            count--;
            oCount.text(count);
            var goods=JSON.parse(localStorage.infos);
            var lili=$(target).parent().parent();
            var idid=lili.attr("data-id");
            for(var key in goods){
                if(goods[key].id==idid){
                    goods[key].num=parseInt(goods[key].num)-1;
                    localStorage.infos=JSON.stringify(goods);
                }
            }
        }
        
    }
}
if($(target).prop("class")=="add"){
    var oNum=$(target).prev();
    var oPrice1=$(target).parent().prev();
    var oPrice2=$(target).parent().next();
    var price=oPrice1.text().slice(1);
    var priceall=oPrice2.text().slice(1);
    var totle=parseInt(oPricetotle.text().slice(1));
    var checks=$(target).parent().parent().find(".check");
    var count=parseInt(oCount.text());
    var num=oNum.val();
    num++;
    oNum.val(num);
    priceall=num*price;
    oPrice2.text("￥"+priceall);
    if(checks.is(":checked")){
            totle+=parseInt(price);
            oPricetotle.text("￥"+totle);
            count++;
            oCount.text(count);
            var goods=JSON.parse(localStorage.infos);
            var lili=$(target).parent().parent();
            var idid=lili.attr("data-id");
            for(var key in goods){
                if(goods[key].id==idid){
                    goods[key].num=parseInt(goods[key].num)+1;
                    localStorage.infos=JSON.stringify(goods);
                }
            }
        }
    
}
if($(target).prop("class")=="del"){
    var li=$(target).parent().parent();
    var totle=parseInt(oPricetotle.text().slice(1));
    var count=parseInt(oCount.text());
    var oPrice1=li.find(".selfsum");
    var priceall=parseInt(oPrice1.text().slice(1));
    var num=parseInt(li.find(".n").val());
    //console.log(li.querySelector(".n"));
    var checkk=li.find(".check");
    //confirm("确定删除该商品?");
    if(confirm("确定删除该商品?")){
        li.remove();
        if(checkk.is(":checked")){
            count-=num;
            oCount.text(count);
            totle-=priceall;
            oPricetotle.text("￥"+totle);
            
        }
        var goods=JSON.parse(localStorage.infos);
            var lili=$(target).parent().parent();
            var idid=lili.attr("data-id");
            for(var key in goods){
                if(goods[key].id==idid){
                    //console.log(goods)
                    goods.splice(key,1);
                    //console.log(goods)
                    localStorage.infos=JSON.stringify(goods);
                }
            }
    }
}
})
})
