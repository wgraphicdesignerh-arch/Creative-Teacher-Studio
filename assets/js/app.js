// Complete Multilingual Engine for Teachers Hub Platform and all Tools

const translations = {
    ar: {
        brandName: "حصة مبهرة",
        brandSub: "فرقة إنقاذ الحصة ✨",
        homeLink: "الرئيسية",
        toolsLink: "الأدوات الذكية",
        gptsLink: "بوتات المعلمة (GPTs)",
        backToHome: "العودة للرئيسية",
        heroTag: "👑 المنصة الأولى والأفخم للمعلمة العربية المبدعة",
        heroTitle1: "انقذي حصتك واصنعي الفارق",
        heroTitle2: "بأوامر وأدوات سحرية فاخرة ✨",
        heroDesc: "منظومة متكاملة تمنحكِ القدرة على التحضير، بنك الأسئلة، الأنشطة، وتصاميم الإنفوجرافيك والـ PDF بنقرة واحدة!",
        exploreBtn: "استكشاف حزمة الأدوات",
        featuredBadge: "🔥 أداة المواد والبوسترات التعليمية",
        featuredTitle: "استوديو المواد والبوسترات (EduSubjects Studio)",
        featuredDesc: "استعراض بوسترات المواد التعليمية والتخصصية (العربية، الإنجليزية، العلوم، الرياضيات...) ومعاينة الصور والبرومبت المباشر وحقول التعديل.",
        featuredBtn: "فتح استوديو المواد والبوسترات",
        toolsSectionTitle: "حزمة الأدوات الذكية والتربوية",
        toolsSectionSub: "أدوات متطورة ومصممة لخدمتكِ داخل وخارج الفصل",
        
        // Tool Cards & Page Titles
        t1Title: "استوديو المواد والبوسترات (EduSubjects Studio)",
        t1Desc: "استعراض بوسترات المواد التعليمية والتخصصية مع حقول التعديل المباشرة والمعاينة.",
        t2Title: "مولد المطالبات الذكي (EduPrompt)",
        t2Desc: "صياغة مطالبات ذكية مهيأة لـ ChatGPT وGemini للحصول على أنشطة وقصص تعليمية دقيقة.",
        t3Title: "مكتبة الـ 1000 برومبت الشاملة",
        t3Desc: "أكبر مكتبة مطالبات مصنفة (1-1020) بدون أرقام جاهزة للنسخ والاستخدام الفوري.",
        t4Title: "مجموعة أدوات الـ PDF الاحترافية (EduPDF Pro)",
        t4Desc: "دمج، تقسيم، ضغط، حماية، وترقيم ملفات الـ PDF محلياً دون رفعها لأي سيرفر.",
        t5Title: "أستوديو الصور السينمائية (Image Assist)",
        t5Desc: "تصميم البوسترات التعليمية ثلاثية الأبعاد والصور السينمائية باحترافية.",
        t6Title: "مختبر البث المباشر (EduLive Lab)",
        t6Desc: "مشاركة ومزامنة نصوص الحصص، السبورة الذكية والتفاعل المباشر بين المعلمة والطالبات.",
        t7Title: "المساعد الشامل (EduChat Pro)",
        t7Desc: "طرح أي سؤال تعليمي، علمي، أو تربوي عام والحصول على شرح مفصل مدعوم بمصادر.",
        t8Title: "مترجم النصوص (EduTranslate AI)",
        t8Desc: "ترجمة سياقية وأكاديمية دقيقة لـ أكثر من 100 لغة عالمية مع مراعاة المصطلحات العلمية.",
        t9Title: "المرشد التربوي (EduAdvisor AI)",
        t9Desc: "تخطيط آلي ومستشار تربوي متكامل للدروس والاستراتيجيات ونواتج التعلم وتعديل السلوك.",
        t10Title: "صانع الباوربوينت (SlideCraft)",
        t10Desc: "تنظيم وتصميم محتوى الدروس في شرائح PowerPoint احترافية.",
        t11Title: "قوالب الإنفوجرافيك (EduGraph)",
        t11Desc: "تحويل المحتوى إلى المخططات والانفوجرافيك البصري عبر 100+ قالب.",
        t12Title: "محرر البطاقات التفاعلية (EduRunHTML)",
        t12Desc: "معاينة وتحرير البطاقات وأكواد HTML التفاعلية للصف مباشرة.",
        t13Title: "محول الصور لـ PDF (EduImg2PDF)",
        t13Desc: "تحويل وتجميع صور أوراق العمل إلى ملف PDF مع العلامة المائية.",
        t14Title: "مساعد الإذاعة المدرسية",
        t14Desc: "توليد برامج الإذاعة المدرسية كاملة الفقرات (مقدمة، قرآن، حديث، هل تعلم) بثوانٍ.",
        t15Title: "صانع رموز الـ QR والتفاعلية",
        t15Desc: "تحويل روابط الدروس ورملفات Google Drive إلى باركود قابل للطباعة.",
        t16Title: "أداة إنتاج فيديو المنهج (EduVideo Creator)",
        t16Desc: "تحويل المحتوى العلمي إلى مشاهد وبنية JSON جاهزة لمحركات صناعة الفيديو والذكاء الاصطناعي.",
        t17Title: "استخراج النص من الصور (EduImg2Txt OCR)",
        t17Desc: "تحويل صور الكتُب وأوراق العمل والسبورة إلى نصوص وقواعد قابلة للتعديل والنسخ الفوري.",
        t18Title: "أداة ضغط وتقليل حجم الصور (EduTinyImg Pro)",
        t18Desc: "تقليل حجم صور أوراق العمل والأنشطة بنسبة تصل إلى 90% مع الحفاظ على الدقة العالية وتنزيل ZIP.",
        t19Title: "تكبير وتحسين جودة الصور 4K (PIXLCARE AI)",
        t19Desc: "تكبير دقة الصور وأوراق العمل حتى 8x للطباعة بجودة 4K و 8K محلياً بالذكاء الاصطناعي.",
        t20Title: "تحليل وتقييم درجات الفصل (EduGrades AI)",
        t20Desc: "تحليل درجات ورصد أداء الفصل، استخراج المتوسطات وتوليد الخطط العلاجية والرسوم البيانية.",
        t21Title: "مقارنة الفترات ونتائج الفصول (EduCompare)",
        t21Desc: "مقارنة نتائج الفترات والتغيير الشهري في درجات الفصل وتوليد الرسوم البيانية التوضيحية.",
        t22Title: "مؤقت وموزع وقت الحصة التفاعلي (EduTimer Pro)",
        t22Desc: "إدارة ومزامنة زمن الحصة والأنشطة، التنبيهات الصوتية والانتقال التلقائي بين المراحل.",
        t35Title: "مصمم اللوحة التفاعلية (EduCanvas Pro)",
        t35Desc: "لوحة رسم وتصميم تفاعلية بالفصل، يدعم القلم، الممحاة، الألوان، النصوص، الشبكة الهندسية وتصدير PNG.",
        t24Title: "رادار تقنيات الذكاء الاصطناعي (TechRadar AI)",
        t24Desc: "رصد حي وتغطية مستمرة لأحدث توجهات وأخبار تقنيات الذكاء الاصطناعي والأدوات التعليمية الذكية.",
        t25Title: "محاكي ومُعيد صياغة الاختبارات (EduExam Simulator)",
        t25Desc: "إعادة صياغة الاختبارات القديمة وتوليد نماذج بديلة ومحاكية بنفس الهيكل ومستوى الصعوبة.",
        t26Title: "المُعجِم الذكي",
        t26Desc: "خبير لغوي وباحث في أصول العربية.",
        t27Title: "مساعد تقارير وإشعارات أولياء الأمور",
        t27Desc: "صياغة رسائل وإشعارات مدرسية واحترافية لأولياء الأمور للثناء، المتابعة، أو تعديل السلوك.",
        t28Title: "مولد أوراق العمل التفاعلية",
        t28Desc: "إنشاء وتصميم أوراق عمل أنيقة ومصممة للطباعة والتفاعل الصفّي ومسابقات المادة.",
        t29Title: "مساعد تحضير الدروس الذكي",
        t29Desc: "تخطيط وبناء سيناريو الدروس اليومية، الأهداف الإجرائية والاستراتيجيات الصفية.",
        t30Title: "صانع بنك الأسئلة والاختبارات",
        t30Desc: "توليد بنوك أسئلة متنوعة (اختيار من متعدد، صح وخطأ، علل) للدروس والمراجعات.",
        t31Title: "محول النصوص لصور وانفوجرافيك (EduTxt2Img)",
        t31Desc: "تحويل نصوص الدروس والمفاهيم إلى مطالبات صور وتصاميم إنفوجرافيك بصرية.",
        t32Title: "مولد مقاييس التقدير ومصفوفات التقييم (Rubric AI)",
        t32Desc: "إنشاء مصفوفات تقييم المهام والمشاريع (الروبرك - Rubrics) بـ 4 مستويات أداء.",
        t33Title: "عجلة الاختيار العشوائي والمجموعات",
        t33Desc: "سحب عشوائي تفاعلي لطالبات الفصل وتقسيم المجموعات للأنشطة والمسابقات.",
        t34Title: "مساعد الخطط العلاجية والإثرائية",
        t34Desc: "توليد خطط دعم وتحدي تعليم متمايز للطالبات المتفوقات واللاتي بحاجة لمساندة.",
        
        // Tool Controls
        promptBuilderSettings: "إعدادات المطالبة (Prompt Builder)",
        selectAiModel: "اختر نموذج الذكاء الاصطناعي المستهدف",
        selectGoal: "الهدف من المطالبة (الوسيلة التعليمية)",
        lessonTopicLabel: "الموضوع / المحتوى التعليمي",
        gradeLevelLabel: "الفئة العمرية / الصف الدراسي",
        generatePromptBtn: "توليد المطالبة الاحترافية 🪄",
        outputTitle: "المطالبة المجهزة (Prompt Output)",
        topicPlaceholder: "مثال: دورة حياة الماء، الجهاز الهضمي، أركان الإيمان...",
        optStory: "📖 قصة تعليمية مبسطة لشرح مفهوم معقد",
        optActivity: "💡 نشاط تفاعلي وعصف ذهني للطالبات",
        optCards: "🃏 بطاقات أسئلة ومراجعة ختامية",
        optTable: "📊 جدول مقارنة واستنتاج بين مفهومين",
        optProject: "🎨 فكرة مشروع أو نشاط صفّي إبداعي",
        gPrimaryLow: "الصفوف الأولية (1 - 3 ابتدائي)",
        gPrimaryHigh: "الصفوف العليا (4 - 6 ابتدائي)",
        gMiddle: "المرحلة المتوسطة",
        gHigh: "المرحلة الثانوية",
        
        gptsSectionTitle: "حزمة بوتات المعلمة المخصصة (Custom GPTs)",
        gptsSectionSub: "باقة البوتات والمساعدات الذكية المصممة خصيصاً على ChatGPT لتقديم حلول واستشارات فورية.",
        
        btnTryTool: "تجربة الأداة",
        btnBrowseLib: "تصفح المكتبة",
        btnOpenGPT: "فتح البوت في ChatGPT",
        copySuccess: "تم النسخ بنجاح!",
        generatingAI: "جاري التوليد بواسطة الذكاء الاصطناعي...",
        copyBtnText: "نسخ النص",
        footerRights: "جميع الحقوق محفوظة © 2026 - Creative Teaching From A To Z | Walaa Hassan | Microsoft Innovative Educator Expert"
    },
    en: {
        brandName: "Teachers Hub",
        brandSub: "Class Rescue Squad ✨",
        homeLink: "Home",
        toolsLink: "Smart Tools",
        gptsLink: "Teacher GPTs",
        backToHome: "Back to Home",
        heroTag: "👑 The #1 Premium AI Platform for Creative Teachers",
        heroTitle1: "Rescue Your Lesson & Inspire",
        heroTitle2: "With Premium Magical AI Tools ✨",
        heroDesc: "An all-in-one ecosystem for lesson planning, question banks, activities, infographics, and PDF tools in one click!",
        exploreBtn: "Explore Smart Tools",
        featuredBadge: "🔥 Featured Subject & Poster Studio",
        featuredTitle: "EduSubjects Studio",
        featuredDesc: "Browse interactive educational posters (Arabic, English, Science, Math...) with live prompt previews and editable fields.",
        featuredBtn: "Open EduSubjects Studio",
        toolsSectionTitle: "Smart Educational Tools Suite",
        toolsSectionSub: "Advanced AI tools tailored for your classroom and administrative tasks",
        
        // Tool Cards & Page Titles
        t1Title: "EduSubjects Studio",
        t1Desc: "Explore educational posters with real-time editing and live prompt generation.",
        t2Title: "EduPrompt Engine",
        t2Desc: "Craft smart AI prompts optimized for ChatGPT, Gemini, and DeepSeek for precise lesson activities.",
        t3Title: "1000 Prompts Library",
        t3Desc: "Largest categorized library (1-1020) of prompts without numbers, ready to copy.",
        t4Title: "EduPDF Pro Suite",
        t4Desc: "Merge, split, compress, protect, and page-number PDF files locally in your browser.",
        t5Title: "Image Assist Studio",
        t5Desc: "Design cinematic 3D educational posters and visual learning materials effortlessly.",
        t6Title: "EduLive Lab",
        t6Desc: "Live lesson broadcasting, smart whiteboard sync, and real-time student interaction.",
        t7Title: "EduChat Pro Tutor",
        t7Desc: "Ask any academic or general pedagogical question with detailed, source-backed answers.",
        t8Title: "EduTranslate AI",
        t8Desc: "Contextual and academic AI translation supporting 100+ global languages.",
        t9Title: "EduAdvisor AI",
        t9Desc: "Automated lesson planner, strategy guide, learning outcome generator, and behavior advisor.",
        t10Title: "SlideCraft PowerPoint",
        t10Desc: "Organize and design lesson content into professional PowerPoint slide decks.",
        t11Title: "EduGraph Infographics",
        t11Desc: "Transform educational text into visual diagrams and charts across 100+ templates.",
        t12Title: "EduRunHTML Interactive",
        t12Desc: "Preview and edit interactive HTML classroom cards and widgets directly.",
        t13Title: "EduImg2PDF Converter",
        t13Desc: "Convert and bundle worksheet images into watermark-protected PDF files.",
        t14Title: "School Radio Assistant",
        t14Desc: "Generate complete school morning broadcasts (Quran, Hadith, Facts, Conclusion) in seconds.",
        t15Title: "QR Code Generator",
        t15Desc: "Convert lesson links and Google Drive resources into printable interactive QR codes.",
        t16Title: "EduVideo Creator",
        t16Desc: "Transform scientific content into structured JSON scenes ready for video production engines.",
        t17Title: "EduImg2Txt OCR",
        t17Desc: "Extract and convert text from book photos, worksheets, and whiteboards into editable text.",
        t18Title: "EduTinyImg Pro",
        t18Desc: "Compress worksheet images by up to 90% while maintaining high resolution with ZIP export.",
        t19Title: "PIXLCARE AI Upscaler",
        t19Desc: "Upscale image resolution up to 8x for high-quality 4K and 8K printing locally using AI.",
        t20Title: "EduGrades AI Analytics",
        t20Desc: "Analyze classroom grades, compute averages, generate progress charts and remedial plans.",
        t21Title: "EduCompare Grades",
        t21Desc: "Compare semester results, track monthly student progress, and generate comparative charts.",
        t22Title: "EduTimer Pro",
        t22Desc: "Interactive class period countdown, phase manager, sound alerts, and auto-advance.",
        t23Title: "EduWhiteboard Interactive",
        t23Desc: "Smart interactive classroom whiteboard for drawing, shapes, writing, and image export.",
        t24Title: "TechRadar AI News",
        t24Desc: "Live monitoring and updates on artificial intelligence trends, tools, and educational technology.",
        t25Title: "EduExam Simulator",
        t25Desc: "Reformulate old exams, generating alternative parallel models with custom difficulty.",
        t26Title: "EduSmartDict Multilingual",
        t26Desc: "Comprehensive linguistic and lexical analysis for any word in Arabic, English, French, German, Spanish, or Turkish.",
        t27Title: "Parent Reports & Notifications Assistant",
        t27Desc: "Generate professional school letters and notifications for praise, follow-up, or behavioral notes.",
        t28Title: "Interactive Worksheet Generator",
        t28Desc: "Create and format elegant printable worksheets, classroom activities, and subject quizzes.",
        
        // Tool Controls
        promptBuilderSettings: "Prompt Builder Settings",
        selectAiModel: "Select Target AI Model",
        selectGoal: "Educational Goal",
        lessonTopicLabel: "Lesson Topic / Educational Content",
        gradeLevelLabel: "Target Age / Grade Level",
        generatePromptBtn: "Generate Professional Prompt 🪄",
        outputTitle: "Prompt Output",
        topicPlaceholder: "e.g., Water Cycle, Digestive System, Faith Pillars...",
        optStory: "📖 Simplified Educational Story",
        optActivity: "💡 Interactive Brainstorming Activity",
        optCards: "🃏 Review Question Cards",
        optTable: "📊 Concept Comparison Table",
        optProject: "🎨 Creative Classroom Project",
        gPrimaryLow: "Lower Primary (Grades 1 - 3)",
        gPrimaryHigh: "Upper Primary (Grades 4 - 6)",
        gMiddle: "Middle School",
        gHigh: "High School",
        
        t35Title: "Interactive Canvas Designer (EduCanvas Pro)",
        t35Desc: "Interactive drawing and design board for the classroom with pen, eraser, colors, text, grid, and PNG export.",
        catAll: "All Tools 🌟",
        catPdf: "PDF & Documents 📄",
        catMedia: "Video & Visual Education 🎬",
        catImg: "Image Editing & Design 🖼️",
        catLang: "Languages & Translation 🌐",
        catExams: "Exams & Grading Analytics 📊",
        catClassroom: "Class Management & Motivation 🏫",
        catPrompts: "AI Prompts & Coding 🤖",
        
        tBioTitle: "Biology Simulation Lab (BioVision AI)",
        tBioDesc: "Smart biology lab to explain cell concepts, anatomy, and scientific experiments with direct Gemini Gem simulation.",
        
        quizTitle: "Smart Quiz & Test Creator",
        questionBankSettings: "Question Bank Settings",
        quizTopicPlaceholder: "Enter lesson topic or text to generate questions...",
        questionTypeLabel: "Question Type",
        qMCQ: "Multiple Choice",
        qTF: "True / False",
        qEssay: "Short Essay Questions",
        qMix: "Mixed Format",
        questionCountLabel: "Question Count",
        q3: "3 Questions",
        q5: "5 Questions",
        q10: "10 Questions",
        generateQuizBtn: "Generate Quiz & Model Answer ✍️",
        generatedQuestionBank: "Generated Question Bank",
        copyQuizBtn: "Copy Quiz",
        quizPlaceholderText: "Enter quiz topic and click 'Generate Quiz'.",
        
        gptsSectionTitle: "Teacher Custom GPTs Suite",
        gptsSectionSub: "Specialized ChatGPT bots designed to provide instant educational games, guidance, and ideas.",
        
        btnTryTool: "Try Tool",
        btnBrowseLib: "Browse Library",
        btnOpenGPT: "Open Bot in ChatGPT",
        copySuccess: "Copied successfully!",
        generatingAI: "Generating with AI...",
        copyBtnText: "Copy Text",
        logoutBtn: "Sign Out",
        footerRights: "All Rights Reserved © 2026 - Creative Teaching From A To Z | Walaa Hassan | Microsoft Innovative Educator Expert"
    },
    fr: {
        brandName: "Teachers Hub",
        brandSub: "Escouade de Secours ✨",
        homeLink: "Accueil",
        toolsLink: "Outils Intelligents",
        gptsLink: "GPTs Enseignants",
        backToHome: "Retour à l'Accueil",
        heroTag: "👑 La Plateforme Intelligente Ultime pour les Enseignantes",
        heroTitle1: "Innovez et Inspirez vos Cours",
        heroTitle2: "Avec des Solutions IA Magiques ✨",
        heroDesc: "Un écosystème éducatif complet pour créer des fiches de cours, quiz, feuilles de travail et infographies en quelques secondes !",
        exploreBtn: "Explorer les Outils",
        featuredBadge: "🔥 Studio d'Affiches & Matières",
        featuredTitle: "EduSubjects Studio",
        featuredDesc: "Explorez des affiches éducatives interactives avec prévisualisation des prompts et variables personnalisées.",
        featuredBtn: "Ouvrir EduSubjects Studio",
        toolsSectionTitle: "Suite d'Outils Éducatifs Intelligents",
        toolsSectionSub: "Des outils IA avancés conçus pour vos tâches quotidiennes",
        
        t1Title: "EduSubjects Studio",
        t1Desc: "Explorez des affiches éducatives avec édition en temps réel et génération de prompts.",
        t2Title: "EduPrompt Engine",
        t2Desc: "Rédigez des prompts IA intelligents optimisés pour ChatGPT, Gemini et DeepSeek.",
        t3Title: "Bibliothèque de 1000 Prompts",
        t3Desc: "La plus grande bibliothèque classée (1-1020) de prompts prêts à copier.",
        t4Title: "EduPDF Pro Suite",
        t4Desc: "Fusionnez, divisez, compressez et protégez vos fichiers PDF localement dans votre navigateur.",
        t5Title: "Image Assist Studio",
        t5Desc: "Concevez des affiches éducatives 3D cinématographiques sans effort.",
        t6Title: "EduLive Lab",
        t6Desc: "Diffusion de cours en direct, synchronisation de tableau blanc et interaction en temps réel.",
        t7Title: "EduChat Pro Tutor",
        t7Desc: "Posez n'importe quelle question pédagogique ou académique avec des réponses détaillées.",
        t8Title: "EduTranslate AI",
        t8Desc: "Traduction IA contextuelle et académique prenant en charge plus de 100 langues.",
        t9Title: "EduAdvisor AI",
        t9Desc: "Planificateur de cours automatisé, guide de stratégie et conseiller comportemental.",
        t10Title: "SlideCraft PowerPoint",
        t10Desc: "Organisez et concevez du contenu de cours dans des présentations PowerPoint.",
        t11Title: "EduGraph Infographies",
        t11Desc: "Transformez le texte éducatif en schémas et graphiques visuels à travers 100+ modèles.",
        t12Title: "EduRunHTML Interactif",
        t12Desc: "Prévisualisez et modifiez directement des cartes et widgets HTML interactifs.",
        t13Title: "EduImg2PDF Convertisseur",
        t13Desc: "Convertissez et regroupez des images de fiches de travail en fichiers PDF protégés.",
        t14Title: "Assistant Émission Scolaire",
        t14Desc: "Générez des programmes complets de radio scolaire en quelques secondes.",
        t15Title: "Générateur de QR Code",
        t15Desc: "Convertissez les liens de cours et Google Drive en QR codes imprimables.",
        t16Title: "EduVideo Creator",
        t16Desc: "Transformez le contenu scientifique en scènes JSON structurées.",
        t26Title: "EduSmartDict AI",
        t26Desc: "Analyse linguistique et lexicale complète pour les mots en plusieurs langues.",
        t35Title: "Concepteur de Tableau Interactif (EduCanvas Pro)",
        t35Desc: "Tableau de dessin et de conception interactif pour la classe avec stylo, gomme, couleurs et export PNG.",
        catAll: "Tous les Outils 🌟",
        catPdf: "Documents & PDF 📄",
        catMedia: "Vidéo & Éducation Visuelle 🎬",
        catImg: "Édition & Design d'Images 🖼️",
        catLang: "Langues & Traduction 🌐",
        catExams: "Évaluations & Notes 📊",
        catClassroom: "Gestion de Classe 🏫",
        quizTitle: "Générateur d'Évaluations & Quiz",
        questionBankSettings: "Paramètres de la Banque de Questions",
        quizTopicPlaceholder: "Saisissez le sujet du cours pour générer les questions...",
        questionTypeLabel: "Type de Questions",
        qMCQ: "Choix Multiple",
        qTF: "Vrai / Faux",
        qEssay: "Questions Courtes",
        qMix: "Format Mixte",
        questionCountLabel: "Nombre de Questions",
        q3: "3 Questions",
        q5: "5 Questions",
        q10: "10 Questions",
        generateQuizBtn: "Générer le Quiz & Réponses ✍️",
        generatedQuestionBank: "Banque de Questions Générée",
        copyQuizBtn: "Copier le Quiz",
        quizPlaceholderText: "Entrez le sujet et cliquez sur 'Générer le Quiz'.",

        promptBuilderSettings: "Paramètres du Générateur de Prompt",
        selectAiModel: "Sélectionnez le Modèle IA Cible",
        selectGoal: "Objectif Pédagogique",
        lessonTopicLabel: "Sujet du Cours ou Concept Cible",
        gradeLevelLabel: "Niveau Scolaire",
        generatePromptBtn: "Générer le Prompt Magique 🚀",
        outputTitle: "Prompt Éducatif Cible",
        
        gptsSectionTitle: "Suite GPTs Personnalisés pour Enseignants",
        gptsSectionSub: "Des bots ChatGPT spécialisés pour générer des jeux, conseils et idées pédagogiques.",
        
        btnTryTool: "Essayer l'Outil",
        btnBrowseLib: "Parcourir",
        btnOpenGPT: "Ouvrir dans ChatGPT",
        copySuccess: "Copié avec succès !",
        generatingAI: "Génération par l'IA...",
        copyBtnText: "Copier le texte",
        logoutBtn: "Déconnexion",
        footerRights: "Tous droits réservés © 2026 - Creative Teaching From A To Z | Walaa Hassan | Microsoft Innovative Educator Expert"
    }
};

