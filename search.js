document.addEventListener('DOMContentLoaded',()=>{
  const btn=document.getElementById('searchBtn'), overlay=document.getElementById('searchOverlay'), close=document.getElementById('searchClose'), input=document.getElementById('siteSearchInput'), results=document.getElementById('siteSearchResults');
  if(!btn||!overlay||!close||!input||!results)return;
  const open=()=>{overlay.classList.add('open');overlay.setAttribute('aria-hidden','false');setTimeout(()=>input.focus(),40)};
  const shut=()=>{overlay.classList.remove('open');overlay.setAttribute('aria-hidden','true');input.value='';render('')};
  const items=[...document.querySelectorAll('main section[id]')].map(s=>({id:s.id,title:(s.querySelector('h1,h2,h3')?.textContent||'').trim(),text:s.textContent.trim()})).filter(x=>x.title);
  const render=q=>{
    const query=q.trim().toLowerCase();
    if(!query){results.innerHTML='<div class="site-search-empty">اكتب كلمة للبحث داخل الموقع</div>';return}
    const found=items.filter(x=>(x.title+' '+x.text).toLowerCase().includes(query));
    results.innerHTML=found.length?found.map(x=>'<a class="site-search-result" href="#'+x.id+'"><strong>'+escapeHtml(x.title)+'</strong><span>'+escapeHtml(x.text.slice(0,110))+'…</span></a>').join(''):'<div class="site-search-empty">لا توجد نتائج مطابقة</div>';
    results.querySelectorAll('a').forEach(a=>a.addEventListener('click',shut));
  };
  const escapeHtml=s=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
  btn.addEventListener('click',open);close.addEventListener('click',shut);overlay.addEventListener('click',e=>{if(e.target===overlay)shut()});input.addEventListener('input',e=>render(e.target.value));document.addEventListener('keydown',e=>{if(e.key==='Escape'&&overlay.classList.contains('open'))shut()});
  render('');
});
