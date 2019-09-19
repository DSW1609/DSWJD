// 轮播图（大图）
// 添加鼠标移入显示箭头事件
function lunbotuB(obj, arrow_l, arrow_r, time) {
  // 获取装轮播图的大盒子
  var obj = document.querySelector(obj);
  //左右箭头
  var arrow_l = document.querySelector(arrow_l);
  var arrow_r = document.querySelector(arrow_r);
  obj.addEventListener('mouseenter', function() {
    arrow_l.style.display = 'block';
    arrow_r.style.display = 'block';
    // 鼠标移入同时清除定时器
    clearInterval(objtimer);
    objtimer = null;
  });
  obj.addEventListener('mouseleave', function() {
    arrow_l.style.display = 'none';
    arrow_r.style.display = 'none';
    // 鼠标移出重新启用定时器，图片继续自动滚动
    objtimer = setInterval(function() {
      // 手动调用右侧箭头的点击事件
      arrow_r.click();
    }, time * 1000);
  });
  // 点击底部小圆点切换图片事件
  var objul = obj.querySelector('ul');
  var objulli = objul.querySelectorAll('li');
  var objolli = obj.querySelector('ol').querySelectorAll('li');
  var objW = obj.offsetWidth;
  for (var i = 0; i < objolli.length; i++) {
    objolli[i].addEventListener('click', function() {
      // 先清除所有li的class
      for (var i = 0; i < objolli.length; i++) {
        objolli[i].style.listStyleType = "";
      }
      // 点击谁把className添加到谁
      this.style.listStyleType = "disc";
      var objindex = this.getAttribute("data-index");
      // 把index值赋给num,circle，使底部小圆圈指示位置和图片位置对应
      objnum = objcircle = objindex;
      relax(objul, -objW * objindex);
    })
  }
  // 点击右侧箭头无缝滚动事件
  // 首先利用节点操作克隆第一个li放到ul的最后
  var objfirstli = objul.children[0].cloneNode(true);
  objul.appendChild(objfirstli);
  var objnum = 0;
  var objcircle = 0;
  // 右侧箭头点击事件
  // 使用节流阀控制动画播放完后再切换下一张
  var objflag = true;
  arrow_r.addEventListener('click', function() {
    if (objflag) {
      objflag = false;
      if (objnum == objulli.length) {
        objul.style.left = 0;
        objnum = 0;
      }
      objnum++;
      relax(objul, -objW * objnum, function() {
        // 通过回调函数，动画播放完后恢复点击
        objflag = true;
      });
      // 点击右侧箭头，使下面小圆圈一起变化
      objcircle++;
      // 如果与olli的长度一致，说明到最后一个点了，就把变量复原即从头开始
      objcircle = objcircle == objolli.length ? 0 : objcircle;
      // 调用更改类名函数
      circleChange();
    }
  });
  // 左侧箭头点击事件
  arrow_l.addEventListener('click', function() {
    if (objflag) {
      objflag = false;
      if (objnum == 0) {
        objnum = objulli.length;
        objul.style.left = -objnum * objW + 'px';
      }
      objnum--;
      relax(objul, -objW * objnum, function() {
        objflag = true;
      });
      // 点击右侧箭头，使下面小圆圈一起变化
      objcircle--;
      // 如果小于0，而说明到最后一张图片了，需要把值改为3
      objcircle = objcircle < 0 ? objolli.length - 1 : objcircle;
      // 调用更改类名函数
      circleChange();
    }
  })
  // 封装更改类名函数
  function circleChange() {
    // 首先清除全部li的类名
    for (var i = 0; i < objolli.length; i++) {
      objolli[i].style.listStyleType = "";
    }
    objolli[objcircle].style.listStyleType = "disc";
  }
  // 添加自动播放的定时器
  var objtimer = setInterval(function() {
    // 手动调用右侧箭头的点击事件
    arrow_r.click();
  }, time * 1000);
}
