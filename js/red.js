// 导航栏触碰事件
// 获得导航栏全部按钮
var red_nav_item = document.querySelectorAll(".red_nav_item");
// 获得指示横线
var red_nav_zs = document.querySelector(".red_nav_zs");
// 创建数组保存指示横线的left值
var nav_zs_l = ["40px", "135px", "245px", "355px", "465px"];
// 循环注册导航栏按钮触碰事件
for (var i = 0; i < red_nav_item.length; i++) {
  red_nav_item[i].addEventListener("mouseenter", function() {
    // 获得当前触碰的自定义属性的值
    var data_nav = this.getAttribute("data-nav");
    // 根据自定义属性移动指示横线到指定位置
    red_nav_zs.style.left = nav_zs_l[data_nav];
    if (data_nav != 0) {
      red_nav_zs.style.width = "60px";
    }
    if (data_nav == 5) {
      red_nav_zs.style.left = nav_zs_l[0];
      red_nav_zs.style.width = "30px";
    }
  })
  red_nav_item[i].addEventListener("mouseleave", function() {
    // 移动指示横线到初始位置
    red_nav_zs.style.left = nav_zs_l[0];
    red_nav_zs.style.width = "30px";
  })
}
// 导航栏“更多”按钮触碰事件
// 获取更多下方隐藏div
var nav_more_list = document.querySelector(".nav_more_list");
red_nav_item[5].addEventListener("mouseenter", function() {
  nav_more_list.style.height = "270px";
  nav_more_list.style.border = "1px solid #e0e0e0";
})
red_nav_item[5].addEventListener("mouseleave", function() {
  nav_more_list.style.height = "0px";
  setTimeout(function() {
    nav_more_list.style.border = "";
  }, 500)
})