let currentLang = localStorage.getItem('glowLanguage') || 'ar';

document.addEventListener('DOMContentLoaded', () => {
    // Render language selector into tools headers if missing
    injectLanguageSelectorInToolHeader();
    applyLanguage(currentLang);
});

function injectLanguageSelectorInToolHeader() {
    const headerDiv = document.querySelector('header .max-w-7xl') || document.querySelector('header .max-w-4xl') || document.querySelector('header');
    if (headerDiv) {
        let langSelector = document.getElementById('languageSelector');
        if (!langSelector) {
            const container = document.createElement('div');
            container.id = 'dynamicLangSelectorContainer';
            container.className = 'flex items-center space-x-2 space-x-reverse';
            container.innerHTML = `
                <select id="languageSelector" onchange="changeLanguage(this.value)" class="bg-slate-900 border border-white/20 text-xs font-bold px-3 py-1.5 rounded-full text-slate-200 focus:outline-none focus:border-pink-500 cursor-pointer">
                    <option value="ar">العربية (Arabic)</option>
                    <option value="en">English</option>
                    <option value="fr">Français</option>
                </select>
            `;
            headerDiv.appendChild(container);
            langSelector = document.getElementById('languageSelector');
        }
        if (langSelector) {
            langSelector.value = currentLang;
        }
    }
}

