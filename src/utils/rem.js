const maxFontSize = 18
const minFontSize = 10
const remBase = 14
// 设置 rem 函数
function setRem () {
  let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
  let size = remBase * (htmlWidth / 1440)
  size = Math.min(maxFontSize, size)
  size = Math.max(minFontSize, size)
//得到html的Dom元素
  let htmlDom = document.getElementsByTagName('html')[0];
//设置根元素字体大小
  htmlDom.style.fontSize= size + 'px';
}
// 初始化
setRem();
// 改变窗口大小时重新设置 rem
window.onresize = function () {
  setRem()
}