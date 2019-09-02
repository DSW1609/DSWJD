// 轮播图(一行多个)
function lunbotuS(peace,arrow_l,arrow_r,time){
  // 获取外层大盒子
  var peace = document.querySelector(peace);
  // 得到盒子的宽度
  var spikeW = peace.offsetWidth;
  // 获取左侧箭头
  var arrow_l = document.querySelector(arrow_l);
  // 获取右侧箭头
  var arrow_r = document.querySelector(arrow_r);
  peace.addEventListener('mouseenter',function(){
    // 鼠标移入同时清除定时器
    clearInterval(peacetimer);
    peacetimer = null;
  });
  peace.addEventListener('mouseleave',function(){
    // 鼠标移出重新启用定时器，图片继续自动滚动
    peacetimer = setInterval(function(){
      // 手动调用右侧箭头的点击事件
      arrow_r.click();
    },time * 1000);
  });
  // 点击右侧箭头无缝滚动事件
  // 首先利用节点操作克隆第一个li放到ul的最后
  // 获取ul
  var peaceul = peace.querySelector('ul');
  // 获取其中的li
  var peaceli = peaceul.querySelectorAll('li');
  // 克隆第一个li到最后
  var peace_first_li = peaceul.children[0].cloneNode(true);
  peaceul.appendChild(peace_first_li);
  var peacenum = 0;
  // 右侧箭头点击事件
  // 使用节流阀控制动画播放完后再切换下一张
  var peaceflag = true;
  arrow_r.addEventListener('click',function() {
    if(peaceflag){
      peaceflag = false;
      if(peacenum == peaceli.length){
        peaceul.style.left = 0;
        peacenum = 0;
      }
      peacenum++;
      relax(peaceul,-spikeW * peacenum,function(){
        // 通过回调函数，动画播放完后恢复点击
        peaceflag = true;
      });
    }
  });
  // 左侧箭头点击事件
  arrow_l.addEventListener('click',function() {
    if(peaceflag){
      peaceflag = false;
      if(peacenum == 0){
        peacenum = peaceli.length;
        peaceul.style.left = -peacenum * spikeW + 'px';
      }
      peacenum--;
      relax(peaceul,-spikeW * peacenum,function(){
        peaceflag = true;
      });
    }
  })
  // 添加自动播放的定时器
  var peacetimer = setInterval(function(){
    // 手动调用右侧箭头的点击事件
    arrow_r.click();
  },time * 1000);
}