function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('glowLanguage', lang);
    applyLanguage(lang);
    if (typeof autoTranslateToolPage === 'function') {
        autoTranslateToolPage(lang);
    }
    if (typeof updateLanguageUI === 'function') {
        updateLanguageUI();
    }
}

function applyLanguage(lang) {
    const dict = translations[lang] || translations.ar;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    // Fix space-x Tailwind directions for LTR vs RTL layout
    document.querySelectorAll('.space-x-reverse, .space-x-4, .space-x-3, .space-x-2, .space-x-8').forEach(el => {
        if (lang === 'ar') {
            el.classList.add('space-x-reverse');
        } else {
            el.classList.remove('space-x-reverse');
        }
    });

    // 1. Translate elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
            el.textContent = dict[key];
        }
    });

    // 2. Translate placeholders with data-i18n-placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (dict[key]) {
            el.placeholder = dict[key];
        }
    });

    // 3. Translate select options with data-i18n-option
    document.querySelectorAll('option[data-i18n-option]').forEach(el => {
        const key = el.getAttribute('data-i18n-option');
        if (dict[key]) {
            el.textContent = dict[key];
        }
    });

    // 4. Translate button values with data-i18n-value
    document.querySelectorAll('[data-i18n-value]').forEach(el => {
        const key = el.getAttribute('data-i18n-value');
        if (dict[key]) {
            el.value = dict[key];
        }
    });

    if (typeof autoTranslateToolPage === 'function') {
        autoTranslateToolPage(lang);
    }

    // Sync all language selectors on the page
    document.querySelectorAll('#languageSelector').forEach(sel => {
        sel.value = lang;
    });
}

