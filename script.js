document.querySelector('.menu')?.addEventListener('click',()=>document.querySelector('.desktop-nav')?.classList.toggle('open'));
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{
  const el=document.querySelector(a.getAttribute('href')); if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth',block:'start'});}
}));
