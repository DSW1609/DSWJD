// 导航栏滚动事件
var fx_nav = document.querySelector(".fx_nav");
window.addEventListener('scroll', function() {
  if (pageYOffset >= 220) {
    fx_nav.style.position = "fixed";
    fx_nav.style.top = "0";
    fx_nav.style.boxShadow = "1px 1px 10px #999";
  } else {
    fx_nav.style.position = "absolute";
    fx_nav.style.top = "110px";
    fx_nav.style.boxShadow = "";
  }
})
// 导航栏点击事件
var fx_nav_item = document.querySelectorAll(".fx_nav_item");
// 创建数组保存导航栏按钮底部指示箭头的left值
var fx_nav_left = ["64.5px", "210.5px", "359.5px"];
// 获取到导航栏按钮底部指示箭头
var fx_nav_jt = document.querySelector(".fx_nav_jt");
// 获取分类商品主体div
var fx_sp =document.querySelectorAll(".fx_sp");
// 循环注册点击事件
for (var i = 0; i < fx_nav_item.length; i++) {
  fx_nav_item[i].addEventListener("click", function() {
    // 获取自定义属性来判断点击的哪个按钮
    var fx_nav_d = this.getAttribute("data-index");
    // 循环清除所有导航栏的名为nav_item_on的class
    for (var i = 0; i < fx_nav_item.length; i++) {
      fx_nav_item[i].classList.remove("nav_item_on");
    }
    // 根据自定义属性添加nav_item_on
    fx_nav_item[fx_nav_d].classList.add("nav_item_on");
    // 移动导航栏按钮底部指示箭头到当前按钮的位置
    fx_nav_jt.style.left = fx_nav_left[fx_nav_d];
    // 隐藏所有的分类商品主体div
    for (var i = 0; i < fx_sp.length; i++) {
      fx_sp[i].style.display="none";
    }
    // 根据自定义属性显示对应的商品主体div
    fx_sp[fx_nav_d].style.display="block";
  })
}