// Global Web Audio API Synthesizer for Interactive Sound Effects
const PlaySound = {
    playClick: () => {
        try {
            const ctx = new (window.AudioContext || window.webkitAudioContext)();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(600, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.05);
            gain.gain.setValueAtTime(0.15, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start();
            osc.stop(ctx.currentTime + 0.05);
        } catch(e){}
    },
    playSuccess: () => {
        try {
            const ctx = new (window.AudioContext || window.webkitAudioContext)();
            const notes = [523.25, 659.25, 783.99]; // C5, E5, G5
            notes.forEach((freq, idx) => {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = 'triangle';
                osc.frequency.value = freq;
                gain.gain.setValueAtTime(0.2, ctx.currentTime + idx * 0.08);
                gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + idx * 0.08 + 0.15);
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start(ctx.currentTime + idx * 0.08);
                osc.stop(ctx.currentTime + idx * 0.08 + 0.15);
            });
        } catch(e){}
    }
};

// Global High Contrast Input & Button CSS Overrides Injection
(function injectGlobalContrastStyles() {
    const style = document.createElement('style');
    style.id = 'globalContrastOverrides';
    style.innerHTML = `
        /* Explicit high contrast for inputs, textareas, and select options */
        input[type="text"], input[type="number"], input[type="search"], textarea, select {
            color: #ffffff !important;
            background-color: #0f172a !important;
        }
        input::placeholder, textarea::placeholder {
            color: #94a3b8 !important;
        }
        select option {
            background-color: #0f172a !important;
            color: #ffffff !important;
        }
        /* Vibrant 3D Glowing Icon Container Style */
        .w-14.h-14, .w-16.h-16, .w-8.h-8, .tool-card .w-14, .w-24.h-24 {
            border: 2px solid rgba(255, 255, 255, 0.35) !important;
            background: linear-gradient(135deg, rgba(236, 72, 153, 0.25) 0%, rgba(139, 92, 246, 0.25) 50%, rgba(16, 185, 129, 0.25) 100%) !important;
            box-shadow: 0 10px 25px -3px rgba(236, 72, 153, 0.5), inset 0 2px 4px rgba(255, 255, 255, 0.4) !important;
            animation: iconPulseGlow 3s infinite alternate !important;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }
        .w-14.h-14 i, .w-16.h-16 i, .w-24.h-24 i, .tool-card .w-14 i {
            filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.5)) !important;
        }
        .tool-card:hover .w-14, .glass-card:hover .w-14, .glass-card:hover .w-16 {
            transform: translateY(-4px) scale(1.12) rotate(3deg) !important;
            box-shadow: 0 16px 35px rgba(236, 72, 153, 0.7), 0 0 25px rgba(16, 185, 129, 0.6), inset 0 2px 6px rgba(255, 255, 255, 0.6) !important;
            border-color: rgba(255, 255, 255, 0.7) !important;
        }
        @keyframes iconPulseGlow {
            0% {
                box-shadow: 0 6px 20px rgba(236, 72, 153, 0.4), 0 0 12px rgba(139, 92, 246, 0.3), inset 0 1px 2px rgba(255, 255, 255, 0.3);
            }
            50% {
                box-shadow: 0 14px 30px rgba(236, 72, 153, 0.7), 0 0 22px rgba(16, 185, 129, 0.5), inset 0 2px 4px rgba(255, 255, 255, 0.5);
            }
            100% {
                box-shadow: 0 6px 20px rgba(236, 72, 153, 0.4), 0 0 12px rgba(139, 92, 246, 0.3), inset 0 1px 2px rgba(255, 255, 255, 0.3);
            }
        }
        
        /* 3D Embossed Try Tool Buttons Style */
        .tool-card a {
            background: linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%) !important;
            color: #ffffff !important;
            border: 1.5px solid rgba(255, 255, 255, 0.3) !important;
            box-shadow: 0 8px 20px -3px rgba(236, 72, 153, 0.5), inset 0 1px 2px rgba(255, 255, 255, 0.4) !important;
            transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1) !important;
            font-weight: 800 !important;
        }
        .tool-card a:hover {
            transform: translateY(-3px) scale(1.02) !important;
            box-shadow: 0 14px 28px rgba(236, 72, 153, 0.7), 0 0 18px rgba(139, 92, 246, 0.5), inset 0 2px 4px rgba(255, 255, 255, 0.6) !important;
            border-color: rgba(255, 255, 255, 0.6) !important;
        }
        /* 3D Embossed Category Filter Buttons Style */
        .cat-filter-btn {
            border: 1.5px solid rgba(255, 255, 255, 0.2) !important;
            box-shadow: 0 6px 18px -2px rgba(0, 0, 0, 0.6), inset 0 1px 1px rgba(255, 255, 255, 0.3) !important;
            transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1) !important;
            font-weight: 800 !important;
        }
        .cat-filter-btn:hover {
            transform: translateY(-3px) scale(1.05) !important;
            box-shadow: 0 12px 25px rgba(236, 72, 153, 0.4), inset 0 1px 2px rgba(255, 255, 255, 0.5) !important;
            border-color: rgba(236, 72, 153, 0.6) !important;
        }
        .cat-filter-btn.active-cat, .cat-filter-btn.bg-pink-500 {
            background: linear-gradient(135deg, #ec4899 0%, #be185d 100%) !important;
            color: #ffffff !important;
            border-color: rgba(255, 255, 255, 0.5) !important;
            box-shadow: 0 10px 25px rgba(236, 72, 153, 0.6), 0 0 15px rgba(236, 72, 153, 0.4), inset 0 1px 2px rgba(255, 255, 255, 0.6) !important;
        }
        /* 3D Embossed Header Nav Buttons & Selectors */
        .nav-3d-btn, #languageSelector {
            background: rgba(15, 23, 42, 0.9) !important;
            border: 1.5px solid rgba(255, 255, 255, 0.15) !important;
            box-shadow: 0 4px 14px -2px rgba(0, 0, 0, 0.6), inset 0 1px 1px rgba(255, 255, 255, 0.25) !important;
            transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1) !important;
            backdrop-filter: blur(12px) !important;
        }
        .nav-3d-btn:hover, #languageSelector:hover {
            transform: translateY(-2px) scale(1.03) !important;
            border-color: rgba(236, 72, 153, 0.5) !important;
            box-shadow: 0 8px 20px rgba(236, 72, 153, 0.35), inset 0 1px 2px rgba(255, 255, 255, 0.4) !important;
        }
        /* Button filled purple style for maximum legibility */
        .btn-purple-glow {
            background: linear-gradient(135deg, #7e22ce 0%, #6b21a8 100%) !important;
            color: #ffffff !important;
            font-weight: 800 !important;
            box-shadow: 0 4px 15px rgba(126, 34, 206, 0.4) !important;
            transition: all 0.2s ease !important;
        }
        .btn-purple-glow:hover {
            transform: translateY(-2px) !important;
            box-shadow: 0 6px 20px rgba(126, 34, 206, 0.6) !important;
        }
    `;
    document.head.appendChild(style);
})();

