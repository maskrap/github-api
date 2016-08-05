var apiKey = require('./../.env').apiKey;
var GitHub = require('./../js/github.js').githubModule;

$(document).ready(function() {
  var newSearch = new getRepos();
  $('#github-form').submit(function(event) {
    event.preventDefault();
    var userName = $('#user-login').val();
    $('#user-login').val('');
    newSearch.getRepos(userName);
  });
});


// var displayUser = function(city, humidityData) {
//   $('.showWeather').text("The humidity in " + city + " is " + humidityData + "%");
// };
//
// $(document).ready(function() {
//   var currentWeatherObject = new Weather();
//   $('#weatherLocation').click(function() {
//     var city = $('#location').val();
//     $('#location').val("");
//     currentWeatherObject.getWeather(city, displayHumidity);
//   });
// });
