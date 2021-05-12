
//注意：选项卡 依赖 element 模块，否则无法进行功能性操作
layui.use('element', function(){
  var element = layui.element;
  
  //…
});
$(function(){
  $.star_chanpin()
  $.new_chanpin()

})
$.star_chanpin=function(){
  let pagenum=7;
  let pagesize=4;
  let uid=localStorage.getItem('uid');
  console.log(777);
  let listAPI='http://jx.xuzhixiang.top/ap/api/allproductlist.php';
  axios.get(listAPI,{
      params:{
          pagesize,
          pagenum
      }
  })
  .then(res=>{
      console.log(res);
      let productArr = res.data.data;
      console.log(productArr);
      console.log(productArr.pprice);
      let resArr=productArr.map(pObj=>`
      <div class="mingxingchanpin-box-item">
      <div class="mingxingchanpin-box-item-top">
          <img src="${pObj.pimg}" alt="">
      </div>
      <b class="product-name">${pObj.pname}</b>
      <span class="title">绿茶萃取 净澈清洁</span>
      <div class="default-rate is-readonly" disabled="disabled">
          <div class="rate"></div>
          <div  class="rate"></div>
          <div class="rate"></div>
          <div class="rate"></div>
          <div class="rate"></div>
      </div>
      <div class="btn-wrap">
          <div class="price">
          ￥${pObj.pprice}
          </div> 
          <div class="bangzhu-box-right-shubiao">

              <div class="cebiantanchuang-shubiao bangzhu-box-right-shubiao1 buy-box-btn buy-box-btn1">
                  立即购买
              </div>
          </div>
      </div>
  </div>
      `)
    //   console.log(pObj.pname);
      let list=document.querySelector('.mingxingchanpin-list');
      list.innerHTML=resArr.join('')
      let buy_btns1=document.querySelectorAll('.buy-box-btn1');
      console.log(res.data.data);
      $('.buy-box-btn').mouseover(function(){
          $(this).css({
              'background-color': '#fff',
              'color':' #000'
          })
          // console.log(res);
      })
      $('.buy-box-btn').mouseout(function(){
          $(this).css({
              'background-color': '#000',
              'color':' #fff'
          })
      })
     
      
      for(var i=0;i<4;i++){
          var a=buy_btns1[i];
          a.index=i;

          buy_btns1[i].onclick=function(){
              // console.log(i);
              // console.log(this.index);
              localStorage.setItem('pid',res.data.data[this.index].pid);
              console.log(res.data.data[this.index].pid);
              window.location.href="xiangqing.html"

          }
      }
  })
 
  
      
}
$.new_chanpin=function(){
  let pagenum=10;
  let pagesize=3;
  let uid=localStorage.getItem('uid');
  console.log(777);
  let listAPI='http://jx.xuzhixiang.top/ap/api/allproductlist.php';
  axios.get(listAPI,{
      params:{
          pagesize,
          pagenum
      }
  })
  .then(res=>{
      console.log(res);
      let productArr = res.data.data;
      console.log(productArr);
      console.log(productArr.pprice);
      let resArr=productArr.map(pObj=>`
      <div class="xinpin-box-item">
      <div class="image-wrapper">
          <div  alt="${pObj.pname}" class="image-wrap product-card-img">
              <img  src="${pObj.pimg}">
          </div>
      </div>
      <div class="xinpng-box-item-right">
          <div class="text-line-content">
              <b class="title">${pObj.pname}</b>
              <b >一步卸净 细腻透亮肌</b>
          </div>
          <div  class="rate-wrap" id="xinpin-box-warp">
              <div class="default-rate is-readonly" disabled="disabled">
                  <div class="rate seled">

                  </div>
                  <div class="rate seled"></div>
                  <div class="rate seled"></div>
                  <div class="rate seled"></div>
                  <div  class="rate seled"></div>
              </div>
              <span  class="price">￥${pObj.pprice}</span>
           </div>
           <div class="bangzhu-box-right-shubiao">
              <div class="cebiantanchuang-shubiao bangzhu-box-right-shubiao1 buy-box-btn buy-box-btn2">立即购买</div>
      </div>
   </div>
  </div>
      `)
      let list=document.querySelector('.xinpin-box-neirong-list');
      list.innerHTML=resArr.join('')
      let buy_btns2=document.querySelectorAll('.buy-box-btn2');
      $('.buy-box-btn').mouseover(function(){
          $(this).css({
              'background-color': '#fff',
              'color':' #000'
          })
      })
      $('.buy-box-btn').mouseout(function(){
          $(this).css({
              'background-color': '#000',
              'color':' #fff'
          })
      })
      for(var i=0;i<3;i++){
          var a=buy_btns2[i];
          a.index=i;
          
          a.onclick=function(){
              console.log(this.index);
              localStorage.setItem('pid',res.data.data[this.index].pid);
              // console.log(res.data.data[this.index].pid);
              window.location.href="xiangqing.html"

          }
      }
  })
 
  
      
}
