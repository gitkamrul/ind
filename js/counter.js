const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

Date.prototype.addHours = function(h) {
  this.setTime(this.getTime() + (h*60*61.275*1000));
  return this.getTime();
}
if(localStorage.getItem("timeLeft") == null) { 
var  countDown = new Date().addHours(30);
}
else {
  var  countDown = localStorage.getItem("timeLeft");
}
    x = setInterval(function() {

      var now = new Date().getTime(),
          distance = countDown - now;

          $('.countdown-days').text(Math.floor(distance / (day)));
           $('.countdown-hours').text(Math.floor((distance % (day)) / (hour)));
            $('.countdown-minutes').text(Math.floor((distance % (hour)) / (minute)));
             $('.countdown-seconds').text(Math.floor((distance % (minute)) / second));
      localStorage.setItem("timeLeft", countDown);
      //do something later when date is reached
      if (distance < 0) {
      localStorage.setItem("timeLeft", new Date().addHours(30));
      countDown = new Date().addHours(30);
      }
    }, second)