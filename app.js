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
'الرئيسية':'Home','من نحن':'About us','المحتوى':'Content','الكورسات والدورات':'Courses','المؤسس':'Founder','المنتجات والمشاريع':'Products & Projects',
'التعاون والشراكات':'Partnerships','أبرز نشاطات STELLA':'Key STELLA Activities','صناعة المحتوى':'Content Creation','نصنع محتوى مفيدًا ومتعدد المجالات، من تطوير الذات والتقنية إلى التاريخ والبودكاست.':'We create useful content across self-development, technology, history and podcasts.','التعليم والتطوير':'Education & Development','نقدّم كورسات ودورات ومواد عملية تساعد على اكتساب مهارات رقمية ومهنية جديدة.':'We provide courses and practical learning materials that build digital and professional skills.','المشاريع الرقمية':'Digital Projects','نطوّر منتجات ومشاريع رقمية قابلة للنمو، ونحوّل الأفكار إلى تجارب ومنتجات حقيقية.':'We develop scalable digital products and projects, turning ideas into real experiences and products.','التعاون والشراكات':'Collaboration & Partnerships','نبني شراكات مع الشركات وصنّاع المحتوى والمبدعين لإطلاق مبادرات ومشاريع مشتركة.':'We build partnerships with companies, creators and creatives to launch joint initiatives and projects.','السابق':'Previous','التالي':'Next','التنقل بين نشاطات STELLA':'Navigate STELLA activities','الداعمون ماليًا':'Support STELLA','الإعلانات':'Advertising','الأخبار والتحديثات':'News & Updates','انضم إلى STELLA':'Join STELLA','تواصل معنا':'Contact us','الإعدادات':'Settings','تطوير الذات':'Self-development','البودكاست':'Podcast','التاريخ والحضارات':'History & Civilizations','العربية / English':'Arabic / English','الوضع النهاري / الليلي':'Light / Dark mode',
'من غزة إلى العالم':'From Gaza to the world','شركة ولدت قديمًا، لتصنع مستقبلًا يصل إلى العالم.':'A company with roots in the past, building a future that reaches the world.',
'منصة تجمع المحتوى، التعليم، المشاريع، التعاون والأفكار في تجربة واحدة هادئة، حديثة وقابلة للنمو.':'A platform bringing content, education, projects, partnerships and ideas together in one modern, evolving experience.',
'اكتشف STELLA':'Discover STELLA','Born in the Past, Built for the Future.':'Born in the Past, Built for the Future.','1999 — عنصر رمزي في هوية STELLA، وليس تاريخ التأسيس.':'1999 — a symbolic part of STELLA’s identity, not its founding date.',
'من غزة، حيث تبدأ الحكاية، إلى العالم حيث نطمح أن يصل أثرنا.':'From Gaza, where the story begins, to the world, where we hope our impact will reach.',
'لم تنشأ stella من ظروف عادية، بل من واقع مليء بالتحديات ومن إيمان بأن الأحلام الكبيرة لا تعرف حدودًا. نسعى لصناعة محتوى مفيد، فرص تعليم، مشاريع وشراكات تترك أثرًا.':'STELLA was not born in ordinary circumstances. It grew from challenge and the belief that big dreams know no borders. We aim to create useful content, learning opportunities, projects and partnerships that make a difference.',
'Founder & CEO of STELLA':'Founder & CEO of STELLA','فلسطيني، حاصل على دبلوم فني عمليات جراحية وبكالوريوس في التمريض، مع خبرة تمتد لثماني سنوات في صناعة المحتوى الرقمي ومؤهلات في صناعة المحتوى.':'Palestinian, with a diploma as a Surgical Operations Technician and a bachelor’s degree in Nursing, plus eight years of digital content creation experience and related qualifications.',
'رحلة مهنية وتعليمية تشكلت وسط تحديات غزة، مع رؤية لبناء أثر يتجاوز الحدود.':'A professional and educational journey shaped by the challenges of Gaza, with a vision to create impact beyond borders.',
'قناة المؤسس على YouTube':'Founder’s YouTube channel','↗':'↗','ثلاثة مسارات، عالم واسع من الأفكار.':'Three paths. A world of ideas.',
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
'© 2026 STELLA. All rights reserved.':'© 2026 STELLA. All rights reserved.','تواصل':'Contact','Privacy':'الخصوصية','Terms':'الشروط',
'التنقل':'Navigation','تبديل الوضع':'Toggle theme','فتح القائمة':'Open menu','إغلاق':'Close','Switch language':'تغيير اللغة','العودة':'Back','العودة إلى المحتوى':'Back to content','Shorts':'Shorts','مقاطع قصيرة':'Short Clips','سيتم إضافة المقاطع القصيرة هنا.':'Short clips will be added here.','مساحة جاهزة للمحتوى القادم.':'Space ready for upcoming content.','محتوى قصير جديد قريبًا.':'New short-form content coming soon.','فيديو من YouTube':'YouTube Video','مكان مخصص لفيديوهات YouTube الخاصة بهذا المسار.':'A dedicated space for YouTube videos for this category.','مساحة لفيديو أو مادة مرئية إضافية.':'Space for an additional video or visual piece.','منشورات':'Posts','منشور جديد':'New post','إعجاب':'Like','مشاركة':'Share','تعليق':'Comment','المحتوى':'Content','معلومة تاريخية سريعة':'Quick historical fact','مساحة لمنشور STELLA عن شخصية، حضارة، حدث أو قصة تاريخية.':'Space for a STELLA post about a figure, civilization, event or historical story.','مساحة لمنشور STELLA عن حلقة، فكرة أو اقتباس من البودكاست.':'Space for a STELLA post about an episode, idea or podcast quote.','مساحة لمنشور STELLA حول تطوير الذات، العادات، الإنتاجية أو صناعة المحتوى.':'Space for a STELLA post about self-development, habits, productivity or content creation.','من الأرشيف':'From the Archive','من الحلقة':'From the Episode','فكرة اليوم':'Idea of the Day','مقتطفات من الحلقات':'Episode Clips','أدوات ومهارات عملية':'Practical tools & skills','الحلقة الكاملة':'Full Episode','حلقة أو لقاء إضافي':'Additional episode or interview','وثائقي أو قصة تاريخية':'Documentary or historical story','مادة مرئية إضافية':'Additional visual material','YouTube Video':'YouTube Video','Short':'Short',
'قناة القرآن الخاصة بالمؤسس':'Founder’s Quran channel','ترند':'Trending','أبرز نشاطات STELLA':'Key STELLA Activities','Carousel':'Carousel','كاروسيل':'Carousel','بطاقة كاروسيل جديدة':'New carousel card','مساحة لمحتوى متعدد البطاقات، كل بطاقة تحمل جزءًا مستقلًا من الفكرة.':'Space for multi-card content, with each card carrying one part of the idea.','فكرة على عدة بطاقات':'An idea across multiple cards','يمكن تصفح البطاقات بالسحب أو عبر الأسهم عند إضافة المحتوى الفعلي.':'Browse the cards by swiping or using the arrows when real content is added.','معلومة أو قصة':'A fact or story','تنسيق مناسب للتعليم، القصص، القوائم والمحتوى المرئي المتسلسل.':'A format suited to education, stories, lists and sequential visual content.','جديد':'New','الأكثر مشاهدة':'Most viewed','بحث':'Search','ابحث في محتوى تطوير الذات...':'Search self-development content...','ابحث في محتوى البودكاست...':'Search podcast content...','ابحث في التاريخ والحضارات...':'Search history & civilizations...','تطوير الذات':'Self-development','البودكاست':'Podcast','التاريخ والحضارات':'History & Civilizations','مقاطع قصيرة':'Short Clips','فيديو من YouTube':'YouTube Video','منشورات':'Posts','STELLA':'STELLA'
};

