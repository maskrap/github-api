var apiKey = require('./../.env').apiKey;

function GitHub(){

}

GitHub.prototype.getRepos = function(avatar_url, userName, following, followers){
  $.get('https://api.github.com/users/' + userName + '?access_token=' + apiKey).then(function(response){
    $('#user-image').empty();
    $('#user-image').append('<img src=' + respose.avatar_url + '>');
    $('#user-login').empty();
    $('#user-login').append('<h2>Username: ' + '<em>' + response.login + '</em>' + '</h2>');
    $('#user-following').empty();
    $('#user-following').append('<h4>Following: ' + response.following + '</h4>');
    $('#user-followers').empty();
    $('#user-followers').append('<h4>Followers: ' + response.followers + '</h4>');
    $('#user-repos').empty();
    $('#user-repos').append('<h3>Number of Repos: ' + response.public_repos + '</h3>');
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
