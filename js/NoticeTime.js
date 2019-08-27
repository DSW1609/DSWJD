// 倒计时效果
var spike_hours = document.querySelector('.spike_hours');
var spike_minutes = document.querySelector('.spike_minutes');
var spike_seconds = document.querySelector('.spike_seconds');
function TimeDown(endDateStr) {
    //结束时间
    var endDate = new Date(endDateStr);
    //当前时间
    var nowDate = new Date();
    //相差的总秒数
    var totalSeconds = parseInt((endDate - nowDate) / 1000);
    //天数
    var days = Math.floor(totalSeconds / (60 * 60 * 24));
    //取模（余数）
    var modulo = totalSeconds % (60 * 60 * 24);
    //小时数
    var hours = Math.floor(modulo / (60 * 60));
    modulo = modulo % (60 * 60);
    //分钟
    var minutes = Math.floor(modulo / 60);
    //秒
    var seconds = modulo % 60;
    // 如果小于10 在前面添加0
    var less10 = [hours,minutes,seconds];
    for (var i = 0; i < less10.length; i++) {
      if(less10[i] < 10){
        less10[i] = '0' + less10[i];
      }
    }
    // 输出到页面
    spike_hours.innerHTML = less10[0];
    spike_minutes.innerHTML = less10[1];
    spike_seconds.innerHTML = less10[2];
    //延迟一秒执行自己
    setTimeout(function () {
        TimeDown(endDateStr);
    }, 1000)
}
