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