// Complete bilingual coverage for the current page content. Matching ignores Arabic elongation marks,
// so the Arabic typography remains unchanged while its English translation is displayed.
Object.assign(translations,{
'الرئيسية':'Home','الرئيســية':'Home','من نحــن':'About us','المحتــوى':'Content','الكورسات والدورات':'Courses','الكورسات والــدورات':'Courses','المؤســس':'Founder','المنتجات والمشاريــع':'Products & Projects','التعــاون والشراكــات':'Collaboration & Partnerships','الداعمون ماليًا':'Financial Supporters','الإعلانــات':'Advertising','الأخبــار والتحديثــات':'News & Updates','تواصــل معنا':'Contact us','ابحــث داخــل STELLA':'Search STELLA','شركــةٌ تنطلق من جذور المــاضي، لتصنع مستقبلًا يصل إلى العــالم.':'A company rooted in the past, building a future that reaches the world.','منصة تجمع المحتــوى والتعليم والمشاريــع والشراكــات والأفكار في تجربة واحدة عصرية قابلة للنمو.':'A platform bringing content, education, projects, partnerships and ideas together in one modern, evolving experience.','خاصــة بالمدراء والأغنياء ورجال الأعمال':'For executives, affluent individuals and business leaders','أبرَز نشاطــات STELLA':'Featured STELLA Activities','صناعــة المحتــوى':'Content Creation','نصنع محتــوى مفيدًا ومتعدد المجــالات، من تطويــر الذات والتقنية إلى التاريــخ والبودكــاست.':'We create useful content across self-development, technology, history and podcasts.','التعليــم والتطويــر':'Education & Development','نقدّم كورســات ودورات ومواد عمليــة تساعد على اكتساب مهــارات رقمية ومهنية جديدة.':'We offer courses and practical materials that help build new digital and professional skills.','المشاريــع الرقميــة':'Digital Projects','نطوّر منتجــات ومشاريــع رقمية قابلة للنمو، ونحوّل الأفكــار إلى تجارب ومنتجــات حقيقية.':'We develop scalable digital products and projects, turning ideas into real experiences and products.','من غــزة، حيث تبدأ الحكــاية، إلى العــالم، حيث نطمح أن يمتد أثرنــا.':'From Gaza, where the story begins, to the world, where we hope our impact will reach.','لم تنشأ STELLA في ظروف عادية؛ بل انطلقت من واقع مليء بالتحديات، ومن إيمان بأن الأفكار قادرة على تجاوز الحدود. بدأنا من غزة، وتتجه رؤيتنا إلى العالم لبناء شركة تجمع المحتــوى والتعليم والمشاريــع الرقمية والشراكــات ضمن تجربة واحدة.':'STELLA was not born in ordinary circumstances. It emerged from a reality full of challenges and the belief that ideas can cross borders. We began in Gaza, with a vision to build a company bringing content, education, digital projects and partnerships together.','رحلة مهنية وتعليمية تشكّلت وسط تحديــات غــزة، مع رؤية لبناء أثر يتجاوز الحدود.':'A professional and educational journey shaped by Gaza’s challenges, with a vision to make an impact beyond borders.','قناة المؤســس على YouTube':'Founder’s YouTube channel','ثلاثــة مســارات، عالــم واســع من الأفكــار.':'Three paths. A wide world of ideas.','موضوعات روحية ودينية ونفسية وحياتية وجسدية، إلى جانب المال والعلاقات.':'Spiritual, religious, psychological, lifestyle and wellbeing topics, alongside finance and relationships.','الدول والشخصيات البارزة والأحداث العالمية والكتّاب والشركات، إلى جانب التحقيقات والوثائقيات والرياضة.':'Countries, notable figures, world events, writers and companies, alongside investigations, documentaries and sports.','الكورســات والــدورات':'Courses & Training','دورات عملية لبناء مهارات صناعة المحتــوى.':'Practical courses to build content creation skills.','البرامــج والمواقــع':'Software & Websites','علم النفــس والمــال':'Psychology & Finance','اللغــات والعلــوم':'Languages & Sciences','اللغات والتنمية البشرية والعلوم وورش العمل.':'Languages, personal development, sciences and workshops.','المنتجــات والمشاريــع':'Products & Projects','مشــروع جديــد':'New Project','منتــج رقمــي':'Digital Product','مساحة مخصصة لعرض المنتجات والخدمات المستقبلية.':'A dedicated space for future products and services.','مبــادرات':'Initiatives','نبنــي مع الآخريــن.':'Building together.','شراكــات الشركــات':'Business Partnerships','صنــاع المحتــوى':'Content Creators','الرعــاية والإعــلام':'Sponsorship & Media','رعاية وتعاون إعلامي وإبراز للمبادرات والمشاريــع.':'Sponsorship, media collaborations and highlighting initiatives and projects.','ادعــم STELLA.':'Support STELLA.','الــدعم اختياري، ويمكن أن يكون لمرة واحدة أو متكررًا. لا يفتح محتوى حصريًا ولا تظهر أسماء الداعمين.':'Support is optional, either one-time or recurring. It does not unlock exclusive content, and supporters’ names are not displayed.','إعلانــات وشراكــات مدروســة.':'Thoughtful advertising & partnerships.','إعلانــات وشراكــات مدروســة':'Thoughtful advertising & partnerships','إعلان مؤقت':'Temporary Ad','إعلان دائم':'Permanent Ad','إعلان قصير المدى':'Short-term Ad','بوست':'Post','رعاية حلقات':'Episode Sponsorship','تسليط ضوء':'Spotlight','مساحة مخصصة لإعلانات الشركة والمشاريــع والإنجازات والفعاليات والشراكــات.':'A space for company announcements, projects, achievements, events and partnerships.','انضــم إلى STELLA':'Join STELLA','التطــوع':'Volunteering','ساهم في بناء المشاريــع والمبادرات.':'Help build projects and initiatives.','فرص العمــل':'Career Opportunities','تابع الفرص المهنية القادمة.':'Explore upcoming career opportunities.','لنبقَ على تواصل.':'Let’s stay connected.','للاستفسارات العامة، الشراكــات، الإعلام والفرص التجارية.':'For general inquiries, partnerships, media and business opportunities.','تطويــر الــذات':'Self-development','التاريــخ والحضــارات':'History & Civilizations','البودكاســت':'Podcast','جديد':'New','الأكثر مشاهدة':'Most viewed','بحث':'Search','كاروسيل':'Carousel','بطاقــة كاروسيل جديــدة':'New carousel card','مساحة لمحتــوى متعدد البطاقــات، كل بطاقة تحمل جزءًا مستقلًا من الفكرة.':'A space for multi-card content, with each card presenting one part of an idea.','فكــرة على عــدة بطاقــات':'An idea across multiple cards','يمكن تصفح البطاقات بالسحب أو عبر الأسهم عند إضافة المحتــوى الفعلي.':'Browse cards by swiping or using the arrows once content is added.','معلومــة أو قصــة':'A fact or story','تنسيق مناسب للتعليم، القصص، القوائم والمحتــوى المرئي المتسلسل.':'A format suited to educational content, stories, lists and visual series.','مقاطع قصيــرة':'Short Clips','مسار تطوير الذات يجمع صناعة المحتــوى والإنتاجية والاستثمار والتكنولوجيا والنصائح العملية.':'A self-development track covering content creation, productivity, investing, technology and practical tips.','مساحة البودكاست للحلقات الروحية والدينية والنفسية والحياتية والجسدية والمالية، وموضوعات العلاقات.':'Podcast episodes exploring spiritual, religious, psychological, lifestyle, wellbeing and financial topics, as well as relationships.','مسار يأخذك إلى الدول والشخصيات والأحداث العالمية والحضارات والقصص الوثائقية والتحقيقية.':'A journey through countries, notable figures, world events, civilizations, documentaries and investigative stories.','ستُضاف المقــاطع القصيرة هنا.':'Short clips will be added here.','مساحة جاهزة للمحتــوى القادم.':'Space ready for upcoming content.','محتــوى قصير جديد قريبًا.':'New short-form content coming soon.','فيديــو من YouTube':'YouTube Video','أفكاــر سريعــة في تطويــر الــذات':'Quick ideas for self-development','مكان مخصص لفيديوهــات YouTube الخاصة بهذا المســار.':'A dedicated space for YouTube videos for this category.','صناعــة المحتــوى والإنتاجيــة':'Content Creation & Productivity','مساحة لفيديو أو مــادة مرئية إضافية.':'Space for an additional video or visual piece.','مقتطفــات من الحلقــات':'Episode Highlights','الحلقــة الكاملــة':'Full Episode','معلومــة تاريخيــة سريعــة':'Quick Historical Fact','وثائقــي أو قصــة تاريخيــة':'Documentary or Historical Story','منشــورات':'Posts','منشور جديد':'New post','أدوات ومهــارات عمليــة':'Practical Tools & Skills','فكرة اليوم':'Idea of the Day','حلقــة أو لقــاء إضافــي':'Additional Episode or Interview','من الحلقة':'From the Episode','مــادة مرئيــة إضافيــة':'Additional Visual Content','من الأرشيف':'From the Archive','إعجاب':'Like','مشاركة':'Share','تعليق':'Comment','قريبــاً — Soon':'Coming Soon','مساحة VIP قيد التطوير.':'The VIP area is under development.','المشاريــع والخصومــات والمنتجــات':'Projects, Discounts & Products','قيد الإعداد — قريبًا':'Coming soon','نعمل على تجهيز هذه المســاحة لعرض مشاريــع STELLA ومنتجــاتها وأحدث العروض والخصومــات.':'We are preparing this space to showcase STELLA projects, products, latest offers and discounts.','العودة إلى الرئيســية':'Back to Home'
});

