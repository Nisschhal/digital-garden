// Full-site bilingual copy. English is the source; Nepali is written as its
// own persuasive copy for a Nepali school-decision-maker audience — not a
// literal translation — while keeping every claim and fact identical to the
// brief. Structural/non-text data (icons, hrefs, colors, numeric chart
// values) stays in each component; this file only carries strings, indexed
// so components can zip them back onto that structural data by position.
// Noto Sans Devanagari is wired in via globals.css / html[lang=ne].
export type Lang = "en" | "ne";

export const i18n = {
  en: {
    brand: "Digital Garden",
    nav: {
      product: "Product",
      schools: "For Schools",
      ai: "AI Features",
      pricing: "Pricing",
      about: "About",
      contact: "Contact",
      ctaDemo: "Book a Demo",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      schoolLinks: ["For Teachers", "For Parents", "For Students"],
    },
    hero: {
      eyebrow: "Rooted in Butwal. Built for every school in Nepal.",
      headline: "One system that finally thinks like your school does.",
      sub: "Digital Garden combines a complete school management system with AI that works across every department — so admins get straight answers, teachers get their evenings back, and parents stop finding out too late.",
      ctaSeeHow: "See how it works",
    },
    trustStrip: [
      "Built for NEB & CTEVT curricula",
      "Fee Directive 2072 compliant",
      "EMIS-ready",
      "Works alongside your existing system",
    ],
    persona: {
      eyebrow: "One product, every seat at the table",
      headline: "Built differently for who's asking.",
      items: [
        { tag: "For Admins", line: "Ask your school a question. Get a straight answer — not a spreadsheet." },
        { tag: "For Teachers", line: "Less grading, less paperwork, more teaching." },
        { tag: "For Parents", line: "Know how your child is doing before the exam does." },
        { tag: "For Students", line: "Learning that levels up with you." },
      ],
    },
    problem: {
      eyebrow: "Every school we've talked to says some version of this",
      headline: "Nepal's schools aren't short on data. They're short on answers.",
      items: [
        { title: "Report cards take days, not minutes.", body: "Teachers still write CAS rubrics and remarks by hand, one student at a time." },
        { title: "Nobody notices until it's too late.", body: "A struggling student's warning signs sit scattered across attendance sheets, gradebooks, and memory — until the report card breaks the news." },
        { title: "One question, one afternoon.", body: "“Which section is falling behind this term?” shouldn't take half a day of building a report by hand." },
        { title: "Switching feels like starting over.", body: "Years of records locked in a system nobody wants to touch — so schools stay, even when unhappy." },
      ],
    },
    grounding: {
      eyebrow: "Nepal, terraced",
      headline: "Rooted in Butwal. Growing across Nepal.",
    },
    wedge: {
      eyebrow: "The question every school asks first",
      headline: "Already have a school system? Keep it running while we prove ourselves.",
      body: "Digital Garden doesn't ask you to rip anything out on day one. We bring your existing data in, layer our AI on top, and let your team feel the difference before you ever think about switching fully.",
      cta: "See how migration works",
      tag: "Layered on top",
      aiTitle: "Digital Garden — AI layer",
      aiBody: "Answers questions, flags at-risk students, drafts rubrics — automatically",
      existingTitle: "Your existing school system",
      existingBody: "Attendance registers, fee ledgers, exam records — whatever you use today",
    },
    aiDemo: {
      eyebrow: "This is what the AI actually does",
      headline: "Ask it like you'd ask a person.",
      body: "No dashboards to build, no filters to configure. Type the question you'd ask a colleague — get the answer a colleague would need an afternoon to find.",
      demos: {
        admin: {
          tabLabel: "Ask as an Admin",
          turns: [
            {
              q: "Which section is below 60% pass rate this term?",
              a: [
                { t: "Grade 9, Section C", n: false },
                { t: " — ", n: false },
                { t: "54%", n: true },
                { t: ", down from ", n: false },
                { t: "71%", n: true },
                { t: " last term. Math and Science are the weakest subjects.", n: false },
              ],
            },
            {
              q: "What's driving the drop?",
              a: [
                { t: "Two teacher absences in the last ", n: false },
                { t: "3 weeks", n: true },
                { t: ", plus a missed remedial class before the last unit test.", n: false },
              ],
            },
            {
              q: "Draft a note to the section teacher about it.",
              a: [
                { t: "Done — a short summary with both numbers and a suggested make-up session is in her inbox.", n: false },
              ],
            },
          ],
        },
        teacher: {
          tabLabel: "Ask as a Teacher",
          turns: [
            {
              q: "Draft a CAS rubric for Aarav's science project.",
              a: [
                { t: "Drafted from your notes — ", n: false },
                { t: "Communicator", n: true },
                { t: ": clear reasoning, minor gaps in written structure. Ready for your review.", n: false },
              ],
            },
            {
              q: "Who's likely to fail this term?",
              a: [
                { t: "3 students", n: true },
                { t: " in Section B are below 40% — Bishal, Sarita, and Prakash, all stuck on the same two chapters.", n: false },
              ],
            },
            {
              q: "Grade this week's MCQ set.",
              a: [
                { t: "All 32 papers graded — average ", n: false },
                { t: "68%", n: true },
                { t: ". 4 students missed the same question on fractions, worth a quick recap.", n: false },
              ],
            },
          ],
        },
        student: {
          tabLabel: "Ask as a Student",
          turns: [
            {
              q: "Quiz me on Chapter 6 before I forget it.",
              a: [
                { t: "5 questions, 2 minutes — you got ", n: false },
                { t: "4 of 5", n: true },
                { t: ". Missed the one on photosynthesis stages, want to try it again?", n: false },
              ],
            },
            {
              q: "How many days until my Math exam?",
              a: [
                { t: "12 days", n: true },
                { t: ". You're at Level 6 in Algebra — two more chapters to hit your streak goal.", n: false },
              ],
            },
            {
              q: "What should I study tonight?",
              a: [
                { t: "Fractions", n: true },
                { t: " — it's the topic you've missed most this month, and it's worth ", n: false },
                { t: "15%", n: true },
                { t: " of the next test.", n: false },
              ],
            },
          ],
        },
        parent: {
          tabLabel: "Ask as a Parent",
          turns: [
            {
              q: "How is Aayush doing in Math this month?",
              a: [
                { t: "Keeping up well — ", n: false },
                { t: "82%", n: true },
                { t: " average, up from ", n: false },
                { t: "76%", n: true },
                { t: ". Two missed homework submissions this week, worth a quick check-in.", n: false },
              ],
            },
            {
              q: "Should I be worried?",
              a: [
                { t: "Not yet — ", n: false },
                { t: "one check-in", n: true },
                { t: " with his teacher this week should sort it out.", n: false },
              ],
            },
            {
              q: "Can I pay this term's fee now?",
              a: [
                { t: "Yes — ", n: false },
                { t: "Rs 8,400", n: true },
                { t: " due, payable instantly via eSewa or Khalti right from this chat.", n: false },
              ],
            },
          ],
        },
      },
    },
    valueBlocks: {
      admin: {
        tag: "For Admins",
        title: "Run the whole school without running in circles.",
        bullets: [
          "Natural-language analytics — ask anything, skip the report-building",
          "Predictive flags for dropout and fee-default risk",
          "Automated EMIS and board-compliance reporting",
        ],
        cta: "See admin tools",
        proofQ: "Which section is below 60% pass rate this term?",
        proofA: "Grade 9, Section C — 54%, down from 71%.",
      },
      teacher: {
        tag: "For Teachers",
        title: "Give your evenings back.",
        bullets: [
          "CAS rubrics auto-drafted from your raw notes",
          "Instant MCQ grading, AI-assisted first pass on subjective answers — you always have final say",
          "At-risk student flags before report card day",
        ],
        cta: "See teacher tools",
        proofLabel: "Auto-drafted CAS rubric",
        proofSnippet: "Communicator: consistently explains reasoning using appropriate math vocabulary, with minor gaps in written structure.",
      },
      parent: {
        tag: "For Parents",
        title: "Ask, don't guess.",
        bullets: [
          "Plain-language answers about your child's term — no portal to dig through",
          "Early, honest alerts, weeks before an exam, not after",
          "Fees and documents handled in one chat",
        ],
        cta: "See parent experience",
        proofQ: "How is Aayush doing in Math this month?",
        proofA: "82% average, up from 76%. Two missed homework submissions this week.",
      },
      student: {
        tag: "For Students",
        title: "Level up, not just study.",
        bullets: [
          "Practice that adjusts to what you actually know",
          "XP, streaks, and chapter boss-battles that make revision feel like progress",
          "An AI study buddy, any time, any subject",
        ],
        cta: "See student experience",
        chips: ["12-day streak", "Level 7", "Chapter Boss: Algebra"],
      },
    },
    productTour: {
      eyebrow: "Every department, one system",
      headline: "The actual screens each department opens every day.",
      body: "Not a diagram of what it could do — this is what admin, finance, admissions, and parents each see when they log in.",
      tabs: {
        admin: { label: "Admin", frameTitle: "Digital Garden — Compliance & Risk", caption: "Predictive dropout and fee-default flags, plus one-click EMIS and board reporting." },
        finance: { label: "Finance & Fees", frameTitle: "Digital Garden — Fees & Payments", caption: "Collection by method, class, and term — reconciled with eSewa and Khalti automatically." },
        admissions: { label: "Admissions", frameTitle: "Digital Garden — Admissions CRM", caption: "Every inquiry tracked from first contact to enrolled, with follow-ups sent automatically." },
        parents: { label: "Parents", frameTitle: "Digital Garden — Parent app", caption: "The same straight answers a front-office visit would get you, any time, in your pocket." },
      },
    },
    tourScreens: {
      admin: {
        header: "Compliance & risk — this term",
        emisLabel: "EMIS report",
        emisValue: "Ready to submit",
        boardLabel: "Board sync",
        boardValue: "Up to date",
        flaggedHeader: "Flagged this week",
        flags: [
          { grade: "Grade 10", reason: "Attendance dropped 22% this month", risk: "High" },
          { grade: "Grade 8", reason: "Fee overdue 45 days", risk: "Medium" },
          { grade: "Grade 11", reason: "Failing 2 subjects this term", risk: "High" },
        ],
      },
      finance: {
        header: "Fees & payments — this term",
        collectedLabel: "Collected",
        collectedSub: "87% of term total",
        outstandingLabel: "Outstanding",
        outstandingSub: "38 accounts overdue",
        trendLabel: "Collection trend",
        months: ["Baisakh", "Jestha", "Ashadh", "Shrawan", "Bhadra"],
        byMethodLabel: "By payment method",
        methods: ["eSewa", "Khalti", "Bank transfer"],
        recentLabel: "Recent",
        statuses: { Paid: "Paid", Overdue: "Overdue" },
      },
      admissions: {
        header: "Admissions — Fall intake",
        columns: ["Inquiry", "Applied", "Interview", "Enrolled"],
        conversion: "Inquiry → Enrolled conversion:",
        conversionRest: ", up from 21% last intake",
        body: "Every inquiry auto-routes to the right counselor, with follow-up reminders sent automatically — nothing sits in an inbox.",
      },
      parent: {
        grade: "Grade 9, Section C",
        attendanceLabel: "Attendance this month",
        feeDue: "NPR 8,500 fee due Aug 15",
        payWith: "Pay with eSewa or Khalti",
        askHeader: "Ask Digital Garden",
        askQ: "“How is Aayush doing in Math this month?”",
        askA: "82% average, up from 76%. Two missed homework submissions this week.",
      },
    },
    heroScreen: {
      welcome: "Welcome back,",
      nav: ["Home", "Exams", "Fees", "Admissions", "Reports"],
      stats: [
        { label: "Attendance today", value: "94%" },
        { label: "Fees collected", value: "87%" },
        { label: "AI queries this week", value: "216" },
      ],
      queueHeader: "Today, handled automatically",
      queue: [
        { text: "CAS rubrics — 12 auto-drafted, ready to review", tag: "New" },
        { text: "Grade 9, Section C pass rate dropped to 54%", tag: "Flagged" },
        { text: "38 fee reminders sent automatically", tag: "Done" },
      ],
      chartHeader: "Term pass rate — Grade 9",
      banner: "Section C flagged — 54%, down from 71%",
    },
    modules: {
      eyebrow: "One system, every department",
      headline: "The full school, not just the AI part.",
      items: [
        "Admissions & CRM",
        "Attendance",
        "Fees & Payments (eSewa/Khalti)",
        "Exams & Grading",
        "Timetable",
        "HR & Payroll",
        "Transport",
        "Hostel",
        "Library",
        "Notices & Messaging",
      ],
      footer: "Everything a school already runs on — now with an AI layer that actually understands it.",
    },
    gamify: {
      headline: "School, but it doesn't feel like homework.",
      body: "Streaks that build real habits. Badges that mean something. A syllabus that feels like a map instead of a checklist.",
      cards: ["Badge unlocked: Fraction Master", "14-day streak", "Chapter Boss defeated"],
    },
    security: {
      eyebrow: "Trust, built in — not bolted on",
      headline: "Your students' data stays exactly where it should.",
      body: "Role-based access means a parent sees only their own child, a teacher sees only their own class, and nothing crosses a line it shouldn't. Built for Nepal's data reality from day one — not retrofitted after the fact.",
      whole: "Whole school",
      section: "Grade 9, Section C",
      own: "Aayush's own record",
    },
    pricingTeaser: {
      headline: "Pricing that fits a school, not a startup.",
      body: "Every institution is different — size, needs, current setup. Talk to us and we'll build a plan around your school, not the other way around.",
      cta: "Get a custom quote",
    },
    proof: {
      headline: "Join the schools shaping what comes next.",
      body: "We're working hands-on with our founding pilot schools in Butwal to get this right before we scale outward. Want to be one of them?",
      cta: "Become a founding school",
    },
    faq: {
      eyebrow: "Questions, answered plainly",
      headline: "Before you ask, we probably already have.",
      items: [
        { q: "We already have a school management system — do we have to switch?", a: "No. Digital Garden's AI layer works alongside your existing system first. Full migration, if you choose it, happens later and on your terms." },
        { q: "What happens to our historical records if we do migrate?", a: "Nothing gets left behind. Our migration tools are built specifically to carry years of records over intact — that's the single most common failure point of other switches, and we built around it." },
        { q: "Will this replace our teachers or our decisions?", a: "No. The AI drafts, flags, and answers — a person always confirms before anything is sent, graded, or recorded. Built to support judgment, not replace it." },
        { q: "Is our students' data safe?", a: "Role-based access is built into the core of the system, not added later. Parents see only their child. Teachers see only their class. Nothing more." },
        { q: "How long does onboarding take?", a: "Most schools are live within days, not months, using guided data-import tools and hands-on onboarding support." },
      ],
    },
    finalCta: {
      headline: "Nepal's schools are ready for this. Are you?",
      body: "Book a demo and see Digital Garden running on your own school's real questions.",
      cta: "Book a Demo",
    },
    footer: {
      tagline: "Rooted in Butwal. Growing across Nepal.",
      columns: [
        { title: "Product", links: ["For Schools", "For Teachers", "For Parents", "For Students"] },
        { title: "Company", links: ["About", "Blog", "Careers", "Contact"] },
        { title: "Legal", links: ["Privacy", "Terms"] },
      ],
      copyright: "© 2026 Digital Garden. All rights reserved.",
      investors: "For investors",
    },
  },

  ne: {
    brand: "डिजिटल गार्डेन",
    nav: {
      product: "उत्पादन",
      schools: "विद्यालयका लागि",
      ai: "AI सुविधाहरू",
      pricing: "मूल्य",
      about: "हाम्रो बारे",
      contact: "सम्पर्क",
      ctaDemo: "डेमो बुक गर्नुहोस्",
      openMenu: "मेनु खोल्नुहोस्",
      closeMenu: "मेनु बन्द गर्नुहोस्",
      schoolLinks: ["शिक्षकका लागि", "अभिभावकका लागि", "विद्यार्थीका लागि"],
    },
    hero: {
      eyebrow: "बुटवलमा जरा गाडिएको। नेपालका हरेक विद्यालयका लागि निर्मित।",
      headline: "एउटा प्रणाली, जसले अन्ततः तपाईंको विद्यालयले जस्तै सोच्छ।",
      sub: "डिजिटल गार्डेनले पूर्ण विद्यालय व्यवस्थापन प्रणालीलाई हरेक विभागमा काम गर्ने AI सँग जोड्छ — ताकि प्रशासकहरूले सोझो जवाफ पाउँछन्, शिक्षकहरूले साँझको समय फिर्ता पाउँछन्, र अभिभावकहरू ढिलो थाहा पाउनबाट बच्छन्।",
      ctaSeeHow: "यसले कसरी काम गर्छ हेर्नुहोस्",
    },
    trustStrip: [
      "NEB र CTEVT पाठ्यक्रमका लागि नै बनेको",
      "शुल्क निर्देशिका 2072 अनुरूप",
      "EMIS-तयार",
      "तपाईंको हालको प्रणालीसँगै चल्छ",
    ],
    persona: {
      eyebrow: "एउटै प्रणाली, सबैको ठाउँ यसमा",
      headline: "सोध्ने मान्छे फरक भए, जवाफ पनि फरक।",
      items: [
        { tag: "प्रशासकका लागि", line: "आफ्नो विद्यालयलाई प्रश्न सोध्नुहोस्। स्प्रेडसिट होइन, सोझो जवाफ पाउनुहोस्।" },
        { tag: "शिक्षकका लागि", line: "कम कापी जाँच्ने झन्झट, कम कागजी काम, बढी पढाउने समय।" },
        { tag: "अभिभावकका लागि", line: "परीक्षाले भन्नुअघि नै थाहा पाउनुहोस्, छोराछोरी कस्तो गर्दैछन्।" },
        { tag: "विद्यार्थीका लागि", line: "पढाइ, जुन तपाईंसँगै लेभल अप हुन्छ।" },
      ],
    },
    problem: {
      eyebrow: "हामीले कुरा गरेको लगभग हरेक विद्यालयले यस्तै भन्छ",
      headline: "नेपालका विद्यालयमा डाटाको कमी छैन, कमी छ त जवाफको।",
      items: [
        { title: "प्रगति विवरण मिनेटमा होइन, दिनौंमा तयार हुन्छ।", body: "शिक्षकहरूले अझै पनि CAS रुब्रिक र टिप्पणी हातैले, एक-एक विद्यार्थी गरी लेख्नुपर्छ।" },
        { title: "ढिलो नभएसम्म कसैले वास्ता गर्दैन।", body: "कमजोर हुँदै गएको विद्यार्थीका संकेतहरू हाजिरी पाना, अंकपत्र र सम्झनामा छरिएर बस्छन् — जबसम्म प्रगति विवरणले नै खबर नदिओस्।" },
        { title: "एउटा प्रश्न, पूरै एक दिउँसो।", body: "“यो सत्रमा कुन सेक्सन पछि परिरहेको छ?” — यस्तो प्रश्नको जवाफ खोज्न हातैले रिपोर्ट बनाउँदै आधा दिन बित्नु पर्ने कुरै होइन।" },
        { title: "प्रणाली बदल्नु भनेको फेरि सुरुदेखि सुरु गरेजस्तो।", body: "वर्षौंको रेकर्ड एउटा यस्तो प्रणालीमा थुनिएको हुन्छ, जसलाई छुन कसैको मन लाग्दैन — त्यसैले असन्तुष्ट भए पनि विद्यालयहरू त्यहीं टिकिरहन्छन्।" },
      ],
    },
    grounding: {
      eyebrow: "नेपाल, तह-तह",
      headline: "बुटवलमा जरा गाडिएको। नेपालभर फैलिँदै।",
    },
    wedge: {
      eyebrow: "हरेक विद्यालयले पहिले सोध्ने प्रश्न",
      headline: "पहिल्यै विद्यालय प्रणाली छ? त्यसलाई चलिरहन दिनुहोस्, हामी आफूलाई प्रमाणित गर्दै जान्छौं।",
      body: "डिजिटल गार्डेनले पहिलो दिनैदेखि केही पनि हटाउन भन्दैन। हामी तपाईंको हालको डाटा भित्र्याउँछौं, माथि हाम्रो AI तह थप्छौं, र पूर्ण रूपमा बदल्ने कुरा सोच्नुअघि नै तपाईंको टिमले फरक महसुस गरोस् भन्ने चाहन्छौं।",
      cta: "माइग्रेसन कसरी हुन्छ हेर्नुहोस्",
      tag: "माथिबाट थपिएको",
      aiTitle: "डिजिटल गार्डेन — AI तह",
      aiBody: "प्रश्नको जवाफ दिन्छ, जोखिममा परेका विद्यार्थी पहिचान गर्छ, रुब्रिक मस्यौदा बनाउँछ — स्वचालित रूपमा",
      existingTitle: "तपाईंको हालको विद्यालय प्रणाली",
      existingBody: "हाजिरी दर्ता, शुल्क खाता, परीक्षा रेकर्ड — तपाईं आज जे प्रयोग गर्नुहुन्छ, त्यही",
    },
    aiDemo: {
      eyebrow: "AI ले वास्तवमा यही गर्छ",
      headline: "मान्छेलाई सोधेजस्तै यसलाई सोध्नुहोस्।",
      body: "ड्यासबोर्ड बनाउनु पर्दैन, फिल्टर मिलाउनु पर्दैन। सहकर्मीलाई सोध्ने प्रश्न नै टाइप गर्नुहोस् — जुन जवाफ खोज्न सहकर्मीलाई पूरै दिउँसो लाग्थ्यो, त्यो तुरुन्तै पाउनुहोस्।",
      demos: {
        admin: {
          tabLabel: "प्रशासकको रूपमा सोध्नुहोस्",
          turns: [
            {
              q: "यो सत्रमा कुन सेक्सनको उत्तीर्ण दर 60% भन्दा कम छ?",
              a: [
                { t: "कक्षा 9, सेक्सन C", n: false },
                { t: " — ", n: false },
                { t: "54%", n: true },
                { t: ", अघिल्लो सत्रको ", n: false },
                { t: "71%", n: true },
                { t: " बाट घटेर। गणित र विज्ञान सबैभन्दा कमजोर विषय हुन्।", n: false },
              ],
            },
            {
              q: "यो घट्नुको कारण के हो?",
              a: [
                { t: "पछिल्लो ", n: false },
                { t: "3 हप्तामा", n: true },
                { t: " 2 पटक शिक्षक अनुपस्थित भए, अनि अन्तिम एकाइ परीक्षा अघि उपचारात्मक कक्षा छुट्यो।", n: false },
              ],
            },
            {
              q: "यसबारे सेक्सन शिक्षकलाई सूचना पठाइदिनुहोस्।",
              a: [
                { t: "पठाइसकियो — दुवै आँकडा र सुझाव सहितको छोटो सारांश उनको इनबक्समा छ।", n: false },
              ],
            },
          ],
        },
        teacher: {
          tabLabel: "शिक्षकको रूपमा सोध्नुहोस्",
          turns: [
            {
              q: "आरवको विज्ञान प्रोजेक्टको लागि CAS रुब्रिक बनाइदिनुहोस्।",
              a: [
                { t: "तपाईंको नोटबाट बनाइयो — ", n: false },
                { t: "Communicator", n: true },
                { t: ": स्पष्ट तर्क, लेखाइको संरचनामा सामान्य कमी। समीक्षाको लागि तयार छ।", n: false },
              ],
            },
            {
              q: "यो सत्र कोकोहरू फेल हुने सम्भावना बढी छ?",
              a: [
                { t: "सेक्सन B का 3 जना", n: true },
                { t: " विद्यार्थी 40% भन्दा कम छन् — बिशाल, सरिता र प्रकाश, तीनैलाई उही दुई अध्याय गाह्रो लागिरहेको छ।", n: false },
              ],
            },
            {
              q: "यो हप्ताको MCQ सेट जाँचिदिनुहोस्।",
              a: [
                { t: "सबै 32 वटा पेपर जाँचियो — औसत ", n: false },
                { t: "68%", n: true },
                { t: "। 4 जनाले भिन्नको उस्तै प्रश्न गल्ती गरे, छोटो पुनरावृत्ति गराए राम्रो हुन्छ।", n: false },
              ],
            },
          ],
        },
        student: {
          tabLabel: "विद्यार्थीको रूपमा सोध्नुहोस्",
          turns: [
            {
              q: "बिर्सनुअघि अध्याय 6 बाट क्विज लिनुहोस् न।",
              a: [
                { t: "5 प्रश्न, 2 मिनेट — ", n: false },
                { t: "5 मध्ये 4", n: true },
                { t: " सही भयो। प्रकाश संश्लेषणको चरणमा चुक्नुभयो, फेरि प्रयास गर्ने हो?", n: false },
              ],
            },
            {
              q: "मेरो गणित परीक्षा कति दिनमा छ?",
              a: [
                { t: "12 दिनमा", n: true },
                { t: "। तपाईं बीजगणितमा Level 6 मा हुनुहुन्छ — streak लक्ष्य भेट्न अझै दुई अध्याय बाँकी।", n: false },
              ],
            },
            {
              q: "आज राति के पढ्नु ठीक होला?",
              a: [
                { t: "भिन्न", n: true },
                { t: " — यो महिना सबैभन्दा धेरै चुकेको विषय हो, र अर्को परीक्षाको ", n: false },
                { t: "15%", n: true },
                { t: " यसैबाट आउँछ।", n: false },
              ],
            },
          ],
        },
        parent: {
          tabLabel: "अभिभावकको रूपमा सोध्नुहोस्",
          turns: [
            {
              q: "यो महिना आयुषको गणितमा हालत कस्तो छ?",
              a: [
                { t: "राम्रै छ — औसत ", n: false },
                { t: "82%", n: true },
                { t: ", ", n: false },
                { t: "76%", n: true },
                { t: " बाट बढेर। यो हप्ता 2 वटा गृहकार्य बुझाउन छुटेको छ, एकपटक हेरचाह गर्दा हुन्छ।", n: false },
              ],
            },
            {
              q: "मैले चिन्ता लिनुपर्छ र?",
              a: [
                { t: "अहिले होइन — ", n: false },
                { t: "एक पटक", n: true },
                { t: " शिक्षकसँग कुरा गर्दा नै पुग्छ।", n: false },
              ],
            },
            {
              q: "म यो सत्रको शुल्क अहिले नै तिर्न सक्छु?",
              a: [
                { t: "हुन्छ — ", n: false },
                { t: "रु ८,४००", n: true },
                { t: " तिर्नुपर्ने छ, यहीं च्याटबाटै eSewa वा Khalti मार्फत तुरुन्तै तिर्न सकिन्छ।", n: false },
              ],
            },
          ],
        },
      },
    },
    valueBlocks: {
      admin: {
        tag: "प्रशासकका लागि",
        title: "गोलचक्करमा नपरी सिंगो विद्यालय चलाउनुहोस्।",
        bullets: [
          "सामान्य भाषामा नै विश्लेषण — जे सोधे पनि जवाफ आउँछ, रिपोर्ट बनाउने झन्झट सकियो",
          "स्कूल छाड्ने र शुल्क नतिर्ने जोखिमको पूर्व-संकेत",
          "EMIS र बोर्ड-अनुपालन रिपोर्टिङ स्वतः तयार",
        ],
        cta: "प्रशासकीय उपकरण हेर्नुहोस्",
        proofQ: "यो सत्रमा कुन सेक्सनको उत्तीर्ण दर 60% भन्दा कम छ?",
        proofA: "कक्षा 9, सेक्सन C — 54%, अघिल्लो सत्रको 71% बाट घटेर।",
      },
      teacher: {
        tag: "शिक्षकका लागि",
        title: "साँझको समय फिर्ता पाउनुहोस्।",
        bullets: [
          "तपाईंको कच्चा नोटबाटै CAS रुब्रिक स्वतः मस्यौदा हुन्छ",
          "MCQ तुरुन्तै जाँचिन्छ, विषयगत उत्तरमा AI ले पहिलो जाँच गर्छ — अन्तिम निर्णय सधैं तपाईंकै",
          "प्रगति विवरण आउनुअघि नै जोखिममा परेका विद्यार्थी पहिचान",
        ],
        cta: "शिक्षक उपकरण हेर्नुहोस्",
        proofLabel: "स्वतः तयार CAS रुब्रिक",
        proofSnippet: "सञ्चारकर्ता: उपयुक्त गणितीय शब्दावली प्रयोग गरी तर्क लगातार स्पष्ट पार्छ, लेखन संरचनामा साना कमजोरी।",
      },
      parent: {
        tag: "अभिभावकका लागि",
        title: "अड्कल काट्नु पर्दैन, सोध्नुहोस्।",
        bullets: [
          "छोराछोरीको सत्रबारे सोझो भाषामा जवाफ — पोर्टल खोतल्नु पर्दैन",
          "परीक्षापछि होइन, हप्तौं अगाडि नै इमानदार सूचना",
          "शुल्क र कागजात एउटै च्याटबाट मिलाउनुहोस्",
        ],
        cta: "अभिभावकको अनुभव हेर्नुहोस्",
        proofQ: "यो महिना आयुषको गणितमा हालत कस्तो छ?",
        proofA: "औसत 82%, 76% बाट बढेर। यो हप्ता 2 वटा गृहकार्य बुझाउन छुटेको छ।",
      },
      student: {
        tag: "विद्यार्थीका लागि",
        title: "पढ्ने मात्र होइन, लेभल अप हुनुहोस्।",
        bullets: [
          "तपाईंले साँच्चै जानेअनुसार मिल्ने अभ्यास",
          "XP, स्ट्रिक, र च्याप्टर बस-लडाइँले दोहोऱ्याइलाई प्रगतिजस्तो महसुस गराउँछ",
          "जुनसुकै बेला, जुनसुकै विषयमा AI अध्ययन साथी",
        ],
        cta: "विद्यार्थी अनुभव हेर्नुहोस्",
        chips: ["12 दिनको स्ट्रिक", "लेभल 7", "च्याप्टर बस: बीजगणित"],
      },
    },
    productTour: {
      eyebrow: "हरेक विभाग, एउटै प्रणाली",
      headline: "हरेक विभागले दिनहुँ खोल्ने वास्तविक स्क्रिन।",
      body: "यो के गर्न सक्छ भन्ने चित्र मात्र होइन — लगइन गर्दा प्रशासन, फाइनान्स, भर्ना र अभिभावकले साँच्चै यही देख्छन्।",
      tabs: {
        admin: { label: "प्रशासन", frameTitle: "डिजिटल गार्डेन — अनुपालन र जोखिम", caption: "स्कूल छाड्ने र शुल्क नतिर्ने जोखिमको पूर्वानुमान, अनि एक क्लिकमा EMIS र बोर्ड रिपोर्टिङ।" },
        finance: { label: "फाइनान्स र शुल्क", frameTitle: "डिजिटल गार्डेन — शुल्क र भुक्तानी", caption: "विधि, कक्षा र सत्र अनुसार संकलन — eSewa र Khalti सँग स्वतः मिलान।" },
        admissions: { label: "भर्ना", frameTitle: "डिजिटल गार्डेन — भर्ना CRM", caption: "पहिलो सम्पर्कदेखि भर्नासम्म हरेक सोधपुछको ट्र्याक, फलोअप स्वतः पठाइन्छ।" },
        parents: { label: "अभिभावक", frameTitle: "डिजिटल गार्डेन — अभिभावक एप", caption: "अफिस गएर पाउने त्यही सोझो जवाफ, जुनसुकै बेला, तपाईंकै खल्तीमा।" },
      },
    },
    tourScreens: {
      admin: {
        header: "अनुपालन र जोखिम — यो सत्र",
        emisLabel: "EMIS रिपोर्ट",
        emisValue: "पेश गर्न तयार",
        boardLabel: "बोर्ड सिंक",
        boardValue: "अद्यावधिक",
        flaggedHeader: "यो हप्ता पहिचान भएका",
        flags: [
          { grade: "कक्षा 10", reason: "यो महिना हाजिरी 22% घट्यो", risk: "उच्च" },
          { grade: "कक्षा 8", reason: "शुल्क 45 दिनदेखि बाँकी", risk: "मध्यम" },
          { grade: "कक्षा 11", reason: "यो सत्र 2 विषयमा फेल हुँदै", risk: "उच्च" },
        ],
      },
      finance: {
        header: "शुल्क र भुक्तानी — यो सत्र",
        collectedLabel: "संकलन भएको",
        collectedSub: "सत्रको कुल 87%",
        outstandingLabel: "बाँकी",
        outstandingSub: "38 खाता भुक्तानी बाँकी",
        trendLabel: "संकलन प्रवृत्ति",
        months: ["बैशाख", "जेठ", "असार", "श्रावण", "भदौ"],
        byMethodLabel: "भुक्तानी विधि अनुसार",
        methods: ["eSewa", "Khalti", "बैंक ट्रान्सफर"],
        recentLabel: "पछिल्लो",
        statuses: { Paid: "तिरेको", Overdue: "बाँकी" },
      },
      admissions: {
        header: "भर्ना — यो सत्रको प्रवेश",
        columns: ["सोधपुछ", "आवेदन", "अन्तर्वार्ता", "भर्ना भएको"],
        conversion: "सोधपुछ → भर्ना दर:",
        conversionRest: ", अघिल्लो पटकको 21% बाट बढेर",
        body: "हरेक सोधपुछ सही काउन्सिलरकहाँ स्वतः पुग्छ, फलोअप रिमाइन्डर स्वतः पठाइन्छ — इनबक्समा केही अड्किंदैन।",
      },
      parent: {
        grade: "कक्षा 9, सेक्सन C",
        attendanceLabel: "यो महिनाको हाजिरी",
        feeDue: "NPR 8,500 शुल्क, अगस्ट 15 सम्ममा तिर्नुपर्ने",
        payWith: "eSewa वा Khalti बाट तिर्नुहोस्",
        askHeader: "डिजिटल गार्डेनलाई सोध्नुहोस्",
        askQ: "“यो महिना आयुषको गणितमा हालत कस्तो छ?”",
        askA: "औसत 82%, 76% बाट बढेर। यो हप्ता 2 वटा गृहकार्य बुझाउन छुटेको छ।",
      },
    },
    heroScreen: {
      welcome: "फेरि स्वागत छ,",
      nav: ["गृहपृष्ठ", "परीक्षा", "शुल्क", "भर्ना", "रिपोर्ट"],
      stats: [
        { label: "आजको हाजिरी", value: "94%" },
        { label: "संकलित शुल्क", value: "87%" },
        { label: "यो हप्ता AI प्रश्न", value: "216" },
      ],
      queueHeader: "आज, स्वचालित रूपमा भएका काम",
      queue: [
        { text: "CAS रुब्रिक — 12 वटा स्वतः तयार, जाँच्न बाँकी", tag: "नयाँ" },
        { text: "कक्षा 9, सेक्सन C को उत्तीर्ण दर घटेर 54% भयो", tag: "पहिचान" },
        { text: "38 वटा शुल्क रिमाइन्डर स्वतः पठाइयो", tag: "सम्पन्न" },
      ],
      chartHeader: "सत्रको उत्तीर्ण दर — कक्षा 9",
      banner: "सेक्सन C पहिचान भयो — 54%, 71% बाट घटेर",
    },
    modules: {
      eyebrow: "एउटै प्रणाली, हरेक विभाग",
      headline: "पूरै विद्यालय, AI भाग मात्र होइन।",
      items: [
        "भर्ना र CRM",
        "हाजिरी",
        "शुल्क र भुक्तानी (eSewa/Khalti)",
        "परीक्षा र नतिजा",
        "समय तालिका",
        "कर्मचारी र तलब",
        "यातायात",
        "छात्रावास",
        "पुस्तकालय",
        "सूचना र सन्देश",
      ],
      footer: "विद्यालयले पहिल्यै चलाइरहेको सबै कुरा — अब साँच्चै बुझ्ने AI तहसहित।",
    },
    gamify: {
      headline: "स्कूल हो, तर गृहकार्यजस्तो लाग्दैन।",
      body: "साँच्चैको बानी बसाल्ने स्ट्रिक। अर्थ राख्ने ब्याज। चेकलिस्ट होइन, नक्सजस्तो लाग्ने पाठ्यक्रम।",
      cards: ["ब्याज अनलक: फ्र्याक्सन मास्टर", "14 दिनको स्ट्रिक", "च्याप्टर बस हरायो"],
    },
    security: {
      eyebrow: "भरोसा सुरुदेखि नै, पछि थपिएको होइन",
      headline: "तपाईंको विद्यार्थीको डाटा जहाँ बस्नुपर्ने हो, ठ्याक्कै त्यहीं बस्छ।",
      body: "भूमिका-अनुसार पहुँचको मतलब हो — अभिभावकले आफ्नो छोराछोरी मात्र देख्छन्, शिक्षकले आफ्नो कक्षा मात्र देख्छन्, र कुनै सीमा नाघिँदैन। सुरुदेखि नै नेपालको डाटा वास्तविकतालाई ध्यानमा राखेर बनाइएको — पछि थपिएको होइन।",
      whole: "पूरै विद्यालय",
      section: "कक्षा 9, सेक्सन C",
      own: "आयुषको आफ्नै रेकर्ड",
    },
    pricingTeaser: {
      headline: "मूल्य विद्यालयअनुसार, स्टार्टअपअनुसार होइन।",
      body: "हरेक विद्यालय फरक हुन्छ — आकार, आवश्यकता, हालको सेटअप। हामीसँग कुरा गर्नुहोस्, हामी तपाईंको विद्यालयअनुसार योजना बनाउँछौं, उल्टो होइन।",
      cta: "आफ्नै लागि मूल्य सोध्नुहोस्",
    },
    proof: {
      headline: "आगामी दिन बनाउँदै गरेका विद्यालयहरूसँग जोडिनुहोस्।",
      body: "बुटवलका सुरुवाती साझेदार विद्यालयहरूसँग नजिकबाट काम गर्दैछौं, अगाडि बढ्नुअघि सबै कुरा मिलाउन। तपाईं पनि उनीहरूमध्ये एक बन्न चाहनुहुन्छ?",
      cta: "संस्थापक विद्यालय बन्नुहोस्",
    },
    faq: {
      eyebrow: "प्रश्नहरू, सोझो जवाफसहित",
      headline: "तपाईंले सोध्नुअघि नै, सायद हामीले जवाफ दिइसक्यौं।",
      items: [
        { q: "हामीसँग पहिल्यै विद्यालय व्यवस्थापन प्रणाली छ — के बदल्नैपर्छ?", a: "पर्दैन। डिजिटल गार्डेनको AI तह पहिले तपाईंको हालको प्रणालीसँगै काम गर्छ। पूर्ण माइग्रेसन, यदि रोज्नुभयो भने, पछि र तपाईंकै सर्तमा हुन्छ।" },
        { q: "माइग्रेट गरे हाम्रा पुराना रेकर्डको के हुन्छ?", a: "केही पनि छुट्दैन। हाम्रा माइग्रेसन उपकरण वर्षौंको रेकर्ड जस्ताको तस्तै सार्नकै लागि बनाइएका हुन् — अरू प्रणाली बदल्दा सबैभन्दा धेरै गडबड यहीं हुन्छ, र हामीले त्यही मिलाएका छौं।" },
        { q: "के यसले हाम्रा शिक्षक वा हाम्रो निर्णय बदल्छ?", a: "पर्दैन। AI ले मस्यौदा बनाउँछ, पहिचान गर्छ, जवाफ दिन्छ — तर पठाउनु, अंक दिनु वा रेकर्ड गर्नुअघि सधैं मान्छेले नै पुष्टि गर्छ। यो निर्णय क्षमता बदल्न होइन, साथ दिन बनाइएको हो।" },
        { q: "हाम्रा विद्यार्थीको डाटा सुरक्षित छ त?", a: "भूमिका-अनुसार पहुँच प्रणालीको मूलभित्रै बनाइएको हो, पछि थपिएको होइन। अभिभावकले आफ्नो छोराछोरी मात्र देख्छन्। शिक्षकले आफ्नो कक्षा मात्र देख्छन्। यति नै।" },
        { q: "सुरु गर्न कति समय लाग्छ?", a: "गाइडेड डाटा-इम्पोर्ट उपकरण र प्रत्यक्ष सहयोगसँगै, धेरैजसो विद्यालय महिनौं होइन, दिनभित्रै सुरु हुन्छन्।" },
      ],
    },
    finalCta: {
      headline: "नेपालका विद्यालय यसका लागि तयार छन्। तपाईं नि?",
      body: "डेमो बुक गर्नुहोस् र डिजिटल गार्डेनले तपाईंकै विद्यालयको वास्तविक प्रश्नमा कसरी काम गर्छ हेर्नुहोस्।",
      cta: "डेमो बुक गर्नुहोस्",
    },
    footer: {
      tagline: "बुटवलमा जरा गाडिएको। नेपालभर फैलिँदै।",
      columns: [
        { title: "उत्पादन", links: ["विद्यालयका लागि", "शिक्षकका लागि", "अभिभावकका लागि", "विद्यार्थीका लागि"] },
        { title: "कम्पनी", links: ["हाम्रो बारे", "ब्लग", "जागिर", "सम्पर्क"] },
        { title: "कानुनी", links: ["गोपनीयता", "सर्तहरू"] },
      ],
      copyright: "© 2026 डिजिटल गार्डेन। सर्वाधिकार सुरक्षित।",
      investors: "लगानीकर्ताका लागि",
    },
  },
};
