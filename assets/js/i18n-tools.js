/**
 * i18n-tools.js - Comprehensive Auto-Translation Engine for ALL Tool Pages
 * Walks the DOM and translates Arabic text → English/French automatically.
 * Loaded AFTER app.js in every tool page.
 */

const toolsTranslations = {
    en: {
        // ── Common / Shared ──
        'العودة للرئيسية': 'Back to Home',
        'خروج': 'Sign Out',
        'تسجيل الخروج': 'Sign Out',
        'هل ترغبين في تسجيل الخروج من الحساب؟': 'Do you want to sign out?',

        // ── Lesson Planner ──
        'مساعد تحضير الدروس الذكي': 'Smart Lesson Planner',
        'بيانات الدرس': 'Lesson Details',
        'المادة الدراسية': 'Subject',
        'عنوان الدرس': 'Lesson Title',
        'الصف الدراسي': 'Grade Level',
        'زمن الدرس': 'Lesson Duration',
        'ملاحظات أو تركيز خاص (اختياري)': 'Notes or Special Focus (Optional)',
        'توليد تحضير الدرس بالذكاء الاصطناعي ✨': 'Generate Lesson Plan with AI ✨',
        'نموذج التحضير المولد': 'Generated Lesson Plan',
        'نسخ التحضير': 'Copy Plan',
        'الصف الأول الابتدائي': 'Grade 1 (Primary)',
        'الصف الثاني الابتدائي': 'Grade 2 (Primary)',
        'الصف الثالث الابتدائي': 'Grade 3 (Primary)',
        'الصف الرابع الابتدائي': 'Grade 4 (Primary)',
        'الصف الخامس الابتدائي': 'Grade 5 (Primary)',
        'الصف السادس الابتدائي': 'Grade 6 (Primary)',
        'الصف الأول المتوسط': 'Grade 7 (Middle School)',
        'الصف الثاني المتوسط': 'Grade 8 (Middle School)',
        'الصف الثالث المتوسط': 'Grade 9 (Middle School)',
        'المرحلة الثانوية': 'High School',
        '45 دقيقة (حصة واحدة)': '45 Minutes (Single Period)',
        '90 دقيقة (حصتان)': '90 Minutes (Double Period)',
        'قومي بتعبئة بيانات الدرس على اليمين ثم اضغطي على "توليد تحضير الدرس".': 'Fill in lesson details and click "Generate Lesson Plan".',

        // ── EduPrompt ──
        'مولد المطالبات التعليمية الاحترافي (EduPrompt)': 'Professional Prompt Builder (EduPrompt)',
        'إعدادات المطالبة (Prompt Builder)': 'Prompt Builder Settings',
        'اختر نموذج الذكاء الاصطناعي المستهدف': 'Select Target AI Model',
        'الهدف من المطالبة (الوسيلة التعليمية)': 'Prompt Goal (Teaching Method)',
        'الموضوع / المحتوى التعليمي': 'Topic / Educational Content',
        'الفئة العمرية / الصف الدراسي': 'Age Group / Grade Level',
        'توليد المطالبة الاحترافية 🪄': 'Generate Professional Prompt 🪄',
        'المطالبة المجهزة (Prompt Output)': 'Generated Prompt Output',
        'حدد هدف وموضوع المطالبة واضغط على "توليد المطالبة الاحترافية".': 'Select goal and topic, then click "Generate Professional Prompt".',
        '📖 قصة تعليمية مبسطة لشرح مفهوم معقد': '📖 Simplified Educational Story',
        '💡 نشاط تفاعلي وعصف ذهني للطالبات': '💡 Interactive Activity & Brainstorming',
        '🃏 بطاقات أسئلة ومراجعة ختامية': '🃏 Question Cards & Final Review',
        '📊 جدول مقارنة واستنتاج بين مفهومين': '📊 Comparison Table Between Two Concepts',
        '🎨 فكرة مشروع أو نشاط صفّي إبداعي': '🎨 Creative Project or Classroom Activity',
        'الصفوف الأولية (1 - 3 ابتدائي)': 'Lower Primary (Grades 1-3)',
        'الصفوف العليا (4 - 6 ابتدائي)': 'Upper Primary (Grades 4-6)',
        'المرحلة المتوسطة': 'Middle School',

        // ── Quiz Generator ──
        'صانع الاختبارات وبنوك الأسئلة الذكي (Smart Quiz Creator)': 'Smart Quiz Creator',
        'إعدادات بنك الأسئلة': 'Question Bank Settings',
        'موضوع / محتوى الدرس': 'Lesson Topic / Content',
        'نوع الأسئلة': 'Question Type',
        'اختيار من متعدد': 'Multiple Choice',
        'صح وخطأ': 'True / False',
        'أسئلة مقالية قصيرة': 'Short Essay Questions',
        'مزيج متنوع': 'Mixed Format',
        'عدد الأسئلة': 'Question Count',
        '3 أسئلة': '3 Questions',
        '5 أسئلة': '5 Questions',
        '10 أسئلة': '10 Questions',
        'توليد الاختبار بنمط إجابة نموذجية ✍️': 'Generate Quiz & Model Answer ✍️',
        'بنك الأسئلة المولد': 'Generated Question Bank',
        'نسخ الاختبار': 'Copy Quiz',

        // ── Rubric Generator ──
        'مولد مقاييس التقدير ومصفوفات التقييم (Rubric Generator AI)': 'Rubric Generator AI',
        'إعدادات مصفوفة التقييم (الروبرك)': 'Rubric Settings',
        'عنوان المشروع / المهمة الأدائية': 'Project / Performance Task Title',
        'الصف / المرحلة الدراسية': 'Grade Level',
        'مستويات الأداء والتقييم': 'Performance Levels',
        'معايير التقييم المطلوبة': 'Required Assessment Criteria',
        'إنشاء مصفوفة التقييم فوراً 📊': 'Generate Rubric Now 📊',
        'مصفوفة التقييم المعتمدة': 'Approved Assessment Rubric',
        'نسخ جدول التقييم': 'Copy Rubric Table',
        'المرحلة الابتدائية (الصفوف الأولى)': 'Primary (Lower Grades)',
        'المرحلة الابتدائية (الصفوف العليا)': 'Primary (Upper Grades)',
        '4 مستويات (ممتاز، جيد جداً، جيد، بحاجة لدعم)': '4 Levels (Excellent, Very Good, Good, Needs Support)',
        '3 مستويات (متمكن، متمكن جزئياً، غير متمكن)': '3 Levels (Proficient, Partially Proficient, Not Proficient)',
        'أدخلي بيانات المهمة واضغطي على زر التوليد لعرض جدول الروبرك المتكامل.': 'Enter task details and click generate to display the rubric table.',

        // ── Worksheet Generator ──
        'مولّد أوراق العمل التفاعلية': 'Interactive Worksheet Generator',
        'مولّد أوراق العمل التفاعلية (Gemini Worksheets Gem)': 'Interactive Worksheet Generator (Gemini Worksheets Gem)',
        '📄 مساعد الذكاء الاصطناعي المباشر': '📄 Direct AI Assistant',
        'الانتقال والدخول لمولّد أوراق العمل على Gemini 🚀': 'Open Worksheet Generator on Gemini 🚀',
        'ينقلك هذا الرابط مباشرة إلى مساعد تصميم أوراق العمل المعتمَد لبدء توليد الأنشطة والتمارين المباشرة.': 'This link takes you directly to the worksheet design assistant to start generating activities.',

        // ── Remedial & Enrichment ──
        'مولد خطط العلاجي والإثرائي (Remedial AI)': 'Remedial & Enrichment Plan Generator',
        'إعدادات الخطة العلاجية / الإثرائية': 'Remedial / Enrichment Plan Settings',
        'نوع الخطة': 'Plan Type',
        'خطة علاجية': 'Remedial Plan',
        'خطة إثرائية': 'Enrichment Plan',
        'المادة والمفهوم المستهدف': 'Subject & Target Concept',
        'توليد الخطة العلاجية / الإثرائية 🚀': 'Generate Remedial / Enrichment Plan 🚀',
        'الخطة العلاجية / الإثرائية المولدة': 'Generated Remedial / Enrichment Plan',
        'نسخ الخطة': 'Copy Plan',

        // ── Exam Simulator ──
        'محاكي الاختبارات الرقمية (ExamSim AI)': 'Digital Exam Simulator (ExamSim AI)',
        'إعدادات الاختبار التجريبي': 'Practice Exam Settings',
        'توليد الاختبار التجريبي 📝': 'Generate Practice Exam 📝',
        'نتيجة الاختبار التجريبي': 'Practice Exam Results',
        'نسخ النتيجة': 'Copy Result',

        // ── Parent Reports ──
        'مولد تقارير أولياء الأمور الذكي': 'Smart Parent Reports Generator',
        'إعدادات التقرير': 'Report Settings',
        'اسم الطالب/ة': 'Student Name',
        'مستوى الأداء العام': 'Overall Performance Level',
        'ممتاز': 'Excellent',
        'جيد جداً': 'Very Good',
        'جيد': 'Good',
        'مقبول': 'Acceptable',
        'بحاجة لتحسين': 'Needs Improvement',
        'توليد التقرير 📋': 'Generate Report 📋',
        'تقرير ولي الأمر المولد': 'Generated Parent Report',
        'نسخ التقرير': 'Copy Report',

        // ── EduChat ──
        'المعلم الذكي - المساعد التربوي (EduChat AI)': 'Smart Teacher - Educational Assistant (EduChat AI)',
        'اختر مجال الاستشارة أو الخدمة المطلوبة': 'Select Consulting Area',
        'اكتبي استفساركِ أو السؤال التربوي هنا...': 'Write your educational question here...',
        'إرسال والاستشارة الآن 💬': 'Send & Consult Now 💬',
        'المرشد والمستشار التربوي (EduAdvisor AI)': 'Educational Advisor (EduAdvisor AI)',

        // ── EduGraph ──
        'مولد الرسوم البيانية التعليمية (EduGraph AI)': 'Educational Chart Generator (EduGraph AI)',
        'إعدادات الرسم البياني': 'Chart Settings',
        'نوع الرسم البياني': 'Chart Type',
        'توليد الرسم البياني 📊': 'Generate Chart 📊',
        'الرسم البياني المولد': 'Generated Chart',

        // ── EduTranslate ──
        'المترجم التعليمي الذكي (EduTranslate AI)': 'Smart Educational Translator (EduTranslate AI)',

        // ── SlideCraft ──
        'صانع العروض التقديمية (SlideCraft AI)': 'Presentation Maker (SlideCraft AI)',
        'إعدادات العرض التقديمي': 'Presentation Settings',
        'موضوع العرض التقديمي': 'Presentation Topic',
        'عدد الشرائح': 'Number of Slides',
        'توليد العرض التقديمي 🎨': 'Generate Presentation 🎨',
        'العرض التقديمي المولد': 'Generated Presentation',
        'نسخ العرض': 'Copy Presentation',

        // ── Canvas / Whiteboard ──
        'مصمم اللوحة التفاعلية (EduCanvas Pro)': 'Interactive Board Designer (EduCanvas Pro)',
        'السبورة البيضاء الذكية': 'Smart Whiteboard',

        // ── Timer ──
        'مؤقت الحصة والنشاط (ClassTimer Pro)': 'Class & Activity Timer (ClassTimer Pro)',

        // ── Student Picker ──
        'منتقي الطالبات العشوائي (Student Picker)': 'Random Student Picker',

        // ── Compare ──
        'مقارن المفاهيم التعليمية (EduCompare AI)': 'Educational Concept Comparator (EduCompare AI)',
        'إعدادات المقارنة': 'Comparison Settings',
        'المفهوم الأول': 'First Concept',
        'المفهوم الثاني': 'Second Concept',
        'توليد المقارنة 📊': 'Generate Comparison 📊',
        'جدول المقارنة المولد': 'Generated Comparison Table',
        'نسخ المقارنة': 'Copy Comparison',

        // ── Grades ──
        'حاسبة الدرجات والنسب (GradeCalc Pro)': 'Grade & Percentage Calculator (GradeCalc Pro)',

        // ── School Radio ──
        'إذاعة مدرسية ذكية (SchoolRadio AI)': 'Smart School Radio (SchoolRadio AI)',
        'إعدادات الإذاعة': 'Radio Settings',
        'موضوع الإذاعة': 'Radio Topic',
        'توليد فقرات الإذاعة ✨': 'Generate Radio Segments ✨',
        'فقرات الإذاعة المولدة': 'Generated Radio Segments',
        'نسخ الإذاعة': 'Copy Radio Script',

        // ── 1000 Prompts ──
        'بنك المطالبات التعليمية (1000+ Prompt)': 'Educational Prompt Bank (1000+ Prompts)',

        // ── Live ──
        'البث المباشر التعليمي (EduLive)': 'Educational Live Stream (EduLive)',

        // ── TechRadar ──
        'رادار التقنيات التعليمية (TechRadar)': 'Educational Tech Radar (TechRadar)',

        // ── Image Tools ──
        'مساعد الصور الذكي (ImageAssist AI)': 'Smart Image Assistant (ImageAssist AI)',
        'محول الصور إلى PDF (IMG2PDF)': 'Image to PDF Converter (IMG2PDF)',
        'استخراج النصوص من الصور (IMG2TXT)': 'Extract Text from Images (IMG2TXT)',
        'ضغط الصور (TinyImg)': 'Image Compressor (TinyImg)',
        'تحويل نص إلى صورة (TXT2IMG)': 'Text to Image Converter (TXT2IMG)',

        // ── PDF Tools ──
        'أدوات PDF الذكية': 'Smart PDF Tools',

        // ── Video Creator ──
        'صانع الفيديوهات التعليمية (VideoCreator AI)': 'Educational Video Creator (VideoCreator AI)',

        // ── QR Link ──
        'مولد رموز QR (QRLink Pro)': 'QR Code Generator (QRLink Pro)',

        // ── Run HTML ──
        'معاينة HTML المباشرة (RunHTML)': 'Live HTML Preview (RunHTML)',

        // ── PixlCare ──
        'محرر الصور الاحترافي (PixlCare)': 'Professional Image Editor (PixlCare)',

        // ── SmartDict ──
        'المُعجِم الذكي': 'Smart Dictionary',

        // ── BioVision ──
        'مختبر الأحياء والتجارب (BioVision AI)': 'Biology Lab & Experiments (BioVision AI)',
        '🔬 مساعد Gemini المباشر': '🔬 Direct Gemini Assistant',
        'الانتقال لمختبر BioVision على Gemini 🚀': 'Open BioVision Lab on Gemini 🚀',

        // ── Common Buttons & Labels ──
        'نسخ': 'Copy',
        'نسخ النص': 'Copy Text',
        'تم النسخ بنجاح!': 'Copied successfully!',
        'جاري التوليد بالذكاء الاصطناعي...': 'Generating with AI...',
        'نسخ النتيجة': 'Copy Result',
        'إرسال': 'Send',
        'تحميل': 'Download',
        'إعادة': 'Reset',
        'حفظ': 'Save',
        'مسح': 'Clear',
        'إغلاق': 'Close',
        'تأكيد': 'Confirm',
        'إلغاء': 'Cancel',
        'تطبيق': 'Apply',
        'بحث': 'Search',
        'تصدير': 'Export',
        'طباعة': 'Print',
        'رجوع': 'Back',

        // ── Placeholders ──
        'مثال: لغتي الخالدة، العلوم، الرياضيات...': 'e.g., Language Arts, Science, Math...',
        'مثال: الضوء وخصائصه، الفعل المضارع...': 'e.g., Properties of Light, Present Tense...',
        'مثال: التركيز على استراتيجية التفكير الناقد، دمج الوسائل الرقمية...': 'e.g., Focus on critical thinking strategies...',
        'مثال: دورة حياة الماء، الجهاز الهضمي، أركان الإيمان...': 'e.g., Water Cycle, Digestive System...',
        'مثال: مشروع تصميم مجسم خلية، عرض تقديمي، مقال علمي...': 'e.g., Cell model project, Presentation, Scientific essay...',
        'مثال: دقة المعلومات، جودة التصميم والترتيب، الإلقاء والعرض، الالتزام بالوقت...': 'e.g., Information accuracy, Design quality, Presentation skills, Time management...',
        'اكتب موضوع الدرس أو النص لتوليد بنك أسئلة ذكي...': 'Enter lesson topic or text to generate a smart question bank...',

        // ── Confirm dialogs ──
        'تم ربط هذه الأداة بمساعد': 'This tool is linked to an assistant',
    },

    fr: {
        // ── Common / Shared ──
        'العودة للرئيسية': 'Retour à l\'Accueil',
        'خروج': 'Déconnexion',
        'تسجيل الخروج': 'Déconnexion',
        'هل ترغبين في تسجيل الخروج من الحساب؟': 'Voulez-vous vous déconnecter ?',

        // ── Lesson Planner ──
        'مساعد تحضير الدروس الذكي': 'Assistant Intelligent de Planification',
        'بيانات الدرس': 'Détails du Cours',
        'المادة الدراسية': 'Matière',
        'عنوان الدرس': 'Titre du Cours',
        'الصف الدراسي': 'Niveau Scolaire',
        'زمن الدرس': 'Durée du Cours',
        'ملاحظات أو تركيز خاص (اختياري)': 'Notes ou Focus Spécial (Optionnel)',
        'توليد تحضير الدرس بالذكاء الاصطناعي ✨': 'Générer le Plan de Cours avec l\'IA ✨',
        'نموذج التحضير المولد': 'Plan de Cours Généré',
        'نسخ التحضير': 'Copier le Plan',
        'الصف الأول الابتدائي': '1ère Année Primaire',
        'الصف الثاني الابتدائي': '2ème Année Primaire',
        'الصف الثالث الابتدائي': '3ème Année Primaire',
        'الصف الرابع الابتدائي': '4ème Année Primaire',
        'الصف الخامس الابتدائي': '5ème Année Primaire',
        'الصف السادس الابتدائي': '6ème Année Primaire',
        'الصف الأول المتوسط': '1ère Année Collège',
        'الصف الثاني المتوسط': '2ème Année Collège',
        'الصف الثالث المتوسط': '3ème Année Collège',
        'المرحلة الثانوية': 'Lycée',
        '45 دقيقة (حصة واحدة)': '45 Minutes (Un Cours)',
        '90 دقيقة (حصتان)': '90 Minutes (Deux Cours)',
        'قومي بتعبئة بيانات الدرس على اليمين ثم اضغطي على "توليد تحضير الدرس".': 'Remplissez les détails et cliquez sur "Générer le Plan".',

        // ── EduPrompt ──
        'مولد المطالبات التعليمية الاحترافي (EduPrompt)': 'Générateur de Prompts Pédagogiques (EduPrompt)',
        'إعدادات المطالبة (Prompt Builder)': 'Paramètres du Prompt',
        'اختر نموذج الذكاء الاصطناعي المستهدف': 'Sélectionner le Modèle IA',
        'الهدف من المطالبة (الوسيلة التعليمية)': 'Objectif du Prompt',
        'الموضوع / المحتوى التعليمي': 'Sujet / Contenu Éducatif',
        'الفئة العمرية / الصف الدراسي': 'Tranche d\'Âge / Niveau',
        'توليد المطالبة الاحترافية 🪄': 'Générer le Prompt Professionnel 🪄',
        'المطالبة المجهزة (Prompt Output)': 'Prompt Généré',
        'حدد هدف وموضوع المطالبة واضغط على "توليد المطالبة الاحترافية".': 'Sélectionnez l\'objectif et cliquez sur "Générer le Prompt".',
        '📖 قصة تعليمية مبسطة لشرح مفهوم معقد': '📖 Histoire Éducative Simplifiée',
        '💡 نشاط تفاعلي وعصف ذهني للطالبات': '💡 Activité Interactive & Remue-méninges',
        '🃏 بطاقات أسئلة ومراجعة ختامية': '🃏 Cartes de Questions & Révision',
        '📊 جدول مقارنة واستنتاج بين مفهومين': '📊 Tableau Comparatif Entre Deux Concepts',
        '🎨 فكرة مشروع أو نشاط صفّي إبداعي': '🎨 Projet Créatif ou Activité de Classe',
        'الصفوف الأولية (1 - 3 ابتدائي)': 'Primaire Inférieur (1-3)',
        'الصفوف العليا (4 - 6 ابتدائي)': 'Primaire Supérieur (4-6)',
        'المرحلة المتوسطة': 'Collège',

        // ── Quiz Generator ──
        'صانع الاختبارات وبنوك الأسئلة الذكي (Smart Quiz Creator)': 'Créateur de Quiz Intelligent',
        'إعدادات بنك الأسئلة': 'Paramètres des Questions',
        'موضوع / محتوى الدرس': 'Sujet / Contenu du Cours',
        'نوع الأسئلة': 'Type de Questions',
        'اختيار من متعدد': 'Choix Multiples',
        'صح وخطأ': 'Vrai / Faux',
        'أسئلة مقالية قصيرة': 'Questions à Réponse Courte',
        'مزيج متنوع': 'Format Mixte',
        'عدد الأسئلة': 'Nombre de Questions',
        '3 أسئلة': '3 Questions',
        '5 أسئلة': '5 Questions',
        '10 أسئلة': '10 Questions',
        'توليد الاختبار بنمط إجابة نموذجية ✍️': 'Générer le Quiz ✍️',
        'بنك الأسئلة المولد': 'Banque de Questions Générée',
        'نسخ الاختبار': 'Copier le Quiz',

        // ── Rubric Generator ──
        'مولد مقاييس التقدير ومصفوفات التقييم (Rubric Generator AI)': 'Générateur de Rubriques (Rubric Generator AI)',
        'إعدادات مصفوفة التقييم (الروبرك)': 'Paramètres de la Rubrique',
        'عنوان المشروع / المهمة الأدائية': 'Titre du Projet / Tâche',
        'الصف / المرحلة الدراسية': 'Niveau Scolaire',
        'مستويات الأداء والتقييم': 'Niveaux de Performance',
        'معايير التقييم المطلوبة': 'Critères d\'Évaluation Requis',
        'إنشاء مصفوفة التقييم فوراً 📊': 'Générer la Rubrique 📊',
        'مصفوفة التقييم المعتمدة': 'Rubrique d\'Évaluation',
        'نسخ جدول التقييم': 'Copier la Rubrique',
        'المرحلة الابتدائية (الصفوف الأولى)': 'Primaire (Premiers Niveaux)',
        'المرحلة الابتدائية (الصفوف العليا)': 'Primaire (Niveaux Supérieurs)',
        '4 مستويات (ممتاز، جيد جداً، جيد، بحاجة لدعم)': '4 Niveaux (Excellent, Très Bien, Bien, À Améliorer)',
        '3 مستويات (متمكن، متمكن جزئياً، غير متمكن)': '3 Niveaux (Maîtrisé, Partiellement, Non Maîtrisé)',
        'أدخلي بيانات المهمة واضغطي على زر التوليد لعرض جدول الروبرك المتكامل.': 'Entrez les détails et cliquez sur "Générer" pour afficher la rubrique.',

        // ── Worksheet Generator ──
        'مولّد أوراق العمل التفاعلية': 'Générateur de Fiches de Travail',
        'مولّد أوراق العمل التفاعلية (Gemini Worksheets Gem)': 'Générateur de Fiches (Gemini Worksheets Gem)',
        '📄 مساعد الذكاء الاصطناعي المباشر': '📄 Assistant IA Direct',
        'الانتقال والدخول لمولّد أوراق العمل على Gemini 🚀': 'Ouvrir le Générateur de Fiches sur Gemini 🚀',
        'ينقلك هذا الرابط مباشرة إلى مساعد تصميم أوراق العمل المعتمَد لبدء توليد الأنشطة والتمارين المباشرة.': 'Ce lien vous mène directement à l\'assistant de conception de fiches.',

        // ── Remedial & Enrichment ──
        'مولد خطط العلاجي والإثرائي (Remedial AI)': 'Générateur de Plans de Remédiation (Remedial AI)',
        'إعدادات الخطة العلاجية / الإثرائية': 'Paramètres du Plan',
        'نوع الخطة': 'Type de Plan',
        'خطة علاجية': 'Plan de Remédiation',
        'خطة إثرائية': 'Plan d\'Enrichissement',
        'المادة والمفهوم المستهدف': 'Matière et Concept Ciblé',
        'توليد الخطة العلاجية / الإثرائية 🚀': 'Générer le Plan 🚀',
        'الخطة العلاجية / الإثرائية المولدة': 'Plan Généré',
        'نسخ الخطة': 'Copier le Plan',

        // ── Exam Simulator ──
        'محاكي الاختبارات الرقمية (ExamSim AI)': 'Simulateur d\'Examens (ExamSim AI)',
        'إعدادات الاختبار التجريبي': 'Paramètres de l\'Examen',
        'توليد الاختبار التجريبي 📝': 'Générer l\'Examen 📝',
        'نتيجة الاختبار التجريبي': 'Résultats de l\'Examen',
        'نسخ النتيجة': 'Copier le Résultat',

        // ── Parent Reports ──
        'مولد تقارير أولياء الأمور الذكي': 'Générateur de Rapports pour Parents',
        'إعدادات التقرير': 'Paramètres du Rapport',
        'اسم الطالب/ة': 'Nom de l\'Élève',
        'مستوى الأداء العام': 'Niveau de Performance',
        'ممتاز': 'Excellent',
        'جيد جداً': 'Très Bien',
        'جيد': 'Bien',
        'مقبول': 'Acceptable',
        'بحاجة لتحسين': 'À Améliorer',
        'توليد التقرير 📋': 'Générer le Rapport 📋',
        'تقرير ولي الأمر المولد': 'Rapport Généré',
        'نسخ التقرير': 'Copier le Rapport',

        // ── EduChat ──
        'المعلم الذكي - المساعد التربوي (EduChat AI)': 'Assistant Pédagogique Intelligent (EduChat AI)',
        'اختر مجال الاستشارة أو الخدمة المطلوبة': 'Domaine de Consultation',
        'اكتبي استفساركِ أو السؤال التربوي هنا...': 'Posez votre question ici...',
        'إرسال والاستشارة الآن 💬': 'Envoyer & Consulter 💬',
        'المرشد والمستشار التربوي (EduAdvisor AI)': 'Conseiller Pédagogique (EduAdvisor AI)',

        // ── EduGraph ──
        'مولد الرسوم البيانية التعليمية (EduGraph AI)': 'Générateur de Graphiques (EduGraph AI)',
        'إعدادات الرسم البياني': 'Paramètres du Graphique',
        'نوع الرسم البياني': 'Type de Graphique',
        'توليد الرسم البياني 📊': 'Générer le Graphique 📊',
        'الرسم البياني المولد': 'Graphique Généré',

        // ── EduTranslate ──
        'المترجم التعليمي الذكي (EduTranslate AI)': 'Traducteur Éducatif (EduTranslate AI)',

        // ── SlideCraft ──
        'صانع العروض التقديمية (SlideCraft AI)': 'Créateur de Présentations (SlideCraft AI)',
        'إعدادات العرض التقديمي': 'Paramètres de Présentation',
        'موضوع العرض التقديمي': 'Sujet de Présentation',
        'عدد الشرائح': 'Nombre de Diapositives',
        'توليد العرض التقديمي 🎨': 'Générer la Présentation 🎨',
        'العرض التقديمي المولد': 'Présentation Générée',
        'نسخ العرض': 'Copier la Présentation',

        // ── Canvas / Whiteboard ──
        'مصمم اللوحة التفاعلية (EduCanvas Pro)': 'Tableau Interactif (EduCanvas Pro)',
        'السبورة البيضاء الذكية': 'Tableau Blanc Intelligent',

        // ── Timer ──
        'مؤقت الحصة والنشاط (ClassTimer Pro)': 'Minuteur de Classe (ClassTimer Pro)',

        // ── Student Picker ──
        'منتقي الطالبات العشوائي (Student Picker)': 'Sélecteur d\'Élèves Aléatoire',

        // ── Compare ──
        'مقارن المفاهيم التعليمية (EduCompare AI)': 'Comparateur de Concepts (EduCompare AI)',
        'إعدادات المقارنة': 'Paramètres de Comparaison',
        'المفهوم الأول': 'Premier Concept',
        'المفهوم الثاني': 'Deuxième Concept',
        'توليد المقارنة 📊': 'Générer la Comparaison 📊',
        'جدول المقارنة المولد': 'Tableau de Comparaison Généré',
        'نسخ المقارنة': 'Copier la Comparaison',

        // ── Grades ──
        'حاسبة الدرجات والنسب (GradeCalc Pro)': 'Calculateur de Notes (GradeCalc Pro)',

        // ── School Radio ──
        'إذاعة مدرسية ذكية (SchoolRadio AI)': 'Radio Scolaire Intelligente (SchoolRadio AI)',
        'إعدادات الإذاعة': 'Paramètres de la Radio',
        'موضوع الإذاعة': 'Sujet de la Radio',
        'توليد فقرات الإذاعة ✨': 'Générer les Segments ✨',
        'فقرات الإذاعة المولدة': 'Segments Radio Générés',
        'نسخ الإذاعة': 'Copier le Script Radio',

        // ── 1000 Prompts ──
        'بنك المطالبات التعليمية (1000+ Prompt)': 'Banque de Prompts (1000+ Prompts)',

        // ── Live ──
        'البث المباشر التعليمي (EduLive)': 'Diffusion en Direct (EduLive)',

        // ── TechRadar ──
        'رادار التقنيات التعليمية (TechRadar)': 'Radar des Technologies (TechRadar)',

        // ── Image Tools ──
        'مساعد الصور الذكي (ImageAssist AI)': 'Assistant Image (ImageAssist AI)',
        'محول الصور إلى PDF (IMG2PDF)': 'Convertisseur Images en PDF (IMG2PDF)',
        'استخراج النصوص من الصور (IMG2TXT)': 'Extraction de Texte (IMG2TXT)',
        'ضغط الصور (TinyImg)': 'Compresseur d\'Images (TinyImg)',
        'تحويل نص إلى صورة (TXT2IMG)': 'Texte en Image (TXT2IMG)',

        // ── PDF Tools ──
        'أدوات PDF الذكية': 'Outils PDF Intelligents',

        // ── Video Creator ──
        'صانع الفيديوهات التعليمية (VideoCreator AI)': 'Créateur de Vidéos (VideoCreator AI)',

        // ── QR Link ──
        'مولد رموز QR (QRLink Pro)': 'Générateur de QR Code (QRLink Pro)',

        // ── Run HTML ──
        'معاينة HTML المباشرة (RunHTML)': 'Aperçu HTML en Direct (RunHTML)',

        // ── PixlCare ──
        'محرر الصور الاحترافي (PixlCare)': 'Éditeur d\'Images Pro (PixlCare)',

        // ── SmartDict ──
        'المُعجِم الذكي': 'Dictionnaire Intelligent',

        // ── BioVision ──
        'مختبر الأحياء والتجارب (BioVision AI)': 'Laboratoire de Biologie (BioVision AI)',
        '🔬 مساعد Gemini المباشر': '🔬 Assistant Gemini Direct',
        'الانتقال لمختبر BioVision على Gemini 🚀': 'Ouvrir BioVision sur Gemini 🚀',

        // ── Common Buttons & Labels ──
        'نسخ': 'Copier',
        'نسخ النص': 'Copier le Texte',
        'تم النسخ بنجاح!': 'Copié avec succès !',
        'جاري التوليد بالذكاء الاصطناعي...': 'Génération par l\'IA...',
        'نسخ النتيجة': 'Copier le Résultat',
        'إرسال': 'Envoyer',
        'تحميل': 'Télécharger',
        'إعادة': 'Réinitialiser',
        'حفظ': 'Enregistrer',
        'مسح': 'Effacer',
        'إغلاق': 'Fermer',
        'تأكيد': 'Confirmer',
        'إلغاء': 'Annuler',
        'تطبيق': 'Appliquer',
        'بحث': 'Rechercher',
        'تصدير': 'Exporter',
        'طباعة': 'Imprimer',
        'رجوع': 'Retour',

        // ── Placeholders ──
        'مثال: لغتي الخالدة، العلوم، الرياضيات...': 'ex: Langue, Sciences, Mathématiques...',
        'مثال: الضوء وخصائصه، الفعل المضارع...': 'ex: Propriétés de la lumière, Le présent...',
        'مثال: التركيز على استراتيجية التفكير الناقد، دمج الوسائل الرقمية...': 'ex: Stratégies de pensée critique...',
        'مثال: دورة حياة الماء، الجهاز الهضمي، أركان الإيمان...': 'ex: Cycle de l\'eau, Appareil digestif...',
        'مثال: مشروع تصميم مجسم خلية، عرض تقديمي، مقال علمي...': 'ex: Modèle cellulaire, Présentation, Essai scientifique...',
        'مثال: دقة المعلومات، جودة التصميم والترتيب، الإلقاء والعرض، الالتزام بالوقت...': 'ex: Précision, Qualité du design, Présentation, Ponctualité...',
        'اكتب موضوع الدرس أو النص لتوليد بنك أسئلة ذكي...': 'Entrez le sujet pour générer les questions...',

        // ── Confirm dialogs ──
        'تم ربط هذه الأداة بمساعد': 'Cet outil est lié à un assistant',
    }
};

