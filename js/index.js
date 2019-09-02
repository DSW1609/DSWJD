// console.log();
// console.log("%cHi,我是吴亦凡,写代码累了吧,来份大碗宽面吧！\n这是菜单你看一下:", "color:#000;font-size:18px;");
// console.log("%c大碗🐂肉🍲 🐏1000   大碗🐏肉🍲 🐏900\n大碗🐖肉🍲 🐏700    大碗🌿菜🍲 🐏500", "color:red;font-size:18px;");
// console.log("%c我:大碗宽面这么贵?你这老板心太黑！\nKris:大碗宽面也很贵,千万别虚荣心作祟!", "color:blue;font-size:18px;");
// 下拉菜单代码
var navlio = document.querySelectorAll('.nav_lio');
var lixl = document.querySelectorAll('.lixl');
for (var i = 0; i < navlio.length; i++) {
  navlio[i].addEventListener('mouseenter',function(){
    // 点击谁根据自定义属性的值显示谁
    var index = this.getAttribute("data-index");
    this.classList.add("liover");
    navlio[index].style.padding = '0 4'+'px';
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
var address_a = document.querySelector('#address_a');
var addyc_city = document.querySelector('.select_addyc_city').querySelectorAll('a');
address.addEventListener('mouseenter',function(){
  this.classList.add("liover");
  this.style.left = "-1" + 'px';
  this.style.top = "-1" + 'px';
  addyc.style.display = "block";
})
for (var i = 0; i < addyc_city.length; i++) {
  addyc_city[i].addEventListener('click',function(){
    var data_city = this.getAttribute('data_city');
    // 先清除所有的类名
    for (var i = 0; i < addyc_city.length; i++) {
      addyc_city[i].classList.remove('city_red');
    }
    // 给当前点击的添加类名
    this.classList.add("city_red");
    var data_city = this.getAttribute("data-city");
    // 如果data-city等于0,宽度设为60;
    address.style.width = data_city == 0 ? 60+'px' : 50+'px';
    // 把当前点击额值赋给导航栏
    address_a.innerHTML = this.innerHTML;
  })
}
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
var jd_logo_over = true;
jd_logo.addEventListener('mouseenter',function(){
  if(jd_logo_over){
    jd_logo_over = false;
    // 开启定时器
    jd_logo_flag = true;
    this.style.background = "none";
    jd_logo_gif.style.opacity = 1;
    jd_logo_img.src = "images/jd_logogif.gif";
    // 文字延时显示----------------------------------
    var jd_logo = setTimeout(function(){
      for (var i = 0; i < jd_lo_te.length; i++) {
        jd_lo_te[i].style.opacity = 1;
      }
    },2700);
    var jd_over = setTimeout(function(){
      jd_logo_over = true;
    },3500)
  }
})
var jd_logo_flag = false;
var jd_logo_num = 0;
//clearInterval(timer);
// timer = null;
var jd_logo_timer = setInterval(function(){
  if(jd_logo_flag){
    // 如果为true开启定时器，每次加一
    jd_logo_num++;
    // 如果大于三停止加一，恢复为0
    if(jd_logo_num > 3){
      jd_logo_flag = false;
      jd_logo_num = 0;
    }
  }
},1000)
var jd_logo_out = 0;
jd_logo.addEventListener('mouseleave',function(){
  jd_logo_out = jd_logo_flag == false ? 0 : 3 - jd_logo_num;
  var jd = setTimeout(function(){
    jd_logo.style.background = "";
    jd_logo_gif.style.opacity = "0";
    jd_logo_img.src = "";
      for (var i = 0; i < jd_lo_te.length; i++) {
        jd_lo_te[i].style.opacity = 0;
      }
  },jd_logo_out * 1500);
})
// 搜索栏相机图标变色
var jd_search_cmr = document.querySelector('#jd_search_cmr');
jd_search_cmr.addEventListener('mouseover',function(){
  this.src = 'images/camerao.png';
})
jd_search_cmr.addEventListener('mouseout',function(){
  this.src = 'images/camera.png';
})
var search_cmrtop = document.querySelector('#search_cmrtop');
search_cmrtop.addEventListener('mouseover',function(){
  this.src = 'images/camerao.png';
})
search_cmrtop.addEventListener('mouseout',function(){
  this.src = 'images/camera.png';
})
// 搜索栏中提示热词
var jd_search_ipt = document.querySelector('#jd_search_ipt');
var search_ipttop = document.querySelector('#search_ipttop');
var hotsearch = ['网络机顶盒','费列罗巧克力','香奈儿香水','九阳豆浆机','8月电脑数码新品大赏 分千万京豆','海尔冰箱','台式机组装'];
var hotscn = 0;
var hotsrctimer = setInterval(function(){
  jd_search_ipt.setAttribute("placeholder",hotsearch[hotscn]);
  search_ipttop.setAttribute("placeholder",hotsearch[hotscn]);
  hotscn++;
  hotscn = hotscn >= hotsearch.length ? 0 : hotscn;
},5000)
// 搜索栏下方热词循环播放
var jd_hot_a = document.querySelector('#jd_hot_a');
var hotci = ['秋尚新好物','用品狂欢购','食品中秋节'];
var hothref = ['#1','#2','#3']
var hotnum = 0;
var hottimer = setInterval(function(){
  jd_hot_a.innerHTML = hotci[hotnum];
  jd_hot_a.href = hothref[hotnum];
  hotnum++;
  hotnum = hotnum >= hotci.length ? 0 : hotnum;
},2000)
// 设置右侧弹出菜单的top值
var jd_dsw_trt = document.querySelectorAll('.jd_dsw_trt');
for (var i = 0; i < jd_dsw_trt.length; i++) {
  jd_dsw_trt[i].style.top = -(10 + 24.8 * i) + 'px';
}
// 左侧导航栏触碰弹出隐藏菜单
var jd_dsw_li = document.querySelector('.jd_dsw_navl').querySelectorAll('li');
for (var i = 0; i < jd_dsw_li.length; i++) {
  jd_dsw_li[i].addEventListener('mouseenter',function(){
    // 先隐藏所有的显示的div
    jd_dsw_liyc();
    // 根据自定义属性的值显示对应的div
    var jd_dsw_datali = this.getAttribute('data-dsw-li');
    jd_dsw_trt[jd_dsw_datali].style.display = "block";
  })
}
for (var i = 0; i < jd_dsw_li.length; i++) {
  jd_dsw_li[i].addEventListener('mouseleave',function(){
    jd_dsw_liyc();
  })
}
// 隐藏所有侧边栏显示的div
function jd_dsw_liyc(){
  for (var i = 0; i < jd_dsw_li.length; i++) {
    jd_dsw_trt[i].style.display = "none";
  }
}
// 调用主轮播图播放函数
lunbotuB('.peacediv','.leftjt','.rightjt',2);
// 右侧京东登陆框下面快捷按钮触碰切换图片
var jd_btn_imgth = document.querySelectorAll('.jd_btn_imgth');
var jd_btn_a = document.querySelectorAll('.jd_btn_a');
for (var i = 0; i < jd_btn_imgth.length; i++) {
  jd_btn_imgth[i].addEventListener('mouseover',function(){
    var data_jdbtn = this.getAttribute('data-jdbtn');
    this.src = 'images/jdbtno'+ data_jdbtn +'.png';
    jd_btn_a[data_jdbtn].style.color = "#c81623";
  })
  jd_btn_imgth[i].addEventListener('mouseout',function(){
    var data_jdbtn = this.getAttribute('data-jdbtn');
    this.src = 'images/jdbtn'+ data_jdbtn +'.png';
    jd_btn_a[data_jdbtn].style.color = "#666";
  })
}
// 滚动事件：隐藏导航栏;右侧浮动快捷按钮导航栏
var jd_yc_nav = document.querySelector('.jd_yc_nav');
var jd_menu_r = document.querySelector('.jd_menu_r');
var jd_menu_liz = document.querySelector('.jd_menu_liz');
window.addEventListener('scroll',function(){
  if(pageYOffset >= 620){
    jd_yc_nav.style.top = 0 + 'px';
    jd_menu_r.style.position = 'fixed';
    jd_menu_liz.style.top = 0 + 'px';
    jd_menu_r.style.top = 80 + 'px';
  }
  else{
    jd_yc_nav.style.top = -55 +'px';
    jd_menu_r.style.position = 'absolute';
    jd_menu_liz.style.top = -60 + 'px';
    jd_menu_r.style.top = 0 + 'px';
  }
})
// 点击按钮回到设定位置
var menu_sll = [600,700,800,900,0];
var menu_top = document.querySelectorAll('.menu_top');
for (var i = 0; i < menu_top.length; i++) {
  menu_top[i].addEventListener('click',function(){
    var data_top = this.getAttribute('data-top');
    relaxTop(menu_sll[data_top]);
  })
}
// 调用秒杀倒计时函数
TimeDown('.spike_hours','.spike_minutes','.spike_seconds','2019-8-29 24:00:00');
// 京东秒杀多图调用小轮播图函数
lunbotuS('.jd_spike_peace','.spike_peace_l','.spike_peace_r',5);
// 京东秒杀右侧单图轮播图
lunbotuB('.jd_spike_pcr','.jd_spike_pcrl','.jd_spike_pcrr',3);
// 右侧浮动状态栏触碰切换图片效果
var menu_logo = document.querySelectorAll('.menu_logo');
var menu_logo_bg = document.querySelectorAll('.menu_logo_bg');
var menu_logo_over = ['kefu','fankui','up'];
for (var i = 0; i < menu_logo.length; i++) {
  menu_logo[i].addEventListener('mouseover',function(){
    var data_menu_logo = this.getAttribute('data-menu-logo');
    menu_logo_bg[data_menu_logo].src = 'images/'+ menu_logo_over[data_menu_logo] +'o.png';
  })
  menu_logo[i].addEventListener('mouseout',function(){
    var data_menu_logo = this.getAttribute('data-menu-logo');
    menu_logo_bg[data_menu_logo].src = 'images/'+ menu_logo_over[data_menu_logo] +'.png';
  })
}
// 特色优选排行榜选项卡切换效果
var jd_spec_rli = document.querySelector('.jd_spec_rli').querySelectorAll('a');
var jd_spec_lbtm = document.querySelectorAll('.jd_spec_lbtm');
for (var i = 0; i < jd_spec_rli.length; i++) {
  jd_spec_rli[i].addEventListener('mouseover',function(){
    // 先全部隐藏 清除所有a的类名
    for (var i = 0; i < jd_spec_rli.length; i++) {
      jd_spec_rli[i].classList.remove("spec_red");
    }
    for (var i = 0; i < jd_spec_lbtm.length; i++) {
      jd_spec_lbtm[i].style.display = "none";
    }
    // 得到当前触碰的元素的自定义属性
    var data_spec = this.getAttribute('data-spec');
    this.classList.add('spec_red');
    jd_spec_lbtm[data_spec].style.display = "block";
  })
}
// 品牌闪购调用倒计时效果
TimeDown('.rbtm_hours','.rbtm_minutes','.rbtm_seconds','2019-8-29 24:00:00');
// 发现好货调用匀速轮播图函数
$(function(){
$('.jd_find_r').liMarquee();
});
lunbotuB('.jd_fc_pc','.jd_fc_pcrl','.jd_fc_pcrr',3);
