document.addEventListener('DOMContentLoaded', function() {
  
  var days = document.querySelector('.days span');
  var hour = document.querySelector('.hour');
  var min = document.querySelector('.min');
  var second = document.querySelector('.second');

  var startDate = new Date(2020, 12, 14);
  days.innerText = Math.floor((new Date - startDate)/86400000);
  countTime();

  function countTime() {
    let today = new Date();
    let ms = (today - startDate) % 86400000;
    hour.innerText = Math.floor(ms / 3600000);
    min.innerText = Math.floor(ms % 3600000 / 60000);
    second.innerText = Math.floor(ms % 3600000 % 60000 / 1000);
  }

  setInterval(countTime, 1000);

}, false);

window.onload=function() {
  upTime('july,01,2016,00:00:00');
}

function upTime(countTo) {
  now = new Date();
  countTo = new Date(countTo);
  difference = (now-countTo);

  days=Math.floor(difference/(60*60*1000*24)*1);
  hours=Math.floor((difference%(60*60*1000*24))/(60*60*1000)*1);
  mins=Math.floor(((difference%(60*60*1000*24))%(60*60*1000))/(60*1000)*1);
  secs=Math.floor((((difference%(60*60*1000*24))%(60*60*1000))%(60*1000))/1000*1);

  document.getElementById('days').innerHTML = days;
  document.getElementById('hours').innerHTML = hours;
  document.getElementById('minutes').innerHTML = mins;
  document.getElementById('seconds').innerHTML = secs;

  clearTimeout(upTime.to);
  upTime.to=setTimeout(function(){
    upTime(countTo);
  }, 1000);
}