Object.assign(translations,{
 'بحث...':'Search...','بحث':'Search','التعاون':'Collaboration','الدعم':'Support',
 'الخصوصية':'Privacy','الشروط':'Terms',
 'فلسطيني، حاصل على دبلوم فني في العمليات الجراحية وبكالوريوس في التمريض، ولديه خبرة تمتد لثماني سنوات في صناعة المحتــوى الرقمي.':'Palestinian, with a diploma in Surgical Operations Technology and a bachelor’s degree in Nursing, and eight years of experience in digital content creation.',
 'فلسطيني، حاصل على دبلوم فني في العمليات الجراحية وبكالوريوس في التمريض، ولديه خبرة تمتد لثماني سنوات في صناعة المحتوى الرقمي.':'Palestinian, with a diploma in Surgical Operations Technology and a bachelor’s degree in Nursing, and eight years of experience in digital content creation.',
 'نبنــي مع الآخريــن.':'Building together.',
 'Privacy':'Privacy','Terms':'Terms'
});
const reverseTranslations=Object.fromEntries(Object.entries(translations).map(([ar,en])=>[en,ar]));

function translateTextNode(node,language){
 const raw=node.__stellaOriginal??(node.__stellaOriginal=node.nodeValue);
 const source=raw.trim();
 if(!source)return;
 const dictionary=language==='en'?translations:reverseTranslations;
 const normalized=value=>value.replace(/[\u0640\u064B-\u065F\u0670]/g,'').trim();
 const translated=dictionary[source]||dictionary[normalized(source)]||Object.entries(dictionary).find(([key])=>normalized(key)===normalized(source))?.[1]||source;
 node.nodeValue=raw.replace(source,translated);
}
function translateAttribute(el,attribute,language){
 const key=attribute==='aria-label'?'originalLabel':'originalTitle';
 const raw=el.dataset[key]||el.getAttribute(attribute);
 if(!raw)return;
 el.dataset[key]=raw;
 const dictionary=language==='en'?translations:reverseTranslations;
 const normalized=value=>value.replace(/[\u0640\u064B-\u065F\u0670]/g,'').trim();
 el.setAttribute(attribute,dictionary[raw]||dictionary[normalized(raw)]||Object.entries(dictionary).find(([key])=>normalized(key)===normalized(raw))?.[1]||raw);
}

