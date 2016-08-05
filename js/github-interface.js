var GitHub = require('./../js/github.js').githubModule;

$(document).ready(function() {
  var newSearch = new GitHub();
  $('#github-form').submit(function(event) {
    event.preventDefault();
    var userName = $('#user-login').val();
    $('#user-login').val('');
    newSearch.getRepos(userName);
  });
});
