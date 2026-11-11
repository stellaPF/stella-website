(()=>{
const map={
'المشاريــع والخصومــات والمنتجــات':'Projects, Offers & Products',
'قيد الإعداد — قريبًا':'In Preparation — Coming Soon',
'نعمل على تجهيز هذه المســاحة لعرض مشاريــع STELLA ومنتجــاتها وأحدث العروض والخصومــات.':'We are preparing this space to showcase STELLA projects, products, latest offers and discounts.',
'العودة إلى الرئيســية':'Back to Home',
'الأعمال الخيريــة':'Charitable Work',
'مساحة مخصصة للمبادرات الإنسانية والأعمال الخيرية التي نطمح أن نطلقها ونساهم فيها. سنعمل على تطوير هذه الصفحة وإضافة التفاصيل والمبادرات لاحقًا.':'A space for humanitarian and charitable initiatives that we aim to launch and support. We will continue developing this page and add details and initiatives soon.',
'قريبًا — مساحة للعطاء والأثر':'Coming soon — a space for giving and impact',
'قريبــاً — Soon':'Coming Soon',
'مساحة VIP قيد التطوير.':'The VIP area is under development.',
'من نحــن':'About us','تواصل':'Contact','العودة':'Back',
'تبديل الوضع':'Toggle theme'
};
const reverse=Object.fromEntries(Object.entries(map).map(([a,b])=>[b,a]));
const norm=s=>s.replace(/[\u0640\u064B-\u065F\u0670]/g,'').trim();
function apply(lang){
 document.documentElement.lang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';
 document.querySelectorAll('[data-i18n]').forEach(el=>{const key=el.dataset.i18n;el.textContent=(lang==='en'?map[key]:reverse[key])||key});
 const w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);let n;
 while(n=w.nextNode()){
  const p=n.parentElement;if(!p||['SCRIPT','STYLE'].includes(p.tagName)||p.closest('[data-i18n]'))continue;
  const raw=n.__langOriginal||(n.__langOriginal=n.nodeValue),s=raw.trim();if(!s)continue;
  const dict=lang==='en'?map:reverse;const val=dict[s]||Object.entries(dict).find(([k])=>norm(k)===norm(s))?.[1];
  if(val)n.nodeValue=raw.replace(s,val);
 }
 document.querySelectorAll('[aria-label]').forEach(el=>{const raw=el.dataset.langLabel||(el.dataset.langLabel=el.getAttribute('aria-label'));const val=(lang==='en'?map:reverse)[raw];if(val)el.setAttribute('aria-label',val)});
 const btn=document.getElementById('languageBtn');if(btn)btn.textContent=lang==='ar'?'EN':'عربي';
 localStorage.setItem('stella-language',lang);
}
document.addEventListener('DOMContentLoaded',()=>{
 const btn=document.getElementById('languageBtn');
 btn?.addEventListener('click',()=>apply(document.documentElement.lang==='ar'?'en':'ar'));
 apply(localStorage.getItem('stella-language')||'ar');
});
})();