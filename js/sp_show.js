// 下拉菜单代码
var navlio = document.querySelectorAll('.nav_lio');
var lixl = document.querySelectorAll('.lixl');
for (var i = 0; i < navlio.length; i++) {
  navlio[i].addEventListener('mouseenter', function () {
    // 点击谁根据自定义属性的值显示谁
    var index = this.getAttribute("data-index");
    this.classList.add("liover");
    navlio[index].style.padding = '0 4' + 'px';
    lixl[index].style.display = "block";
  })
  navlio[i].addEventListener('mouseleave', function () {
    // 隐藏所有的li的样式及下拉菜单
    for (var i = 0; i < lixl.length; i++) {
      lixl[i].style.display = "none";
      navlio[i].style.padding = "0 5" + 'px';
      navlio[i].classList.remove("liover");
    }
  })
};
// 左上选择位置下拉菜单
var address = document.querySelector('.select_address');
var addyc = document.querySelector('.select_addyc');
var address_a = document.querySelector('#address_a');
var addyc_city = document.querySelector('.select_addyc_city').querySelectorAll('a');
address.addEventListener('mouseenter', function () {
  this.classList.add("liover");
  this.style.left = "-1" + 'px';
  this.style.top = "-1" + 'px';
  addyc.style.display = "block";
})
for (var i = 0; i < addyc_city.length; i++) {
  addyc_city[i].addEventListener('click', function () {
    var data_city = this.getAttribute('data_city');
    // 先清除所有的类名
    for (var i = 0; i < addyc_city.length; i++) {
      addyc_city[i].classList.remove('city_red');
    }
    // 给当前点击的添加类名
    this.classList.add("city_red");
    var data_city = this.getAttribute("data-city");
    // 如果data-city等于0,宽度设为60;
    address.style.width = data_city == 0 ? 60 + 'px' : 50 + 'px';
    // 把当前点击额值赋给导航栏
    address_a.innerHTML = this.innerHTML;
  })
}
address.addEventListener('mouseleave', function () {
  this.classList.remove("liover");
  this.style.left = 0;
  this.style.top = 0;
  addyc.style.display = "none";
})
// 店铺导航栏下拉菜单
var show_nav_li = document.querySelectorAll(".show_nav_li");
var show_nav_yc = document.querySelectorAll(".show_nav_yc");
// 循环注册li触碰事件
for (let i = 0; i < show_nav_li.length; i++) {
  show_nav_li[i].addEventListener("mouseenter", function () {
    // 获得当前触碰的自定义属性的值
    var li_index = this.getAttribute("data-index");
    // 首先隐藏所有的下拉菜单
    for (let i = 0; i < show_nav_yc.length; i++) {
      show_nav_yc[i].style.display = "none";
    }
    // 根据自定义属性显示对应的下拉菜单
    show_nav_yc[li_index].style.display = "block";
  })
}
// li移出事件
for (let i = 0; i < show_nav_li.length; i++) {
  show_nav_li[i].addEventListener("mouseleave", function () {
    // 隐藏所有的下拉菜单
    for (let i = 0; i < show_nav_yc.length; i++) {
      show_nav_yc[i].style.display = "none";
    }
  })
}
// 触碰放大商品
// 获得左侧商品图片的div
var jd_sp_im = document.querySelector('.jd_sp_im');
// 获得遮罩层的div
var mask = document.querySelector('.mask');
// 获得右侧弹出的div
var jd_sp_big = document.querySelector('.jd_sp_big');
// 获得右侧弹出div内图片
var jd_sp_big_im = document.querySelector('.jd_sp_big img');
var jd_show = document.querySelector(".jd_show");
var jd_dsw = document.querySelector(".jd_dsw");

jd_sp_im.addEventListener('mouseover', function () {
  mask.style.display = "block";
  jd_sp_big.style.display = "block";
})
jd_sp_im.addEventListener('mouseout', function () {
  mask.style.display = "none";
  jd_sp_big.style.display = "none";
})
jd_sp_im.addEventListener('mousemove', function (e) {
  //先计算出鼠标在盒子内的坐标
  var X = e.pageX - jd_show.offsetLeft;
  // 因为当前div有两层父元素，直接用div.offsetTop/Left不能获取，需要加上两个父元素的offsetTop/Left才为该div的争取的值
  var Y = e.pageY - jd_show.offsetTop - jd_dsw.offsetTop;
  //获得宽高 offsetWidth/Height
  //得到可移动的距离maskX/Y
  var maskX = X - mask.offsetWidth / 2;
  var maskY = Y - mask.offsetHeight / 2;
  //限制mask移动距离
  var xzmaskX = jd_sp_im.offsetWidth - mask.offsetWidth;
  var xzmaskY = jd_sp_im.offsetHeight - mask.offsetHeight;
  //加入判定条件，设置mask可移动区间
  if (maskX <= 0) {
    maskX = 0
  } else if (maskX >= xzmaskX) {
    maskX = xzmaskX;
  }
  if (maskY <= 0) {
    maskY = 0
  } else if (maskY >= xzmaskY) {
    maskY = xzmaskY;
  }
  mask.style.left = maskX + 'px';
  mask.style.top = maskY + 'px';
  //计算右侧大图片对应的移动距离 = 遮挡层移动距离 * 大图片最大移动距离 / 遮挡层的最大移动距离
  //大图片的最大移动距离
  var bigMax = jd_sp_big_im.offsetWidth - jd_sp_big.offsetWidth;
  //大图片的移动距离 X /Y
  var bigX = maskX * bigMax / xzmaskX;
  var bigY = maskY * bigMax / xzmaskY;
  jd_sp_big_im.style.left = -bigX + 'px';
  jd_sp_big_im.style.top = -bigY + 'px';
})
// 商品展示窗口下方小图列表触碰效果
var sp_mini_bk=["10px","85px"]
// 获取到所有的小图
var sp_mini_list = document.querySelectorAll(".sp_mini_ce img");
// 循环注册触碰事件
for (let i = 0; i < sp_mini_list.length; i++) {
  sp_mini_list[i].addEventListener("mouseover", function () {})
}