$(document).ready(function(){
    
    function wwww(){
        console.log(1111);
        var $mark = $("#mark");
        var $box1 = $("#box1");
        var $box2 = $("#box2");
        console.log($box1);
        var $img = $box2.children("img");
        let bb;
        $box1.on("mouseenter",
        function(e) {
        console.log(2222);
    
            //首先让mark遮罩显示
            $mark.stop().show();
            //再让box2显示
            $box2.stop().show();
            move(e)
        }).on("mousemove",
        function(e) {
            $mark.stop().show();
            $box2.stop().show();
            move(e);
        }).on("mouseleave",
        function(e) {
            $mark.stop().hide();
            $box2.stop().hide();
        })
        $.xhangqing_shangpin()
        function move(e) {
            var l = e.clientX - $box1.offset().left - $mark.outerWidth() / 2;
            var t = e.clientY - $box1.offset().top - $mark.outerHeight() / 2;
            var minL = 0,
            minT = 0;
            var maxL = $box1.outerWidth() - $mark.outerWidth();
            var maxT = $box1.outerHeight() - $mark.outerHeight();
            l = l <= minL ? 0 : (l >= maxL ? maxL: l);
            t = t <= minT ? 0 : (t >= maxT ? maxT: t);
            $mark.css({
                left: l,
                top: t
            });
            $img.css({
                marginLeft: -1.5 * l,
                marginTop: -1.5 * t
            });
        }
        $('.icon-heart').mouseover(function(){
            $(this).css("background-image","url(../img/solid_heart.dd3cbfea.svg)")
        })
        $('.icon-heart').mouseout(function(){
            $(this).css("background-image","url(../img/heart-empty.3751f109.svg)")    
        })
        $('.count-shuliang-block').css('display','none')
        $('.count-shuliang').click(function(){
            // let bb;
            if( $('.count-shuliang-block').css('display')=='none'){
                $('.count-shuliang-block').css('display','block')
                $('.count-shuliang-block li').removeClass()
                $('.count-shuliang-block li').mouseover(function(){
                    let b=$(this).index()+1;
                    // console.log(b);
                    let bb=b;
                    
                    $(this).addClass('isSelected');
                    $(this).click(function(){
                        localStorage.setItem('bbb',b)
                        
                        $('.count-shuliang').text($(this).text());
                        $('.count-shuliang-block').css('display','none')
                    })
                })
                console.log(bb);
               $('.count-shuliang-block li').mouseout(function(){
                $('.count-shuliang-block li').removeClass()
               })
            }else{
                $('.count-shuliang-block').css('display','none')
            }
           
            return bb;
          
        })
        console.log(bb);
    }

    $.add_cart()
    wwww();
})
layui.use('element', function(){
    var element = layui.element;
    
    //…
  });
