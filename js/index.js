/*
返回顶部按钮
*/
window.onload = function () {
  var btnTop = document.getElementById('btnTop');
  var timer = null;
  var isTop = true;
  //获取页面可视区高度
  var clientHeight = document.documentElement.clientHeight;
  //console.log(clientHeight)
  //滚动条滚动时触发
  window.onscroll = function () {
    //显示回到顶部按钮
    var osTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (osTop >= clientHeight) {
      btnTop.style.display = "block";
    } else {
      btnTop.style.display = "none";
    };
    //回到顶部过程中用户滚动滚动条，停止定时器
    if (!isTop) {
      clearInterval(timer);
    };
    isTop = false;
  };

  btnTop.onclick = function () {
    //设置定时器
    timer = setInterval(function () {
      //获取滚动条距离顶部高度
      var osTop = document.documentElement.scrollTop || document.body.scrollTop;
      //console.log('osTop ' + osTop);
      var ispeed = Math.floor(-osTop / 7);
      //console.log('ispeed ' + ispeed);
      document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
      //到达顶部，清除定时器
      if (osTop == 0) {
        clearInterval(timer);
      };
      isTop = true;

    }, 30);
  };
};
/*播放、暂停按钮*/
function playPause() {
  var music = document.getElementById('music');
  var audioBtn1 = document.getElementById('audioBtn1');
  if (music.paused) {
    music.play();
    audioBtn1.src = "./img/wave.gif";
  } else {
    music.pause();
    audioBtn1.src = "./img/stopBtn.png";
  }
}