/**
 * Walk the DOM and auto-translate Arabic text nodes and attributes
 */
function autoTranslateToolPage(lang) {
    const targetLang = lang || localStorage.getItem('glowLanguage') || 'ar';
    document.documentElement.lang = targetLang;
    document.documentElement.dir = targetLang === 'ar' ? 'rtl' : 'ltr';

    // 1. Fix space-x classes
    document.querySelectorAll('.space-x-reverse, .space-x-4, .space-x-3, .space-x-2, .space-x-8').forEach(el => {
        if (targetLang === 'ar') {
            el.classList.add('space-x-reverse');
        } else {
            el.classList.remove('space-x-reverse');
        }
    });

    const dict = toolsTranslations[targetLang];

    // 2. TreeWalker for all visible text nodes
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
        acceptNode: function(node) {
            const parent = node.parentElement;
            if (!parent) return NodeFilter.FILTER_REJECT;
            const tag = parent.tagName.toLowerCase();
            if (tag === 'script' || tag === 'style' || tag === 'noscript') return NodeFilter.FILTER_REJECT;
            if (!node.textContent || !node.textContent.trim()) return NodeFilter.FILTER_REJECT;
            return NodeFilter.FILTER_ACCEPT;
        }
    });

    const textNodes = [];
    while (walker.nextNode()) {
        textNodes.push(walker.currentNode);
    }

    textNodes.forEach(node => {
        const raw = node.textContent;
        const trimmed = raw.trim();
        if (!trimmed) return;

        if (node._origText === undefined) {
            node._origText = trimmed;
            node._origRaw = raw;
        }

        if (targetLang === 'ar') {
            if (node._origRaw !== undefined) {
                node.textContent = node._origRaw;
            }
        } else if (dict) {
            const orig = node._origText;
            if (dict[orig]) {
                node.textContent = raw.replace(trimmed, dict[orig]);
            } else {
                // Check if any key in dictionary is contained in orig or matches loosely
                for (const [k, v] of Object.entries(dict)) {
                    if (orig === k || orig.replace(/\s+/g, ' ') === k.replace(/\s+/g, ' ')) {
                        node.textContent = raw.replace(trimmed, v);
                        break;
                    }
                }
            }
        }
    });

    // 3. Translate select option text directly
    document.querySelectorAll('select option').forEach(opt => {
        const trimmed = opt.textContent.trim();
        if (!trimmed) return;

        if (opt.dataset.origText === undefined) {
            opt.dataset.origText = trimmed;
        }

        if (targetLang === 'ar') {
            opt.textContent = opt.dataset.origText;
        } else if (dict) {
            const orig = opt.dataset.origText;
            if (dict[orig]) {
                opt.textContent = dict[orig];
            } else {
                for (const [k, v] of Object.entries(dict)) {
                    if (orig === k || orig.replace(/\s+/g, ' ') === k.replace(/\s+/g, ' ')) {
                        opt.textContent = v;
                        break;
                    }
                }
            }
        }
    });

    // 4. Translate placeholder attributes
    document.querySelectorAll('input[placeholder], textarea[placeholder]').forEach(el => {
        const ph = el.getAttribute('placeholder');
        if (!ph) return;

        if (el.dataset.origPlaceholder === undefined) {
            el.dataset.origPlaceholder = ph.trim();
        }

        if (targetLang === 'ar') {
            el.setAttribute('placeholder', el.dataset.origPlaceholder);
        } else if (dict) {
            const orig = el.dataset.origPlaceholder;
            if (dict[orig]) {
                el.setAttribute('placeholder', dict[orig]);
            } else {
                for (const [k, v] of Object.entries(dict)) {
                    if (orig === k || orig.replace(/\s+/g, ' ') === k.replace(/\s+/g, ' ')) {
                        el.setAttribute('placeholder', v);
                        break;
                    }
                }
            }
        }
    });

    // 5. Translate title attributes
    document.querySelectorAll('[title]').forEach(el => {
        const title = el.getAttribute('title');
        if (!title) return;

        if (el.dataset.origTitle === undefined) {
            el.dataset.origTitle = title.trim();
        }

        if (targetLang === 'ar') {
            el.setAttribute('title', el.dataset.origTitle);
        } else if (dict) {
            const orig = el.dataset.origTitle;
            if (dict[orig]) {
                el.setAttribute('title', dict[orig]);
            }
        }
    });

    // 6. Translate document title
    if (document._origTitle === undefined) {
        document._origTitle = document.title;
    }
    if (targetLang === 'ar') {
        document.title = document._origTitle;
    } else if (dict) {
        for (const [ar, translated] of Object.entries(dict)) {
            if (document._origTitle.includes(ar)) {
                document.title = document._origTitle.replace(ar, translated);
                break;
            }
        }
    }

    // 7. Synchronize all language selectors on the page
    document.querySelectorAll('#languageSelector').forEach(sel => {
        sel.value = targetLang;
    });
}

// Hook into global applyLanguage function
if (typeof applyLanguage === 'function') {
    const prevApplyLang = applyLanguage;
    applyLanguage = function(lang) {
        prevApplyLang(lang);
        autoTranslateToolPage(lang);
    };
}

// Self-initialization
(function initI18n() {
    const run = () => {
        const savedLang = localStorage.getItem('glowLanguage') || 'ar';
        autoTranslateToolPage(savedLang);
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', run);
    } else {
        run();
    }

    window.addEventListener('load', run);
    setTimeout(run, 100);
    setTimeout(run, 400);

    // Global listener for language selector change
    document.addEventListener('change', (e) => {
        if (e.target && e.target.id === 'languageSelector') {
            const newLang = e.target.value;
            localStorage.setItem('glowLanguage', newLang);
            if (typeof changeLanguage === 'function') {
                changeLanguage(newLang);
            } else {
                autoTranslateToolPage(newLang);
            }
        }
    });
})();
