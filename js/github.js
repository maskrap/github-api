var apiKey = require('./../.env').apiKey;

function GitHub(userName){
   this.userName = userName;
}

GitHub.prototype.getRepos = function(userName){
  $.get('https://api.github.com/users/' + userName + '?access_token=' + apiKey).then(function(response){
    $('#user-image').empty();
    $('#user-image').append('<img src=' + response.avatar_url + '>');
    $('#user-login').empty();
    $('#user-login').append('<h2>User: ' + '<strong>' + response.login + '</strong>' + '</h2>');
    $('#user-location').empty();
    $('#user-location').append('<h4>Location: ' + response.location + '</h4>');
    $('#user-following').empty();
    $('#user-following').append('<h4>Following: ' + response.following + '</h4>');
    $('#user-followers').empty();
    $('#user-followers').append('<h4>Followers: ' + response.followers + '</h4>');
    $('#user-repos').empty();
    $('#user-repos').append('<h3>Number of Repos: ' + response.public_repos + '</h3>');
    $('#user-hire').empty();
    $('#user-hire').append('<h4>Is this person looking for a job? : ' + response.hireable + '</h4>');

    $.get('https://api.github.com/users/' + userName + '/repos?&per_page=100&access_token=' + apiKey).then(function(response){
    $('#repo-list').empty();
    for(var i = 0; i < response.length; i++) {
      $('#repo-list').append('<h3>Repository name: </h3>' + '<h4>' + response[i].name + '</h4>' + '<br>'+ '<h5>' + response[i].description + '</h5>');
    }
    });
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.githubModule = GitHub;