function updateLogoWordmarks(){
 const markup='Stell<span class="logo-a">a<sup>PF.</sup></span>';
 document.querySelectorAll('.brand > span,.side-brand,.footer-brand').forEach(el=>{el.innerHTML=markup;el.setAttribute('dir','ltr');el.style.unicodeBidi='isolate'});
}

function setLanguage(language){
 document.documentElement.lang=language;
 updateLogoWordmarks(language);
 document.documentElement.dir=language==='ar'?'rtl':'ltr';
 const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,{acceptNode(node){
  const parent=node.parentElement;
  if(!parent || ['SCRIPT','STYLE'].includes(parent.tagName) || !node.nodeValue.trim())return NodeFilter.FILTER_REJECT;
  return NodeFilter.FILTER_ACCEPT;
 }});
 let node; while(node=walker.nextNode())translateTextNode(node,language);
 document.querySelectorAll('.side-inner summary').forEach(el=>{if(!el.dataset.original)el.dataset.original=el.textContent;el.textContent=language==='en'?(translations[el.dataset.original]||el.dataset.original):el.dataset.original});
 document.querySelectorAll('[aria-label]').forEach(el=>translateAttribute(el,'aria-label',language));
 document.querySelectorAll('[title]').forEach(el=>translateAttribute(el,'title',language));
 document.querySelectorAll('input[placeholder]').forEach(el=>translateAttribute(el,'placeholder',language));
 document.querySelectorAll('input[aria-label],textarea[aria-label]').forEach(el=>translateAttribute(el,'aria-label',language));
 const titleMap={ar:'STELLA — من غزة إلى العالم',en:'STELLA — From Gaza to the World'};
 document.title=titleMap[language];
 const metaDescription=document.querySelector('meta[name="description"]');
 if(metaDescription){
  const raw=metaDescription.dataset.originalContent||metaDescription.getAttribute('content');
  metaDescription.dataset.originalContent=raw;
  metaDescription.setAttribute('content',language==='en'?'STELLA — a content, education and digital projects platform from Gaza to the world.':'STELLA — منصة محتوى وتعليم ومشاريع رقمية من غزة إلى العالم.');
 }
 const btn=document.getElementById('languageBtn');if(btn)btn.textContent=language==='ar'?'EN':'عربي';
 localStorage.setItem('stella-language',language);
}
document.getElementById('languageBtn')?.addEventListener('click',()=>setLanguage(document.documentElement.lang==='ar'?'en':'ar'));
setLanguage(localStorage.getItem('stella-language')||'ar');

