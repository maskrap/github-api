function Clock(datetime, date, time) {
  this.datetime = null;
  this.date = null;
  this.time = null;
}

Clock.prototype.update = function() {
  this.date = moment(new Date());
  dateObject = this.date.toObject();
  if (dateObject.minutes < 10) {
    this.time = dateObject.hours + ":0" + dateObject.minutes;
  } else {
    this.time = dateObject.hours + ":" + dateObject.minutes;
  }
  var datetime = $('#time');
  datetime.html(this.date.format("dddd, MMMM Do YYYY, h:mm:ss a"));
};

Clock.prototype.alarmClock = function(alarmInput) {
  if (this.time === alarmInput) {
    document.getElementById('alarm-wav').play();
  }
};

exports.clockModule = Clock;
