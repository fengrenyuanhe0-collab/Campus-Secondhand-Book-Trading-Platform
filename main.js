document.addEventListener('DOMContentLoaded', function(){
  // Modal login
  const loginBtn = document.getElementById('loginBtn');
  const authModal = document.getElementById('authModal');
  const modalClose = document.getElementById('modalClose');
  const authForm = document.getElementById('authForm');
  const toProfile = document.getElementById('toProfile');

 // 检查登录状态，切换按钮显示
const currentUser = JSON.parse(localStorage.getItem('currentUser'));

if (loginBtn && toProfile) {
  if (currentUser) {
    // 已登录：隐藏Login，显示Logout
    loginBtn.textContent = 'Logout';
    loginBtn.addEventListener('click', () => {
      localStorage.removeItem('currentUser');
      location.reload();
    });
    toProfile.addEventListener('click', () => location.href = 'profile.html');
  } else {
    // 未登录：Login跳登录页，Profile也跳登录页
    loginBtn.addEventListener('click', () => location.href = 'login.html');
    toProfile.addEventListener('click', () => location.href = 'login.html');
  }
}

  if(modalClose){ modalClose.addEventListener('click', ()=> authModal.classList.add('hidden')); }
  if(authForm){ authForm.addEventListener('submit', (e)=>{ e.preventDefault(); alert('Logged in as: ' + (document.getElementById('authEmail').value || 'demo')); authModal.classList.add('hidden'); }); }
  
  // Chat send / quick send
  const messages = document.getElementById('messages');
  const chatInput = document.getElementById('chatInput');
  const sendBtn = document.getElementById('sendBtn');
  if(sendBtn){
    sendBtn.addEventListener('click', ()=> {
      const v = chatInput.value.trim();
      if(!v) return;
      const d = document.createElement('div'); d.className='msg me'; d.textContent = v; messages.appendChild(d); chatInput.value=''; messages.scrollTop = messages.scrollHeight;
    });
  }
  window.sendQuick = function(text){
    const d = document.createElement('div'); d.className='msg me'; d.textContent = text; const m = document.getElementById('messages'); if(m){ m.appendChild(d); m.scrollTop = m.scrollHeight; }
  };

  // Sell form: preview filename
  const coverUpload = document.getElementById('coverUpload');
  if(coverUpload){
    coverUpload.addEventListener('change', (e)=> {
      const f = e.target.files[0];
      if(f) alert('Selected cover: ' + f.name);
    });
  }

  // Populate selects in home (demo)
  const subjects = ['Math','Computer Science','Economics','Engineering','Arts'];
  const schools = ['Example University','City College','State Institute'];
  const programs = ['CS','Math','Econ','Eng'];
  const grades = ['1','2','3','4'];
  function fill(id, arr){ const el = document.getElementById(id); if(!el) return; arr.forEach(a=> el.appendChild(Object.assign(document.createElement('option'),{value:a,textContent:a}))); }
  fill('subject', subjects); fill('school', schools); fill('program', programs); fill('grade', grades);

  // optional: populate my listings (demo)
  const myListings = document.getElementById('myListings');
  if(myListings){
    for(let i=1;i<=3;i++){
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `<div class="cover" style="background-image:url('assets/img/covers/cover${i}.jpg')"></div>`;
      myListings.appendChild(card);
    }
  }
});