// About activities carousel
const aboutCarousel=document.querySelector('[data-about-carousel]');
const aboutPrev=document.querySelector('[data-about-prev]');
const aboutNext=document.querySelector('[data-about-next]');
function scrollAboutCarousel(direction){
 if(!aboutCarousel)return;
 const amount=Math.max(aboutCarousel.clientWidth*.72,260);
 aboutCarousel.scrollBy({left:(document.documentElement.dir==='rtl'?-direction:direction)*amount,behavior:'smooth'});
}
aboutPrev?.addEventListener('click',()=>scrollAboutCarousel(-1));
aboutNext?.addEventListener('click',()=>scrollAboutCarousel(1));

/* Content page filters */
document.querySelectorAll('[data-content-filter]').forEach(button=>{
  button.addEventListener('click',()=>{
    const mode=button.dataset.contentFilter;
    document.querySelectorAll('[data-content-filter]').forEach(b=>b.classList.toggle('active',b===button));
    document.querySelectorAll('.content-results').forEach(grid=>{
      const cards=[...grid.querySelectorAll('.media-card,.video-card')];
      cards.forEach(card=>{
        const isVideo=card.classList.contains('video-card');
        card.hidden=mode==='popular' ? !isVideo : false;
      });
    });
  });
});
document.querySelectorAll('[data-content-search]').forEach(input=>{
  input.addEventListener('input',()=>{
    const query=input.value.trim().toLowerCase();
    const page=input.closest('.content-detail');
    page?.querySelectorAll('.media-card,.video-card,.social-post-card').forEach(card=>{
      card.hidden=!!query && !card.textContent.toLowerCase().includes(query);
    });
  });
});


