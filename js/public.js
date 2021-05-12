 $(document).ready(function () {
            //获取nav距离顶部的距离
            var navtop = $(".header-nav").offset().top;
            $(document).scroll(function () {
                //获取滚动条滚动的高度
                var scroltop = $(document).scrollTop();
                var scrollbuttom = $(document).scroll
                if (scroltop > navtop) {
                    $(".header-nav").css({
                        "position": "fixed",
                        "left": "0px",
                        "top": "0px",
                        "width": "100%"
                    })
                    if (scroltop > 200) {
                        $('.cebian').css({
                            "display": "block"
                        })
                        $('.scroll-top-wrap').css({
                            "display": "block"
                        })
                    } else {
                        $('.scroll-top-wrap').css({
                            "display": "none"
                        })
                    }
                } else {
                    $(".header-nav").css({
                        "position": "",
                        "left": "",
                        "top": "",
                        "width": ""
                    })
                    $('.cebian').css({
                        "display": "none"
                    })
                    $('.scroll-top-wrap').css({
                        "display": "none"
                    })
                }
            })
            $('.scroll-top-wrap').click(function () {
                $('body,html').animate({ scrollTop: 0 }, 200)
            })
        })
        //侧边弹出框
$(function () {
            $('#cebian-zixun').click(function () {
                $('.backscreen').show();
                $('#zixun-tanchuang').css("display", "block")
            })

            $('.dialog-top .close,.cebiantanchuang-box-btn-quxiao').click(function (e) {
                console.log(this);
                $('.backscreen').hide();
                $('.cebiantanchuang').css("display", "none")
            })

            
            $('.zhuce-box-btn').click(function () {
                $('.backscreen').show();
                $('.zhuce').css("display", "block")
            })

            $('.dialog-top .close,.cebiantanchuang-box-btn-quxiao').click(function (e) {
                console.log(this);
                $('.backscreen').hide();
                $('.zhuce').css("display", "none")
            })
            $('.cebiantanchuang-shubiao').mouseover(function () {
                $(this).css({
                    "background-color": "rgb(204,204,204)",
                    "color": "#000"
                })
            })
            $('.cebiantanchuang-shubiao').mouseout(function () {
                $(this).css({
                    "background-color": "#000",
                    "color": "#fff"
                })
            })
            // 
            $('.mouse-item').mouseover(function () {
                $(this).parent().children(2).css("display", "block")
            })
            $('.mouse-item').mouseout(function () {
                $(this).parent().children(".mouse-item-out").css("display", "none")
            })
            $('.attention').mouseover(function () {
                $(this).children(".hover-box").css("display", "block")
            })
            $('.attention').mouseout(function () {
                $(this).children(".hover-box").css("display", "none")
            })
            $('.bangzhu-box-left').children('ul').children('li').children('a').mouseover(function () {
                $(this).css({
                    "color": "#b90220",
                    "text-decoration": " underline"
                })
            })
            $('.bangzhu-box-left').children('ul').children('li').children('a').mouseout(function () {
                $(this).css({
                    "color": "#000",
                    "text-decoration": " none"
                })
            })

            $('.top-style').mouseenter(function () {
            $(this).children('.top-xiala').slideDown(800)
            })
         $('.top-style').mouseleave(function () {
            $(this).children('.top-xiala').fadeOut(10)
            console.log(111);
         })
         $('.default-radio').click(function(){
            $(this).children($('.dot')).css('display',"block")
            $(this).click(function(){
                $(this).children($('.dot')).css('display',"none")
             })
         })
        
         
         $('.zhuce-btn-liji').click(function(){
             console.log(this);
             
         })
         let ipts=document.querySelectorAll('.zhuce-ipt');
         let tips=document.querySelector('.yanzheng');
         let isUsername=false;
         let isPassword=false;
         let isTest=false;
         ipts[0].onblur=function(){
             console.log(this);
             let username=this.value;
             console.log(username);
             let reg=/^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/;
             console.log(reg.test(username));
             if(reg.test(username)){
                let url='http://jx.xuzhixiang.top/ap/api/checkname.php';
                axios.get(url,{
                    params:{
                        username:username
                    }
                })
                .then((res)=>{
                    console.log(res.data);
                    this.parentElement.nextElementSibling.innerHTML=res.data.msg;
                    if(res.data.code==1){
                        isUsername=true;
                        console.log(isUsername);
                        this.parentElement.nextElementSibling.style.display='none';
                    }else{
                        isUsername=false;
                        this.parentElement.nextElementSibling.style.display='block'
                    }
                })
                .catch(()=>{
                    isUsername=false;
                    tips[this.index].style.display='block'
                })
             }
             else{
                this.parentElement.nextElementSibling.innerHTML='格式不正确'
                 this.parentElement.nextElementSibling.style='block'
                 

             }
         }
         ipts[1].onblur=function(){
             let password=this.value;
             let reg= /^.{6,}$/;
             if(reg.test(password)){
                 isPassword=true;
                 this.parentElement.nextElementSibling.style.display='none';
                 
             }else{
                 isPassword=false;
                 this.parentElement.nextElementSibling.style='block'

             }
         }
         ipts[2].onblur=function(){
            let test=this.value;
            let reg= /^.{6,}$/;
            if(reg.test(test)){
                isTest=true;
                this.parentElement.nextElementSibling.style.display='none';
                
            }else{
                isTest=false;
                this.parentElement.nextElementSibling.style='block'


            }
        }
        let zhuce=document.querySelector('.zhuce-btn-liji')
        zhuce.onclick=function(){
            let username=ipts[0].value;
            let password=ipts[1].value;
            ipts[0].value='';
            ipts[1].value='';
            ipts[2].value='';
            if(isPassword&&isUsername&&isTest){
                let regAPI='http://jx.xuzhixiang.top/ap/api/reg.php';
                axios.get(regAPI,{
                    params:{
                        username:username,
                        password
                    }
                })
                .then(res=>{
                    console.log(res.data);
                    window.location.replace("family.html")
                })
                .catch(error=>{
                    console.log(error);
                })
            }
        }
        $.denglu1()
        $.tiaozhuan11()
       
})
$.denglu1=function(){
    let ipts=document.querySelectorAll('.login-mima-ipt');
    console.log(ipts);
    let isUsername=false;
    let isPassword=false;
    let denglu=document.querySelector('#denglu-box-btn1')
    let err=document.querySelector('.err-msg')
    ipts[0].onblur=function(){
        let username=this.value;
        let reg=/^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/;
        if(reg.test(username)){
            isUsername=true;
            err.style.display='none';
            console.log(444);
        }
        else{
            isUsername=false;
            err.style.display='block'
            console.log(555);
        }
    }
    ipts[1].onblur=function(){
        let password=this.value;
        let reg= /^.{6,}$/;
        if(reg.test(password)){
            isPassword=true;
            err.style.display='none';
            
        }else{
            isPassword=false;
            err.style.display='block'

        }
    }
    // ipts[1].onblur=function(){
    //     let password=this.value;
    //     let reg = /^.{6,}$/;
    //     if(reg.test(password)){
    //         isPassword=true;
    //         err.style.display='none';
    //     }else{
    //         isPassword=false;
    //         err.style.display='block'

    //     }
    // }
    denglu.onclick=function(){
        console.log(222);
        let username=ipts[0].value;
        let password=ipts[1].value;
        ipts[0].value='';
        ipts[1].value='';
        if(isPassword&&isUsername){
            console.log(333);
            let loginAPI='http://jx.xuzhixiang.top/ap/api/login.php'
            axios.get(loginAPI,{
                params:{
                    username:username,
                    password
                }
            })
            .then(res=>{
                console.log(res.data);
                if(res.data.code==1){
                    alert(res.data.msg)
                    localStorage.setItem('uid',res.data.data.id);
                    localStorage.setItem('token',res.data.data.token);
                    
                    location.href='family.html'
                }
            })
            .catch(error=>{
                console.log(error);
            })
        }
    }

}
$.tiaozhuan11=function(){
    $('.header-buttom').click(function(){
        window.location.replace("cart.html")
    })
    $('.header-logo').click(function(){
        window.location.replace("family.html")
    })
}

$(function(){
   
})

        