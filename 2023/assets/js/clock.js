/* 
*This script works but the uncommented one below clears the browser cache to see updated changes*


//var hackingStarts = "2023-10-28T08:00:00-05:00"; //UTC data time format
var hackingEnds = "2023-10-29T09:00:00-05:00";
initializeClock('countdown', hackingEnds);

function getTimeRemaining(endTime){
  var t = Date.parse(endTime) - Date.parse(new Date());
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  var days = Math.floor( t/(1000*60*60*24) );
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endTime){
    var clock = document.getElementById(id);
    clock.innerHTML = '<div><span class="days time"></span><div class="time-label">d</div></div>'
        + '<div><span class="hours time"></span><div class="time-label">h</div></div>'
        + '<div><span class="minutes time"></span><div class="time-label">m</div></div>'
        + '<div><span class="seconds time"></span><div class="time-label">s</div></div>';

    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    function updateClock(){
        var t = getTimeRemaining(endTime);
        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
        if(t.total<=0){
            clearInterval(timeInterval);
        }
    }

    updateClock(); // run function once at first to avoid delay
    var timeInterval = setInterval(updateClock,1000);
}
*/

var version = new Date().getTime();
var scriptUrl = 'path/to/your/javascript.js?v=' + version;

var hackingEnds = "2023-10-29T09:00:00-05:00";
initializeClock('countdown', hackingEnds);

function getTimeRemaining(endTime){
  var t = Date.parse(endTime) - Date.parse(new Date());
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  var days = Math.floor( t/(1000*60*60*24) );
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endTime){
    var clock = document.getElementById(id);
    clock.innerHTML = '<div><span class="days time"></span><div class="time-label">d</div></div>'
        + '<div><span class="hours time"></span><div class="time-label">h</div></div>'
        + '<div><span class="minutes time"></span><div class="time-label">m</div></div>'
        + '<div><span class="seconds time"></span><div class="time-label">s</div></div>';

    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    function updateClock(){
        var t = getTimeRemaining(endTime);
        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
        if(t.total<=0){
            clearInterval(timeInterval);
        }
    }

    updateClock(); // run function once at first to avoid delay
    var timeInterval = setInterval(updateClock, 1000);

    // Load the JavaScript file with the updated version
    var script = document.createElement('script');
    script.src = scriptUrl;
    document.body.appendChild(script);
}