/* Fullscreen carousel viewer */
function initContentCarousels(){
  document.querySelectorAll('[data-carousel]').forEach(carousel=>{
    const cards=[...carousel.querySelectorAll('.carousel-card')];
    if(!cards.length)return;
    cards.forEach((card,index)=>{
      card.setAttribute('tabindex','0');
      card.setAttribute('role','button');
      card.setAttribute('aria-label',`Carousel slide ${index+1}`);
      card.addEventListener('click',()=>openCarouselViewer(cards,index));
      card.addEventListener('keydown',e=>{
        if(e.key==='Enter'||e.key===' '){e.preventDefault();openCarouselViewer(cards,index)}
      });
    });
  });
}
function openCarouselViewer(cards,startIndex){
  let index=startIndex;
  const viewer=document.createElement('div');
  viewer.className='carousel-viewer';
  viewer.setAttribute('role','dialog');
  viewer.setAttribute('aria-modal','true');
  viewer.innerHTML=`
    <div class="carousel-viewer-inner">
      <button class="carousel-viewer-close" type="button" aria-label="Close">×</button>
      <button class="carousel-viewer-arrow carousel-viewer-prev" type="button" aria-label="Previous">‹</button>
      <article class="carousel-viewer-slide"></article>
      <button class="carousel-viewer-arrow carousel-viewer-next" type="button" aria-label="Next">›</button>
      <div class="carousel-viewer-count"></div>
    </div>`;
  document.body.appendChild(viewer);
  const slide=viewer.querySelector('.carousel-viewer-slide');
  const count=viewer.querySelector('.carousel-viewer-count');
  const close=viewer.querySelector('.carousel-viewer-close');
  const prev=viewer.querySelector('.carousel-viewer-prev');
  const next=viewer.querySelector('.carousel-viewer-next');

  function render(){
    const source=cards[index];
    slide.innerHTML=source.innerHTML;
    count.textContent=`${index+1} / ${cards.length}`;
    const rtl=document.documentElement.dir==='rtl';
    prev.textContent=rtl?'→':'←';
    next.textContent=rtl?'←':'→';
  }
  function move(step){
    index=(index+step+cards.length)%cards.length;
    render();
  }
  function closeViewer(){
    document.removeEventListener('keydown',onKey);
    viewer.remove();
  }
  function onKey(e){
    if(e.key==='Escape')closeViewer();
    if(e.key==='ArrowLeft')move(document.documentElement.dir==='rtl'?1:-1);
    if(e.key==='ArrowRight')move(document.documentElement.dir==='rtl'?-1:1);
  }
  let startX=null;
  slide.addEventListener('touchstart',e=>{startX=e.changedTouches[0].clientX},{passive:true});
  slide.addEventListener('touchend',e=>{
    if(startX===null)return;
    const delta=e.changedTouches[0].clientX-startX;
    startX=null;
    if(Math.abs(delta)<45)return;
    const rtl=document.documentElement.dir==='rtl';
    if(delta<0)move(rtl?-1:1); else move(rtl?1:-1);
  },{passive:true});
  prev.addEventListener('click',()=>move(document.documentElement.dir==='rtl'?1:-1));
  next.addEventListener('click',()=>move(document.documentElement.dir==='rtl'?-1:1));
  close.addEventListener('click',closeViewer);
  viewer.addEventListener('click',e=>{if(e.target===viewer)closeViewer()});
  document.addEventListener('keydown',onKey);
  render();
  requestAnimationFrame(()=>viewer.classList.add('open'));
}
initContentCarousels();
