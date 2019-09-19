// 导航栏更多分类触碰弹出隐藏框
// 获取分类按钮
var ms_header_more = document.querySelector(".ms_header_more");
// 获取隐藏框
var ms_hd_yc = document.querySelector(".ms_hd_yc");
// 注册触碰事件
ms_header_more.addEventListener("mouseenter", function() {
  ms_hd_yc.style.opacity = "1";
  ms_hd_yc.style.top = "30px";
  ms_hd_yc.style.display = "block";
})
// 注册离开事件
ms_hd_yc.addEventListener("mouseleave", function() {
  ms_hd_yc.style.opacity = "0";
  ms_hd_yc.style.top = "150px";
  setTimeout(function() {
    ms_hd_yc.style.display = "none";
  }, 300)
})
// 正在秒杀调用倒计时函数
TimeDown("#cx_hours", "#cx_minutes", "#cx_seconds", "2019-9-20 24:00:00");
// 导航栏
var ms_header_navb = document.querySelector(".ms_header_navb");
window.addEventListener('scroll', function() {
  if (pageYOffset >= 115) {
    ms_header_navb.style.position = "fixed";
    ms_header_navb.style.top = "0";
    ms_header_navb.style.boxShadow = "1px 1px 10px #666";
  } else {
    ms_header_navb.style.position = "absolute";
    ms_header_navb.style.top = "115px";
    ms_header_navb.style.boxShadow = "";
  }
})
