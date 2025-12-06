// chat.js - 加载模拟聊天记录并发送本地消息
window.addEventListener('DOMContentLoaded', function(){
  var messagesEl = document.getElementById('messages');
  var input = document.getElementById('msgInput');
  var sendBtn = document.getElementById('sendBtn');
  function renderList(list){
    messagesEl.innerHTML = '';
    list.forEach(function(m){
      var li = document.createElement('li'); li.textContent = m.from+': '+m.text; messagesEl.appendChild(li);
    })
  }
  fetch('backend-mock/messages.json').then(r=>r.json()).then(data=>renderList(data)).catch(()=>renderList([{from:'系统',text:'暂无消息'}]));
  sendBtn.addEventListener('click', function(){
    if(!input.value) return; var li = document.createElement('li'); li.textContent = '我: '+input.value; messagesEl.appendChild(li); input.value='';
  });
});
