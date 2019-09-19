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
lunbotuB('.jd_spike_pcr','.jd_spike_pcrl','.jd_spike_pcrr',3);
