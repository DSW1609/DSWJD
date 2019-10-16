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
var sp_bk_arr = ["10px", "85px", "160px", "235px", "310px"];
var sp_mini_bk = document.querySelector(".sp_mini_bk");
// 获得商品图片
var sp_img = document.querySelector("#sp_img");
// 获取到所有的小图
var sp_mini_list = document.querySelectorAll(".sp_mini_ce img");
// 循环注册触碰事件
for (let i = 0; i < sp_mini_list.length; i++) {
  sp_mini_list[i].addEventListener("mouseover", function () {
    // 获取当前触碰的自定义属性
    var data_im = this.getAttribute("data-im");
    // 根据自定义属性选取数组内对应的值移动边框到指定位置
    sp_mini_bk.style.left = sp_bk_arr[data_im];
    // 更换上方商品图片与下方小图一致
    sp_img.setAttribute("src", "images/show_mini_0" + data_im + ".jpg");
    // 更换右侧商品图片与左侧图片一致
    jd_sp_big_im.setAttribute("src", "images/show_big_0" + data_im + ".jpg");
  })
}
// 选择颜色
var menu_co_o = document.querySelectorAll(".menu_co_o");
// 选择版本
var menu_bb_m = document.querySelectorAll(".menu_bb_m");
// 购买方式
var menu_buy_m = document.querySelectorAll(".menu_buy_m");
var menu_buy_m2 = document.querySelector(".menu_buy_m2");
// 优惠套装
var menu_tz = document.querySelectorAll(".menu_tz");
// 增值服务
var menu_zz = document.querySelectorAll(".menu_zz");
// 京东服务
var menu_jd = document.querySelectorAll(".menu_jd");
// 白条分期
var menu_bt_m = document.querySelectorAll(".menu_bt_m");
// 创建数组保存需要进行操作的变量名
var se_arr = [menu_co_o, menu_bb_m, menu_buy_m, menu_bt_m, menu_tz, menu_zz, menu_jd];
// 给默认的添加边框
menu_co_o[0].style.border = "1px solid #e3393c";
menu_bb_m[1].style.border = "1px solid #e3393c";
menu_buy_m[0].style.border = "1px solid #e3393c";
menu_buy_m2.style.border = "1px solid #e3393c";
// 循环调用点击函数
for (var i = 0; i < se_arr.length; i++) {
  se_cl(se_arr[i]);
}
// 封装点击事件函数
function se_cl(obj) {
  // 循环注册点击事件
  for (var i = 0; i < obj.length; i++) {
    obj[i].addEventListener("click", function () {
      // 清空所有的边框
      for (var i = 0; i < obj.length; i++) {
        obj[i].style.border = "";
      }
      // 点击谁给谁添加边框
      this.style.border = "1px solid #e3393c";
    })
  }
}
// 商品数量加减
var menu_in = document.querySelector(".menu_in");
var menu_jia = document.querySelector(".menu_jia");
var menu_jian = document.querySelector(".menu_jian");
// 添加默认样式
menu_jian.style.opacity = "0.6";
menu_jian.style.cursor = "auto";
// 注册点击加号事件
menu_jia.addEventListener("click", function () {
  menu_in.value++;
  menu_jian.style.opacity = "1";
  menu_jian.style.cursor = "pointer";
})
menu_jian.addEventListener("click", function () {
  if (menu_in.value <= 2) {
    menu_in.value = 1;
    menu_jian.style.opacity = "0.6";
    menu_jian.style.cursor = "auto";
  } else {
    menu_in.value--;
  }
})
// 配件tab栏切换事件
var pj_tab_one = document.querySelectorAll(".pj_tab_one");
var pj_list = document.querySelectorAll(".pj_list");
// 循环注册点击事件
for (let i = 0; i < pj_tab_one.length; i++) {
  pj_tab_one[i].addEventListener("click", function () {
    // 首先清楚所有的点击的class样式并隐藏下方的内容
    for (let i = 0; i < pj_tab_one.length; i++) {
      pj_tab_one[i].classList.remove("tab_cli");
      pj_list[i].style.display = "none";
    }
    // 点击谁给谁添加class样式
    this.classList.add("tab_cli");
    // 获取自定义属性
    var data_pj = this.getAttribute("data-pj");
    // 根据自定义属性显示对应的下方内容
    pj_list[data_pj].style.display = "block";
  })
}
// 配件价格计算部分
// 获取到所有的配件的单选框
var pj_list_ckb = document.querySelectorAll(".pj_list_ckb");
// 获取到所有的配件价格
var pj_jg = document.querySelectorAll(".pj_jg");
// 获取到选择配件数量的span
var pj_num = document.querySelector("#pj_num");
// 获取到总价格的span
var pj_zj = document.querySelector("#pj_zj");
// 定义选择配件数量的初始值
var sl_num = 0;
// 定义总价的初始值
var all_zj = 9999.00;
// 循环注册点击事件
for (let i = 0; i < pj_list_ckb.length; i++) {
  pj_list_ckb[i].addEventListener("click", function () {
    // 获取到多选框的自定义属性
    var data_ckb = this.getAttribute("data-ckb");
    if (this.checked) {
      sl_num++;
      all_zj += pj_jg[data_ckb].innerHTML * 1;
    } else {
      sl_num--;
      all_zj -= pj_jg[data_ckb].innerHTML * 1;
    }
    pj_num.innerHTML = sl_num;
    // toFixed(解决js浮点计算的精确度问题,保留两位小数)
    pj_zj.innerHTML = all_zj.toFixed(2);
  })
}