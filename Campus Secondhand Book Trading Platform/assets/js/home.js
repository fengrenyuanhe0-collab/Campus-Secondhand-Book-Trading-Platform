// home.js - 加载书籍数据并渲染
window.addEventListener('DOMContentLoaded', function(){
  var grid = document.getElementById('bookGrid');
  function render(list){
    grid.innerHTML = '';
    list.forEach(function(b){
      var card = document.createElement('div'); card.className='book-card';
      card.innerHTML = '<a href="detail.html"><img src="'+b.cover+'" alt="'+b.title+'"><div class="book-title">'+b.title+'</div><div class="book-author">'+b.author+'</div></a>';
      grid.appendChild(card);
    })
  }
  // 尝试 fetch 模拟数据
  fetch('backend-mock/books.json').then(r=>r.json()).then(data=>{
    render(data.slice(0,10));
  }).catch(err=>{
    // 失败则用内置占位
    var sample = [];
    for(var i=1;i<=10;i++) sample.push({title:'书名'+i,author:'作者'+i,cover:'assets/img/covers/cover'+i+'.jpg'});
    render(sample);
  });
});