$.xhangqing_shangpin=function(){
    let pid=localStorage.getItem('pid')
    // let obj=new URLSearchParams(location.search);
    // let pid=obj.get('pid')
    console.log(pid);
    let detailAPI='http://jx.xuzhixiang.top/ap/api/detail.php';
    let params={id:pid};
    let uid = localStorage.getItem('uid');
    axios.get(detailAPI,{params}).then(res=>{
        let pObj=res.data.data;
        let xiangqing=`
        <div class="product-box-img">
        <div class="img-box">
            <div id="box1">
                <img src="${pObj.pimg}">
                <div id="mark">
                </div>
            </div>
            <div id="box2">
                <img src="${pObj.pimg}">
            </div>
        </div>
        <div class="img-box-shuoming">${pObj.pname}</div>
    </div>
    <div class="icon-heart"></div>
        `
        let product_box_left=document.querySelector('.product-box-left');
        product_box_left.innerHTML=xiangqing;
        console.log($('#box1'));
        var $mark = $("#mark");
    var $box1 = $("#box1");
    var $box2 = $("#box2");
    console.log($box1);
    let bb;
    var $img = $box2.children("img");
        console.log($box1);
        $box1.on("mouseenter",
        function(e) {
        console.log(2222);
    
            //首先让mark遮罩显示
            $mark.stop().show();
            //再让box2显示
            $box2.stop().show();
            move(e)
        }).on("mousemove",
        function(e) {
            $mark.stop().show();
            $box2.stop().show();
            move(e);
        }).on("mouseleave",
        function(e) {
            $mark.stop().hide();
            $box2.stop().hide();
        })
        $.xhangqing_shangpin()
        function move(e) {
            var l = e.clientX - $box1.offset().left - $mark.outerWidth() / 2;
            var t = e.clientY - $box1.offset().top - $mark.outerHeight() / 2;
            var minL = 0,
            minT = 0;
            var maxL = $box1.outerWidth() - $mark.outerWidth();
            var maxT = $box1.outerHeight() - $mark.outerHeight();
            l = l <= minL ? 0 : (l >= maxL ? maxL: l);
            t = t <= minT ? 0 : (t >= maxT ? maxT: t);
            $mark.css({
                left: l,
                top: t
            });
            $img.css({
                marginLeft: -1.5 * l,
                marginTop: -1.5 * t
            });
        }
        $('.icon-heart').mouseover(function(){
            $(this).css("background-image","url(../img/solid_heart.dd3cbfea.svg)")
        })
        $('.icon-heart').mouseout(function(){
            $(this).css("background-image","url(../img/heart-empty.3751f109.svg)")    
        })
        $('.count-shuliang-block').css('display','none')
        $('.count-shuliang').click(function(){
            // let bb;
            if( $('.count-shuliang-block').css('display')=='none'){
                $('.count-shuliang-block').css('display','block')
                $('.count-shuliang-block li').removeClass()
                $('.count-shuliang-block li').mouseover(function(){
                    let b=$(this).index()+1;
                    // console.log(b);
                    let bb=b;
                    
                    $(this).addClass('isSelected');
                    $(this).click(function(){
                        localStorage.setItem('bbb',b)
                        
                        $('.count-shuliang').text($(this).text());
                        $('.count-shuliang-block').css('display','none')
                    })
                })
                console.log(bb);
               $('.count-shuliang-block li').mouseout(function(){
                $('.count-shuliang-block li').removeClass()
               })
            }else{
                $('.count-shuliang-block').css('display','none')
            }
           
            return bb;
          
        })
        console.log(bb);
        let xiangqing_right1=`
        <h1 class="product-name">
        ${pObj.pname}
    </h1>
    <h2  class="product-subtitle">
        ULTIME8
    </h2>
    <div class="product-review-main">
        <div class="default-rate is-readonly" disabled="disabled">
            <div class="rate seled"></div>
            <div class="rate seled"></div>
            <div class="rate seled"></div>
            <div  class="rate seled"></div>
            <div class="rate"></div>
        </div>
            
        <span class="product-review">
            0条评论
        </span><!---->
    </div>
    <div class="product-description">
        <span  class="introduction">
            臻选8大植物精萃，提供SPA般羊绒丰润质地，日复一日，给予肌肤洁净、滋润、柔软、平滑、光泽、透亮、弹性、匀净8*大多方位养护。
    8*：数据来源于公司内部消费者使用测试，75位亚洲女性使用4周后结果。
</span>
<span class="more">
    查看更多&gt;
</span>
    </div>
        `
        let detail_info_text=document.querySelector('.detail-info-text');
        detail_info_text.innerHTML=xiangqing_right1;
        let shuliang_geshu=document.querySelector('.count-shuliang p').innerText;
        localStorage.getItem('bbb')
        let cc=localStorage.getItem('bbb');
        console.log(localStorage.getItem('bbb'));
        localStorage.setItem('ccc',cc*pObj.pprice);
        let dd=localStorage.getItem('ccc')
        let prise_danjia=`
        ¥${dd}
        `
        let pp=document.querySelector('.price-xiangqing');
        pp.innerHTML=prise_danjia;
    }).catch()
}
$.add_cart=function(){
    $('.buy-box-btn').click(function(){
        let pnum=1;
        let uid=localStorage.getItem('uid')
        let pid=localStorage.getItem('pid')
        let params={
            uid,
            pid,
            pnum
        };
        let url='http://jx.xuzhixiang.top/ap/api/add-product.php';
        axios.get(url,{params});
        alert('加入购物车成功')
        window.location.href="cart.html"
    })
}