
    async function loadCartList(){
        let uid=localStorage.getItem('uid');
        let url='http://jx.xuzhixiang.top/ap/api/cart-list.php';
        let params = {
            id: uid //*****
        };
        let res = await axios.get(url, {
            params
        })
        console.log(res);
        let cartArr = res.data.data;
        console.log(res);
        let resArr=cartArr.map(pObj=>`
        <div   class="product-line">
        <div   class="checkbox" >
        <input type="checkbox"class='single-sel-btn'  name="" id="">
       
    </div>
    <div   class="image">
        <img   src="${pObj.pimg}" class="with-link"></div>
        <div   class="product">
            <div>
                <p   class="product-name">${pObj.pname}</p>
                <p class="capacity">
                    <span   class="color-main style-round" ">
                    </span> 584 35ml 中一白 
                </p>
                <p   class="product-title">

                </p>
                <p   style="margin-top: 10px;">
                    <span   class="btn">
                         修改</span>
                          · <span   class="btn">+心愿单</span>
                           · <span  onclick="delEvent(${pObj.pid},window.event)" class="btn shanchu111">删除</span>
                        </p><!----><!----><!----><!---->
                    </div>
                </div>
                <div   class="count">
                <input type="button" value="+" onclick="addNumEvent(${pObj.pid},window.event)" style='width:30px'>
                <input type="text" value="${pObj.pnum}" style='width:50px'class='pnum' >
                <input type="button" value="-" onclick="subNumEvent(${pObj.pid},window.event)" style='width:30px'>
                </div>
                <div class="priceall">
                    <span >${pObj.pnum}</span>
                    <p  class='pprice'>${pObj.pprice}
                    </p>
                </div>
                </div>
        `)
        let list=document.querySelector('.product-line-zong');
        list.innerHTML=resArr.join('');
        console.log(res.data);
    }
    loadCartList()
    
    
        console.log(111);
    async function delEvent(pid,evt){
        console.log(pid,evt);
        let uid=localStorage.getItem('uid');
        let params={
            uid,
            pid
        }
        let url='http://jx.xuzhixiang.top/ap/api/cart-delete.php';
        let res=await axios.get(url,{
            params
        });
        console.log(res);
        evt.target.parentNode.parentNode.parentNode.parentNode.remove()
        }
//    console.log(delEvent());
async function addNumEvent(pid, evt){
    let n=parseInt(evt.target.nextElementSibling.value);
    console.log(n);
    n++;
    evt.target.nextElementSibling.value = n;
    let url = 'http://jx.xuzhixiang.top/ap/api/cart-update-num.php';
    let uid = localStorage.getItem('uid')
    let params = {
             uid,
            pid,
            pnum: n
    }
    let res = await axios.get(url, {
        params
    })
    console.log(res.data);
    countPrice()
}
async function subNumEvent(pid, evt) {
    // 让输入框的数量加1   
    let n = parseInt(evt.target.previousElementSibling.value)
    console.log(n);
    n--;
    if (n === 0) {
        let r = confirm('是否要删除商品')
        //调用删除接口
        return;
    }
    evt.target.previousElementSibling.value = n;

    // 发起请求
    let url = 'http://jx.xuzhixiang.top/ap/api/cart-update-num.php'
    let uid = localStorage.getItem('uid')
    let params = {
        uid,
        pid,
        pnum: n
    }
    let res = await axios.get(url, {
        params
    })
    console.log(res.data);

    // let price_tanjia=`
    // <span >${pObj.pnum}</span>
    // <p >¥${pObj.pprice}
    // </p>
    // `;
    // let priceall=evt.target.parentNode.parentNode.parentNode.value()
    countPrice()
   
}
let allBtn=document.querySelector("#all-sel-btn");
console.log(allBtn);
allBtn.onchange = function () {
    console.log(this.checked);
    let singleBtns = document.querySelectorAll('.single-sel-btn')
    console.log(singleBtns);
    singleBtns.forEach(btn => btn.checked = this.checked)


    countPrice()
    
}
let singleBtns = document.querySelectorAll('.single-sel-btn');
console.log(singleBtns);
document.onchange = function (evt) {
    if (evt.target.classList.contains('single-sel-btn')) {
        console.log('single');
        countPrice()

        // 获取所有单选按钮
        let singleBtns = document.querySelectorAll('.single-sel-btn')
        console.log(singleBtns);
    //     // 判断 是否所有的单选按钮 checked都是true 
    //     // [...singleBtns] 转为真数组
        let flag = [...singleBtns].every(v => v.checked == true);
        allBtn.checked = flag;
    }
}
function countPrice(){
    let res = 0;
    let pnums=0
    let singleBtns = document.querySelectorAll('.single-sel-btn');
    singleBtns.forEach(singleBtn=>{
        if(singleBtn.checked==true){
           
        //    let aaaa=singleBtn.parentNode.parentNode.querySelector('.pprice').innerHTML;
        //    console.log(aaaa);
            let priceP=singleBtn.parentNode.parentNode.querySelector('.pprice'); 
            console.log(priceP.innerHTML);
            let price=Number(priceP.innerHTML);
            let pnum = Number(document.querySelector(".pnum").value)
            let count=price*pnum;
            res=res+count;
            pnums=pnums+pnum
        }
    })
    console.log(res);
    let ppries_zong=`
    <span>${res}</span>
    `
    let zongjia=document.querySelectorAll('.price-zong1');
    zongjia[0].innerHTML=ppries_zong
    zongjia[1].innerHTML=ppries_zong

    let pnum_zong=`（${pnums}个）`;
    let pnums_zong1=document.querySelector('.pnums_zong');
    pnums_zong1.innerHTML=pnum_zong;
    console.log(document.querySelectorAll('.price-zong1'));
        // document.querySelectorAll('.price-zong1').innerHTML=res;
}
$('.jiesuan-liji').click(function(){
    let n=document.querySelector('.price-zong1').innerHTML
    let r = confirm(`请支付${n}元`)
    //调用删除接口
    return 
})
