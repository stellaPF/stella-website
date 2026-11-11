const menu=document.getElementById('sideMenu'),overlay=document.getElementById('overlay');
function openMenu(){menu.classList.add('open');overlay.classList.add('show');menu.setAttribute('aria-hidden','false')}
function closeMenu(){menu.classList.remove('open');overlay.classList.remove('show');menu.setAttribute('aria-hidden','true')}
document.getElementById('menuBtn').onclick=openMenu;
document.getElementById('closeMenu').onclick=closeMenu;
overlay.onclick=closeMenu;
document.querySelectorAll('.side-inner a').forEach(a=>a.addEventListener('click',closeMenu));
function toggleTheme(){document.body.classList.toggle('light');localStorage.setItem('stella-theme',document.body.classList.contains('light')?'light':'dark')}
document.getElementById('themeBtn').onclick=toggleTheme;
document.getElementById('sideTheme').onclick=(e)=>{e.preventDefault();toggleTheme()};
if(localStorage.getItem('stella-theme')==='light')document.body.classList.add('light');

const translations={
'الرئيسية':'Home','من نحن':'About us','المحتوى':'Content','الدورات':'Courses','المؤسس':'Founder','المنتجات والمشاريع':'Products & Projects',
'التعاون والشراكات':'Partnerships','الداعمون ماليًا':'Support STELLA','الإعلانات':'Advertising','الأخبار والتحديثات':'News & Updates','انضم إلى STELLA':'Join STELLA','تواصل معنا':'Contact us','الإعدادات':'Settings','تطوير الذات':'Self-development','البودكاست':'Podcast','التاريخ والحضارات':'History & Civilizations','العربية / English':'العربية / English','الوضع النهاري / الليلي':'Light / Dark mode',
'من غزة إلى العالم':'From Gaza to the world','شركة ولدت قديمًا، لتصنع مستقبلًا يصل إلى العالم.':'A company with roots in the past, building a future that reaches the world.',
'منصة تجمع المحتوى، التعليم، المشاريع، التعاون والأفكار في تجربة واحدة هادئة، حديثة وقابلة للنمو.':'A platform bringing content, education, projects, partnerships and ideas together in one modern, evolving experience.',
'اكتشف STELLA':'Discover STELLA','Born in the Past, Built for the Future.':'Born in the Past, Built for the Future.','1999 — عنصر رمزي في هوية STELLA، وليس تاريخ التأسيس.':'1999 — a symbolic part of STELLA’s identity, not its founding date.',
'من غزة، حيث تبدأ الحكاية، إلى العالم حيث نطمح أن يصل أثرنا.':'From Gaza, where the story begins, to the world, where we hope our impact will reach.',
'لم تنشأ STELLA من ظروف عادية، بل من واقع مليء بالتحديات ومن إيمان بأن الأحلام الكبيرة لا تعرف حدودًا. نسعى لصناعة محتوى مفيد، فرص تعليم، مشاريع وشراكات تترك أثرًا.':'STELLA was not born in ordinary circumstances. It grew from challenge and the belief that big dreams know no borders. We aim to create useful content, learning opportunities, projects and partnerships that make a difference.',
'Founder & CEO of STELLA':'Founder & CEO of STELLA','فلسطيني، حاصل على دبلوم فني عمليات جراحية وبكالوريوس في التمريض، مع خبرة تمتد لثماني سنوات في صناعة المحتوى الرقمي ومؤهلات في صناعة المحتوى.':'Palestinian, with a diploma as a Surgical Operations Technician and a bachelor’s degree in Nursing, plus eight years of digital content creation experience and related qualifications.',
'رحلة مهنية وتعليمية تشكلت وسط تحديات غزة، مع رؤية لبناء أثر يتجاوز الحدود.':'A professional and educational journey shaped by the challenges of Gaza, with a vision to create impact beyond borders.',
'قناة المؤسس على YouTube':'Founder’s YouTube channel',
'↗':'↗','ثلاثة مسارات، عالم واسع من الأفكار.':'Three paths. A world of ideas.',
'صناعة المحتوى، تطوير الذات، الإنتاجية، النصائح، الاستثمار والتكنولوجيا.':'Content creation, self-development, productivity, tips, investing and technology.',
'روحي، ديني، نفسي، حياتي، جسدي، مال وعلاقات.':'Spirituality, faith, psychology, life, wellbeing, money and relationships.',
'الدول، الشخصيات البارزة، الأحداث العالمية، المؤلفون والكتاب، الشركات، الاستقصائي، الوثائقي والرياضة.':'Countries, notable figures, world events, writers, companies, investigative stories, documentaries and sports.',
'التعليم':'Education','صناعة المحتوى':'Content Creation','دورات عملية لبناء مهارات صناعة المحتوى.':'Practical courses to build content creation skills.',
'البرامج والمواقع':'Software & Websites','مهارات رقمية وأدوات وتقنيات عملية.':'Digital skills, tools and practical technologies.',
'علم النفس والمال':'Psychology & Finance','مسارات تعليمية في علم النفس والمال.':'Learning paths in psychology and finance.',
'اللغات والعلوم':'Languages & Sciences','لغات، تنمية بشرية، علوم وورش تدريبية.':'Languages, personal development, sciences and workshops.',
'المشاريع':'Projects','كل مشروع مستقل ببطاقته وصفحته ومحتواه عند إطلاقه.':'Each project will have its own card, page and content when launched.',
'منتج رقمي':'Digital Product','مساحة مخصصة لعرض المنتجات والخدمات المستقبلية.':'A dedicated space for future digital products and services.',
'مبادرات':'Initiatives','مبادرات STELLA وشراكاتها وأثرها.':'STELLA initiatives, partnerships and impact.',
'نبني مع الآخرين.':'Building together.','شراكات الشركات':'Business Partnerships','فرص تجارية وإعلامية ومشاريع مشتركة.':'Business, media and joint project opportunities.',
'صناع المحتوى':'Content Creators','تعاونات مع المبدعين وصناع المحتوى.':'Collaborations with creatives and content creators.',
'الرعاية والإعلام':'Sponsorship & Media','رعاية، تعاون إعلامي وتسليط ضوء.':'Sponsorship, media collaborations and features.',
'ادعم STELLA.':'Support STELLA.','الدعم اختياري، ويمكن أن يكون لمرة واحدة أو متكررًا. لا يفتح محتوى حصريًا ولا تظهر أسماء الداعمين.':'Support is optional, either one-time or recurring. It does not unlock exclusive content, and supporters’ names are not displayed.',
'إعلانات وشراكات مدروسة.':'Thoughtful advertising & partnerships.','إعلان مؤقت':'Temporary Ad','إعلان دائم':'Permanent Ad','إعلان قصير المدى':'Short-term Ad','بوست':'Post','رعاية حلقات':'Episode Sponsorship','تعاون':'Collaboration','تسليط ضوء':'Spotlight',
'آخر المستجدات':'Latest Updates','مساحة مخصصة لإعلانات الشركة والمشاريع والإنجازات والفعاليات والشراكات.':'A space for company announcements, projects, achievements, events and partnerships.',
'انضم':'Join','ساهم في بناء المشاريع والمبادرات.':'Help build projects and initiatives.','فرص العمل':'Career Opportunities','تابع الفرص المهنية القادمة.':'Explore upcoming career opportunities.','تعاون معنا في إنتاج محتوى جديد.':'Collaborate with us to create new content.',
'لنبقى على اتصال.':'Let’s stay connected.','للاستفسارات العامة، الشراكات، الإعلام والفرص التجارية.':'For general inquiries, partnerships, media and business opportunities.',
'© 2026 STELLA. All rights reserved.':'© 2026 STELLA. All rights reserved.','تواصل':'Contact','من نحن':'About us'
};
function translateTextNode(node,language){
 const original=node.nodeValue.trim();
 if(!original)return;
 if(!node.__stellaOriginal)node.__stellaOriginal=node.nodeValue;
 const source=node.__stellaOriginal.trim();
 const translated=language==='en'?(translations[source]||source):source;
 node.nodeValue=node.__stellaOriginal.replace(source,translated);
}
function setLanguage(language){
 document.documentElement.lang=language;
 document.documentElement.dir=language==='ar'?'rtl':'ltr';
 const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,{acceptNode(node){
  const parent=node.parentElement;
  if(!parent || ['SCRIPT','STYLE'].includes(parent.tagName) || !node.nodeValue.trim())return NodeFilter.FILTER_REJECT;
  return NodeFilter.FILTER_ACCEPT;
 }});
 let node; while(node=walker.nextNode())translateTextNode(node,language);
 document.querySelectorAll('.side-inner summary').forEach(el=>{if(!el.dataset.original)el.dataset.original=el.textContent;el.textContent=language==='en'?(translations[el.dataset.original]||el.dataset.original):el.dataset.original});
 document.querySelectorAll('[aria-label]').forEach(el=>{if(!el.dataset.originalLabel)el.dataset.originalLabel=el.getAttribute('aria-label');el.setAttribute('aria-label',language==='en'?(translations[el.dataset.originalLabel]||el.dataset.originalLabel):el.dataset.originalLabel)});
 const btn=document.getElementById('languageBtn');if(btn)btn.textContent=language==='ar'?'EN':'عربي';
 localStorage.setItem('stella-language',language);
}
document.getElementById('languageBtn')?.addEventListener('click',()=>setLanguage(document.documentElement.lang==='ar'?'en':'ar'));
setLanguage(localStorage.getItem('stella-language')||'ar');