// Attach click sound triggers to buttons and links globally
document.addEventListener('click', (e) => {
    if (e.target.closest('button, a, .btn-3d, .cat-filter-btn')) {
        PlaySound.playClick();
    }
});

// Interactive Tools Filter Function
function filterTools(category) {
    PlaySound.playClick();
    const cards = document.querySelectorAll('.tool-card');
    const buttons = document.querySelectorAll('.cat-filter-btn');

    buttons.forEach(btn => {
        if (btn.getAttribute('data-cat') === category) {
            btn.classList.add('bg-pink-500', 'text-white', 'border-pink-500/50', 'shadow-lg');
            btn.classList.remove('bg-slate-900/80', 'text-slate-300', 'border-white/10');
        } else {
            btn.classList.remove('bg-pink-500', 'text-white', 'border-pink-500/50', 'shadow-lg');
            btn.classList.add('bg-slate-900/80', 'text-slate-300', 'border-white/10');
        }
    });

    cards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        if (category === 'all' || cardCat === category) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

// Global AI generator helper
function generateAIResponse(buttonElement, resultContainerId, generatorCallback) {
    const dict = translations[currentLang] || translations.ar;
    const originalText = buttonElement.innerHTML;
    buttonElement.disabled = true;
    buttonElement.innerHTML = `<i class="fa-solid fa-spinner fa-spin mr-2"></i> ${dict.generatingAI}`;
    
    setTimeout(() => {
        const resultText = generatorCallback();
        PlaySound.playSuccess();
        const container = document.getElementById(resultContainerId);
        if (container && resultText) {
            container.innerHTML = `
                <div class="bg-slate-900 border border-slate-700 p-5 rounded-2xl text-slate-100 shadow-xl relative animate-fade-in">
                    <div class="flex justify-between items-center mb-3 pb-2 border-b border-slate-800">
                        <span class="text-xs font-bold text-pink-400">✨ ${dict.generatingAI}</span>
                        <button onclick="copyToClipboard('${resultText.replace(/'/g, "\\'")}')" class="btn-3d px-3 py-1 bg-pink-600 hover:bg-pink-500 text-white rounded-lg text-xs font-bold shadow flex items-center gap-1">
                            <i class="fa-solid fa-copy"></i>
                            <span>${dict.copyBtnText}</span>
                        </button>
                    </div>
                    <div class="whitespace-pre-wrap text-sm leading-relaxed">${resultText}</div>
                </div>
            `;
        }
        buttonElement.disabled = false;
        buttonElement.innerHTML = originalText;
    }, 800);
}

function copyToClipboard(text) {
    const dict = translations[currentLang] || translations.ar;
    navigator.clipboard.writeText(text).then(() => {
        PlaySound.playSuccess();
        showToast(dict.copySuccess);
    });
}

function showToast(message) {
    let toast = document.getElementById('globalToast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'globalToast';
        toast.className = 'fixed bottom-6 left-6 z-50 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-extrabold text-sm px-6 py-3 rounded-2xl shadow-2xl transition duration-300 opacity-0 transform translate-y-4';
        document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.remove('opacity-0', 'translate-y-4');
    toast.classList.add('opacity-100', 'translate-y-0');
    setTimeout(() => {
        toast.classList.remove('opacity-100', 'translate-y-0');
        toast.classList.add('opacity-0', 'translate-y-4');
    }, 2500);
}
