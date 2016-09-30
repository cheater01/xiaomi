/**
 * Created by Cheater01 on 2016/9/28.
 */
(function($,window){
    //购物车移动事件
    var $tcard=$(".topbar-card");
    var $tcontent=$(".topbar-content");
    $tcard.mouseover(function(){
        $tcontent.stop(true,false);
        $tcontent.animate({"height":"100px"},200);
    });
    $tcard.mouseleave(function(){
        $tcontent.stop(true,false);
        $tcontent.animate({"height":"0"},200);
    });
    //搜索框逻辑


    //头部产品展示逻辑
    var $hcontent=$(".header .header-content");
    $(".header .header-nav li a").mouseover(function(){
        $hcontent.stop(true,false);
        $hcontent.slideDown();
        $hcontent.children(".container").children().hide();
        $hcontent.children(".container").children("."+$(this).data("content")).show();
    });
    $(".header .header-nav").mouseleave(function(){
        $hcontent.stop(true,false);
        $hcontent.slideUp();
    });
    $hcontent.mouseover(function(){
        $hcontent.stop(true,false);
    });
    $hcontent.mouseleave(function(){
        $hcontent.stop(true,false);
        $hcontent.slideUp();
    });

    //主列表产品展示
    var $homeConntents=$(".home .home-list li .home-content");
    var $homeList=$(".home .home-list li");
    $homeList.mouseover(function(){
        $homeConntents.hide();
        $(this).children(".home-content").show();
    });
    $homeList.mouseleave(function(){
        $homeConntents.hide();
    });

    //轮播图逻辑
    var $bannerUl=$(".home-banner .b-imgs");
    var $prev=$(".home-banner .prev");
    var $next=$(".home-banner .next");
    var $slids=$(".home-banner .b-slids li a");
    var curIndex=0;
    var offset=992;
    $slids.click(function(){
        var index=$(this).data("index");
        curIndex=index;
        $slids.removeClass("current");
        $(this).addClass("current");
        $bannerUl.scroll(true,false);
        $bannerUl.animate({"left":-curIndex*offset+"px"},300);

    });
    $prev.click(onChose("prev"));
    $next.click(onChose("next"));
    function onChose(state)
    {
        return function(){
            switch(state)
            {
                case "prev":
                    curIndex==0?curIndex=0:curIndex--;
                    break;
                case "next":
                    curIndex==3?curIndex=3:curIndex++;
                    break;
            }
            $bannerUl.scroll(true,false);
            $bannerUl.animate({"left":-curIndex*offset+"px"},300);
            $slids.each(function(key,value){
                $(value).data("index")==curIndex?$(value).addClass("current"):$(value).removeClass("current");
            });
        };
    };

    //明星物品轮播
    var $gpre=$(".home .home-goods .goods-btns .goods-prev");
    var $gnext=$(".home .home-goods .goods-btns .goods-next");
    var $goodslistUl=$(".home .home-goods ul");
    $gpre.click(function(){
        $goodslistUl.stop(true,false);
        $goodslistUl.animate({"left":"0px"},200);
    });
    $gnext.click(function(){
        $goodslistUl.stop(true,false);
        $goodslistUl.animate({"left":"-1245px"},200);
    });



    var $nrBtns=$(".neirong .neirong-btns li");
    $nrBtns.click(function(event){
        var event=window.event||event;
        event.stopPropagation();
        event.preventDefault();
        var curul=$(this).parent().prev();
        var index=$(this).data("index");
        $(this).siblings().removeClass("current");
        $(this).addClass("current");
        curul.animate({"left":-309*index+"px"},200);


    });





}($,window));
