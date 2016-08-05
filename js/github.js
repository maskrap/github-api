var apiKey = require('./../.env').apiKey;

function GitHub(){

}

GitHub.prototype.getRepos = function(avatar_url, userName, following, followers, public_repos){
  $.get('https://api.github.com/users/' + userName + '/repos?access_token=' + apiKey).then(function(response){
    $('#user-image').empty();
    $('#user-image').append('<img src=' + response.avatar_url + '>');
    $('#user-login').empty();
    $('#user-login').append('<h2>Username: ' + '<em>' + response.login + '</em>' + '</h2>');
    $('#user-location').empty();
    $('#user-location').append('<h4>Location: ' + response.location + '</h4>');
    $('#user-following').empty();
    $('#user-following').append('<h4>Following: ' + response.following + '</h4>');
    $('#user-followers').empty();
    $('#user-followers').append('<h4>Followers: ' + response.followers + '</h4>');
    $('#user-repos').empty();
    $('#user-repos').append('<h3>Number of Repos: ' + response.public_repos + '</h3>');

    $('#repo-list').empty();
    for(var i = 0; i < response.length; i++){
      $('#repo-list').append('<h3>Repository name: </h3>' + '<h4>' + response[i].name + '</h4>' + '<br>'+ '<h5>' + response[i].description + '</h5>');
    }

    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.githubModule = GitHub;
