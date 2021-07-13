window.onload=function() {
    upTime('dec,14,2020,00:00:00');
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
