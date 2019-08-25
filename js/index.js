// 下拉菜单代码
var navlio = document.querySelectorAll('.nav_lio');
var lixl = document.querySelectorAll('.lixl');
for (var i = 0; i < navlio.length; i++) {
  navlio[i].addEventListener('mouseenter',function(){
    // 点击谁根据自定义属性的值显示谁
    var index = this.getAttribute("data-index");
    this.classList.add("liover");
    navlio[index].style.padding = "0 4" + 'px';
    lixl[index].style.display = "block";
  })
  navlio[i].addEventListener('mouseleave',function(){
    // 隐藏所有的li的样式及下拉菜单
    for (var i = 0; i < lixl.length; i++) {
      lixl[i].style.display = "none";
      navlio[i].style.padding = "0 5" + 'px';
      navlio[i].classList.remove("liover");
    }
  })
};
// 右侧京东下拉代码
var mobile_jd = document.querySelector('.mobile_jd');
var mobile_jd_sjx = document.querySelector('.mobile_jd_sjx');
var mobile_jd_yc = document.querySelector('.mobile_jd_yc');
mobile_jd.addEventListener('mouseenter',function(){
  mobile_jd_sjx.style.display = "block";
  mobile_jd_yc.style.display = "block";
})
mobile_jd.addEventListener('mouseleave',function(){
  mobile_jd_sjx.style.display = "none";
  mobile_jd_yc.style.display = "none";
})
// 右侧移动端京东应用下载链接特效
var jd_ios = document.querySelectorAll('.jd_ios');
var jd_and = document.querySelectorAll('.jd_and');;
for (var i = 0; i < jd_ios.length; i++) {
  jd_ios[i].addEventListener('mouseover',function(){
    this.src = 'images/OS_Appleo.png';
  })
  jd_ios[i].addEventListener('mouseout',function(){
    this.src = 'images/OS_Apple.png';
  })
  jd_and[i].addEventListener('mouseover',function(){
    this.src = 'images/OS_Androido.png';
  })
  jd_and[i].addEventListener('mouseout',function(){
    this.src = 'images/OS_Android.png';
  })
}
// 左上选择位置下拉菜单
var address = document.querySelector('.select_address');
var addyc = document.querySelector('.select_addyc');
address.addEventListener('mouseenter',function(){
  this.classList.add("liover");
  this.style.left = "-1" + 'px';
  this.style.top = "-1" + 'px';
  addyc.style.display = "block";
})
address.addEventListener('mouseleave',function(){
  this.classList.remove("liover");
  this.style.left = 0;
  this.style.top = 0;
  addyc.style.display = "none";
})
// 京东logo触碰变换
var jd_logo = document.querySelector('.jd_logo');
var jd_logo_gif = document.querySelector('.jd_logo_gif');
var jd_logo_img = document.querySelector('.jd_logo_img');
var jd_lo_te = document.querySelectorAll('.jd_logo_te');
jd_logo.addEventListener('mouseenter',function(){
  this.style.background = "none";
  jd_logo_gif.style.opacity = 1;
  jd_logo_img.src = "images/jd_logogif.gif";
  var jd_logo = setTimeout(function(){
    for (var i = 0; i < jd_lo_te.length; i++) {
      jd_lo_te[i].style.opacity = 1;
    }
  },2700);
})
jd_logo.addEventListener('mouseleave',function(){
  var jd = setTimeout(function(){
    jd_logo.style.background = "";
    jd_logo_gif.style.opacity = "0";
    jd_logo_img.src = "";
      for (var i = 0; i < jd_lo_te.length; i++) {
        jd_lo_te[i].style.opacity = 0;
      }
  },3500);
})
// 搜索栏相机图标变色
var jd_search_cmr = document.querySelector('#jd_search_cmr');
jd_search_cmr.addEventListener('mouseover',function(){
  this.src = 'images/camerao.png';
})
jd_search_cmr.addEventListener('mouseout',function(){
  this.src = 'images/camera.png';
})
