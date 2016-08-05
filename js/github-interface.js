var GitHub = require('./../js/github.js').githubModule;

$(document).ready(function() {
  var newSearch = new GitHub();
  $('#github-form').submit(function(event) {
    event.preventDefault();
    var userName = $('#user-input').val();
    $('#user-input').val('');
    newSearch.getRepos(userName);
  });
});
