const walaaChaptersData = [
  {
    "id": "ch1",
    "num": "Chapter 1 • الفصل الأول",
    "title": "القسم الأول: Visual & Image Commands",
    "subtitle": "أوامر الشرح البصري والصور التعليمية (1–40)",
    "range": "1–40",
    "themeGradient": "from-indigo-900 via-indigo-800 to-teal-800",
    "icon": "🖼️",
    "commands": [
      {
        "id": 1,
        "cmd": "/visualize",
        "subject": "العلوم والحياة",
        "tagColor": "bg-blue-50 text-blue-800 border-blue-200",
        "benefit": "يحول المفهوم أو الفكرة إلى شرح بصري سهل الفهم.",
        "example": "/visualize اشرح دورة الماء بصريًا لطلاب الصف الثالث باستخدام السحب والمطر والبحر والأسهم.",
        "keywords": "visualize دورة الماء سحب مطر بحر علوم"
      },
      {
        "id": 2,
        "cmd": "/infographic",
        "subject": "اللغة العربية",
        "tagColor": "bg-amber-50 text-amber-800 border-amber-200",
        "benefit": "يحول المعلومات إلى إنفوجرافيك منظم ومختصر.",
        "example": "/infographic صمّم محتوى إنفوجرافيك للصف السادس يوضح أنواع الجمل في اللغة العربية مع مثال لكل نوع.",
        "keywords": "infographic إنفوجرافيك أنواع الجمل لغة عربية"
      },
      {
        "id": 3,
        "cmd": "/diagram",
        "subject": "العلوم والأحياء",
        "tagColor": "bg-blue-50 text-blue-800 border-blue-200",
        "benefit": "ينظم الأجزاء أو العلاقات في مخطط تعليمي.",
        "example": "/diagram أنشئ مخططًا يوضح أجزاء الزهرة ووظيفة كل جزء لطلاب الصف الخامس.",
        "keywords": "diagram مخطط أجزاء الزهرة أحياء علوم"
      },
      {
        "id": 4,
        "cmd": "/flowchart",
        "subject": "الرياضيات",
        "tagColor": "bg-purple-50 text-purple-800 border-purple-200",
        "benefit": "يعرض الخطوات أو القرارات في تسلسل واضح.",
        "example": "/flowchart وضّح خطوات حل مسألة كلامية في الرياضيات من قراءة السؤال حتى التحقق من الإجابة.",
        "keywords": "flowchart خطوات حل مسألة كلامية رياضيات تدفق"
      },
      {
        "id": 5,
        "cmd": "/mindmap",
        "subject": "اللغة العربية",
        "tagColor": "bg-amber-50 text-amber-800 border-amber-200",
        "benefit": "يحول الموضوع إلى خريطة ذهنية متفرعة.",
        "example": "/mindmap أنشئ خريطة ذهنية عن أقسام الكلام: الاسم والفعل والحرف مع أمثلة.",
        "keywords": "mindmap خريطة ذهنية أقسام الكلام اسم فعل حرف لغة عربية"
      },
      {
        "id": 6,
        "cmd": "/handwritten",
        "subject": "Science / لغات",
        "tagColor": "bg-sky-50 text-sky-800 border-sky-200",
        "benefit": "يعرض المحتوى بأسلوب ملاحظات مكتوبة بخط اليد.",
        "example": "/handwritten حوّل ملخص Photosynthesis للصف السادس إلى صفحة ملاحظات مدرسية بخط اليد مع رسومات صغيرة.",
        "keywords": "handwritten بخط اليد Photosynthesis علوم لغات"
      },
      {
        "id": 7,
        "cmd": "/stickynotes",
        "subject": "العلوم والمختبرات",
        "tagColor": "bg-blue-50 text-blue-800 border-blue-200",
        "benefit": "يقسم المعلومات إلى أفكار قصيرة؛ فكرة واحدة في كل ملاحظة.",
        "example": "/stickynotes لخّص قواعد السلامة داخل معمل العلوم في 8 ملاحظات قصيرة.",
        "keywords": "stickynotes ملاحظات معمل العلوم قواعد سلامة مختبر"
      },
      {
        "id": 8,
        "cmd": "/timeline",
        "subject": "الدراسات والتاريخ",
        "tagColor": "bg-orange-50 text-orange-800 border-orange-200",
        "benefit": "يرتب الأحداث أو المراحل زمنيًا.",
        "example": "/timeline أنشئ خطًا زمنيًا مبسطًا لأهم أحداث ثورة 1919 مناسبًا للمرحلة الإعدادية.",
        "keywords": "timeline خط زمني ثورة 1919 تاريخ دراسات"
      },
      {
        "id": 9,
        "cmd": "/thenvsnow",
        "subject": "الدراسات الاجتماعية",
        "tagColor": "bg-orange-50 text-orange-800 border-orange-200",
        "benefit": "يقارن بصريًا بين الماضي والحاضر.",
        "example": "/thenvsnow قارن وسائل الاتصال في الماضي والحاضر لطلاب الدراسات الاجتماعية.",
        "keywords": "thenvsnow مقارنة الماضي والحاضر وسائل الاتصال دراسات"
      },
      {
        "id": 10,
        "cmd": "/beforeafter",
        "subject": "العلوم والبيئة",
        "tagColor": "bg-emerald-50 text-emerald-800 border-emerald-200",
        "benefit": "يوضح الفرق بين حالة قبل التغيير وبعده.",
        "example": "/beforeafter وضّح بصريًا شكل المكان قبل وبعد إعادة التدوير والتنظيف في درس البيئة.",
        "keywords": "beforeafter قبل وبعد تدوير بيئة تنظيف"
      },
      {
        "id": 11,
        "cmd": "/cutaway",
        "subject": "العلوم والجيولوجيا",
        "tagColor": "bg-amber-50 text-amber-800 border-amber-200",
        "benefit": "ينشئ قطاعًا يكشف الأجزاء الداخلية مع بقاء الشكل الخارجي مفهومًا.",
        "example": "/cutaway أنشئ تصورًا تعليميًا لبركان يوضح غرفة الصهارة والمدخنة والفوهة والحمم.",
        "keywords": "cutaway قطاع بركان صهارة فوهة جيولوجيا"
      },
      {
        "id": 12,
        "cmd": "/crosssection",
        "subject": "الأحياء وعلم النبات",
        "tagColor": "bg-emerald-50 text-emerald-800 border-emerald-200",
        "benefit": "يعرض مقطعًا عرضيًا لإظهار التركيب الداخلي.",
        "example": "/crosssection اعرض مقطعًا عرضيًا لساق النبات مع تسمية الخشب واللحاء والطبقات الرئيسية.",
        "keywords": "crosssection مقطع عرضي ساق النبات خشب لحاء نبات"
      },
      {
        "id": 13,
        "cmd": "/xray",
        "subject": "العلوم والأحياء",
        "tagColor": "bg-blue-50 text-blue-800 border-blue-200",
        "benefit": "يعرض الهيكل الداخلي وكأن العنصر شفاف.",
        "example": "/xray أنشئ شرحًا بصريًا مبسطًا لجسم الإنسان يوضح موضع القلب والرئتين والمعدة.",
        "keywords": "xray شفاف قلب رئتين معدة جسم الإنسان أحياء"
      },
      {
        "id": 14,
        "cmd": "/anatomy",
        "subject": "العلوم والأحياء",
        "tagColor": "bg-blue-50 text-blue-800 border-blue-200",
        "benefit": "يشرح جميع أجزاء الشيء ووظائفها.",
        "example": "/anatomy اشرح تركيب القلب مع أسماء الحجرات الأربع ووظيفة كل منها للمرحلة الإعدادية.",
        "keywords": "anatomy تشريح تركيب القلب حجرات أربع وظائف"
      },
      {
        "id": 15,
        "cmd": "/layers",
        "subject": "الجيولوجيا والجغرافيا",
        "tagColor": "bg-amber-50 text-amber-800 border-amber-200",
        "benefit": "يقسم النظام إلى طبقات متتابعة.",
        "example": "/layers أنشئ شرحًا بصريًا لطبقات الأرض: القشرة والوشاح واللب الخارجي واللب الداخلي.",
        "keywords": "layers طبقات الأرض قشرة وشاح لب جيولوجيا"
      },
      {
        "id": 16,
        "cmd": "/explodedview",
        "subject": "الحاسب الآلي والتقنية",
        "tagColor": "bg-violet-50 text-violet-800 border-violet-200",
        "benefit": "يفكك الجسم إلى مكوناته ويعرض كل جزء منفصلًا.",
        "example": "/explodedview وضّح أجزاء الحاسوب المكتبي الأساسية لطلاب الحاسب.",
        "keywords": "explodedview تفكيك مكونات الحاسوب شاشة معالج حاسب آلي"
      },
      {
        "id": 17,
        "cmd": "/blueprint",
        "subject": "التعليم التكاملي STEM",
        "tagColor": "bg-cyan-50 text-cyan-800 border-cyan-200",
        "benefit": "يعرض تصميمًا أو تركيبًا بأسلوب مخطط تقني.",
        "example": "/blueprint أنشئ مخططًا بسيطًا لنموذج بيت موفر للطاقة لمشروع STEM.",
        "keywords": "blueprint مخطط تقني بيت موفر للطاقة STEM مشروع"
      },
      {
        "id": 18,
        "cmd": "/process",
        "subject": "العلوم والأحياء",
        "tagColor": "bg-blue-50 text-blue-800 border-blue-200",
        "benefit": "يحول العملية إلى مراحل مترابطة من البداية إلى النهاية.",
        "example": "/process وضّح عملية البناء الضوئي خطوة بخطوة لطلاب الصف السادس.",
        "keywords": "process مراحل البناء الضوئي شمس ماء جلوكوز أكسجين علوم"
      },
      {
        "id": 19,
        "cmd": "/cycle",
        "subject": "العلوم والحياة",
        "tagColor": "bg-emerald-50 text-emerald-800 border-emerald-200",
        "benefit": "يوضح عملية دورية تعود إلى نقطة البداية.",
        "example": "/cycle أنشئ تصورًا لدورة حياة الفراشة: بيضة، يرقة، عذراء، فراشة بالغة.",
        "keywords": "cycle دورة حياة الفراشة بيضة يرقة عذراء"
      },
      {
        "id": 20,
        "cmd": "/journey",
        "subject": "العلوم والأحياء",
        "tagColor": "bg-blue-50 text-blue-800 border-blue-200",
        "benefit": "يتتبع رحلة عنصر أو شخصية خلال عدة مراحل.",
        "example": "/journey تتبع رحلة الطعام داخل الجهاز الهضمي من الفم حتى الأمعاء الغليظة.",
        "keywords": "journey رحلة الطعام جهاز هضمي فم أمعاء"
      },
      {
        "id": 21,
        "cmd": "/ecosystem",
        "subject": "العلوم والبيئة",
        "tagColor": "bg-emerald-50 text-emerald-800 border-emerald-200",
        "benefit": "يعرض الكائنات والعوامل والعلاقات داخل نظام بيئي.",
        "example": "/ecosystem أنشئ نظامًا بيئيًا للصحراء يوضح الكائنات وعلاقات الغذاء بينها.",
        "keywords": "ecosystem نظام بيئي صحراء نباتات زواحف سلاسل غذاء"
      },
      {
        "id": 22,
        "cmd": "/network",
        "subject": "اللغة العربية والقراءة",
        "tagColor": "bg-amber-50 text-amber-800 border-amber-200",
        "benefit": "يوضح شبكة العلاقات بين عدة عناصر أو شخصيات أو مفاهيم.",
        "example": "/network أنشئ شبكة علاقات بين شخصيات قصة قرأها طلاب اللغة العربية.",
        "keywords": "network شبكة علاقات شخصيات قصة لغة عربية أدب"
      },
      {
        "id": 23,
        "cmd": "/conceptmap",
        "subject": "العلوم والكيمياء",
        "tagColor": "bg-blue-50 text-blue-800 border-blue-200",
        "benefit": "يوضح الروابط بين المفاهيم الرئيسية والفرعية.",
        "example": "/conceptmap أنشئ خريطة مفاهيم عن المادة تربط بين العناصر والمركبات والمخاليط.",
        "keywords": "conceptmap خريطة مفاهيم المادة عناصر مركبات مخاليط علوم"
      },
      {
        "id": 24,
        "cmd": "/comparison",
        "subject": "اللغة العربية",
        "tagColor": "bg-amber-50 text-amber-800 border-amber-200",
        "benefit": "ينظم مقارنة بصرية واضحة بين موضوعين أو أكثر.",
        "example": "/comparison قارن بين اللام الشمسية واللام القمرية من حيث النطق والحروف والأمثلة.",
        "keywords": "comparison مقارنة اللام الشمسية القمرية لغة عربية نحو"
      },
      {
        "id": 25,
        "cmd": "/versus",
        "subject": "Science / اللغات",
        "tagColor": "bg-sky-50 text-sky-800 border-sky-200",
        "benefit": "يقدم مقارنة مباشرة وجهًا لوجه بين مفهومين.",
        "example": "/versus قارن Solid vs Liquid لطلاب الصف الثاني باستخدام خصائص وأمثلة بسيطة.",
        "keywords": "versus مقارنة مباشرة Solid Liquid علوم لغات"
      },
      {
        "id": 26,
        "cmd": "/scale",
        "subject": "العلوم والفلك",
        "tagColor": "bg-blue-50 text-blue-800 border-blue-200",
        "benefit": "يوضح اختلاف الأحجام أو المسافات أو النسب.",
        "example": "/scale قارن أحجام الشمس والأرض والقمر بطريقة مبسطة.",
        "keywords": "scale أحجام شمس أرض قمر فلك علوم نسب"
      },
      {
        "id": 27,
        "cmd": "/microscopic",
        "subject": "الأحياء والمختبرات",
        "tagColor": "bg-emerald-50 text-emerald-800 border-emerald-200",
        "benefit": "يعرض الشيء كما لو كان تحت المجهر.",
        "example": "/microscopic وضّح خلية نباتية مبسطة مع النواة والجدار الخلوي والفجوة والبلاستيدات.",
        "keywords": "microscopic مجهر خلية نباتية نواة جدار بلاستيدات أحياء"
      },
      {
        "id": 28,
        "cmd": "/inside",
        "subject": "الحاسب والبرمجة",
        "tagColor": "bg-violet-50 text-violet-800 border-violet-200",
        "benefit": "يوضح ماذا يحدث داخل جهاز أو نظام أثناء عمله.",
        "example": "/inside اشرح بصريًا ماذا يحدث داخل الحاسوب عندما يضغط الطالب على مفتاح من لوحة المفاتيح.",
        "keywords": "inside داخل الحاسوب لوحة المفاتيح معالجة حاسب آلي"
      },
      {
        "id": 29,
        "cmd": "/birdseye",
        "subject": "KG ورياض الأطفال",
        "tagColor": "bg-pink-50 text-pink-800 border-pink-200",
        "benefit": "يعرض المكان من أعلى لفهم التوزيع والمساحات.",
        "example": "/birdseye صمّم تصورًا من أعلى للمدرسة يوضح الفصول والمكتبة والمعمل والملعب.",
        "keywords": "birdseye من أعلى مدرسة فصول ملعب KG رياض أطفال"
      },
      {
        "id": 30,
        "cmd": "/isometric",
        "subject": "اللغة الإنجليزية (English)",
        "tagColor": "bg-sky-50 text-sky-800 border-sky-200",
        "benefit": "يحول المكان أو النظام إلى منظور ثلاثي الأبعاد مبسط.",
        "example": "/isometric أنشئ مدينة تعليمية صغيرة لتعليم مفردات Places in Town.",
        "keywords": "isometric ثلاثي الأبعاد مدينة تعليمية إنجليزي أماكن school hospital"
      },
      {
        "id": 31,
        "cmd": "/map",
        "subject": "الجغرافيا والدراسات",
        "tagColor": "bg-orange-50 text-orange-800 border-orange-200",
        "benefit": "ينشئ تصورًا جغرافيًا أو مكانيًا مع مواقع وتسميات.",
        "example": "/map أنشئ خريطة تعليمية لمصر توضح نهر النيل والبحرين وسيناء والصحراء الغربية.",
        "keywords": "map خريطة مصر نهر النيل بحر متوسط أحمر سيناء جغرافيا"
      },
      {
        "id": 32,
        "cmd": "/roadmap",
        "subject": "اللغة الإنجليزية وتطوير المهارات",
        "tagColor": "bg-sky-50 text-sky-800 border-sky-200",
        "benefit": "يحول الهدف إلى مسار بصري ومراحل متتابعة.",
        "example": "/roadmap أنشئ مسارًا من 8 أسابيع لتطوير مهارة القراءة الإنجليزية لطالب مبتدئ.",
        "keywords": "roadmap خارطة طريق قراءة إنجليزي مسار 8 أسابيع"
      },
      {
        "id": 33,
        "cmd": "/evolution",
        "subject": "التاريخ والدراسات",
        "tagColor": "bg-orange-50 text-orange-800 border-orange-200",
        "benefit": "يوضح تطور شيء عبر الزمن.",
        "example": "/evolution وضّح تطور وسائل الكتابة من النقش على الحجر إلى الورق ثم الأجهزة الرقمية.",
        "keywords": "evolution تطور وسائل الكتابة نقش حجر ورق حاسوب تاريخ"
      },
      {
        "id": 34,
        "cmd": "/storyboard",
        "subject": "الإنتاج المرئي والتعليم التفاعلي",
        "tagColor": "bg-pink-50 text-pink-800 border-pink-200",
        "benefit": "يقسم الفكرة أو القصة إلى مشاهد متتابعة.",
        "example": "/storyboard حوّل درس دورة الماء إلى 6 مشاهد كرتونية، مدة كل مشهد 8 ثوانٍ.",
        "keywords": "storyboard سيناريو دورة الماء 6 مشاهد كرتونية فيديو علوم"
      },
      {
        "id": 35,
        "cmd": "/comic",
        "subject": "اللغة العربية",
        "tagColor": "bg-amber-50 text-amber-800 border-amber-200",
        "benefit": "يحول المفهوم إلى قصة مصورة أو حوار كرتوني.",
        "example": "/comic حوّل قاعدة جمع المذكر السالم إلى حوار قصير مع أمثلة صحيحة.",
        "keywords": "comic قصة مصورة جمع المذكر السالم كرتون لغة عربية"
      },
      {
        "id": 36,
        "cmd": "/poster",
        "subject": "إدارة الصف واللغات",
        "tagColor": "bg-teal-50 text-teal-800 border-teal-200",
        "benefit": "يحول المعلومات إلى بوستر تعليمي مختصر وجذاب.",
        "example": "/poster صمّم محتوى بوستر بعنوان Respect Our Classroom يتضمن 5 قواعد سلوكية إيجابية.",
        "keywords": "poster بوستر فصل Respect Our Classroom سلوك إنجليزي"
      },
      {
        "id": 37,
        "cmd": "/presentation",
        "subject": "العلوم والبيئة",
        "tagColor": "bg-blue-50 text-blue-800 border-blue-200",
        "benefit": "يقسم الموضوع إلى محتوى بصري يصلح للعرض التقديمي.",
        "example": "/presentation حوّل درس الطاقة المتجددة للصف السابع إلى عرض من 8 شرائح.",
        "keywords": "presentation عرض تقديمي شرائح طاقة متجددة علوم"
      },
      {
        "id": 38,
        "cmd": "/visualnotes",
        "subject": "القرآن الكريم والتجويد",
        "tagColor": "bg-emerald-50 text-emerald-800 border-emerald-200",
        "benefit": "يحول الشرح إلى ملاحظات بصرية تجمع الكلمات والرموز والأسهم.",
        "example": "/visualnotes لخّص أحكام الميم الساكنة في صفحة مراجعة بصرية مع أمثلة.",
        "keywords": "visualnotes ملاحظات بصرية أحكام الميم الساكنة تجويد قرآن إخفاء إدغام إظهار"
      },
      {
        "id": 39,
        "cmd": "/labelleddiagram",
        "subject": "العلوم والأحياء",
        "tagColor": "bg-blue-50 text-blue-800 border-blue-200",
        "benefit": "ينشئ رسمة تعليمية مع تسمية واضحة لكل جزء.",
        "example": "/labelleddiagram أنشئ رسمة مبسطة للجهاز التنفسي مع التسميات الأساسية.",
        "keywords": "labelleddiagram رسمة تسمية جهاز تنفسي أنف قصبة رئتين حجاب حاجز علوم"
      },
      {
        "id": 40,
        "cmd": "/sequence",
        "subject": "التربية الإسلامية والفقه",
        "tagColor": "bg-emerald-50 text-emerald-800 border-emerald-200",
        "benefit": "يرتب مجموعة خطوات أو أحداث حسب ترتيبها الصحيح.",
        "example": "/sequence أنشئ نشاطًا بصريًا لترتيب خطوات الوضوء بالترتيب الصحيح.",
        "keywords": "sequence ترتيب خطوات الوضوء ترتيب صحيح تربية إسلامية"
      }
    ]
  },
  {
    "id": "ch2",
    "num": "Chapter 2 • الفصل الثاني",
    "title": "القسم الثاني: Explanation & Teaching Commands",
    "subtitle": "أوامر الشرح والتدريس وتبسيط المفاهيم (41–100)",
    "range": "41–100",
    "themeGradient": "from-teal-900 via-teal-800 to-indigo-900",
    "icon": "💡",
    "commands": [
      {
        "id": 41,
        "cmd": "/eli5",
        "subject": "العلوم والفيزياء",
        "tagColor": "bg-blue-50 text-blue-800 border-blue-200",
        "benefit": "يشرح المفهوم بأبسط لغة ممكنة كما لو كان المتعلم صغيرًا جدًا.",
        "example": "/eli5 اشرح مفهوم الجاذبية لطفل عمره 5 سنوات باستخدام أمثلة من حياته اليومية.",
        "keywords": "eli5 جاذبية طفل 5 سنوات تبسيط علوم"
      },
      {
        "id": 42,
        "cmd": "/simplify",
        "subject": "الرياضيات والهندسة",
        "tagColor": "bg-purple-50 text-purple-800 border-purple-200",
        "benefit": "يبسط الشرح والمصطلحات الصعبة دون حذف الفكرة الأساسية.",
        "example": "/simplify بسّط نظرية فيثاغورس لطلاب الصف السابع باستخدام لغة سهلة ومثال واحد.",
        "keywords": "simplify فيثاغورس هندسة رياضيات سابع"
      },
      {
        "id": 43,
        "cmd": "/explain",
        "subject": "اللغة العربية والنحو",
        "tagColor": "bg-amber-50 text-amber-800 border-amber-200",
        "benefit": "يقدم شرحًا مباشرًا ومنظمًا للموضوع.",
        "example": "/explain اشرح الفرق بين الفعل الماضي والمضارع والأمر لطلاب الصف الرابع مع أمثلة.",
        "keywords": "explain فعل ماض مضارع أمر نحو لغة عربية رابع"
      },
      {
        "id": 44,
        "cmd": "/stepbystep",
        "subject": "الرياضيات والحساب",
        "tagColor": "bg-purple-50 text-purple-800 border-purple-200",
        "benefit": "يشرح الحل أو المهارة خطوة بخطوة.",
        "example": "/stepbystep اشرح طريقة جمع كسرين مختلفي المقام للصف الخامس مع مثال كامل.",
        "keywords": "stepbystep جمع كسرين مختلفي المقام رياضيات خامس"
      },
      {
        "id": 45,
        "cmd": "/example",
        "subject": "اللغة العربية والبلاغة",
        "tagColor": "bg-amber-50 text-amber-800 border-amber-200",
        "benefit": "يقدم مثالًا عمليًا يوضح الفكرة.",
        "example": "/example أعطني مثالًا بسيطًا على التشبيه في اللغة العربية واشرح عناصره.",
        "keywords": "example تشبيه بلاغة لغة عربية عناصر التشبيه"
      },
      {
        "id": 46,
        "cmd": "/examples",
        "subject": "English Grammar",
        "tagColor": "bg-sky-50 text-sky-800 border-sky-200",
        "benefit": "يقدم عدة أمثلة متنوعة للمفهوم نفسه.",
        "example": "/examples أعطني 6 أمثلة على Present Continuous تتنوع بين الإثبات والنفي والسؤال.",
        "keywords": "examples present continuous إنجليزي قواعد grammar"
      },
      {
        "id": 47,
        "cmd": "/workedexample",
        "subject": "الرياضيات والهندسة",
        "tagColor": "bg-purple-50 text-purple-800 border-purple-200",
        "benefit": "يعرض مثالًا محلولًا بالكامل مع توضيح الخطوات.",
        "example": "/workedexample حل مسألة عن مساحة المثلث للصف السادس ووضّح كل خطوة.",
        "keywords": "workedexample مساحة المثلث رياضيات سادس تفكير خطوات"
      },
      {
        "id": 48,
        "cmd": "/why",
        "subject": "العلوم والفلك",
        "tagColor": "bg-blue-50 text-blue-800 border-blue-200",
        "benefit": "يشرح لماذا تحدث الظاهرة أو لماذا نستخدم قاعدة معينة.",
        "example": "/why لماذا يحدث تعاقب الليل والنهار؟ اشرح للصف الرابع بطريقة علمية مبسطة.",
        "keywords": "why تعاقب الليل والنهار علوم رابع دوران الأرض ظواهر"
      },
      {
        "id": 49,
        "cmd": "/howto",
        "subject": "الحاسب والتقنية",
        "tagColor": "bg-violet-50 text-violet-800 border-violet-200",
        "benefit": "يشرح كيفية تنفيذ مهمة عملية.",
        "example": "/howto اشرح للطلاب كيفية إنشاء عرض تقديمي بسيط في PowerPoint من 5 شرائح.",
        "keywords": "howto باوربوينت powerpoint عرض تقديمي حاسب آلي تكنولوجيا"
      },
      {
        "id": 50,
        "cmd": "/analogy",
        "subject": "العلوم والأحياء",
        "tagColor": "bg-blue-50 text-blue-800 border-blue-200",
        "benefit": "يشرح المفهوم عن طريق تشبيه مألوف للطالب.",
        "example": "/analogy اشرح عمل القلب بتشبيهه بمضخة ماء مع توضيح حدود التشبيه.",
        "keywords": "analogy تشبيه القلب مضخة ماء علوم أحياء"
      },
      {
        "id": 51,
        "cmd": "/metaphor",
        "subject": "الحاسب والبرمجة",
        "tagColor": "bg-violet-50 text-violet-800 border-violet-200",
        "benefit": "يستخدم استعارة أو صورة ذهنية تساعد على الفهم.",
        "example": "/metaphor اشرح مفهوم الإنترنت لطلاب المرحلة الابتدائية باستخدام صورة ذهنية بسيطة.",
        "keywords": "metaphor استعارة الإنترنت شبكة صورة ذهنية حاسب"
      },
      {
        "id": 52,
        "cmd": "/deepdive",
        "subject": "التاريخ والدراسات",
        "tagColor": "bg-orange-50 text-orange-800 border-orange-200",
        "benefit": "يقدم شرحًا تفصيليًا ومتعمقًا.",
        "example": "/deepdive اشرح أسباب ونتائج الثورة الصناعية لطلاب الثانوية مع تقسيم الشرح إلى محاور.",
        "keywords": "deepdive تعمق الثورة الصناعية تاريخ ثانوي محاور أسباب نتائج"
      },
      {
        "id": 53,
        "cmd": "/expert",
        "subject": "التطوير المهني والتربوي",
        "tagColor": "bg-teal-50 text-teal-800 border-teal-200",
        "benefit": "يقدم الإجابة بمستوى خبير في المجال.",
        "example": "/expert تصرف كخبير تربوي وحلل أفضل طريقة لتدريس القراءة الجهرية للصف الثالث.",
        "keywords": "expert خبير تربوي قراءة جهرية صف ثالث تطوير مهني تدريس"
      },
      {
        "id": 54,
        "cmd": "/beginner",
        "subject": "البرمجة والتقنية",
        "tagColor": "bg-violet-50 text-violet-800 border-violet-200",
        "benefit": "يقدم الشرح للمبتدئ الذي لا يمتلك معرفة سابقة.",
        "example": "/beginner اشرح أساسيات البرمجة بلغة Scratch لطالب يجربها لأول مرة.",
        "keywords": "beginner سكراتش scratch برمجة مبتدئ حاسب"
      },
      {
        "id": 55,
        "cmd": "/intermediate",
        "subject": "الأحياء والعلوم",
        "tagColor": "bg-emerald-50 text-emerald-800 border-emerald-200",
        "benefit": "يقدم شرحًا بمستوى متوسط.",
        "example": "/intermediate اشرح التنفس الخلوي لطالب لديه معرفة سابقة بالخلية.",
        "keywords": "intermediate تنفس خلوي أحياء علوم متوسط ميتوكوندريا"
      },
      {
        "id": 56,
        "cmd": "/advanced",
        "subject": "الفيزياء ورعاية الموهوبين",
        "tagColor": "bg-blue-50 text-blue-800 border-blue-200",
        "benefit": "يقدم شرحًا أكثر عمقًا للطلاب المتقدمين.",
        "example": "/advanced اشرح قانون نيوتن الثاني للطلاب المتفوقين مع مسائل استنتاجية.",
        "keywords": "advanced نيوتن فيزياء متفوقين استنتاج مسائل"
      },
      {
        "id": 57,
        "cmd": "/feynman",
        "subject": "الفيزياء والعلوم",
        "tagColor": "bg-blue-50 text-blue-800 border-blue-200",
        "benefit": "يشرح الفكرة بلغة شديدة الوضوح ويكشف نقاط الغموض.",
        "example": "/feynman علّمني مفهوم الكثافة بحيث أستطيع شرحه لطالب في الصف الخامس.",
        "keywords": "feynman فاينمان كثافة تدريس علوم خامس"
      },
      {
        "id": 58,
        "cmd": "/socratic",
        "subject": "الرياضيات والتفكير",
        "tagColor": "bg-purple-50 text-purple-800 border-purple-200",
        "benefit": "يعلم الطالب عن طريق سلسلة أسئلة تقوده لاكتشاف الإجابة.",
        "example": "/socratic ساعد طالبًا في الصف السادس على اكتشاف قاعدة مساحة المستطيل دون إخباره بالقانون مباشرة.",
        "keywords": "socratic سقراط مساحة المستطيل اكتشاف تفكير رياضيات سادس"
      },
      {
        "id": 59,
        "cmd": "/teachme",
        "subject": "اللغة العربية والنحو",
        "tagColor": "bg-amber-50 text-amber-800 border-amber-200",
        "benefit": "يحول الموضوع إلى درس تدريجي تفاعلي.",
        "example": "/teachme علّمني أساسيات الإعراب تدريجيًا، واسألني سؤال تحقق قبل الانتقال.",
        "keywords": "teachme إعراب نحو لغة عربية تفاعلي تدريجي"
      },
      {
        "id": 60,
        "cmd": "/tutor",
        "subject": "English Reading",
        "tagColor": "bg-sky-50 text-sky-800 border-sky-200",
        "benefit": "يتصرف كمدرس خصوصي يتابع إجابات الطالب ويكيف الشرح معها.",
        "example": "/tutor ساعد طالبًا في Grade 5 على تحسين Reading Comprehension بسؤال واحد في كل مرة.",
        "keywords": "tutor مدرس خصوصي reading comprehension قراءة إنجليزي"
      },
      {
        "id": 61,
        "cmd": "/teacher",
        "subject": "العلوم والمرحلة الابتدائية",
        "tagColor": "bg-blue-50 text-blue-800 border-blue-200",
        "benefit": "يتعامل مع المهمة من منظور معلم متخصص.",
        "example": "/teacher تصرف كمعلم علوم واشرح حالات المادة باستخدام تجارب صفية بسيطة.",
        "keywords": "teacher معلم علوم حالات المادة تجارب صفية ابتدائي"
      },
      {
        "id": 62,
        "cmd": "/professor",
        "subject": "التربية وطرق التدريس",
        "tagColor": "bg-indigo-50 text-indigo-800 border-indigo-200",
        "benefit": "يقدم شرحًا أكاديميًا أكثر رسمية وعمقًا.",
        "example": "/professor اشرح التعلم البنائي لطالبات كلية التربية مع مثال تطبيقي.",
        "keywords": "professor أستاذ جامعي تعلم بنائي تربية طرق تدريس"
      },
      {
        "id": 63,
        "cmd": "/ageadapt",
        "subject": "التربية والقيم",
        "tagColor": "bg-pink-50 text-pink-800 border-pink-200",
        "benefit": "يعيد صياغة المحتوى بما يناسب عمرًا محددًا.",
        "example": "/ageadapt عمر 8 سنوات: اشرح معنى المسؤولية باستخدام مواقف من المدرسة والمنزل.",
        "keywords": "ageadapt تكييف عمري مسؤولية 8 سنوات قيم سلوك"
      },
      {
        "id": 64,
        "cmd": "/gradelevel",
        "subject": "الدراسات والعلوم",
        "tagColor": "bg-orange-50 text-orange-800 border-orange-200",
        "benefit": "يضبط الشرح والمفردات والأنشطة حسب الصف الدراسي.",
        "example": "/gradelevel Grade 6: اشرح مفهوم المناخ والطقس مع مقارنة بسيطة بينهما.",
        "keywords": "gradelevel مناخ طقس سادس دراسات علوم صف دراسي"
      },
      {
        "id": 65,
        "cmd": "/prerequisites",
        "subject": "الرياضيات والتخطيط",
        "tagColor": "bg-purple-50 text-purple-800 border-purple-200",
        "benefit": "يحدد المعرفة السابقة التي يحتاجها الطالب قبل الدرس.",
        "example": "/prerequisites ما المهارات التي يجب أن يتقنها الطالب قبل تعلم القسمة المطولة؟",
        "keywords": "prerequisites معرفة سابقة قسمة مطولة رياضيات مهارات قبلية"
      },
      {
        "id": 66,
        "cmd": "/priorcheck",
        "subject": "العلوم والتقويم",
        "tagColor": "bg-blue-50 text-blue-800 border-blue-200",
        "benefit": "ينشئ أسئلة قصيرة للكشف عن المعرفة السابقة.",
        "example": "/priorcheck أنشئ 5 أسئلة قبل درس الجهاز الهضمي لمعرفة معلومات الطلاب السابقة.",
        "keywords": "priorcheck كشف قبلي جهاز هضمي علوم تشخيص"
      },
      {
        "id": 67,
        "cmd": "/misconceptions",
        "subject": "الرياضيات والعلوم",
        "tagColor": "bg-purple-50 text-purple-800 border-purple-200",
        "benefit": "يحدد المفاهيم الخاطئة الشائعة حول الموضوع.",
        "example": "/misconceptions ما الأخطاء الشائعة عند تعلم الكسور العشرية؟ وكيف أصححها؟",
        "keywords": "misconceptions مفاهيم خاطئة كسور عشرية أخطاء شائعة رياضيات"
      },
      {
        "id": 68,
        "cmd": "/commonmistakes",
        "subject": "English Language",
        "tagColor": "bg-sky-50 text-sky-800 border-sky-200",
        "benefit": "يركز على الأخطاء التطبيقية المتكررة وكيفية تجنبها.",
        "example": "/commonmistakes اذكر أخطاء استخدام there is و there are مع أمثلة مصححة.",
        "keywords": "commonmistakes there is there are قواعد أخطاء متكررة إنجليزي"
      },
      {
        "id": 69,
        "cmd": "/realworld",
        "subject": "الرياضيات والحياة اليومية",
        "tagColor": "bg-purple-50 text-purple-800 border-purple-200",
        "benefit": "يربط المفهوم بمواقف من الحياة اليومية.",
        "example": "/realworld أعطني 5 تطبيقات حياتية للنسب المئوية مناسبة للصف السادس.",
        "keywords": "realworld تطبيقات حياتية نسب مئوية سادس واقع معيش رياضيات"
      },
      {
        "id": 70,
        "cmd": "/connect",
        "subject": "العلوم والبيئة",
        "tagColor": "bg-emerald-50 text-emerald-800 border-emerald-200",
        "benefit": "يربط المفهوم الجديد بما تعلمه الطالب سابقًا.",
        "example": "/connect اربط درس السلاسل الغذائية بمفهوم المنتج والمستهلك الذي درسه الطلاب سابقًا.",
        "keywords": "connect سلاسل غذائية منتج مستهلك علوم ربط خبرات"
      },
      {
        "id": 71,
        "cmd": "/crosscurricular",
        "subject": "STEM والتكامل",
        "tagColor": "bg-cyan-50 text-cyan-800 border-cyan-200",
        "benefit": "يربط موضوعًا واحدًا بأكثر من مادة دراسية.",
        "example": "/crosscurricular صمّم روابط بين درس الماء والرياضيات واللغة العربية والفن للصف الثالث.",
        "keywords": "crosscurricular تكامل بين المواد الماء رياضيات عربي فن صف ثالث"
      },
      {
        "id": 72,
        "cmd": "/context",
        "subject": "التاريخ والدراسات",
        "tagColor": "bg-orange-50 text-orange-800 border-orange-200",
        "benefit": "يضع المفهوم داخل سياق واضح قبل شرحه.",
        "example": "/context قبل شرح الثورة الفرنسية، أعط الطلاب خلفية قصيرة عن المجتمع الفرنسي آنذاك.",
        "keywords": "context سياق تاريخي ثورة فرنسية مجتمع فرنسي خلفية تاريخ"
      },
      {
        "id": 73,
        "cmd": "/definition",
        "subject": "العلوم والفيزياء",
        "tagColor": "bg-blue-50 text-blue-800 border-blue-200",
        "benefit": "يقدم تعريفًا واضحًا ودقيقًا ثم مثالًا.",
        "example": "/definition عرّف التبخر للصف الرابع في جملة بسيطة ثم أعط مثالين حياتيين.",
        "keywords": "definition تعريف التبخر علوم رابع جملة بسيطة أمثلة"
      },
      {
        "id": 74,
        "cmd": "/vocabulary",
        "subject": "English Vocabulary",
        "tagColor": "bg-sky-50 text-sky-800 border-sky-200",
        "benefit": "يستخرج أو يعلّم المفردات الأساسية للدرس.",
        "example": "/vocabulary استخرج 12 كلمة أساسية من درس Weather مع المعنى وجملة لكل كلمة.",
        "keywords": "vocabulary مفردات weather طقس إنجليزي كلمات معاني"
      },
      {
        "id": 75,
        "cmd": "/keywords",
        "subject": "الدراسات والتاريخ",
        "tagColor": "bg-orange-50 text-orange-800 border-orange-200",
        "benefit": "يحدد أهم الكلمات والمصطلحات التي يجب أن يعرفها الطالب.",
        "example": "/keywords حدد الكلمات الأساسية في درس الحضارة المصرية القديمة مع تعريف مختصر لكل مصطلح.",
        "keywords": "keywords مصطلحات رئيسية حضارة مصرية قديمة فراعنة دراسات"
      },
      {
        "id": 76,
        "cmd": "/memorytrick",
        "subject": "العلوم والفلك",
        "tagColor": "bg-blue-50 text-blue-800 border-blue-200",
        "benefit": "يصنع طريقة سهلة لتذكر قاعدة أو مجموعة معلومات.",
        "example": "/memorytrick ابتكر طريقة سهلة تساعد الطلاب على تذكر ترتيب الكواكب.",
        "keywords": "memorytrick حيلة ذاكرة ترتيب الكواكب فلك علوم تذكر"
      },
      {
        "id": 77,
        "cmd": "/mnemonic",
        "subject": "English & Geography",
        "tagColor": "bg-sky-50 text-sky-800 border-sky-200",
        "benefit": "ينشئ عبارة أو اختصارًا يساعد على الحفظ.",
        "example": "/mnemonic أنشئ وسيلة تذكّرية لحفظ اتجاهات البوصلة الأربعة باللغة الإنجليزية.",
        "keywords": "mnemonic وسيلة تذكيرية بوصلة اتجاهات أربعة إنجليزي"
      },
      {
        "id": 78,
        "cmd": "/chunk",
        "subject": "القرآن والتجويد",
        "tagColor": "bg-emerald-50 text-emerald-800 border-emerald-200",
        "benefit": "يقسم المحتوى الكبير إلى أجزاء صغيرة يسهل تعلمها.",
        "example": "/chunk قسّم أحكام النون الساكنة والتنوين إلى 4 أجزاء قصيرة.",
        "keywords": "chunk تقسيم تجويد نون ساكنة تنوين"
      },
      {
        "id": 79,
        "cmd": "/microlearning",
        "subject": "الجيولوجيا والعلوم",
        "tagColor": "bg-amber-50 text-amber-800 border-amber-200",
        "benefit": "يحول الموضوع إلى وحدات تعلم قصيرة جدًا.",
        "example": "/microlearning قسّم درس دورة الصخور إلى 5 وحدات، كل وحدة 3 دقائق.",
        "keywords": "microlearning تعلم مصغر دورة الصخور جيولوجيا"
      },
      {
        "id": 80,
        "cmd": "/keypoints",
        "subject": "الأحياء والعلوم",
        "tagColor": "bg-blue-50 text-blue-800 border-blue-200",
        "benefit": "يستخرج النقاط التي لا بد أن يتذكرها الطالب.",
        "example": "/keypoints استخرج أهم 7 نقاط يجب أن يعرفها الطالب بعد درس الجهاز الدوري.",
        "keywords": "keypoints نقاط رئيسية جهاز دوري علوم"
      },
      {
        "id": 81,
        "cmd": "/recap",
        "subject": "اللغة العربية والنحو",
        "tagColor": "bg-amber-50 text-amber-800 border-amber-200",
        "benefit": "يقدم مراجعة سريعة لما سبق تعلمه.",
        "example": "/recap راجع درس الفاعل في 5 نقاط قبل البدء في المفعول به.",
        "keywords": "recap مراجعة سريعة فاعل مفعول به نحو"
      },
      {
        "id": 82,
        "cmd": "/review",
        "subject": "Math Fractions",
        "tagColor": "bg-purple-50 text-purple-800 border-purple-200",
        "benefit": "ينشئ مراجعة منظمة للموضوع.",
        "example": "/review أنشئ مراجعة شاملة لوحدة Fractions تتضمن القواعد والأمثلة والأسئلة القصيرة.",
        "keywords": "review مراجعة شاملة كسور رياضيات"
      },
      {
        "id": 83,
        "cmd": "/conceptcheck",
        "subject": "الفيزياء والعلوم",
        "tagColor": "bg-blue-50 text-blue-800 border-blue-200",
        "benefit": "ينشئ أسئلة سريعة للتأكد من فهم المفهوم أثناء الشرح.",
        "example": "/conceptcheck أعطني 5 أسئلة أثناء درس التوصيل الكهربائي تكشف فهم الطلاب.",
        "keywords": "conceptcheck تحقق فهم توصيل كهربائي علوم"
      },
      {
        "id": 84,
        "cmd": "/checkunderstanding",
        "subject": "الدراسات والجغرافيا",
        "tagColor": "bg-orange-50 text-orange-800 border-orange-200",
        "benefit": "يختبر الفهم دون الاعتماد فقط على الحفظ.",
        "example": "/checkunderstanding أنشئ 4 أسئلة تكشف فهم الفرق بين الطقس والمناخ.",
        "keywords": "checkunderstanding اختبار فهم طقس مناخ"
      },
      {
        "id": 85,
        "cmd": "/teachback",
        "subject": "Science / الأحياء",
        "tagColor": "bg-emerald-50 text-emerald-800 border-emerald-200",
        "benefit": "يطلب من الطالب إعادة شرح المفهوم بطريقته.",
        "example": "/teachback بعد شرح Photosynthesis أعطني تعليمات تجعل الطالب يشرح العملية بكلماته.",
        "keywords": "teachback إعادة شرح بناء ضوئي بكلمات الطالب"
      },
      {
        "id": 86,
        "cmd": "/thinkaloud",
        "subject": "مهارات القراءة",
        "tagColor": "bg-teal-50 text-teal-800 border-teal-200",
        "benefit": "يعرض نموذجًا لطريقة التفكير أثناء تنفيذ المهمة.",
        "example": "/thinkaloud أظهر كيف يفكر قارئ ماهر عند استنتاج الفكرة الرئيسية من فقرة.",
        "keywords": "thinkaloud التفكير بصوت عال قراءة استنتاج"
      },
      {
        "id": 87,
        "cmd": "/guidedpractice",
        "subject": "الرياضيات والهندسة",
        "tagColor": "bg-purple-50 text-purple-800 border-purple-200",
        "benefit": "يصمم تدريبًا موجهًا ينجزه الطالب بمساعدة المعلمة.",
        "example": "/guidedpractice أنشئ 4 مسائل تدريجية عن المحيط تقل فيها المساعدة تدريجيًا.",
        "keywords": "guidedpractice تدريب موجه محيط هندسة"
      },
      {
        "id": 88,
        "cmd": "/independentpractice",
        "subject": "اللغة العربية",
        "tagColor": "bg-amber-50 text-amber-800 border-amber-200",
        "benefit": "ينشئ تدريبًا مستقلًا بعد انتهاء الشرح.",
        "example": "/independentpractice أنشئ 6 جمل يحدد فيها الطالب الاسم والفعل والحرف دون مساعدة.",
        "keywords": "independentpractice تدريب مستقل أقسام الكلام"
      },
      {
        "id": 89,
        "cmd": "/questioning",
        "subject": "العلوم والطاقة",
        "tagColor": "bg-blue-50 text-blue-800 border-blue-200",
        "benefit": "يولد أسئلة تعليمية متدرجة أثناء الشرح.",
        "example": "/questioning أنشئ سلسلة أسئلة تبدأ بالتذكر وتنتهي بالتحليل لدرس مصادر الطاقة.",
        "keywords": "questioning توليد أسئلة مصادر الطاقة تدرج"
      },
      {
        "id": 90,
        "cmd": "/promptstudent",
        "subject": "الرياضيات والمسائل",
        "tagColor": "bg-purple-50 text-purple-800 border-purple-200",
        "benefit": "يعطي تلميحات تدفع الطالب للتفكير دون إعطاء الحل.",
        "example": "/promptstudent أعطني تلميحات متدرجة لطالب لا يعرف كيف يبدأ مسألة مساحة مركبة.",
        "keywords": "promptstudent تلميحات مسألة مساحة تفكير"
      },
      {
        "id": 91,
        "cmd": "/elaborate",
        "subject": "التربية الوطنية والاجتماعية",
        "tagColor": "bg-orange-50 text-orange-800 border-orange-200",
        "benefit": "يضيف تفاصيل وتفسيرات لبناء فهم أعمق.",
        "example": "/elaborate وسّع شرح مفهوم المواطنة للصف السادس باستخدام أمثلة مدرسية ومجتمعية.",
        "keywords": "elaborate توسع مواطنة دراسات أمثلة"
      },
      {
        "id": 92,
        "cmd": "/causeeffect",
        "subject": "الجغرافيا والدراسات",
        "tagColor": "bg-orange-50 text-orange-800 border-orange-200",
        "benefit": "يشرح علاقات السبب والنتيجة.",
        "example": "/causeeffect وضّح أسباب التصحر ونتائجه في جدول مناسب لطلاب الجغرافيا.",
        "keywords": "causeeffect سبب ونتيجة تصحر جغرافيا"
      },
      {
        "id": 93,
        "cmd": "/problem-solution",
        "subject": "العلوم والبيئة",
        "tagColor": "bg-emerald-50 text-emerald-800 border-emerald-200",
        "benefit": "يعرض مشكلة ثم يحلل حلولًا ممكنة لها.",
        "example": "/problem-solution ناقش مشكلة تلوث البلاستيك واقترح حلولًا يستطيع طلاب المدرسة تنفيذها.",
        "keywords": "problem-solution مشكلة وحل تلوث بلاستيك بيئة"
      },
      {
        "id": 94,
        "cmd": "/whatif",
        "subject": "العلوم والبيئة",
        "tagColor": "bg-emerald-50 text-emerald-800 border-emerald-200",
        "benefit": "يستخدم سيناريو ماذا لو لتنمية التفكير والفهم.",
        "example": "/whatif ماذا سيحدث للنظام البيئي إذا اختفى النحل؟ صغ النشاط للصف الخامس.",
        "keywords": "whatif ماذا لو سيناريو نحل بيئة"
      },
      {
        "id": 95,
        "cmd": "/predict",
        "subject": "تجارب العلوم",
        "tagColor": "bg-blue-50 text-blue-800 border-blue-200",
        "benefit": "يطلب توقع النتائج اعتمادًا على المعرفة السابقة.",
        "example": "/predict قبل تجربة ذوبان المواد أنشئ أسئلة تجعل الطلاب يتوقعون النتائج ويبررونها.",
        "keywords": "predict توقع نتائج تجربة ذوبان علوم"
      },
      {
        "id": 96,
        "cmd": "/discover",
        "subject": "الرياضيات والاستكشاف",
        "tagColor": "bg-purple-50 text-purple-800 border-purple-200",
        "benefit": "يصمم تعلمًا استكشافيًا يقود الطالب لاكتشاف القاعدة.",
        "example": "/discover صمّم نشاطًا يجعل طلاب الصف الثالث يكتشفون قاعدة الضرب في 10.",
        "keywords": "discover استكشاف قاعدة الضرب في 10"
      },
      {
        "id": 97,
        "cmd": "/inquiry",
        "subject": "العلوم والاستقصاء",
        "tagColor": "bg-blue-50 text-blue-800 border-blue-200",
        "benefit": "يبني التعلم حول سؤال استقصائي.",
        "example": "/inquiry صمّم استقصاءً علميًا حول السؤال: هل تحتاج جميع البذور إلى الضوء كي تنبت؟",
        "keywords": "inquiry استقصاء بذور إنبات علوم"
      },
      {
        "id": 98,
        "cmd": "/demonstrate",
        "subject": "الفيزياء والتجارب",
        "tagColor": "bg-blue-50 text-blue-800 border-blue-200",
        "benefit": "يشرح كيف تعرض المعلمة مفهومًا عمليًا أمام الطلاب.",
        "example": "/demonstrate اقترح طريقة آمنة لعرض ضغط الهواء أمام الصف باستخدام أدوات بسيطة.",
        "keywords": "demonstrate عرض عملي ضغط الهواء تجربة صفية"
      },
      {
        "id": 99,
        "cmd": "/model",
        "subject": "التعبير والكتابة",
        "tagColor": "bg-amber-50 text-amber-800 border-amber-200",
        "benefit": "يقدم نموذجًا لما يجب أن يبدو عليه الأداء الجيد.",
        "example": "/model اكتب نموذج فقرة وصفية ممتازة للصف الخامس ثم وضّح لماذا تعد نموذجًا جيدًا.",
        "keywords": "model نمذجة فقرة وصفية كتابة جيدة"
      },
      {
        "id": 100,
        "cmd": "/nonexample",
        "subject": "اللغة العربية والنحو",
        "tagColor": "bg-amber-50 text-amber-800 border-amber-200",
        "benefit": "يقدم أمثلة غير صحيحة أو غير منتمية للمفهوم لتوضيح الحدود.",
        "example": "/nonexample أعطني أمثلة وأمثلة غير صحيحة على الجملة الاسمية ليكتشف الطلاب الفرق.",
        "keywords": "nonexample أمثلة غير منتمية جملة اسمية نحو"
      }
    ]
  },
  {
    "id": "ch3",
    "num": "Chapter 3 • الفصل الثالث",
    "title": "القسم الثالث: Lesson Planning & Design",
    "subtitle": "أوامر تخطيط الحصة والتصميم التعليمي (101–180)",
    "range": "101–180",
    "themeGradient": "from-blue-900 via-indigo-900 to-slate-900",
    "icon": "📋",
    "commands": [
      {
        "id": 101,
        "cmd": "/lesson",
        "subject": "الرياضيات والكسور",
        "tagColor": "bg-purple-50 text-purple-800 border-purple-200",
        "benefit": "يصمم حصة كاملة تشمل التمهيد والشرح والنشاط والتقويم.",
        "example": "/lesson صمّم حصة 45 دقيقة للصف الرابع عن الكسور المتكافئة تتضمن تمهيدًا ونشاطًا وتقويمًا.",
        "keywords": "lesson تخطيط درس تحضير حصة كاملة كسور"
      },
      {
        "id": 102,
        "cmd": "/full-lesson",
        "subject": "العلوم وحالات المادة",
        "tagColor": "bg-blue-50 text-blue-800 border-blue-200",
        "benefit": "ينشئ خطة درس تفصيلية جدًا مع الزمن ودور المعلم والطالب.",
        "example": "/full-lesson صمّم حصة علوم 50 دقيقة عن حالات المادة وحدد وقت كل مرحلة.",
        "keywords": "full-lesson درس تفصيلي دور المعلم حالات المادة"
      },
      {
        "id": 103,
        "cmd": "/5e",
        "subject": "العلوم والفيزياء",
        "tagColor": "bg-emerald-50 text-emerald-800 border-emerald-200",
        "benefit": "يبني الدرس وفق نموذج Engage, Explore, Explain, Elaborate, Evaluate.",
        "example": "/5e صمّم درسًا عن الطاقة الحرارية للصف السادس وفق نموذج 5E.",
        "keywords": "5e نموذج خماسي engage explore طاقة حرارية"
      },
      {
        "id": 104,
        "cmd": "/objectives",
        "subject": "اللغة العربية والنحو",
        "tagColor": "bg-amber-50 text-amber-800 border-amber-200",
        "benefit": "يكتب أهدافًا تعليمية واضحة وقابلة للقياس.",
        "example": "/objectives اكتب 4 أهداف قابلة للقياس لدرس الفاعل والمفعول به للصف الخامس.",
        "keywords": "objectives أهداف تعليمية قياس فاعل مفعول"
      },
      {
        "id": 105,
        "cmd": "/learningtarget",
        "subject": "Science / لغات",
        "tagColor": "bg-sky-50 text-sky-800 border-sky-200",
        "benefit": "يحول الهدف إلى عبارة بسيطة يفهمها الطالب.",
        "example": "/learningtarget حوّل هدف Photosynthesis إلى عبارة Today I can مناسبة للصف السادس.",
        "keywords": "learningtarget هدف تعلمي today I can لغات"
      },
      {
        "id": 106,
        "cmd": "/successcriteria",
        "subject": "English Writing",
        "tagColor": "bg-sky-50 text-sky-800 border-sky-200",
        "benefit": "يحدد كيف يعرف الطالب أنه أتقن الهدف.",
        "example": "/successcriteria ضع 4 معايير نجاح لكتابة فقرة وصفية جيدة بالإنجليزية.",
        "keywords": "successcriteria معايير النجاح كتابة فقرة"
      },
      {
        "id": 107,
        "cmd": "/essentialquestion",
        "subject": "العلوم والاستدامة",
        "tagColor": "bg-emerald-50 text-emerald-800 border-emerald-200",
        "benefit": "يصوغ سؤالًا محوريًا عميقًا يقود التعلم.",
        "example": "/essentialquestion أنشئ سؤالًا محوريًا لوحدة عن الموارد الطبيعية والاستدامة.",
        "keywords": "essentialquestion سؤال محوري موارد طبيعية استدامة"
      },
      {
        "id": 108,
        "cmd": "/guidingquestions",
        "subject": "الدراسات والتاريخ",
        "tagColor": "bg-orange-50 text-orange-800 border-orange-200",
        "benefit": "ينشئ أسئلة إرشادية تقود الطلاب نحو الفكرة الرئيسية.",
        "example": "/guidingquestions أنشئ 5 أسئلة إرشادية لدرس عن الحضارة المصرية القديمة.",
        "keywords": "guidingquestions أسئلة إرشادية حضارة مصرية"
      },
      {
        "id": 109,
        "cmd": "/hook",
        "subject": "العلوم والأحياء",
        "tagColor": "bg-blue-50 text-blue-800 border-blue-200",
        "benefit": "يقترح بداية جذابة تثير فضول الطلاب.",
        "example": "/hook أعطني 5 بدايات مشوقة لدرس الجهاز الهضمي للصف الخامس.",
        "keywords": "hook تهيئة إثارة فضول جهاز هضمي"
      },
      {
        "id": 110,
        "cmd": "/warmup",
        "subject": "الرياضيات والحساب",
        "tagColor": "bg-purple-50 text-purple-800 border-purple-200",
        "benefit": "ينشئ نشاطًا تمهيديًا قصيرًا في بداية الحصة.",
        "example": "/warmup صمّم نشاطًا 4 دقائق لمراجعة جدول الضرب قبل درس القسمة.",
        "keywords": "warmup إحماء جدول الضرب قسمة"
      },
      {
        "id": 111,
        "cmd": "/starter",
        "subject": "اللغة العربية والإملاء",
        "tagColor": "bg-amber-50 text-amber-800 border-amber-200",
        "benefit": "ينشئ مهمة افتتاحية يستطيع الطلاب البدء بها فور دخول الفصل.",
        "example": "/starter أنشئ Do Now من 3 أسئلة لمراجعة الهمزة المتوسطة.",
        "keywords": "starter do now همزة متوسطة افتتاحية"
      },
      {
        "id": 112,
        "cmd": "/anticipatoryset",
        "subject": "الفيزياء والعلوم",
        "tagColor": "bg-blue-50 text-blue-800 border-blue-200",
        "benefit": "يبني تمهيدًا يربط خبرة الطالب السابقة بالدرس الجديد.",
        "example": "/anticipatoryset صمّم تمهيدًا لدرس الطفو باستخدام مواقف من السباحة والسفن.",
        "keywords": "anticipatoryset تمهيد خبرات سابقة طفو سفن"
      },
      {
        "id": 113,
        "cmd": "/priorlearning",
        "subject": "الهندسة والرياضيات",
        "tagColor": "bg-purple-50 text-purple-800 border-purple-200",
        "benefit": "يحدد ما يجب مراجعته من دروس سابقة قبل بدء الموضوع.",
        "example": "/priorlearning ما المفاهيم التي يجب مراجعتها قبل تدريس مساحة المثلث؟",
        "keywords": "priorlearning تعلم سابق مساحة مثلث هندسة"
      },
      {
        "id": 114,
        "cmd": "/lessonsequence",
        "subject": "التعبير والإنشاء",
        "tagColor": "bg-amber-50 text-amber-800 border-amber-200",
        "benefit": "يرتب أجزاء الدرس في تسلسل تربوي منطقي.",
        "example": "/lessonsequence رتّب مراحل حصة عن كتابة الرسالة الرسمية من التمهيد حتى التطبيق المستقل.",
        "keywords": "lessonsequence تسلسل الدرس رسالة رسمية مراحل"
      },
      {
        "id": 115,
        "cmd": "/timing",
        "subject": "العلوم والبيئة",
        "tagColor": "bg-blue-50 text-blue-800 border-blue-200",
        "benefit": "يوزع زمن الحصة على الأنشطة والمراحل.",
        "example": "/timing وزّع حصة 40 دقيقة عن دورة الماء بين مراجعة وشرح ونشاط وتقييم.",
        "keywords": "timing توزيع الزمن 40 دقيقة دورة الماء"
      },
      {
        "id": 116,
        "cmd": "/pacing",
        "subject": "التاريخ والدراسات",
        "tagColor": "bg-orange-50 text-orange-800 border-orange-200",
        "benefit": "يضبط سرعة وتوزيع المحتوى لتجنب الحشو أو الاستعجال.",
        "example": "/pacing اقترح توزيعًا واقعيًا لدرس تاريخ من 3 صفحات على حصتين.",
        "keywords": "pacing ضبط السرعة توزيع المحتوى تاريخ"
      },
      {
        "id": 117,
        "cmd": "/materials",
        "subject": "العلوم والمختبرات",
        "tagColor": "bg-blue-50 text-blue-800 border-blue-200",
        "benefit": "يحدد المواد والأدوات المطلوبة للحصة.",
        "example": "/materials اذكر الأدوات اللازمة لتجربة عن المغناطيس مع بدائل منخفضة التكلفة.",
        "keywords": "materials أدوات تجربة مغناطيس بدائل"
      },
      {
        "id": 118,
        "cmd": "/resources",
        "subject": "English Vocabulary",
        "tagColor": "bg-sky-50 text-sky-800 border-sky-200",
        "benefit": "يقترح أنواع الموارد التعليمية المناسبة.",
        "example": "/resources اقترح موارد رقمية وورقية لدرس Food Vocabulary للصف الرابع.",
        "keywords": "resources موارد تعليمية ورقية رقمية food"
      },
      {
        "id": 119,
        "cmd": "/direct",
        "subject": "العلوم والفيزياء",
        "tagColor": "bg-blue-50 text-blue-800 border-blue-200",
        "benefit": "ينشئ جزء الشرح المباشر الذي تقدمه المعلمة.",
        "example": "/direct اكتب شرحًا مباشرًا مدته 7 دقائق لمفهوم الكثافة للصف السادس.",
        "keywords": "direct شرح مباشر 7 دقائق كثافة"
      },
      {
        "id": 120,
        "cmd": "/minilesson",
        "subject": "الإملاء والترقيم",
        "tagColor": "bg-amber-50 text-amber-800 border-amber-200",
        "benefit": "يصمم شرحًا قصيرًا جدًا لمهارة محددة.",
        "example": "/minilesson صمّم شرحًا من 6 دقائق عن علامات الترقيم في نهاية الجملة.",
        "keywords": "minilesson درس مصغر 6 دقائق علامات ترقيم"
      },
      {
        "id": 121,
        "cmd": "/modeling",
        "subject": "مهارات القراءة",
        "tagColor": "bg-teal-50 text-teal-800 border-teal-200",
        "benefit": "يوضح كيف تعرض المعلمة نموذجًا للأداء المطلوب.",
        "example": "/modeling وضّح كيف تنمذج المعلمة طريقة إيجاد الفكرة الرئيسية من فقرة.",
        "keywords": "modeling نمذجة المعلمة فكرة رئيسية"
      },
      {
        "id": 122,
        "cmd": "/iwe-you",
        "subject": "الرياضيات والحساب",
        "tagColor": "bg-purple-50 text-purple-800 border-purple-200",
        "benefit": "يبني التعلم وفق I Do, We Do, You Do.",
        "example": "/iwe-you صمّم درسًا عن طرح الأعداد العشرية باستخدام I Do, We Do, You Do.",
        "keywords": "iwe-you التدرج في المسؤولية طرح أعداد عشرية"
      },
      {
        "id": 123,
        "cmd": "/gradualrelease",
        "subject": "English Paragraph",
        "tagColor": "bg-sky-50 text-sky-800 border-sky-200",
        "benefit": "يقلل الدعم تدريجيًا حتى يصل الطالب للاستقلال.",
        "example": "/gradualrelease صمّم تسلسلًا لتعليم كتابة Paragraph يبدأ بالنمذجة وينتهي بكتابة مستقلة.",
        "keywords": "gradualrelease الإطلاق التدريجي كتابة فقرة"
      },
      {
        "id": 124,
        "cmd": "/guided",
        "subject": "الرياضيات والكسور",
        "tagColor": "bg-purple-50 text-purple-800 border-purple-200",
        "benefit": "ينشئ جزء الممارسة الموجهة مع دعم المعلمة.",
        "example": "/guided صمّم 5 أسئلة تدريجية عن جمع الكسور أحلها مع الطلاب.",
        "keywords": "guided ممارسة موجهة جمع كسور"
      },
      {
        "id": 125,
        "cmd": "/practice",
        "subject": "النحو العربي",
        "tagColor": "bg-amber-50 text-amber-800 border-amber-200",
        "benefit": "ينشئ تدريبات تطبيقية على المهارة.",
        "example": "/practice أنشئ 8 تدريبات متنوعة على المبتدأ والخبر مع تدرج في الصعوبة.",
        "keywords": "practice تدريبات تطبيقية مبتدأ وخبر"
      },
      {
        "id": 126,
        "cmd": "/independent",
        "subject": "العلوم والبيئة",
        "tagColor": "bg-emerald-50 text-emerald-800 border-emerald-200",
        "benefit": "ينشئ مهمة مستقلة لقياس قدرة الطالب على التطبيق وحده.",
        "example": "/independent أنشئ نشاطًا مستقلًا لتقييم فهم الطلاب لسلسلة الغذاء.",
        "keywords": "independent نشاط مستقل سلسلة الغذاء"
      },
      {
        "id": 127,
        "cmd": "/application",
        "subject": "الرياضيات والمالية",
        "tagColor": "bg-purple-50 text-purple-800 border-purple-200",
        "benefit": "يحول المعرفة إلى تطبيق عملي أو موقف جديد.",
        "example": "/application صمّم مهمة يستخدم فيها الطلاب النسبة المئوية لحساب خصومات متجر افتراضي.",
        "keywords": "application تطبيق عملي نسبة مئوية خصومات"
      },
      {
        "id": 128,
        "cmd": "/closure",
        "subject": "الأمان الرقمي",
        "tagColor": "bg-violet-50 text-violet-800 border-violet-200",
        "benefit": "يصمم إغلاقًا تربويًا للحصة يلخص التعلم.",
        "example": "/closure اقترح نهاية 3 دقائق لدرس الأمان الرقمي تجعل الطلاب يذكرون أهم ما تعلموه.",
        "keywords": "closure غلق الحصة تلخيص أمان رقمي"
      },
      {
        "id": 129,
        "cmd": "/exit",
        "subject": "القرآن والتجويد",
        "tagColor": "bg-emerald-50 text-emerald-800 border-emerald-200",
        "benefit": "ينشئ تذكرة خروج قصيرة.",
        "example": "/exit أنشئ 3 أسئلة لتذكرة خروج عن المد الطبيعي لطلاب الصف السادس.",
        "keywords": "exit تذكرة خروج مد طبيعي تجويد"
      },
      {
        "id": 130,
        "cmd": "/reflectionprompt",
        "subject": "التربية الفنية",
        "tagColor": "bg-pink-50 text-pink-800 border-pink-200",
        "benefit": "يعطي الطلاب سؤالًا للتأمل في تعلمهم.",
        "example": "/reflectionprompt أنشئ سؤالين للتأمل بعد مشروع الفن عن الألوان الدافئة والباردة.",
        "keywords": "reflectionprompt تأمل ذاتي ألوان دافئة وباردة"
      }
    ]
  },
  {
    "id": "ch4",
    "num": "Chapter 4 • الفصل الرابع",
    "title": "القسم الرابع: Activities & Gamification",
    "subtitle": "أوامر الأنشطة والتفاعل والألعاب والتلعيب الصفي (181–300)",
    "range": "181–300",
    "themeGradient": "from-purple-900 via-pink-900 to-indigo-900",
    "icon": "🎮",
    "commands": [
      {
        "id": 181,
        "cmd": "/engage",
        "subject": "الدراسات والجغرافيا",
        "tagColor": "bg-orange-50 text-orange-800 border-orange-200",
        "benefit": "يقترح طرقًا لزيادة مشاركة الطلاب وانتباههم.",
        "example": "/engage أعطني 6 طرق تجعل درس التضاريس للصف الخامس أكثر تفاعلًا دون زيادة زمن الحصة.",
        "keywords": "engage تفاعل مشاركة انتباه تضاريس"
      },
      {
        "id": 182,
        "cmd": "/activity",
        "subject": "اللغة العربية والنحو",
        "tagColor": "bg-amber-50 text-amber-800 border-amber-200",
        "benefit": "ينشئ نشاطًا تعليميًا مرتبطًا بهدف محدد.",
        "example": "/activity صمّم نشاطًا مدته 10 دقائق لتمييز الاسم والفعل والحرف للصف الثالث.",
        "keywords": "activity نشاط صفي 10 دقائق أقسام الكلام"
      },
      {
        "id": 183,
        "cmd": "/interactive",
        "subject": "العلوم والأحياء",
        "tagColor": "bg-blue-50 text-blue-800 border-blue-200",
        "benefit": "يحول الشرح إلى تجربة تتطلب استجابات مستمرة من الطلاب.",
        "example": "/interactive حوّل درس الجهاز التنفسي إلى شرح تفاعلي يتوقف كل دقيقتين لسؤال أو توقع أو نشاط قصير.",
        "keywords": "interactive شرح تفاعلي جهاز تنفسي توقفات"
      },
      {
        "id": 184,
        "cmd": "/game",
        "subject": "الرياضيات والحساب",
        "tagColor": "bg-purple-50 text-purple-800 border-purple-200",
        "benefit": "يحول محتوى الدرس إلى لعبة تعليمية.",
        "example": "/game حوّل مراجعة جدول الضرب إلى لعبة مغامرة مناسبة للصف الثالث.",
        "keywords": "game لعبة تعليمية جدول الضرب مغامرة"
      },
      {
        "id": 185,
        "cmd": "/gamify",
        "subject": "النحو العربي",
        "tagColor": "bg-amber-50 text-amber-800 border-amber-200",
        "benefit": "يضيف عناصر اللعب مثل النقاط والمراحل والشارات والمكافآت إلى نشاط أو وحدة.",
        "example": "/gamify حوّل مراجعة النحو للصف السادس إلى تحديات من 5 مستويات مع نقاط وشارات.",
        "keywords": "gamify تلعيب نقاط شارات مستويات نحو"
      },
      {
        "id": 186,
        "cmd": "/challenge",
        "subject": "الرياضيات والكسور",
        "tagColor": "bg-purple-50 text-purple-800 border-purple-200",
        "benefit": "ينشئ تحديًا قصيرًا يتطلب التفكير أو التطبيق.",
        "example": "/challenge أنشئ تحديًا في الرياضيات للصف الخامس يستخدم مفهوم الكسور في موقف شراء حقيقي.",
        "keywords": "challenge تحدي صفي كسور شراء واقعي"
      },
      {
        "id": 187,
        "cmd": "/mission",
        "subject": "العلوم والتجارب",
        "tagColor": "bg-blue-50 text-blue-800 border-blue-200",
        "benefit": "يحول المهمة التعليمية إلى مهمة لها هدف وقصة.",
        "example": "/mission اجعل الطلاب علماء في مهمة لاكتشاف سبب ذوبان بعض المواد في الماء وعدم ذوبان أخرى.",
        "keywords": "mission مهمة علمية علماء ذوبان المواد"
      },
      {
        "id": 188,
        "cmd": "/quest",
        "subject": "English Directions",
        "tagColor": "bg-sky-50 text-sky-800 border-sky-200",
        "benefit": "ينشئ رحلة تعليمية تحتوي على عدة تحديات متتابعة.",
        "example": "/quest صمّم رحلة من 4 محطات لتعلم كلمات الاتجاهات باللغة الإنجليزية حتى يصل الطالب إلى الكنز.",
        "keywords": "quest رحلة تحديات اتجاهات كنز إنجليزي"
      },
      {
        "id": 189,
        "cmd": "/adventure",
        "subject": "العلوم وعالم الحيوان",
        "tagColor": "bg-emerald-50 text-emerald-800 border-emerald-200",
        "benefit": "يحول الدرس إلى مغامرة قصصية.",
        "example": "/adventure حوّل درس أنواع الحيوانات إلى مغامرة في الغابة لطلاب KG.",
        "keywords": "adventure مغامرة قصصية أنواع الحيوانات KG"
      },
      {
        "id": 190,
        "cmd": "/escaperoom",
        "subject": "العلوم والفيزياء",
        "tagColor": "bg-violet-50 text-violet-800 border-violet-200",
        "benefit": "يصمم Escape Room تعليمية تعتمد على حل ألغاز للوصول إلى رمز نهائي.",
        "example": "/escaperoom صمّم غرفة هروب من 5 ألغاز عن حالات المادة للصف الرابع مع الإجابات والرمز النهائي.",
        "keywords": "escaperoom غرفة هروب ألغاز حالات المادة رمز"
      }
    ]
  },
  {
    "id": "ch5",
    "num": "Chapter 5 • الفصل الخامس",
    "title": "القسم الخامس: Assessment & Feedback",
    "subtitle": "أوامر التقييم وبناء الأسئلة والتغذية الراجعة وسلالم التقدير (301–380)",
    "range": "301–380",
    "themeGradient": "from-emerald-900 via-teal-900 to-slate-900",
    "icon": "📊",
    "commands": [
      {
        "id": 301,
        "cmd": "/quiz",
        "subject": "الرياضيات والحساب",
        "tagColor": "bg-purple-50 text-purple-800 border-purple-200",
        "benefit": "ينشئ اختبارًا قصيرًا مع مفتاح الإجابة.",
        "example": "/quiz أنشئ اختبارًا من 10 أسئلة عن الضرب للصف الثالث، متدرج الصعوبة، مع الإجابات في النهاية.",
        "keywords": "quiz اختبار قصير كويز ضرب مفتاح إجابة"
      },
      {
        "id": 302,
        "cmd": "/test",
        "subject": "العلوم والأحياء",
        "tagColor": "bg-blue-50 text-blue-800 border-blue-200",
        "benefit": "ينشئ اختبارًا أكثر شمولًا من Quiz.",
        "example": "/test أنشئ اختبار علوم للصف السادس عن الخلية من 20 درجة، يتضمن اختيارًا من متعدد وأسئلة قصيرة وتطبيقًا.",
        "keywords": "test اختبار شامل خلية 20 درجة"
      },
      {
        "id": 303,
        "cmd": "/questionbank",
        "subject": "اللغة العربية والنحو",
        "tagColor": "bg-amber-50 text-amber-800 border-amber-200",
        "benefit": "يبني بنكًا كبيرًا من الأسئلة يمكن الاختيار منه لاحقًا.",
        "example": "/questionbank أنشئ بنكًا من 40 سؤالًا عن قواعد اللغة العربية للصف السادس، وصنفها حسب المهارة والصعوبة.",
        "keywords": "questionbank بنك أسئلة 40 سؤال نحو تصنيف"
      },
      {
        "id": 304,
        "cmd": "/mcq",
        "subject": "العلوم والجهاز الدوري",
        "tagColor": "bg-blue-50 text-blue-800 border-blue-200",
        "benefit": "ينشئ أسئلة اختيار من متعدد مع مشتتات منطقية.",
        "example": "/mcq أنشئ 12 سؤال اختيار من متعدد عن الجهاز الدوري للصف الخامس، بأربعة خيارات لكل سؤال.",
        "keywords": "mcq اختيار من متعدد مشتتات منطقية جهاز دوري"
      },
      {
        "id": 305,
        "cmd": "/truefalse",
        "subject": "التاريخ والدراسات",
        "tagColor": "bg-orange-50 text-orange-800 border-orange-200",
        "benefit": "ينشئ أسئلة صح أو خطأ مع تصحيح الخطأ.",
        "example": "/truefalse أنشئ 10 عبارات عن الحضارة المصرية القديمة مع الإجابة وتصحيح العبارة الخاطئة.",
        "keywords": "truefalse صح أو خطأ تصحيح الخطأ حضارة مصرية"
      },
      {
        "id": 346,
        "cmd": "/rubric",
        "subject": "العلوم والمشاريع",
        "tagColor": "bg-blue-50 text-blue-800 border-blue-200",
        "benefit": "ينشئ Rubric واضحًا لتقييم الأداء أو المشروع.",
        "example": "/rubric أنشئ Rubric من 4 مستويات لتقييم مشروع علمي عن التلوث: المعرفة، الدقة، التصميم، والعرض.",
        "keywords": "rubric سلم تقدير روبريك مشروع علمي تلوث"
      },
      {
        "id": 347,
        "cmd": "/analyticrubric",
        "subject": "English Essay",
        "tagColor": "bg-sky-50 text-sky-800 border-sky-200",
        "benefit": "يفصل التقييم إلى معايير متعددة بدرجات مستقلة.",
        "example": "/analyticrubric أنشئ Rubric لكتابة Essay يقيم التنظيم والمحتوى والقواعد والمفردات كلًا على حدة.",
        "keywords": "analyticrubric روبريك تحليلي essay كتابة معايير"
      },
      {
        "id": 375,
        "cmd": "/feedback",
        "subject": "التعبير والكتابة",
        "tagColor": "bg-amber-50 text-amber-800 border-amber-200",
        "benefit": "يولد تغذية راجعة محددة وقابلة للتنفيذ بلغة مشجعة.",
        "example": "/feedback اكتب Feedback لطالب كتب قصة جيدة الفكرة لكنها تحتاج تنظيمًا وعلامات ترقيم، بلغة مشجعة ومحددة.",
        "keywords": "feedback تغذية راجعة كتابة قصة تشجيع"
      }
    ]
  },
  {
    "id": "ch6",
    "num": "Chapter 6 • الفصل السادس",
    "title": "القسم السادس: Differentiation & Inclusion",
    "subtitle": "أوامر التمايز والدمج ورعاية الموهوبين وصعوبات التعلم (381–470)",
    "range": "381–470",
    "themeGradient": "from-rose-900 via-pink-900 to-indigo-900",
    "icon": "🤝",
    "commands": [
      {
        "id": 381,
        "cmd": "/differentiate",
        "subject": "الرياضيات والكسور",
        "tagColor": "bg-purple-50 text-purple-800 border-purple-200",
        "benefit": "يصمم نفس الهدف التعليمي بمستويات مختلفة حسب احتياجات الطلاب.",
        "example": "/differentiate صمّم نشاطًا عن الكسور للصف الرابع بثلاثة مستويات: دعم، مستوى أساسي، وتحدٍ متقدم.",
        "keywords": "differentiate تمايز 3 مستويات كسور"
      },
      {
        "id": 382,
        "cmd": "/differentiate-content",
        "subject": "العلوم والقراءة",
        "tagColor": "bg-blue-50 text-blue-800 border-blue-200",
        "benefit": "يغيّر مستوى أو كمية المحتوى مع بقاء الهدف الأساسي.",
        "example": "/differentiate-content عدّل نصًا عن دورة الماء إلى 3 مستويات قراءة مع الحفاظ على نفس المفاهيم العلمية.",
        "keywords": "differentiate-content تمايز المحتوى مستويات قراءة دورة الماء"
      },
      {
        "id": 383,
        "cmd": "/differentiate-process",
        "subject": "النحو العربي",
        "tagColor": "bg-amber-50 text-amber-800 border-amber-200",
        "benefit": "يغيّر طريقة تعلم الطلاب للمفهوم.",
        "example": "/differentiate-process اقترح 3 طرق لتعلم قاعدة المبتدأ والخبر: بصريًا، بالحركة، وبنشاط كتابي.",
        "keywords": "differentiate-process تمايز العمليات مبتدأ وخبر حركي بصري"
      },
      {
        "id": 384,
        "cmd": "/differentiate-product",
        "subject": "الدراسات والحضارات",
        "tagColor": "bg-orange-50 text-orange-800 border-orange-200",
        "benefit": "يسمح للطلاب بإظهار تعلمهم بمنتجات مختلفة.",
        "example": "/differentiate-product أعط الطلاب خيارات لإظهار فهمهم للحضارة المصرية: بوستر، فيديو، نموذج، أو عرض شفهي.",
        "keywords": "differentiate-product تمايز المنتج خيارات مشاريع حضارة مصرية"
      },
      {
        "id": 411,
        "cmd": "/enrich",
        "subject": "الرياضيات ورعاية الموهوبين",
        "tagColor": "bg-purple-50 text-purple-800 border-purple-200",
        "benefit": "ينشئ نشاطًا إثرائيًا للطلاب المتقدمين.",
        "example": "/enrich أنشئ 5 تحديات متقدمة في الرياضيات لطلاب أتقنوا موضوع الكسور مبكرًا.",
        "keywords": "enrich إثراء تحديات موهوبين كسور"
      },
      {
        "id": 433,
        "cmd": "/dyslexia-friendly",
        "subject": "صعوبات القراءة والدسلكسيا",
        "tagColor": "bg-amber-50 text-amber-800 border-amber-200",
        "benefit": "يعيد تنظيم المحتوى ليكون أكثر سهولة للطلاب الذين يواجهون صعوبات في فك القراءة.",
        "example": "/dyslexia-friendly أعد تصميم نص القراءة باستخدام فقرات قصيرة ومسافات واضحة ومفردات أساسية بارزة.",
        "keywords": "dyslexia-friendly ديسلكسيا عسر القراءة نصوص ميسرة"
      },
      {
        "id": 451,
        "cmd": "/udl",
        "subject": "التصميم الشامل للتعلم",
        "tagColor": "bg-teal-50 text-teal-800 border-teal-200",
        "benefit": "يعيد تصميم الدرس وفق مبادئ Universal Design for Learning.",
        "example": "/udl عدّل درس دورة الماء ليوفر أكثر من طريقة لعرض المعلومات والمشاركة وإظهار التعلم.",
        "keywords": "udl تصميم شامل للتعلم دورة الماء خيارات متعددة"
      }
    ]
  },
  {
    "id": "ch7",
    "num": "Chapter 7 • الفصل السابع",
    "title": "القسم السابع: Curriculum & Standards",
    "subtitle": "أوامر بناء المناهج والوحدات والمعايير والمواءمة (471–550)",
    "range": "471–550",
    "themeGradient": "from-cyan-900 via-blue-900 to-indigo-900",
    "icon": "📐",
    "commands": [
      {
        "id": 471,
        "cmd": "/unit",
        "subject": "العلوم والبيئة",
        "tagColor": "bg-blue-50 text-blue-800 border-blue-200",
        "benefit": "يصمم وحدة دراسية كاملة لعدة حصص أو أسابيع.",
        "example": "/unit صمّم وحدة لمدة أسبوعين للصف الرابع عن دورة الماء، تتضمن الأهداف والحصص والأنشطة والتقييمات.",
        "keywords": "unit تخطيط وحدة دراسية أسبوعين دورة الماء"
      },
      {
        "id": 472,
        "cmd": "/unitoverview",
        "subject": "Math Fractions",
        "tagColor": "bg-purple-50 text-purple-800 border-purple-200",
        "benefit": "يعطي نظرة عامة مختصرة على الوحدة قبل التفاصيل.",
        "example": "/unitoverview أنشئ نظرة عامة لوحدة Fractions للصف الخامس تشمل الفكرة الكبرى والأهداف والمهارات الرئيسية.",
        "keywords": "unitoverview نظرة عامة فكرة كبرى كسور"
      },
      {
        "id": 481,
        "cmd": "/backward",
        "subject": "العلوم والتصميم العكسي",
        "tagColor": "bg-emerald-50 text-emerald-800 border-emerald-200",
        "benefit": "يبني الوحدة بدءًا من النتيجة النهائية ثم التقييم ثم الأنشطة (Understanding by Design).",
        "example": "/backward صمّم وحدة عن الطاقة تبدأ بما يجب أن يتقنه الطالب، ثم التقييم النهائي، ثم الحصص اللازمة.",
        "keywords": "backward تصميم عكسي UbD نواتج تقييم أنشطة"
      },
      {
        "id": 491,
        "cmd": "/curriculum",
        "subject": "العلوم والمناهج",
        "tagColor": "bg-blue-50 text-blue-800 border-blue-200",
        "benefit": "يبني منهج فصل دراسي أو سنة كاملة.",
        "example": "/curriculum صمّم منهج علوم للصف الخامس لفصل دراسي مدته 16 أسبوعًا مع الوحدات والأهداف والتقييمات.",
        "keywords": "curriculum منهج كامل 16 أسبوع علوم خامس"
      },
      {
        "id": 511,
        "cmd": "/curriculummap",
        "subject": "تخطيط المناهج",
        "tagColor": "bg-indigo-50 text-indigo-800 border-indigo-200",
        "benefit": "ينشئ خريطة منهج تربط الزمن بالمحتوى والمهارة والتقييم.",
        "example": "/curriculummap أنشئ Curriculum Map لمادة العلوم للصف السادس من سبتمبر إلى يونيو.",
        "keywords": "curriculummap خريطة منهج سنوية مهارات تقييم"
      }
    ]
  },
  {
    "id": "ch8",
    "num": "Chapter 8 • الفصل الثامن",
    "title": "القسم الثامن: Critical Thinking & Problem Solving",
    "subtitle": "أوامر التفكير الناقد وقبعات التفكير وحل المشكلات (551–630)",
    "range": "551–630",
    "themeGradient": "from-amber-900 via-orange-900 to-slate-900",
    "icon": "🧠",
    "commands": [
      {
        "id": 551,
        "cmd": "/analyze",
        "subject": "العلوم والبيئة",
        "tagColor": "bg-blue-50 text-blue-800 border-blue-200",
        "benefit": "يحلل موضوعًا أو فكرة إلى عناصرها الأساسية وعلاقاتها.",
        "example": "/analyze حلل أسباب الاحتباس الحراري إلى أسباب بشرية وطبيعية ونتائج قصيرة وطويلة المدى.",
        "keywords": "analyze تحليل أسباب احتباس حراري نتائج"
      },
      {
        "id": 552,
        "cmd": "/pros-cons",
        "subject": "التقنية والتعليم",
        "tagColor": "bg-violet-50 text-violet-800 border-violet-200",
        "benefit": "يعرض الإيجابيات والسلبيات بصورة متوازنة.",
        "example": "/pros-cons حلل استخدام الأجهزة اللوحية في الصف من حيث التعلم والتركيز والتكلفة والوصول.",
        "keywords": "pros-cons إيجابيات وسلبيات أجهزة لوحية فصول"
      },
      {
        "id": 558,
        "cmd": "/claim-evidence-reasoning",
        "subject": "العلوم والاستدلال",
        "tagColor": "bg-emerald-50 text-emerald-800 border-emerald-200",
        "benefit": "ينظم التفكير بصيغة Claim–Evidence–Reasoning (CER).",
        "example": "/claim-evidence-reasoning صمّم نشاط علوم يجيب فيه الطلاب: هل الضوء ضروري لنمو النبات؟ باستخدام ادعاء ودليل وتفسير.",
        "keywords": "claim-evidence-reasoning نموذج CER ادعاء دليل تفسير"
      },
      {
        "id": 561,
        "cmd": "/fivewhys",
        "subject": "حل المشكلات المدرسية",
        "tagColor": "bg-amber-50 text-amber-800 border-amber-200",
        "benefit": "يستخدم خمس مرات 'لماذا؟' للوصول إلى السبب الأعمق للمشكلة.",
        "example": "/fivewhys حلل مشكلة تأخر الطلاب في تسليم المشروعات باستخدام طريقة Five Whys.",
        "keywords": "fivewhys لماذا الخمسة أسباب جذرية تأخر مشروعات"
      },
      {
        "id": 612,
        "cmd": "/counterargument",
        "subject": "المناظرة والتعبير",
        "tagColor": "bg-rose-50 text-rose-800 border-rose-200",
        "benefit": "يبني الحجة المضادة بصورة قوية وعادلة.",
        "example": "/counterargument قّدم أفضل حجة مضادة للرأي القائل إن الدراسة الرقمية أفضل دائمًا من الكتب.",
        "keywords": "counterargument حجة مضادة دراسة رقمية كتب ورقية"
      }
    ]
  },
  {
    "id": "ch9",
    "num": "Chapter 9 • الفصل التاسع",
    "title": "القسم التاسع: Research & Fact-Checking",
    "subtitle": "أوامر البحث والتوثيق والتحقق من المعلومات والدراسات (631–710)",
    "range": "631–710",
    "themeGradient": "from-slate-900 via-teal-950 to-indigo-950",
    "icon": "🔍",
    "commands": [
      {
        "id": 631,
        "cmd": "/research",
        "subject": "الجغرافيا والبيئة",
        "tagColor": "bg-orange-50 text-orange-800 border-orange-200",
        "benefit": "ينفذ بحثًا منظمًا حول موضوع محدد.",
        "example": "/research ابحث عن أسباب التصحر وآثاره، ونظم النتائج لتناسب درس جغرافيا للصف السادس.",
        "keywords": "research بحث منظم تصحر جغرافيا سادس"
      },
      {
        "id": 632,
        "cmd": "/deepresearch",
        "subject": "الذكاء الاصطناعي في التعليم",
        "tagColor": "bg-violet-50 text-violet-800 border-violet-200",
        "benefit": "ينفذ بحثًا أعمق يشمل عدة جوانب ومصادر علمية حديثة.",
        "example": "/deepresearch ابحث بعمق في تأثير الذكاء الاصطناعي في التعليم المدرسي، مع الفوائد والتحديات والدراسات الحديثة.",
        "keywords": "deepresearch بحث معمق ذكاء اصطناعي مدارس دراسات"
      },
      {
        "id": 661,
        "cmd": "/factcheck",
        "subject": "التربية الإعلامية والعلوم",
        "tagColor": "bg-emerald-50 text-emerald-800 border-emerald-200",
        "benefit": "يتحقق من ادعاء باستخدام مصادر علمية موثوقة.",
        "example": "/factcheck تحقق من الادعاء: 'يستخدم الإنسان 10% فقط من دماغه'، واذكر الأدلة والمصادر العلمية.",
        "keywords": "factcheck تحقق من الحقائق خرافات علمية دماغ مصادر"
      },
      {
        "id": 701,
        "cmd": "/cite",
        "subject": "التوثيق الأكاديمي",
        "tagColor": "bg-indigo-50 text-indigo-800 border-indigo-200",
        "benefit": "يضيف الاستشهاد بالمصدر إلى كل ادعاء أو حقيقة.",
        "example": "/cite اكتب ملخصًا للموضوع التالي مع استشهاد بجانب كل معلومة رئيسية.",
        "keywords": "cite استشهاد توثيق مراجع اقتباس"
      }
    ]
  },
  {
    "id": "ch10",
    "num": "Chapter 10 • الفصل العاشر",
    "title": "القسم العاشر: Writing & Communication",
    "subtitle": "أوامر الكتابة والتحرير والتواصل المدرسي مع أولياء الأمور (711–790)",
    "range": "711–790",
    "themeGradient": "from-slate-900 via-indigo-950 to-blue-950",
    "icon": "✍️",
    "commands": [
      {
        "id": 711,
        "cmd": "/rewrite",
        "subject": "التواصل المدرسي",
        "tagColor": "bg-blue-50 text-blue-800 border-blue-200",
        "benefit": "يعيد كتابة النص بصورة أوضح وأفضل مع الحفاظ على المعنى.",
        "example": "/rewrite أعد كتابة هذه الملاحظة عن الواجب بأسلوب واضح ومهني مناسب لطلاب الصف السادس.",
        "keywords": "rewrite إعادة صياغة وضوح ملاحظات واجب"
      },
      {
        "id": 716,
        "cmd": "/proofread",
        "subject": "التدقيق اللغوي والإملائي",
        "tagColor": "bg-amber-50 text-amber-800 border-amber-200",
        "benefit": "يدقق الإملاء والنحو وعلامات الترقيم دون تغيير غير مبرر للأسلوب.",
        "example": "/proofread دقق النص العربي التالي لغويًا دون إعادة صياغته إلا عند وجود خطأ صريح.",
        "keywords": "proofread تدقيق إملائي نحوي لغوي تصحيح"
      },
      {
        "id": 751,
        "cmd": "/parent",
        "subject": "رسائل أولياء الأمور",
        "tagColor": "bg-emerald-50 text-emerald-800 border-emerald-200",
        "benefit": "يكتب رسالة مهذبة ومحترمة لولي الأمر.",
        "example": "/parent اكتب رسالة مهذبة لولي أمر توضح أن الطالب يحتاج إلى مراجعة جدول الضرب في المنزل.",
        "keywords": "parent رسالة ولي أمر مراجعة جدول الضرب شراكة"
      },
      {
        "id": 762,
        "cmd": "/reportcard",
        "subject": "تقارير الشهادات المدرسية",
        "tagColor": "bg-teal-50 text-teal-800 border-teal-200",
        "benefit": "يصوغ تعليق Report Card متوازنًا وإيجابيًا.",
        "example": "/reportcard اكتب تعليقًا يشمل نقطة قوة، تطورًا ملحوظًا، وهدفًا للفصل القادم لطالب متفوق.",
        "keywords": "reportcard تعليق شهادة تقرير فصلي نقاط قوة هدف"
      }
    ]
  },
  {
    "id": "ch11",
    "num": "Chapter 11 • الفصل الحادي عشر",
    "title": "القسم الحادي عشر: Storytelling & Multimedia",
    "subtitle": "أوامر القصص التعليمية والفيديو والبودكاست والعروض (791–870)",
    "range": "791–870",
    "themeGradient": "from-pink-900 via-rose-950 to-purple-950",
    "icon": "🎙️",
    "commands": [
      {
        "id": 791,
        "cmd": "/storyconcept",
        "subject": "القصص التعليمية",
        "tagColor": "bg-pink-50 text-pink-800 border-pink-200",
        "benefit": "يحول الهدف التعليمي إلى فكرة قصة مشوقة ومناسبة للعمر.",
        "example": "/storyconcept حوّل درس حالات المادة للصف الرابع إلى فكرة قصة مغامرة قصيرة دون فقد المعلومات العلمية.",
        "keywords": "storyconcept فكرة قصة حالات المادة مغامرة"
      },
      {
        "id": 806,
        "cmd": "/script",
        "subject": "سيناريو الفيديو التعليمي",
        "tagColor": "bg-purple-50 text-purple-800 border-purple-200",
        "benefit": "يكتب سيناريو كاملًا لفيديو أو مشهد تعليمي.",
        "example": "/script اكتب سيناريو فيديو تعليمي مدته دقيقتان عن الجهاز الهضمي للصف الخامس.",
        "keywords": "script سيناريو فيديو دقيقتان جهاز هضمي"
      },
      {
        "id": 807,
        "cmd": "/videoscript",
        "subject": "إنتاج الفيديو التعليمي",
        "tagColor": "bg-pink-50 text-pink-800 border-pink-200",
        "benefit": "يكتب نص فيديو مع وصف الصورة والحوار والتوقيت.",
        "example": "/videoscript صمّم فيديو علوم من 90 ثانية عن التبخر، وحدد الصورة والتعليق الصوتي لكل جزء.",
        "keywords": "videoscript سيناريو 90 ثانية تبخر صورة وحوار"
      },
      {
        "id": 826,
        "cmd": "/voiceover",
        "subject": "التعليق الصوتي والإلقاء",
        "tagColor": "bg-rose-50 text-rose-800 border-rose-200",
        "benefit": "يكتب تعليقًا صوتيًا متناسقًا مع المشهد بالتشكيل والفصاحة.",
        "example": "/voiceover اكتب تعليقًا صوتيًا عربيًا فصيحًا بالتشكيل لمشهد عن طبقات الأرض مدته 8 ثوانٍ.",
        "keywords": "voiceover تعليق صوتي تشكيل فصحى طبقات الأرض"
      },
      {
        "id": 851,
        "cmd": "/slideoutline",
        "subject": "العروض التقديمية PowerPoint",
        "tagColor": "bg-blue-50 text-blue-800 border-blue-200",
        "benefit": "ينشئ مخطط العرض قبل تصميمه وتوزيع الشرائح.",
        "example": "/slideoutline أنشئ مخطط PowerPoint من 10 شرائح عن الطاقة المتجددة للصف السادس.",
        "keywords": "slideoutline مخطط باوربوينت 10 شرائح طاقة متجددة"
      }
    ]
  },
  {
    "id": "ch12",
    "num": "Chapter 12 • الفصل الثاني عشر",
    "title": "القسم الثاني عشر: Teacher Productivity",
    "subtitle": "أوامر إنتاجية المعلمة وأتمتة المهام وتوفير الوقت (871–950)",
    "range": "871–950",
    "themeGradient": "from-teal-900 via-slate-900 to-indigo-900",
    "icon": "⚡",
    "commands": [
      {
        "id": 871,
        "cmd": "/plan",
        "subject": "التخطيط والإنتاجية",
        "tagColor": "bg-teal-50 text-teal-800 border-teal-200",
        "benefit": "ينشئ خطة واضحة لتنفيذ هدف أو مهمة خلال أيام محددة.",
        "example": "/plan ضع لي خطة من 5 أيام لتحضير وحدة علوم عن الطاقة مع الأنشطة والاختبارات والمواد المطلوبة.",
        "keywords": "plan خطة 5 أيام تحضير وحدة علوم"
      },
      {
        "id": 872,
        "cmd": "/dailyplan",
        "subject": "إدارة اليوم الدراسي",
        "tagColor": "bg-blue-50 text-blue-800 border-blue-200",
        "benefit": "ينظم مهام يوم العمل حسب الوقت والأهمية.",
        "example": "/dailyplan لدي تصحيح أوراق وتحضير حصتين واجتماع. نظم يومي من 8 صباحًا إلى 3 عصرًا.",
        "keywords": "dailyplan خطة يومية تنظيم مهام يوم العمل"
      },
      {
        "id": 881,
        "cmd": "/prioritize",
        "subject": "ترتيب الأولويات",
        "tagColor": "bg-amber-50 text-amber-800 border-amber-200",
        "benefit": "يرتب المهام حسب الأهمية والاستعجال بمصفوفة أيزنهاور.",
        "example": "/prioritize رتب مهامي التالية: تحضير درس الغد، تصحيح اختبار، تصميم بوستر، والرد على الإيميلات.",
        "keywords": "prioritize مصفوفة الأولويات أيزنهاور عاجل ومهم"
      },
      {
        "id": 901,
        "cmd": "/batch",
        "subject": "إنجاز المهام بالدفعات Batch Work",
        "tagColor": "bg-purple-50 text-purple-800 border-purple-200",
        "benefit": "يجمع المهام المتشابهة لتنفيذها دفعة واحدة وتوفير الساعات.",
        "example": "/batch ساعدني في تجهيز جميع Exit Tickets لوحدة من 8 حصص في جلسة واحدة.",
        "keywords": "batch عمل بالدفعات تذاكر خروج 8 حصص جلسة واحدة"
      },
      {
        "id": 931,
        "cmd": "/agenda",
        "subject": "الاجتماعات المدرسية",
        "tagColor": "bg-indigo-50 text-indigo-800 border-indigo-200",
        "benefit": "ينشئ جدول أعمال محكم لاجتماع مدرسي مع توقيت كل بند.",
        "example": "/agenda أنشئ Agenda لاجتماع فريق Grade 6 مدته 30 دقيقة حول نتائج التقييم وخطة الأسبوع القادم.",
        "keywords": "agenda جدول أعمال اجتماع توقيت بنود فريق"
      }
    ]
  },
  {
    "id": "ch13",
    "num": "Chapter 13 • الفصل الثالث عشر",
    "title": "القسم الثالث عشر: Classroom Management & SEL",
    "subtitle": "أوامر إدارة الصف والروتين والسلوك والذكاء العاطفي (951–1050)",
    "range": "951–1050",
    "themeGradient": "from-emerald-900 via-teal-950 to-slate-900",
    "icon": "🌟",
    "commands": [
      {
        "id": 951,
        "cmd": "/classroommanagement",
        "subject": "إدارة الصف الشاملة",
        "tagColor": "bg-emerald-50 text-emerald-800 border-emerald-200",
        "benefit": "يصمم خطة متكاملة لإدارة الصف تشمل القواعد والروتين والتعزيز.",
        "example": "/classroommanagement صّمم خطة إدارة صف للصف السادس تشمل القواعد والروتين والتعزيز والتعامل مع المقاطعة.",
        "keywords": "classroommanagement إدارة الصف خطة متكاملة روتين قواعد تعزيز"
      },
      {
        "id": 952,
        "cmd": "/rules",
        "subject": "قواعد الفصل الإيجابية",
        "tagColor": "bg-teal-50 text-teal-800 border-teal-200",
        "benefit": "يصيغ قواعد صفية قصيرة وواضحة وإيجابية.",
        "example": "/rules اكتب 5 قواعد صفية لطلاب الصف الثالث بصياغة إيجابية تبدأ بأفعال يمكن ملاحظتها.",
        "keywords": "rules قواعد صفية إيجابية ميثاق الفصل"
      },
      {
        "id": 961,
        "cmd": "/attentiongetter",
        "subject": "استعادة الانتباه والتركيز",
        "tagColor": "bg-amber-50 text-amber-800 border-amber-200",
        "benefit": "يقترح إشارة قصيرة أو نداء واستجابة (Call & Response) لاستعادة هدوء الصف.",
        "example": "/attentiongetter أعطني 10 إشارات Call-and-Response مناسبة لطلاب الصف الأول دون صراخ.",
        "keywords": "attentiongetter نداء واستجابة هدوء الصف جذب انتباه"
      },
      {
        "id": 981,
        "cmd": "/noiselevel",
        "subject": "إدارة مستوى الصوت",
        "tagColor": "bg-blue-50 text-blue-800 border-blue-200",
        "benefit": "يحدد مستويات صوت واضحة لكل نشاط صفي (من 0 إلى 4).",
        "example": "/noiselevel أنشئ نظامًا من 0 إلى 4 لمستوى الصوت مع وصف ومثال لكل مستوى (صامت، همس، طاولة...).",
        "keywords": "noiselevel مستويات الصوت سلم الضوضاء صامت همس"
      },
      {
        "id": 1031,
        "cmd": "/conflictresolution",
        "subject": "حل النزاعات المدرسية",
        "tagColor": "bg-pink-50 text-pink-800 border-pink-200",
        "benefit": "ينظم خطوات تربوية لحل خلاف بين طالبين بطريقة تصالحية.",
        "example": "/conflictresolution صّمم خطوات لحل خلاف بين طالبين على الأدوار في مشروع جماعي.",
        "keywords": "conflictresolution حل النزاعات وساطة صلح طلاب"
      }
    ]
  },
  {
    "id": "ch14",
    "num": "Chapter 14 • الفصل الرابع عشر",
    "title": "القسم الرابع عشر: Advanced Prompt Engineering & AI Control",
    "subtitle": "هندسة الأوامر المتقدمة والتحكم وسلاسل التفكير المنهجية (1051–1180)",
    "range": "1051–1180",
    "themeGradient": "from-slate-950 via-indigo-950 to-purple-950",
    "icon": "⚙️",
    "commands": [
      {
        "id": 1051,
        "cmd": "/role",
        "subject": "تحديد الدور Persona",
        "tagColor": "bg-purple-50 text-purple-800 border-purple-200",
        "benefit": "يحدد الدور التخصصي الذي ينطلق منه الذكاء الاصطناعي.",
        "example": "/role تصرف كمعلمة علوم خبيرة في تدريس الصف الرابع، ثم اقترح طريقة لشرح حالات المادة.",
        "keywords": "role دور المعلمة خبير تدريس persona"
      },
      {
        "id": 1057,
        "cmd": "/task",
        "subject": "تحديد المهمة بدقة",
        "tagColor": "bg-blue-50 text-blue-800 border-blue-200",
        "benefit": "يحدد المهمة الأساسية بدقة ويمنع تشتت الطلب.",
        "example": "/task مهمتك الوحيدة هي إنشاء 10 أسئلة فهم على النص المرفق، دون تلخيص النص.",
        "keywords": "task مهمة محددة منع تشتت دقة"
      },
      {
        "id": 1073,
        "cmd": "/tableoutput",
        "subject": "تنسيق المخرجات بجداول",
        "tagColor": "bg-emerald-50 text-emerald-800 border-emerald-200",
        "benefit": "يجبر الناتج على الظهور في جدول منظم ومقارن.",
        "example": "/tableoutput قارن بين الطاقة الشمسية وطاقة الرياح في أربعة أعمدة.",
        "keywords": "tableoutput جدول أعمدة مقارنة مخرجات"
      },
      {
        "id": 1081,
        "cmd": "/strict",
        "subject": "الالتزام الصارم بالملف المرفق",
        "tagColor": "bg-rose-50 text-rose-800 border-rose-200",
        "benefit": "يطلب الالتزام الصارم بالشروط والمحتوى المقدم ومنع الاختراع (Grounded).",
        "example": "/strict استخدم المعلومات الموجودة في الملف فقط، ولا تضف أمثلة من خارج المحتوى.",
        "keywords": "strict التزام صارم منع الهلوسة grounded"
      },
      {
        "id": 1133,
        "cmd": "/fewshot",
        "subject": "التعلم بالأمثلة Few-Shot",
        "tagColor": "bg-indigo-50 text-indigo-800 border-indigo-200",
        "benefit": "يقدم عدة أمثلة لتثبيت النمط والجودة المطلوبة قبل التوليد.",
        "example": "/fewshot هذه 3 أمثلة لأسئلة Higher-Order Thinking. أنشئ 8 أسئلة جديدة بنفس الجودة والنمط.",
        "keywords": "fewshot أمثلة مسبقة تثبيت النمط تفكير عليا"
      },
      {
        "id": 1141,
        "cmd": "/promptchain",
        "subject": "سلاسل الأوامر Prompt Chaining",
        "tagColor": "bg-violet-50 text-violet-800 border-violet-200",
        "benefit": "يقسم المهمة المعقدة إلى سلسلة Prompts مترابطة تنتقل من خطوة لأخرى.",
        "example": "/promptchain حوّل موضوع الدرس بالترتيب إلى: تحليل المحتوى -> Lesson Plan -> Slides -> Worksheet -> Quiz.",
        "keywords": "promptchain سلسلة برومبتات تخطيط شرائح اختبار تدفق"
      },
      {
        "id": 1172,
        "cmd": "/masterprompt",
        "subject": "البرومبت الشامل Master Prompt",
        "tagColor": "bg-purple-50 text-purple-800 border-purple-200",
        "benefit": "يبني أمرًا شاملًا قابلًا لإعادة الاستخدام بمجرد تغيير المدخلات.",
        "example": "/masterprompt أنشئ Master Prompt لتحضير أي حصة بمجرد إدخال المادة والصف والموضوع والزمن.",
        "keywords": "masterprompt برومبت رئيسي تحضير أي حصة قالب شامل"
      },
      {
        "id": 1180,
        "cmd": "/allinone",
        "subject": "المنظومة الكاملة الشاملة",
        "tagColor": "bg-teal-50 text-teal-800 border-teal-200",
        "benefit": "يجمع عدة مراحل ومخرجات في نظام واحد متسق الهدف والرؤية.",
        "example": "/allinone حوّل موضوع الدرس إلى Lesson Plan وSlides وActivity وWorksheet وQuiz مع الحفاظ على هدف واحد متسق.",
        "keywords": "allinone الكل في واحد باقة الحصة المتكاملة"
      }
    ]
  }
];

if (typeof window !== "undefined") { window.walaaChaptersData = walaaChaptersData; }
if (typeof module !== "undefined") { module.exports = walaaChaptersData; }
