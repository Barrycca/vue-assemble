export function countDownFun(time) {
  time--;//时间一秒秒的减
  let nowTime = new Date().getTime(); //现在时间
  if (nowTime <= time) {
    //获取时间差
    let timediff = Math.round((time - nowTime) / 1000);
    //获取还剩多少分钟
    let minute = parseInt(timediff / 60 % 60);
    //获取还剩多少秒
    let second = timediff % 60
    return minute + ':' + second
  } else {
    return "00:00";
  }
}