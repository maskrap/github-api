var Constructor = require('./../js/other-template.js').constructorModule;


$(document).ready(function() {
  $('#generic-form').submit(function(event) {
    event.preventDefault();

  });
});

var Constructor = require('./../js/template.js').constructorModule;


$(document).ready(function() {
  $('#generic-form').submit(function(event) {
    event.preventDefault();

  });
});

var Clock = require('./../js/time.js').clockModule;

$(document).ready(function(){
  var myclock = new Clock();
  setInterval(myclock.update, 1000);
  $('#alarm-form').submit(function(event) {
    event.preventDefault();
    var alarmInput = $('#alarm-input').val();
    $('#clock').append('<h3>Alarm set for <strong>' + alarmInput + '</strong></h3>');
    setInterval(function() {
      myclock.update();
      myclock.alarmClock(alarmInput);
    }, 1000);
  });
});

exports.clockModule = Clock;

var Weather = require('./../js/weather.js').weatherModule;

var displayHumidity = function(city, humidityData) {
  $('.showWeather').text("The humidity in " + city + " is " + humidityData + "%");
}

$(document).ready(function() {
  var currentWeatherObject = new Weather();
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    currentWeatherObject.getWeather(city, displayHumidity);
  });
});
