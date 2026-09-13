// ==========================================================================
// STATIC DATABASE (Avoids CORS issues when opening index.html directly via file://)
// ==========================================================================
let subjectsData = [
  {
    "id": "arabic",
    "category": "languages",
    "titleAr": "اللغة العربية",
    "titleEn": "Arabic Language",
    "descAr": "أدوات متميزة لتصميم إنفوجرافيك النحو وقواعد الإملاء والبلاغة والتعبير الأدبي للأطفال",
    "descEn": "Premium tools to design Arabic grammar infographics, spelling posters, and literature worksheets",
    "icon": "🖋️",
    "colorClass": "card-arabic",
    "prompts": [
      {
        "id": 1,
        "titleAr": "إنفوجرافيك النحو وقواعد اللغة العربية",
        "titleEn": "Arabic Grammar & Language Infographic",
        "textAr": "\nالدور:\nمصمم إنفوجرافيك تعليمي لغوي محترف وخبير في تبسيط قواعد اللغة العربية.\n\nاللوحة:\nملصق إنفوجرافيك لقواعد النحو والصرف، مقاس A4 عمودي (Portrait)، بدقة 300 نقطة لكل بوصة.\n\nالموضوع:\nشرح وتوضيح المفهوم النحوي/الصرفي: {{TOPIC}} في فرع: {{BRANCH}} لطلاب المستوى: {{LEVEL}}.\n\nمحرك التصميم التلقائي (RTL بالكامل):\n- مرحلة ابتدائية: ألوان زاهية، جمل بسيطة، رسوم توضيحية كبيرة، نص محدود.\n- مرحلة متوسطة: مزيج من النص والصور، جداول، أمثلة بسيطة ومتوسطة.\n- مرحلة ثانوية/جامعية: كثافة أكاديمية، تحليل صرفي ونحوي كامل، شواهد قرآنية وشعرية.\n\nكتل المحتوى المتضمنة (باللغة العربية):\n1. القاعدة الأساسية: صياغة القاعدة بلغة سليمة وواضحة، تعريف المصطلح النحوي/الصرفي، متى تطبق القاعدة ومتى لا تطبق.\n2. جدول الأشكال: تصريف كامل، صيغ الجمع، حالات الإعراب (الرفع = أخضر، النصب = أزرق، الجر = أحمر، الجزم = بنفسجي).\n3. بنك الأمثلة: 15 مثالاً على الأقل مرتبة من البسيط للمعقد (جملة كاملة + تحتها إعرابها بالتفصيل مع تلوين الكلمة الرئيسية).\n4. الشواهد الأصيلة: آية قرآنية كريمة واحدة (اسم السورة ورقم الآية) + بيت شعري من فصيح الشعر العربي مع نسبته وتحليله.\n5. الأخطاء الشائعة: 5 أخطاء شائعة لدى الطلاب مع توضيح الجملة الخاطئة والتصويب والسبب.\n6. أداة الحفظ: قاعدة منظومة (مرجزة) أو مخطط بصري مبسط لتسهيل تذكر القاعدة.\n7. الصلة: 3 مواضيع نحوية/صرفية ذات صلة.\n\nالمراجع:\nألفية ابن مالك، شرح ابن عقيل، النحو الوافي لعباس حسن، المناهج الوطنية.\n\nالأسلوب والجمالية:\nجمالية الكتاب النحوي العربي الكلاسيكي المتميز، ألوان دافئة (فيروزي عميق + ذهبي + كريم)، خط عربي أكاديمي، حدود أرابيسك خفيفة، اتجاه كتابة من اليمين لليسار (RTL) بالكامل.\n\nاللغة المطلوبة للبوستر: العربية.",
        "textEn": "Use imgGenTool to create a premium Arabic language grammar educational infographic.\n\nTOPIC:\nVisual guide to the Arabic grammar/morphology topic: {{TOPIC}} in the branch of: {{BRANCH}} for {{LEVEL}} level.\n\nAUTO-ADAPTIVE DESIGN (RTL Layout):\n- Primary -> Bright colors, simple sentences, large illustrations, limited text.\n- Middle -> Balanced text and graphics, tables, basic/intermediate examples.\n- High school / University -> Academic density, full grammatical/morphological analysis, Quranic and poetic references.\n\nCONTENT BLOCKS (Arabic throughout):\n1. CORE RULE: Classical Arabic definition, rules of application, and constraints.\n2. PATTERN/CASE TABLE: Conjunctions, plural forms, and declension cases color-coded (Nominative=Green, Accusative=Blue, Genitive=Red, Jussive=Purple).\n3. EXAMPLES BANK: At least 15 graded examples (full sentence + word-by-word grammatical analysis underneath).\n4. AUTHENTIC EVIDENCE: 1 Quranic verse (Surah name & verse number) + 1 classical Arabic poetry verse with grammatical analysis of the key section.\n5. COMMON MISTAKES: 5 frequent student errors (Wrong sentence vs Correct sentence + grammatical explanation).\n6. MEMORY TOOL: A mnemonic poem (Rajaz) or a simplified visual flow chart.\n7. CONNECTIONS: 3 related grammar/morphology topics.\n\nSTYLE:\nClassical Arabic academic textbook aesthetic, warm color palette (deep teal, gold, cream), academic Arabic calligraphy, subtle Arabesque borders, full RTL layout.\n\nLANGUAGE: The final poster language must be Arabic (RTL).",
        "image": "images/Arabic Language/1.png",
        "variables": [
          {"name": "TOPIC", "labelAr": "الموضوع النحوي/الصرفي", "labelEn": "Grammar/Morphology Topic", "placeholderAr": "مثال: المبتدأ والخبر / الفعل المضارع", "placeholderEn": "e.g. Subject & Predicate / Present Tense"},
          {"name": "BRANCH", "labelAr": "فرع المادة", "labelEn": "Branch", "placeholderAr": "مثال: نحو / صرف / كلاهما", "placeholderEn": "e.g. Syntax / Morphology / Both"},
          {"name": "LEVEL", "labelAr": "المستوى الدراسي", "labelEn": "Grade Level", "placeholderAr": "مثال: ابتدائي / متوسط / ثانوي", "placeholderEn": "e.g. Primary / Middle / High school"}
        ]
      },
      {
        "id": 2,
        "titleAr": "إنفوجرافيك التعبير الأدبي والبلاغة",
        "titleEn": "Composition & Literature Infographic",
        "textAr": "\nالدور:\nمصمم إنفوجرافيك تعليمي ووسائل أدبية وبلاغية محترف.\n\nاللوحة:\nملصق تعبير وأدب تفاعلي, مقاس A4 عمودي (Portrait), بدقة 300 نقطة لكل بوصة.\n\nالموضوع:\nدليل تبسيط وتوضيح مهارات تعبير وأدب وبلاغة في موضوع: {{TOPIC}} لفرع: {{TYPE}} للمستوى الدراسي: {{LEVEL}}.\n\nكتل المحتوى المتضمنة (RTL بالكامل):\n1. هيكل النص / بنية التعبير: المقدمة وأنواعها، العرض وتطوير الفكرة والانتقالات، الخاتمة وصيغها، مع مخطط بصري للبنية الكلية.\n2. قالب الكتابة: الصيغة الكاملة للنوع المطلوب، أمثلة على المقدمات، و20 عبارة ربط وانتقال مميزة.\n3. الصور البلاغية (للأدب والبلاغة): أركان التشبيه وأنواعه، الاستعارة التصريحية والمكنية، الكناية وأنواعها، وأثر كل صورة جمالياً وبلاغياً في المتلقي.\n4. نموذج تطبيقي: فقرة نموذجية كاملة مكتوبة مع تلوين وتعليق تحليلي لكل جملة موضحاً وظيفتها وجمالها.\n5. المعجم الأدبي والتعبيري: 20 مفردة راقية مع معانيها، عبارات افتتاحية متميزة، وصيغ الاستشهاد والاقتباس.\n6. أسرار الكتابة المتميزة: 7 تقنيات لرفع مستوى التعبير، والفرق بين الكتابة العادية والمتميزة.\n\nالمراجع:\nالبلاغة الواضحة، جواهر البلاغة، مناهج اللغة العربية الوطنية.\n\nالأسلوب والجمالية:\nجمالية الكتاب الأدبي الكلاسيكي المتميز، ألوان ملكية دافئة (ذهبي + عنابي + كريم)، خط عربي أنيق، حدود زخرفية أرابيسك، اتجاه كتابة من اليمين لليسار (RTL) بالكامل.\n\nاللغة المطلوبة للبوستر: العربية.",
        "textEn": "Use imgGenTool to create a premium Arabic composition and literature educational infographic.\n\nTOPIC:\nInteractive guide to: {{TOPIC}} for: {{TYPE}} at {{LEVEL}} level.\n\nCONTENT BLOCKS:\n1. TEXT STRUCTURE: Introduction styles, body development with transitions, and conclusion types, mapped as a visual architectural blueprint.\n2. WRITING TEMPLATE: Full structure formatting, sample introductions, and 20 transition/connecting phrases.\n3. RHETORICAL FIGURES: Simile (types & components), Metaphor (explicit/implicit), Metonymy, and the aesthetic impact of each figure on the reader.\n4. PRACTICAL MODEL: A complete model paragraph with color-coded annotated analysis explaining the function and beauty of each sentence.\n5. LITERARY LEXICON: 20 refined vocabulary words with definitions, opening hooks, and quotation formats.\n6. PRO WRITING TIPS: 7 advanced techniques to elevate essay/rhetoric composition.\n\nSTYLE:\nClassical literary aesthetic, rich royal color scheme (gold, burgundy, cream), elegant Arabic calligraphy, decorative borders, full RTL layout.\n\nLANGUAGE: The final poster language must be Arabic (RTL).",
        "image": "images/Arabic Language/2.png",
        "variables": [
          {"name": "TOPIC", "labelAr": "الموضوع التعبيري/الأدبي", "labelEn": "Literature/Composition Topic", "placeholderAr": "مثال: الصور البلاغية / كتابة القصة القصيرة", "placeholderEn": "e.g. Rhetorical figures / Short story writing"},
          {"name": "TYPE", "labelAr": "نوع النشاط", "labelEn": "Activity Type", "placeholderAr": "مثال: بلاغة / تعبير كتابي / تحليل أدبي", "placeholderEn": "e.g. Rhetoric / Essay / Literary analysis"},
          {"name": "LEVEL", "labelAr": "المستوى الدراسي", "labelEn": "Grade Level", "placeholderAr": "مثال: متوسط / ثانوي / جامعي", "placeholderEn": "e.g. Middle school / High school / University"}
        ]
      },
      {
        "id": 3,
        "titleAr": "ملصق قواعد اللغة العربية الأكاديمي",
        "titleEn": "Academic Arabic Language Rules Poster",
        "textAr": "\nالدور:\nمصمم ملصقات تعليمية ولغوية أكاديمية فاخرة.\n\nاللوحة:\nملصق تعليمي لقواعد اللغة العربية، مقاس A4 عمودي (Portrait)، بدقة 300 نقطة لكل بوصة.\n\nالموضوع:\nملصق تعليمي لشرح وتوضيح قاعدة: {{TOPIC}} لطلاب المستوى الدراسي: {{LEVEL}}.\n\nالمكونات وهيكل المحتوى (RTL بالكامل):\n1. عنوان القاعدة: رأس الصفحة مزين بخط عربي كلاسيكي متميز.\n2. القاعدة الأساسية: مصاغة بلغة عربية فصحى سليمة ومبسطة.\n3. تفصيل القاعدة: توضيح بصري لمكونات القاعدة وعناصرها.\n4. جدول الصياغة: الأوزان الصرفية أو الحالات الإعرابية بالتفصيل.\n5. أمثلة توضيحية: أكثر من 10 أمثلة ملونة مع الإعراب التفصيلي لكل جملة بالأسفل.\n6. الاستثناءات: الحالات الخاصة التي تخرج عن القاعدة العامة.\n7. أداة الحفظ: منظومة شعرية أو وسيلة تذكر بصرية لتثبيت القاعدة.\n\nالعناصر المرئية والجمالية:\nحدود أرابيسك كلاسيكية، زخارف هندسية إسلامية ناعمة في الخلفية، خطوط عربية كلاسيكية للعنوان الرئيسي (بخط النسخ أو الثلث)، لوحة ألوان أكاديمية دافئة (فيروزي عميق + ذهبي + كريم)، وتصميم يدعم اتجاه اليمين إلى اليسار (RTL) بالكامل.\n\nاللغة المطلوبة للبوستر: العربية.",
        "textEn": "Use imgGenTool to create a premium Arabic language educational poster.\n\nTOPIC:\nEducational poster explaining: {{TOPIC}} for {{LEVEL}} level.\n\nCONTENT STRUCTURE (RTL Layout):\n1. RULE TITLE: Ornate heading using classical Arabic calligraphy (Naskh or Thuluth script).\n2. CORE RULE: Clearly stated in classical Arabic.\n3. RULE BREAKDOWN: Visual breakdown of components.\n4. PATTERN/DECLENSION TABLE: Full morphological patterns or declension structures.\n5. EXAMPLES: 10+ examples with detailed grammar analysis (إعراب) underneath each.\n6. EXCEPTIONS: Clearly noted cases.\n7. MEMORY AID: A mnemonic rhyme or visual aid.\n\nDECORATIVE ELEMENTS:\nSubtle Arabesque borders, geometric Islamic patterns, warm academic color palette (deep teal, gold, cream).\n\nLANGUAGE: The final poster language must be Arabic (RTL).",
        "image": "images/Arabic Language/3.png",
        "variables": [
          {"name": "TOPIC", "labelAr": "القاعدة اللغوية", "labelEn": "Language Rule", "placeholderAr": "مثال: الفعل الماضي والمضارع / التذكير والتأنيث", "placeholderEn": "e.g. Past & Present Verbs / Masculine & Feminine"},
          {"name": "LEVEL", "labelAr": "المستوى الدراسي", "labelEn": "Grade Level", "placeholderAr": "مثال: ابتدائي / متوسط / ثانوي", "placeholderEn": "e.g. Primary / Middle / High school"}
        ]
      },
      {
        "id": 4,
        "titleAr": "بوستر مهارات فهم المقروء باللغة العربية",
        "titleEn": "Arabic Reading Comprehension Skills Poster",
        "textAr": "\nالدور:\nمصمم وسائط تعليمية ورسومات لغوية لمهارات فهم المقروء والاستيعاب.\n\nاللوحة:\nبوستر حائطي لتعليم استراتيجيات فهم النصوص، مقاس A4 عمودي بدقة 300 نقطة لكل بوصة، اتجاه RTL بالكامل.\n\nالموضوع:\nدليل لتطبيق مهارات فهم النصوص على نوع نص: {{TEXT_TYPE}} لطلاب المستوى الدراسي: {{LEVEL}}.\n\nأقسام ومكونات البوستر (RTL):\n1. استراتيجيات القراءة الفعّالة: القراءة الاستكشافية السريعة (Skimming) والقراءة المحددة للمعلومات (Scanning) والقراءة الفاحصة العميقة.\n2. كيفية الإجابة على أسئلة الفهم: خطوات استخراج الإجابة وتنسيقها.\n3. مهارات الاستنتاج والتحليل: استنتاج الفكرة الرئيسية ومقاصد الكاتب الضمنية.\n4. بناء المفردات من السياق: استراتيجيات تحديد معاني الكلمات والتركيبات اللغوية الجديدة.\n5. نموذج تطبيقي: نص نموذج مع أسئلة وأجوبة تفصيلية لتوضيح الفهم القرائي العملي.\n\nالأسلوب والجمالية:\nتصميم أكاديمي للكتب المدرسية العربية، خطوط واضحة، وألوان هادئة للتركيز. A4 عمودي 300 DPI.",
        "textEn": "Use imgGenTool to create a premium Arabic reading comprehension skills poster.\n\nTEXT TYPE:\nVisual guide applying reading comprehension strategies to text type: {{TEXT_TYPE}} for {{LEVEL}} level.\n\nARABIC RTL LAYOUT SECTIONS:\n1. EFFECTIVE READING STRATEGIES: Skimming, Scanning, and Intensive reading methods explained.\n2. HOW TO ANSWER COMPREHENSION QUESTIONS: Guidance on locating and formulating responses.\n3. INFERENCE & ANALYSIS SKILLS: Finding main ideas and reader-implicit concepts.\n4. VOCABULARY FROM CONTEXT: Techniques to guess word meanings using surrounding context.\n5. MODEL QUESTION: Sample passage with comprehension questions and answers.\n\nSTYLE:\nPremium Arabic academic textbook aesthetic, highly legible Arabic fonts, clear structured grid, full RTL. A4 portrait, 300 DPI. --ar 2:3",
        "image": "images/Arabic Language/4.png",
        "variables": [
          {"name": "TEXT_TYPE", "labelAr": "نوع النص", "labelEn": "Text Type", "placeholderAr": "مثال: قصة قصيرة / مقالة معلوماتية / نص شعري", "placeholderEn": "e.g. Short story / Informative article / Poem"},
          {"name": "LEVEL", "labelAr": "المستوى الدراسي", "labelEn": "Grade Level", "placeholderAr": "مثال: ابتدائي / متوسط / ثانوي", "placeholderEn": "e.g. Primary / Middle / High school"}
        ]
      },
      {
        "id": 5,
        "titleAr": "بوستر قواعد الإملاء وعلامات الترقيم",
        "titleEn": "Arabic Spelling & Dictation Rules Poster",
        "textAr": "\nالدور:\nمصمم وسائل تعليمية لغوية وبوسترات قواعد الإملاء والكتابة السليمة.\n\nاللوحة:\nبوستر حائطي تعليمي لقواعد الإملاء وعلامات الترقيم، مقاس A4 عمودي بدقة 300 نقطة لكل بوصة، اتجاه كتابة من اليمين لليسار (RTL) بالكامل.\n\nالموضوع:\nتبسيط وتوضيح قاعدة: {{TOPIC}} لطلاب المستوى: {{LEVEL}}.\n\nأقسام ومكونات البوستر (RTL):\n1. القاعدة الإملائية: صياغة وشرح القاعدة بلغة فصيحة ومبسطة.\n2. متى تكتب كذا: الحالات والظروف التي تطبق فيها القاعدة إملائياً.\n3. أمثلة صحيحة وخاطئة: مقارنة الكلمات الصحيحة (بالأخضر) والخاطئة (بالأحمر) مع بيان السبب.\n4. خمسة أخطاء شائعة: الأخطاء الشائعة لدى الطلاب وطرق تصويبها.\n5. أداة حفظ: وسيلة بصرية للتذكر وتثبيت القاعدة الإملائية.\n\nالأسلوب والجمالية:\nطراز أكاديمي عربي كلاسيكي، خطوط واضحة، ألوان متباينة تسهل التمييز البصري. A4 عمودي 300 DPI.",
        "textEn": "Use imgGenTool to create a premium Arabic spelling and dictation rules poster.\n\nTOPIC:\nSpelling rules poster explaining: {{TOPIC}} for {{LEVEL}} level.\n\nARABIC RTL LAYOUT SECTIONS:\n1. SPELLING RULE: Clearly stated and simplified spelling rule.\n2. APPLICATION GUIDE: Detailed cases of how to write correctly.\n3. CORRECT VS INCORRECT TABLE: Comparing correct words (green) vs incorrect (red) with reasoning.\n4. FIVE COMMON ERRORS: Top student mistakes with corrections.\n5. MEMORY AID: Mnemonic device to remember the rule.\n\nSTYLE:\nPremium academic Arabic classical style, highly legible spelling fonts, full RTL. A4 portrait, 300 DPI. --ar 2:3",
        "image": "images/Arabic Language/5.png",
        "variables": [
          {"name": "TOPIC", "labelAr": "القاعدة الإملائية", "labelEn": "Spelling Topic", "placeholderAr": "مثال: الهمزة المتوسطة والمنفردة / التاء المربوطة والمفتوحة", "placeholderEn": "e.g. Middle & End Hamzas / Ta Marbouta & Maftouha"},
          {"name": "LEVEL", "labelAr": "المستوى الدراسي", "labelEn": "Grade Level", "placeholderAr": "مثال: ابتدائي / متوسط / ثانوي", "placeholderEn": "e.g. Primary / Middle / High school"}
        ]
      },
      {
        "id": 6,
        "titleAr": "السبورة التعليمية الأنيقة لشرح الدروس والمسائل (9:16)",
        "titleEn": "Elegant Classroom Board Lesson Infographic (9:16)",
        "textAr": "\nالدور:\nمصمم وسائط تعليمية ورقمية لتبسيط وشرح المسائل والدروس التفاعلية.\n\nاللوحة:\nإنفوجرافيك سبورة تعليمية بنسبة عرض إلى ارتفاع عمودية 9:16 (مثالية للهواتف الذكية وعروض المعلمين).\n\nالموضوع:\nشرح وتلخيص درس أو مسألة: {{TOPIC_TITLE}} الذي يحتوي على: {{CONTENT}} بأسلوب السبورة الصفية المدرسية.\n\nالأسلوب والتصميم:\nسبورة مدرسية داكنة بلون أخضر داكن أو كحلي أو أسود، مكتوب عليها بخطوط تعليمية أنيقة تشبه كتابة اليد بالطباشير باللون الأبيض والأصفر والتركواز والذهبي. معادلات ونصوص مصطفة بدقة فائقة مع إطارات ملونة ودوائر حول المصطلحات الهامة.\n\nتخطيط اللوحة (Layout):\n- عنوان الدرس والمسألة في الأعلى ببنط بارز وتصميم مستوحى من الخط العربي الكلاسيكي.\n- المحتوى مقسم إلى أقسام واضحة للغاية يسهل تتبعها.\n- استخدام فواصل أنيقة، أسهم إرشادية، ومخططات لتوجيه الانتباه.\n- إجابة نهائية أو خلاصة القاعدة في أسفل السبورة داخل إطار طباشيري مميز.\n\nالمتطلبات الهامة:\nيجب أن يكون النص واضحاً ومقروءاً تماماً بدون تفاصيل مشوهة أو أحرف متداخلة لتبدو سبورة حقيقية ومحفزة على التعلم. اللغة المطلوبة: {{LANGUAGE}}.",
        "textEn": "Create a 9:16 elegant educational classroom board infographic.\n\nTOPIC:\nStep-by-step chalkboard explanation of topic: {{TOPIC_TITLE}} with details: {{CONTENT}}.\n\nSTYLE:\nDeep green, navy, or black board background with clean, high-precision hand-drawn chalk writing (white, yellow, turquoise, and gold). Neatly structured text and equations with circles, arrows, and highlighted terms.\n\nLAYOUT:\nTitle at the top, main content arranged in clear sections, elegant dividers and arrows for guidance, final lesson summary at the bottom in a highlighted box.\n\nLANGUAGE: The final poster language must be {{LANGUAGE}}.",
        "image": "images/Arabic Language/6.png",
        "variables": [
          {"name": "TOPIC_TITLE", "labelAr": "عنوان الدرس أو المسألة", "labelEn": "Lesson Topic Title", "placeholderAr": "مثال: شرح الجملة الفعلية / حل مسألة النسبة والتناسب", "placeholderEn": "e.g. Verbal Sentence Explanation / Ratio and Proportion"},
          {"name": "CONTENT", "labelAr": "محتوى الشرح والخطوات بالتفصيل", "labelEn": "Lesson Content details", "placeholderAr": "مثال: اكتب خطوات الشرح أو القاعدة المراد كتابتها على السبورة", "placeholderEn": "e.g. Write down the explanation steps or text to display on the board"},
          {"name": "LANGUAGE", "labelAr": "لغة الشرح", "labelEn": "Explanation Language", "placeholderAr": "مثال: العربية / English", "placeholderEn": "e.g. Arabic / English"}
        ]
      }
    ]
  },
  {
      "id": "english",
      "category": "languages",
      "titleAr": "اللغة الإنجليزية",
      "titleEn": "English Language",
      "descAr": "أدوات متميزة لتصميم إنفوجرافيك القواعد والمحادثات وقصص بيكسار وبطاقات الكلمات والتحضير للاختبارات",
      "descEn": "Premium tools to design grammar infographics, role-plays, Pixar comic strips, vocabulary grids, and exam preparation guides",
      "icon": "🇬🇧",
      "colorClass": "card-english",
      "prompts": [
          {
              "id": 1,
              "titleAr": "محقق القواعد اللغوية (ثلاثي الأبعاد)",
              "titleEn": "Grammar Detective (Pixar 3D)",
              "textAr": "L19 — Grammar Detective | Pixar Storybook Dynamic Detective System v2.0. Canvas: portrait A4 educational poster. Style: Pixar Storybook 3D illustration with rich saturated colors, soft volumetric lighting. Include ONE main detective character (girl, boy, or teacher) actively investigating a sentence. Environment: Classroom, library, or futuristic lab (zero readable text on surfaces). Layout: Upper area features the character and rule title. Central area shows the 'Problem Sentence' with the 'Highlight Target' glowing red. Lower area features corrected sentence and explanation in clean blocks. DATA BLOCK: Style Variant: Pixar Storybook; Main Title: Grammar Detective; Subject Name: English; Grammar Rule Title: {{RULE_TITLE}}; Problem Sentence: {{PROBLEM_SENTENCE}}; Correct Sentence: {{CORRECT_SENTENCE}}; Rule Explanation: {{EXPLANATION}}; Highlight Target: {{ERROR_WORD}}; Language Direction: Left-to-right.",
              "textEn": "L19 — Grammar Detective | Pixar Storybook Dynamic Detective System v2.0. Canvas: portrait A4 educational poster. Style: Pixar Storybook 3D illustration with rich saturated colors, soft volumetric lighting. Include ONE main detective character (girl, boy, or teacher) actively investigating a sentence. Environment: Classroom, library, or futuristic lab (zero readable text on surfaces). Layout: Upper area features the character and rule title. Central area shows the 'Problem Sentence' with the 'Highlight Target' glowing red. Lower area features corrected sentence and explanation in clean blocks. DATA BLOCK: Style Variant: Pixar Storybook; Main Title: Grammar Detective; Subject Name: English; Grammar Rule Title: {{RULE_TITLE}}; Problem Sentence: {{PROBLEM_SENTENCE}}; Correct Sentence: {{CORRECT_SENTENCE}}; Rule Explanation: {{EXPLANATION}}; Highlight Target: {{ERROR_WORD}}; Language Direction: Left-to-right.",
              "image": "images/english/1.png",
              "variables": [
                  {
                      "name": "RULE_TITLE",
                      "labelAr": "عنوان القاعدة",
                      "labelEn": "Grammar Rule Title",
                      "placeholderAr": "مثال: Subject-Verb Agreement",
                      "placeholderEn": "e.g. Subject-Verb Agreement"
                  },
                  {
                      "name": "PROBLEM_SENTENCE",
                      "labelAr": "الجملة الخاطئة",
                      "labelEn": "Problem Sentence",
                      "placeholderAr": "مثال: The dogs runs fast.",
                      "placeholderEn": "e.g. The dogs runs fast."
                  },
                  {
                      "name": "CORRECT_SENTENCE",
                      "labelAr": "الجملة الصحيحة",
                      "labelEn": "Correct Sentence",
                      "placeholderAr": "مثال: The dogs run fast.",
                      "placeholderEn": "e.g. The dogs run fast."
                  },
                  {
                      "name": "EXPLANATION",
                      "labelAr": "توضيح وشرح القاعدة",
                      "labelEn": "Rule Explanation",
                      "placeholderAr": "مثال: Plural subjects take plural verbs.",
                      "placeholderEn": "e.g. Plural subjects take plural verbs."
                  },
                  {
                      "name": "ERROR_WORD",
                      "labelAr": "الكلمة الخاطئة لتظليلها",
                      "labelEn": "Highlight Target",
                      "placeholderAr": "مثال: runs",
                      "placeholderEn": "e.g. runs"
                  }
              ]
          },
          {
              "id": 2,
              "titleAr": "شريط قصصي تعليمي كرتوني (2x3)",
              "titleEn": "Pixar 3D Educational Comic Strip (2x3)",
              "textAr": "Generate a 9:16 vertical Pixar 3D educational comic strip poster. Style: Photorealistic Pixar render, expressive faces. Layout: 2x3 grid (2 columns x 3 rows). Title bar at the top. Two consistent characters throughout all 6 panels. Each panel features ONE speech bubble with the provided dialogue. Environment: Consistent setting (e.g., airport, restaurant, doctor's office). SITUATION: {{SITUATION_TITLE}}. CHARACTER 1 (Staff): {{CHAR1_DESC}}. CHARACTER 2 (Student): {{CHAR2_DESC}}. DIALOGUE: Panel 1: {{P1_TEXT}}; Panel 2: {{P2_TEXT}}; Panel 3: {{P3_TEXT}}; Panel 4: {{P4_TEXT}}; Panel 5: {{P5_TEXT}}; Panel 6: {{P6_TEXT}}. Use only the exact phrases provided.",
              "textEn": "Generate a 9:16 vertical Pixar 3D educational comic strip poster. Style: Photorealistic Pixar render, expressive faces. Layout: 2x3 grid (2 columns x 3 rows). Title bar at the top. Two consistent characters throughout all 6 panels. Each panel features ONE speech bubble with the provided dialogue. Environment: Consistent setting (e.g., airport, restaurant, doctor's office). SITUATION: {{SITUATION_TITLE}}. CHARACTER 1 (Staff): {{CHAR1_DESC}}. CHARACTER 2 (Student): {{CHAR2_DESC}}. DIALOGUE: Panel 1: {{P1_TEXT}}; Panel 2: {{P2_TEXT}}; Panel 3: {{P3_TEXT}}; Panel 4: {{P4_TEXT}}; Panel 5: {{P5_TEXT}}; Panel 6: {{P6_TEXT}}. Use only the exact phrases provided.",
              "image": "images/english/2.png",
              "variables": [
                  {
                      "name": "SITUATION_TITLE",
                      "labelAr": "عنوان الموقف الحواري",
                      "labelEn": "Situation Title",
                      "placeholderAr": "مثال: Asking for directions",
                      "placeholderEn": "e.g. Asking for directions"
                  },
                  {
                      "name": "CHAR1_DESC",
                      "labelAr": "وصف الشخصية الأولى (الموظف)",
                      "labelEn": "Character 1 Description",
                      "placeholderAr": "مثال: A helpful police officer",
                      "placeholderEn": "e.g. A helpful police officer"
                  },
                  {
                      "name": "CHAR2_DESC",
                      "labelAr": "وصف الشخصية الثانية (الطالب)",
                      "labelEn": "Character 2 Description",
                      "placeholderAr": "مثال: A lost tourist student",
                      "placeholderEn": "e.g. A lost tourist student"
                  },
                  {
                      "name": "P1_TEXT",
                      "labelAr": "حوار اللوحة الأولى",
                      "labelEn": "Panel 1 Dialogue",
                      "placeholderAr": "مثال: Hello, can you help me?",
                      "placeholderEn": "e.g. Hello, can you help me?"
                  },
                  {
                      "name": "P2_TEXT",
                      "labelAr": "حوار اللوحة الثانية",
                      "labelEn": "Panel 2 Dialogue",
                      "placeholderAr": "مثال: Sure, where do you want to go?",
                      "placeholderEn": "e.g. Sure, where do you want to go?"
                  },
                  {
                      "name": "P3_TEXT",
                      "labelAr": "حوار اللوحة الثالثة",
                      "labelEn": "Panel 3 Dialogue",
                      "placeholderAr": "مثال: I am looking for the library.",
                      "placeholderEn": "e.g. I am looking for the library."
                  },
                  {
                      "name": "P4_TEXT",
                      "labelAr": "حوار اللوحة الرابعة",
                      "labelEn": "Panel 4 Dialogue",
                      "placeholderAr": "مثال: Go straight, then turn right.",
                      "placeholderEn": "e.g. Go straight, then turn right."
                  },
                  {
                      "name": "P5_TEXT",
                      "labelAr": "حوار اللوحة الخامسة",
                      "labelEn": "Panel 5 Dialogue",
                      "placeholderAr": "مثال: Thank you very much!",
                      "placeholderEn": "e.g. Thank you very much!"
                  },
                  {
                      "name": "P6_TEXT",
                      "labelAr": "حوار اللوحة السادسة",
                      "labelEn": "Panel 6 Dialogue",
                      "placeholderAr": "مثال: You are welcome, have a nice day!",
                      "placeholderEn": "e.g. You are welcome, have a nice day!"
                  }
              ]
          },
          {
              "id": 3,
              "titleAr": "سينما المصطلحات المجازية (حرفي ضد حقيقي)",
              "titleEn": "Idiom Cinema (Literal vs Real Meaning)",
              "textAr": "Idiom Cinema. Format: 9:16 vertical portrait, 8K resolution. Visual Structure: Split-screen composition. Top Panel: Depict the 'Literal Meaning' of the idiom [{{IDIOM}}] in a funny, exaggerated 3D way. Bottom Panel: Depict the 'Real Meaning' in a practical context. Character: A 3D expressive cartoon kid with Pixar-like emotions. Style: Candy Pop, bright lighting, bold outlines, vivid rainbow colors, high-energy.",
              "textEn": "Idiom Cinema. Format: 9:16 vertical portrait, 8K resolution. Visual Structure: Split-screen composition. Top Panel: Depict the 'Literal Meaning' of the idiom [{{IDIOM}}] in a funny, exaggerated 3D way. Bottom Panel: Depict the 'Real Meaning' in a practical context. Character: A 3D expressive cartoon kid with Pixar-like emotions. Style: Candy Pop, bright lighting, bold outlines, vivid rainbow colors, high-energy.",
              "image": "images/english/3.png",
              "variables": [
                  {
                      "name": "IDIOM",
                      "labelAr": "المصطلح المجازي (Idiom)",
                      "labelEn": "Idiom",
                      "placeholderAr": "مثال: Piece of cake",
                      "placeholderEn": "e.g. Piece of cake"
                  }
              ]
          },
          {
              "id": 4,
              "titleAr": "إنفوجرافيك مهارات التحدث الأكاديمي (ESL)",
              "titleEn": "ESL Speaking Framework Infographic",
              "textAr": "{\"\nprompt_type\":\"ESL_Visual_Infographic\",\"topic\":\"Speaking\n Framework for {{CEFR_LEVEL}} — {{SKILL_FOCUS}}\",\"visual_design\":\"3D \nGlassmorphism\n frames, warm classroom palette\",\"\ncontent_structure\n\":{\"\nheader\":\"Lesson\n title + CEFR \nbadge\",\"fluency_vs_accuracy\":\"Visual\n comparison with examples\",\"interaction_strategies\":\"5 key phrases for discussion\",\"question_formation\":\"\nWh\n- questions, Yes/No, Tag questions with \nexamples\",\"self_correction\":\"Natural\n repair strategies\",\"classroom_phrases\":\"15 must-know expressions\"},\"references\":[\"Cambridge \nEnglish\",\"Oxford\n \nELT\",\"British\n Council\"],\"ratio\":\"A4\"}",
              "textEn": "{\"\nprompt_type\":\"ESL_Visual_Infographic\",\"topic\":\"Speaking\n Framework for {{CEFR_LEVEL}} — {{SKILL_FOCUS}}\",\"visual_design\":\"3D \nGlassmorphism\n frames, warm classroom palette\",\"\ncontent_structure\n\":{\"\nheader\":\"Lesson\n title + CEFR \nbadge\",\"fluency_vs_accuracy\":\"Visual\n comparison with examples\",\"interaction_strategies\":\"5 key phrases for discussion\",\"question_formation\":\"\nWh\n- questions, Yes/No, Tag questions with \nexamples\",\"self_correction\":\"Natural\n repair strategies\",\"classroom_phrases\":\"15 must-know expressions\"},\"references\":[\"Cambridge \nEnglish\",\"Oxford\n \nELT\",\"British\n Council\"],\"ratio\":\"A4\"}",
              "image": "images/english/4.png",
              "variables": [
                  {
                      "name": "CEFR_LEVEL",
                      "labelAr": "مستوى اللغة (CEFR)",
                      "labelEn": "CEFR Level",
                      "placeholderAr": "مثال: B2 Upper-Intermediate",
                      "placeholderEn": "e.g. B2 Upper-Intermediate"
                  },
                  {
                      "name": "SKILL_FOCUS",
                      "labelAr": "مهارة التحدث المستهدفة",
                      "labelEn": "Speaking Skill Focus",
                      "placeholderAr": "مثال: Expressing Opinions",
                      "placeholderEn": "e.g. Expressing Opinions"
                  }
              ]
          },
          {
              "id": 5,
              "titleAr": "مدينة التعلم المصغرة (شرح درس)",
              "titleEn": "Miniature Learning City Lesson Infographic",
              "textAr": "SYSTEM ROLE: Elite AI educational infographic engine. MISSION: Generate ONE final 9:16 vertical ultra-HD classroom infographic. TOPIC: {{LESSON_TOPIC}}. SUBJECT: {{SUBJECT}}. STYLE: Nano Banana PRO, Morphic Glass Plus, Pixar-style 3D educational city, bright blended colors, premium readability. MAIN CONCEPT: Turn the lesson into a 'Mini Learning City' where each building teaches one part. LAYOUT: Top: title banner like a city sign. Middle: city view with 5–6 labeled buildings (Rule Tower, Formula Building, Example Café, Use Center, Mistake Clinic, Practice Station). Bottom: city square summary area. VISUAL RULES: Distinct buildings clearly labeled, roads, signs, crosswalks, glass panels integrated into architecture. One small Pixar-style student or teacher walking through. STRICT RULES: No cluttered skyline, no dark urban background, no tiny street labels, keep each building educational and easy to scan.",
              "textEn": "SYSTEM ROLE: Elite AI educational infographic engine. MISSION: Generate ONE final 9:16 vertical ultra-HD classroom infographic. TOPIC: {{LESSON_TOPIC}}. SUBJECT: {{SUBJECT}}. STYLE: Nano Banana PRO, Morphic Glass Plus, Pixar-style 3D educational city, bright blended colors, premium readability. MAIN CONCEPT: Turn the lesson into a 'Mini Learning City' where each building teaches one part. LAYOUT: Top: title banner like a city sign. Middle: city view with 5–6 labeled buildings (Rule Tower, Formula Building, Example Café, Use Center, Mistake Clinic, Practice Station). Bottom: city square summary area. VISUAL RULES: Distinct buildings clearly labeled, roads, signs, crosswalks, glass panels integrated into architecture. One small Pixar-style student or teacher walking through. STRICT RULES: No cluttered skyline, no dark urban background, no tiny street labels, keep each building educational and easy to scan.",
              "image": "images/english/5.png",
              "variables": [
                  {
                      "name": "LESSON_TOPIC",
                      "labelAr": "موضوع الدرس",
                      "labelEn": "Lesson Topic",
                      "placeholderAr": "مثال: Pronouns / Prepositions",
                      "placeholderEn": "e.g. Pronouns / Prepositions"
                  },
                  {
                      "name": "SUBJECT",
                      "labelAr": "اسم المادة",
                      "labelEn": "Subject Name",
                      "placeholderAr": "مثال: English Grammar",
                      "placeholderEn": "e.g. English Grammar"
                  }
              ]
          },
          {
              "id": 6,
              "titleAr": "ملصق استراتيجيات القراءة للطلاب (EFL)",
              "titleEn": "Classroom Reading Strategies Poster",
              "textAr": "Create a classroom reading strategies poster for EFL students at {{CEFR_LEVEL}} level. Include 5 strategies: Skimming (finding gist), Scanning (finding specifics), Intensive Reading (detailed analysis), Extensive Reading (pleasure/fluency), SQ3R (Survey, Question, Read, Recite, Review). Each strategy: clear icon, one-line definition, when to use, step-by-step technique. Style: A4 vertical, teal/warm orange palette, clean educational design, Cambridge/Oxford aesthetic. Arabic and English labels.",
              "textEn": "Create a classroom reading strategies poster for EFL students at {{CEFR_LEVEL}} level. Include 5 strategies: Skimming (finding gist), Scanning (finding specifics), Intensive Reading (detailed analysis), Extensive Reading (pleasure/fluency), SQ3R (Survey, Question, Read, Recite, Review). Each strategy: clear icon, one-line definition, when to use, step-by-step technique. Style: A4 vertical, teal/warm orange palette, clean educational design, Cambridge/Oxford aesthetic. Arabic and English labels.",
              "image": "images/english/6.png",
              "variables": [
                  {
                      "name": "CEFR_LEVEL",
                      "labelAr": "مستوى اللغة المستهدف (CEFR)",
                      "labelEn": "Target CEFR Level",
                      "placeholderAr": "مثال: B1 / B2",
                      "placeholderEn": "e.g. B1 / B2"
                  }
              ]
          },
          {
              "id": 7,
              "titleAr": "مخطط خط الزمن للأزمنة الـ 12 بالإنجليزية",
              "titleEn": "Bilingual English Tenses Timeline Chart",
              "textAr": "Create a comprehensive English tenses visual reference chart showing all 12 tenses on a timeline. For each tense: tense name (English + Arabic), formula structure, (+) positive / (-) negative / (?) question forms, time expressions (always/usually/now/since/for/by), natural example sentence. Color-code by family: Simple (blue), Continuous (orange), Perfect (green), Perfect Continuous (purple). A4 landscape, bilingual English/Arabic, clean grid layout, classroom reference quality. Cambridge grammar references.",
              "textEn": "Create a comprehensive English tenses visual reference chart showing all 12 tenses on a timeline. For each tense: tense name (English + Arabic), formula structure, (+) positive / (-) negative / (?) question forms, time expressions (always/usually/now/since/for/by), natural example sentence. Color-code by family: Simple (blue), Continuous (orange), Perfect (green), Perfect Continuous (purple). A4 landscape, bilingual English/Arabic, clean grid layout, classroom reference quality. Cambridge grammar references.",
              "image": "images/english/7.png",
              "variables": []
          },
          {
              "id": 8,
              "titleAr": "ملصق التحضير لآيلتس وتوفل (IELTS/TOEFL)",
              "titleEn": "IELTS/TOEFL Exam Skills Prep Poster",
              "textAr": "Use \nimgGenTool\n to create an IELTS/TOEFL skills preparation poster.\nExam: {{EXAM — IELTS Academic / IELTS General / TOEFL \niBT\n}}\nSkill: {{SKILL — Writing Task 1 / Writing Task 2 / Speaking Part 2 / Reading Strategies / Listening Tips}}\nLevel: {{Band 6-7 target / Band 7-8 target / Band 8+ target}}\nPoster sections:\n1. TASK OVERVIEW — what the examiner is looking for\n2. STRUCTURE TEMPLATE — exact format to follow\n3. BAND SCORE CRITERIA — what separates Band 6 / 7 / 8\n4. SAMPLE ANSWER BREAKDOWN — annotated model answer\n5. COMMON MISTAKES — top 5 errors to avoid\n6. TIME MANAGEMENT — how to allocate minutes\n7. VOCABULARY BOOST — 10 high-scoring phrases\nReferences: IELTS.org, ETS official guides, Cambridge IELTS books.\nStyle: Academic clean, IELTS-appropriate professional design, A4 portrait 300 DPI. --\nar\n 2:3",
              "textEn": "Use \nimgGenTool\n to create an IELTS/TOEFL skills preparation poster.\nExam: {{EXAM — IELTS Academic / IELTS General / TOEFL \niBT\n}}\nSkill: {{SKILL — Writing Task 1 / Writing Task 2 / Speaking Part 2 / Reading Strategies / Listening Tips}}\nLevel: {{Band 6-7 target / Band 7-8 target / Band 8+ target}}\nPoster sections:\n1. TASK OVERVIEW — what the examiner is looking for\n2. STRUCTURE TEMPLATE — exact format to follow\n3. BAND SCORE CRITERIA — what separates Band 6 / 7 / 8\n4. SAMPLE ANSWER BREAKDOWN — annotated model answer\n5. COMMON MISTAKES — top 5 errors to avoid\n6. TIME MANAGEMENT — how to allocate minutes\n7. VOCABULARY BOOST — 10 high-scoring phrases\nReferences: IELTS.org, ETS official guides, Cambridge IELTS books.\nStyle: Academic clean, IELTS-appropriate professional design, A4 portrait 300 DPI. --\nar\n 2:3",
              "image": "images/english/8.png",
              "variables": [
                  {
                      "name": "EXAM",
                      "labelAr": "نوع الاختبار",
                      "labelEn": "Exam Name",
                      "placeholderAr": "مثال: IELTS Academic / TOEFL iBT",
                      "placeholderEn": "e.g. IELTS Academic / TOEFL iBT"
                  },
                  {
                      "name": "SKILL",
                      "labelAr": "المهارة المستهدفة",
                      "labelEn": "Exam Skill Focus",
                      "placeholderAr": "مثال: Writing Task 2 / Speaking Part 2",
                      "placeholderEn": "e.g. Writing Task 2 / Speaking Part 2"
                  },
                  {
                      "name": "LEVEL",
                      "labelAr": "الدرجة المستهدفة",
                      "labelEn": "Target Score/Band",
                      "placeholderAr": "مثال: Band 7.5 target / Band 8+ target",
                      "placeholderEn": "e.g. Band 7.5 target / Band 8+ target"
                  }
              ]
          },
          {
              "id": 9,
              "titleAr": "سبورة الأورورا الزجاجية المضيئة (المضارع البسيط)",
              "titleEn": "Present Simple Aurora Glass Board",
              "textAr": "Generate ONE 9:16 educational infographic titled 'Present Simple'. Create an aurora morphic glass classroom board with aqua, mint, soft yellow glow, and deep teal background. Use a large transparent glass board in the center with glowing handwritten-style typography. Support English and Arabic content clearly, either as English lines with Arabic explanation underneath or as balanced bilingual sections. Include: meaning, usage, affirmative form, examples, negative form, question form, and keywords. Add arrows, circles, underlines, and soft glow highlights. Place a small friendly teacher character in one top corner only. The board should look like a teacher is writing live on glass. Keep the layout readable, premium, and mobile-friendly.",
              "textEn": "Generate ONE 9:16 educational infographic titled 'Present Simple'. Create an aurora morphic glass classroom board with aqua, mint, soft yellow glow, and deep teal background. Use a large transparent glass board in the center with glowing handwritten-style typography. Support English and Arabic content clearly, either as English lines with Arabic explanation underneath or as balanced bilingual sections. Include: meaning, usage, affirmative form, examples, negative form, question form, and keywords. Add arrows, circles, underlines, and soft glow highlights. Place a small friendly teacher character in one top corner only. The board should look like a teacher is writing live on glass. Keep the layout readable, premium, and mobile-friendly.",
              "image": "images/english/9.png",
              "variables": []
          },
          {
              "id": 10,
              "titleAr": "سبورة الجليد الفضية المودرن (المضارع البسيط)",
              "titleEn": "Present Simple Ice Silver Glass Board",
              "textAr": "Generate ONE 9:16 educational infographic titled 'Present Simple'. Use an ice silver morphic glass board style with frosted glass, pale blue, silver, white highlights, and a clean modern classroom-tech mood. Divide the central board into four clear zones: Rule, Examples, Negative, and Questions. Add a small keyword strip at the bottom. Support Arabic and English typography with strong readability. Use thin glowing dividers, clean arrows, checkmarks, and subtle reflections. Make the grammar formulas large and easy to understand.",
              "textEn": "Generate ONE 9:16 educational infographic titled 'Present Simple'. Use an ice silver morphic glass board style with frosted glass, pale blue, silver, white highlights, and a clean modern classroom-tech mood. Divide the central board into four clear zones: Rule, Examples, Negative, and Questions. Add a small keyword strip at the bottom. Support Arabic and English typography with strong readability. Use thin glowing dividers, clean arrows, checkmarks, and subtle reflections. Make the grammar formulas large and easy to understand.",
              "image": "images/english/10.png",
              "variables": []
          },
          {
              "id": 11,
              "titleAr": "سبورة السايبر الكونية التفاعلية (المضارع البسيط)",
              "titleEn": "Present Simple Lavender Cyber Glass Board",
              "textAr": "Generate ONE 9:16 infographic titled 'Present Simple'. Create a lavender cyber morphic glass classroom board using lavender, neon pink, soft purple, and dark violet tones. The mood should be playful, futuristic, and student-friendly. Use one central glowing glass board with colorful handwritten notes. Include English grammar rules with Arabic support text. Add sections for usage, examples, negative, questions, and keywords. Surround the board with small neon \nkeyword labels such as always, usually, often, sometimes, never, and every day. Add a small Pixar-style student or teacher mascot, but keep the lesson board dominant.",
              "textEn": "Generate ONE 9:16 infographic titled 'Present Simple'. Create a lavender cyber morphic glass classroom board using lavender, neon pink, soft purple, and dark violet tones. The mood should be playful, futuristic, and student-friendly. Use one central glowing glass board with colorful handwritten notes. Include English grammar rules with Arabic support text. Add sections for usage, examples, negative, questions, and keywords. Surround the board with small neon \nkeyword labels such as always, usually, often, sometimes, never, and every day. Add a small Pixar-style student or teacher mascot, but keep the lesson board dominant.",
              "image": "images/english/11.png",
              "variables": []
          },
          {
              "id": 12,
              "titleAr": "السبورة الملكية الزرقاء بالذهبي (المضارع البسيط)",
              "titleEn": "Present Simple Royal Blue & Gold Glass Board",
              "textAr": "Generate ONE 9:16 premium educational infographic titled 'Present Simple'. Use a royal blue and gold morphic glass style with elegant translucent panels and luxury classroom lighting. Create one large central glass board with gold-highlighted grammar formulas. Include bilingual English and Arabic explanation sections: meaning, use, affirmative, negative, questions, examples, and keywords. Use elegant dividers, glowing gold underlines, and refined handwritten typography. Keep the design high-end, clean, and suitable for a paid English course.",
              "textEn": "Generate ONE 9:16 premium educational infographic titled 'Present Simple'. Use a royal blue and gold morphic glass style with elegant translucent panels and luxury classroom lighting. Create one large central glass board with gold-highlighted grammar formulas. Include bilingual English and Arabic explanation sections: meaning, use, affirmative, negative, questions, examples, and keywords. Use elegant dividers, glowing gold underlines, and refined handwritten typography. Keep the design high-end, clean, and suitable for a paid English course.",
              "image": "images/english/12.png",
              "variables": []
          },
          {
              "id": 13,
              "titleAr": "سبورة الطبيعة السائلة المضيئة (المضارع البسيط)",
              "titleEn": "Present Simple Liquid Morphic Glass Board",
              "textAr": "Generate ONE 9:16 educational infographic titled 'Present Simple'. Use a nature-inspired liquid morphic glass style with green, aqua, mist white, and deep blue tones. The central board should look like translucent liquid glass. Explain the lesson calmly and clearly with bilingual English and Arabic support. Include: when we use Present Simple, affirmative form, negative form, question form, examples, and keywords. Use organic arrows, soft highlights, gentle curved lines, and small nature-inspired educational icons. Add a tiny teacher character only if it does not reduce readability.",
              "textEn": "Generate ONE 9:16 educational infographic titled 'Present Simple'. Use a nature-inspired liquid morphic glass style with green, aqua, mist white, and deep blue tones. The central board should look like translucent liquid glass. Explain the lesson calmly and clearly with bilingual English and Arabic support. Include: when we use Present Simple, affirmative form, negative form, question form, examples, and keywords. Use organic arrows, soft highlights, gentle curved lines, and small nature-inspired educational icons. Add a tiny teacher character only if it does not reduce readability.",
              "image": "images/english/13.png",
              "variables": []
          },
          {
              "id": 14,
              "titleAr": "سبورة الألوان المائية الكلاسيكية (المضارع البسيط)",
              "titleEn": "Present Simple Watercolor Classroom Board",
              "textAr": "Generate ONE 9:16 educational infographic titled 'Present Simple'. Use a soft watercolor classroom background with a painted board texture. The style should feel handmade, calm, and teacher-created. Place one large board in the center. Write the lesson progressively from top to bottom. Include English explanation with Arabic translation or Arabic support notes. Add sections for rule, examples, negative, questions, and keywords. Use watercolor arrows, pastel highlights, brush circles, and a small hand-painted teacher illustration beside the board. Make all Arabic text clean, readable, and right-to-left correct.",
              "textEn": "Generate ONE 9:16 educational infographic titled 'Present Simple'. Use a soft watercolor classroom background with a painted board texture. The style should feel handmade, calm, and teacher-created. Place one large board in the center. Write the lesson progressively from top to bottom. Include English explanation with Arabic translation or Arabic support notes. Add sections for rule, examples, negative, questions, and keywords. Use watercolor arrows, pastel highlights, brush circles, and a small hand-painted teacher illustration beside the board. Make all Arabic text clean, readable, and right-to-left correct.",
              "image": "images/english/14.png",
              "variables": []
          },
          {
              "id": 15,
              "titleAr": "سبورة دفتر الملاحظات الورقية (المضارع البسيط)",
              "titleEn": "Present Simple Watercolor Notebook Board",
              "textAr": "Generate ONE 9:16 infographic titled 'Present Simple'. Create a watercolor notebook-style lesson board with torn edges, hand-drawn diagrams, and soft pastel colors. Include bilingual English/Arabic explanation for the Present Simple tense: meaning, rules, examples, and keywords. Add small watercolor stationery icons around the board.",
              "textEn": "Generate ONE 9:16 infographic titled 'Present Simple'. Create a watercolor notebook-style lesson board with torn edges, hand-drawn diagrams, and soft pastel colors. Include bilingual English/Arabic explanation for the Present Simple tense: meaning, rules, examples, and keywords. Add small watercolor stationery icons around the board.",
              "image": "images/english/15.png",
              "variables": []
          },
          {
              "id": 16,
              "titleAr": "إنفوجرافيك قواعد اللغة الإنجليزية التكيفي",
              "titleEn": "Adaptive English Language Rules Infographic",
              "textAr": "Use \nimgGenTool\n to create a premium English language educational infographic.\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nFILL THESE FIELDS ONLY\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nTOPIC:    {{ANY ENGLISH TOPIC — e.g. Present Perfect Tense / Reported Speech / Passive Voice / Modal Verbs / Conditionals / Collocations / Phrasal Verbs / Punctuation / Parts of Speech}}\nLEVEL:    {{A1 / A2 / B1 / B2 / C1 / C2 — CEFR}}\nSKILL:    {{Grammar / Vocabulary / Reading / Writing / Speaking / Listening}}\nGRADE:    {{Primary / Middle / High school / University / Adult learners}}\nLANGUAGE: {{English only / Bilingual EN+AR}}\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nAUTO-ADAPTIVE DESIGN ENGINE:\nBased on LEVEL, auto-apply visual density and complexity:\n• A1–A2 → Large icons, simple sentences, color-coded, lots of visuals, minimal text\n• B1–B2 → Balanced text/visuals, example tables, comparison boxes\n• C1–C2 → Academic density, nuanced examples, corpus-based usage notes\nBased on SKILL, auto-select layout:\n• Grammar → Rule box + form table + timeline/diagram + examples + error correction\n• Vocabulary → Word cards grid + IPA + collocations + register indicators\n• Writing → Structure diagram + model text annotated + transition words bank\n• Speaking → Conversation flowchart + useful phrases + pronunciation tips\nCONTENT BLOCKS:\n📌\n RULE / CONCEPT BOX (top — always):\n• Clear rule statement in simple English\n• When to use it / when NOT to use it\n• Level badge (CEFR A1–C2)\n📊\n FORM TABLE:\n• Positive / Negative / Question forms\n• Short answers if applicable\n• Any irregular forms highlighted in red\n🔤\n STRUCTURE FORMULA:\n• Visual formula: Subject + Verb (past participle) + Object\n• Color-coded: green=subject, blue=verb, orange=object/complement\n✍\n️ EXAMPLE BANK (10 examples minimum):\n• Graded from simple → complex\n• Authentic, natural-sounding sentences\n• Arabic translation if bilingual selected\n• Common errors crossed out with correction shown\n🎯\n USAGE NOTES:\n• British vs American English differences (if any)\n• Formal vs informal register\n• Common native speaker collocations\n❌\n ERROR CLINIC:\n• 5 typical learner mistakes at this level\n• Wrong sentence → \n✗\n \n→\n Correction \n→\n \n✓\n \n→\n Explanation\n🧠\n MEMORY DEVICE:\n• Mnemonic, pattern, or visual memory aid\n• Rhyme or acronym if applicable\n📚\n EXAM TIPS (if B1+):\n• How this topic appears in IELTS / Cambridge exams\n• Common exam task types involving this grammar point\nReferences: Cambridge English Grammar in Use, Oxford English Grammar, British National Corpus.\nStyle: Cambridge/Oxford textbook aesthetic — clean white, teal accents, authoritative typography. A4 portrait 300 DPI. --\nar\n 2:3",
              "textEn": "Use \nimgGenTool\n to create a premium English language educational infographic.\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nFILL THESE FIELDS ONLY\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nTOPIC:    {{ANY ENGLISH TOPIC — e.g. Present Perfect Tense / Reported Speech / Passive Voice / Modal Verbs / Conditionals / Collocations / Phrasal Verbs / Punctuation / Parts of Speech}}\nLEVEL:    {{A1 / A2 / B1 / B2 / C1 / C2 — CEFR}}\nSKILL:    {{Grammar / Vocabulary / Reading / Writing / Speaking / Listening}}\nGRADE:    {{Primary / Middle / High school / University / Adult learners}}\nLANGUAGE: {{English only / Bilingual EN+AR}}\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nAUTO-ADAPTIVE DESIGN ENGINE:\nBased on LEVEL, auto-apply visual density and complexity:\n• A1–A2 → Large icons, simple sentences, color-coded, lots of visuals, minimal text\n• B1–B2 → Balanced text/visuals, example tables, comparison boxes\n• C1–C2 → Academic density, nuanced examples, corpus-based usage notes\nBased on SKILL, auto-select layout:\n• Grammar → Rule box + form table + timeline/diagram + examples + error correction\n• Vocabulary → Word cards grid + IPA + collocations + register indicators\n• Writing → Structure diagram + model text annotated + transition words bank\n• Speaking → Conversation flowchart + useful phrases + pronunciation tips\nCONTENT BLOCKS:\n📌\n RULE / CONCEPT BOX (top — always):\n• Clear rule statement in simple English\n• When to use it / when NOT to use it\n• Level badge (CEFR A1–C2)\n📊\n FORM TABLE:\n• Positive / Negative / Question forms\n• Short answers if applicable\n• Any irregular forms highlighted in red\n🔤\n STRUCTURE FORMULA:\n• Visual formula: Subject + Verb (past participle) + Object\n• Color-coded: green=subject, blue=verb, orange=object/complement\n✍\n️ EXAMPLE BANK (10 examples minimum):\n• Graded from simple → complex\n• Authentic, natural-sounding sentences\n• Arabic translation if bilingual selected\n• Common errors crossed out with correction shown\n🎯\n USAGE NOTES:\n• British vs American English differences (if any)\n• Formal vs informal register\n• Common native speaker collocations\n❌\n ERROR CLINIC:\n• 5 typical learner mistakes at this level\n• Wrong sentence → \n✗\n \n→\n Correction \n→\n \n✓\n \n→\n Explanation\n🧠\n MEMORY DEVICE:\n• Mnemonic, pattern, or visual memory aid\n• Rhyme or acronym if applicable\n📚\n EXAM TIPS (if B1+):\n• How this topic appears in IELTS / Cambridge exams\n• Common exam task types involving this grammar point\nReferences: Cambridge English Grammar in Use, Oxford English Grammar, British National Corpus.\nStyle: Cambridge/Oxford textbook aesthetic — clean white, teal accents, authoritative typography. A4 portrait 300 DPI. --\nar\n 2:3",
              "image": "images/english/16.png",
              "variables": [
                  {
                      "name": "TOPIC",
                      "labelAr": "الموضوع النحوي",
                      "labelEn": "Grammar Topic",
                      "placeholderAr": "مثال: Passive Voice / Conditionals",
                      "placeholderEn": "e.g. Passive Voice / Conditionals"
                  },
                  {
                      "name": "LEVEL",
                      "labelAr": "المستوى اللغوي (CEFR)",
                      "labelEn": "CEFR Level",
                      "placeholderAr": "مثال: B1 / B2 / C1",
                      "placeholderEn": "e.g. B1 / B2 / C1"
                  },
                  {
                      "name": "SKILL",
                      "labelAr": "نوع المهارة",
                      "labelEn": "Language Skill",
                      "placeholderAr": "مثال: Grammar / Vocabulary",
                      "placeholderEn": "e.g. Grammar / Vocabulary"
                  },
                  {
                      "name": "GRADE",
                      "labelAr": "المستوى الدراسي",
                      "labelEn": "Grade Level",
                      "placeholderAr": "مثال: High school / Adult",
                      "placeholderEn": "e.g. High school / Adult"
                  },
                  {
                      "name": "LANGUAGE",
                      "labelAr": "لغة الشرح والترجمة",
                      "labelEn": "Presentation Style",
                      "placeholderAr": "مثال: Bilingual EN+AR / English only",
                      "placeholderEn": "e.g. Bilingual EN+AR / English only"
                  }
              ]
          },
          {
              "id": 17,
              "titleAr": "بوستر تحليل النصوص الأدبية والشعرية",
              "titleEn": "English Reading & Literature Analysis Poster",
              "textAr": "Use \nimgGenTool\n to create a premium English reading and literature educational infographic.\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nFILL THESE FIELDS ONLY\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nTOPIC:    {{TEXT TYPE / WORK — e.g. How to \nanalyse\n a poem / Short story elements / Novel study: Animal Farm / Non-fiction reading strategies / Newspaper article analysis / Shakespearean language}}\nLEVEL:    {{B1 / B2 / C1 / C2}}\nGRADE:    {{Middle school / High school / University}}\nLANGUAGE: {{English only / Bilingual EN+AR}}\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nCONTENT BLOCKS:\n📖\n TEXT OVERVIEW:\n• Genre identification + characteristics\n• Purpose: to inform / entertain / persuade / describe\n• Audience and register indicators\n🔍\n ANALYSIS FRAMEWORK (PETAL/PETER/WOVEN):\n• Point → Evidence → Technique → Analysis → Link\n• Visual step-by-step annotation process\n• How to quote effectively\n🎭\n LITERARY DEVICES SPOTLIGHT:\n• 10 devices relevant to this text type\n• Each: name + definition + example + effect on reader\n📝\n ANNOTATION GUIDE:\n• What to underline / circle / box\n• What questions to ask about any paragraph\n• \nColour\n-coding system for annotation\n✍\n️ RESPONSE WRITING:\n• Model paragraph structure (annotated)\n• Academic vocabulary for literary analysis\n• Sentence starters bank: \"The writer suggests...\", \"This implies...\"\n🔤\n KEY VOCABULARY:\n• 15 high-frequency literary analysis terms\n• Each: word + definition + example in sentence\nReferences: Cambridge IGCSE Literature, Oxford School Shakespeare, AQA/Edexcel frameworks.\nStyle: Premium literary magazine meets academic textbook. A4 portrait 300 DPI. --\nar\n 2:3",
              "textEn": "Use \nimgGenTool\n to create a premium English reading and literature educational infographic.\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nFILL THESE FIELDS ONLY\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nTOPIC:    {{TEXT TYPE / WORK — e.g. How to \nanalyse\n a poem / Short story elements / Novel study: Animal Farm / Non-fiction reading strategies / Newspaper article analysis / Shakespearean language}}\nLEVEL:    {{B1 / B2 / C1 / C2}}\nGRADE:    {{Middle school / High school / University}}\nLANGUAGE: {{English only / Bilingual EN+AR}}\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nCONTENT BLOCKS:\n📖\n TEXT OVERVIEW:\n• Genre identification + characteristics\n• Purpose: to inform / entertain / persuade / describe\n• Audience and register indicators\n🔍\n ANALYSIS FRAMEWORK (PETAL/PETER/WOVEN):\n• Point → Evidence → Technique → Analysis → Link\n• Visual step-by-step annotation process\n• How to quote effectively\n🎭\n LITERARY DEVICES SPOTLIGHT:\n• 10 devices relevant to this text type\n• Each: name + definition + example + effect on reader\n📝\n ANNOTATION GUIDE:\n• What to underline / circle / box\n• What questions to ask about any paragraph\n• \nColour\n-coding system for annotation\n✍\n️ RESPONSE WRITING:\n• Model paragraph structure (annotated)\n• Academic vocabulary for literary analysis\n• Sentence starters bank: \"The writer suggests...\", \"This implies...\"\n🔤\n KEY VOCABULARY:\n• 15 high-frequency literary analysis terms\n• Each: word + definition + example in sentence\nReferences: Cambridge IGCSE Literature, Oxford School Shakespeare, AQA/Edexcel frameworks.\nStyle: Premium literary magazine meets academic textbook. A4 portrait 300 DPI. --\nar\n 2:3",
              "image": "images/english/17.png",
              "variables": [
                  {
                      "name": "TOPIC",
                      "labelAr": "نوع النص أو العمل الأدبي",
                      "labelEn": "Text Type / Literary Work",
                      "placeholderAr": "مثال: Novel study: Animal Farm / Poetry Analysis",
                      "placeholderEn": "e.g. Novel study: Animal Farm / Poetry Analysis"
                  },
                  {
                      "name": "LEVEL",
                      "labelAr": "المستوى اللغوي (CEFR)",
                      "labelEn": "CEFR Level",
                      "placeholderAr": "مثال: B2 / C1",
                      "placeholderEn": "e.g. B2 / C1"
                  },
                  {
                      "name": "GRADE",
                      "labelAr": "المستوى الدراسي",
                      "labelEn": "Grade Level",
                      "placeholderAr": "مثال: High school / University",
                      "placeholderEn": "e.g. High school / University"
                  },
                  {
                      "name": "LANGUAGE",
                      "labelAr": "لغة البوستر",
                      "labelEn": "Poster Language",
                      "placeholderAr": "مثال: English only / Bilingual EN+AR",
                      "placeholderEn": "e.g. English only / Bilingual EN+AR"
                  }
              ]
          },
          {
              "id": 18,
              "titleAr": "ملصق هيكل وعمارة المقال الأكاديمي",
              "titleEn": "Academic Writing Essay Architecture Poster",
              "textAr": "Use \nimgGenTool\n to create a premium English academic writing educational poster.\nFocus: {{FOCUS — Essay Structure / Paragraph Writing / Argumentative Writing / Report Writing / all combined}}\nLevel: {{High school / IELTS prep / University}}\nLanguage: {{English (with Arabic annotations optional)}}\nDesign — clean academic white with editorial typography:\nSECTION 1 — ESSAY ARCHITECTURE:\n• Visual building/pyramid metaphor for essay structure\n• Introduction → Body (3 paragraphs) → Conclusion\n• Each part: what goes inside (annotated diagram)\nSECTION 2 — PERFECT PARAGRAPH (TEEL):\n• Topic sentence → Evidence → Explanation → Link\n• Color-coded paragraph example with each element highlighted\nSECTION 3 — TRANSITION WORDS COLLECTION:\n• Adding: Furthermore, Moreover, In addition...\n• Contrasting: However, Nevertheless, On the other hand...\n• Concluding: In conclusion, Therefore, Consequently...\n• Giving examples: For instance, Such as, To illustrate...\nSECTION 4 — ACADEMIC VOCABULARY UPGRADE:\n• 10 common words → academic alternatives\n• (said → argued, big → substantial, etc.)\nSECTION 5 — COMMON ERRORS:\n• 5 most common academic writing mistakes with corrections\nStyle: Premium Cambridge/Oxford academic aesthetic, A3 portrait 300 DPI. --\nar\n 2:3",
              "textEn": "Use \nimgGenTool\n to create a premium English academic writing educational poster.\nFocus: {{FOCUS — Essay Structure / Paragraph Writing / Argumentative Writing / Report Writing / all combined}}\nLevel: {{High school / IELTS prep / University}}\nLanguage: {{English (with Arabic annotations optional)}}\nDesign — clean academic white with editorial typography:\nSECTION 1 — ESSAY ARCHITECTURE:\n• Visual building/pyramid metaphor for essay structure\n• Introduction → Body (3 paragraphs) → Conclusion\n• Each part: what goes inside (annotated diagram)\nSECTION 2 — PERFECT PARAGRAPH (TEEL):\n• Topic sentence → Evidence → Explanation → Link\n• Color-coded paragraph example with each element highlighted\nSECTION 3 — TRANSITION WORDS COLLECTION:\n• Adding: Furthermore, Moreover, In addition...\n• Contrasting: However, Nevertheless, On the other hand...\n• Concluding: In conclusion, Therefore, Consequently...\n• Giving examples: For instance, Such as, To illustrate...\nSECTION 4 — ACADEMIC VOCABULARY UPGRADE:\n• 10 common words → academic alternatives\n• (said → argued, big → substantial, etc.)\nSECTION 5 — COMMON ERRORS:\n• 5 most common academic writing mistakes with corrections\nStyle: Premium Cambridge/Oxford academic aesthetic, A3 portrait 300 DPI. --\nar\n 2:3",
              "image": "images/english/18.png",
              "variables": [
                  {
                      "name": "FOCUS",
                      "labelAr": "محور التركيز في الكتابة",
                      "labelEn": "Academic Writing Focus",
                      "placeholderAr": "مثال: Essay Structure / Argumentative Writing",
                      "placeholderEn": "e.g. Essay Structure / Argumentative Writing"
                  },
                  {
                      "name": "LEVEL",
                      "labelAr": "المستوى الدراسي",
                      "labelEn": "Grade Level",
                      "placeholderAr": "مثال: IELTS prep / University",
                      "placeholderEn": "e.g. IELTS prep / University"
                  }
              ]
          },
          {
              "id": 19,
              "titleAr": "إنفوجرافيك خطوات القصة ثلاثي الأبعاد",
              "titleEn": "Pixar 3D Story Steps Infographic",
              "textAr": "Generate ONE 9:16 vertical infographic. STYLE: Pixar 3D + morphic glass hybrid, bright classroom lighting. LAYOUT: Top title, Middle: 3–4 glass panels as 'story steps', Bottom: summary strip. CONTENT: Step-by-step logic (When / Structure / Examples / Questions). CHARACTER: Pixar student interacting across panels (confused to understanding). TYPOGRAPHY: Bold, friendly, rounded, highly readable. TOPIC: {{TOPIC}}. Character must support learning, panels stay dominant.",
              "textEn": "Generate ONE 9:16 vertical infographic. STYLE: Pixar 3D + morphic glass hybrid, bright classroom lighting. LAYOUT: Top title, Middle: 3–4 glass panels as 'story steps', Bottom: summary strip. CONTENT: Step-by-step logic (When / Structure / Examples / Questions). CHARACTER: Pixar student interacting across panels (confused to understanding). TYPOGRAPHY: Bold, friendly, rounded, highly readable. TOPIC: {{TOPIC}}. Character must support learning, panels stay dominant.",
              "image": "images/english/19.png",
              "variables": [
                  {
                      "name": "TOPIC",
                      "labelAr": "موضوع الدرس",
                      "labelEn": "Lesson Topic",
                      "placeholderAr": "مثال: Present Perfect Tense",
                      "placeholderEn": "e.g. Present Perfect Tense"
                  }
              ]
          },
          {
              "id": 20,
              "titleAr": "شبكة بطاقات مفردات قاموس أكسفورد البصرية",
              "titleEn": "Oxford Visual Vocabulary Cards Grid",
              "textAr": "{\"prompt_type\":\"Vocabulary_Visual_Infographic\",\"topic\":\"{{VOCABULARY_THEME — e.g. Business English, Travel, Academic Word List}}\",\"level\":\"{{CEFR_LEVEL}}\",\"card_structure\":{\"english_word\":\"bold, \nlarge\",\"ipa_pronunciation\":\"phonemic\n script below \nword\",\"arabic_translation\":\"contextual\n — not \nliteral\",\"part_of_speech\":\"noun\n/verb/adj \nbadge\",\"example_sentence\":\"natural\n authentic usage\",\"collocation\":\"2-3 common word partnerships\"},\"\nlayout\":\"Grid\n of 12 word cards, A4 \nvertical\",\"style\":\"Clean\n academic, teal/white, Oxford dictionary \naesthetic\",\"references\n\":[\"Oxford Advanced Learner's \nDictionary\",\"Cambridge\n \nDictionary\",\"British\n National Corpus\"]}",
              "textEn": "{\"prompt_type\":\"Vocabulary_Visual_Infographic\",\"topic\":\"{{VOCABULARY_THEME — e.g. Business English, Travel, Academic Word List}}\",\"level\":\"{{CEFR_LEVEL}}\",\"card_structure\":{\"english_word\":\"bold, \nlarge\",\"ipa_pronunciation\":\"phonemic\n script below \nword\",\"arabic_translation\":\"contextual\n — not \nliteral\",\"part_of_speech\":\"noun\n/verb/adj \nbadge\",\"example_sentence\":\"natural\n authentic usage\",\"collocation\":\"2-3 common word partnerships\"},\"\nlayout\":\"Grid\n of 12 word cards, A4 \nvertical\",\"style\":\"Clean\n academic, teal/white, Oxford dictionary \naesthetic\",\"references\n\":[\"Oxford Advanced Learner's \nDictionary\",\"Cambridge\n \nDictionary\",\"British\n National Corpus\"]}",
              "image": "images/english/20.png",
              "variables": [
                  {
                      "name": "VOCABULARY_THEME",
                      "labelAr": "موضوع المفردات",
                      "labelEn": "Vocabulary Theme",
                      "placeholderAr": "مثال: Business English / Travel / Academic",
                      "placeholderEn": "e.g. Business English / Travel / Academic"
                  },
                  {
                      "name": "CEFR_LEVEL",
                      "labelAr": "المستوى اللغوي (CEFR)",
                      "labelEn": "CEFR Level",
                      "placeholderAr": "مثال: B1 / B2",
                      "placeholderEn": "e.g. B1 / B2"
                  }
              ]
          },
          {
              "id": 21,
              "titleAr": "مغامرة غرف هروب القواعد (لعبة تفاعلية)",
              "titleEn": "Escape the Grammar Chambers Adventure",
              "textAr": "SYSTEM ROLE: Elite AI educational infographic engine. MISSION: Generate ONE final 9:16 vertical ultra-HD educational poster. TOPIC: {{GRAMMAR_RULE}}. STYLE: Nano Banana PRO, futuristic classroom escape-room design, Pixar-style 3D character, glowing \nglassmorphism\n, vivid cinematic lighting. MAIN CONCEPT: Students move through 4 connected 'grammar chambers' teaching parts of the rule (Rule Discovery, Formula Room, Meaning/Use Room, Mistake Trap Room). LAYOUT: Top: big glowing title 'ESCAPE THE {{GRAMMAR_RULE}}', adventure atmosphere. Center: 4 stacked/connected chambers with numbers, themed scenes, short explanations, and examples. Bottom: 'Mission Complete' revision zone (summary, triggers, challenge). CHARACTER: Friendly Pixar-style grammar explorer/mascot guiding the learner with a flashlight/key. STRICT RULES: No dense paragraphs, each chamber visually distinct, clear color coding for chambers, mobile readability first, no watermark.",
              "textEn": "SYSTEM ROLE: Elite AI educational infographic engine. MISSION: Generate ONE final 9:16 vertical ultra-HD educational poster. TOPIC: {{GRAMMAR_RULE}}. STYLE: Nano Banana PRO, futuristic classroom escape-room design, Pixar-style 3D character, glowing \nglassmorphism\n, vivid cinematic lighting. MAIN CONCEPT: Students move through 4 connected 'grammar chambers' teaching parts of the rule (Rule Discovery, Formula Room, Meaning/Use Room, Mistake Trap Room). LAYOUT: Top: big glowing title 'ESCAPE THE {{GRAMMAR_RULE}}', adventure atmosphere. Center: 4 stacked/connected chambers with numbers, themed scenes, short explanations, and examples. Bottom: 'Mission Complete' revision zone (summary, triggers, challenge). CHARACTER: Friendly Pixar-style grammar explorer/mascot guiding the learner with a flashlight/key. STRICT RULES: No dense paragraphs, each chamber visually distinct, clear color coding for chambers, mobile readability first, no watermark.",
              "image": "images/english/21.png",
              "variables": [
                  {
                      "name": "GRAMMAR_RULE",
                      "labelAr": "القاعدة اللغوية المستهدفة",
                      "labelEn": "Grammar Rule for Game",
                      "placeholderAr": "مثال: Present Perfect / Passive Voice",
                      "placeholderEn": "e.g. Present Perfect / Passive Voice"
                  }
              ]
          },
          {
              "id": 22,
              "titleAr": "رحلة نفق الزمن لتبسيط القواعد اللغوية",
              "titleEn": "Time Tunnel Grammar Journey Map",
              "textAr": "SYSTEM ROLE: Elite AI educational infographic engine. MISSION: Generate ONE final 9:16 vertical ultra-HD poster. TOPIC: {{GRAMMAR_TOPIC}}. STYLE: Nano Banana PRO, Pixar-style 3D educational world, futuristic classroom adventure, glowing \nglassmorphism\n, layered depth. MAIN CONCEPT: 'Time Tunnel Map' where students travel through 5 time portals (What it is, Structure Code, When we use it, Signal Words Lab, Error Repair Station). LAYOUT: Top Header: big glowing title, subtitle, mascot teacher/explorer pointing to first portal. Center: central glowing tunnel/timeline running vertically connecting all 5 portals. Each portal has distinct color, icon, mini scene, and text block. Bottom: 'Quick Win Review' summary strip, exit-ticket question, confidence badge. CHARACTER: Friendly Pixar grammar guide appearing in 2–3 small positions guiding the learner. STRICT RULES: No clutter, each portal must have a distinct color family, tunnel must visually connect all portals, no distorted letters.",
              "textEn": "SYSTEM ROLE: Elite AI educational infographic engine. MISSION: Generate ONE final 9:16 vertical ultra-HD poster. TOPIC: {{GRAMMAR_TOPIC}}. STYLE: Nano Banana PRO, Pixar-style 3D educational world, futuristic classroom adventure, glowing \nglassmorphism\n, layered depth. MAIN CONCEPT: 'Time Tunnel Map' where students travel through 5 time portals (What it is, Structure Code, When we use it, Signal Words Lab, Error Repair Station). LAYOUT: Top Header: big glowing title, subtitle, mascot teacher/explorer pointing to first portal. Center: central glowing tunnel/timeline running vertically connecting all 5 portals. Each portal has distinct color, icon, mini scene, and text block. Bottom: 'Quick Win Review' summary strip, exit-ticket question, confidence badge. CHARACTER: Friendly Pixar grammar guide appearing in 2–3 small positions guiding the learner. STRICT RULES: No clutter, each portal must have a distinct color family, tunnel must visually connect all portals, no distorted letters.",
              "image": "images/english/22.png",
              "variables": [
                  {
                      "name": "GRAMMAR_TOPIC",
                      "labelAr": "القاعدة النحوية",
                      "labelEn": "Grammar Topic",
                      "placeholderAr": "مثال: Present Simple / Past Tense",
                      "placeholderEn": "e.g. Present Simple / Past Tense"
                  }
              ]
          },
          {
              "id": 23,
              "titleAr": "إنفوجرافيك مدينة الجملة وسكك النحو الحديدية",
              "titleEn": "Sentence City Transit Map Infographic",
              "textAr": "SENTENCE PROMPT SYSTEM ROLE: High-end AI educational visual engine. Output ONE final image only.\nCANVAS: 9:16 vertical, ultra-HD, mobile-first, bright light mode.\nTOPIC: Parts of a Sentence — how words work together.\nAUDIENCE: Primary or middle-school English learners, English LTR.\nCORE VISUAL IDEA:\nTransform a sentence into a cheerful miniature “Sentence City.” Each grammar role is represented by a connected transit station. A glowing sentence train travels through the stations, showing how the words combine to create meaning.\nSTYLE:\nPremium Pixar-inspired 3D + Morphic Glass.\nFresh Daylight palette:\nsky blue #60A5FA,\ngrass green #65C18C,\nsunshine yellow #FFD93D,\nclean white,\nsoft gray-blue shadows.\nUse soft global illumination, subtle subsurface scattering, bright daylight, warm key light, cool rim light, shallow depth of field, rounded tactile buildings, polished miniature objects, frosted glass labels with thin bright edges, soft contact shadows, and slight isometric perspective.\nLAYOUT:\nNetwork / transit-map skeleton, NOT stacked cards.\nReading direction: left-to-right along one curved railway line.\nPlace one large sentence train across the middle:\n“The clever fox runs quickly.”\nCreate five connected stations:\n1. SUBJECT STATION\n“The fox”\nLabel: WHO?\n2. ADJECTIVE GARDEN\n“clever”\nLabel: DESCRIBES\n3. VERB POWER HOUSE\n“runs”\nLabel: ACTION\n4. ADVERB SPEED TUNNEL\n“quickly”\nLabel: HOW?\n5. MEANING CENTRAL\nShow the completed sentence:\n“The clever fox runs quickly.”\nCONTENT BLOCKS:\nUse no more than five short text zones:\n• Main title\n• Subject\n• Adjective\n• Verb\n• Adverb\n• Completed sentence may appear inside the final destination rather than as an extra card\nCHARACTER/ICON:\nOne friendly Pixar-style fox conductor wearing a tiny blue cap, pointing toward the train route. The mascot supports the lesson and never covers text.\nTYPOGRAPHY:\nTitle: \nFredoka\n, chunky beveled 3D letters, light-top to saturated-bottom gradient, thin outline, soft shadow.\nLabels: Poppins, large bold uppercase.\nSentence words: extra-large, clean, highly readable.\nVISUAL CLARITY:\nGive each grammar role one consistent icon:\nsubject = person silhouette,\nadjective = sparkle,\nverb = lightning bolt,\nadverb = speed lines.\nSTRICT RULES:\nHuge readable text.\nVery few words.\nOne idea per station.\nNo paragraphs.\nNo stacked numbered panels.\nNo random signs or background writing.\nNo distorted letters.\nNo repeated labels.\nNo watermark.\nNo clutter.\nNo hidden quiz answers.\nThe railway route must remain visually clear at phone-screen size.\nFINAL QUALITY:\nPremium educational infographic, imaginative but academically accurate, strong visual hierarchy, classroom-ready, social-media-ready, polished Pixar-quality 3D rendering with elegant morphic-glass educational labels.",
              "textEn": "SENTENCE PROMPT SYSTEM ROLE: High-end AI educational visual engine. Output ONE final image only.\nCANVAS: 9:16 vertical, ultra-HD, mobile-first, bright light mode.\nTOPIC: Parts of a Sentence — how words work together.\nAUDIENCE: Primary or middle-school English learners, English LTR.\nCORE VISUAL IDEA:\nTransform a sentence into a cheerful miniature “Sentence City.” Each grammar role is represented by a connected transit station. A glowing sentence train travels through the stations, showing how the words combine to create meaning.\nSTYLE:\nPremium Pixar-inspired 3D + Morphic Glass.\nFresh Daylight palette:\nsky blue #60A5FA,\ngrass green #65C18C,\nsunshine yellow #FFD93D,\nclean white,\nsoft gray-blue shadows.\nUse soft global illumination, subtle subsurface scattering, bright daylight, warm key light, cool rim light, shallow depth of field, rounded tactile buildings, polished miniature objects, frosted glass labels with thin bright edges, soft contact shadows, and slight isometric perspective.\nLAYOUT:\nNetwork / transit-map skeleton, NOT stacked cards.\nReading direction: left-to-right along one curved railway line.\nPlace one large sentence train across the middle:\n“The clever fox runs quickly.”\nCreate five connected stations:\n1. SUBJECT STATION\n“The fox”\nLabel: WHO?\n2. ADJECTIVE GARDEN\n“clever”\nLabel: DESCRIBES\n3. VERB POWER HOUSE\n“runs”\nLabel: ACTION\n4. ADVERB SPEED TUNNEL\n“quickly”\nLabel: HOW?\n5. MEANING CENTRAL\nShow the completed sentence:\n“The clever fox runs quickly.”\nCONTENT BLOCKS:\nUse no more than five short text zones:\n• Main title\n• Subject\n• Adjective\n• Verb\n• Adverb\n• Completed sentence may appear inside the final destination rather than as an extra card\nCHARACTER/ICON:\nOne friendly Pixar-style fox conductor wearing a tiny blue cap, pointing toward the train route. The mascot supports the lesson and never covers text.\nTYPOGRAPHY:\nTitle: \nFredoka\n, chunky beveled 3D letters, light-top to saturated-bottom gradient, thin outline, soft shadow.\nLabels: Poppins, large bold uppercase.\nSentence words: extra-large, clean, highly readable.\nVISUAL CLARITY:\nGive each grammar role one consistent icon:\nsubject = person silhouette,\nadjective = sparkle,\nverb = lightning bolt,\nadverb = speed lines.\nSTRICT RULES:\nHuge readable text.\nVery few words.\nOne idea per station.\nNo paragraphs.\nNo stacked numbered panels.\nNo random signs or background writing.\nNo distorted letters.\nNo repeated labels.\nNo watermark.\nNo clutter.\nNo hidden quiz answers.\nThe railway route must remain visually clear at phone-screen size.\nFINAL QUALITY:\nPremium educational infographic, imaginative but academically accurate, strong visual hierarchy, classroom-ready, social-media-ready, polished Pixar-quality 3D rendering with elegant morphic-glass educational labels.",
              "image": "images/english/23.png",
              "variables": []
          },
          {
              "id": 24,
              "titleAr": "مختبر المصطلحات (حرفي ضد حقيقي 9:16)",
              "titleEn": "English Idiom Guess vs Truth Lab",
              "textAr": "Create ONE premium 9:16 vertical educational infographic.\nTOPIC:\nEnglish Idiom\nIDIOM:\n{{IDIOM}}\nSTYLE:\nPixar-quality 3D + Morphic Glass + pop-up classroom lab.\nBright light mode, candy pastel palette, soft global illumination, warm key light, cool rim light, rounded tactile forms, shallow depth of field.\nLAYOUT:\nSplit-screen “Guess vs Truth” infographic.\nTOP SECTION:\nBig 3D title:\nIDIOM LAB\nUnder it, write the idiom in huge clear text:\n“{{IDIOM}}”\nLEFT SIDE:\nLabel:\nWHAT IT SOUNDS LIKE\nCreate a funny exaggerated literal scene showing the idiom as a visual hypothesis.\nShort text:\nMaybe it means: {{LITERAL_GUESS}}\nRIGHT SIDE:\nLabel:\nREAL MEANING\nCreate a clear real-life scene showing the true meaning.\nShort text:\nIt really means: {{REAL_MEANING}}\nBOTTOM CARD:\nUSE IT:\n{{EXAMPLE_SENTENCE}}\nCHARACTER:\nOne cute Pixar-style student detective holding a magnifying glass, standing between the two sides, discovering the real meaning.\nTYPOGRAPHY:\nHuge rounded 3D title font like \nFredoka\n or Baloo.\nClean readable body font like Poppins.\nVery few words.\nBig readable labels.\nSTRICT RULES:\nNo clutter.\nNo tiny text.\nNo watermark.\nNo random text.\nNo answer confusion.\nLiteral side must be funny.\nReal meaning side must be clear.\nUse only the exact idiom provided.\nPremium classroom poster quality.",
              "textEn": "Create ONE premium 9:16 vertical educational infographic.\nTOPIC:\nEnglish Idiom\nIDIOM:\n{{IDIOM}}\nSTYLE:\nPixar-quality 3D + Morphic Glass + pop-up classroom lab.\nBright light mode, candy pastel palette, soft global illumination, warm key light, cool rim light, rounded tactile forms, shallow depth of field.\nLAYOUT:\nSplit-screen “Guess vs Truth” infographic.\nTOP SECTION:\nBig 3D title:\nIDIOM LAB\nUnder it, write the idiom in huge clear text:\n“{{IDIOM}}”\nLEFT SIDE:\nLabel:\nWHAT IT SOUNDS LIKE\nCreate a funny exaggerated literal scene showing the idiom as a visual hypothesis.\nShort text:\nMaybe it means: {{LITERAL_GUESS}}\nRIGHT SIDE:\nLabel:\nREAL MEANING\nCreate a clear real-life scene showing the true meaning.\nShort text:\nIt really means: {{REAL_MEANING}}\nBOTTOM CARD:\nUSE IT:\n{{EXAMPLE_SENTENCE}}\nCHARACTER:\nOne cute Pixar-style student detective holding a magnifying glass, standing between the two sides, discovering the real meaning.\nTYPOGRAPHY:\nHuge rounded 3D title font like \nFredoka\n or Baloo.\nClean readable body font like Poppins.\nVery few words.\nBig readable labels.\nSTRICT RULES:\nNo clutter.\nNo tiny text.\nNo watermark.\nNo random text.\nNo answer confusion.\nLiteral side must be funny.\nReal meaning side must be clear.\nUse only the exact idiom provided.\nPremium classroom poster quality.",
              "image": "images/english/23.png",
              "variables": [
                  {
                      "name": "IDIOM",
                      "labelAr": "المصطلح المجازي (Idiom)",
                      "labelEn": "Idiom",
                      "placeholderAr": "مثال: Burn the midnight oil",
                      "placeholderEn": "e.g. Burn the midnight oil"
                  },
                  {
                      "name": "LITERAL_GUESS",
                      "labelAr": "التفسير الحرفي المضحك",
                      "labelEn": "Literal Guess",
                      "placeholderAr": "مثال: Lighting a fire in a oil barrel at night",
                      "placeholderEn": "e.g. Lighting a fire in a oil barrel at night"
                  },
                  {
                      "name": "REAL_MEANING",
                      "labelAr": "المعنى الحقيقي الفعلي",
                      "labelEn": "Real Meaning",
                      "placeholderAr": "مثال: To stay up late working or studying",
                      "placeholderEn": "e.g. To stay up late working or studying"
                  },
                  {
                      "name": "EXAMPLE_SENTENCE",
                      "labelAr": "جملة مثال على الاستخدام",
                      "labelEn": "Example Sentence",
                      "placeholderAr": "مثال: She burned the midnight oil to pass the exam.",
                      "placeholderEn": "e.g. She burned the midnight oil to pass the exam."
                  }
              ]
          },
          {
              "id": 25,
              "titleAr": "كتاب البوب آب ثلاثي الأبعاد السحري (9:16)",
              "titleEn": "Open Magical Pop-up Book Infographic",
              "textAr": "TOPIC:\n{{TOPIC}}\nLESSON TYPE:\n{{Vocabulary / Grammar / Science / Math / History / Phonics / Revision}}\nAUDIENCE:\n{{kids / teens / beginners / grade level}}\nLANGUAGE:\n{{English LTR / Arabic RTL / bilingual separated zones}}\nVISUAL STYLE:\nPixar-quality 3D pop-up picture book infographic, bright light mode, soft global illumination, subsurface scattering, warm key light + cool rim light, shallow depth of field, rounded tactile forms, premium toy-like materials, soft paper texture, cinematic classroom lighting.\nMAIN CONCEPT:\nDesign the poster as an open magical pop-up book on a desk. The topic comes alive as 3D pop-up pictures rising from the pages. Each word or idea appears as a separate raised picture-card with a big readable label.\nLAYOUT:\nPop-up book spread, 3D picture cards, playful stickers, arrows, tabs, paper cutouts, and soft shadows.\nReading direction: top title → picture grid → remember card.\nUse 6 to 10 main picture cards only.\nTITLE:\nBig 3D chunky title:\n{{TITLE}}\nCONTENT CARDS:\nCreate clear labeled pop-up cards for:\n{{ITEM_1}}\n{{ITEM_2}}\n{{ITEM_3}}\n{{ITEM_4}}\n{{ITEM_5}}\n{{ITEM_6}}\n{{ITEM_7}}\n{{ITEM_8}}\nOPTIONAL REMEMBER CARD:\n{{ONE_SHORT_TAKEAWAY}}\nCHARACTER:\nOne cute Pixar-style student/teacher mascot in the bottom corner, pointing happily at the book. Do not cover text.\nTYPOGRAPHY:\nHuge rounded 3D title font like \nFredoka\n / Baloo.\nClean readable body font like Poppins / Inter.\nVery large labels.\nNo tiny text.\nCOLOR PALETTE:\nFresh Daylight palette: sky blue, grass green, sunshine yellow, clean white, soft gray-blue shadows.\nAdd warm accent colors only for labels and stickers.\nSTRICT RULES:\nOne topic only.\nFew words.\nHuge readable text.\nNo paragraphs.\nNo clutter.\nNo random background text.\nNo watermark.\nNo distorted letters.\nAll labels must be spelled correctly.\nEvery picture must clearly match its label.\nPremium classroom poster quality.\nSocial-media ready.",
              "textEn": "TOPIC:\n{{TOPIC}}\nLESSON TYPE:\n{{Vocabulary / Grammar / Science / Math / History / Phonics / Revision}}\nAUDIENCE:\n{{kids / teens / beginners / grade level}}\nLANGUAGE:\n{{English LTR / Arabic RTL / bilingual separated zones}}\nVISUAL STYLE:\nPixar-quality 3D pop-up picture book infographic, bright light mode, soft global illumination, subsurface scattering, warm key light + cool rim light, shallow depth of field, rounded tactile forms, premium toy-like materials, soft paper texture, cinematic classroom lighting.\nMAIN CONCEPT:\nDesign the poster as an open magical pop-up book on a desk. The topic comes alive as 3D pop-up pictures rising from the pages. Each word or idea appears as a separate raised picture-card with a big readable label.\nLAYOUT:\nPop-up book spread, 3D picture cards, playful stickers, arrows, tabs, paper cutouts, and soft shadows.\nReading direction: top title → picture grid → remember card.\nUse 6 to 10 main picture cards only.\nTITLE:\nBig 3D chunky title:\n{{TITLE}}\nCONTENT CARDS:\nCreate clear labeled pop-up cards for:\n{{ITEM_1}}\n{{ITEM_2}}\n{{ITEM_3}}\n{{ITEM_4}}\n{{ITEM_5}}\n{{ITEM_6}}\n{{ITEM_7}}\n{{ITEM_8}}\nOPTIONAL REMEMBER CARD:\n{{ONE_SHORT_TAKEAWAY}}\nCHARACTER:\nOne cute Pixar-style student/teacher mascot in the bottom corner, pointing happily at the book. Do not cover text.\nTYPOGRAPHY:\nHuge rounded 3D title font like \nFredoka\n / Baloo.\nClean readable body font like Poppins / Inter.\nVery large labels.\nNo tiny text.\nCOLOR PALETTE:\nFresh Daylight palette: sky blue, grass green, sunshine yellow, clean white, soft gray-blue shadows.\nAdd warm accent colors only for labels and stickers.\nSTRICT RULES:\nOne topic only.\nFew words.\nHuge readable text.\nNo paragraphs.\nNo clutter.\nNo random background text.\nNo watermark.\nNo distorted letters.\nAll labels must be spelled correctly.\nEvery picture must clearly match its label.\nPremium classroom poster quality.\nSocial-media ready.",
              "image": "images/english/23.png",
              "variables": [
                  {
                      "name": "TOPIC",
                      "labelAr": "الموضوع العام للدرس",
                      "labelEn": "Lesson Topic",
                      "placeholderAr": "مثال: Animal Vocabulary / Science Shapes",
                      "placeholderEn": "e.g. Animal Vocabulary / Science Shapes"
                  },
                  {
                      "name": "LESSON_TYPE",
                      "labelAr": "نوع الدرس",
                      "labelEn": "Lesson Type",
                      "placeholderAr": "مثال: Vocabulary / Grammar / Phonics",
                      "placeholderEn": "e.g. Vocabulary / Grammar / Phonics"
                  },
                  {
                      "name": "AUDIENCE",
                      "labelAr": "الفئة المستهدفة",
                      "labelEn": "Target Audience",
                      "placeholderAr": "مثال: kids / beginners / Grade 3",
                      "placeholderEn": "e.g. kids / beginners / Grade 3"
                  },
                  {
                      "name": "LANGUAGE",
                      "labelAr": "لغة العرض واتجاه الكتابة",
                      "labelEn": "Language & Direction",
                      "placeholderAr": "مثال: English LTR / Arabic RTL / Bilingual",
                      "placeholderEn": "e.g. English LTR / Arabic RTL / Bilingual"
                  },
                  {
                      "name": "TITLE",
                      "labelAr": "العنوان الرئيسي على الكتاب",
                      "labelEn": "Book Pop-up Title",
                      "placeholderAr": "مثال: Magical Animal Kingdom",
                      "placeholderEn": "e.g. Magical Animal Kingdom"
                  },
                  {
                      "name": "ITEM_1",
                      "labelAr": "البطاقة 1",
                      "labelEn": "Item 1 Card",
                      "placeholderAr": "مثال: Lion",
                      "placeholderEn": "e.g. Lion"
                  },
                  {
                      "name": "ITEM_2",
                      "labelAr": "البطاقة 2",
                      "labelEn": "Item 2 Card",
                      "placeholderAr": "مثال: Tiger",
                      "placeholderEn": "e.g. Tiger"
                  },
                  {
                      "name": "ITEM_3",
                      "labelAr": "البطاقة 3",
                      "labelEn": "Item 3 Card",
                      "placeholderAr": "مثال: Elephant",
                      "placeholderEn": "e.g. Elephant"
                  },
                  {
                      "name": "ITEM_4",
                      "labelAr": "البطاقة 4",
                      "labelEn": "Item 4 Card",
                      "placeholderAr": "مثال: Giraffe",
                      "placeholderEn": "e.g. Giraffe"
                  },
                  {
                      "name": "ITEM_5",
                      "labelAr": "البطاقة 5",
                      "labelEn": "Item 5 Card",
                      "placeholderAr": "مثال: Monkey",
                      "placeholderEn": "e.g. Monkey"
                  },
                  {
                      "name": "ITEM_6",
                      "labelAr": "البطاقة 6",
                      "labelEn": "Item 6 Card",
                      "placeholderAr": "مثال: Zebra",
                      "placeholderEn": "e.g. Zebra"
                  },
                  {
                      "name": "ITEM_7",
                      "labelAr": "البطاقة 7 (اختياري)",
                      "labelEn": "Item 7 Card (Optional)",
                      "placeholderAr": "مثال: Panda",
                      "placeholderEn": "e.g. Panda"
                  },
                  {
                      "name": "ITEM_8",
                      "labelAr": "البطاقة 8 (اختياري)",
                      "labelEn": "Item 8 Card (Optional)",
                      "placeholderAr": "مثال: Kangaroo",
                      "placeholderEn": "e.g. Kangaroo"
                  },
                  {
                      "name": "ONE_SHORT_TAKEAWAY",
                      "labelAr": "ملاحظة التلخيص بالأسفل",
                      "labelEn": "Bottom Takeaway Note",
                      "placeholderAr": "مثال: Always protect wild animals!",
                      "placeholderEn": "e.g. Always protect wild animals!"
                  }
              ]
          }
      ]
  },
  {
    "id": "math",
    "category": "sciences",
    "titleAr": "الرياضيات",
    "titleEn": "Mathematics",
    "descAr": "أدوات متميزة لتصميم إنفوجرافيك المفاهيم، أوراق حل المسائل، ملصقات النظريات الهندسية والإحصاء",
    "descEn": "Premium tools to design concept infographics, problem-solving sheets, and geometry/statistics posters",
    "icon": "📐",
    "colorClass": "card-math",
    "prompts": [
      {
        "id": 1,
        "titleAr": "إنفوجرافيك المفاهيم الرياضية الشامل",
        "titleEn": "Comprehensive Mathematics Concept Infographic",
        "textAr": "الدور:\nمصمم إنفوجرافيك تعليمي احترافي وخبير في تبسيط مفاهيم الرياضيات.\n\nاللوحة:\nملصق إنفوجرافيك رياضي فاخر، مقاس A4 عمودي (Portrait)، بدقة 300 نقطة لكل بوصة.\n\nالموضوع:\nشرح وتوضيح المفهوم الرياضي: {{TOPIC}} الموجه للمستوى الدراسي: {{GRADE}} في فرع: {{BRANCH}}.\n\nمحرك التصميم التلقائي:\n- للحساب والمرحلة الابتدائية: أشكال توضيحية ملونة كبيرة، خطوط أعداد، رسومات توضيحية ملموسة.\n- للجبر: مربعات معادلات، كفتي ميزان متعادلتين، رسوم بيانية.\n- للهندسة: إنشاءات هندسية دقيقة، أشكال هندسية موضحة، خطوات البرهان الرياضي.\n- للتفاضل والتكامل: منحنيات مرسومة بدقة، تمثيل بصري للميل والمماس، تظليل للمساحات تحت المنحنى.\n- للإحصاء: مخططات شريطية، منحنيات الجرس (التوزيع الطبيعي)، جداول بيانات، شجيرات الاحتمالات.\n\nكتل المحتوى المتضمنة:\n1. بيان المفهوم: التعريف الرياضي الرسمي للـ {{TOPIC}} + شرح بسيط في جملة واحدة + متطلبات الفهم السابقة.\n2. الصيغة الرياضية أو النظرية: تُعرض بشكل كبير في إطار ملون مع شرح لكل متغير ووحداته والصيغ المشتقة.\n3. البرهان الهندسي أو البصري: خطوات مرقمة وموضحة للبرهان الرياضي مع شرح بديهي.\n4. أمثلة محلولة (3 مستويات): مثال أساسي (خطوة واحدة) - مثال متوسط (متعدد الخطوات) - مثال تحدي (أسئلة امتحانات).\n5. الأخطاء الشائعة: 5 أخطاء شائعة يقع فيها الطلاب مع توضيح الحل الخاطئ والحل الصحيح.\n6. التطبيقات العملية: 4 تطبيقات واقعية للمفهوم (الهندسة، التمويل، الطبيعة، التكنولوجيا) مع أيقونة مناسبة وشرح في سطر.\n7. الروابط: 3 موضوعات رياضية أخرى ترتبط بهذا المفهوم وكيف يساعد فهمه في استيعابها.\n8. استراتيجية الاختبار: الكلمات الإجرائية وتوزيع درجات الحل الرياضي.\n\nالأسلوب والجمالية:\nملصق رياضي دقيق، خلفية بيضاء نظيفة، تفاصيل باللون الأزرق الكامبريدجي (Cambridge Blue) الفاخر، تصميم يركز على الصيغ الرياضية، جاهز للطباعة.\n\nاللغة المطلوبة للبوستر: {{LANGUAGE}}.",
        "textEn": "SYSTEM ROLE: World-class educational infographic and mathematics design expert.\n\nCANVAS:\nPremium mathematics educational infographic poster, A4 portrait, 300 DPI.\n\nTOPIC:\nVisual guide to the mathematical topic: {{TOPIC}} for {{GRADE}} level in the branch of {{BRANCH}}.\n\nAUTO-ADAPTIVE LAYOUT ENGINE:\n- Arithmetic/Primary -> Large colorful visuals, number lines, manipulative-style graphics.\n- Algebra -> Equation boxes, balancing scales metaphor, graph plots.\n- Geometry -> Precise geometric constructions, labeled diagrams, proof steps.\n- Calculus -> Curve sketches, gradient visualization, area shading.\n- Statistics -> Bar charts, bell curves, data tables, probability trees.\n\nCONTENT BLOCKS:\n1. CONCEPT STATEMENT: Formal mathematical definition of {{TOPIC}} + plain language one-sentence explanation + prerequisite knowledge.\n2. THE FORMULA / THEOREM: Displayed large, boxed, color-coded. Each variable defined with symbol, representations, and units + derived forms.\n3. GEOMETRIC / VISUAL PROOF: Step-by-step construction or visual demonstration, numbered and annotated.\n4. WORKED EXAMPLES (3 levels): Basic (single-step) / Intermediate (multi-step with a twist) / Challenging (exam-style). Each includes problem, labeled diagram, solution steps, and boxed answer.\n5. COMMON MISTAKES: 5 most frequent student errors with wrong working vs correct working.\n6. APPLICATIONS: 4 real-world uses (engineering, finance, nature, technology) with icons and one-line explanations.\n7. CONNECTIONS: 3 other math topics this connects to and how mastering this helps with those.\n8. EXAM STRATEGY: Command words and laying out working for full marks.\n\nSTYLE:\nPrecision mathematical poster, clean white background, Cambridge blue accents, formula-forward design. Print-ready.\n\nLANGUAGE: The final poster language must be {{LANGUAGE}}.",
        "image": "images/math/1.png",
        "variables": [
          {"name": "TOPIC", "labelAr": "الموضوع الرياضي", "labelEn": "Math Topic", "placeholderAr": "مثال: نظرية فيثاغورس / الكسور", "placeholderEn": "e.g. Pythagoras Theorem / Fractions"},
          {"name": "GRADE", "labelAr": "المرحلة الدراسية", "labelEn": "Grade Level", "placeholderAr": "مثال: المرحلة المتوسطة", "placeholderEn": "e.g. Middle School"},
          {"name": "BRANCH", "labelAr": "فرع الرياضيات", "labelEn": "Math Branch", "placeholderAr": "مثال: الهندسة / الجبر", "placeholderEn": "e.g. Geometry / Algebra"},
          {"name": "LANGUAGE", "labelAr": "لغة الإنفوجرافيك", "labelEn": "Infographic Language", "placeholderAr": "مثال: العربية / English", "placeholderEn": "e.g. Arabic / English"}
        ]
      },
      {
        "id": 2,
        "titleAr": "إنفوجرافيك خطوات حل المسائل الرياضية",
        "titleEn": "Mathematics Problem-Solving Infographic",
        "textAr": "الدور:\nمصمم أوراق عمل ومخططات رياضية تفاعلية محترف.\n\nاللوحة:\nورقة عمل خطوات حل المسائل الرياضية، مقاس A4 أفقي (Landscape)، بدقة 300 نقطة لكل بوصة.\n\nالموضوع:\nدليل إنفوجرافيك تفاعلي لخطوات حل مسائل من نوع: {{PROBLEM_TYPE}} الموجه لطلاب المستوى الدراسي: {{GRADE}}.\n\nكتل المحتوى المتضمنة:\n1. خريطة طريق حل المسألة: مخطط انسيابي بصري (اقرأ -> حدد -> خطط -> حل -> تحقق) مع الكلمات المفتاحية الدالة على العمليات الحسابية (مثل: 'الإجمالي' تعني جمع، 'الفرق' يعني طرح، إلخ).\n2. التعرف على نوع المسألة: كيفية تمييز نوع المسألة {{PROBLEM_TYPE}} فوراً، الكلمات الإرشادية والخدع الامتحانية الشائعة.\n3. بطاقات المنهج والحل (عرض طريقتين للحل):\n   - الطريقة الأولى (الأسلوب القياسي): حل كامل خطوة بخطوة مع التعليل الرياضي لكل خطوة وتتبع الوحدات مع وضع الإجابة النهائية في مربع.\n   - الطريقة الثانية (الأسلوب البديل): حل بطريقة تفكير أو قاعدة مختلفة مع توضيح متى يكون هذا الأسلوب أسرع أو أفضل.\n4. التحقق من صحة الحل: طرق التعويض المباشر، التقدير التقريبي العقلاني، والتحقق من الوحدات.\n5. أسئلة امتحانات للتدريب: 5 مسائل متدرجة الصعوبة (من نجمة ⭐️ إلى 5 نجوم ⭐️⭐️⭐️⭐️⭐️) مع مساحات مخصصة للحل وإجابات نهائية مصغرة في الأسفل.\n6. انتبه لـ (Watch Out): مصائد تحويل الوحدات، أخطاء الإشارات السالبة، التقريب المبكر، والقراءة الخاطئة للسؤال.\n\nالأسلوب والجمالية:\nورقة عمل نظيفة ومنظمة لحل المسائل، تم الارتقاء بها إلى جودة إنفوجرافيك متميز، خلفية بيضاء نظيفة وتوزيع متوازن للخطوط.\n\nاللغة المطلوبة للبوستر: {{LANGUAGE}}.",
        "textEn": "SYSTEM ROLE: High-end educational mathematics worksheet and resource designer.\n\nCANVAS:\nProblem-solving worksheet elevated to premium infographic quality, A4 landscape, 300 DPI.\n\nTOPIC:\nInteractive guide and layout to solve: {{PROBLEM_TYPE}} for {{GRADE}} level.\n\nCONTENT BLOCKS:\n1. PROBLEM ROADMAP: Visual flowchart (Read -> Identify -> Plan -> Solve -> Check) with key words indicating operations (e.g. 'total' -> add, 'difference' -> subtract).\n2. PROBLEM TYPE RECOGNITION: How to recognize {{PROBLEM_TYPE}} instantly, trigger words, visual cues, and common exam disguises.\n3. METHOD CARDS (2 methods shown):\n   - Method 1 (Standard): Full step-by-step solution with reasoning, units tracking, and boxed answer.\n   - Method 2 (Alternative): Different approach reaching the same answer, highlighting when it is faster/better.\n4. CHECK YOUR ANSWER: Substitution, estimation, and sanity/units checks.\n5. EXAM-STYLE QUESTIONS: 5 practice problems graded in difficulty (1 to 5 stars) with space for working and answers at the bottom.\n6. WATCH OUT FOR: Unit conversion traps, negative number errors, rounding at the wrong stage, and reading the question incorrectly.\n\nSTYLE:\nClean problem-solving worksheet layout, premium textbook aesthetic, clean white background, balanced and highly readable.\n\nLANGUAGE: The final poster language must be {{LANGUAGE}}.",
        "image": "images/math/2.png",
        "variables": [
          {"name": "PROBLEM_TYPE", "labelAr": "نوع المسائل الرياضية", "labelEn": "Problem Type", "placeholderAr": "مثال: حل المعادلات الخطية / مسائل المساحة والمحيط", "placeholderEn": "e.g. Solving linear equations / Area & perimeter"},
          {"name": "GRADE", "labelAr": "المرحلة الدراسية", "labelEn": "Grade Level", "placeholderAr": "مثال: المرحلة الإعدادية", "placeholderEn": "e.g. Middle School"},
          {"name": "LANGUAGE", "labelAr": "لغة ورقة العمل", "labelEn": "Worksheet Language", "placeholderAr": "مثال: العربية / English", "placeholderEn": "e.g. Arabic / English"}
        ]
      },
      {
        "id": 3,
        "titleAr": "ملصق التسلسل الهرمي للمجموعات العددية",
        "titleEn": "Number Systems Hierarchy Venn Diagram",
        "textAr": "الدور:\nمصمم ملصقات علمية وبصرية أكاديمية محترف.\n\nاللوحة:\nملصق تعليمي علمي مقاس A4 عمودي (Portrait)، بدقة 300 نقطة لكل بوصة.\n\nالموضوع:\nمخطط فين (Venn Diagram) متداخل يوضح التسلسل الهرمي للمجموعات العددية (Number Systems) لطلاب المستوى الدراسي: {{GRADE}}.\n\nالحلقات المتداخلة (من الداخل إلى الخارج):\n1. الأعداد الطبيعية (Natural Numbers - N): الأعداد 1, 2, 3...\n2. الأعداد الكلية (Whole Numbers - W): يضاف إليها الصفر.\n3. الأعداد الصحيحة (Integers - Z): يضاف إليها الأعداد السالبة.\n4. الأعداد النسبية (Rational Numbers - Q): يضاف إليها الكسور والكسور العشرية.\n5. الأعداد غير النسبية (Irrational Numbers): مثل ط (pi)، الجذر التربيعي لـ 2، والعدد النيبيري e.\n6. الأعداد الحقيقية (Real Numbers - R): تشمل جميع المجموعات أعلاه متحدة.\n7. الأعداد المركبة/العقدية (Complex Numbers - C): تشمل الأعداد التخيلية (i).\n\nلكل حلقة عددية:\n- التعريف الرياضي الرسمي للمجموعة.\n- 5 أمثلة رقمية واضحة.\n- الخصائص الرياضية الأساسية.\n- التطبيقات العملية لها في الحياة الواقعية.\n\nالتصميم والجمالية:\nملصق علمي فاخر بلمسات عصرية، كل حلقة تضيء بلونها الخاص المخصص لها بشكل متألق يشبه النظام الكوكبي. خلفية بلون الفضاء الأزرق الداكن (Deep Space Dark Blue) مع رموز وصيغ رياضية تطفو بنعومة في الخلفية، إضاءة سينمائية ساحرة.\n\nاللغة المطلوبة للبوستر: {{LANGUAGE}}.",
        "textEn": "SYSTEM ROLE: Premium academic scientific poster designer.\n\nCANVAS:\nA4 portrait, 300 DPI.\n\nTOPIC:\nNested Venn diagram showing the hierarchy of number systems for {{GRADE}} level.\n\nRINGS FROM INSIDE OUT:\n1. Natural Numbers (N) - counting numbers 1, 2, 3...\n2. Whole Numbers (W) - adds zero.\n3. Integers (Z) - adds negatives.\n4. Rational Numbers (Q) - adds fractions/decimals.\n5. Irrational Numbers - e.g. pi, sqrt(2), e.\n6. Real Numbers (R) - all above combined.\n7. Complex Numbers (C) - adds imaginary (i).\n\nFOR EACH RING:\n- Formal definition.\n- 5 example numbers.\n- Key mathematical properties.\n- Real-world application.\n\nVISUALS:\nEach ring glows with its assigned color, like a planetary system. Deep space dark blue background with mathematical symbols floating softly. Cinematic lighting, professional hierarchy.\n\nLANGUAGE: The final poster language must be {{LANGUAGE}}.",
        "image": "images/math/3.png",
        "variables": [
          {"name": "GRADE", "labelAr": "المرحلة الدراسية", "labelEn": "Grade Level", "placeholderAr": "مثال: المرحلة الثانوية / الجامعة", "placeholderEn": "e.g. High School / University"},
          {"name": "LANGUAGE", "labelAr": "لغة الملصق", "labelEn": "Poster Language", "placeholderAr": "مثال: العربية / English", "placeholderEn": "e.g. Arabic / English"}
        ]
      },
      {
        "id": 4,
        "titleAr": "ملصق النظريات الهندسية الدقيقة",
        "titleEn": "Geometry Theorems Precision Poster",
        "textAr": "الدور:\nمصمم ومخطط رسومات هندسية دقيقة للمناهج التعليمية العالمية.\n\nاللوحة:\nملصق هندسي تعليمي مقاس A4 عمودي (Portrait)، بدقة 300 نقطة لكل بوصة.\n\nالموضوع:\nملصق تعليمي لشرح وتوضيح نظرية/نظريات هندسية: {{THEOREM}} الموجه للمستوى الدراسي: {{LEVEL}}.\n\nالمكونات المطلوبة لكل نظرية:\n1. اسم النظرية: عنوان بارز وواضح.\n2. النص الرسمي للنظرية: الصيغة الرياضية الدقيقة للـ {{THEOREM}}.\n3. المخطط الهندسي: رسم هندسي كبير ودقيق للغاية، مع تسمية جميع الزوايا والأطوال وربطها بالألوان مع خطوات البرهان.\n4. البرهان البصري: خطوات برهان بصرية متدرجة وليست مجرد معادلات جبرية.\n5. الصيغة الرياضية: موضوعة في مربع ملون وبارز.\n6. مثال عددي محلول: مسألة عملية واحدة تم حلها بالخطوات والتوضيح.\n7. النظرية العكسية (Converse): إن وجدت (مع توضيح الحالات التي لا تنطبق عليها).\n8. التطبيقات الواقعية: أين وكيف يتم استخدام هذه النظرية في الواقع.\n\nالعناصر المرئية والجمالية:\nتضمين أدوات الرسم الهندسي (أيقونات الفرجار، المسطرة، والمنقلة) كإشارات توضيحية. تصميم هندسي دقيق ونظيف، خلفية بيضاء نقية، لمسات وتفاصيل باللون الأزرق الكامبريدجي (Cambridge Blue) الفاخر.\n\nاللغة المطلوبة للبوستر: {{LANGUAGE}}.",
        "textEn": "SYSTEM ROLE: Precision mathematical blueprint and geometry educational designer.\n\nCANVAS:\nA4 portrait, 300 DPI.\n\nTOPIC:\nGeometry theorem poster explaining: {{THEOREM}} for {{LEVEL}} level.\n\nFOR EACH THEOREM:\n1. THEOREM NAME: Prominent heading.\n2. FORMAL STATEMENT: Exact mathematical theorem statement.\n3. DIAGRAM: Large, precisely constructed geometric figure with labeled angles/lengths, color-coded to match the proof.\n4. PROOF: Visual step-by-step proof.\n5. FORMULA: Boxed, colored, prominent.\n6. NUMERICAL EXAMPLE: One fully solved practical problem.\n7. CONVERSE: If applicable (what it doesn't mean/when it doesn't hold).\n8. REAL-WORLD USE: Where this geometry concept is applied.\n\nCONSTRUCTION TOOLS SHOWN:\nCompass, ruler, and protractor icons indicating construction steps.\n\nSTYLE:\nPrecision engineering drawing meets premium textbook, clean white background, Cambridge blue accents.\n\nLANGUAGE: The final poster language must be {{LANGUAGE}}.",
        "image": "images/math/4.png",
        "variables": [
          {"name": "THEOREM", "labelAr": "النظرية الهندسية", "labelEn": "Geometry Theorem", "placeholderAr": "مثال: نظرية فيثاغورس / نظريات الدائرة", "placeholderEn": "e.g. Pythagorean Theorem / Circle Theorems"},
          {"name": "LEVEL", "labelAr": "المرحلة الدراسية", "labelEn": "Grade Level", "placeholderAr": "مثال: المرحلة الإعدادية / الثانوية", "placeholderEn": "e.g. Middle school / High school"},
          {"name": "LANGUAGE", "labelAr": "لغة الملصق", "labelEn": "Poster Language", "placeholderAr": "مثال: العربية / English", "placeholderEn": "e.g. Arabic / English"}
        ]
      },
      {
        "id": 5,
        "titleAr": "إنفوجرافيك الإحصاء التعليمي",
        "titleEn": "Statistics Educational Infographic",
        "textAr": "الدور:\nمصمم رسوم بيانية وصحافة بيانات تعليمية محترف.\n\nاللوحة:\nملصق إنفوجرافيك إحصائي تعليمي مقاس A4 عمودي (Portrait)، بدقة 300 نقطة لكل بوصة.\n\nالموضوع:\nإنفوجرافيك توضيحي شامل لموضوع الإحصاء: {{STATS_TOPIC}} الموجه للمستوى الدراسي: {{GRADE_LEVEL}}.\n\nالمحتويات المطلوبة:\n- التعريف والصيغة الرياضية الأساسية.\n- رسم بياني توضيحي دقيق (مثل: منحنى التوزيع الطبيعي، مخطط الصندوق والشاربين، الرسوم البيانية الشريطية ودائرة النسب).\n- مثال عملي محلول بالخطوات الرياضية بالتفصيل.\n- تطبيقات واقعية لتحليل البيانات في الصحافة، التمويل، أو العلوم الطبية.\n- نصائح وتقنيات للتعامل مع المسائل الإحصائية في الاختبارات.\n\nالأسلوب والجمالية:\nجمالية صحافة البيانات المهنية (أسلوب بلومبرج Bloomberg)، تصميم نظيف بخلفية بيضاء نقية، ورسوم بيانية فائقة الدقة والوضوح.\n\nاللغة المطلوبة للبوستر: {{LANGUAGE}}.",
        "textEn": "SYSTEM ROLE: Professional data journalism and statistics educator design expert.\n\nCANVAS:\nStatistics educational infographic, A4 portrait, 300 DPI.\n\nTOPIC:\nVisual guide explaining: {{STATS_TOPIC}} for {{GRADE_LEVEL}}.\n\nCONTENT:\nDefinition + fundamental formula + visual graph (bell curves, box plots, bar/pie charts as appropriate) + fully worked step-by-step example + real-world data analysis application + exam technique tips.\n\nSTYLE:\nBloomberg data journalism aesthetic, clean white background, precise clean charts, highly legible.\n\nLANGUAGE: The final poster language must be {{LANGUAGE}}.",
        "image": "images/math/5.png",
        "variables": [
          {"name": "STATS_TOPIC", "labelAr": "موضوع الإحصاء", "labelEn": "Statistics Topic", "placeholderAr": "مثال: التوزيع الطبيعي / حساب المتوسط والوسيط والمنوال", "placeholderEn": "e.g. Normal Distribution / Mean, Median, Mode"},
          {"name": "GRADE_LEVEL", "labelAr": "المرحلة الدراسية", "labelEn": "Grade Level", "placeholderAr": "مثال: المرحلة الإعدادية / الثانوية", "placeholderEn": "e.g. Middle school / High school"},
          {"name": "LANGUAGE", "labelAr": "لغة الملصق", "labelEn": "Poster Language", "placeholderAr": "مثال: العربية / English", "placeholderEn": "e.g. Arabic / English"}
        ]
      },
      {
        "id": 6,
        "titleAr": "إنفوجرافيك السبورة المدرسية لشرح المسائل الرياضية (9:16)",
        "titleEn": "Math Chalkboard Explanation Infographic (9:16)",
        "textAr": "الدور:\nمصمم وسائط تعليمية رقمية ومقاطع فيديو تفاعلية محترف.\n\nاللوحة:\nإنفوجرافيك سبورة رياضية بنسبة عرض إلى ارتفاع عمودية 9:16 (مثالية للهواتف الذكية ومنصات التواصل الاجتماعي).\n\nالموضوع:\nتحويل مسألة أو موضوع درس: {{TOPIC_TITLE}} الذي يحتوي على: {{CONTENT}} إلى شرح تفصيلي خطوة بخطوة على سبورة مدرسية.\n\nالأسلوب والتصميم:\nسبورة مدرسية داكنة (Dark Chalkboard) مكتوب عليها بخط طباشيري نظيف ومتقن للرياضيات (chalk writing)، باستخدام ألوان الطباشير الأبيض والأصفر والأزرق. معادلات رياضية مصطفة بدقة فائقة مع إطار ملون ومميز حول الإجابة النهائية.\n\nتخطيط اللوحة (Layout):\n- عنوان الدرس والمسألة في الأعلى.\n- الخطوات من الخطوة 1 إلى الخطوة 4 مكتوبة بوضوح شديد وتفصيل رياضي.\n- استخدام أسهم إرشادية بين الخطوات لتوضيح مسار الحل.\n- وضع دوائر طباشيرية حول الأرقام الهامة أو القواعد المطبقة.\n- الإجابة النهائية في الأسفل داخل صندوق طباشيري ساطع ومميز.\n\nالمتطلبات الهامة:\nيجب أن تكون المعادلات واضحة ومقروءة تماماً بدون خطوط صغيرة أو غامضة، لتبدو كأنها سبورة حقيقية يشرح عليها معلم متميز داخل الفصل الدراسي لحل الواجبات أو المسائل الرياضية.\n\nاللغة المطلوبة للبوستر: {{LANGUAGE}}.",
        "textEn": "SYSTEM ROLE: Professional chalkboard educational media designer.\n\nCANVAS:\nVertical chalkboard infographic, 9:16 aspect ratio, mobile-ready.\n\nTOPIC:\nStep-by-step chalkboard explanation of: {{TOPIC_TITLE}} detailing: {{CONTENT}}.\n\nSTYLE:\nDark chalkboard background with clean, high-precision chalk math writing (white, yellow, and blue chalk). Neatly aligned equations. Highlighted final answer box.\n\nLAYOUT:\nProblem/title at top. Step 1 through Step 4 written clearly with arrows indicating logical progression. Important numbers and rules circled in chalk. Final answer placed at the bottom in a bright highlighted chalk box.\n\nREQUIREMENTS:\nMust be highly readable, no tiny equations, looks like a real teacher explaining on the classroom board. Perfect for solving homework pages or handwritten math.\n\nLANGUAGE: The final poster language must be {{LANGUAGE}}.",
        "image": "images/math/6.png",
        "variables": [
          {"name": "TOPIC_TITLE", "labelAr": "عنوان مسألة الرياضيات", "labelEn": "Math Topic Title", "placeholderAr": "مثال: حل معادلة تفاضلية / شرح مسألة كسور", "placeholderEn": "e.g. Solving a differential equation / Fractions explanation"},
          {"name": "CONTENT", "labelAr": "محتوى المسألة أو الشرح بالتفصيل", "labelEn": "Problem Content Details", "placeholderAr": "مثال: اكتب الخطوات والحل الرياضي المراد شرحه", "placeholderEn": "e.g. Write down the steps and mathematical equations to explain"},
          {"name": "LANGUAGE", "labelAr": "لغة الشرح", "labelEn": "Explanation Language", "placeholderAr": "مثال: العربية / English", "placeholderEn": "e.g. Arabic / English"}
        ]
      }
    ]
  },
  {
    "id": "science",
    "category": "sciences",
    "titleAr": "العلوم",
    "titleEn": "Science",
    "descAr": "أوامر لتجارب وأنشطة علمية ممتعة",
    "descEn": "Prompts for fun scientific experiments and activities",
    "icon": "🔬",
    "colorClass": "card-science",
    "prompts": [
      {
        "id": 1,
        "titleAr": "تجربة دورة المياه في الطبيعة",
        "titleEn": "Water Cycle Experiment",
        "textAr": "صمم تجربة علمية بسيطة وآمنة يمكن تنفيذها داخل الصف لشرح دورة الماء باستخدام أدوات متوفرة.",
        "textEn": "Design a simple, safe classroom science experiment to explain the water cycle using easily available household materials.",
        "image": "images/science/1.png"
      },
      {
        "id": 2,
        "titleAr": "رحلة افتراضية في الجهاز الهضمي",
        "titleEn": "Virtual Tour of Digestive System",
        "textAr": "اكتب نصاً لقصة إرشادية تأخذ الطلاب في رحلة تخيلية داخل الجهاز الهضمي البشري لشرح وظيفة كل عضو.",
        "textEn": "Write an instructional narrative taking students on a virtual journey inside the human digestive system to explain the function of each organ.",
        "image": "images/science/2.png"
      }
    ]
  },
  {
    "id": "quran",
    "category": "islamic",
    "titleAr": "القرآن الكريم والتربية الإسلامية",
    "titleEn": "Holy Quran & Islamic Studies",
    "descAr": "أدوات متميزة لتصميم إنفوجرافيك العبادات الفقهية، السيرة النبوية، القراءات، لوحات الآيات، والسير الذاتية للعلماء",
    "descEn": "Premium tools to design Fiqh infographics, Seerah timelines, Quranic readings, calligraphy, and scholar bios",
    "icon": "📖",
    "colorClass": "card-quran",
    "prompts": [
      {
        "id": 1,
        "titleAr": "إنفوجرافيك العبادات الفقهية والتربية الإسلامية",
        "titleEn": "Islamic Studies & Fiqh Infographic",
        "textAr": "Use imgGenTool to create a premium Islamic studies educational infographic.\n\nالموضوع:\nشرح وتوضيح المفهوم الفقهي/الشرعي: {{TOPIC}} في فرع: {{BRANCH}} لطلاب المستوى: {{LEVEL}}.\n\nكتل المحتوى المتضمنة (RTL بالكامل):\n1. التعريف الشرعي: التعريف لغةً واصطلاحاً + الدليل الشرعي (آية أو حديث مُسنَد) + الحكم الفقهي (واجب/مستحب/مباح/مكروه/محرم).\n2. الأركان والشروط: الأركان مرتبة ومرقّمة مع شرح مبسط، الشروط كاملة، السنن والمستحبات بلون مميز، والمبطلات باللون الأحمر.\n3. مخطط العملية: خطوات العبادة تسلسلياً (كالوضوء أو الصلاة) موضحاً (الاسم + الفعل + الدليل) مع رسم توضيحي غير بشري (رموز هندسية إسلامية فقط).\n4. الأحكام الفرعية: 5 مسائل فقهية شائعة (السؤال -> الحكم -> الدليل).\n5. مصطلحات المادة: 10 مصطلحات فقهية/عقدية مرتبة أبجدياً مع تعريفاتها.\n6. المراجع العلمية: مصادر موثوقة (القرآن، البخاري ومسلم، المذاهب الأربعة).\n\n⚠️ قواعد صارمة: لا تصوير للأنبياء والصحابة مطلقاً (رموز وأشكال هندسية فقط). لا فتاوى غير موثقة.\n\nالأسلوب والجمالية:\nأخضر إسلامي عميق + ذهبي + عاجي، خط عربي أكاديمي، نقوش هندسية إسلامية خفيفة. A4 عمودي 300 DPI. --ar 2:3",
        "textEn": "Use imgGenTool to create a premium Islamic studies educational infographic.\n\nTOPIC:\nVisual guide to the Islamic/Fiqh topic: {{TOPIC}} in the branch of: {{BRANCH}} for {{LEVEL}} level.\n\nCONTENT BLOCKS (RTL Layout):\n1. CORE DEFINITION: Linguistic and Islamic definition, authentic evidence (Quranic verse or Hadith), and Fiqh ruling.\n2. PILLARS & CONDITIONS: Ordered pillars with explanations, complete conditions checklist, sunnahs highlighted, and nullifiers in red.\n3. PROCESS FLOW CHART: Step-by-step worship steps (e.g. Wudu/Salah) with name, action, and evidence. (No animate beings or faces, only geometric shapes).\n4. SUB-RULINGS: 5 common Fiqh questions (Question -> Ruling -> Evidence).\n5. GLOSSARY: 10 Fiqh terms defined alphabetically.\n6. REFERENCES: Verified Islamic sources (Quran, Bukhari, Muslim, Four Schools of Fiqh).\n\n⚠️ STRICT RULES: No depiction of Prophets or Companions (geometric/abstract icons only). No unverified rulings.\n\nSTYLE:\nDeep Islamic green, gold, and ivory, academic Arabic calligraphy, subtle geometric patterns. A4 portrait, 300 DPI. --ar 2:3",
        "image": "images/ISLAMIC STUDIES/1.png",
        "variables": [
          {"name": "TOPIC", "labelAr": "الموضوع الفقهي/الشرعي", "labelEn": "Fiqh/Islamic Topic", "placeholderAr": "مثال: شروط الصلاة وأركانها / أحكام الصيام", "placeholderEn": "e.g. Prayer Pillars / Fasting Rules"},
          {"name": "BRANCH", "labelAr": "الفرع العلمي", "labelEn": "Branch", "placeholderAr": "مثال: فقه / عقيدة / سيرة / تفسير", "placeholderEn": "e.g. Fiqh / Aqeedah / Seerah / Tafseer"},
          {"name": "LEVEL", "labelAr": "المستوى الدراسي", "labelEn": "Grade Level", "placeholderAr": "مثال: ابتدائي / متوسط / ثانوي", "placeholderEn": "e.g. Primary / Middle / High school"}
        ]
      },
      {
        "id": 2,
        "titleAr": "إنفوجرافيك السيرة النبوية والتاريخ الإسلامي",
        "titleEn": "Islamic History & Seerah Infographic",
        "textAr": "Use imgGenTool to create a premium Islamic history and Seerah educational infographic.\n\nالموضوع:\nعرض وتوضيح السيرة والتاريخ الإسلامي في موضوع: {{TOPIC}} خلال الحقبة: {{ERA}} لطلاب المستوى: {{LEVEL}}.\n\nكتل المحتوى المتضمنة (RTL بالكامل):\n1. السياق التاريخي: الوضع قبل الحدث (سياسياً واجتماعياً ودينياً) + التاريخ الهجري والميلادي + خريطة الموقع الجغرافي التاريخي.\n2. الجدول الزمني: 8-10 أحداث رئيسية مرتبة تاريخياً، كل حدث يوضح (التاريخ + الحدث + الدلالة) مع إبراز نقاط التحول بـ ★.\n3. الشخصيات الرئيسية: 4-6 شخصيات، توضح (الاسم + اللقب + الدور + الموقف)، دون رسم وجوه أو صور (رموز هندسية فقط).\n4. الدروس المستفادة: 5 دروس تربوية وحضارية مصاغة بأسلوب إيجابي معاصر.\n5. النص الشرعي: آية أو حديث موثق مرتبط بالموضوع.\n6. الأثر الحضاري: أثر هذا الحدث على الحضارة الإسلامية وصلته بالواقع المعاصر.\n\nالمراجع: السيرة النبوية لابن هشام، تاريخ الطبري، البداية والنهاية.\n⚠️ قواعد صارمة: لا تصوير للأنبياء والصحابة مطلقاً (رموز فقط). لا أحداث مخترعة.\n\nالأسلوب والجمالية (حقبة-تكيفي):\n- العهد النبوي: ألوان صحراوية دافئة، خريطة الجزيرة، هلال وقمر.\n- الخلافة الراشدة/الأموية: رق معتق، خطوط عربية تراثية.\n- العباسي/الأندلسي: أرابيسك غني، ذهبي وأزرق نيلي، عمارة إسلامية.\n- العثماني: أحمر وذهبي، عمارة جامع، طغراء.\nاتجاه RTL بالكامل، A4 عمودي 300 DPI. --ar 2:3",
        "textEn": "Use imgGenTool to create a premium Islamic history and Seerah educational infographic.\n\nTOPIC:\nInteractive guide explaining: {{TOPIC}} during the era of: {{ERA}} for {{LEVEL}} level.\n\nCONTENT BLOCKS (RTL Layout):\n1. HISTORICAL CONTEXT: Pre-event political/social landscape, Hijri & Gregorian dates, and a map in historical styling.\n2. TIMELINE: 8-10 major chronologically ordered events, showing date, description, and significance (milestones marked with ★).\n3. KEY FIGURES: 4-6 historical figures, showing name, title, role, and key stance. No faces/people (geometric symbols only).\n4. LESSONS LEARNED: 5 educational and civilizational lessons in positive, contemporary phrasing.\n5. SACRED TEXT: One verified Quranic verse or Hadith.\n6. LEGACY: Impact of this event on Islamic civilization and modern relevance.\n\n⚠️ STRICT RULES: No depiction of Prophets or Companions. No fictional events.\n\nSTYLE (Era-Adaptive):\n- Prophetic Era -> desert tones, Arabian Peninsula map, crescent.\n- Caliphate/Umayyad -> aged parchment, manuscript styling.\n- Abbasid/Andalusia -> rich Arabesque, gold and indigo, architecture.\n- Ottoman -> red & gold, mosques, tughra calligraphy.\nFull RTL, A4 portrait, 300 DPI. --ar 2:3",
        "image": "images/ISLAMIC STUDIES/2.png",
        "variables": [
          {"name": "TOPIC", "labelAr": "الموضوع التاريخي / الغزوة", "labelEn": "Historical Topic/Battle", "placeholderAr": "مثال: غزوة بدر / فتح مكة / الهجرة النبوية", "placeholderEn": "e.g. Battle of Badr / Conquest of Mecca"},
          {"name": "ERA", "labelAr": "الحقبة الزمنية", "labelEn": "Historical Era", "placeholderAr": "مثال: العهد النبوي / الخلافة الراشدة / الأموي / العباسي", "placeholderEn": "e.g. Prophetic Era / Rightly Guided Caliphs"},
          {"name": "LEVEL", "labelAr": "المستوى الدراسي", "labelEn": "Grade Level", "placeholderAr": "مثال: ابتدائي / متوسط / ثانوي / جامعي", "placeholderEn": "e.g. Primary / Middle / High / University"}
        ]
      },
      {
        "id": 3,
        "titleAr": "ملصق أركان الإسلام الخمسة المعماري",
        "titleEn": "Architectural Five Pillars Poster",
        "textAr": "Use imgGenTool to create a premium Islamic studies educational poster.\n\nالموضوع:\nملصق أركان الإسلام الخمسة (أو أركان الإيمان الستة) الموجه لطلاب المستوى الدراسي: {{LEVEL}}.\n\nالتصميم والجمالية (طابع معماري إسلامي فاخر باللون الأخضر الداكن والذهبي):\n- تمثيل كل ركن كعمود معماري (رخامي أو حجري).\n- الركن الأول: الشهادتان.\n- الركن الثاني: الصلاة (أوقات الصلوات الخمس).\n- الركن الثالث: الزكاة (أحكام ومستحقي الزكاة).\n- الركن الرابع: الصيام (قواعد صيام رمضان).\n- الركن الخامس: الحج (خطوات ومناسك الحج).\n- حجر الأساس: التوحيد.\n- السقف العلوي: الجنة فوق الأعمدة بالكامل.\n\nلكل ركن:\nالاسم العربي + الترجمة الصوتية والإنجليزية + الالتزام الأساسي + الفائدة الروحية + الشاهد القرآني.\n\nالعناصر الزخرفية:\nإطار هندسي إسلامي، نقوش أرابيسك، هلال ونجمة.\n\nالأسلوب:\nملصق تعليمي بمستوى المتاحف الإسلامية، مقاس A3 عمودي، بدقة 300 نقطة لكل بوصة. اللغة المطلوبة: {{LANGUAGE}}.",
        "textEn": "Use imgGenTool to create a premium Islamic studies educational poster.\n\nTOPIC:\nThe Five Pillars of Islam (or Six Articles of Faith) for {{LEVEL}} level.\n\nDESIGN (Premium deep green and gold Islamic architecture style):\n- Each pillar rendered as a detailed architectural column (marble/stone aesthetic).\n- Pillar 1: Shahadah (faith statement).\n- Pillar 2: Salah (5 daily prayers).\n- Pillar 3: Zakat (charity guidelines).\n- Pillar 4: Sawm (Ramadan fasting).\n- Pillar 5: Hajj (pilgrimage steps).\n- Foundation Stone: Tawheed.\n- Roof: Jannah (paradise) above all columns.\n\nFOR EACH PILLAR:\nArabic name, transliteration, English translation, core obligation, spiritual benefit, and Quranic reference.\n\nDECORATIVE ELEMENTS:\nIslamic geometric borders, arabesque patterns, crescent & star.\n\nSTYLE:\nMuseum-quality Islamic educational poster, A3 portrait, 300 DPI.\n\nLANGUAGE: The final poster language must be {{LANGUAGE}}.",
        "image": "images/ISLAMIC STUDIES/3.png",
        "variables": [
          {"name": "LEVEL", "labelAr": "المرحلة الدراسية", "labelEn": "Grade Level", "placeholderAr": "مثال: المرحلة الابتدائية / جميع الأعمار", "placeholderEn": "e.g. Primary School / All Ages"},
          {"name": "LANGUAGE", "labelAr": "لغة البوستر", "labelEn": "Poster Language", "placeholderAr": "مثال: العربية / English / ثنائية اللغة", "placeholderEn": "e.g. Arabic / English / Bilingual"}
        ]
      },
      {
        "id": 4,
        "titleAr": "إنفوجرافيك الأشهر الهجرية والمناسبات الإسلامية",
        "titleEn": "Islamic Hijri Calendar Infographic",
        "textAr": "Use imgGenTool to create an Islamic months calendar infographic.\n\nالموضوع:\nتقويم الأشهر الهجرية للسنة الهجرية: {{HIJRI_YEAR}}.\n\nالمحتويات المطلوبة لجميع الأشهر الهجرية الـ 12:\n- اسم الشهر باللغتين العربية والإنجليزية.\n- المناسبات الإسلامية الكبرى وتواريخها (مثل رمضان، عيد الفطر، عيد الأضحى، المولد النبوي، عاشوراء).\n- العبادات الموصى بها في كل شهر (كصيام التطوع، الصلاة، الذكر).\n- ما يعادل التواريخ الميلادية.\n- أيقونات أطوار القمر لتوضيح بداية الشهور.\n- تسليط الضوء على الليالي الخاصة (ليلة القدر، ليلة الإسراء والمعراج، إلخ).\n\nالأسلوب والجمالية:\nجمالية إسلامية باللون الأخضر الداكن والذهبي، خط عربي أنيق، إطار بنقوش هندسية متميزة. مقاس A3 عمودي جاهز للطباعة. التركيز المطلوب: {{FOCUS}} | اللغة المطلوبة: {{LANGUAGE}}.",
        "textEn": "Use imgGenTool to create an Islamic months calendar infographic.\n\nTOPIC:\nHijri months calendar for the year: {{HIJRI_YEAR}}.\n\nINCLUDE ALL 12 MONTHS WITH:\n- Month name (Arabic and transliteration).\n- Key Islamic occasions and dates (Ramadan, Eids, Ashura, etc.).\n- Recommended worship highlights (fasting, prayer, dhikr).\n- Gregorian date equivalents.\n- Moon phase icons.\n- Special nights (Laylat al-Qadr, Laylat al-Isra).\n\nSTYLE:\nDeep green and gold Islamic aesthetic, elegant Arabic typography, geometric patterns border. A3 portrait, print-ready.\n\nCALENDAR FOCUS: {{FOCUS}} | LANGUAGE: {{LANGUAGE}}.",
        "image": "images/ISLAMIC STUDIES/4.png",
        "variables": [
          {"name": "HIJRI_YEAR", "labelAr": "السنة الهجرية", "labelEn": "Hijri Year", "placeholderAr": "مثال: 1447 هـ", "placeholderEn": "e.g. 1447 AH"},
          {"name": "FOCUS", "labelAr": "تركيز التقويم", "labelEn": "Calendar Focus", "placeholderAr": "مثال: السنة الكاملة / شهر رمضان فقط / المناسبات الكبرى", "placeholderEn": "e.g. Full Year / Ramadan only / Major Occasions"},
          {"name": "LANGUAGE", "labelAr": "لغة التقويم", "labelEn": "Calendar Language", "placeholderAr": "مثال: العربية / English / ثنائية اللغة", "placeholderEn": "e.g. Arabic / English / Bilingual"}
        ]
      },
      {
        "id": 5,
        "titleAr": "مخطط زمن حضارات العالم الإسلامي",
        "titleEn": "Islamic Civilization History Timeline",
        "textAr": "Use imgGenTool to create an Islamic civilization history timeline infographic.\n\nالموضوع:\nمخطط زمني للحضارة الإسلامية في حقبة: {{ERA}}.\n\nأقسام المخطط الزمني:\n1. اسم الحقبة والتواريخ بالهجري والميلادي.\n2. الحكام والخلفاء الأبرز: أسماؤهم وأهم إنجازاتهم.\n3. خريطة جغرافية توضح اتساع الدولة الإسلامية في ذروتها.\n4. إسهامات العصر الذهبي: في العلوم، الفنون، العمارة، والتجارة.\n5. العلماء البارزون الذين ولدوا في هذه الحقبة.\n6. الأحداث الكبرى: المعارك، الاتفاقيات، والمنعطفات الثقافية.\n7. الإرث التاريخي: أثر هذه الحقبة على الحضارة الإنسانية بالكامل.\n\nالمصادر: ابن خلدون، الطبري، اليونسكو.\nالأسلوب والجمالية: درجات الرق العتيق الدافئة، إطارات زخرفية هندسية إسلامية، مقاس A4 عمودي بدقة 300 نقطة لكل بوصة. اللغة المطلوبة: {{LANGUAGE}}.",
        "textEn": "Use imgGenTool to create an Islamic civilization history timeline infographic.\n\nTOPIC:\nHistorical timeline of the Islamic civilization during the era: {{ERA}}.\n\nTIMELINE SECTIONS:\n1. ERA NAME and dates (both Hijri and Gregorian).\n2. KEY RULERS: Names and major achievements.\n3. TERRITORIAL MAP: Geographic extent of the Islamic world at its peak.\n4. GOLDEN AGE CONTRIBUTIONS: Science, art, architecture, and trade.\n5. NOTABLE SCHOLARS born in this era.\n6. MAJOR EVENTS: Battles, treaties, and cultural milestones.\n7. LEGACY: Historical impact on world civilization.\n\nSOURCES: Ibn Khaldun, Tabari, UNESCO.\nSTYLE:\nWarm parchment tones, Islamic geometric borders, A4 portrait, 300 DPI.\n\nLANGUAGE: The final poster language must be {{LANGUAGE}}.",
        "image": "images/ISLAMIC STUDIES/5.png",
        "variables": [
          {"name": "ERA", "labelAr": "الحقبة التاريخية", "labelEn": "Historical Era", "placeholderAr": "مثال: الخلفاء الراشدون / الأموي / العباسي / الأندلس / العثماني", "placeholderEn": "e.g. Rightly Guided Caliphs / Umayyad / Abbasid / Andalusia"},
          {"name": "LANGUAGE", "labelAr": "لغة المخطط", "labelEn": "Timeline Language", "placeholderAr": "مثال: العربية / English / ثنائية اللغة", "placeholderEn": "e.g. Arabic / English / Bilingual"}
        ]
      },
      {
        "id": 6,
        "titleAr": "لوحة فنية لآية قرآنية بالخط العربي المزخرف",
        "titleEn": "Islamic Quranic Calligraphy Artwork",
        "textAr": "صمم لوحة فنية لآية قرآنية بالخط العربي المزخرف:\n\nالآية الكريمة: {{EXACT_ARABIC_VERSE}}\nاسم السورة ورقم الآية: سورة {{SURAH}} - آية رقم {{NUM}}\n\nالتكوين البصري والجمالي:\n- في المنتصف: الآية الكريمة مكتوبة بخط الثلث أو النسخ العربي الفاخر فقط داخل خرطوشة زخرفية دائرية أو بيضاوية مذهبة.\n- في الجانبين: مئذنة ثلاثية الأبعاد بتفاصيل معمارية إسلامية أنيقة.\n- الخلفية: نقوش هندسية إسلامية متداخلة.\n- العمق البصري: تصميم متعدد الطبقات يشمل الخط العربي والعمارة الإسلامية والأجواء الروحانية المحيطة.\n\nلوحة الألوان المطلوبة (كود اللون الأساسي): {{HEX_COLOR}}\nخارطة الألوان المفضلة:\n- أزرق داكن وذهبي (ليلة جليلة).\n- أخضر زمردي ونباتي وذهبي (روضة هادئة).\n- ذهبي ونور الصباح (فجر مشرق).\n\n⚠️ قيود صارمة للغاية: يمنع تماماً رسم الكائنات الحية والوجوه البشرية أو الحيوانات. لابد من كتابة نص الآية الكريمة بضبط نحوي وخط عربي سليم 100% دون تداخل أحرف مشوهة.",
        "textEn": "Generate an Islamic Quranic Infographic Artwork:\n\nVERSE: {{EXACT_ARABIC_VERSE}}\nSURAH: {{SURAH}} | AYAH NUMBER: {{NUM}}\n\nVISUAL COMPOSITION:\n- Center: The exact Arabic verse in an Ornate Cartouche written in Thuluth or Naskh script ONLY.\n- Left/Right sides: Luminous 3D architectural minarets (no human/animal figures).\n- Background: Detailed Islamic geometric patterns.\n- Depth: Multi-layered (calligraphy + architecture + atmospheric background light).\n\nCOLOR THEME (Primary Hex): {{HEX_COLOR}}\nMood options:\n- #002F4B -> Majestic Night (Deep Blue + Gold)\n- #1A4D2E -> Serene Garden (Emerald + Floral + Gold)\n- #D4AF37 -> Regal Dawn (Gold + Morning Light)\n\n⚠️ CONSTRAINTS: Absolute zero human/animal depictions. Perfect, high-accuracy Arabic script writing only.",
        "image": "images/ISLAMIC STUDIES/6.png",
        "variables": [
          {"name": "EXACT_ARABIC_VERSE", "labelAr": "نص الآية القرآنية الكريمة", "labelEn": "Exact Quranic Verse Text", "placeholderAr": "مثال: الله نور السماوات والأرض", "placeholderEn": "e.g. Allah is the Light of the heavens and the earth"},
          {"name": "SURAH", "labelAr": "اسم السورة", "labelEn": "Surah Name", "placeholderAr": "مثال: النور", "placeholderEn": "e.g. Al-Noor"},
          {"name": "NUM", "labelAr": "رقم الآية", "labelEn": "Ayah Number", "placeholderAr": "مثال: 35", "placeholderEn": "e.g. 35"},
          {"name": "HEX_COLOR", "labelAr": "كود اللون أو الطابع اللوني", "labelEn": "Color Code Theme", "placeholderAr": "مثال: #002F4B (أزرق داكن وذهبي) / #1A4D2E (أخضر وذهبي)", "placeholderEn": "e.g. #002F4B (Blue/Gold) / #1A4D2E (Green/Gold)"}
        ]
      },
      {
        "id": 7,
        "titleAr": "إنفوجرافيك عادات وتقاليد رمضان في العالم الإسلامي",
        "titleEn": "Ramadan Traditions Across Islamic Nations",
        "textAr": "صمم إنفوجرافيك ثلاثي الأبعاد عن عادات وتقاليد الشعوب في رمضان:\n\nالدولة المستهدفة: {{COUNTRY_NAME}}\nالأسلوب البصري: إنفوجرافيك ثلاثي الأبعاد احترافي (Professional 3D Infographic) مع نقش بارز بالنقوش الإسلامية التقليدية الخاصة بالدولة.\n\nبنية الأقسام والمحتوى (RTL بالكامل):\n1. نبذة عامة: أجواء شهر رمضان المبارك في دولة {{COUNTRY_NAME}}.\n2. عادات الصيام: مواعيد وعادات الإفطار والسحور التقليدية الخاصة بالشعب.\n3. التقاليد الاجتماعية: العلاقات العائلية وأنشطة المجتمع المحلي في المساء.\n4. الأطعمة المشهورة: المأكولات والحلويات والمشروبات الرمضانية الأشهر في {{COUNTRY_NAME}}.\n5. العادات الدينية: صلاة التراويح والفعاليات الروحانية المحلية والمساجد الشهيرة.\n6. مظاهر الاحتفال: أشكال الفوانيس والزينة والمهرجانات الرمضانية المحلية.\n\nالمراجع: وزارة الأوقاف والشؤون الدينية في {{COUNTRY_NAME}}، اليونسكو للتراث الثقافي غير المادي.\nقاعدة هامة: يجب أن تتطابق جميع العناصر المرئية والمعلومات الناتجة مع ثقافة {{COUNTRY_NAME}} تحديداً دون تعميم أو صور نمطية. اللغة المطلوبة: العربية.",
        "textEn": "Generate a 3D Cultural Infographic:\n\nTITLE: Ramadan Traditions and Customs\nCOUNTRY: {{COUNTRY_NAME}}\n\nDESIGN STYLE:\nProfessional 3D Infographic with 3D Relief Islamic pattern unique to {{COUNTRY_NAME}}.\n\nCONTENT STRUCTURE:\n- Section 1: Overview of Ramadan atmosphere in {{COUNTRY_NAME}}.\n- Section 2: Fasting customs (country-specific iftar/suhoor habits).\n- Section 3: Social traditions (family gatherings, community events).\n- Section 4: Popular dishes (popular Ramadan meals, drinks, and sweets in {{COUNTRY_NAME}}).\n- Section 5: Religious practices (Taraweeh, historic local mosques, and special prayers).\n- Section 6: Celebrations & Decor (lantern styles, street decorations, festivals).\n\nSOURCES: Ministry of Awqaf of {{COUNTRY_NAME}}, UNESCO Intangible Heritage.\nLANGUAGE: Arabic (RTL).",
        "image": "images/ISLAMIC STUDIES/7.png",
        "variables": [
          {"name": "COUNTRY_NAME", "labelAr": "اسم الدولة الإسلامية", "labelEn": "Islamic Country Name", "placeholderAr": "مثال: مصر / السعودية / إندونيسيا / المغرب", "placeholderEn": "e.g. Egypt / Saudi Arabia / Indonesia / Morocco"}
        ]
      },
      {
        "id": 8,
        "titleAr": "إنفوجرافيك القراءات القرآنية المتواترة",
        "titleEn": "Quranic Qira'at Educational Infographic",
        "textAr": "صمم إنفوجرافيك تعليمي عن القراءات القرآنية المتواترة:\n\nاسم القراءة القرآنية المطلوبة: {{QIRAAH_NAME}}\nالتنسيق: إنفوجرافيك مقاس A4 عمودي جاهز للطباعة والتعليق.\n\nالأسلوب البصري (إسلامي تعليمي):\n- لوحة ألوان من الأخضر الداكن والذهبي والعاجي.\n- زخارف إسلامية هندسية ناعمة في الأطراف.\n- خط عربي تراثي واضح للعناوين وخط أكاديمي مقروء للنصوص.\n- الفئة المستهدفة: طلاب علوم القرآن ومعلمو التربية الإسلامية.\n\nأقسام الإنفوجرافيك المطلوبة:\n1. عنوان القراءة: اسم القراءة القرآنية بخط بارز وزخرفي.\n2. الإمام القارئ: الاسم الكامل للإمام القارئ مع نبذة موجزة وموثقة عن حياته وسيرته.\n3. الراويان: اسما الراويين المعتمدين لهذه القراءة وتراجم مختصرة لهما.\n4. السند والتلقي: بيان تواتر القراءة ومنهج التلقي والمشافهة حتى الرسول ﷺ.\n5. الخصائص والأصول: أبرز القواعد النحوية واللغوية والأدائية المميزة لهذه القراءة (كالإمالة، الهمزات، المدود).\n6. الانتشار الجغرافي: المناطق والبلدان التي اشتهرت بها القراءة تاريخياً ومعاصراً.\n7. إحصاءات: مكانة القراءة ضمن القراءات العشر المتواترة.\n8. أمثلة مقارنة: كلمات أو آيات مختارة توضح اختلاف النطق مقارنة بقراءة حفص عن عاصم.\n\nالمراجع: النشر في القراءات العشر لابن الجزري، غاية النهاية في طبقات القراء، القراءات العشر المتواترة لأيمن سويد. لغة الإنفوجرافيك: العربية.",
        "textEn": "Generate a Quranic Readings Infographic:\n\nQIRAAH NAME: {{QIRAAH_NAME}}\nFORMAT: A4 Vertical educational poster, print-ready.\n\nSTYLE:\nIslamic educational theme, color palette (deep green, gold, ivory), subtle geometric patterns, traditional clear Arabic fonts.\n\nSECTIONS INCLUDED:\n1. Title: Large ornate calligraphy of the Qira'at name.\n2. The Reciter (Imam): Full name and brief scholarly biography.\n3. The Two Narrators (Rawis): Verified names and brief descriptors.\n4. Sanad & Transmission: Details of oral transmission chain and token authentication.\n5. Key Linguistics/Acoustics: Phonetic rules, vowel expansions, and special pronunciation rules.\n6. Geography: Historical and current distribution maps across the Islamic world.\n7. Comparison Examples: Graded table of words and verses showing dialect differences vs Hafs.\n8. Scholarly Sources: Ibn al-Jazari, Ayman Swaid, King Fahd Holy Quran Printing Complex.\n\nLANGUAGE: Arabic (RTL).",
        "image": "images/ISLAMIC STUDIES/8.png",
        "variables": [
          {"name": "QIRAAH_NAME", "labelAr": "اسم القراءة القرآنية", "labelEn": "Quranic Qira'at Name", "placeholderAr": "مثال: قراءة نافع المدني / قراءة عاصم الكوفي / قراءة ابن كثير", "placeholderEn": "e.g. Qira'at Nafi' / Qira'at 'Asim / Qira'at Ibn Kathir"}
        ]
      },
      {
        "id": 9,
        "titleAr": "السيرة الذاتية لعلماء العصر الذهبي للإسلام",
        "titleEn": "Islamic Golden Age Scholar Biography Poster",
        "textAr": "صمم ملصق السيرة الذاتية التفاعلي لعلماء العصر الذهبي للإسلام:\n\nاسم العالم المسلم: {{SCHOLAR_NAME}}\nاللقب والشهرة: {{LAQAB}}\nالوظيفة/المسمى العلمي: {{TITLE}}\nالاسم الكامل بالعربية: {{FULL_NAME_AR}}\nمكان وتاريخ الولادة: ولد في {{BIRTHPLACE}} عام {{HIJRI_YEAR}} هـ / {{GREGORIAN_YEAR}} م\n\nأهم مجالاته العلمية:\n1. المجال الأول: {{FIELD_1}} | أبرز إنجاز فيه: {{ACHIEVEMENT_1}} | ابتكاره: {{INNOVATION_1}}\n2. المجال الثاني: {{FIELD_2}} | أبرز إنجاز فيه: {{ACHIEVEMENT_2}} | ابتكاره: {{INNOVATION_2}}\n3. المجال الثالث: {{FIELD_3}}\n\nإرث العالم ومؤلفاته:\n- كتاب المرجع الأساسي له: {{MAIN_BOOK_TITLE}}\n- قوله الشهير أو الحكمة المأثورة عنه: \"{{FAMOUS_QUOTE}}\"\n\nالتصميم والأسلوب البصري (العصر الذهبي للإسلام):\nملصق عمودي بنسبة 9:16 (ستوري/بوستر طولي) لطلاب العلم وعشاق التاريخ. في المنتصف يظهر بورتريه تخيلي وقور للعالم {{SCHOLAR_NAME}} بملابس تراثية أنيقة وهو يمسك بأداة علمه (كالأسطرلاب أو قلم لكتابة المخطوطات)، داخل إطار زخرفي عباسي مذهب على خلفية بلون التركواز الغامق والذهبي العتيق مع إضاءة سينمائية مهيبة.\n\nالمراجع: مقدمة ابن خلدون، تاريخ الطبري، معجم البلدان، اليونسكو للعلوم والابتكار. اللغة المطلوبة: العربية.",
        "textEn": "Generate an Islamic Golden Age Scholar Biography Poster:\n\nSCHOLAR: {{SCHOLAR_NAME}}\nTITLE/LAQAB: {{LAQAB}} | {{TITLE}}\nFULL NAME ARABIC: {{FULL_NAME_AR}}\nBIODATA: Born in {{BIRTHPLACE}} in the year {{HIJRI_YEAR}} AH / {{GREGORIAN_YEAR}} CE.\nPROFESSIONS: {{FIELD_1}}, {{FIELD_2}}, {{FIELD_3}}.\n\nSCIENTIFIC ACHIEVEMENTS:\n- Category: {{FIELD_1}} -> Detail: {{ACHIEVEMENT_1}} | Innovation: {{INNOVATION_1}}\n- Category: {{FIELD_2}} -> Detail: {{ACHIEVEMENT_2}} | Innovation: {{INNOVATION_2}}\n\nLEGACY FOOTER:\n- Main Book: {{MAIN_BOOK_TITLE}}\n- Famous Quote: \"{{FAMOUS_QUOTE}}\"\n\nSTYLE:\nIslamic Golden Age (Cinematic Heritage) poster, aspect ratio 9:16 portrait. Central figure: dignified scholar {{SCHOLAR_NAME}} in Abbasid robes holding a scientific apparatus (astrolabe, compass or quill), gold embossed calligraphic title on a deep teal and antique gold background. Rembrandt cinematic lighting.\n\nLANGUAGE: Arabic (RTL).",
        "image": "images/ISLAMIC STUDIES/9.png",
        "variables": [
          {"name": "SCHOLAR_NAME", "labelAr": "اسم العالم المسلم الشائع", "labelEn": "Scholar Common Name", "placeholderAr": "مثال: ابن الهيثم / الخوارزمي / ابن سينا", "placeholderEn": "e.g. Ibn al-Haytham / Al-Khwarizmi / Ibn Sina"},
          {"name": "LAQAB", "labelAr": "لقب وشهرة العالم", "labelEn": "Scholar Title/Laqab", "placeholderAr": "مثال: أبو البصريات / أبو الجبر / الشيخ الرئيس", "placeholderEn": "e.g. Father of Optics / Father of Algebra"},
          {"name": "TITLE", "labelAr": "تخصصه الأساسي", "labelEn": "Primary Field Title", "placeholderAr": "مثال: عالم فيزياء ورياضيات / طبيب وفيلسوف", "placeholderEn": "e.g. Physicist & Mathematician / Physician & Philosopher"},
          {"name": "FULL_NAME_AR", "labelAr": "الاسم الكامل الرسمي بالعربية", "labelEn": "Official Full Name in Arabic", "placeholderAr": "مثال: أبو علي الحسن بن الحسن بن الهيثم", "placeholderEn": "e.g. Abu Ali al-Hasan ibn al-Hasan ibn al-Haytham"},
          {"name": "BIRTHPLACE", "labelAr": "مكان الولادة والنشأة", "labelEn": "Birthplace", "placeholderAr": "مثال: البصرة (العراق)", "placeholderEn": "e.g. Basra (Iraq)"},
          {"name": "HIJRI_YEAR", "labelAr": "سنة الولادة الهجرية", "labelEn": "Hijri Year of Birth", "placeholderAr": "مثال: 354 هـ", "placeholderEn": "e.g. 354 AH"},
          {"name": "GREGORIAN_YEAR", "labelAr": "سنة الولادة الميلادية", "labelEn": "Gregorian Year of Birth", "placeholderAr": "مثال: 965 م", "placeholderEn": "e.g. 965 CE"},
          {"name": "FIELD_1", "labelAr": "المجال العلمي الأول", "labelEn": "First Scientific Field", "placeholderAr": "مثال: علم البصريات", "placeholderEn": "e.g. Optics"},
          {"name": "ACHIEVEMENT_1", "labelAr": "أبرز إنجاز في المجال الأول", "labelEn": "First Field Achievement", "placeholderAr": "مثال: تأسيس المنهج العلمي التجريبي وتفسير الرؤية بالانعكاس", "placeholderEn": "e.g. Formulating the scientific method & explaining sight"},
          {"name": "INNOVATION_1", "labelAr": "ابتكاره أو نموذجه في هذا المجال", "labelEn": "First Field Innovation", "placeholderAr": "مثال: اختراع القمرة (الغرفة المظلمة كنموذج أولي للكاميرا)", "placeholderEn": "e.g. Inventing the Camera Obscura (Al-Qumra)"},
          {"name": "FIELD_2", "labelAr": "المجال العلمي الثاني", "labelEn": "Second Scientific Field", "placeholderAr": "مثال: علم الفلك والرياضيات", "placeholderEn": "e.g. Astronomy & Mathematics"},
          {"name": "ACHIEVEMENT_2", "labelAr": "أبرز إنجاز في المجال الثاني", "labelEn": "Second Field Achievement", "placeholderAr": "مثال: تطوير نظرية الحركة الكوكبية وقياس الانكسار الجوي", "placeholderEn": "e.g. Measuring atmospheric refraction"},
          {"name": "INNOVATION_2", "labelAr": "ابتكاره أو معادلته في هذا المجال", "labelEn": "Second Field Innovation", "placeholderAr": "مثال: صياغة معادلات الانكسار ورسم خريطة حركة النجوم", "placeholderEn": "e.g. Formulating refraction equations"},
          {"name": "FIELD_3", "labelAr": "المجال العلمي الثالث والأخير", "labelEn": "Third Scientific Field", "placeholderAr": "مثال: الهندسة والطب", "placeholderEn": "e.g. Engineering & Medicine"},
          {"name": "MAIN_BOOK_TITLE", "labelAr": "عنوان كتابه المرجعي الأساسي", "labelEn": "Scholar Masterpiece Book Title", "placeholderAr": "مثال: كتاب المناظر", "placeholderEn": "e.g. Book of Optics (Kitab al-Manazir)"},
          {"name": "FAMOUS_QUOTE", "labelAr": "قوله الشهير أو حكمته المأثورة", "labelEn": "Scholar Famous Quote", "placeholderAr": "مثال: الحقيقة تطلب لذاتها، ومن يطلب الحقيقة عليه ألا يعتقد بآراء غيره", "placeholderEn": "e.g. The seeker after the truth is not one who studies the writings of the ancients"}
        ]
      }
    ]
  },
  {
    "id": "stickers",
    "category": "toolkit",
    "titleAr": "ملصقات وتصاميم",
    "titleEn": "Labels & Stickers",
    "descAr": "أوامر لتصميم ملصقات مدرسية ووسائل تعليمية مبتكرة",
    "descEn": "Prompts to design school labels and creative teaching aids",
    "icon": "🏷️",
    "colorClass": "card-english",
    "prompts": [
      {
        "id": 1,
        "titleAr": "مصمم ملصقات الأميرات المدرسية",
        "titleEn": "Fairytale Princess Labels Designer",
        "textAr": "الدور: مصمم ملصقات أطفال مخصصة وعالية الجودة. الإخراج: ورقة ملصقات واحدة فقط جاهزة للطباعة. اللوحة: حجم A4 عمودي، 300 نقطة لكل بوصة، خلفية كريمية زاهية، تحتوي على عشرة ملصقات قابلة للقص الفردي مع مسافات متباعدة وحدود بيضاء سميكة للقص (die-cut). الموضوع: ملصقات مدرسية مخصصة للأميرات من الحكايات الخيالية. محرك الصور: استخدم صورة الطفلة المرفوعة كمرجع وحيد للهوية. حول الطفلة إلى شخصية أميرة صغيرة أصلية بأسلوب الرسوم المتحركة ثلاثية الأبعاد السينمائية. حافظ على ملامح وجهها المعروفة، ولون بشرتها، وتسريحة شعرها، ولون عينيها، ونظاراتها، وعمرها. صمم فستاناً ملكياً أصلياً ومحتشماً خصيصاً لهذه الصورة. تجنب محاكاة أي أميرة أفلام مشهورة، أو زي، أو قلعة، أو تاج، أو شخصية تجارية معروفة. الأسلوب: أسلوب رسوم متحركة ثلاثي الأبعاد سينمائي فاخر + زجاج مورفيك (Morphic Glass). لوحة ألوان الباستيل الحلوة (Candy Pastel): الوردي #FF8FAB، والنعناعي #9EE6CF، والأصفر الزبدي #FFE08A، والخزامى #C8B6FF. وضع الإضاءة النهارية الساطعة، شروق شمس ناعم، إضاءة شاملة، تشتت ناعم للضوء تحت السطح، أشكال دائرية ملموسة، وتفاصيل لامعة رقيقة. التخطيط: ملصق مركزي واحد على شكل شعار ملكي يحتوي على بورتريه للطفلة. تسعة ملصقات محيطة به بالأشكال التالية: شريط ملكي، تاج زهور، كتاب حكايات، درع قلب، مفتاح سحري، إطار نافذة قلعة، شارة فراشة، كبسولة سحابة، ملصق دفتر طويل. النص الدقيق: Princess {{CHILD_NAME}} Grade: {{GRADE}} School: {{SCHOOL_NAME}} Subject: {{SUBJECT}} الخطوط والكتابة: الاسم بخط Fredoka أو Baloo 2 بارز وضخم. التفاصيل بخط Poppins نظيف. الخيار العربي: Baloo Bhaijaan 2 + Cairo مع محاذاة صحيحة من اليمين إلى اليسار (RTL). الزخرفة: زهور، فراشات، نجوم وتفاصيل كريستالية صغيرة أصلية. أبقِ جميع العناصر الزخرفية بعيدة عن النص. قواعد الملكية الفكرية الصارمة: صمم أميرة أصلية بالكامل. لا تشابه مع ديزني، بيكسار، باربي أو أي امتياز تجاري. لا نصوص عشوائية، لا علامات مائية، لا خلفيات داكنة، لا تشوهات في الوجه، ولا زخارف تغطي الاسم. الجودة النهائية: لطيفة، فاخرة، مبهجة ومناسبة لملصقات الدفاتر والعلب والمستلزمات المدرسية.",
        "textEn": "SYSTEM ROLE: Premium personalized children’s sticker designer. Output ONE final printable sticker sheet only.\n\nCANVAS:\nA4 portrait, 300 DPI, bright cream background, ten individually cuttable stickers with generous spacing and thick white die-cut borders.\n\nTOPIC:\nPersonalized fairytale-princess school labels.\n\nPHOTO ENGINE:\nUse the uploaded child photo as the only identity reference.\nTransform her into an original cinematic 3D animated young princess.\nPreserve her recognizable face, skin tone, hairstyle, eye color, glasses and age.\nCreate a modest original royal dress designed specifically for this image.\nDo not imitate any existing movie princess, costume, castle, crown or franchise character.\n\nSTYLE:\nOriginal premium 3D family-animation style + Morphic Glass.\nCandy Pastel palette: pink #FF8FAB, mint #9EE6CF, butter yellow #FFE08A and lavender #C8B6FF.\nLight mode, soft sunrise, global illumination, gentle subsurface scattering, rounded tactile forms and delicate sparkling highlights.\n\nLAYOUT:\nOne central royal crest sticker with the child’s portrait.\nNine surrounding labels shaped as:\nroyal ribbon,\nflower crown,\nstorybook,\nheart shield,\nmagic key,\ncastle-window frame,\nbutterfly badge,\ncloud capsule,\nlong notebook label.\n\nEXACT TEXT:\nPrincess {{CHILD_NAME}}\nGrade: {{GRADE}}\nSchool: {{SCHOOL_NAME}}\nSubject: {{SUBJECT}}\n\nTYPOGRAPHY:\nName in huge beveled Fredoka or Baloo 2 lettering.\nDetails in clean Poppins.\nArabic option: Baloo Bhaijaan 2 + Cairo, correct RTL and right alignment.\n\nDECORATION:\nOriginal flowers, stars, butterflies and tiny crystal details.\nKeep all decorative elements away from the text.\n\nSTRICT COPYRIGHT-SAFE RULES:\nCreate a completely original princess.\nNo resemblance to Disney, Pixar, Barbie or any named franchise.\nNo recognizable costumes, castles, logos, sidekicks or copyrighted symbols.\nNo random text.\nNo watermark.\nNo dark background. No distorted face. No decorations covering the name.\n\nFINAL QUALITY:\nSweet, premium, magical, child-friendly and suitable for notebooks, folders, lunch boxes and school supplies.",
        "image": "images/stickers/1.png",
        "variables": [
          {"name": "CHILD_NAME", "labelAr": "اسم الطفل أو الطفلة", "labelEn": "Child's Name", "placeholderAr": "مثال: أحمد أو سارة", "placeholderEn": "e.g. Ahmad or Sarah"},
          {"name": "GRADE", "labelAr": "الصف الدراسي", "labelEn": "Grade", "placeholderAr": "مثال: الصف الثاني", "placeholderEn": "e.g. Grade 2"},
          {"name": "SCHOOL_NAME", "labelAr": "اسم المدرسة", "labelEn": "School Name", "placeholderAr": "مثال: مدرسة الابداع", "placeholderEn": "e.g. Innovation School"},
          {"name": "SUBJECT", "labelAr": "المادة الدراسية", "labelEn": "Subject", "placeholderAr": "مثال: اللغة العربية", "placeholderEn": "e.g. Arabic"}
        ]
      },
      {
        "id": 2,
        "titleAr": "مصمم ملصقات المستكشف الملكي",
        "titleEn": "Royal Explorer Labels Designer",
        "textAr": "الدور: محرك تصميم ملصقات مدرسية مخصصة وعالية الجودة. الإخراج: ورقة ملصقات واحدة فقط جاهزة للطباعة. اللوحة: حجم A4 عمودي، 300 نقطة لكل بوصة، خلفية فاتحة ونظيفة، تسعة ملصقات منفصلة مرتبة على طول مسار خريطة كنز ملتوٍ ومرح. الموضوع: ملصقات مخصصة تتميز بمستكشف ملكي صغير أصلي. محرك الصور: استخدم صورة الطفل المرفوعة كمرجع للهوية. حول الطفل إلى شخصية مغامر ملكي أصلي بأسلوب الرسوم المتحركة ثلاثية الأبعاد السينمائية. حافظ على ملامح الوجه المعروفة، وتسريحة الشعر، ولون البشرة، والنظارات، والعمر التقريبي. ألبس الطفل زياً ملكياً للمغامرة بتصميم أصلي وأنيق مع عباءة قصيرة، جزمة، وحقيبة مدرسية صغيرة. حافظ على ملابس محتشمة ومناسبة لعمر الطفل. الأسلوب: أسلوب رسوم متحركة ثلاثي الأبعاد سينمائي فاخر + زجاج مورفيك (Morphic Glass). لوحة ألوان النهار المنعش (Fresh Daylight): أزرق سماوي #60A5FA، أخضر عشبي #65C18C، أصفر مشمش #FFD93D، وأبيض وظلال ناعمة بالأزرق والرمادي. إضاءة نهارية خارجية ساطعة، أشكال مستديرة، إضاءة شاملة ناعمة، وإضاءة حافة خفيفة. التخطيط: إنشاء تسعة أشكال للملصقات: درع ملكي، مخطوطة خريطة كنز، بوصلة، كتاب حكايات، علم جبل، شارة بيضة تنين ودود، بوابة قلعة، حقيبة ظهر، شريط اسم طويل. النص الدقيق: Royal Explorer {{CHILD_NAME}} Grade: {{GRADE}} School: {{SCHOOL_NAME}} Subject: {{SUBJECT}} الشخصية: أظهر نفس الطفل باستمرار في ثلاث وضعيات صغيرة: يمسك كتاباً، يشير نحو مسار التعلم، يحمل حقيبة ظهر. لا تصنع وجوهاً مختلفة. الخطوط والكتابة: الاسم ضخم بخط Fredoka أو Baloo 2. التفاصيل الصغيرة بخط Poppins. النسخة العربية تستخدم Cairo Bold و Tajawal مع محاذاة صحيحة من اليمين إلى اليسار (RTL). قواعد الملكية الفكرية والنزاهة: الشخصية، الزي، الشعار والعالم يجب أن تكون أصلية بالكامل. لا تشابه مع أي أمير أو بطل خارق أو شخصية أفلام أو ألعاب معروفة. لا شعارات استوديو، لا رموز مشهورة، لا أسلحة، لا نصوص عشوائية، لا علامات مائية، ولا فوضى بصرية. الجودة النهائية: مغامرة، ذكية، مبهجة ومناسبة للأولاد والبنات الذين يحبون الفانتازيا الملكية والاستكشاف.",
        "textEn": "SYSTEM ROLE: High-end personalized school-sticker engine. Output ONE final printable sticker sheet only.\n\nCANVAS:\nA4 portrait, 300 DPI, clean light background, nine separate die-cut stickers arranged along a playful winding treasure-map path.\n\nTOPIC:\nPersonalized labels featuring an original young royal explorer.\n\nPHOTO ENGINE:\nUse the uploaded child photograph as the identity reference.\nTransform the child into an original cinematic 3D animated royal adventurer.\nPreserve recognizable facial features, hairstyle, skin tone, glasses and apparent age.\nDress the child in an original smart royal-adventure outfit with a short cape, boots and a small school satchel.\nKeep the clothing modest and age-appropriate.\n\nSTYLE:\nOriginal premium 3D family-animation style + Morphic Glass.\nFresh Daylight palette: sky blue #60A5FA, grass green #65C18C, sunshine yellow #FFD93D, white and soft gray-blue shadows.\nBright outdoor daylight, rounded forms, soft global illumination and gentle rim light.\n\nLAYOUT:\nCreate nine sticker shapes:\nroyal shield,\ntreasure-map scroll,\ncompass,\nstorybook,\nmountain flag,\nfriendly dragon-egg badge,\ncastle gate,\nbackpack,\nlong name ribbon.\n\nEXACT TEXT:\nRoyal Explorer {{CHILD_NAME}}\nGrade: {{GRADE}}\nSchool: {{SCHOOL_NAME}}\nSubject: {{SUBJECT}}\n\nCHARACTER:\nShow the same child consistently in three small poses:\nholding a book,\npointing toward the learning path,\ncarrying a backpack.\nDo not create different faces.\n\nTYPOGRAPHY:\nHuge name in Fredoka or Baloo 2.\nSmall details in Poppins.\nArabic version uses Cairo Bold and Tajawal with correct RTL.\n\nSTRICT COPYRIGHT-SAFE RULES:\nThe character, costume, crest and world must be entirely original.\nNo resemblance to an existing prince, superhero, film character or game character.\nNo studio logos.\nNo famous symbols.\nNo weapons.\nNo random text.\nNo watermark.\nNo clutter.\n\nFINAL QUALITY:\nAdventurous, clever, cheerful and suitable for boys or girls who enjoy royal fantasy and exploration.",
        "image": "images/stickers/2.png",
        "variables": [
          {"name": "CHILD_NAME", "labelAr": "اسم الطفل أو الطفلة", "labelEn": "Child's Name", "placeholderAr": "مثال: أحمد أو سارة", "placeholderEn": "e.g. Ahmad or Sarah"},
          {"name": "GRADE", "labelAr": "الصف الدراسي", "labelEn": "Grade", "placeholderAr": "مثال: الصف الثاني", "placeholderEn": "e.g. Grade 2"},
          {"name": "SCHOOL_NAME", "labelAr": "اسم المدرسة", "labelEn": "School Name", "placeholderAr": "مثال: مدرسة الابداع", "placeholderEn": "e.g. Innovation School"},
          {"name": "SUBJECT", "labelAr": "المادة الدراسية", "labelEn": "Subject", "placeholderAr": "مثال: اللغة العربية", "placeholderEn": "e.g. Arabic"}
        ]
      },
      {
        "id": 3,
        "titleAr": "مصمم ملصقات الحيوانات اللطيفة",
        "titleEn": "Cute Animal Friends Labels",
        "textAr": "الدور: قم بدور مصمم ملصقات أطفال شخصية متميزة. قم بتوليد ورقة ملصقات واحدة فقط جاهزة للطباعة.\n\nاللوحة:\nحجم A4 عمودي، 2480 × 3508 بكسل، 300 نقطة لكل بوصة.\nخلفية بلون الحجر الدافئ الباهت (Pale warm-stone).\nعشرة ملصقات قابلة للقص الفردي مرتبة في شبكة تحريرية واسعة مكونة من عمودين × 5 صفوف.\nتضمين مسافات متباعدة سخية، حدود قص بيضاء سميكة (die-cut)، وأدلة قص رمادية باهتة رفيعة جداً.\nحافظ على سلامة جميع النصوص والوجوه داخل هوامش القص بأمان.\n\nالموضوع:\nملصقات مدرسية مخصصة تظهر طفلاً واحداً يتفاعل بمودة وعاطفة مع أصدقاء حيوانات أصليين ولطيفين للغاية.\n\nمرجع الصورة:\nاستخدم صورة الطفل المرفوعة كمرجع وحيد للهوية.\nحول الطفل إلى شخصية رسوم متحركة ثلاثية أبعاد سينمائية عائلية أصلية.\n\nحافظ بدقة على:\n• ملامح الوجه المعروفة والواضحة\n• لون البشرة\n• تسريحة الشعر ولونه\n• النظارات أو الإكسسوارات المميزة\n• العمر التقريبي\n• المظهر العام\n\nحافظ على نفس هوية الطفل، ونسب الوجه، وتصميم الملابس، ولوحة الألوان في جميع الملصقات العشرة دون تغيير. لا تصنع نسخاً بأشكال مختلفة للطفل.\n\nالأسلوب:\nجمالية رسوم متحركة ثلاثية الأبعاد عائلية سينمائية فاخرة ومبتكرة مدمجة مع لمسات زجاج مورفيك ناعمة (Morphic Glass).\nلا تحاكي أي استوديو رسوم متحركة أو فيلم أو علامة تجارية مشهورة بالاسم.\n\nلوحة ألوان ترابية دافئة ومريحة (Earthy Cozy):\n• التيراكوتا (الآجر الطيني) #C75D43\n• المريمي الأخضر الباهت #8A9A5B\n• الخردلي الأصفر #D4A017\n• لون الحجر الدافئ #E8DCC4\n• إضاءات كريمية ناعمة\n\nاستخدم وضع الإضاءة الساطعة، ضوء نهار حديقة ناعم، إضاءة شاملة لطيفة، تشتت ناعم للضوء تحت السطح، فراء ناعم ملموس، مخالب دائرية، أنسجة قماش ناعمة، ووجوه معبرة ودودة.\nأضف ضوءاً أساسياً دافئاً مع ضوء حافة بارد رقيق.\nابقِ الخلفيات بسيطة ومموهة بنعومة.\n\nبنية الملصق:\nيحتوي كل ملصق على:\n1. مشهد تفاعلي مدمج بين الطفل والحيوان.\n2. منطقة معلومات كبيرة بتأثير الزجاج البلوري.\n3. حدود بيضاء سميكة للقص (die-cut).\n4. ما لا يزيد عن لمستين زخرفيتين صغيرتين.\n\nقم بإنشاء هذه المشاهد الخمسة:\nالملصق 1: الطفل يعانق بحرارة أرنباً رقيقاً. الأرنب له أذنان مستديرتان، مخالب صغيرة، وتعبير دافئ مليء بالفرح.\nالملصق 2: الطفل يجلس بسلام بجوار دب باندا محبوب. الباندا يميل بمودة نحو الطفل.\nالملصق 3: الطفل يقوم بحركة \"هاي فايف\" (ضرب الكف) مرحة مع جرو ثعلب صغير. تبدو الوضعية حيوية وودية وطبيعية.\nالملصق 4: الطفل يحتضن فيل صغير جداً. يلتف خرطوم الفيل القصير بلطف بالقرب من الطفل دون تغطية وجهه.\nالملصق 5: الطفل يقرأ كتاب قصص مفتوح بجوار شبل أسد مبتسم. الشبل له ملامح مستديرة ناعمة بدون أسنان حادة ظاهرة.\nالملصقات 6-10: قم بإنشاء نسخة أطول لملصق معلومات لكل موضوع من موضوعات الحيوانات الخمسة. ضع مشهد الطفل والحيوان في جانب واحد ومنطقة كتابة زجاجية بلورية واسعة في الجانب الآخر. بدّل مكان الشخصية بين اليسار واليمين لإنشاء تنوع بصري.\n\nالنص الدقيق:\n{{CHILD_NAME}}\nGrade: {{GRADE}}\nSchool: {{SCHOOL_NAME}}\nSubject: {{SUBJECT}}\n\nتسلسل النص الهرمي:\nيجب أن يكون اسم الطفل هو النص الأكبر حجماً في كل ملصق. استخدم بحد أقصى ثلاثة خطوط تفاصيل قصيرة أسفل الاسم. حافظ على تباين قوي ومسافات أسطر سخية.\n\nالخطوط والكتابة بالإنجليزية:\nالعنوان واسم الطفل: خط Fredoka Bold أو Baloo 2 ExtraBold. نصوص المعلومات: خط Poppins Medium أو Inter Medium. محاذاة من اليسار إلى اليمين.\n\nالخطوط والكتابة بالعربية:\nاسم الطفل: خط Baloo Bhaijaan 2 Bold أو Cairo ExtraBold. نصوص المعلومات: خط Cairo أو Tajawal. اتجاه كامل من اليمين إلى اليسار (RTL). نصوص محاذاة لليمين. حروف عربية متصلة بشكل صحيح. لا تخلط أبداً بين اتجاهي العربية والإنجليزية في سطر واحد.\n\nخيارات الملابس والزخرفة:\nاستخدم ملابس مدرسية مبهجة ومحتشمة ومناسبة للعمر. الزخرفة تقتصر على غيوم أو أوراق شجر أو نجوم أو زهور بسيطة.\n\nقواعد الملكية الفكرية والنزاهة الصارمة:\nالتصاميم والشخصيات يجب أن تكون أصلية بالكامل وغير مستوحاة من أي ديزني أو استوديو تجاري. لا نصوص عشوائية، لا علامات مائية، ولا فوضى بصرية. طفل واحد و5 حيوانات أليفة.",
        "textEn": "SYSTEM ROLE:\nAct as a premium personalized children’s sticker-sheet designer. Generate ONE final printable sticker sheet only.\n\nCANVAS:\nA4 portrait, 2480 × 3508 px, 300 DPI.\nPale warm-stone background.\nTen individually cuttable stickers arranged in a spacious 2-column × 5-row editorial grid.\nInclude generous gaps, thick white die-cut borders and very thin pale-gray cutting guides.\nKeep all text and faces safely inside the cutting margins.\n\nTOPIC:\nPersonalized school labels showing one child affectionately interacting with extremely cute, original animal friends.\n\nPHOTO REFERENCE:\nUse the uploaded child photograph as the only identity reference.\nTransform the child into an original cinematic 3D family-animation character.\n\nPreserve accurately:\n• recognizable facial features\n• skin tone\n• hairstyle and hair color\n• glasses or distinctive accessories\n• apparent age\n• gender presentation\n\nKeep exactly the same child identity, facial proportions, clothing design and color palette across all ten stickers.\nDo not create different-looking versions of the child.\n\nSTYLE:\nOriginal premium cinematic 3D family-animation aesthetic combined with subtle Morphic Glass.\nDo not imitate any named animation studio, film or franchise.\n\nEarthy Cozy palette:\n• terracotta #C75D43\n• sage #8A9A5B\n• mustard #D4A017\n• warm stone #E8DCC4\n• soft cream highlights\n\nUse bright light mode, soft garden daylight, gentle global illumination, subtle subsurface scattering, tactile fur, rounded paws, soft fabric textures and expressive friendly faces.\nAdd a warm key light with a delicate cool rim light.\nKeep backgrounds minimal and softly blurred.\n\nSTICKER STRUCTURE:\nEach sticker contains:\n1. One compact child-and-animal interaction scene.\n2. One large frosted-glass information area.\n3. A thick white die-cut outline.\n4. No more than two tiny decorative accents.\n\nCreate these five scenes:\n\nSTICKER 1:\nThe child warmly hugging a fluffy rabbit.\nRabbit has rounded ears, tiny paws and a gentle joyful expression.\n\nSTICKER 2:\nThe child sitting peacefully beside a cuddly panda.\nThe panda leans affectionately toward the child.\n\nSTICKER 3:\nThe child giving a playful high-five to a small fox cub.\nThe pose feels energetic, friendly and natural.\n\nSTICKER 4:\nThe child cuddling a tiny baby elephant.\nThe elephant gently wraps its short trunk near the child without covering the face.\n\nSTICKER 5:\nThe child reading an open storybook beside a smiling lion cub.\nThe lion cub has soft rounded features and no visible sharp teeth.\n\nSTICKERS 6–10:\nCreate one longer information-label variation for each of the five animal themes.\nPlace the child-and-animal scene on one side and a wide frosted-glass writing zone on the other.\nAlternate the character placement between left and right to create visual variety.\n\nEXACT TEXT:\n{{CHILD_NAME}}\nGrade: {{GRADE}}\nSchool: {{SCHOOL_NAME}}\nSubject: {{SUBJECT}}\n\nTEXT HIERARCHY:\nThe child’s name must be the largest text on every sticker.\nUse a maximum of three short detail lines beneath the name.\nMaintain strong contrast and generous line spacing.\n\nENGLISH TYPOGRAPHY:\nTitle and child name: Fredoka Bold or Baloo 2 ExtraBold.\nInformation text: Poppins Medium or Inter Medium.\nLeft-to-right alignment.\n\nARABIC TYPOGRAPHY:\nChild name: Baloo Bhaijaan 2 Bold or Cairo ExtraBold.\nInformation text: Cairo or Tajawal.\nFull right-to-left direction.\nRight-aligned text.\nCorrectly connected Arabic letters.\nNever mix Arabic and English direction within one line.\n\nOPTIONAL BILINGUAL VERSION:\nCreate completely separate Arabic and English text zones.\nDo not mix writing directions inside the same field.\n\nCLOTHING:\nUse cheerful, modest, age-appropriate school clothing.\nNo branded clothing, logos or famous costume designs.\nKeep the same outfit across all stickers.\n\nDECORATIVE ELEMENTS:\nUse only tiny clouds, leaves, stars or simple flowers.\nDecorations must remain secondary. \nAnimal ears, paws, tails and the child’s hands must never cover names or school information.\n\nSTRICT COPYRIGHT-SAFE RULES:\nAll child styling and animal designs must be completely original.\nNo resemblance to famous animated characters, mascots or franchise animals.\nNo studio logos.\nNo recognizable costumes.\nNo copyrighted symbols.\nNo branded products.\n\nSTRICT OUTPUT RULES:\nOne child only.\nFive original animal friends only.\nNo extra people.\nNo duplicated limbs.\nNo merged hands or paws.\nNo distorted faces.\nNo frightening teeth, claws or expressions.\nNo random words.\nNo placeholder text beyond the supplied fields.\nNo fake school logo. \nNo watermark.\nNo dark background.\nNo clutter.\nNo tiny unreadable text.\nNo overlapping stickers.\n\nFINAL QUALITY:\nExtremely cute, affectionate and premium.\nCrisp printable edges.\nConsistent child identity.\nSoft tactile animal fur.\nLarge readable names.\nCommercial-quality personalized school labels suitable for notebooks, folders, lunch boxes, pencil cases and classroom supplies.\nOutput ONE completed printable sticker sheet only.",
        "image": "images/stickers/3.png",
        "variables": [
          {"name": "CHILD_NAME", "labelAr": "اسم الطفل أو الطفلة", "labelEn": "Child's Name", "placeholderAr": "مثال: أحمد أو سارة", "placeholderEn": "e.g. Ahmad or Sarah"},
          {"name": "GRADE", "labelAr": "الصف الدراسي", "labelEn": "Grade", "placeholderAr": "مثال: الصف الثاني", "placeholderEn": "e.g. Grade 2"},
          {"name": "SCHOOL_NAME", "labelAr": "اسم المدرسة", "labelEn": "School Name", "placeholderAr": "مثال: مدرسة الابداع", "placeholderEn": "e.g. Innovation School"},
          {"name": "SUBJECT", "labelAr": "المادة الدراسية", "labelEn": "Subject", "placeholderAr": "مثال: اللغة العربية", "placeholderEn": "e.g. Arabic"}
        ]
      },
      {
        "id": 4,
        "titleAr": "مصمم ملصقات الأم والطفل",
        "titleEn": "Mother & Child Keepsake Labels",
        "textAr": "الدور: محرك تصميم ملصقات عائلية شخصية وحساسة متميزة. قم بتوليد ورقة ملصقات واحدة فقط جاهزة للطباعة.\n\nاللوحة:\nحجم A4 عمودي، 300 نقطة لكل بوصة، خلفية كريمية فاتحة، ثمانية ملصقات قابلة للقص الفردي مرتبة بلطف حول ملصق تذكاري مركزي واحد على شكل قلب.\n\nالموضوع:\nملصقات مدرسية مخصصة للأم والطفل للاحتفال بالحب والتشجيع واليوم الأول في المدرسة.\n\nمحرك الصور:\nاستخدم صور الأم والطفل المرفوعة كمراجع وحيدة للهوية.\nقم بإنشاء إما:\nالخيار أ - قصاصات صور واقعية مع بيئة رسوم متحركة ثلاثية أبعاد سينمائية،\nأو\nالخيار ب - شخصيات رسوم متحركة ثلاثية أبعاد سينمائية أصلية لكلا الشخصين.\nحافظ على ملامح الوجه المعروفة لكل شخص، ولون البشرة، وتسريحة الشعر، والنظارات، والعمر التقريبي.\nحافظ على اتساق الهويتين.\nأظهر مودة طبيعية ومناسبة للعمر.\n\nالأسلوب:\nجمالية رسوم متحركة ثلاثية الأبعاد عائلية سينمائية فاخرة ومبتكرة مدمجة مع لمسات زجاج مورفيك ناعمة (Morphic Glass).\nلوحة ألوان المغامرة الدافئة (Warm Adventure): البرتقالي #FF6B35، والأصفر الذهبي #FFC845، والأزرق المخضر (Teal) #2EC4B6، والكريمي #FFF4E0.\nإضاءة ساعة ذهبية ناعمة، ضوء حافة بارد لطيف، أشكال قلب مستديرة، وتأثيرات بوكيه (bokeh) رقيقة.\n\nالمشهد المركزي:\nالأم تجلس على ركبتيها أو تنحني قليلاً بينما تحتضن طفلها بحرارة. يبدو كلاهما مرتاحين وسعداء وفي وضعية طبيعية. لا توجد قبلات مبالغ فيها أو مشاعر درامية زائدة.\n\nالملصقات المحيطة:\nملصق اسم على شكل قلب، كبسولة كتاب مدرسي، ملصق صندوق غداء، بطاقة حقيبة ظهر، نجمة تشجيع، شريط زهور، شارة عائلية، ملصق مادة طويل.\n\nالنص الدقيق:\n{{CHILD_NAME}}\nGrade: {{GRADE}}\nSchool: {{SCHOOL_NAME}}\nSubject: {{SUBJECT}}\n\nعبارات قصيرة اختيارية:\n• \"أمي تؤمن بي / Mom believes in me\"\n• \"نجمي الصغير / My little star\"\n• \"أتمنى لك يوماً رائعاً / Have a wonderful day\"\nاستخدم فقط العبارات المحددة من قبل المستخدم.\n\nالخطوط والكتابة:\nيجب أن يظل اسم الطفل هو العنصر الأكبر حجماً.\nبالإنجليزية: خط Baloo 2 + Poppins.\nبالعربية: خط Baloo Bhaijaan 2 + Tajawal مع اتجاه صحيح من اليمين إلى اليسار (RTL).\n\nالقواعد الصارمة والجودة النهائية:\nلا أفراد إضافيين من العائلة. لا تغييرات غير دقيقة في الوجه. لا علامات مائية. لا فوضى بصرية. ملصقات دافئة ومبهجة ومحترمة ومناسبة كملصقات مدرسية وتذكار رائع لليوم الأول للطفل بالمدرسة.",
        "textEn": "SYSTEM ROLE: Sensitive premium family-sticker design engine. Output ONE final printable sticker sheet only.\n\nCANVAS:\nA4 portrait, 300 DPI, light cream background, eight individually cuttable stickers arranged gently around one central heart-shaped keepsake sticker.\n\nTOPIC:\nPersonalized mother-and-child school labels celebrating love, encouragement and the first day of school.\n\nPHOTO ENGINE:\nUse the uploaded photographs of the mother and child as the only identity references.\nCreate either:\nOPTION A — realistic photo cutouts with a cinematic 3D illustrated environment,\nor\nOPTION B — original cinematic 3D animated versions of both people.\n\nPreserve each person’s recognizable facial features, skin tone, hairstyle, glasses and apparent age.\nKeep both identities consistent.\nShow natural, age-appropriate affection.\n\nSTYLE:\nOriginal premium 3D family-animation style + Morphic Glass.\nWarm Adventure palette: orange #FF6B35, golden yellow #FFC845, teal #2EC4B6 and cream #FFF4E0.\nSoft golden-hour light, gentle cool rim light, rounded heart forms and delicate bokeh.\n\nCENTRAL SCENE:\nMother kneeling or bending slightly while warmly hugging the child.\nBoth appear comfortable, happy and naturally posed.\nNo exaggerated kissing or dramatic emotion.\n\nSURROUNDING STICKERS:\nheart name label,\nschool-book capsule,\nlunch-box label,\nbackpack tag,\nencouragement star,\nflower ribbon,\nfamily badge,\nlong subject label.\n\nEXACT TEXT:\n{{CHILD_NAME}}\nGrade: {{GRADE}}\nSchool: {{SCHOOL_NAME}}\nSubject: {{SUBJECT}}\n\nOPTIONAL SHORT PHRASES:\n“Mom believes in me”\n“My little star”\n“Have a wonderful day”\nUse only the phrases selected by the user.\n\nTYPOGRAPHY:\nChild’s name must remain the largest element.\nEnglish: Baloo 2 + Poppins.\nArabic: Baloo Bhaijaan 2 + Tajawal, correct RTL.\n\nSTRICT RULES:\nNo additional family members.\nNo inaccurate facial changes.\nNo famous characters.\nNo random text.\nNo watermark.\nNo overly romantic styling.\nNo clutter.\nNo decoration covering either face.\nKeep the school-information zones highly readable.\n\nFINAL QUALITY:\nTender, joyful, respectful and suitable as both a school-label sheet and a first-day keepsake.",
        "image": "images/stickers/4.png",
        "variables": [
          {"name": "CHILD_NAME", "labelAr": "اسم الطفل أو الطفلة", "labelEn": "Child's Name", "placeholderAr": "مثال: أحمد أو سارة", "placeholderEn": "e.g. Ahmad or Sarah"},
          {"name": "GRADE", "labelAr": "الصف الدراسي", "labelEn": "Grade", "placeholderAr": "مثال: الصف الثاني", "placeholderEn": "e.g. Grade 2"},
          {"name": "SCHOOL_NAME", "labelAr": "اسم المدرسة", "labelEn": "School Name", "placeholderAr": "مثال: مدرسة الابداع", "placeholderEn": "e.g. Innovation School"},
          {"name": "SUBJECT", "labelAr": "المادة الدراسية", "labelEn": "Subject", "placeholderAr": "مثال: اللغة العربية", "placeholderEn": "e.g. Arabic"}
        ]
      },
      {
        "id": 5,
        "titleAr": "تذاكر القبول والترحيب بالفصل",
        "titleEn": "Classroom Admission Tickets",
        "textAr": "الدور: محرك تصميم تذاكر وممرات قبول الطلاب المدرسية المخصصة وعالية الجودة. الإخراج: ورقة تذاكر واحدة فقط جاهزة للطباعة.\n\nاللوحة:\nحجم A4 أفقي (Landscape)، 300 نقطة لكل بوصة، خلفية مضيئة وفاتحة، تحتوي على ست تذاكر قبول كبيرة بتصميم مثقب (perforated) مرتبة في صفين من ثلاثة.\nكل تذكرة يجب أن تكون قابلة للقص الفردي.\n\nالموضوع:\nتذاكر قبول مخصصة ومرحبة لفصل مس أميرة.\n\nالأسلوب:\nأسلوب رسوم متحركة ثلاثي الأبعاد سينمائي مدرسي فاخر ومبتكر مدمجة مع لمسات زجاج مورفيك ناعمة (Morphic Glass).\nلوحة ألوان العجائب المعتدلة (Cool Wonder): الأزرق السماوي (Cyan) #22D3EE، والأزرق النيلي (Indigo) #312E81، والبنفسجي #7C3AED، وأبيض ناعم مع لمسة صفراء كهرمانية دافئة ومبهجة.\nحافظ على سطوع الصفحة، وتجنب الخلفيات الداكنة.\nاستخدم إضاءة فصل دراسي مصقولة، زوايا تذاكر مستديرة، لوحات معلومات زجاجية بلورية، وتأثيرات نجوم لامعة خفيفة.\n\nتخطيط التذكرة:\nالجانب الأيسر: بورتريه ثلاثي الأبعاد أصلي للطالب أو صورته الحقيقية داخل إطار دائري أنيق.\nالوسط: اسم الطالب بخط ضخم للغاية، وتفاصيل الصف والمرحلة الدراسية.\nالجانب الأيمن (القصاصة القابلة للفصل): رقم التذكرة، المقعد أو الفريق، وأيقونة صف صغيرة.\n\nالنص الدقيق:\nMRS AMIRA’S CLASS\nWELCOME TICKET\n\nStudent: {{STUDENT_NAME}}\nGrade: {{GRADE}}\nClass: {{CLASS_NAME}}\nSchool: {{SCHOOL_NAME}}\nSeat/Team: {{SEAT_OR_TEAM}}\nTicket No.: {{TICKET_NUMBER}}\n\nخط الجانب العربي:\nفصل مس أميرة\nتذكرة ترحيب\nباستخدام خط Cairo Bold + Tajawal مع اتجاه كامل من اليمين إلى اليسار (RTL).\n\nقواعد النزاهة والملكية الفكرية الصارمة:\nلا تدرج رموز QR أو باركود قابلة للمسح الحقيقي (يُسمح بنمط خطوط تزييني فقط). لا نصوص عشوائية، لا فوضى بصرية، ولا علامات مائية.",
        "textEn": "SYSTEM ROLE: Premium classroom-ticket and student-pass design engine. Output ONE final printable sheet only.\n\nCANVAS:\nA4 landscape, 300 DPI, bright light background, six large perforated-style student tickets arranged in two rows of three.\nEach ticket must be individually cuttable.\n\nTOPIC:\nPersonalized admission tickets for Mrs Amira’s class.\n\nSTYLE:\nOriginal cinematic 3D classroom style + Morphic Glass.\nCool Wonder palette: cyan #22D3EE, indigo #312E81, violet #7C3AED, soft white and one cheerful amber accent.\nKeep the page bright, not dark.\nUse polished classroom lighting, rounded ticket corners, frosted-glass information panels and subtle star highlights.\n\nTICKET LAYOUT:\nLeft zone:\nsmall original 3D student portrait or uploaded-photo portrait.\n\nCenter zone:\nstudent’s name in huge type.\nclass and grade details.\n\nRight detachable stub:\nticket number,\nseat or team,\nsmall classroom icon.\n\nEXACT TEXT:\nMRS AMIRA’S CLASS\nWELCOME TICKET\n\nStudent: {{STUDENT_NAME}}\nGrade: {{GRADE}}\nClass: {{CLASS_NAME}}\nSchool: {{SCHOOL_NAME}}\nSeat/Team: {{SEAT_OR_TEAM}}\nTicket No.: {{TICKET_NUMBER}}\n\nOPTIONAL EVENT LINE:\n{{EVENT_OR_DATE}}\n\nCHARACTER OPTION:\nTransform the uploaded student photo into an original cinematic 3D animated character while preserving identity.\nAlternatively, use the real photograph inside a neat circular frame.\nKeep one student per ticket.\n\nICONS:\nbook,\npencil,\nstar,\nschool bell,\nbackpack.\nUse no more than two icons on each ticket.\n\nTYPOGRAPHY:\n“MRS AMIRA’S CLASS” in large Fredoka Bold.\nStudent name even larger.\nTicket details in Inter or Poppins.\nArabic version:\nفصل مس أميرة\nتذكرة ترحيب\nUse Cairo Bold + Tajawal, full RTL in a separate Arabic design zone.\n\nTICKET SAFETY:\nDo not generate a working QR code or barcode.\nA decorative non-scannable stripe pattern is allowed.\nDo not include answer hints, grades, rankings or student performance.\n\nSTRICT RULES:\nExact spelling of Mrs Amira and every student name.\nNo random numbers unless supplied.\nNo fake school logo.\nNo copyrighted characters.\nNo watermark.\nNo dark background.\nNo tiny text.\nNo visual hierarchy that favors one student over another.\n\nFINAL QUALITY:\nFestive, professional, printable and suitable as a welcome pass, classroom reward or memorable first-day ticket.",
        "image": "images/stickers/5.png",
        "variables": [
          {"name": "STUDENT_NAME", "labelAr": "اسم الطالب أو الطالبة", "labelEn": "Student's Name", "placeholderAr": "مثال: آدم أو لينا", "placeholderEn": "e.g. Adam or Lina"},
          {"name": "GRADE", "labelAr": "الصف الدراسي", "labelEn": "Grade", "placeholderAr": "مثال: الصف الرابع", "placeholderEn": "e.g. Grade 4"},
          {"name": "CLASS_NAME", "labelAr": "اسم الفصل", "labelEn": "Class Name", "placeholderAr": "مثال: رابع أ", "placeholderEn": "e.g. Class 4A"},
          {"name": "SCHOOL_NAME", "labelAr": "اسم المدرسة", "labelEn": "School Name", "placeholderAr": "مثال: مدرسة المستقبل", "placeholderEn": "e.g. Bright Future School"},
          {"name": "SEAT_OR_TEAM", "labelAr": "المقعد أو الفريق", "labelEn": "Seat or Team", "placeholderAr": "مثال: النجوم الزرقاء", "placeholderEn": "e.g. Blue Stars"},
          {"name": "TICKET_NUMBER", "labelAr": "رقم التذكرة", "labelEn": "Ticket Number", "placeholderAr": "مثال: A001", "placeholderEn": "e.g. A001"},
          {"name": "EVENT_OR_DATE", "labelAr": "الحدث أو التاريخ (اختياري)", "labelEn": "Event or Date (Optional)", "placeholderAr": "مثال: اليوم الأول في المدرسة", "placeholderEn": "e.g. First Day of School"}
        ]
      },
      {
        "id": 6,
        "titleAr": "أميرة الزهور بالحجاب",
        "titleEn": "Hijabi Flower Princess Labels",
        "textAr": "الدور: مصمم ملصقات أطفال شخصية متميزة. قم بتوليد ورقة ملصقات واحدة فقط جاهزة للطباعة.\n\nاللوحة:\nحجم A4 عمودي، 2480 × 3508 بكسل، 300 نقطة لكل بوصة، خلفية كريمية ساطعة، تحتوي على عشرة ملصقات قابلة للقص الفردي مع حدود بيضاء سميكة (die-cut)، مسافات متباعدة سخية وأدلة قص رمادية باهتة رفيعة.\n\nالموضوع:\nملصقات مدرسية مخصصة تتميز بأميرة صغيرة ترتدي الحجاب داخل مملكة زهور مسحورة أصلية.\n\nمحرك الصور:\nاستخدم صورة الطفلة المرفوعة كمرجع وحيد للهوية.\nحول الطفلة إلى شخصية رسوم متحركة ثلاثية أبعاد سينمائية عائلية أصلية.\nحافظ على ملامح وجهها المعروفة، ولون بشرتها، وشكل عينيها، ونظاراتها، وعمرها التقريبي، وابتسامتها.\nحافظ على نفس هوية الطفلة في جميع الملصقات العشرة دون تغيير.\n\nالحجاب والملابس:\nألبس الطفلة حجاباً جميلاً ومناسباً لعمرها يغطي الشعر والأذن والرقبة بالكامل.\nاستخدم طيات قماشية ناعمة ومرتبة وتصميم آمن للأطفال.\nصمم فستان أميرة محتشم بأكمام طويلة، وياقة عالية، وتنورة تصل للكاحل، مع حذاء مسطح ومريح.\nلا شعر مكشوف. لا أقمشة شفافة. لا مكياج للكبار. لا كعب عالي. لا ملابس ضيقة.\n\nالأسلوب:\nجمالية رسوم متحركة ثلاثية الأبعاد عائلية سينمائية فاخرة ومبتكرة مدمجة مع لمسات زجاج مورفيك ناعمة (Morphic Glass).\nلا تحاكي أي استوديو رسوم متحركة أو فيلم أو علامة تجارية مشهورة بالاسم.\nلوحة ألوان الباستيل الحلوة (Candy Pastel): الوردي #FF8FAB، والنعناعي #9EE6CF، والأصفر الزبدي #FFE08A، والخزامى #C8B6FF، وإضاءات كريمية ناعمة.\nاستخدم وضع الإضاءة الساطعة، شروق شمس ناعم، إضاءة شاملة، تشتت ناعم للضوء تحت السطح، أشكال دائرية ملموسة، زهور دقيقة، وعمق ميدان ضحل.\n\nالتخطيط:\nملصق مركزي عريض على شكل شعار زهرة ملكي يحتوي على بورتريه للطفلة، وتسعة ملصقات محيطة به مرتبة بشكل دائري.\n\nأشكال الملصقات:\nتاج زهور، درع قلب، كتاب حكايات، شارة فراشة، شريط ملكي، بوابة حديقة، مفتاح سحري، كبسولة سحابة، وملصق دفتر طويل.\n\nالنص الدقيق:\nPrincess {{CHILD_NAME}}\nGrade: {{GRADE}}\nSchool: {{SCHOOL_NAME}}\nSubject: {{SUBJECT}}\n\nالخطوط والكتابة:\nيجب أن يكون اسم الطفلة هو الأكبر حجماً.\nبالإنجليزية: خط Fredoka Bold أو Baloo 2 ExtraBold لتفاصيل العنوان، وخط Poppins Medium لتفاصيل المعلومات.\nبالعربية: اسم الطفل بخط Baloo Bhaijaan 2 Bold أو Cairo ExtraBold، ونصوص المعلومات بخط Cairo أو Tajawal مع اتجاه كامل من اليمين إلى اليسار (RTL).\n\nقواعد حماية الملكية الفكرية الصارمة:\nصمم أميرة أصلية بالكامل وغير مستوحاة من أي ديزني أو فيلم تجاري. لا شعر مكشوف، لا نصوص عشوائية، لا علامات مائية، ولا فوضى بصرية. طفلة واحدة فقط وورقة ملصقات واحدة نهائية مطبوعة فقط.",
        "textEn": "SYSTEM ROLE:\nPremium personalized children’s sticker-sheet designer. Output ONE final printable sticker sheet only.\n\nCANVAS:\nA4 portrait, 2480 × 3508 px, 300 DPI.\nBright cream background.\nTen individually cuttable stickers with thick white die-cut borders, generous spacing and thin pale-gray cut guides.\n\nTOPIC:\nPersonalized school labels featuring a little hijabi princess inside an original enchanted flower kingdom.\n\nPHOTO ENGINE:\nUse the uploaded child photograph as the only identity reference.\nTransform the child into an original cinematic 3D family-animation character.\nPreserve her recognizable facial features, skin tone, eye shape, glasses, apparent age and smile.\nKeep exactly the same child identity across every sticker.\n\nHIJAB AND CLOTHING:\nDress the child in a beautiful age-appropriate hijab that fully covers the hair, ears and neck.\nUse neat soft fabric folds and secure child-friendly styling.\nCreate a modest long-sleeved princess dress with a high neckline, ankle-length skirt and comfortable flat shoes.\nNo exposed hair.\nNo transparent fabric.\nNo adult makeup.\nNo high heels.\nNo tight clothing.\n\nSTYLE:\nOriginal premium cinematic 3D family-animation style + Morphic Glass.\nDo not imitate any named animation studio, movie princess or famous franchise.\n\nCandy Pastel palette:\npink #FF8FAB\nmint #9EE6CF\nbutter yellow #FFE08A\nlavender #C8B6FF\nsoft cream highlights\n\nUse bright light mode, soft sunrise lighting, global illumination, gentle subsurface scattering, rounded tactile forms, delicate flowers and shallow depth of field.\n\nLAYOUT:\nOne large central royal-flower crest containing the child’s portrait.\nNine surrounding sticker labels arranged radially.\n\nSTICKER SHAPES:\nflower crown\nheart shield\nstorybook\nbutterfly badge\nroyal ribbon\ngarden gate\nmagic key\ncloud capsule\nlong notebook label\n\nEXACT TEXT:\nPrincess {{CHILD_NAME}}\nGrade: {{GRADE}}\nSchool: {{SCHOOL_NAME}}\nSubject: {{SUBJECT}}\n\nTYPOGRAPHY:\nChild’s name must be the largest text.\nEnglish title: Fredoka Bold or Baloo 2 ExtraBold.\nEnglish details: Poppins Medium.\nArabic name: Baloo Bhaijaan 2 Bold or Cairo ExtraBold.\nArabic details: Cairo or Tajawal.\nArabic must be fully RTL, right-aligned and correctly connected.\n\nDECORATIONS:\nUse tiny flowers, butterflies, stars and leaves only.\nDecorations must never cover the child’s face, hijab or text.\n\nSTRICT COPYRIGHT-SAFE RULES:\nCreate a completely original young princess.\nNo resemblance to any existing movie princess.\nNo recognizable dresses, castles, crowns, sidekicks or logos.\nNo random words.\nNo extra children.\nNo exposed hair.\nNo watermark.\nNo clutter.\nNo distorted Arabic text.\n\nFINAL QUALITY:\nExtremely cute, modest, culturally respectful, premium and suitable for notebooks, folders, lunch boxes and school supplies.\nOutput ONE completed printable sticker sheet only.",
        "image": "images/stickers/6.png",
        "variables": [
          {"name": "CHILD_NAME", "labelAr": "اسم الطفلة", "labelEn": "Princess Name", "placeholderAr": "مثال: سارة", "placeholderEn": "e.g. Sarah"},
          {"name": "GRADE", "labelAr": "الصف الدراسي", "labelEn": "Grade", "placeholderAr": "مثال: الصف الثاني", "placeholderEn": "e.g. Grade 2"},
          {"name": "SCHOOL_NAME", "labelAr": "اسم المدرسة", "labelEn": "School Name", "placeholderAr": "مثال: مدرسة الابداع", "placeholderEn": "e.g. Innovation School"},
          {"name": "SUBJECT", "labelAr": "المادة الدراسية", "labelEn": "Subject", "placeholderAr": "مثال: اللغة العربية", "placeholderEn": "e.g. Arabic"}
        ]
      },
      {
        "id": 7,
        "titleAr": "رحلة النجوم والأميرة بالحجاب",
        "titleEn": "Hijabi Celestial Moon Labels",
        "textAr": "الدور:\nمصمم ملصقات أطفال شخصية متميزة. قم بتوليد ورقة ملصقات واحدة فقط جاهزة للطباعة.\n\nاللوحة:\nحجم A4 عمودي، 300 نقطة لكل بوصة، خلفية زرقاء جليدية باهتة للغاية (Very pale icy-blue).\nتسعة ملصقات منفصلة بتصميم قص مخصص (die-cut) مرتبة على طول مسار كوكبة متدفق.\nحافظ على إمكانية قص كل ملصق بشكل منفرد.\n\nالموضوع:\nملصقات مدرسية مخصصة تتميز بأميرة صغيرة ترتدي الحجاب في مغامرة تعليمية مبهجة بين القمر والنجوم.\n\nمحرك الصور:\nاستخدم صورة الطفل المرفوعة كمرجع وحيد للهوية.\nحول الطفل إلى شخصية رسوم متحركة ثلاثية أبعاد سينمائية عائلية أصلية.\nحافظ على ملامح الوجه المعروفة، ولون البشرة، والنظارات، والتعبير، والعمر التقريبي.\nحافظ على نفس الوجه والحجاب والملابس في جميع الملصقات التسعة.\n\nالحجاب والملابس:\nاستخدم حجاباً صديقاً للأطفال يغطي بالكامل مع طيات مستديرة ناعمة.\nلا شعر أو رقبة أو أذنان ظاهرة.\nصمم فستان مستكشف ملكي محتشم وأصيل بأكمام طويلة، وياقة عالية، وتنورة فضفاضة تصل للكاحل، مع عباءة قصيرة (capelet) فوق الكتفين، وحذاء مسطح مريح.\nلا أقمشة شفافة، لا ملابس ضيقة، لا مكياج أو مجوهرات كبار.\n\nالأسلوب:\nرسوم متحركة ثلاثية الأبعاد سينمائية فاخرة ومبتكرة + زجاج مورفيك (Morphic Glass).\nلوحة ألوان العجائب المعتدلة (Cool Wonder): الأزرق السماوي (Cyan) #22D3EE، والأزرق النيلي (Indigo) #312E81، والبنفسجي #7C3AED، وأبيض ناعم، ولمسة كهرمانية صفراء #F59E0B.\nحافظ على وضع الإضاءة الساطعة، إضاءة سماوية باهتة، إضاءة حافة لطيفة، وأجرام قمرية مستديرة تشبه الألعاب. تجنب الخلفيات الفضائية المظلمة أو السوداء.\n\nمشاهد الملصقات التسعة:\n1. الأميرة تحمل كتاب قصص متوهج.\n2. الأميرة تجلس على هلال ودود.\n3. الأميرة تلوح بجانب تلسكوب صغير.\n4. الأميرة تحمل حقيبة مدرسية على شكل نجمة.\n5. الأميرة تقف بجوار نافذة قصر مشرقة.\n6. ملصق اسم على شكل صاروخ.\n7. ملصق مادة على شكل كبسولة قمر.\n8. ملصق صف على شكل درع نجمة.\n9. ملصق مدرسة طويل على شكل كوكبة نجمية.\n\nالنص الدقيق:\nPrincess {{CHILD_NAME}}\nGrade: {{GRADE}}\nSchool: {{SCHOOL_NAME}}\nSubject: {{SUBJECT}}\n\nالخطوط والكتابة:\nاسم الطفلة بخط دائري ضخم جداً. بالإنجليزية: Fredoka + Inter. بالعربية: Cairo Bold + Tajawal مع اتجاه كامل من اليمين إلى اليسار (RTL).\n\nقواعد حماية الملكية الفكرية الصارمة:\nصمم مستكشفة حجاب أصلية بالكامل. لا تشابه مع ديزني أو أي امتياز تجاري. لا نصوص عشوائية، لا علامات مائية، ولا فوضى بصرية.",
        "textEn": "SYSTEM ROLE:\nHigh-end personalized children’s sticker designer. Output ONE final printable sticker sheet only.\n\nCANVAS:\nA4 portrait, 300 DPI.\nVery pale icy-blue background.\nNine separate die-cut stickers arranged along a flowing constellation path.\nKeep every sticker individually cuttable.\n\nTOPIC:\nPersonalized school labels featuring a little hijabi princess on a joyful moon-and-stars learning adventure.\n\nPHOTO ENGINE:\nUse the uploaded child photo as the only identity reference.\nTransform the child into an original cinematic 3D animated character.\nPreserve facial features, skin tone, glasses, expression and apparent age.\nMaintain the same face, hijab and outfit in every sticker.\n\nHIJAB:\nUse a fully covering child-friendly hijab with soft rounded folds.\nNo visible hair, neck or ears.\nThe hijab must remain securely styled during every action pose.\n\nCLOTHING:\nCreate an original modest royal explorer dress:\nlong sleeves\nhigh neckline\nloose ankle-length skirt\nsmall capelet over the shoulders\ncomfortable flat shoes\n\nNo transparent fabric.\nNo tight silhouette.\nNo adult jewelry or heavy makeup.\n\nSTYLE:\nOriginal premium 3D family-animation style + Morphic Glass.\nCool Wonder palette:\ncyan #22D3EE\nindigo #312E81\nviolet #7C3AED\nsoft white\none amber accent #F59E0B\n\nKeep the overall design in bright light mode.\nUse pale celestial daylight, soft glowing edges, gentle rim light and rounded toy-like moon objects.\nAvoid black or dark space backgrounds.\n\nLAYOUT:\nCreate a winding constellation path from bottom-left to top-right.\n\nSTICKER SCENES:\n1. Princess holding a glowing storybook.\n2. Princess sitting on a friendly crescent moon.\n3. Princess waving beside a tiny telescope.\n4. Princess carrying a star-shaped school bag.\n5. Princess standing near a bright palace window.\n6. Rocket-shaped name label.\n7. Moon capsule subject label.\n8. Star shield grade label.\n9. Long constellation school label.\n\nEXACT TEXT:\nPrincess {{CHILD_NAME}}\nGrade: {{GRADE}}\nSchool: {{SCHOOL_NAME}}\nSubject: {{SUBJECT}}\n\nTYPOGRAPHY:\nUse huge rounded lettering for the child’s name.\nEnglish: Fredoka + Inter.\nArabic: Cairo Bold + Tajawal.\nArabic must remain fully RTL inside a separate text zone.\n\nSTRICT COPYRIGHT-SAFE RULES:\nNo resemblance to any famous princess, space character or franchise.\nNo recognizable palace, costume, mascot or logo.\nNo exposed hair.\nNo random planet names.\nNo extra children.\nNo watermark.\nNo dark background.\nNo frightening creatures.\nNo tiny unreadable text.\n\nFINAL QUALITY:\nMagical, modest, dreamy, highly readable and suitable for girls’ school books, folders and personal belongings.\nOutput ONE final sticker sheet only.",
        "image": "images/stickers/7.png",
        "variables": [
          {"name": "CHILD_NAME", "labelAr": "اسم الطفلة", "labelEn": "Princess Name", "placeholderAr": "مثال: سارة", "placeholderEn": "e.g. Sarah"},
          {"name": "GRADE", "labelAr": "الصف الدراسي", "labelEn": "Grade", "placeholderAr": "مثال: الصف الثاني", "placeholderEn": "e.g. Grade 2"},
          {"name": "SCHOOL_NAME", "labelAr": "اسم المدرسة", "labelEn": "School Name", "placeholderAr": "مثال: مدرسة الابداع", "placeholderEn": "e.g. Innovation School"},
          {"name": "SUBJECT", "labelAr": "المادة الدراسية", "labelEn": "Subject", "placeholderAr": "مثال: اللغة العربية", "placeholderEn": "e.g. Arabic"}
        ]
      },
      {
        "id": 8,
        "titleAr": "الأميرة بالحجاب والحيوانات اللطيفة",
        "titleEn": "Hijabi Animal Friends Labels",
        "textAr": "الدور: مصمم ملصقات حيوانات للأطفال مخصص وعالي الجودة. الإخراج: ورقة ملصقات واحدة فقط جاهزة للطباعة.\n\nاللوحة:\nحجم A4 عمودي، 2480 × 3508 بكسل، 300 نقطة لكل بوصة، خلفية سماء باهتة ونظيفة، عشرة ملصقات قابلة للقص الفردي مرتبة في شبكة تحريرية واسعة عمودين × 5 صفوف مع حدود بيضاء سميكة للقص (die-cut) وأدلة قص رمادية باهتة.\n\nالموضوع:\nملصقات مدرسية مخصصة تظهر أميرة صغيرة ترتدي الحجاب تتفاعل بمودة وعاطفة مع أصدقاء حيوانات أصليين ولطيفين للغاية.\n\nمرجع الصورة ومحرك الهوية:\nاستخدم صورة الطفلة المرفوعة كمرجع وحيد للهوية. حول الطفلة إلى شخصية رسوم متحركة ثلاثية أبعاد سينمائية عائلية أصلية. حافظ على ملامح وجهها المعروفة، ولون بشرتها، ونظاراتها، وابتسامتها، وعمرها التقريبي. حافظ على ثبات الوجه والحجاب والفستان في جميع الملصقات العشرة دون تغيير.\n\nالحجاب والملابس المحتشمة:\nصمم حجاباً يغطي بالكامل مع طيات مرتبة وناعمة دون إظهار أي شعر أو أذن أو رقبة. ألبس الطفلة فستان أميرة محتشم وأصيل بأكمام طويلة، ياقة عالية، تنورة فضفاضة تصل للكاحل، حذاء مسطح، وتاج صغير خفيف وبسيط ومبتكر يوضع فوق الحجاب.\n\nالأسلوب:\nجمالية رسوم متحركة ثلاثية الأبعاد عائلية سينمائية فاخرة ومبتكرة + زجاج مورفيك (Morphic Glass). لوحة الألوان النهارية المنعشة (Fresh Daylight): أزرق سماوي #60A5FA، أخضر عشبي #65C18C، أصفر مشمش #FFD93D، وأبيض، مع ظلال ناعمة بالأزرق والرمادي.\n\nمشاهد الحيوانات الخمسة:\n1. الأميرة تعانق أرنباً رقيقاً.\n2. الأميرة تجلس بجانب باندا صغير.\n3. الأميرة تقوم بـ \"هاي فايف\" مع ثعلب صغير.\n4. الأميرة تحتضن فيل صغير جداً.\n5. الأميرة تقرأ كتاباً مع شبل أسد صغير.\nالملصقات 6-10: نسخة أطول لملصق معلومات لكل موضوع من موضوعات الحيوانات الخمسة. ضع مشهد الطفلة والحيوان في جانب واحد ومنطقة كتابة زجاجية بلورية واسعة في الجانب الآخر بشكل تبادلي بين اليمين واليسار.\n\nالنص الدقيق:\nPrincess {{CHILD_NAME}}\nGrade: {{GRADE}}\nSchool: {{SCHOOL_NAME}}\nSubject: {{SUBJECT}}\n\nالخطوط والكتابة:\nيجب أن يكون اسم الطفلة هو الأكبر حجماً. بالإنجليزية: Baloo 2 أو Fredoka + Poppins. بالعربية: Baloo Bhaijaan 2 + Cairo مع محاذاة صحيحة من اليمين إلى اليسار (RTL).\n\nقواعد حماية الملكية الفكرية الصارمة:\nالتصاميم والشخصيات والحيوانات يجب أن تكون أصلية بالكامل وغير مستوحاة من أي ديزني أو فيلم تجاري. لا شعر مكشوف، لا نصوص عشوائية، لا علامات مائية، ولا فوضى بصرية. طفلة واحدة و5 حيوانات أليفة.",
        "textEn": "SYSTEM ROLE:\nPremium personalized children’s animal-sticker designer. Output ONE final printable sticker sheet only.\n\nCANVAS:\nA4 portrait, 2480 × 3508 px, 300 DPI.\nClean pale sky background.\nTen individually cuttable labels arranged in a spacious 2-column × 5-row editorial grid.\nAdd thick white die-cut borders and subtle pale-gray cut lines.\n\nTOPIC:\nPersonalized school labels showing a little hijabi princess affectionately interacting with extremely cute animal friends.\n\nPHOTO ENGINE:\nUse the uploaded child photograph as the only identity reference.\nTransform the child into an original cinematic 3D family-animation character.\nPreserve recognizable facial features, skin tone, glasses, smile and apparent age.\nKeep the child’s face, hijab and dress completely consistent across all ten stickers.\n\nHIJAB AND MODEST CLOTHING:\nCreate a fully covering hijab with neat, soft fabric folds.\nNo visible hair, ears or neck.\nDress the child in an original modest princess outfit with:\nlong sleeves\nhigh neckline\nloose ankle-length skirt\nflat shoes\nsmall child-sized crown placed over the hijab\n\nThe crown must be original, lightweight and simple.\nNo adult makeup.\nNo tight or transparent clothing.\n\nSTYLE:\nOriginal premium cinematic 3D family-animation style + Morphic Glass.\nFresh Daylight palette:\nsky blue #60A5FA\ngrass green #65C18C\nsunshine yellow #FFD93D\nclean white\nsoft gray-blue shadows\n\nUse bright garden daylight, soft global illumination, tactile fur, gentle subsurface scattering, rounded paws and friendly expressive faces.\n\nANIMAL SCENES:\n1. Princess hugging a fluffy rabbit.\n2. Princess sitting beside a baby panda.\n3. Princess high-fiving a fox cub.\n4. Princess cuddling a baby elephant.\n5. Princess reading with a small lion cub.\n\nSTICKERS 6–10:\nCreate one long information-label variation for each animal scene.\nPlace the child and animal on one side.\nPlace a large frosted-glass text area on the other side.\nAlternate character placement left and right.\n\nEXACT TEXT:\nPrincess {{CHILD_NAME}}\nGrade: {{GRADE}}\nSchool: {{SCHOOL_NAME}}\nSubject: {{SUBJECT}}\n\nTYPOGRAPHY:\nName must dominate every sticker.\nMaximum three short information lines.\nEnglish: Baloo 2 or Fredoka + Poppins.\nArabic: Baloo Bhaijaan 2 + Cairo.\nArabic must be fully RTL and right-aligned.\n\nDECORATIONS:\nUse tiny flowers, leaves, clouds and stars only.\nAnimal ears, trunks, tails, paws and the child’s hands must never cover the text.\n\nSTRICT COPYRIGHT-SAFE RULES:\nAll princess styling and animals must be completely original.\nNo resemblance to famous animated animals, mascots or movie characters.\nNo studio logos.\nNo recognizable costumes.\nNo branded clothing.\nNo exposed hair.\nNo sharp teeth or frightening claws.\nNo extra children.\nNo random text.\nNo watermark.\nNo clutter.\n\nFINAL QUALITY:\nExtra cute, affectionate, modest, culturally respectful and ideal for girls’ notebooks, folders, lunch boxes and pencil cases.\nOutput ONE final printable sticker sheet only.",
        "image": "images/stickers/8.png",
        "variables": [
          {"name": "CHILD_NAME", "labelAr": "اسم الطفلة", "labelEn": "Princess Name", "placeholderAr": "مثال: سارة", "placeholderEn": "e.g. Sarah"},
          {"name": "GRADE", "labelAr": "الصف الدراسي", "labelEn": "Grade", "placeholderAr": "مثال: الصف الثاني", "placeholderEn": "e.g. Grade 2"},
          {"name": "SCHOOL_NAME", "labelAr": "اسم المدرسة", "labelEn": "School Name", "placeholderAr": "مثال: مدرسة الابداع", "placeholderEn": "e.g. Innovation School"},
          {"name": "SUBJECT", "labelAr": "المادة الدراسية", "labelEn": "Subject", "placeholderAr": "مثال: اللغة العربية", "placeholderEn": "e.g. Arabic"}
        ]
      }
    ]
  },
  {
    "id": "assessment",
    "category": "toolkit",
    "titleAr": "تقييم وملصقات تعليمية",
    "titleEn": "Assessment & Posters",
    "descAr": "أدوات متميزة لتصميم أوراق التقييم، الأهداف التعليمية، والملصقات المدرسية التفاعلية للطلاب",
    "descEn": "Premium tools to design assessment sheets, learning objectives, and interactive classroom posters",
    "icon": "📊",
    "colorClass": "card-assessment",
    "prompts": [
      {
        "id": 1,
        "titleAr": "مصمم ورقة التقييم الشامل (A4)",
        "titleEn": "Comprehensive Assessment Poster (A4)",
        "textAr": "الدور: أنت مصمم تقييم تعليمي ومصمم اختبارات وخبير في التعلم البصري من الطراز العالمي.\n\nالمهمة:\n- قم بتحليل ملف الدرس أو الصورة المرفوعة (سواء كانت مكتوبة بخط اليد أو رقمية، مصورة أو ممسوحة ضوئياً).\n- استخرج تلقائياً عنوان الدرس والمفاهيم والمهارات ومستوى المعرفة من الملف.\n- أو أعد تصميم الاختبار المرفق (إذا كانت الصورة أو الملف المرفوع اختباراً حقيقياً).\n- لا تطلب اسم الدرس أو مستوى الصف الدراسي.\n\nقواعد اللغة والكتابة:\n- لغة المخرجات: اللغة العربية لجميع المواد.\n- مادة اللغة الإنجليزية: المخرجات باللغة الإنجليزية.\n- المواد العلمية: الشروحات باللغة العربية مع المصطلحات العلمية باللغة الإنجليزية عند الحاجة.\n\nهدف تصميم التقييم:\nإنشاء بوستر تقييمي جذاب وبصري بمقاس A4 يحتوي على:\n• اختبار قصير\n• أنشطة تدريبية\n• تحدي التفكير النهائي\nيجب أن يعتمد المحتوى بالكامل على الملف المرفوع.\n\nقواعد أساسية للأسئلة:\n- لا تحاول حل أي أسئلة أو تقديم إجابات.\n- لا تقم بتوصيل العناصر المتطابقة أو ملء الفراغات.\n- يمكن تقصير الأسئلة قليلاً لتجنب الازدحام، ولكن يجب أن تظل متنوعة وتغطي الدرس.\n- يجب أن تقيس الأسئلة الفهم وليس الحفظ.\n\nهيكل البوستر:\n1) العنوان: اسم المادة: {{SUBJECT_NAME}} | عنوان الدرس | اسم المعلم: {{TEACHER_NAME}} | عنوان التقييم (يتم توليده تلقائياً)\n2) أسئلة الاختبار الرئيسية: أسئلة اختيار من متعدد - صح/خطأ - إكمال/إجابة قصيرة. نوع الصعوبة وأنواع الأسئلة (اعرض الأسئلة فقط دون إجابة)\n3) الأنشطة التدريبية: نشاط فهم (سهل) - نشاط تطبيق (متوسط) - نشاط تفكير ناقد (متقدم)\n4) سؤال التحدي النهائي: سؤال تفكير عميق وشامل واحد (عرض فقط - دون حل)\n\nإرشادات التصميم والمرئيات:\n- مقاس A4، عمودي | جاهز للطباعة بدقة عالية جداً\n- بوستر واحد فقط | مبتكر وجذاب بصرياً\n- عناصر بصرية مناسبة للموضوع\n- مصمم كأنه في برنامج Adobe Illustrator (رسومات متجهة عالية الجودة)\n- تسلسل هرمي واضح ومحترف\n- ممتع وجذاب للطلاب\n\nصندوق معلومات الطالب (في الأسفل):\n• اسم الطالب | الصف | الشعبة\n\nقواعد صارمة:\n- هذا ليس ملخصاً - بل تقييم حقيقي\n- لا تدرج أهدافاً تعليمية صريحة\n- لا أنشطة جماعية\n- يجب أن يبدو البوستر مثل بوستر اختبار احترافي حديث، وليس ورقة عمل عادية\n- كتابة الإجابات أو الحلول ممنوعة منعا باتا\n\nالمخرجات النهائية:\nبوستر تقييمي واحد عالي الجودة بمقاس A4 - أسئلة اختبار + أنشطة تدريبية + تحدي نهائي. متوافق تماماً مع محتوى الدرس، وجذاب بصرياً، وجاهز للطباعة مع صندوق معلومات الطالب في الأسفل.",
        "textEn": "SYSTEM ROLE: World-class educational assessment designer, exam creator, and visual learning expert.\n\nTASK:\n- Analyze the uploaded lesson image or PDF file (handwritten or digital, photographed or scanned).\n- Automatically extract the lesson title, concepts, skills, and knowledge level from the file.\n- Or redesign the attached quiz (if the uploaded image or file is a real quiz).\n- Do not request the lesson name or grade level.\n\nGRAMMAR RULES:\n- Output Language: Arabic for all subjects.\n- English Subject: Output in English.\n- Scientific Materials: Explanations in Arabic with scientific terms in English where required.\n\nASSESSMENT DESIGN OBJECTIVE:\nCreate a visually appealing and engaging A4 assessment poster that includes:\n• A short quiz\n• Practice activities\n• A final thinking challenge\nThe entire content must be based on the uploaded file.\n\nBASIC RULES FOR QUESTIONS:\n- Do not attempt to solve any questions or provide answers.\n- Do not connect matching items or fill in blanks.\n- Questions can be shortened slightly to avoid clutter, but must remain varied and cover the lesson.\n- Questions should assess understanding, not memorization.\n\nPOSTER STRUCTURE:\n1) Title: Subject Name: {{SUBJECT_NAME}} | Lesson Title | Teacher's Name: {{TEACHER_NAME}} | Assessment Title (Auto-Generated)\n2) Main Test Questions: Multiple Choice Questions - True/False - Complete/Short Answer. Vary difficulty level and question types. Display questions ONLY — Do NOT answer.\n3) Practice Activities: Comprehension Activity (Easy) - Application Activity (Intermediate) - Critical Thinking Activity (Advanced)\n4) Final Challenge Question: One comprehensive deep-thinking question (Display only — do NOT solve).\n\nDESIGN & VISUAL GUIDELINES:\n- A4 size, vertical | Print-ready, very high resolution.\n- One poster only | Creative and visually appealing.\n- Visual elements appropriate to subject matter.\n- Designed as if in Adobe Illustrator — high-quality vector graphics.\n- Clear professional hierarchy.\n- Fun, engaging, attention-grabbing for students.\n\nSTUDENT INFORMATION BOX (include at bottom):\n• Student Name | Grade | Section\n\nSTRICT RULES:\n- This is NOT a summary — it is a genuine assessment.\n- Do not include explicit learning objectives.\n- No group activities.\n- Poster must look like a modern professional exam poster, NOT a worksheet.\n- Writing answers or solutions is STRICTLY PROHIBITED.\n\nFINAL OUTPUT:\nOne high-quality A4 assessment poster — exam questions + practice activities + final challenge. Fully aligned with lesson content. Visually appealing. Print-ready. Student info box at bottom.",
        "image": "images/Assessment/1.png",
        "variables": [
          {"name": "SUBJECT_NAME", "labelAr": "اسم المادة", "labelEn": "Subject Name", "placeholderAr": "مثال: العلوم", "placeholderEn": "e.g. Science"},
          {"name": "TEACHER_NAME", "labelAr": "اسم المعلم", "labelEn": "Teacher's Name", "placeholderAr": "مثال: أ. محمد أحمد", "placeholderEn": "e.g. Mr. Mohammad Ahmad"}
        ]
      },
      {
        "id": 2,
        "titleAr": "ملصق درسي تفاعلي بهوية المعلم",
        "titleEn": "Branded Educational Lesson Poster",
        "textAr": "الدور: مصمم ملصقات تعليمية محترف ومبتكر.\n\nاللوحة:\nملصق تعليمي احترافي، مقاس A4 عمودي، 300 نقطة لكل بوصة.\n\nالموضوع:\nشرح درس تفاعلي متكامل بهوية المعلم وبكتابة عربية صحيحة بنسبة 100% دون أي أخطاء أو تشوهات.\n\nالمتطلبات الأساسية:\n- اسم المعلم: {{TEACHER_NAME}}\n- رقم الهاتف: {{PHONE_NUMBER}}\n- عنوان الدرس: {{LESSON_TITLE}} في نص عربي واضح وكبير في الأعلى.\n- الأسلوب: رسومات متجهة (Vector) واضحة ومنظمة بأسلوب إبداعي خيالي.\n- لغة الكتابة: اتجاه كامل من اليمين إلى اليسار (RTL)، بدون أخطاء إملائية وحروف متصلة بشكل صحيح.\n- لوحة الألوان: متكيفة تلقائياً ومناسبة لموضوع الدرس.\n\nالعناصر الإضافية والهوية:\n- وضع اسم المعلم بشكل بارز بخط عربي جميل.\n- معلومات الاتصال ورقم الهاتف منسقة باحترافية في أسفل الملصق (الفوتير).\n- أيقونات وسائل التواصل الاجتماعي (اختياري): فيسبوك، تويتر، إنستغرام، تليغرام، يوتيوب.\n\nالجودة النهائية:\nجاهز للطباعة، دقة عالية جداً، مناسب للعرض داخل الصف الدراسي والمشاركة الرقمية على وسائل التواصل الاجتماعي.",
        "textEn": "SYSTEM ROLE: Premium educational poster and infographic designer.\n\nCANVAS:\nProfessional educational poster, A4 vertical, 300 DPI.\n\nTOPIC:\nInteractive lesson explanation poster with teacher branding.\n\nREQUIREMENTS:\n- Teacher Name: {{TEACHER_NAME}}\n- Phone Number: {{PHONE_NUMBER}}\n- Lesson Title: {{LESSON_TITLE}} in clear, large Arabic script at the top.\n- Style: clear, organized vector drawings created in an imaginative way.\n- Arabic text: perfect RTL rendering, zero distortion, zero errors.\n- Color palette: appropriate to subject matter (auto-adaptive).\n\nADDITIONAL BRANDING ELEMENTS:\n- Teacher name prominently placed in Arabic calligraphy.\n- Contact info styled professionally in the footer.\n- Social media icons (optional): Facebook, Twitter, Instagram, Telegram, YouTube.\n\nQUALITY:\nPrint-ready, high resolution, suitable for classroom display and social media sharing.",
        "image": "images/Assessment/2.png",
        "variables": [
          {"name": "LESSON_TITLE", "labelAr": "عنوان الدرس", "labelEn": "Lesson Title", "placeholderAr": "مثال: الجملة الفعلية", "placeholderEn": "e.g. Verbal Sentence"},
          {"name": "TEACHER_NAME", "labelAr": "اسم المعلم", "labelEn": "Teacher's Name", "placeholderAr": "مثال: أ. محمد أحمد", "placeholderEn": "e.g. Mr. Mohammad Ahmad"},
          {"name": "PHONE_NUMBER", "labelAr": "رقم الهاتف", "labelEn": "Phone Number", "placeholderAr": "مثال: 0501234567", "placeholderEn": "e.g. 0501234567"}
        ]
      },
      {
        "id": 3,
        "titleAr": "ملصق الأهداف التعليمية (تصنيف بلوم)",
        "titleEn": "Bloom's Learning Objectives Poster",
        "textAr": "الدور: مصمم ملصقات تعليمية وأوراق عمل مدرسية محترف.\n\nاللوحة:\nملصق الأهداف التعليمية احترافي، مقاس A4 عمودي، 300 نقطة لكل بوصة.\n\nالموضوع:\nملصق الأهداف التعليمية لدرس محدد موجه نحو مستوى بلوم المستهدف.\n\nالتصميم وبنية الملصق:\n• العنوان الرئيسي: 'بنهاية هذا الدرس، سيكون الطلاب قادرين على...'\n• 5 أهداف تعليمية ذكية (SMART) باستخدام أفعال بلوم الإجرائية.\n• كل هدف يحتوي على: الفعل الإجرائي (بخط عريض) + المحتوى + شرط التحقيق.\n• شارة توضح مستوى بلوم المستهدف بجانب كل هدف.\n• قائمة مراجعة لمعايير النجاح (Success criteria checklist) في الأسفل.\n• معلومات المعلم والصف الدراسي في أسفل الملصق (الفوتير).\n\nالمتغيرات المدخلة:\nالمادة: {{SUBJECT}}\nالموضوع: {{LESSON_TOPIC}}\nالصف: {{GRADE_LEVEL}}\nمستوى بلوم المستهدف: {{BLOOM_LEVEL}}\n\nالأسلوب والجمالية:\nأسلوب أكاديمي احترافي، تسلسل هرمي واضح، دقة عالية جداً جاهزة للطباعة والعرض الصفّي.",
        "textEn": "SYSTEM ROLE: Professional academic poster designer.\n\nCANVAS:\nA4 portrait, 300 DPI.\n\nTOPIC:\nLearning objectives poster mapped to Bloom's taxonomy.\n\nDESIGN:\n• Main title: 'By the end of this lesson, students will be able to...'\n• 5 SMART learning objectives using Bloom's action verbs.\n• Each objective: verb (bold) + content + condition.\n• Bloom's level badge on each objective.\n• Success criteria checklist at bottom.\n• Teacher and class info in footer.\n\nINPUTS:\nSubject: {{SUBJECT}}\nTopic: {{LESSON_TOPIC}}\nGrade: {{GRADE_LEVEL}}\nBloom's Level Target: {{BLOOM_LEVEL}}\n\nSTYLE:\nProfessional academic, clear hierarchy, classroom display quality, A4 portrait 300 DPI.",
        "image": "images/Assessment/3.png",
        "variables": [
          {"name": "SUBJECT", "labelAr": "المادة", "labelEn": "Subject", "placeholderAr": "مثال: اللغة العربية", "placeholderEn": "e.g. Arabic"},
          {"name": "LESSON_TOPIC", "labelAr": "الموضوع", "labelEn": "Lesson Topic", "placeholderAr": "مثال: دورة الماء في الطبيعة", "placeholderEn": "e.g. Water Cycle"},
          {"name": "GRADE_LEVEL", "labelAr": "الصف", "labelEn": "Grade Level", "placeholderAr": "مثال: الصف الرابع", "placeholderEn": "e.g. Grade 4"},
          {"name": "BLOOM_LEVEL", "labelAr": "مستوى بلوم المستهدف", "labelEn": "Bloom's Level Target", "placeholderAr": "مثال: تذكر / تطبيق / تحليل", "placeholderEn": "e.g. Remember / Apply / Analyze"}
        ]
      },
      {
        "id": 4,
        "titleAr": "تقرير تقدم الطالب البصري",
        "titleEn": "Visual Student Progress Report Card",
        "textAr": "الدور:\nمصمم تقارير أكاديمية ورسوم بيانية تعليمية محترف.\n\nاللوحة:\nتقرير تقدم الطالب البصري، مقاس A4 عمودي، 300 نقطة لكل بوصة.\n\nالموضوع:\nتصميم بطاقة تقرير تقدم الطالب بشكل بصري رائع وتفاعلي ومحبب للأطفال، دون أن يفقد طابعه الاحترافي الأكاديمي.\n\nالمكونات الأساسية بالتقرير:\n1. رأس التقرير (معلومات الطالب): اسم الطالب: {{STUDENT_NAME}}، الصف والشعبة: {{GRADE_AND_CLASS}}، الفترة الدراسية: {{ACADEMIC_PERIOD}}، اسم المعلم والمدرسة: {{TEACHER_OR_SCHOOL}}، مع إطار دائري لصورة الطالب الشخصية.\n2. الدرجات الدراسية: مخطط شريطي بصري (Bar chart) لكل مادة (الرياضيات، اللغة الإنجليزية، العلوم، اللغة العربية، الدراسات الاجتماعية، التربية الإسلامية) لإظهار مستوى الأداء وليس مجرد أرقام.\n3. مؤشرات التقدير: ترميز لوني واضح للأداء (ممتاز، جيد، مقبول، يحتاج تحسين).\n4. الحضور والغياب: تقويم شهري تفاعلي مع تحديد أيام الغياب بوضوح.\n5. السلوك والمهارات: نظام تقييم بـ 5 نجوم للمهارات الحياتية (التعاون مع الآخرين، الاجتهاد والمثابرة، المشاركة الصفية، الالتزام بالواجبات، السلوك العام).\n6. ملاحظات المعلم: مساحة لكتابة التوجيهات والملاحظات.\n7. خانة توقيع ولي الأمر في الأسفل.\n\nالأسلوب والجمالية:\nأسلوب احترافي، ألوان متناسقة ومبهجة للأطفال، جاهز للطباعة والتعليق.",
        "textEn": "SYSTEM ROLE: Professional academic report and infographic designer.\n\nCANVAS:\nA4 portrait, 300 DPI.\n\nTOPIC:\nVisual student progress report card.\n\nREPORT CARD SECTIONS:\n1. Student info header (Student Name: {{STUDENT_NAME}}, Grade/Class: {{GRADE_AND_CLASS}}, Academic Period: {{ACADEMIC_PERIOD}}, Teacher/School: {{TEACHER_OR_SCHOOL}}).\n2. SUBJECT GRADES — visual bar chart per subject (Math, English, Science, Arabic, Social Studies, Islamic Studies).\n3. GRADE INDICATORS — color coded: Excellent / Good / Satisfactory / Needs Improvement.\n4. ATTENDANCE — visual calendar with absences marked.\n5. BEHAVIOR & SKILLS — 5-star rating per skill (collaboration, effort, participation, homework, general behavior).\n6. TEACHER COMMENTS — text field for custom comments.\n7. PARENT SIGNATURE FIELD.\n\nSTYLE:\nProfessional, encouraging, child-friendly, print-ready A4 portrait.",
        "image": "images/Assessment/4.png",
        "variables": [
          {"name": "STUDENT_NAME", "labelAr": "اسم الطالب", "labelEn": "Student Name", "placeholderAr": "مثال: أحمد عمر فاروق", "placeholderEn": "e.g. Ahmed Omar Farouk"},
          {"name": "GRADE_AND_CLASS", "labelAr": "الصف والشعبة", "labelEn": "Grade & Class", "placeholderAr": "مثال: الصف الرابع - شعبة أ", "placeholderEn": "e.g. Grade 4 - Section A"},
          {"name": "ACADEMIC_PERIOD", "labelAr": "الفترة الدراسية", "labelEn": "Academic Period", "placeholderAr": "مثال: الفصل الدراسي الأول 2026", "placeholderEn": "e.g. First Semester 2026"},
          {"name": "TEACHER_OR_SCHOOL", "labelAr": "المعلم والمدرسة", "labelEn": "Teacher & School Name", "placeholderAr": "مثال: أ. محمد أحمد - مدرسة النور", "placeholderEn": "e.g. Mr. Mohammad - Al Noor School"}
        ]
      },
      {
        "id": 5,
        "titleAr": "بطاقات الخروج للتقييم السريع",
        "titleEn": "Formative Assessment Exit Tickets",
        "textAr": "الدور:\nمصمم أوراق عمل وبطاقات تعليمية تفاعلية محترف.\n\nاللوحة:\nورقة بطاقات خروج تفاعلية (Exit Tickets)، مقاس A4 عمودي، 300 نقطة لكل بوصة، مقسمة إلى 4 بطاقات تفاعلية في الصفحة (كل بطاقة تمثل ربع ورقة A4) مع أدلة قص منقطة.\n\nالموضوع:\nبطاقات خروج تفاعلية وممتعة للتقييم التكويني السريع في نهاية الحصة.\n\nالمتغيرات الأساسية بالترويسة:\nالمادة: {{SUBJECT}} | الموضوع: {{LESSON_TOPIC}} | الصف: {{GRADE_LEVEL}}\n\nأنواع بطاقات الخروج الأربعة المتضمنة:\n1. بطاقة 3-2-1: (3 أشياء تعلمتها اليوم، سؤالان ما زالا في ذهني، فكرة واحدة أربطها بما تعلمته).\n2. بطاقة الإشارة الضوئية (Stoplight): تقييم الفهم بالألوان (أخضر: فهمت الدرس جيداً وأستطيع شرحه / أصفر: فهمت بعض الأفكار وأحتاج للمزيد من الممارسة / أحمر: لم أفهم الدرس بعد وأحتاج للمساعدة).\n3. بطاقة ملخص في جملة واحدة: مساحة يكتب فيها الطالب ملخصاً للدرس في جملة واحدة مكثفة.\n4. بطاقة سؤال سريع: مساحة مخصصة لسؤال تقييمي سريع يضعه المعلم ليجيب عنه الطالب.\n\nالأسلوب والتصميم:\nملون ومبهج وجاذب للطلاب، يتضمن مساحة لكتابة اسم الطالب والتاريخ في كل بطاقة، مع علامة مقص وأدلة قص واضحة للتسهيل.",
        "textEn": "SYSTEM ROLE: Professional worksheet and exit ticket designer.\n\nCANVAS:\nA4 portrait, 300 DPI, containing 4 exit tickets per page (quarter A4 size per ticket) with dotted cut lines.\n\nTOPIC:\nExit ticket designs for formative classroom assessment.\n\nHEADER FIELDS:\nSubject: {{SUBJECT}} | Topic: {{LESSON_TOPIC}} | Grade Level: {{GRADE_LEVEL}}\n\nTICKET TYPES INCLUDED:\n1. '3-2-1' — 3 things learned, 2 questions, 1 connection.\n2. 'Stoplight' — Green (got it) / Yellow (almost) / Red (confused).\n3. 'One Sentence Summary' — key learning in one sentence.\n4. 'Quick Question' — space for a targeted comprehension question.\n\nSTYLE:\nColorful, engaging, print-ready, including cut-line guides, student name and date fields on each ticket.",
        "image": "images/Assessment/5.png",
        "variables": [
          {"name": "SUBJECT", "labelAr": "المادة", "labelEn": "Subject", "placeholderAr": "مثال: الرياضيات", "placeholderEn": "e.g. Mathematics"},
          {"name": "LESSON_TOPIC", "labelAr": "الموضوع", "labelEn": "Lesson Topic", "placeholderAr": "مثال: الكسور الاعتيادية", "placeholderEn": "e.g. Common Fractions"},
          {"name": "GRADE_LEVEL", "labelAr": "الصف الدراسي", "labelEn": "Grade Level", "placeholderAr": "مثال: الصف الثالث", "placeholderEn": "e.g. Grade 3"}
        ]
      }
    ]
  },
  {
    "id": "certificate",
    "category": "toolkit",
    "titleAr": "شهادات تقدير",
    "titleEn": "Appreciation Certificates",
    "descAr": "أدوات متميزة لتصميم شهادات التفوق، تقدير صيام رمضان، الأنشطة والبطولات الرياضية للأطفال",
    "descEn": "Premium tools to design certificates of achievement, Ramadan appreciation, and school activities",
    "icon": "🎓",
    "colorClass": "card-certificate",
    "prompts": [
      {
        "id": 1,
        "titleAr": "شهادة صيام رمضان للأطفال",
        "titleEn": "Ramadan Fasting Appreciation Certificate",
        "textAr": "الدور:\nمصمم شهادات تقدير وهدايا عائلية إسلامية محترف ومبتكر.\n\nاللوحة:\nبوستر شهادة تقدير احترافي مقاس A4 عمودي (Portrait)، 300 نقطة لكل بوصة.\n\nالموضوع:\nشهادة تقدير إسلامية للأطفال تشجيعاً لهم على صيام شهر رمضان المبارك بالكامل وبصورة تذكارية جميلة.\n\nالتصميم والجمالية:\nخلفية إسلامية فاخرة بنقوش هندسية عربية مذهبة وأقواس إسلامية عريقة، يعلق عليها فانوسان مضيئان من الذهب على الجانبين، مع هلال ومسجد في الأفق البعيد بتفاصيل فاخرة بلون التيراكوتا والأخضر والذهبي البراق.\nفي الأسفل يتوفر ختم شمع أحمر ملكي مع ريشة وقلم حبر ذهبي تقليدي.\n\nتفاصيل النصوص:\n- العنوان في الأعلى بخط ديواني أو ثلث عربي كبير وذهبي عريض: \"شهادة تقدير\"\n- النص الفرعي: \"يتقدم بابا وماما بخالص الشكر والتقدير إلى:\"\n- اسم الطفل بالكامل: {{RECIPIENT_NAME}} بخط رقعة أو نسخ كبير ومذهب ومميز مع خط ذهبي مزخرف أسفله.\n- جملة التقدير: \"لأنها صامت شهر رمضان كاملاً وكانت ابنة صالحة\"\n- الدعاء: \"بارك الله فيها وجعلها من الصالحين المقبولين\"\n- التاريخ الهجري والميلادي في الأسفل: \"السنة الهجرية: {{YEAR_HIJRI}} هـ / الميلادية: {{YEAR_GREGORIAN}} م\"\n- اسم الموقّع والتوقيع: \"التوقيع: {{SIGNATURE_NAME}}\"\n\nالأسلوب:\nإضاءة دافئة ناعمة، مظهر ورقي فاخر ملموس، دقة عالية جداً وجاهز للطباعة والتعليق داخل المنزل.",
        "textEn": "SYSTEM ROLE: Premium Islamic-style certificate and keepsake designer.\n\nCANVAS:\nA4 portrait, 300 DPI.\n\nTOPIC:\nPersonalized family Ramadan fasting appreciation certificate for children.\n\nDESIGN & AESTHETIC:\nLuxurious Islamic background with golden Arabesque geometric patterns, classical arches, two golden hanging lanterns glowing on both sides, and a subtle crescent moon and mosque silhouette in the background. Features a royal red wax stamp seal and a golden feather quill pen at the bottom.\n\nTEXT DETAILS:\n- Title at top in large, bold, golden Arabic calligraphy: \"شهادة تقدير\"\n- Subtitle: \"يتقدم بابا وماما بخالص الشكر والتقدير إلى:\"\n- Recipient Name: {{RECIPIENT_NAME}} in large luxury golden script with a thin decorative divider line underneath.\n- Description: \"لأنها صامت شهر رمضان كاملاً وكانت ابنة صالحة\"\n- Blessing: \"بارك الله فيها وجعلها من الصالحين المقبولين\"\n- Date: \"{{YEAR_HIJRI}} H / {{YEAR_GREGORIAN}} G\"\n- Signature area: \"التوقيع: {{SIGNATURE_NAME}}\"\n\nSTYLE:\nSoft studio lighting, realistic textured paper, print-ready, high-resolution family keepsake quality.",
        "image": "images/Certificate/1.png",
        "variables": [
          {"name": "RECIPIENT_NAME", "labelAr": "اسم الطفل أو الطفلة", "labelEn": "Child's Name", "placeholderAr": "مثال: ريم أحمد فاروق", "placeholderEn": "e.g. Reem Ahmad Farouk"},
          {"name": "YEAR_HIJRI", "labelAr": "السنة الهجرية", "labelEn": "Hijri Year", "placeholderAr": "مثال: 1447", "placeholderEn": "e.g. 1447"},
          {"name": "YEAR_GREGORIAN", "labelAr": "السنة الميلادية", "labelEn": "Gregorian Year", "placeholderAr": "مثال: 2026", "placeholderEn": "e.g. 2026"},
          {"name": "SIGNATURE_NAME", "labelAr": "اسم الموقع للتوقيع", "labelEn": "Signer Name", "placeholderAr": "مثال: بابا أحمد", "placeholderEn": "e.g. Baba Ahmad"}
        ]
      },
      {
        "id": 2,
        "titleAr": "شهادة إتمام دورة فاخرة",
        "titleEn": "Luxury Course Completion Certificate",
        "textAr": "الدور:\nمصمم شهادات أكاديمية فاخرة وخبير تصميم ذكاء اصطناعي.\n\nاللوحة:\nقالب شهادة احترافي فاخر أفقي (Landscape)، جاهز للطباعة على خلفية بيضاء نقية.\n\nالأسلوب والتصميم:\nأناقة أكاديمية كلاسيكية مدمجة مع عناصر تصميم مستوحاة من الذكاء الاصطناعي الحديث. لوحة ألوان من العنابي (burgundy) والذهبي المعدني الفاخر.\n\nالإطار والهيكل:\n- إطار ذهبي معدني رقيق حول الشهادة بالكامل.\n- الزوايا: أشكال هندسية عنائية أنيقة مع لمسات ذهبية ناعمة.\n- الخلفية: نقوش شبكة عصبية ودوائر إلكترونية خفيفة للغاية مع أمواج منسابة بلون رمادي فاتح وناعم.\n- العنوان (أعلى الوسط): \"CERTIFICATE OF COMPLETION\" بخط Serif كلاسيكي كبير مع تأثير رقائق الذهب البرّاقة.\n- النص الرسمي أدناه: \"This certificate is proudly awarded by {{INSTITUTION_NAME}} to:\"\n- اسم المتلقي (الوسط): {{RECIPIENT_FULL_NAME}} بخط خط عربي أو لاتيني فاخر مزين بخط ذهبي أسفله.\n- جملة التقدير: \"In recognition of the successful completion of the course: {{COURSE_TITLE}}\"\n- الختم (أسفل الوسط): ميدالية ذهبية بارزة وفاخرة مع أشرطة عنائية تبدو كأنها ختم رسمي حقيقي وبداخله شعار تكنولوجي مميز.\n- التوقيع (أسفل اليمين): خط رفيع لكتابة التوقيع وأسفله: \"SIGNED BY: {{SIGNER_NAME}}\"\n- اسم المنظمة (أسفل الوسط): \"{{ORGANIZATION_NAME}}\"\n- حقوق الطبع (أسفل الهامش بخط صغير): \"Certificate Design Copyright © Ahmed Gohary\"\n\nالمخرجات:\nشهادة متوازنة وأكاديمية فاخرة جاهزة للعرض والطباعة في الأكاديميات الكبرى وفصول الذكاء الاصطناعي.",
        "textEn": "SYSTEM ROLE: High-end academic and professional certificate designer.\n\nCANVAS:\nProfessional luxury landscape certificate, print-ready, pure white background.\n\nSTYLE & DESIGN:\nClassic academic elegance combined with modern AI-inspired design elements. Burgundy and metallic gold color palette.\n\nFRAME & STRUCTURE:\n- Thin luxurious metallic gold border around the entire certificate.\n- Corners: elegant burgundy geometric shapes with subtle gold accents.\n- Background: very subtle neural-network circuit patterns and abstract flowing wave lines in soft light grey.\n- Title (top center): \"CERTIFICATE OF COMPLETION\" in large classic serif typography with a gold foil style effect.\n- Formal text: \"This certificate is proudly awarded by {{INSTITUTION_NAME}} to:\"\n- Recipient Name (centered): {{RECIPIENT_FULL_NAME}} in large elegant luxury calligraphy script font with a thin decorative gold line underneath.\n- Description: \"In recognition of the successful completion of the course: {{COURSE_TITLE}}\"\n- Seal (bottom center): Premium embossed gold seal medal with burgundy ribbon accents. Inside seal: abstract AI-inspired emblem.\n- Signature area (bottom right): \"SIGNED BY: {{SIGNER_NAME}}\"\n- Footer (bottom center): \"{{ORGANIZATION_NAME}}\"\n- Design credit: \"Certificate Design Copyright © Ahmed Gohary\"\n\nOUTPUT:\nLuxurious, balanced, minimal, academic, elegant, print-ready landscape certificate.",
        "image": "images/Certificate/2.png",
        "variables": [
          {"name": "INSTITUTION_NAME", "labelAr": "اسم الجهة المانحة للشهادة", "labelEn": "Institution Name", "placeholderAr": "مثال: أكاديمية المستقبل للذكاء الاصطناعي", "placeholderEn": "e.g. Future AI Academy"},
          {"name": "RECIPIENT_FULL_NAME", "labelAr": "اسم المستلم بالكامل", "labelEn": "Recipient Full Name", "placeholderAr": "مثال: ريم أحمد فاروق", "placeholderEn": "e.g. Reem Ahmad Farouk"},
          {"name": "COURSE_TITLE", "labelAr": "عنوان الدورة أو البرنامج", "labelEn": "Course Title", "placeholderAr": "مثال: مقدمة في الذكاء الاصطناعي", "placeholderEn": "e.g. Introduction to AI"},
          {"name": "SIGNER_NAME", "labelAr": "اسم الشخص الموقّع", "labelEn": "Signer Name", "placeholderAr": "مثال: د. أحمد الجوهري", "placeholderEn": "e.g. Dr. Ahmed Gohary"},
          {"name": "ORGANIZATION_NAME", "labelAr": "اسم المنظمة أو المدرسة", "labelEn": "Organization Name", "placeholderAr": "مثال: مدرسة النور الدولية", "placeholderEn": "e.g. Al Noor International School"}
        ]
      },
      {
        "id": 3,
        "titleAr": "شهادة الفوز بالأنشطة والبطولات الرياضية",
        "titleEn": "Extracurricular Activity Achievement Certificate",
        "textAr": "الدور:\nمصمم شهادات تقدير للبطولات والأنشطة المدرسية التفاعلية للأطفال.\n\nاللوحة:\nحجم A4 أفقي (Landscape)، 300 نقطة لكل بوصة، جاهز للطباعة بوضوح شديد.\n\nالموضوع:\nشهادة تقدير للفوز أو المشاركة الفعالة في الأنشطة اللاصفية والبطولات الرياضية المدرسية.\n\nالتصميم والجمالية:\nتصميم احتفالي فاخر باللونين الأزرق الملكي والذهبي البراق.\nعلى الجانب الأيسر: مجسم كأس ذهبي كبير مميز يحمل كرة قدم (أو أيقونة للنشاط المحدد) مع شريط عريض مكتوب عليه \"FOOTER TEXT\".\nعلى الجانب الأيمن: مجسم ظلي أنيق للاعب كرة قدم أو مشارك نشط بحركة ديناميكية.\nزخارف مذهبة ونقاط احتفالية متناثرة حول الشهادة.\n\nتفاصيل النصوص:\n- العنوان في الأعلى: \"CERTIFICATE OF ACHIEVEMENT\" بخط عريض وداكن.\n- النص الفرعي: \"THIS CERTIFICATE IS PROUDLY PRESENTED TO\"\n- اسم الفائز: {{STUDENT_NAME}} مكتوب بخط ذهبي عريض ومزخرف في الوسط.\n- التقدير والنشاط: \"FOR ACHIEVING {{ACHIEVEMENT}} IN THE {{ACTIVITY}}\"\n- جملة التكريم: \"IN RECOGNITION OF YOUR OUTSTANDING PERFORMANCE, DEDICATION AND SPORTSMANSHIP.\"\n- اسم المدرسة أو النادي: \"{{SCHOOL_OR_CLUB_NAME}}\"\n- التاريخ: \"{{DATE}}\"\n- التوقيع والاعتماد: \"{{PRINCIPAL_OR_COACH_NAME}} HEAD COACH\"\n- في الأسفل يتوفر ختم ذهبي دائري رسمي (Official Seal) وشارات نجوم التميز.\n\nالأسلوب والنوع:\nاحتفالي، راقي، جاهز للطباعة، مناسب للبطولات المدرسية والمكافآت والتحفيز الصفي.",
        "textEn": "SYSTEM ROLE: Premium personalized children’s activity-sticker and certificate designer.\n\nCANVAS:\nA4 landscape, 300 DPI.\n\nTOPIC:\nAchievement certificate for school activities and sports tournaments.\n\nDESIGN & STYLE:\nRoyal blue and metallic gold celebratory design. Left side features a large, detailed golden trophy cup holding a football (or activity icon) with a ribbon draped around it. Right side shows a dynamic silhouette of a soccer player or active participant. Glittering gold confetti and stars are scattered around the border.\n\nTEXT DETAILS:\n- Title: \"CERTIFICATE OF ACHIEVEMENT\" in bold classic typography.\n- Subtitle: \"THIS CERTIFICATE IS PROUDLY PRESENTED TO\"\n- Recipient Name: {{STUDENT_NAME}} in large gold calligraphy lettering.\n- Achievement detail: \"FOR ACHIEVING {{ACHIEVEMENT}} IN THE {{ACTIVITY}}\"\n- Organization: {{SCHOOL_OR_CLUB_NAME}}\n- Date: {{DATE}}\n- Authorized Signatory: {{PRINCIPAL_OR_COACH_NAME}}\n- Features an official gold seal medal at the bottom center.\n\nSTYLE:\nCelebratory, premium, print-ready, high-resolution.",
        "image": "images/Certificate/4.png",
        "variables": [
          {"name": "STUDENT_NAME", "labelAr": "اسم الطالب أو الفائز", "labelEn": "Recipient Name", "placeholderAr": "مثال: أحمد عمر فاروق", "placeholderEn": "e.g. Ahmed Omar Farouk"},
          {"name": "ACTIVITY", "labelAr": "اسم النشاط أو البطولة", "labelEn": "Activity Name", "placeholderAr": "مثال: بطولة كرة القدم", "placeholderEn": "e.g. Football Tournament"},
          {"name": "ACHIEVEMENT", "labelAr": "الإنجاز أو المركز", "labelEn": "Achievement Status", "placeholderAr": "مثال: المركز الأول", "placeholderEn": "e.g. 1st Place"},
          {"name": "SCHOOL_OR_CLUB_NAME", "labelAr": "اسم المدرسة أو النادي", "labelEn": "School or Club Name", "placeholderAr": "مثال: مدرسة النور الدولية", "placeholderEn": "e.g. Al Noor International School"},
          {"name": "DATE", "labelAr": "التاريخ", "labelEn": "Date", "placeholderAr": "مثال: 25 مايو 2026", "placeholderEn": "e.g. 25 May 2026"},
          {"name": "PRINCIPAL_OR_COACH_NAME", "labelAr": "اسم المدرب أو المدير الاعتمادي", "labelEn": "Authorized Person", "placeholderAr": "مثال: كابتن خالد حسن", "placeholderEn": "e.g. Mr. Khaled Hassan"}
        ]
      },
      {
        "id": 4,
        "titleAr": "شهادة تقدير وتدريب المعلم",
        "titleEn": "Teacher Appreciation & Training Certificate",
        "textAr": "الدور:\nمصمم شهادات أكاديمية وتطوير مهني محترف.\n\nاللوحة:\nقالب شهادة تقدير وتدريب احترافي، مقاس A4 أفقي (Landscape)، بدقة 300 نقطة لكل بوصة، مناسب للإطارات والتعليق.\n\nالتصميم والجمالية:\n- إطار أكاديمي كلاسيكي أو عصري فاخر ومذهب.\n- مساحة مخصصة لشعار المدرسة أو الأكاديمية.\n- ختم رسمي أو ملصق اعتماد في الأسفل.\n- خطوط توقيع مع المسميات الوظيفية.\n- عنصر اختياري: ميدالية أو شريط تقديري ذهبي/عنابي.\n\nتفاصيل النصوص:\n- العنوان الرئيسي في الأعلى بخط Serif أنيق: \"شهادة تقدير وتدريب\"\n- اسم المعلم بالكامل: {{TEACHER_FULL_NAME}} بخط عريض ومميز.\n- نوع الشهادة: {{TYPE}}\n- الإنجاز أو الدورة المكتملة: {{ACHIEVEMENT_OR_COURSE}}\n- الجهة المانحة (المدرسة/الوزارة): {{ORGANIZATION_NAME}}\n- التاريخ: {{DATE}}\n- المسؤول المعتمد الموقّع: {{SIGNATORY_NAME}}\n\nالأسلوب والنوع:\nمهني، رسمي، مهيب ومناسب للتعليق والإطارات المدرسية الرسمية.",
        "textEn": "SYSTEM ROLE: Professional academic certificate designer.\n\nCANVAS:\nA4 landscape, 300 DPI, suitable for framing.\n\nTOPIC:\nProfessional teacher appreciation or training certificate.\n\nDESIGN ELEMENTS:\n- Premium academic border (classic or modern).\n- Organization logo placeholder.\n- Certificate type heading in elegant serif.\n- Teacher name: {{TEACHER_FULL_NAME}} in large distinguished typography.\n- Achievement description paragraph detailing: {{ACHIEVEMENT_OR_COURSE}} for {{TYPE}}.\n- Official seal/stamp placeholder.\n- Signature lines with titles: {{SIGNATORY_NAME}}.\n- Organization: {{ORGANIZATION_NAME}}.\n- Date: {{DATE}}.\n- Optional: ribbon or medal element.\n\nSTYLE:\nProfessional, dignified, suitable for framing.",
        "image": "images/Certificate/2.png",
        "variables": [
          {"name": "TEACHER_FULL_NAME", "labelAr": "اسم المعلم بالكامل", "labelEn": "Teacher Full Name", "placeholderAr": "مثال: أمل أحمد الغامدي", "placeholderEn": "e.g. Amal Ahmad Al Ghamdi"},
          {"name": "TYPE", "labelAr": "نوع الشهادة", "labelEn": "Certificate Type", "placeholderAr": "مثال: معلم المادة المتميز / إتمام ورشة عمل", "placeholderEn": "e.g. Teacher of the Year / Workshop Completion"},
          {"name": "ACHIEVEMENT_OR_COURSE", "labelAr": "الإنجاز أو الدورة المكتملة", "labelEn": "Achievement or Course", "placeholderAr": "مثال: تصميم التعليم الرقمي التفاعلي", "placeholderEn": "e.g. Interactive Digital Learning Design"},
          {"name": "ORGANIZATION_NAME", "labelAr": "الجهة المانحة", "labelEn": "Organization Name", "placeholderAr": "مثال: وزارة التعليم / مدرسة النخبة", "placeholderEn": "e.g. Ministry of Education / Elite School"},
          {"name": "DATE", "labelAr": "التاريخ", "labelEn": "Date", "placeholderAr": "مثال: 12 يونيو 2026", "placeholderEn": "e.g. 12 June 2026"},
          {"name": "SIGNATORY_NAME", "labelAr": "المسؤول الموقّع ووظيفته", "labelEn": "Signatory Name & Title", "placeholderAr": "مثال: أ.د. خالد عبد الرحمن - مدير عام الأكاديمية", "placeholderEn": "e.g. Prof. Khaled - Dean of Academy"}
        ]
      }
    ]
  },
  {
    "id": "infographic",
    "category": "toolkit",
    "titleAr": "إنفوجرافيك تعليمي",
    "titleEn": "Educational Infographic",
    "descAr": "أدوات متميزة لتصميم ملصقات الإنفوجرافيك التعليمي والخرائط الذهنية المضيئة للدروس",
    "descEn": "Premium tools to design educational infographic posters and glowing mindmaps for lessons",
    "icon": "📊",
    "colorClass": "card-infographic",
    "prompts": [
      {
        "id": 1,
        "titleAr": "إنفوجرافيك دورة المياه المضيء",
        "titleEn": "Glowing Water Cycle Infographic",
        "textAr": "الدور:\nمصمم إنفوجرافيك تعليمي محترف وخبير في تبسيط العلوم البصرية.\n\nاللوحة:\nلوحة إنفوجرافيك عمودية (A4 Portrait)، بدقة 300 نقطة لكل بوصة، وتكون جاهزة للطباعة والعرض.\n\nالموضوع:\nتصميم إنفوجرافيك دراسي متكامل ومضيء يبسط \"دورة المياه في الطبيعة\" للأطفال بأسلوب النيون المشع.\n\nالأسلوب والمرئيات:\n- لوح زجاجي داكن ومضيء بتأثير النيون المشع (Neon light/glowing glass board).\n- رسم خطوط متوهجة وملونة توضح حركة المياه والتبخر والتكثف والهطول.\n- شخصية معلم كرتوني ذكي ثلاثي الأبعاد يرتدي نظارات ويشير بيده نحو اللوحة لتوضيح المفاهيم.\n\nخطوات ومراحل الإنفوجرافيك:\n1. التبخر (Evaporation): الشمس تسخن مياه المحيطات والبحار لتتحول إلى بخار يرتفع في الهواء.\n2. التكثف (Condensation): بخار الماء يبرد في الهواء ويتحول إلى قطرات صغيرة لتشكل السحب.\n3. الهطول (Precipitation): عندما تصبح القطرات ثقيلة، تسقط على الأرض كمطر أو ثلج أو برد.\n4. التجميع (Collection): تتجمع المياه في الأنهار والبحيرات والمحيطات لتتبخر من جديد.\n\nمربعات معلومات إضافية:\n- ملخص في الأسفل (In Short): رسم بياني متسلسل للمراحل.\n- الفكرة الرئيسية (Key Takeaway): دورة المياه تحافظ على كوكبنا وتوفر المياه العذبة.\n- ملاحظة تذكيرية (Remember note) على ورقة لاصقة وردية: المياه لا تفنى بل يُعاد تدويرها.\n\nالعناصر النصية والمتغيرات:\nالعنوان الرئيسي: {{INFOGRAPHIC_TITLE}}\nالنص الفرعي للعنوان: {{SUBTITLE}}",
        "textEn": "SYSTEM ROLE: Premium educational infographic and visual science designer.\n\nCANVAS:\nA4 portrait, 300 DPI, neon glowing glass board presentation.\n\nTOPIC:\nInteractive and glowing infographic simplifying 'The Water Cycle' for students.\n\nSTYLE & VISUALS:\n- Dark transparent neon glowing glass board style.\n- Glowing, colorful vector illustration of the water cycle.\n- A smart 3D animated teacher character pointing at the board with a pen.\n- Step-by-step cycle:\n  1. Evaporation\n  2. Condensation\n  3. Precipitation\n  4. Collection\n- Add 'In Short' summary sequence at the bottom.\n- Add a pink sticky note showing 'Remember' warning.\n- Title text: {{INFOGRAPHIC_TITLE}}\n- Subtitle text: {{SUBTITLE}}",
        "image": "images/infographic/1.png",
        "variables": [
          {"name": "INFOGRAPHIC_TITLE", "labelAr": "عنوان الإنفوجرافيك الرئيسي", "labelEn": "Main Infographic Title", "placeholderAr": "مثال: دورة الماء في الطبيعة", "placeholderEn": "e.g. The Water Cycle"},
          {"name": "SUBTITLE", "labelAr": "الترويسة الفرعية للملصق", "labelEn": "Infographic Subtitle", "placeholderAr": "مثال: كيف يعاد تدوير المياه طبيعياً", "placeholderEn": "e.g. Nature's way of recycling water!"}
        ]
      }
    ]
  },
  {
    "id": "french",
    "category": "languages",
    "titleAr": "اللغة الفرنسية",
    "titleEn": "French Language",
    "descAr": "أدوات متميزة لتصميم إنفوجرافيك قواعد الفرنسية، المحادثات، بطاقات المفردات، وتصريف الأفعال والثقافة",
    "descEn": "Premium tools to design French grammar infographics, dialogue builders, vocabulary cards, and verb conjugation tables",
    "icon": "🇨🇵",
    "colorClass": "card-french",
    "prompts": [
      {
        "id": 1,
        "titleAr": "إنفوجرافيك قواعد اللغة الفرنسية",
        "titleEn": "French Grammar Infographic",
        "textAr": "\nصمم إنفوجرافيك تعليمي لتبسيط قواعد اللغة الفرنسية:\n\nالموضوع: {{TOPIC}}\nمستوى اللغة (DELF/DALF): {{LEVEL}}\nالفئة العمرية/المرحلة: {{GRADE}}\nلغة الشرح: {{LANGUAGE}}\n\nالتصميم والأسلوب:\nجمالية فرنسية أنيقة بلمسات كلاسيكية (مقهى باريسي، خلفية بيضاء نظيفة مع لمسات ثلاثية الألوان: الأزرق والأبيض والأحمر الفرنسي، خطوط واضحة).\n\nأقسام ومحتويات الإنفوجرافيك:\n1. القاعدة الأساسية (LA RÈGLE): شرح نحوي مبسط بالفرنسية، مع توضيح بلغة الشرح المفضلة، وسياق الاستخدام.\n2. جدول تصريف الأفعال (TABLEAU DE CONJUGAISON): تصريف كامل للضمائر (je / tu / il-elle / nous / vous / ils-elles) مع إبراز النهايات الشاذة باللون الأحمر وتوضيح الفعل المساعد (être / avoir) واسم المفعول (participe passé) بشكل منفصل.\n3. صيغة القاعدة البصرية (FORMULE STRUCTURELLE): معادلة بصرية ملونة (مثال: Sujet + Auxiliaire + Participe passé).\n4. بنك الأمثلة (BANQUE D'EXEMPLES): 12 مثالاً متدرج الصعوبة بالفرنسية مع النطق والترجمة، وإيضاح صيغ النفي (بالرمادي) والاستفهام (بالأزرق).\n5. تعبيرات أصيلة (EXPRESSIONS AUTHENTIQUES): 8 تعبيرات فرنسية شائعة تستخدم هذه القاعدة مع توضيح الفروق بين اللغات الرسمية والدارجة.\n6. الأخطاء الشائعة (ERREURS FRÉQUENTES): 5 أخطاء شائعة للمتعلمين والتصحيح مع التفسير.\n7. أداة التذكر (ASTUCE DE MÉMOIRE): وسيلة حفظ بصرية أو رابط ذهني لمعلم فرنسي شهير.\n8. كلمات ذات صلة (VOCABULAIRE LIÉ): 15 مفردة متعلقة بالموضوع تشمل الكلمة، الجنس (مذكر/مؤنث)، النطق الصوتي، والترجمة.\n\nالمقاس: A4 عمودي بدقة 300 نقطة لكل بوصة.",
        "textEn": "Use imgGenTool to create a premium French language educational infographic.\n\nTOPIC: {{TOPIC}}\nLEVEL: {{LEVEL}}\nGRADE: {{GRADE}}\nLANGUAGE: {{LANGUAGE}}\n\nDESIGN: Elegant French aesthetic — Parisian café, clean white with tricolor accents (blue, white, red)\n\nCONTENT BLOCKS:\n1. LA RÈGLE (The Rule): Clear grammatical rule in simple French with explanations, DELF level badge.\n2. TABLEAU DE CONJUGAISON (Conjugation Table): Full conjugation for all persons (je/tu/il-elle/nous/vous/ils-elles), irregular forms in red, auxiliary verbs (être/avoir) and past participles.\n3. FORMULE STRUCTURELLE (Formula): Sujet + Auxiliaire + Participe passé color-coded.\n4. BANQUE D'EXEMPLES: 12 examples graded simple to complex with translation and pronunciation guide.\n5. EXPRESSIONS AUTHENTIQUES: 8 native French expressions with 'On dit / On ne dit pas' corrections.\n6. ERREURS FRÉQUENTES: 5 common learner errors with Wrong vs Correct and explanation.\n7. ASTUCE DE MÉMOIRE: Memory trick or mnemonic.\n8. VOCABULAIRE LIÉ: 15 related vocabulary items (gender m/f, IPA, translation, example).\n\nA4 portrait 300 DPI. --ar 2:3",
        "image": "images/French/1.png",
        "variables": [
          {"name": "TOPIC", "labelAr": "الموضوع النحوي", "labelEn": "Grammar Topic", "placeholderAr": "مثال: Le Passé Composé / Les verbes ER", "placeholderEn": "e.g. Le Passé Composé / ER Verbs"},
          {"name": "LEVEL", "labelAr": "مستوى اللغة (DELF)", "labelEn": "French Level (DELF)", "placeholderAr": "مثال: A1 / A2 / B1 / B2", "placeholderEn": "e.g. A1 / A2 / B1 / B2"},
          {"name": "GRADE", "labelAr": "المستوى الدراسي", "labelEn": "Grade Level", "placeholderAr": "مثال: ابتدائي / متوسط / ثانوي", "placeholderEn": "e.g. Primary / Middle / High school"},
          {"name": "LANGUAGE", "labelAr": "لغة الشرح والترجمة", "labelEn": "Explanation Language", "placeholderAr": "مثال: الفرنسية والعربية / الفرنسية والإنجليزية", "placeholderEn": "e.g. French + Arabic / French + English"}
        ]
      },
      {
        "id": 2,
        "titleAr": "إنفوجرافيك المحادثة اليومية والثقافة الفرنسية",
        "titleEn": "French Conversation & Culture Infographic",
        "textAr": "\nصمم إنفوجرافيك تفاعلي للمحادثة والتواصل بالفرنسية:\n\nالموضوع والموقف: {{TOPIC}}\nتصنيف الموقف: {{THEME}}\nالمستوى اللغوي: {{LEVEL}}\nلغة الشرح: {{LANGUAGE}}\n\nالتصميم والأسلوب:\nطابع مقهى فرنسي مميز، يدمج صور ظلية لبرج إيفل، ألوان دافئة وراقية (كريمي وأزرق وذهبي).\n\nأقسام ومحتويات البوستر:\n1. محادثة نموذجية (DIALOGUE MODÈLE): سيناريو محادثة واقعية كاملة (8-12 تبادل حواري) بالفرنسية مع النطق والترجمة وتعديلات اختيارية.\n2. عبارات أساسية (PHRASES ESSENTIELLES): 20 عبارة مهمة للموقف مقسمة حسب مستوى الرسمية (رسمي 👔 / ودي 👕 / عبر الهاتف 📞).\n3. مفردات تفاعلية (VOCABULAIRE THÉMATIQUE): 25 مفردة متعلقة بالموقف مصنفة ومصحوبة بأيقونات توضيحية وإبراز الكلمات المتشابهة الخادعة.\n4. لمحة ثقافية (CULTURE NOTE): عادات الفرنسيين وسلوكياتهم الفعلية في هذا الموقف، الفروق الثقافية، والاختلافات الإقليمية (فرنسا vs كندا/كيبيك vs المغرب العربي).\n5. هيكل الكتابة (WRITING FRAME): نموذج كتابة خطاب أو بريد إلكتروني تفاعلي للموقف مع كلمات الربط المناسبة.\n6. أسئلة محادثة (SPEAKING PROMPTS): 5 أسئلة نقاشية للتدريب الشفهي.\n\nالمقاس: A4 أفقي بدقة 300 نقطة لكل بوصة.",
        "textEn": "Use imgGenTool to create a premium French communication and culture educational infographic.\n\nTOPIC: {{TOPIC}}\nTHEME: {{THEME}}\nLEVEL: {{LEVEL}}\nLANGUAGE: {{LANGUAGE}}\n\nCONTENT BLOCKS:\n- DIALOGUE MODÈLE: Complete realistic dialogue (8-12 exchanges) with translation.\n- PHRASES ESSENTIELLES: 20 essential phrases labeled formal/informal.\n- VOCABULAIRE THÉMATIQUE: 25 words with gender, pronunciation, and icons.\n- CULTURE NOTE: Key cultural knowledge, France vs Quebec customs.\n- WRITING FRAME: Letter/email writing template.\n- SPEAKING PROMPTS: 5 conversation questions.\n\nSTYLE:\nFrench café culture meets language school design, warm cream and blue. A4 landscape 300 DPI. --ar 16:9",
        "image": "images/French/2.png",
        "variables": [
          {"name": "TOPIC", "labelAr": "موضوع المحادثة/الموقف", "labelEn": "Conversation Situation", "placeholderAr": "مثال: تقديم النفس / في المطعم / حجز فندق", "placeholderEn": "e.g. Introducing oneself / At the restaurant"},
          {"name": "THEME", "labelAr": "مجال الموقف", "labelEn": "Situation Theme", "placeholderAr": "مثال: الحياة اليومية / السفر / العمل", "placeholderEn": "e.g. Daily Life / Travel / Work"},
          {"name": "LEVEL", "labelAr": "المستوى اللغوي", "labelEn": "French Level", "placeholderAr": "مثال: A1 / A2 / B1 / B2", "placeholderEn": "e.g. A1 / A2 / B1 / B2"},
          {"name": "LANGUAGE", "labelAr": "لغة الشرح والترجمة", "labelEn": "Translation Language", "placeholderAr": "مثال: الفرنسية والعربية / الفرنسية والإنجليزية", "placeholderEn": "e.g. French + Arabic / French + English"}
        ]
      },
      {
        "id": 3,
        "titleAr": "بطاقات مفردات اللغة الفرنسية المصورة",
        "titleEn": "French Visual Vocabulary Cards",
        "textAr": "\nصمم إنفوجرافيك بطاقات مفردات اللغة الفرنسية المصورة:\n\nمجال الكلمات والقاموس: {{THEME}}\nالمستوى اللغوي: {{LEVEL}}\nلغة الترجمة والشرح: {{LANGUAGE}}\n\nالتصميم والأسلوب:\nشبكة تفاعلية (Grid) تحتوي على 20 بطاقة مفردات مصورة بأسلوب باريسي جذاب. ألوان زاهية وخطوط واضحة.\n\nلكل بطاقة مفردة:\nالكلمة الفرنسية بخط عريض + وسم الجنس (مذكر m / مؤنث f) + النطق الصوتي IPA + أيقونة مرسومة للمفردة + الترجمة باللغة المطلوبة + جملة مثال قصيرة بالفرنسية لتوضيح استخدام الكلمة.\n\nالمقاس: A4 عمودي بدقة 300 نقطة لكل بوصة.",
        "textEn": "Use imgGenTool to create a premium French vocabulary visual cards infographic.\n\nTHEME: {{THEME}}\nLEVEL: {{LEVEL}}\nLANGUAGE: {{LANGUAGE}}\n\nDESIGN:\nA4 grid of 20 vocabulary cards. Each card contains: French word, gender (m/f), IPA pronunciation, illustration icon, translation, and example mini-sentence.\n\nSTYLE:\nBright Parisian design, clean grid. A4 portrait 300 DPI. --ar 2:3",
        "image": "images/French/3.png",
        "variables": [
          {"name": "THEME", "labelAr": "موضوع الكلمات / التصنيف", "labelEn": "Vocabulary Theme", "placeholderAr": "مثال: الطعام / الملابس / جسم الإنسان / الحيوانات", "placeholderEn": "e.g. Food / Clothing / Human body / Animals"},
          {"name": "LEVEL", "labelAr": "المستوى اللغوي", "labelEn": "French Level", "placeholderAr": "مثال: A1 / A2 / B1", "placeholderEn": "e.g. A1 / A2 / B1"},
          {"name": "LANGUAGE", "labelAr": "لغة الترجمة", "labelEn": "Translation Language", "placeholderAr": "مثال: الفرنسية والعربية / الفرنسية والإنجليزية", "placeholderEn": "e.g. French + Arabic / French + English"}
        ]
      },
      {
        "id": 4,
        "titleAr": "لوحة تصريف أفعال اللغة الفرنسية الشاملة",
        "titleEn": "French Verb Conjugation Masterclass",
        "textAr": "\nصمم بوستر تفاعلي لتصريف الأفعال الفرنسية:\n\nزمن الفعل / المجموعة الفعلية: {{TENSE}}\nالمستوى اللغوي: {{LEVEL}}\nلغة الشرح: {{LANGUAGE}}\n\nالتصميم والأسلوب:\nتصميم مستوحى من الكتب المدرسية الفرنسية الفاخرة، مع لمسات ثلاثية الألوان (الأزرق والأبيض والأحمر) لإبراز الهوية الفرنسية.\n\nالمحتويات والكتل:\nجداول تصريف الأفعال الكاملة لجميع الضمائر الستة، مع تلوين وتظليل الأجزاء غير القياسية والنهايات الشاذة باللون الأحمر المتباين، دليل نطق صوتي مبسط لكل تصريف، 8 جمل أمثلة حقيقية لتوضيح الاستخدام، جدول لملاحظات إملائية وتنبيهات الأخطاء الشائعة، ووسائل تذكر سريعة.\n\nالمقاس: A4 عمودي بدقة 300 نقطة لكل بوصة.",
        "textEn": "Use imgGenTool to create a premium French verb conjugation masterclass infographic.\n\nTENSE: {{TENSE}}\nLEVEL: {{LEVEL}}\nLANGUAGE: {{LANGUAGE}}\n\nCONTENT:\nFull conjugation tables for all 6 persons, irregular forms highlighted in red, pronunciation guide, 8 authentic example sentences, common spelling mistakes, and memory tricks.\n\nSTYLE:\nElegant French textbook, tricolor accents. A4 portrait 300 DPI. --ar 2:3",
        "image": "images/French/4.png",
        "variables": [
          {"name": "TENSE", "labelAr": "زمن الفعل / المجموعة", "labelEn": "Verb Tense / Group", "placeholderAr": "مثال: Présent indicatif - ER Verbs / Verbes du 3ème groupe", "placeholderEn": "e.g. Present Tense - ER Verbs / 3rd group verbs"},
          {"name": "LEVEL", "labelAr": "المستوى اللغوي", "labelEn": "French Level", "placeholderAr": "مثال: A1 / A2 / B1 / B2", "placeholderEn": "e.g. A1 / A2 / B1 / B2"},
          {"name": "LANGUAGE", "labelAr": "لغة الشرح والترجمة", "labelEn": "Explanation Language", "placeholderAr": "مثال: الفرنسية والعربية / الفرنسية والإنجليزية", "placeholderEn": "e.g. French + Arabic / French + English"}
        ]
      },
      {
        "id": 5,
        "titleAr": "إنفوجرافيك الثقافة والحضارة الفرنسية والفرنكوفونية",
        "titleEn": "French Culture & Francophonie Infographic",
        "textAr": "\nصمم إنفوجرافيك تعليمي عن الثقافة الفرنسية والفرنكوفونية:\n\nالموضوع الثقافي: {{TOPIC}}\nالمستوى الدراسي/اللغوي: {{LEVEL}}\nلغة العرض: {{LANGUAGE}}\n\nالتصميم والأسلوب:\nجمالية مجلة ثقافية فرنسية فاخرة ودافئة (French Cultural Magazine aesthetic)، وتنسيق رائع يجمع الصور والمعلومات بوضوح.\n\nالمحتويات المطلوبة:\n- خريطة أو تمثيل بصري للموضوع (مثل خريطة انتشار الفرنكوفونية حول العالم أو معالم باريس التاريخية).\n- حقائق وإحصاءات تاريخية رئيسية كبرى.\n- ملاحظات ثقافية فريدة ونصوص مبسطة.\n- بنك مفردات مصغر يحتوي على 15 كلمة فرنسية متعلقة بالثقافة.\n- أسئلة تفاعلية ومحاور نقاش للطلاب لتشجيع المحادثة.\n- سؤال كويز (Quiz) سريع للتقييم في أسفل البوستر.\n\nالمقاس: A4 عمودي بدقة 300 نقطة لكل بوصة.",
        "textEn": "Use imgGenTool to create a premium French culture and Francophonie educational infographic.\n\nTOPIC: {{TOPIC}}\nLEVEL: {{LEVEL}}\nLANGUAGE: {{LANGUAGE}}\n\nCONTENT:\nMap/visual of the cultural topic, key facts, unique cultural notes, 15-word vocabulary bank, conversation starters, and a quick quiz question at the bottom.\n\nSTYLE:\nWarm French cultural magazine aesthetic, elegant typography. A4 portrait 300 DPI. --ar 2:3",
        "image": "images/French/4.png",
        "variables": [
          {"name": "TOPIC", "labelAr": "الموضوع الثقافي", "labelEn": "Cultural Topic", "placeholderAr": "مثال: معالم باريس التاريخية / المطبخ الفرنسي / انتشار الفرنكوفونية عالمياً", "placeholderEn": "e.g. Paris monuments / French gastronomy / La Francophonie"},
          {"name": "LEVEL", "labelAr": "المستوى الدراسي", "labelEn": "Grade Level", "placeholderAr": "مثال: A2 / B1 / B2", "placeholderEn": "e.g. A2 / B1 / B2"},
          {"name": "LANGUAGE", "labelAr": "لغة العرض والشرح", "labelEn": "Presentation Language", "placeholderAr": "مثال: الفرنسية والعربية / الفرنسية والإنجليزية", "placeholderEn": "e.g. French + Arabic / French + English"}
        ]
      }
    ]
  },
  {
    "id": "history",
    "category": "humanities",
    "comingSoon": true,
    "titleAr": "التاريخ",
    "titleEn": "History",
    "descAr": "أفكار وقصص تاريخية تفاعلية (قريباً ⏳)",
    "descEn": "Interactive historical stories and ideas (Coming Soon ⏳)",
    "icon": "📜",
    "colorClass": "card-history",
    "prompts": []
  },
  {
      "id": "geography",
      "category": "humanities",
      "titleAr": "الجغرافيا",
      "titleEn": "Geography",
      "descAr": "أدوات متميزة لتصميم خرائط الجغرافيا التفاعلية، ملصقات النظم البيئية والمناخ وتقارير الدول والكوارث الطبيعية",
      "descEn": "Premium tools to design interactive maps, biomes, climate change posters, country profiles, and natural hazards",
      "icon": "🗺️",
      "colorClass": "card-geography",
      "prompts": [
          {
              "id": 1,
              "titleAr": "إنفوجرافيك الجغرافيا الشامل والخرائط التفاعلية (A3)",
              "titleEn": "Master Geography Infographic & Maps (A3)",
              "textAr": "Use imgGenTool to create a premium geography educational infographic.\r\r━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\rFILL IN THESE FIELDS — CHANGE NOTHING ELSE\r━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\rTOPIC:       {{YOUR GEOGRAPHY TOPIC — e.g. Egypt / The Amazon Rainforest / Plate Tectonics / The Nile River / Saudi Arabia / Climate Zones / Urbanization / The Mediterranean Sea / Volcanoes / Migration Patterns}}\rSCALE:       {{Global / Continental / Country / Regional / Local}}\rLEVEL:       {{Primary / Middle school / High school / University}}\rLANGUAGE:    {{Arabic / English}}\rTYPE:        {{COUNTRY PROFILE / PHYSICAL GEOGRAPHY / HUMAN GEOGRAPHY / CLIMATE & WEATHER / NATURAL PHENOMENON / ENVIRONMENTAL ISSUE / COMPARATIVE (two places)}}\r━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\r\rAUTO-ADAPTIVE MAP STYLE ENGINE:\rBased on TOPIC and TYPE, the AI auto-selects the correct map style:\r• Country Profile → Political + physical hybrid map, capital star, major cities, borders\r• Physical Geography → Relief/topographic map, elevation color gradient, mountain peaks labeled\r• Climate → Köppen climate classification map, color-coded zones, isotherms\r• Ocean/River → Bathymetric blue-gradient map, depth contours, current arrows\r• Population → Choropleth density map, gradient from sparse to dense\r• Natural Disaster → Hazard zone map, risk gradients, historic event markers\r• Environment → Satellite-style land cover map, deforestation/change indicators\r\rCONTENT BLOCKS (AI auto-selects based on TYPE):\r\r🗺️ MASTER MAP BLOCK (always present — 40% of poster):\r• Large, beautifully rendered map appropriate to TOPIC\r• All relevant features labeled (toponym accuracy required)\r• North arrow + scale bar + coordinate grid\r• Legend/key with clear symbols\r• Inset map showing location in broader context\r• Surrounding region visible for spatial context\r\r📍 LOCATION & SPATIAL CONTEXT:\r• Where it is + neighboring regions/countries\r• Distance from key reference points\r• Longitude/latitude range\r• Time zones affected\r\r🏔️ PHYSICAL GEOGRAPHY BLOCK:\r• Landforms: mountains, plains, rivers, coastlines, deserts\r• Highest and lowest points (named, with elevation)\r• Major water bodies + river systems\r• Tectonic setting (plate boundaries if relevant)\r• Soil types and agricultural zones\r\r🌡️ CLIMATE BLOCK:\r• Köppen classification for the region\r• Temperature range (hottest + coldest month, with location)\r• Precipitation pattern + seasonal variation\r• Prevailing winds and ocean currents influence\r• Climate graph (temp + rainfall dual-axis)\r• Extreme weather events typical to the region\r\r👥 HUMAN GEOGRAPHY BLOCK (for country/region topics):\r• Population: total + density + urban/rural split\r• Population pyramid (age-sex structure, simplified)\r• Major cities ranked by population\r• Ethnic/linguistic groups (proportional, from official census)\r• Religion distribution (from official sources)\r• GDP, HDI, major economic sectors\r• Land use breakdown (agriculture / industry / forest / urban)\r\r🔄 PROCESSES & DYNAMICS BLOCK (for phenomena topics):\r• How the phenomenon forms/works (step-by-step diagram)\r• What drives it (natural forces, human factors)\r• Spatial distribution (where it occurs and why)\r• Intensity scale if applicable (Richter, Saffir-Simpson, etc.)\r• Temporal pattern (seasonal, cyclical, one-time)\r\r🌱 ENVIRONMENT & SUSTAINABILITY:\r• Key ecosystems present\r• Biodiversity highlights (endemic species)\r• Environmental pressures and threats\r• Protected areas and conservation status\r• Human impact on landscape\r\r🔗 CONNECTIONS & INTERDEPENDENCE:\r• Trade links and economic connections\r• Migration flows (immigration and emigration)\r• Environmental connections to other regions\r• Historical geographic significance\r\r📊 DATA DASHBOARD (bottom strip):\r• 6–8 key statistics presented as visual metrics\r• Sources: World Bank / UN / NASA / USGS / National Geographic\r\r━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\rVISUAL STANDARDS (NON-NEGOTIABLE):\r━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\r✅ Maps: geographically accurate — not decorative\r✅ All place names: correct official spelling in chosen language\r✅ No political bias — disputed territories shown with standard UN notation\r✅ Statistics: World Bank / UN / CIA World Factbook / NASA only\r✅ Color: follows international cartographic conventions (blue=water, green=lowland, brown=highland)\r✅ Arabic maps: all labels in Arabic, RTL layout, Hijri date option\r✅ Scale: always proportionally accurate — no distorted landmasses\r\rVISUAL INSPIRATION:\r• National Geographic Atlas quality for maps\r• BBC / Al Jazeera infographic quality for data panels\r• Esri / Mapbox clean aesthetic for digital layers\r• Royal Geographical Society poster quality for print\r\rOUTPUT SPECS:\rA3 landscape for maps/comparisons (--ar 16:9)\rA3 portrait for country profiles/phenomena (--ar 2:3)\r300 DPI, print-ready, suitable for classroom display and academic publication",
              "textEn": "Use imgGenTool to create a premium geography educational infographic.\r\r━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\rFILL IN THESE FIELDS — CHANGE NOTHING ELSE\r━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\rTOPIC:       {{YOUR GEOGRAPHY TOPIC — e.g. Egypt / The Amazon Rainforest / Plate Tectonics / The Nile River / Saudi Arabia / Climate Zones / Urbanization / The Mediterranean Sea / Volcanoes / Migration Patterns}}\rSCALE:       {{Global / Continental / Country / Regional / Local}}\rLEVEL:       {{Primary / Middle school / High school / University}}\rLANGUAGE:    {{Arabic / English}}\rTYPE:        {{COUNTRY PROFILE / PHYSICAL GEOGRAPHY / HUMAN GEOGRAPHY / CLIMATE & WEATHER / NATURAL PHENOMENON / ENVIRONMENTAL ISSUE / COMPARATIVE (two places)}}\r━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\r\rAUTO-ADAPTIVE MAP STYLE ENGINE:\rBased on TOPIC and TYPE, the AI auto-selects the correct map style:\r• Country Profile → Political + physical hybrid map, capital star, major cities, borders\r• Physical Geography → Relief/topographic map, elevation color gradient, mountain peaks labeled\r• Climate → Köppen climate classification map, color-coded zones, isotherms\r• Ocean/River → Bathymetric blue-gradient map, depth contours, current arrows\r• Population → Choropleth density map, gradient from sparse to dense\r• Natural Disaster → Hazard zone map, risk gradients, historic event markers\r• Environment → Satellite-style land cover map, deforestation/change indicators\r\rCONTENT BLOCKS (AI auto-selects based on TYPE):\r\r🗺️ MASTER MAP BLOCK (always present — 40% of poster):\r• Large, beautifully rendered map appropriate to TOPIC\r• All relevant features labeled (toponym accuracy required)\r• North arrow + scale bar + coordinate grid\r• Legend/key with clear symbols\r• Inset map showing location in broader context\r• Surrounding region visible for spatial context\r\r📍 LOCATION & SPATIAL CONTEXT:\r• Where it is + neighboring regions/countries\r• Distance from key reference points\r• Longitude/latitude range\r• Time zones affected\r\r🏔️ PHYSICAL GEOGRAPHY BLOCK:\r• Landforms: mountains, plains, rivers, coastlines, deserts\r• Highest and lowest points (named, with elevation)\r• Major water bodies + river systems\r• Tectonic setting (plate boundaries if relevant)\r• Soil types and agricultural zones\r\r🌡️ CLIMATE BLOCK:\r• Köppen classification for the region\r• Temperature range (hottest + coldest month, with location)\r• Precipitation pattern + seasonal variation\r• Prevailing winds and ocean currents influence\r• Climate graph (temp + rainfall dual-axis)\r• Extreme weather events typical to the region\r\r👥 HUMAN GEOGRAPHY BLOCK (for country/region topics):\r• Population: total + density + urban/rural split\r• Population pyramid (age-sex structure, simplified)\r• Major cities ranked by population\r• Ethnic/linguistic groups (proportional, from official census)\r• Religion distribution (from official sources)\r• GDP, HDI, major economic sectors\r• Land use breakdown (agriculture / industry / forest / urban)\r\r🔄 PROCESSES & DYNAMICS BLOCK (for phenomena topics):\r• How the phenomenon forms/works (step-by-step diagram)\r• What drives it (natural forces, human factors)\r• Spatial distribution (where it occurs and why)\r• Intensity scale if applicable (Richter, Saffir-Simpson, etc.)\r• Temporal pattern (seasonal, cyclical, one-time)\r\r🌱 ENVIRONMENT & SUSTAINABILITY:\r• Key ecosystems present\r• Biodiversity highlights (endemic species)\r• Environmental pressures and threats\r• Protected areas and conservation status\r• Human impact on landscape\r\r🔗 CONNECTIONS & INTERDEPENDENCE:\r• Trade links and economic connections\r• Migration flows (immigration and emigration)\r• Environmental connections to other regions\r• Historical geographic significance\r\r📊 DATA DASHBOARD (bottom strip):\r• 6–8 key statistics presented as visual metrics\r• Sources: World Bank / UN / NASA / USGS / National Geographic\r\r━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\rVISUAL STANDARDS (NON-NEGOTIABLE):\r━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\r✅ Maps: geographically accurate — not decorative\r✅ All place names: correct official spelling in chosen language\r✅ No political bias — disputed territories shown with standard UN notation\r✅ Statistics: World Bank / UN / CIA World Factbook / NASA only\r✅ Color: follows international cartographic conventions (blue=water, green=lowland, brown=highland)\r✅ Arabic maps: all labels in Arabic, RTL layout, Hijri date option\r✅ Scale: always proportionally accurate — no distorted landmasses\r\rVISUAL INSPIRATION:\r• National Geographic Atlas quality for maps\r• BBC / Al Jazeera infographic quality for data panels\r• Esri / Mapbox clean aesthetic for digital layers\r• Royal Geographical Society poster quality for print\r\rOUTPUT SPECS:\rA3 landscape for maps/comparisons (--ar 16:9)\rA3 portrait for country profiles/phenomena (--ar 2:3)\r300 DPI, print-ready, suitable for classroom display and academic publication",
              "image": "images/GEOGRAPHY/1.png",
              "variables": [
                  {
                      "name": "YOUR GEOGRAPHY TOPIC",
                      "labelAr": "الموضوع الجغرافي",
                      "labelEn": "Geography Topic",
                      "placeholderAr": "مثال: نهر النيل / البراكين / المملكة العربية السعودية",
                      "placeholderEn": "e.g. Nile River / Volcanoes / Saudi Arabia"
                  },
                  {
                      "name": "SCALE",
                      "labelAr": "نطاق الدراسة (المقياس)",
                      "labelEn": "Geographical Scale",
                      "placeholderAr": "مثال: Regional / Continental / Local",
                      "placeholderEn": "e.g. Regional / Continental / Local"
                  },
                  {
                      "name": "LEVEL",
                      "labelAr": "المستوى الدراسي للطلاب",
                      "labelEn": "Grade/Education Level",
                      "placeholderAr": "مثال: High school / Primary",
                      "placeholderEn": "e.g. High school / Primary"
                  },
                  {
                      "name": "LANGUAGE",
                      "labelAr": "لغة الخرائط والشرح",
                      "labelEn": "Map & Text Language",
                      "placeholderAr": "مثال: Arabic / English",
                      "placeholderEn": "e.g. Arabic / English"
                  },
                  {
                      "name": "TYPE",
                      "labelAr": "نوع الجغرافيا/الدراسة",
                      "labelEn": "Geography Study Type",
                      "placeholderAr": "مثال: PHYSICAL GEOGRAPHY / COUNTRY PROFILE",
                      "placeholderEn": "e.g. PHYSICAL GEOGRAPHY / COUNTRY PROFILE"
                  }
              ]
          },
          {
              "id": 2,
              "titleAr": "ملصق المناطق الحيوية والنظم البيئية في العالم (A3)",
              "titleEn": "World Biomes Educational Poster (A3)",
              "textAr": "Use imgGenTool to create a premium world biomes educational poster.\r\rFocus: {{BIOME — e.g. Tropical Rainforest / Desert / Tundra / Ocean / Grassland / Coral Reef / ALL 8 biomes}}\rLanguage: {{Arabic / English}}\rLevel: {{Middle school / High school}}\r\rIf ALL biomes: design as a world map with biome zones highlighted, each with:\r• Climate conditions (temp range + rainfall)\r• 3 iconic plant species (illustrated)\r• 3 iconic animal species (illustrated)\r• Soil type\r• Geographic examples (where on Earth)\r• Conservation status\r\rIf single biome spotlight:\r• Full immersive illustration of the biome landscape\r• Detailed species showcase (5 plants + 5 animals)\r• Food web diagram\r• Climate data graphs\r• Human impact and threats\r• Conservation efforts\r\rVisual: Full-bleed photorealistic landscape painting for background.\rEach species: small inset illustration with Latin name.\rStyle: BBC Planet Earth / National Geographic aesthetic. A3 landscape 300 DPI. --ar 16:9",
              "textEn": "Use imgGenTool to create a premium world biomes educational poster.\r\rFocus: {{BIOME — e.g. Tropical Rainforest / Desert / Tundra / Ocean / Grassland / Coral Reef / ALL 8 biomes}}\rLanguage: {{Arabic / English}}\rLevel: {{Middle school / High school}}\r\rIf ALL biomes: design as a world map with biome zones highlighted, each with:\r• Climate conditions (temp range + rainfall)\r• 3 iconic plant species (illustrated)\r• 3 iconic animal species (illustrated)\r• Soil type\r• Geographic examples (where on Earth)\r• Conservation status\r\rIf single biome spotlight:\r• Full immersive illustration of the biome landscape\r• Detailed species showcase (5 plants + 5 animals)\r• Food web diagram\r• Climate data graphs\r• Human impact and threats\r• Conservation efforts\r\rVisual: Full-bleed photorealistic landscape painting for background.\rEach species: small inset illustration with Latin name.\rStyle: BBC Planet Earth / National Geographic aesthetic. A3 landscape 300 DPI. --ar 16:9",
              "image": "images/GEOGRAPHY/2.png",
              "variables": [
                  {
                      "name": "BIOME",
                      "labelAr": "المنطقة الحيوية المستهدفة",
                      "labelEn": "Target Biome",
                      "placeholderAr": "مثال: Desert / Coral Reef / ALL 8 biomes",
                      "placeholderEn": "e.g. Desert / Coral Reef / ALL 8 biomes"
                  },
                  {
                      "name": "LANGUAGE",
                      "labelAr": "لغة الملصق",
                      "labelEn": "Poster Language",
                      "placeholderAr": "مثال: Arabic / English",
                      "placeholderEn": "e.g. Arabic / English"
                  },
                  {
                      "name": "LEVEL",
                      "labelAr": "المستوى الدراسي للطلاب",
                      "labelEn": "Grade Level",
                      "placeholderAr": "مثال: Middle school / High school",
                      "placeholderEn": "e.g. Middle school / High school"
                  }
              ]
          },
          {
              "id": 3,
              "titleAr": "ملصق التغير المناخي والظواهر البيئية (A3)",
              "titleEn": "Climate Change Educational Poster (A3)",
              "textAr": "Use imgGenTool to create a premium climate change educational poster.\r\rFocus: {{FOCUS — Full overview / Causes only / Effects only / Solutions only / Carbon cycle}}\rLevel: {{Middle school / High school / University / General public}}\rLanguage: {{Arabic / English}}\r\rDesign — earth photography aesthetic, NASA-sourced data visualization style:\r\rSECTION 1 — THE GREENHOUSE EFFECT:\r• Illustrated cross-section of Earth's atmosphere\r• Sun rays entering, heat trapped, labeled process\r• Each greenhouse gas: CO₂, CH₄, N₂O, H₂O — sources and %\r\rSECTION 2 — DATA DASHBOARD:\r• Global temperature rise since 1850 (line graph)\r• CO₂ concentration (Keeling Curve)\r• Sea level rise data\r• Arctic ice extent changes\r• All with IPCC/NASA sources\r\rSECTION 3 — GLOBAL IMPACTS MAP:\r• World map showing regional effects\r• Flooding zones, drought zones, wildfire risk, coral bleaching\r• Extreme weather frequency increase\r\rSECTION 4 — SOLUTIONS SPECTRUM:\r• Individual actions (icons + impact rating)\r• National policies (examples)\r• International agreements (Paris Agreement etc.)\r• Emerging technologies (solar, wind, carbon capture)\r\rSources: IPCC Sixth Assessment Report, NASA, NOAA.\rStyle: National Geographic / NASA data visualization quality. A3 landscape 300 DPI. --ar 16:9",
              "textEn": "Use imgGenTool to create a premium climate change educational poster.\r\rFocus: {{FOCUS — Full overview / Causes only / Effects only / Solutions only / Carbon cycle}}\rLevel: {{Middle school / High school / University / General public}}\rLanguage: {{Arabic / English}}\r\rDesign — earth photography aesthetic, NASA-sourced data visualization style:\r\rSECTION 1 — THE GREENHOUSE EFFECT:\r• Illustrated cross-section of Earth's atmosphere\r• Sun rays entering, heat trapped, labeled process\r• Each greenhouse gas: CO₂, CH₄, N₂O, H₂O — sources and %\r\rSECTION 2 — DATA DASHBOARD:\r• Global temperature rise since 1850 (line graph)\r• CO₂ concentration (Keeling Curve)\r• Sea level rise data\r• Arctic ice extent changes\r• All with IPCC/NASA sources\r\rSECTION 3 — GLOBAL IMPACTS MAP:\r• World map showing regional effects\r• Flooding zones, drought zones, wildfire risk, coral bleaching\r• Extreme weather frequency increase\r\rSECTION 4 — SOLUTIONS SPECTRUM:\r• Individual actions (icons + impact rating)\r• National policies (examples)\r• International agreements (Paris Agreement etc.)\r• Emerging technologies (solar, wind, carbon capture)\r\rSources: IPCC Sixth Assessment Report, NASA, NOAA.\rStyle: National Geographic / NASA data visualization quality. A3 landscape 300 DPI. --ar 16:9",
              "image": "images/GEOGRAPHY/3.png",
              "variables": [
                  {
                      "name": "FOCUS",
                      "labelAr": "محور التركيز (الكامل/الأسباب/الحلول)",
                      "labelEn": "Climate Change Focus",
                      "placeholderAr": "مثال: Full overview / Causes only / Solutions only",
                      "placeholderEn": "e.g. Full overview / Causes only / Solutions only"
                  },
                  {
                      "name": "LEVEL",
                      "labelAr": "المستوى الدراسي المستهدف",
                      "labelEn": "Target Audience Level",
                      "placeholderAr": "مثال: High school / General public",
                      "placeholderEn": "e.g. High school / General public"
                  },
                  {
                      "name": "LANGUAGE",
                      "labelAr": "لغة الشرح والبيانات",
                      "labelEn": "Poster Language",
                      "placeholderAr": "مثال: Arabic / English",
                      "placeholderEn": "e.g. Arabic / English"
                  }
              ]
          },
          {
              "id": 4,
              "titleAr": "إنفوجرافيك تقارير وتعريف الدول الشامل (A4)",
              "titleEn": "Premium Country Profile Infographic (A4)",
              "textAr": "Use imgGenTool to create a premium country profile infographic.\r\rCountry: {{COUNTRY NAME — e.g. Egypt / Japan / Brazil / France / Saudi Arabia / Nigeria}}\rLanguage: {{Arabic / English}}\rLevel: {{Middle school / High school}}\r\rSections: Flag + location map + capital + population data + physical geography highlights + climate + economy (GDP, main sectors) + culture + famous landmarks (illustrated) + key facts strip at bottom.\rSources: World Bank, CIA World Factbook, UN.\rStyle: National Geographic country feature quality. A4 portrait 300 DPI. --ar 2:3",
              "textEn": "Use imgGenTool to create a premium country profile infographic.\r\rCountry: {{COUNTRY NAME — e.g. Egypt / Japan / Brazil / France / Saudi Arabia / Nigeria}}\rLanguage: {{Arabic / English}}\rLevel: {{Middle school / High school}}\r\rSections: Flag + location map + capital + population data + physical geography highlights + climate + economy (GDP, main sectors) + culture + famous landmarks (illustrated) + key facts strip at bottom.\rSources: World Bank, CIA World Factbook, UN.\rStyle: National Geographic country feature quality. A4 portrait 300 DPI. --ar 2:3",
              "image": "images/GEOGRAPHY/4.png",
              "variables": [
                  {
                      "name": "COUNTRY NAME",
                      "labelAr": "اسم الدولة المستهدفة",
                      "labelEn": "Target Country Name",
                      "placeholderAr": "مثال: اليابان / مصر / المملكة العربية السعودية",
                      "placeholderEn": "e.g. Japan / Egypt / Saudi Arabia"
                  },
                  {
                      "name": "LANGUAGE",
                      "labelAr": "لغة الإنفوجرافيك",
                      "labelEn": "Infographic Language",
                      "placeholderAr": "مثال: Arabic / English",
                      "placeholderEn": "e.g. Arabic / English"
                  },
                  {
                      "name": "LEVEL",
                      "labelAr": "المستوى الدراسي",
                      "labelEn": "Grade Level",
                      "placeholderAr": "مثال: Middle school / High school",
                      "placeholderEn": "e.g. Middle school / High school"
                  }
              ]
          },
          {
              "id": 5,
              "titleAr": "إنفوجرافيك الكوارث الطبيعية العلمي الشامل (A4)",
              "titleEn": "Natural Disasters Educational Infographic (A4)",
              "textAr": "Use imgGenTool to create a premium natural disasters educational infographic.\rDisaster Type: {{TYPE — e.g. Earthquake / Volcano / Tsunami / Tropical Cyclone / Flood / Drought / Tornado / Landslide}}\rLanguage: {{Arabic / English}}\rLevel: {{Middle school / High school}}\rSections: How it forms (step-by-step diagram) + where it occurs (world map with hotspots) + measurement scale (Richter/Saffir-Simpson/etc.) + human and environmental impact + case study (one real event with data) + safety and preparation guidelines.\rSources: USGS, NOAA, UN OCHA.\rStyle: Dramatic scientific poster, hazard warning aesthetic. A4 portrait 300 DPI. --ar 2:3",
              "textEn": "Use imgGenTool to create a premium natural disasters educational infographic.\rDisaster Type: {{TYPE — e.g. Earthquake / Volcano / Tsunami / Tropical Cyclone / Flood / Drought / Tornado / Landslide}}\rLanguage: {{Arabic / English}}\rLevel: {{Middle school / High school}}\rSections: How it forms (step-by-step diagram) + where it occurs (world map with hotspots) + measurement scale (Richter/Saffir-Simpson/etc.) + human and environmental impact + case study (one real event with data) + safety and preparation guidelines.\rSources: USGS, NOAA, UN OCHA.\rStyle: Dramatic scientific poster, hazard warning aesthetic. A4 portrait 300 DPI. --ar 2:3",
              "image": "images/GEOGRAPHY/5.png",
              "variables": [
                  {
                      "name": "TYPE",
                      "labelAr": "نوع الكارثة الطبيعية",
                      "labelEn": "Natural Disaster Type",
                      "placeholderAr": "مثال: Earthquake / Volcano / Tsunami / Flood",
                      "placeholderEn": "e.g. Earthquake / Volcano / Tsunami / Flood"
                  },
                  {
                      "name": "LANGUAGE",
                      "labelAr": "لغة الإنفوجرافيك",
                      "labelEn": "Infographic Language",
                      "placeholderAr": "مثال: Arabic / English",
                      "placeholderEn": "e.g. Arabic / English"
                  },
                  {
                      "name": "LEVEL",
                      "labelAr": "المستوى الدراسي",
                      "labelEn": "Grade Level",
                      "placeholderAr": "مثال: Middle school / High school",
                      "placeholderEn": "e.g. Middle school / High school"
                  }
              ]
          },
          {
              "id": 6,
              "titleAr": "إنفوجرافيك النشرة الجوية لشرح الدروس (9:16)",
              "titleEn": "Weather Report Lesson Infographic (9:16)",
              "textAr": "Create a premium educational infographic titled:\r\"{{LESSON_TOPIC}} WEATHER REPORT\"\rCANVAS:\r- Vertical 9:16\r- Ultra-HD\r- Highly readable for classroom display\rSUBJECT: {{SUBJECT}}\rTOPIC: {{LESSON_TOPIC}}\rAUDIENCE: {{GRADE_LEVEL}}\rMAIN CONCEPT:\rExplain the lesson like a weather forecast. Each lesson block is presented as a forecast zone or weather condition.\rVISUAL STYLE:\rNano Banana PRO — Pixar-style weather studio, Morphic Glass Plus forecast panels, colorful forecast icons, bright premium educational layout.\rLAYOUT:\r1. Studio Header\r2. Main Forecast Board\r3. 4–5 Forecast Zones\r4. Warning Alert\r5. Practice Forecast\r6. Summary Bar\rCONTENT BLOCKS:\r- Forecast 1: {{SECTION_1}}\r- Forecast 2: {{SECTION_2}}\r- Forecast 3: {{SECTION_3}}\r- Forecast 4: {{SECTION_4}}\r- Warning: {{COMMON_MISTAKE}}\r- Tip: {{TEACHER_TIP}}\r- Practice: {{PRACTICE_TASK}}\rSTRICT RULES:\r- Make the weather metaphor obvious\r- Clear sections and icons\r- Keep the content practical",
              "textEn": "Create a premium educational infographic titled:\r\"{{LESSON_TOPIC}} WEATHER REPORT\"\rCANVAS:\r- Vertical 9:16\r- Ultra-HD\r- Highly readable for classroom display\rSUBJECT: {{SUBJECT}}\rTOPIC: {{LESSON_TOPIC}}\rAUDIENCE: {{GRADE_LEVEL}}\rMAIN CONCEPT:\rExplain the lesson like a weather forecast. Each lesson block is presented as a forecast zone or weather condition.\rVISUAL STYLE:\rNano Banana PRO — Pixar-style weather studio, Morphic Glass Plus forecast panels, colorful forecast icons, bright premium educational layout.\rLAYOUT:\r1. Studio Header\r2. Main Forecast Board\r3. 4–5 Forecast Zones\r4. Warning Alert\r5. Practice Forecast\r6. Summary Bar\rCONTENT BLOCKS:\r- Forecast 1: {{SECTION_1}}\r- Forecast 2: {{SECTION_2}}\r- Forecast 3: {{SECTION_3}}\r- Forecast 4: {{SECTION_4}}\r- Warning: {{COMMON_MISTAKE}}\r- Tip: {{TEACHER_TIP}}\r- Practice: {{PRACTICE_TASK}}\rSTRICT RULES:\r- Make the weather metaphor obvious\r- Clear sections and icons\r- Keep the content practical",
              "image": "images/GEOGRAPHY/6.png",
              "variables": [
                  {
                      "name": "SUBJECT",
                      "labelAr": "اسم المادة الدراسية",
                      "labelEn": "Subject Name",
                      "placeholderAr": "مثال: Geography",
                      "placeholderEn": "e.g. Geography"
                  },
                  {
                      "name": "LESSON_TOPIC",
                      "labelAr": "موضوع الدرس للطقس",
                      "labelEn": "Lesson Topic for Report",
                      "placeholderAr": "مثال: Rain Cycle / Wind Types",
                      "placeholderEn": "e.g. Rain Cycle / Wind Types"
                  },
                  {
                      "name": "GRADE_LEVEL",
                      "labelAr": "المستوى الدراسي",
                      "labelEn": "Grade Level",
                      "placeholderAr": "مثال: Primary / Middle school",
                      "placeholderEn": "e.g. Primary / Middle school"
                  },
                  {
                      "name": "SECTION_1",
                      "labelAr": "القسم الأول من الدرس (التوقعات 1)",
                      "labelEn": "Forecast Section 1",
                      "placeholderAr": "مثال: Evaporation process",
                      "placeholderEn": "e.g. Evaporation process"
                  },
                  {
                      "name": "SECTION_2",
                      "labelAr": "القسم الثاني من الدرس (التوقعات 2)",
                      "labelEn": "Forecast Section 2",
                      "placeholderAr": "مثال: Condensation process",
                      "placeholderEn": "e.g. Condensation process"
                  },
                  {
                      "name": "SECTION_3",
                      "labelAr": "القسم الثالث من الدرس (التوقعات 3)",
                      "labelEn": "Forecast Section 3",
                      "placeholderAr": "مثال: Precipitation and rain types",
                      "placeholderEn": "e.g. Precipitation and rain types"
                  },
                  {
                      "name": "SECTION_4",
                      "labelAr": "القسم الرابع من الدرس (التوقعات 4)",
                      "labelEn": "Forecast Section 4",
                      "placeholderAr": "مثال: Collection and water run-off",
                      "placeholderEn": "e.g. Collection and water run-off"
                  },
                  {
                      "name": "COMMON_MISTAKE",
                      "labelAr": "الخطأ الشائع المرصود (Zone Warning)",
                      "labelEn": "Common Mistake Warning",
                      "placeholderAr": "مثال: Confounding weather and climate",
                      "placeholderEn": "e.g. Confounding weather and climate"
                  },
                  {
                      "name": "TEACHER_TIP",
                      "labelAr": "نصيحة المعلمة للطلاب",
                      "labelEn": "Teacher Forecast Tip",
                      "placeholderAr": "مثال: Use color code for warm vs cold fronts",
                      "placeholderEn": "e.g. Use color code for warm vs cold fronts"
                  },
                  {
                      "name": "PRACTICE_TASK",
                      "labelAr": "المهمة التدريبية للتطبيق (Practice Forecast)",
                      "labelEn": "Practice Task Description",
                      "placeholderAr": "مثال: Draw a rain gauge and measure daily rainfall",
                      "placeholderEn": "e.g. Draw a rain gauge and measure daily rainfall"
                  }
              ]
          }
      ]
  }
];

// ==========================================================================
// TRANSLATION DICTIONARY
// ==========================================================================
const translations = {
  ar: {
    "app-title": "حصة مبهرة",
    "welcome-msg": "مرحباً معلمة ملهمة 💖",
    "welcome-desc": "اكتشفي مجموعة مميزة من الأوامر الجاهزة لكل مادة دراسية مع صور أمثلة ملهمة لتسهيل إعداد دروسك وإبداع أنشطتك ✨",
    "tab-home": "الرئيسية",
    "tab-subjects": "المواد",
    "tab-favorites": "الأوامر المفضلة",
    "tab-myprompts": "أوامري المحفوظة",
    "tab-lessons": "دروس سريعة",
    "tab-resources": "موارد إضافية",
    "tab-settings": "الإعدادات",
    "search-placeholder": "ابحث عن أمر أو مادة تعليمية...",
    "copy-success": "تم نسخ الأمر بنجاح! 📋",
    "no-favorites": "لا توجد أوامر مفضلة بعد",
    "no-favorites-desc": "اضغطي على أيقونة النجمة بجانب أي أمر لحفظه هنا والرجوع إليه لاحقاً.",
    "custom-prompts-title": "أوامري الخاصة المحفوظة",
    "custom-prompts-desc": "هنا يمكنكِ صياغة وحفظ أوامركِ الخاصة لتصفحها سريعاً في أي وقت.",
    "add-new-prompt": "إضافة أمر جديد",
    "prompt-title-placeholder": "عنوان الأمر (مثال: نشاط قراءة)",
    "prompt-text-placeholder": "اكتبِ نص الأمر هنا بالتفصيل...",
    "btn-save": "حفظ الأمر",
    "vip-level": "معلمة مميزة",
    "vip-level-sub": "مستوى 1",
    "placeholder-image-text": "صورة توضيحية رقم ",
    "btn-copy": "نسخ",
    "field-required": "يرجى ملء جميع الحقول",
    "adaptive-form-title": "نموذج البيانات المتغير (Adaptive Parameter Form)",
    "photo-upload-label": "اضغطي أو اسحبي لرفع صورة الطفل 📸",
    "photo-upload-change": "تغيير الصورة المرفوعة 🔄",
    "btn-back": "عودة للمواد",
    "motivation-text": "أنتِ قادرة على إلهام عقول صغيرة وتصنعين فرقاً كبيراً في كل يوم 💜",
    "search-no-results": "لا توجد نتائج مطابقة لـ",
    "ready-prompts-title": "المواد الدراسية والأوامر",
    "settings-lang": "لغة التطبيق",
    "about-text": "منصة حصة مبهرة هي رفيقتكِ الذكية لصياغة وتوليد أفضل الأنشطة والأوامر التعليمية المبتكرة وتصميم الملصقات المدرسية للأطفال بسهولة وإبداع 💜",
    "cat-all": "الكل",
    "cat-languages": "اللغات 🌐",
    "cat-sciences": "المواد العلمية 🔬",
    "cat-humanities": "المواد الأدبية والاجتماعية 📚",
    "cat-islamic": "التربية الإسلامية 🕌",
    "cat-toolkit": "أدوات ومطبوعات المعلمة 🛠️"
  },
  en: {
    "app-title": "Hassa Mobhira",
    "welcome-msg": "Welcome, Inspiring Teacher 💖",
    "welcome-desc": "Discover a special collection of ready prompts for every subject with inspiring examples to simplify your lesson plans and activities ✨",
    "tab-home": "Home",
    "tab-subjects": "Subjects",
    "tab-favorites": "Favorite Prompts",
    "tab-myprompts": "My Saved Prompts",
    "tab-lessons": "Quick Lessons",
    "tab-resources": "Additional Resources",
    "tab-settings": "Settings",
    "search-placeholder": "Search prompts or subjects...",
    "copy-success": "Prompt copied successfully! 📋",
    "no-favorites": "No favorite prompts yet",
    "no-favorites-desc": "Click the star icon next to any prompt to save it here for quick access later.",
    "custom-prompts-title": "My Saved Custom Prompts",
    "custom-prompts-desc": "Write and save your own custom prompts to access them quickly anytime.",
    "add-new-prompt": "Add New Prompt",
    "prompt-title-placeholder": "Prompt Title (e.g. Reading Activity)",
    "prompt-text-placeholder": "Write your prompt here in detail...",
    "btn-save": "Save Prompt",
    "vip-level": "Distinguished Teacher",
    "vip-level-sub": "Level 1",
    "placeholder-image-text": "Illustration Image #",
    "btn-copy": "Copy",
    "field-required": "Please fill all fields",
    "adaptive-form-title": "Adaptive Parameter Form",
    "photo-upload-label": "Click or drag to upload child's photo 📸",
    "photo-upload-change": "Change uploaded photo 🔄",
    "btn-back": "Back to Subjects",
    "motivation-text": "You are capable of inspiring young minds and making a big difference every day 💜",
    "search-no-results": "No matching results for",
    "ready-prompts-title": "Subject Materials & Prompts",
    "settings-lang": "App Language",
    "about-text": "Hassa Mobhira platform is your smart companion to draft and generate the best innovative educational activities and design school stickers for kids with ease and creativity 💜",
    "cat-all": "All",
    "cat-languages": "Languages 🌐",
    "cat-sciences": "Sciences 🔬",
    "cat-humanities": "Humanities 📚",
    "cat-islamic": "Islamic Studies 🕌",
    "cat-toolkit": "Teacher Toolkit 🛠️"
  }
};

// ==========================================================================
// STATE VARIABLES
// ==========================================================================
let currentLang = "ar";
let favorites = JSON.parse(localStorage.getItem("teacher_prompts_favorites")) || [];
let customPrompts = JSON.parse(localStorage.getItem("teacher_custom_prompts")) || [];
let activeTab = "home";
let activeSubject = null;
let currentPromptIndex = 0;
let activeSubjectInputs = {};
let activeCategoryFilter = "all";
let renderedPromptsCache = {};
let scoreCounter = parseInt(localStorage.getItem("teacher_stars_score")) || 0;

// Helper function to handle missing image templates gracefully
window.handleImageError = function(imgElement, placeholderText) {
  console.warn("Template image not found: " + imgElement.src);
  imgElement.onerror = null; // Prevent infinite loop
  // Fallback to the math chalkboard template which exists and has a premium aesthetic
  imgElement.src = "images/math/5.png";
};

// ==========================================================================
// DOM ELEMENTS
// ==========================================================================
const langToggleBtn = document.getElementById("langToggleBtn");
const langEN = document.getElementById("langEN");
const langAR = document.getElementById("langAR");

const globalSearchInput = document.getElementById("globalSearchInput");
const whiteboardViewport = document.getElementById("whiteboardViewport");
const sidebarMenu = document.getElementById("sidebarMenu");
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileCloseBtn = document.getElementById("mobileCloseBtn");
const sidebarBackdrop = document.getElementById("sidebarBackdrop");
const sideNavItems = document.querySelectorAll(".side-nav-item");
const userStarsScore = document.getElementById("userStarsScore");

// Toast
const toastAlert = document.getElementById("toastAlert");

// Google Sheets Web App URL - Replace with your deployed Web App URL
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzl9UBK0Ae4GkWCd-pUyU86I4A1h5iSe2fM6Z-49zHcZPuQaHGwI1TP8vARAR7L6iThXg/exec"; 

window.checkAuth = function() {
  const authEmail = localStorage.getItem("hassa_auth_email");
  const loginOverlay = document.getElementById("loginOverlay");
  const dashboardContainer = document.querySelector(".dashboard-container");
  
  if (authEmail) {
    if (loginOverlay) loginOverlay.style.display = "none";
    if (dashboardContainer) dashboardContainer.style.display = "flex";
  } else {
    if (loginOverlay) loginOverlay.style.display = "flex";
    if (dashboardContainer) dashboardContainer.style.display = "none";
  }
};

window.toggleLoginPassword = function() {
  const passwordInput = document.getElementById("loginPassword");
  const toggleIcon = document.getElementById("passwordToggleIcon");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleIcon.classList.remove("fa-eye");
    toggleIcon.classList.add("fa-eye-slash");
  } else {
    passwordInput.type = "password";
    toggleIcon.classList.remove("fa-eye-slash");
    toggleIcon.classList.add("fa-eye");
  }
};

window.handleLoginSubmit = async function() {
  const emailInput = document.getElementById("loginEmail");
  const passwordInput = document.getElementById("loginPassword");
  const errorMsg = document.getElementById("loginErrorMsg");
  const submitBtn = document.getElementById("loginSubmitBtn");
  const spinner = document.getElementById("authSpinner");
  
  const email = emailInput.value.trim().toLowerCase();
  const password = passwordInput.value;
  
  errorMsg.innerText = "";
  
  // Show spinner, disable button
  submitBtn.disabled = true;
  spinner.style.display = "inline-block";
  
  try {
    // 1. Bypass Mode: demo credentials
    if ((email === "admin@hassa.com" && password === "hassa123") || 
        (email === "wgraphicdesignerh@gmail.com" && password === "wgraphicdesignerh@gmail.com")) {
      localStorage.setItem("hassa_auth_email", email);
      checkAuth();
      showToast("مرحباً بكِ! تم تسجيل الدخول بنجاح 🌟");
      return;
    }
    
    // 2. Fetch from Google Sheet Apps Script (if configured)
    if (!GOOGLE_SCRIPT_URL || GOOGLE_SCRIPT_URL.trim() === "") {
      // If URL is not set, we allow any login for testing
      localStorage.setItem("hassa_auth_email", email);
      checkAuth();
      showToast("مرحباً بكِ! تم الدخول بنمط التجربة (لم يتم ضبط رابط جدول جوجل).");
      return;
    }
    
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain" // Avoid CORS preflight OPTIONS request
      },
      body: JSON.stringify({ email: email, password: password })
    });
    
    const result = await response.json();
    
    if (result.success) {
      localStorage.setItem("hassa_auth_email", email);
      checkAuth();
      showToast("تم تسجيل الدخول بنجاح! 🌟");
    } else {
      errorMsg.innerText = result.message || "فشل تسجيل الدخول. يرجى التحقق من البيانات.";
    }
  } catch (err) {
    console.error(err);
    errorMsg.innerText = "حدث خطأ أثناء الاتصال بالجدول. يرجى التحقق من رابط Web App والشبكة.";
  } finally {
    submitBtn.disabled = false;
    spinner.style.display = "none";
  }
};

window.handleLogout = function() {
  localStorage.removeItem("hassa_auth_email");
  // Clean inputs cache
  activeSubjectInputs = {};
  checkAuth();
  showToast("تم تسجيل الخروج بنجاح.");
};

// ==========================================================================
// INITIALIZATION
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  checkAuth();
  
  const savedLang = localStorage.getItem("teacher_app_lang");
  if (savedLang) {
    currentLang = savedLang;
  }
  updateLanguageUI();

  userStarsScore.innerText = scoreCounter;

  renderActiveView(activeTab);
  setupEventListeners();
});

// ==========================================================================
// EVENT LISTENERS
// ==========================================================================
function setupEventListeners() {
  langToggleBtn.addEventListener("click", () => {
    currentLang = currentLang === "ar" ? "en" : "ar";
    localStorage.setItem("teacher_app_lang", currentLang);
    updateLanguageUI();
    
    if (activeSubject) {
      openSubjectInWhiteboard(activeSubject, currentPromptIndex);
    } else {
      renderActiveView(activeTab);
    }
  });

  mobileMenuBtn.addEventListener("click", () => {
    sidebarMenu.classList.add("open");
    sidebarBackdrop.classList.add("open");
  });

  const closeSidebar = () => {
    sidebarMenu.classList.remove("open");
    sidebarBackdrop.classList.remove("open");
  };

  mobileCloseBtn.addEventListener("click", closeSidebar);
  sidebarBackdrop.addEventListener("click", closeSidebar);

  globalSearchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase().trim();
    if (query === "") {
      renderActiveView(activeTab);
      return;
    }
    performGlobalSearch(query);
  });

  sideNavItems.forEach(item => {
    item.addEventListener("click", () => {
      const tab = item.getAttribute("data-tab");
      activeTab = tab;
      activeSubject = null;

      sideNavItems.forEach(n => n.classList.remove("active"));
      item.classList.add("active");

      renderActiveView(tab);
      closeSidebar();
    });
  });
}

// ==========================================================================
// DYNAMIC VIEWPORT RENDERING (السبورة البيضاء)
// ==========================================================================
function renderActiveView(tabName) {
  whiteboardViewport.innerHTML = "";
  renderedPromptsCache = {};

  if (tabName === "home") {
    renderHomeView();
  } else if (tabName === "subjects") {
    renderSubjectsView();
  } else if (tabName === "favorites") {
    renderFavoritesView();
  } else if (tabName === "myprompts") {
    renderMySavedPromptsView();
  } else if (tabName === "lessons") {
    renderComingSoonView("fa-graduation-cap", currentLang === 'ar' ? "دروس سريعة صفية قريباً!" : "Quick classroom lessons coming soon!");
  } else if (tabName === "resources") {
    renderComingSoonView("fa-gift", currentLang === 'ar' ? "حقيبة الموارد الإضافية للمعلمات قريباً!" : "Additional resources pack coming soon!");
  } else if (tabName === "settings") {
    renderSettingsView();
  }
}

function renderHomeView() {
  const welcomeMsg = translations[currentLang]["welcome-msg"];
  const welcomeDesc = translations[currentLang]["welcome-desc"];
  
  whiteboardViewport.innerHTML = `
    <div class="home-view-container">
      <div class="home-hero-panel">
        <div class="home-hero-info">
          <h2>${welcomeMsg}</h2>
          <p>${welcomeDesc}</p>
          <button class="btn-primary" onclick="triggerSidebarTab('subjects')">
            <span>${translations[currentLang]["tab-subjects"]} ✨</span>
          </button>
        </div>
        <div class="home-hero-avatar">
          <div class="home-avatar-ring"></div>
          <div class="home-avatar-box" style="overflow: hidden; border-radius: 50%;">
            <img src="logo/photo_2026-07-03_23-24-52.jpg" style="width: 100%; height: 100%; object-fit: cover;">
          </div>
        </div>
      </div>

      <h3 class="home-shortcuts-title">
        <i class="fa-solid fa-bolt"></i>
        <span>${currentLang === 'ar' ? 'اختصارات سريعة' : 'Quick Shortcuts'}</span>
      </h3>
      <div class="home-shortcuts-grid">
        <div class="shortcut-card" onclick="triggerSidebarTab('subjects')">
          <div class="shortcut-icon"><i class="fa-solid fa-book-open"></i></div>
          <div class="shortcut-info">
            <h4>${translations[currentLang]["tab-subjects"]}</h4>
            <p>${currentLang === 'ar' ? 'تصفح المواد الدراسية والأوامر' : 'Browse subjects and commands'}</p>
          </div>
        </div>
        <div class="shortcut-card" onclick="triggerSidebarTab('favorites')">
          <div class="shortcut-icon"><i class="fa-solid fa-wand-magic-sparkles"></i></div>
          <div class="shortcut-info">
            <h4>${translations[currentLang]["tab-favorites"]}</h4>
            <p>${currentLang === 'ar' ? 'الوصول السريع للأوامر المفضلة' : 'Quick access to starred prompts'}</p>
          </div>
        </div>
        <div class="shortcut-card" onclick="triggerSidebarTab('myprompts')">
          <div class="shortcut-icon"><i class="fa-solid fa-folder-open"></i></div>
          <div class="shortcut-info">
            <h4>${translations[currentLang]["tab-myprompts"]}</h4>
            <p>${currentLang === 'ar' ? 'تصفح وصياغة الأوامر الخاصة بكِ' : 'Browse and write your own prompts'}</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

window.triggerSidebarTab = function(tabName) {
  const item = document.querySelector(`.side-nav-item[data-tab="${tabName}"]`);
  if (item) {
    item.click();
  }
};

function renderSubjectsView() {
  const title = translations[currentLang]["ready-prompts-title"];
  
  whiteboardViewport.innerHTML = `
    <div class="subjects-section" style="animation: fadeIn 0.4s ease;">
      <div class="section-title-wrapper">
        <i class="fa-regular fa-image title-icon"></i>
        <h3 class="section-title">${title}</h3>
      </div>
      
      <!-- Filter Pills -->
      <div class="filter-pills-container">
        <button class="filter-pill ${activeCategoryFilter === 'all' ? 'active' : ''}" onclick="filterSubjectsCategory('all')">
          <span>${translations[currentLang]['cat-all']}</span>
        </button>
        <button class="filter-pill ${activeCategoryFilter === 'languages' ? 'active' : ''}" onclick="filterSubjectsCategory('languages')">
          <span>${translations[currentLang]['cat-languages']}</span>
        </button>
        <button class="filter-pill ${activeCategoryFilter === 'sciences' ? 'active' : ''}" onclick="filterSubjectsCategory('sciences')">
          <span>${translations[currentLang]['cat-sciences']}</span>
        </button>
        <button class="filter-pill ${activeCategoryFilter === 'humanities' ? 'active' : ''}" onclick="filterSubjectsCategory('humanities')">
          <span>${translations[currentLang]['cat-humanities']}</span>
        </button>
        <button class="filter-pill ${activeCategoryFilter === 'islamic' ? 'active' : ''}" onclick="filterSubjectsCategory('islamic')">
          <span>${translations[currentLang]['cat-islamic']}</span>
        </button>
        <button class="filter-pill ${activeCategoryFilter === 'toolkit' ? 'active' : ''}" onclick="filterSubjectsCategory('toolkit')">
          <span>${translations[currentLang]['cat-toolkit']}</span>
        </button>
      </div>

      <!-- Categories Container -->
      <div id="subjectsCategoriesContainer" style="display: flex; flex-direction: column; gap: 24px;"></div>
    </div>
  `;

  const container = document.getElementById("subjectsCategoriesContainer");
  const categoriesOrder = ['languages', 'sciences', 'humanities', 'islamic', 'toolkit'];
  const categoryIcons = {
    languages: '<i class="fa-solid fa-globe"></i>',
    sciences: '<i class="fa-solid fa-flask"></i>',
    humanities: '<i class="fa-solid fa-book"></i>',
    islamic: '<i class="fa-solid fa-mosque"></i>',
    toolkit: '<i class="fa-solid fa-toolbox"></i>'
  };

  const categoriesToRender = activeCategoryFilter === 'all' 
    ? categoriesOrder 
    : [activeCategoryFilter];

  categoriesToRender.forEach(cat => {
    const subjects = subjectsData.filter(s => s.category === cat);
    if (subjects.length === 0) return;

    const groupDiv = document.createElement("div");
    groupDiv.className = "category-group";
    groupDiv.style.animation = "fadeIn 0.3s ease";

    const headerHTML = `
      <div class="category-group-header">
        ${categoryIcons[cat]}
        <span>${translations[currentLang][`cat-${cat}`]}</span>
      </div>
    `;

    const gridDiv = document.createElement("div");
    gridDiv.className = "subjects-grid";

    subjects.forEach(subject => {
      const card = document.createElement("div");
      card.className = `subject-card ${subject.colorClass}`;
      if (subject.comingSoon) {
        card.classList.add("coming-soon");
      }
      if (subject.id === "quran") {
        card.classList.add("card-quran-span");
      }

      const sTitle = currentLang === "ar" ? subject.titleAr : subject.titleEn;
      const sDesc = currentLang === "ar" ? subject.descAr : subject.descEn;
      const arrowIcon = currentLang === "ar" ? "fa-chevron-left" : "fa-chevron-right";

      card.innerHTML = `
        <div class="subject-icon-box">${subject.icon}</div>
        <div class="subject-info">
          <h4 class="subject-title">${sTitle}</h4>
          <p class="subject-desc">${sDesc}</p>
        </div>
        ${subject.comingSoon ? '' : `
          <div class="subject-arrow">
            <i class="fa-solid ${arrowIcon}"></i>
          </div>
        `}
      `;

      if (subject.comingSoon) {
        card.addEventListener("click", () => {
          window.triggerComingSoonToast();
        });
      } else {
        card.addEventListener("click", () => {
          activeSubjectInputs = {};
          openSubjectInWhiteboard(subject);
        });
      }

      gridDiv.appendChild(card);
    });

    groupDiv.innerHTML = headerHTML;
    groupDiv.appendChild(gridDiv);
    container.appendChild(groupDiv);
  });
}

window.filterSubjectsCategory = function(cat) {
  activeCategoryFilter = cat;
  renderSubjectsView();
};

window.triggerComingSoonToast = function() {
  const msg = currentLang === 'ar' 
    ? 'هذه المادة قيد التطوير وستتوفر قريباً جداً 💜' 
    : 'This subject is under development and will be available very soon 💜';
  toastAlert.innerText = msg;
  toastAlert.classList.add("show");
  setTimeout(() => {
    toastAlert.classList.remove("show");
  }, 2500);
};

// ==========================================================================
// CENTRAL WORKSPACE VIEWS FOR PROMPTS
// ==========================================================================
window.openSubjectInWhiteboard = function(subject, promptIndex = 0) {
  if (activeSubject !== subject) {
    activeSubjectInputs = {};
  }
  activeSubject = subject;
  activeTab = "subjects";
  currentPromptIndex = promptIndex;
  renderedPromptsCache = {};
  whiteboardViewport.innerHTML = "";

  const title = currentLang === "ar" ? subject.titleAr : subject.titleEn;
  const desc = currentLang === "ar" ? subject.descAr : subject.descEn;

  // Retrieve the specific prompt
  const prompt = subject.prompts[currentPromptIndex];
  if (!prompt) return;

  const isFav = favorites.some(f => f.id === prompt.id && f.subjectId === subject.id);
  const promptTitle = currentLang === "ar" ? prompt.titleAr : prompt.titleEn;
  const originalText = currentLang === "ar" ? prompt.textAr : prompt.textEn;

  renderedPromptsCache[prompt.id] = originalText;
  const imagePlaceholderText = translations[currentLang]["placeholder-image-text"] + prompt.id;

  let formHTML = "";
  const variables = prompt.variables || [];
  const hasTopicVar = variables.some(v => v.name.includes("TOPIC") || v.name.includes("RULE") || v.name.includes("IDIOM") || v.name.includes("THEME"));
  const hasDetailsVar = variables.some(v => v.name.includes("DETAILS") || v.name.includes("EXPLANATION"));

  let displayVars = [...variables];
  if (!hasTopicVar) {
    displayVars.unshift({
      name: "UNIVERSAL_TOPIC",
      labelAr: "اسم الدرس أو الموضوع",
      labelEn: "Lesson Topic / Theme",
      placeholderAr: "مثال: Past Continuous / أدوات النحو",
      placeholderEn: "e.g. Past Continuous / Grammar Tools"
    });
  }
  if (!hasDetailsVar) {
    displayVars.push({
      name: "UNIVERSAL_DETAILS",
      labelAr: "تفاصيل أو تعليمات إضافية",
      labelEn: "Additional Details / Notes",
      placeholderAr: "مثال: أضف أمثلة توضيحية للأطفال / Add kid-friendly examples",
      placeholderEn: "e.g. Add examples for kids / focus on vocabulary"
    });
  }

  const formTitle = currentLang === 'ar' ? 'تخصيص وتعديل تفاصيل البرومبت 📝' : 'Customize & Edit Prompt Details 📝';

  formHTML += `
    <div class="adaptive-form">
      <h5 class="adaptive-form-title" style="margin-bottom: 12px; display: flex; align-items: center; gap: 8px; font-weight: 800; color: #5B21B6;">
        <i class="fa-solid fa-sliders"></i>
        <span>${formTitle}</span>
      </h5>
      <div class="adaptive-inputs-grid">
  `;

  displayVars.forEach(variable => {
    const label = currentLang === "ar" ? variable.labelAr : variable.labelEn;
    const placeholder = currentLang === "ar" ? variable.placeholderAr : variable.placeholderEn;
    const savedValue = activeSubjectInputs[variable.name] || "";
    formHTML += `
      <div class="form-group">
        <label class="form-label">${label}</label>
        <input type="text" 
               class="form-input-field" 
               data-var="${variable.name}" 
               data-prompt-id="${prompt.id}" 
               placeholder="${placeholder}"
               value="${savedValue.replace(/"/g, '&quot;')}"
               onkeydown="if(event.key === 'Enter') updatePromptLiveText(${prompt.id})">
      </div>
    `;
  });

  const applyBtnText = currentLang === 'ar' ? 'تطبيق التعديلات 📝' : 'Apply Changes 📝';
  formHTML += `
      </div>
      <div style="margin-top: 18px; display: flex; justify-content: flex-end;">
        <button class="btn-primary btn-action-glow btn-apply-changes" onclick="updatePromptLiveText(${prompt.id})" style="padding: 10px 24px; border-radius: 12px; font-weight: 700; gap: 8px; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%); border: none; color: #FFF; cursor: pointer; transition: all 0.2s ease;">
          <i class="fa-solid fa-check"></i>
          <span>${applyBtnText}</span>
        </button>
      </div>
    </div>
  `;

  // Navigation arrows at the bottom of the prompt view
  const isFirst = currentPromptIndex === 0;
  const isLast = currentPromptIndex === subject.prompts.length - 1;

  const prevText = currentLang === 'ar' ? 'السابق' : 'Previous';
  const nextText = currentLang === 'ar' ? 'التالي' : 'Next';
  const homeText = currentLang === 'ar' ? 'المواد الدراسية 🏛️' : 'Subjects 🏛️';

  const leftArrow = `<i class="fa-solid fa-arrow-left"></i>`;
  const rightArrow = `<i class="fa-solid fa-arrow-right"></i>`;

  const prevArrowIcon = currentLang === 'ar' ? rightArrow : leftArrow;
  const nextArrowIcon = currentLang === 'ar' ? leftArrow : rightArrow;

  const navigationHTML = `
    <div class="prompt-navigation-bar">
      
      <button class="btn-nav-prev" onclick="navigateSubjectPrompt(-1)" ${isFirst ? 'disabled' : ''}>
        ${prevArrowIcon}
        <span>${prevText}</span>
      </button>

      <button class="btn-nav-home" onclick="triggerSidebarTab('subjects')">
        <i class="fa-solid fa-book-open"></i>
        <span>${homeText}</span>
      </button>

      <button class="btn-nav-next" onclick="navigateSubjectPrompt(1)" ${isLast ? 'disabled' : ''}>
        <span>${nextText}</span>
        ${nextArrowIcon}
      </button>

    </div>
  `;

  whiteboardViewport.innerHTML = `
    <div class="view-back-header">
      <button class="btn-back-link" onclick="triggerSidebarTab('subjects')">
        <i class="fa-solid ${currentLang === 'ar' ? 'fa-chevron-right' : 'fa-chevron-left'}"></i>
      </button>
      <div>
        <h3 class="view-subject-title">${subject.icon} ${title} (${currentPromptIndex + 1}/${subject.prompts.length})</h3>
        <p class="view-subject-desc">${desc}</p>
      </div>
    </div>

    <div class="prompt-view-layout" id="promptViewLayout"></div>
    ${navigationHTML}
  `;

  const layout = document.getElementById("promptViewLayout");

  const leftPanel = document.createElement("div");
  leftPanel.className = "prompt-left-panel";

  const rightPanel = document.createElement("div");
  rightPanel.className = "prompt-right-panel";

  layout.appendChild(leftPanel);
  layout.appendChild(rightPanel);

  // Left card
  const itemCard = document.createElement("div");
  itemCard.className = "prompt-item-card";
  itemCard.innerHTML = `
    <div class="prompt-item-header">
      <h4 class="prompt-item-title">${promptTitle}</h4>
      <div class="prompt-action-row">
        <button class="btn-icon-action btn-fav ${isFav ? 'active' : ''}" onclick="toggleFavorite('${subject.id}', ${prompt.id})">
          <i class="fa-${isFav ? 'solid' : 'regular'} fa-star"></i>
        </button>
        <button class="btn-icon-action btn-copy" onclick="copyRenderedPromptText(${prompt.id})">
          <i class="fa-regular fa-copy"></i>
        </button>
      </div>
    </div>
    
    ${formHTML}

    <div class="prompt-text-block" contenteditable="true" id="prompt-text-${prompt.id}" oninput="handleDirectPromptEdit(${prompt.id}, this)">${originalText}</div>
    <div style="margin-top: 14px;">
      <button class="btn-primary btn-action-glow btn-copy-filled" onclick="copyRenderedPromptText(${prompt.id})" style="width: 100%; height: 45px; border-radius: 12px; font-weight: 700; gap: 8px; display: flex; justify-content: center; align-items: center; background: linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%); border: none; color: #FFF; cursor: pointer; transition: all 0.2s ease;">
        <i class="fa-regular fa-copy"></i>
        <span>${currentLang === 'ar' ? 'نسخ البرومبت بالإنجليزية 📋' : 'Copy English Prompt 📋'}</span>
      </button>
    </div>
  `;
  leftPanel.appendChild(itemCard);

  // Right card
  const previewCard = document.createElement("div");
  previewCard.className = "prompt-image-preview-container";
  previewCard.id = `image-container-${prompt.id}`;
  previewCard.innerHTML = `
    <img class="prompt-image-preview" id="image-preview-${prompt.id}" src="${prompt.image}" alt="${promptTitle}" onerror="handleImageError(this, '${imagePlaceholderText}')">
  `;
  rightPanel.appendChild(previewCard);

  // Gemini / ChatGPT and operation instructions links box
  const actionsBox = document.createElement("div");
  actionsBox.style.marginTop = "14px";
  actionsBox.style.width = "100%";
  actionsBox.style.display = "flex";
  actionsBox.style.flexDirection = "column";
  actionsBox.style.gap = "10px";

  const buttonsRow = document.createElement("div");
  buttonsRow.style.display = "grid";
  buttonsRow.style.gridTemplateColumns = "1fr 1fr";
  buttonsRow.style.gap = "10px";
  buttonsRow.innerHTML = `
    <a href="https://gemini.google.com" target="_blank" class="btn-action-glow" style="background: linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%); text-decoration: none; display: flex; justify-content: center; align-items: center; height: 42px; border-radius: 12px; color: #FFF; font-weight: 700; gap: 8px;">
      <i class="fa-solid fa-brain"></i>
      <span>Gemini 🚀</span>
    </a>
    
    <a href="https://chatgpt.com" target="_blank" class="btn-action-glow" style="background: linear-gradient(135deg, #10B981 0%, #059669 100%); text-decoration: none; display: flex; justify-content: center; align-items: center; height: 42px; border-radius: 12px; color: #FFF; font-weight: 700; gap: 8px;">
      <i class="fa-solid fa-robot"></i>
      <span>ChatGPT 🎨</span>
    </a>
  `;
  actionsBox.appendChild(buttonsRow);

  const stepsBtn = document.createElement("button");
  stepsBtn.className = "btn-action-glow";
  stepsBtn.style.background = "linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)";
  stepsBtn.style.color = "#FFF";
  stepsBtn.style.fontWeight = "700";
  stepsBtn.style.height = "42px";
  stepsBtn.style.borderRadius = "12px";
  stepsBtn.style.border = "none";
  stepsBtn.style.cursor = "pointer";
  stepsBtn.style.display = "flex";
  stepsBtn.style.justifyContent = "center";
  stepsBtn.style.alignItems = "center";
  stepsBtn.style.gap = "8px";
  stepsBtn.style.width = "100%";

  const stepsBtnTitle = currentLang === 'ar' ? 'خطوات التشغيل والمستشار الذكي 💡' : 'Operation Steps & Smart Advisor 💡';
  stepsBtn.innerHTML = `
    <i class="fa-solid fa-lightbulb"></i>
    <span>${stepsBtnTitle}</span>
  `;

  const stepsPanel = document.createElement("div");
  stepsPanel.className = "steps-panel-content";
  stepsPanel.style.display = "none";
  stepsPanel.style.background = "#FAF8FF";
  stepsPanel.style.border = "1.5px solid rgba(139, 92, 246, 0.2)";
  stepsPanel.style.borderRadius = "14px";
  stepsPanel.style.padding = "16px";
  stepsPanel.style.fontSize = "11.5px";
  stepsPanel.style.lineHeight = "1.7";
  stepsPanel.style.color = "var(--text-dark)";
  stepsPanel.style.boxShadow = "inset 0 0 10px rgba(0,0,0,0.02)";
  stepsPanel.style.textAlign = currentLang === 'ar' ? 'right' : 'left';

  if (currentLang === 'ar') {
    stepsPanel.innerHTML = `
      <h6 style="font-weight: 800; color: var(--primary-purple); margin-bottom: 8px; font-size:12px; display:flex; align-items:center; gap:6px;">
        <i class="fa-solid fa-list-check"></i> خطوات التشغيل:
      </h6>
      <ul style="margin: 0; padding-right: 18px; list-style-type: decimal;">
        <li style="margin-bottom: 6px;">املأ الفراغات في نموذج المتغيرات الذكي لتخصيص موضوع درسك.</li>
        <li style="margin-bottom: 6px;">انقر فوق نسخ البرومبت لنسخ البرومبت بالإنجليزية.</li>
        <li style="margin-bottom: 6px;">(اختياري) يمكنك رفع صورة واحدة لدرسك أو صفحة PDF واحدة في الشات.</li>
        <li style="margin-bottom: 6px;">افتح Gemini أو ChatGPT بالضغط على أزرار التوجيه السريع أعلاه.</li>
        <li>الصق البرومبت وارفع ملف الدرس، ثم اضغط إدخل (Enter) لتوليد تصميمك المذهل.</li>
      </ul>
    `;
  } else {
    stepsPanel.innerHTML = `
      <h6 style="font-weight: 800; color: var(--primary-purple); margin-bottom: 8px; font-size:12px; display:flex; align-items:center; gap:6px;">
        <i class="fa-solid fa-list-check"></i> Operation Steps:
      </h6>
      <ul style="margin: 0; padding-left: 18px; list-style-type: decimal;">
        <li style="margin-bottom: 6px;">Fill in the blanks in the smart parameter form to customize your lesson topic.</li>
        <li style="margin-bottom: 6px;">Click "Copy Prompt" to copy the prompt text.</li>
        <li style="margin-bottom: 6px;">(Optional) You can upload a photo of your lesson or a single PDF page into the chat.</li>
        <li style="margin-bottom: 6px;">Open Gemini or ChatGPT by clicking the quick-navigation buttons above.</li>
        <li>Paste the prompt, upload the lesson file, then press Enter to generate your stunning design.</li>
      </ul>
    `;
  }

  stepsBtn.addEventListener("click", () => {
    if (stepsPanel.style.display === "none") {
      stepsPanel.style.display = "block";
      stepsBtn.style.background = "linear-gradient(135deg, #EF4444 0%, #DC2626 100%)";
      stepsBtn.innerHTML = `
        <i class="fa-solid fa-xmark"></i>
        <span>${currentLang === 'ar' ? 'إغلاق خطوات التشغيل ✖' : 'Close Operation Steps ✖'}</span>
      `;
    } else {
      stepsPanel.style.display = "none";
      stepsBtn.style.background = "linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)";
      stepsBtn.innerHTML = `
        <i class="fa-solid fa-lightbulb"></i>
        <span>${stepsBtnTitle}</span>
      `;
    }
  });

  actionsBox.appendChild(stepsBtn);
  actionsBox.appendChild(stepsPanel);
  rightPanel.appendChild(actionsBox);

  if (prompt.variables && prompt.variables.length > 0) {
    updatePromptLiveText(prompt.id);
  }
}

window.navigateSubjectPrompt = function(direction) {
  if (!activeSubject) return;
  const idx = parseInt(currentPromptIndex, 10) || 0;
  const targetIndex = idx + direction;
  if (targetIndex >= 0 && targetIndex < activeSubject.prompts.length) {
    openSubjectInWhiteboard(activeSubject, targetIndex);
  }
};

// 3. Favorites View
function renderFavoritesView() {
  if (favorites.length === 0) {
    whiteboardViewport.innerHTML = `
      <div class="empty-state">
        <i class="fa-regular fa-star"></i>
        <h3>${translations[currentLang]["no-favorites"]}</h3>
        <p>${translations[currentLang]["no-favorites-desc"]}</p>
      </div>
    `;
    return;
  }

  whiteboardViewport.innerHTML = `
    <div class="section-title-wrapper">
      <i class="fa-solid fa-wand-magic-sparkles title-icon"></i>
      <h3 class="section-title">${translations[currentLang]["tab-favorites"]}</h3>
    </div>
    <div class="prompts-list favs-list-layout" id="favPromptsList" style="display:flex; flex-direction:column; gap:16px;"></div>
  `;
  
  const favList = document.getElementById("favPromptsList");

  favorites.forEach(fav => {
    const itemCard = document.createElement("div");
    itemCard.className = "prompt-item-card";

    const promptTitle = currentLang === "ar" ? fav.titleAr : fav.titleEn;
    const promptText = currentLang === "ar" ? fav.textAr : fav.textEn;
    const subjectTitle = currentLang === "ar" ? fav.subjectTitleAr : fav.subjectTitleEn;

    itemCard.innerHTML = `
      <div class="prompt-item-header">
        <div>
          <span style="font-size: 11px; padding: 4px 10px; border-radius: 8px; background: rgba(139, 92, 246, 0.1); color: var(--primary-purple); margin-bottom: 6px; display: inline-block; font-weight:700;">
            ${fav.subjectIcon} ${subjectTitle}
          </span>
          <h4 class="prompt-item-title">${promptTitle}</h4>
        </div>
        <div class="prompt-action-row">
          <button class="btn-icon-action active" onclick="removeFavoriteFromWhiteboard('${fav.subjectId}', ${fav.id})">
            <i class="fa-solid fa-star"></i>
          </button>
          <button class="btn-icon-action" onclick="copyPromptText('${promptText.replace(/'/g, "\\'")}')">
            <i class="fa-regular fa-copy"></i>
          </button>
        </div>
      </div>
      <div class="prompt-text-block">${promptText}</div>
    `;
    favList.appendChild(itemCard);
  });
}

window.removeFavoriteFromWhiteboard = function(subjectId, promptId) {
  toggleFavorite(subjectId, promptId);
  renderFavoritesView();
};

// 4. Custom Saved Prompts View
function renderMySavedPromptsView() {
  let listHTML = "";
  
  if (customPrompts.length === 0) {
    listHTML = `
      <div class="empty-state">
        <i class="fa-regular fa-folder-open"></i>
        <h3>${translations[currentLang]["custom-prompts-title"]}</h3>
        <p>${translations[currentLang]["custom-prompts-desc"]}</p>
      </div>
    `;
  } else {
    listHTML = `<div class="prompts-list" id="customPromptsList" style="display:flex; flex-direction:column; gap:16px;"></div>`;
  }

  whiteboardViewport.innerHTML = `
    <div class="section-title-wrapper" style="display:flex; justify-content:space-between; align-items:center; width:100%; border-bottom:1.5px dashed rgba(139,92,246,0.15); padding-bottom:12px; margin-bottom:20px;">
      <div style="display:flex; align-items:center; gap:8px;">
        <i class="fa-solid fa-folder-open title-icon"></i>
        <h3 class="section-title">${translations[currentLang]["custom-prompts-title"]}</h3>
      </div>
      <button class="btn-primary" onclick="openNewCustomPromptEditor()" style="padding: 8px 18px; border-radius:12px;">
        <i class="fa-solid fa-plus" style="font-size:10px;"></i> <span>${translations[currentLang]["add-new-prompt"]}</span>
      </button>
    </div>

    <div style="display:grid; grid-template-columns: 1.15fr 0.85fr; gap:24px; align-items:start;" id="mypromptsGrid">
      <div id="mypromptsLeftCol">
        ${listHTML}
      </div>
      <div id="mypromptsRightCol"></div>
    </div>
  `;

  if (customPrompts.length > 0) {
    const list = document.getElementById("customPromptsList");
    customPrompts.forEach((prompt, index) => {
      const itemCard = document.createElement("div");
      itemCard.className = "prompt-item-card";

      itemCard.innerHTML = `
        <div class="prompt-item-header">
          <h4 class="prompt-item-title">${prompt.title}</h4>
          <div class="prompt-action-row">
            <button class="btn-icon-action" onclick="deleteCustomPromptFromWhiteboard(${index})" style="background: rgba(239, 68, 68, 0.05); border-color: rgba(239, 68, 68, 0.15); color: #EF4444;">
              <i class="fa-regular fa-trash-can"></i>
            </button>
            <button class="btn-icon-action" onclick="copyPromptText('${prompt.text.replace(/'/g, "\\'")}')">
              <i class="fa-regular fa-copy"></i>
            </button>
          </div>
        </div>
        <div class="prompt-text-block">${prompt.text}</div>
      `;
      list.appendChild(itemCard);
    });
  }

  openNewCustomPromptEditor();
}

window.openNewCustomPromptEditor = function() {
  const rightCol = document.getElementById("mypromptsRightCol");
  if (!rightCol) return;

  rightCol.innerHTML = `
    <div class="prompt-item-card" style="position: sticky; top:0;">
      <h4 class="prompt-item-title" style="border-bottom: 1.5px solid rgba(139,92,246,0.1); padding-bottom:8px; margin-bottom:8px;">
        <i class="fa-regular fa-pen-to-square"></i> ${translations[currentLang]["add-new-prompt"]}
      </h4>
      
      <div style="display: flex; flex-direction: column; gap: 14px; margin-top:8px;">
        <div class="form-group">
          <label class="form-label">${translations[currentLang]["add-new-prompt"]}</label>
          <input type="text" id="newPromptTitle" class="form-input-field" placeholder="${translations[currentLang]["prompt-title-placeholder"]}">
        </div>
        <div class="form-group">
          <label class="form-label">${translations[currentLang]["prompt-text-placeholder"]}</label>
          <textarea id="newPromptText" class="form-input-field" style="height: 160px; padding: 12px; resize: none;" placeholder="${translations[currentLang]["prompt-text-placeholder"]}"></textarea>
        </div>
        <button class="btn-primary" id="saveCustomPromptBtn" style="height: 45px; border-radius: 12px; margin-top:6px;">
          <span>${translations[currentLang]["btn-save"]}</span>
        </button>
      </div>
    </div>
  `;

  document.getElementById("saveCustomPromptBtn").addEventListener("click", () => {
    const title = document.getElementById("newPromptTitle").value.trim();
    const text = document.getElementById("newPromptText").value.trim();

    if (!title || !text) {
      alert(translations[currentLang]["field-required"]);
      return;
    }

    customPrompts.push({ title, text });
    localStorage.setItem("teacher_custom_prompts", JSON.stringify(customPrompts));
    
    renderMySavedPromptsView();
  });
};

window.deleteCustomPromptFromWhiteboard = function(index) {
  customPrompts.splice(index, 1);
  localStorage.setItem("teacher_custom_prompts", JSON.stringify(customPrompts));
  renderMySavedPromptsView();
};

function renderComingSoonView(iconClass, text) {
  whiteboardViewport.innerHTML = `
    <div class="empty-state">
      <i class="fa-solid ${iconClass}"></i>
      <h3>${text}</h3>
      <p style="margin-top:4px;">نعمل جاهدين لتوفير أفضل المواد والموارد التعليمية المتميزة لمساعدتكِ قريباً جداً 💜</p>
    </div>
  `;
}

function renderSettingsView() {
  whiteboardViewport.innerHTML = `
    <div class="section-title-wrapper" style="border-bottom:1.5px dashed rgba(139,92,246,0.15); padding-bottom:12px; margin-bottom:24px;">
      <i class="fa-solid fa-gear title-icon"></i>
      <h3 class="section-title">${translations[currentLang]["tab-settings"]}</h3>
    </div>

    <div class="settings-list">
      <div class="settings-item" onclick="toggleLangFromSettings()">
        <div class="settings-item-left">
          <i class="fa-solid fa-globe"></i>
          <span>${translations[currentLang]["settings-lang"]}</span>
        </div>
        <span class="settings-arrow" style="font-weight:700;">${currentLang === 'ar' ? 'العربية' : 'English (EN)'}</span>
      </div>

      <div class="settings-item" onclick="showAboutDialog()">
        <div class="settings-item-left">
          <i class="fa-solid fa-circle-info"></i>
          <span>${translations[currentLang]["settings-about"]}</span>
        </div>
        <i class="fa-solid ${currentLang === 'ar' ? 'fa-chevron-left' : 'fa-chevron-right'} settings-arrow"></i>
      </div>
      
      <div id="aboutInfoBox" style="display: none; padding: 20px; background: #FFF; border: 1.5px solid rgba(139, 92, 246, 0.15); border-radius: 16px; font-size: 12px; line-height: 1.7; color: var(--text-dark); box-shadow: 0 4px 10px rgba(0,0,0,0.02);">
        ${translations[currentLang]["about-text"]}
      </div>
    </div>
  `;
}

window.toggleLangFromSettings = function() {
  currentLang = currentLang === "ar" ? "en" : "ar";
  localStorage.setItem("teacher_app_lang", currentLang);
  updateLanguageUI();
  
  document.querySelectorAll(".side-nav-item").forEach(item => {
    const tab = item.getAttribute("data-tab");
    const label = item.querySelector("[data-tr]");
    if (label && translations[currentLang][`tab-${tab}`]) {
      label.innerText = translations[currentLang][`tab-${tab}`];
    }
  });

  renderSettingsView();
};

window.showAboutDialog = function() {
  const box = document.getElementById("aboutInfoBox");
  box.style.display = box.style.display === "none" ? "block" : "none";
};

// ==========================================================================
// ADAPTIVE LIVE RENDER TEXT & IMAGE UPLOADS
// ==========================================================================
window.updatePromptLiveText = function(promptId) {
  if (!activeSubject) return;
  const prompt = activeSubject.prompts.find(p => p.id === promptId);
  if (!prompt) return;

  const originalText = currentLang === "ar" ? prompt.textAr : prompt.textEn;
  let renderedText = originalText;

  let universalTopic = "";
  let universalDetails = "";

  const inputs = document.querySelectorAll(`.form-input-field[data-prompt-id="${promptId}"]`);
  inputs.forEach(input => {
    const varName = input.getAttribute("data-var");
    const val = input.value;
    
    // Save to activeSubjectInputs
    activeSubjectInputs[varName] = val;

    if (varName === "UNIVERSAL_TOPIC") {
      universalTopic = val;
    } else if (varName === "UNIVERSAL_DETAILS") {
      universalDetails = val;
    } else {
      const trimmedVal = val.trim();
      const regex = new RegExp(`{{\\s*${varName}\\s*}}`, 'g');
      if (trimmedVal !== "") {
        renderedText = renderedText.replace(regex, trimmedVal);
      } else {
        renderedText = renderedText.replace(regex, `{{${varName}}}`);
      }
    }
  });

  // Handle UNIVERSAL_TOPIC
  if (universalTopic.trim() !== "") {
    const topicPlaceholders = ['TOPIC', 'LESSON_TOPIC', 'GRAMMAR_TOPIC', 'GRAMMAR_RULE', 'RULE_TITLE', 'VOCABULARY_THEME', 'SITUATION_TITLE', 'IDIOM'];
    let replacedAny = false;
    topicPlaceholders.forEach(ph => {
      const regex = new RegExp(`{{\\s*${ph}\\s*}}`, 'g');
      if (regex.test(renderedText)) {
        renderedText = renderedText.replace(regex, universalTopic.trim());
        replacedAny = true;
      }
    });

    if (!replacedAny) {
      renderedText = `Topic / Lesson: ${universalTopic.trim()}\n\n${renderedText}`;
    }
  }

  // Handle UNIVERSAL_DETAILS
  if (universalDetails.trim() !== "") {
    renderedText = `${renderedText}\n\nAdditional instructions / specific details:\n${universalDetails.trim()}`;
  }

  renderedPromptsCache[promptId] = renderedText;

  const textBlock = document.getElementById(`prompt-text-${promptId}`);
  if (textBlock) {
    textBlock.innerText = renderedText;
  }

  // Auto-update the sticker canvas image if we are on the stickers sheet
  if (activeSubject && activeSubject.id === "stickers") {
    generateStickerSheet(promptId);
  }
};

window.handleDirectPromptEdit = function(promptId, element) {
  renderedPromptsCache[promptId] = element.innerText;
};

window.handleChildPhotoUpload = function(event, promptId) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    let imgElement = document.getElementById(`image-preview-${promptId}`);
    if (imgElement) {
      imgElement.src = e.target.result;
    } else {
      let hiddenImg = document.getElementById(`temp-hidden-img-${promptId}`);
      if (!hiddenImg) {
        hiddenImg = document.createElement("img");
        hiddenImg.id = `temp-hidden-img-${promptId}`;
        hiddenImg.style.display = "none";
        document.body.appendChild(hiddenImg);
      }
      hiddenImg.src = e.target.result;
      
      hiddenImg.onload = function() {
        generateStickerSheet(promptId);
      };
    }

    const label = document.getElementById(`upload-text-${promptId}`);
    if (label) {
      label.innerText = translations[currentLang]["photo-upload-change"];
    }

    const zone = document.getElementById(`photo-upload-zone-${promptId}`);
    if (zone) {
      zone.classList.add("uploaded");
    }

    if (activeSubject && activeSubject.id === "stickers") {
      setTimeout(() => {
        generateStickerSheet(promptId);
      }, 100);
    }
  };
  reader.readAsDataURL(file);
};

// ==========================================================================
// DYNAMIC DUAL-LANGUAGE CANVAS GENERATOR (WITH BROWSER-COMPATIBLE ROUND RECT)
// ==========================================================================
function drawRoundRect(ctx, x, y, width, height, radius) {
  if (typeof radius === 'undefined') {
    radius = 0;
  }
  if (typeof radius === 'number') {
    radius = {tl: radius, tr: radius, br: radius, bl: radius};
  } else {
    var defaultRadius = {tl: 0, tr: 0, br: 0, bl: 0};
    for (var side in defaultRadius) {
      radius[side] = radius[side] || defaultRadius[side];
    }
  }
  ctx.beginPath();
  ctx.moveTo(x + radius.tl, y);
  ctx.lineTo(x + width - radius.tr, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
  ctx.lineTo(x + width, y + height - radius.br);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
  ctx.lineTo(x + radius.bl, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
  ctx.lineTo(x, y + radius.tl);
  ctx.quadraticCurveTo(x, y, x + radius.tl, y);
  ctx.closePath();
}

window.generateStickerSheet = function(promptId) {
  const canvas = document.getElementById(`sticker-canvas-${promptId}`);
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  
  // Load background template image
  const bgImg = new Image();
  bgImg.src = "images/stickers/1.png";
  bgImg.onload = function() {
    // 1. Draw Template Background image
    ctx.drawImage(bgImg, 0, 0, canvas.width, canvas.height);
    
    // 2. Fetch input form values
    const nameInput = document.querySelector(`.form-input-field[data-prompt-id="${promptId}"][data-var="CHILD_NAME"]`);
    const gradeInput = document.querySelector(`.form-input-field[data-prompt-id="${promptId}"][data-var="GRADE"]`);
    const schoolInput = document.querySelector(`.form-input-field[data-prompt-id="${promptId}"][data-var="SCHOOL_NAME"]`);
    const subjectInput = document.querySelector(`.form-input-field[data-prompt-id="${promptId}"][data-var="SUBJECT"]`);
    
    const nameVal = nameInput ? nameInput.value.trim() || (currentLang === 'ar' ? 'سارة' : 'Sarah') : 'Sarah';
    const gradeVal = gradeInput ? gradeInput.value.trim() || (currentLang === 'ar' ? 'الصف الثاني' : 'Grade 2') : 'Grade 2';
    const schoolVal = schoolInput ? schoolInput.value.trim() || (currentLang === 'ar' ? 'الإبداع الابتدائية' : 'Innovation School') : 'Innovation School';
    const subjectVal = subjectInput ? subjectInput.value.trim() || (currentLang === 'ar' ? 'اللغة العربية' : 'Arabic') : 'Arabic';
    
    // 3. Overlay Child Portrait (if uploaded) inside the golden oval crest frame
    const tempImg = document.getElementById(`temp-hidden-img-${promptId}`);
    if (tempImg && tempImg.src && tempImg.src.startsWith("data:")) {
      ctx.save();
      ctx.beginPath();
      // Draw ellipse mask to fit exactly inside the golden central mirror frame
      ctx.ellipse(297, 349, 72, 94, 0, 0, Math.PI * 2);
      ctx.clip();
      ctx.drawImage(tempImg, 297 - 72, 349 - 94, 144, 188);
      ctx.restore();
    }
    
    // 4. Overlay Text Variables over template placeholders
    
    // Top Pink Ribbon Name: Covers "{{CHILD_NAME}}" placeholder
    ctx.fillStyle = "#F5789A"; // Matching ribbon pink
    drawRoundRect(ctx, 170, 96, 176, 22, 6);
    ctx.fill();
    
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "bold 13px Cairo, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(currentLang === 'ar' ? `الأميرة ${nameVal}` : `Princess ${nameVal}`, 258, 107);
    
    // Central Oval Mirror Ribbon Name: Covers "{{CHILD_NAME}}" placeholder
    ctx.fillStyle = "#F4628E"; // Matching central ribbon pink
    drawRoundRect(ctx, 297 - 110, 548, 220, 28, 8);
    ctx.fill();
    
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "bold 14px Cairo, sans-serif";
    ctx.fillText(currentLang === 'ar' ? `الأميرة ${nameVal}` : `Princess ${nameVal}`, 297, 562);
    
    // Cloud Grade Overlay: Covers "{{GRADE}}" placeholder inside the cloud
    ctx.fillStyle = "#E3F6FC"; // Cloud matching light blue
    drawRoundRect(ctx, 297 - 75, 747, 150, 24, 6);
    ctx.fill();
    
    ctx.fillStyle = "#4F46E5";
    ctx.font = "bold 11px Cairo, sans-serif";
    ctx.fillText(currentLang === 'ar' ? `الصف: ${gradeVal}` : `Grade: ${gradeVal}`, 297, 759);
    
    // Bottom Notebook Tag Label Line Overlay: Covers placeholders in bottom horizontal tag
    ctx.fillStyle = "#FFF1F2"; // Tag card matching pastel pink
    drawRoundRect(ctx, 310 - 150, 786, 300, 42, 6);
    ctx.fill();
    
    ctx.fillStyle = "#DB2777";
    ctx.font = "bold 12px Cairo, sans-serif";
    
    if (currentLang === 'ar') {
      ctx.textAlign = "right";
      ctx.fillText(`المدرسة: ${schoolVal}`, 310 + 130, 796);
      ctx.fillText(`المادة: ${subjectVal}`, 310 + 130, 818);
    } else {
      ctx.textAlign = "left";
      ctx.fillText(`School: ${schoolVal}`, 310 - 130, 796);
      ctx.fillText(`Subject: ${subjectVal}`, 310 - 130, 818);
    }
  };
  
  // In case the image is already cached or loaded, execute draw directly
  if (bgImg.complete) {
    bgImg.onload();
  }
};

function drawStarsBackground(ctx, w, h) {
  ctx.fillStyle = "rgba(251, 191, 36, 0.35)";
  const starsLocs = [
    {x: 60, y: 70}, {x: 100, y: 150}, {x: 80, y: 300},
    {x: 480, y: 80}, {x: 520, y: 180}, {x: 500, y: 320},
    {x: 297, y: 50}, {x: 180, y: 350}, {x: 420, y: 350}
  ];
  
  starsLocs.forEach(star => {
    drawSingleStar(ctx, star.x, star.y, 5, 8, 4);
  });
}

function drawSingleStar(ctx, cx, cy, spikes, outerRadius, innerRadius) {
  let rot = Math.PI / 2 * 3;
  let x = cx;
  let y = cy;
  let step = Math.PI / spikes;

  ctx.beginPath();
  ctx.moveTo(cx, cy - outerRadius);
  for (let i = 0; i < spikes; i++) {
    x = cx + Math.cos(rot) * outerRadius;
    y = cy + Math.sin(rot) * outerRadius;
    ctx.lineTo(x, y);
    rot += step;

    x = cx + Math.cos(rot) * innerRadius;
    y = cy + Math.sin(rot) * innerRadius;
    ctx.lineTo(x, y);
    rot += step;
  }
  ctx.lineTo(cx, cy - outerRadius);
  ctx.closePath();
  ctx.fill();
}

window.downloadStickerSheet = function(promptId) {
  const canvas = document.getElementById(`sticker-canvas-${promptId}`);
  if (!canvas) return;
  
  generateStickerSheet(promptId);
  
  const link = document.createElement('a');
  link.download = `Princess_Sticker_Sheet.png`;
  link.href = canvas.toDataURL("image/png");
  link.click();
};

window.printStickerSheet = function(promptId) {
  generateStickerSheet(promptId);
  window.print();
};

// ==========================================================================
// ACTION MECHANICS (FAVORITES, COPY & SCORE UPDATES)
// ==========================================================================
window.toggleFavorite = function(subjectId, promptId) {
  const subject = subjectsData.find(s => s.id === subjectId);
  const prompt = subject.prompts.find(p => p.id === promptId);
  
  const favIndex = favorites.findIndex(f => f.id === promptId && f.subjectId === subjectId);
  
  if (favIndex > -1) {
    favorites.splice(favIndex, 1);
  } else {
    favorites.push({
      ...prompt,
      subjectId: subjectId,
      subjectIcon: subject.icon,
      subjectTitleAr: subject.titleAr,
      subjectTitleEn: subject.titleEn
    });
  }
  
  localStorage.setItem("teacher_prompts_favorites", JSON.stringify(favorites));
  
  if (activeSubject) {
    openSubjectInWhiteboard(activeSubject, currentPromptIndex);
  } else if (activeTab === "favorites") {
    renderFavoritesView();
  }
};

window.copyRenderedPromptText = function(promptId) {
  if (!activeSubject) return;
  const prompt = activeSubject.prompts.find(p => p.id === promptId);
  if (!prompt) return;

  const textBlock = document.getElementById(`prompt-text-${promptId}`);
  let textToCopy = "";

  if (textBlock) {
    textToCopy = textBlock.innerText;
  } else {
    // Fallback if the DOM element is not ready
    textToCopy = currentLang === "ar" ? prompt.textAr : prompt.textEn;
    const inputs = document.querySelectorAll(`.form-input-field[data-prompt-id="${promptId}"]`);
    inputs.forEach(input => {
      const varName = input.getAttribute("data-var");
      const val = input.value.trim();
      const regex = new RegExp(`{{\\s*${varName}\\s*}}`, 'g');
      if (val !== "") {
        textToCopy = textToCopy.replace(regex, val);
      } else {
        textToCopy = textToCopy.replace(regex, `{{${varName}}}`);
      }
    });
  }

  copyPromptText(textToCopy);
};

window.copyPromptText = function(text) {
  navigator.clipboard.writeText(text).then(() => {
    toastAlert.innerText = translations[currentLang]["copy-success"];
    toastAlert.classList.add("show");
    
    incrementStarsScore();

    setTimeout(() => {
      toastAlert.classList.remove("show");
    }, 2000);
  }).catch(err => {
    console.error("Could not copy prompt text: ", err);
  });
};

function incrementStarsScore() {
  scoreCounter += 1;
  localStorage.setItem("teacher_stars_score", scoreCounter);
  userStarsScore.innerText = scoreCounter;
  
  userStarsScore.parentElement.style.transform = "scale(1.15)";
  setTimeout(() => {
    userStarsScore.parentElement.style.transform = "scale(1)";
  }, 200);
}

// ==========================================================================
// GLOBAL SEARCH ENGINE
// ==========================================================================
function performGlobalSearch(query) {
  whiteboardViewport.innerHTML = "";
  
  const resultsList = document.createElement("div");
  resultsList.className = "prompts-list";
  resultsList.style.display = "flex";
  resultsList.style.flexDirection = "column";
  resultsList.style.gap = "16px";

  let matchCount = 0;

  whiteboardViewport.innerHTML = `
    <div class="section-title-wrapper" style="border-bottom:1.5px dashed rgba(139,92,246,0.15); padding-bottom:12px; margin-bottom:20px;">
      <i class="fa-solid fa-magnifying-glass title-icon"></i>
      <h3 class="section-title">${currentLang === 'ar' ? `نتائج البحث عن: "${query}"` : `Search Results for: "${query}"`}</h3>
    </div>
  `;

  subjectsData.forEach(subject => {
    const sTitle = currentLang === 'ar' ? subject.titleAr : subject.titleEn;
    
    subject.prompts.forEach(prompt => {
      const pTitle = (currentLang === 'ar' ? prompt.titleAr : prompt.titleEn).toLowerCase();
      const pText = (currentLang === 'ar' ? prompt.textAr : prompt.textEn).toLowerCase();
      
      if (pTitle.includes(query) || pText.includes(query)) {
        matchCount++;
        const itemCard = document.createElement("div");
        itemCard.className = "prompt-item-card";
        
        const isFav = favorites.some(f => f.id === prompt.id && f.subjectId === subject.id);
        const finalTitle = currentLang === "ar" ? prompt.titleAr : prompt.titleEn;
        const finalText = currentLang === "ar" ? prompt.textAr : prompt.textEn;

        itemCard.innerHTML = `
          <div class="prompt-item-header">
            <div>
              <span style="font-size: 11px; padding: 4px 10px; border-radius: 8px; background: rgba(139, 92, 246, 0.1); color: var(--primary-purple); margin-bottom: 6px; display: inline-block; font-weight:700;">
                ${subject.icon} ${sTitle}
              </span>
              <h4 class="prompt-item-title">${finalTitle}</h4>
            </div>
            <div class="prompt-action-row">
              <button class="btn-icon-action ${isFav ? 'active' : ''}" onclick="toggleFavorite('${subject.id}', ${prompt.id})">
                <i class="fa-${isFav ? 'solid' : 'regular'} fa-star"></i>
              </button>
              <button class="btn-icon-action" onclick="copyPromptText('${finalText.replace(/'/g, "\\'")}')">
                <i class="fa-regular fa-copy"></i>
              </button>
            </div>
          </div>
          <div class="prompt-text-block">${finalText}</div>
        `;
        resultsList.appendChild(itemCard);
      }
    });
  });

  if (matchCount === 0) {
    whiteboardViewport.innerHTML += `
      <div class="empty-state">
        <i class="fa-solid fa-face-frown-open"></i>
        <h3>${translations[currentLang]["search-no-results"]} "${query}"</h3>
      </div>
    `;
  } else {
    whiteboardViewport.appendChild(resultsList);
  }
}

// ==========================================================================
// LANGUAGE ENGINE AND INTERFACE SYNCHRONIZATION
// ==========================================================================
function updateLanguageUI() {
  const savedGlowLang = localStorage.getItem('glowLanguage');
  if (savedGlowLang && (savedGlowLang === 'ar' || savedGlowLang === 'en' || savedGlowLang === 'fr')) {
    currentLang = savedGlowLang === 'ar' ? 'ar' : 'en';
  }

  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";

  if (langAR && langEN) {
    if (currentLang === "ar") {
      langAR.classList.add("active-lang");
      langEN.classList.remove("active-lang");
    } else {
      langEN.classList.add("active-lang");
      langAR.classList.remove("active-lang");
    }
  }

  document.querySelectorAll("[data-tr]").forEach(element => {
    const key = element.getAttribute("data-tr");
    if (translations[currentLang] && translations[currentLang][key]) {
      element.innerText = translations[currentLang][key];
    }
  });

  document.querySelectorAll("[data-tr-placeholder]").forEach(element => {
    const key = element.getAttribute("data-tr-placeholder");
    if (translations[currentLang] && translations[currentLang][key]) {
      element.placeholder = translations[currentLang][key];
    }
  });

  const footerText = document.getElementById("motivationText");
  if (footerText && translations[currentLang]) {
    footerText.innerText = translations[currentLang]["motivation-text"];
  }

  // Re-render active view to update card titles, prompts, and variables to the selected language
  if (activeSubject) {
    openSubjectInWhiteboard(activeSubject, currentPromptIndex);
  } else if (activeTab === "favorites") {
    renderFavoritesView();
  } else {
    renderSubjectsView();
  }
}

// Auto-navigate to Subjects View directly for EduSubjects Studio Tool
document.addEventListener("DOMContentLoaded", () => {
  renderSubjectsView();
});
