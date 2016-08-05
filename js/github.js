var apiKey = require('./../.env').apiKey;

function GitHub(){

}

GitHub.prototype.getRepos = function(userName){
  $.get('https://api.github.com/users/' + userName + '?access_token=' + apiKey).then(function(response){
    $('#user-image').empty();
    $('#user-image').append('<img src=' + respose.avatar_url + '>');
    $('#user-login').empty();
    $('#user-login').append('<h4>Username: ' + '<em>' + response.login + '</em>' + '</h4>');
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.githubModule = GitHub;


// function Constructor(param) {
//   this.param = param;
//   // Constructor
// }
//
// Constructor.prototype.templateName = function(methodParameter) {
//   // method code
// };
//
//
