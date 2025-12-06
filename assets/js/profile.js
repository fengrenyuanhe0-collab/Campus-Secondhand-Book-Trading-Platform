// profile.js - 个人中心简单交互
window.addEventListener('DOMContentLoaded', function(){
  var u = window.auth && window.auth.getUser();
  var usernameEl = document.getElementById('username');
  if(u && usernameEl){ usernameEl.textContent = u.name; document.getElementById('email').textContent = u.email }
});

