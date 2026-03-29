// UI strings for localization — home screen, headers, Trust widget
// FAQ question/answer translations are separate

export const uiStrings = {
  en: {
    // Home screen
    heroTitle: "How can we",
    heroHighlight: "help",
    heroTitleEnd: "you?",
    searchPlaceholder: "Search for questions, topics, or keywords...",
    helpTopics: "Help Topics",
    topIssues: "Top Issues",
    browseProducts: "Browse Products",
    contactSupport: "Contact Support",
    nekDelivery: "Nek Delivery",
    reportFraud: "Report Fraud",
    upiHelpLabel: "UPI Help · Powered by NPCI",
    chatWithSupport: "Chat with Support",
    talkToSupport: "Talk to Support",
    helpCenter: "Help Center",

    // Troubleshooting
    transactionsNeedAttention: "transactions need attention",
    troubleshoot: "Troubleshoot",
    fix: "Fix",

    // Question page
    listenToAnswer: "Listen to answer",
    tapToPlay: "Tap to play",
    playing: "Playing...",
    relatedQuestions: "Related Questions",
    contactJarSupport: "Contact Jar Support",
    openInJarApp: "Open in Jar App",
    troubleshootInJarApp: "Troubleshoot in Jar App",
    wasThisHelpful: "Was this helpful?",
    thankYou: "Thank you for your feedback!",

    // Trust widget
    trustHeader: "Your Trust = Our Priority",
    trustSubHeader: "Trust & Safety at Jar",
    trustCategories: {
      safety: "Safety & Protection",
      security: "Security Features",
      gold: "Digital Gold Basics",
      engineering: "Technology",
    },
  },
  hi: {
    // Home screen
    heroTitle: "हम आपकी कैसे",
    heroHighlight: "मदद",
    heroTitleEnd: "करें?",
    searchPlaceholder: "सवाल, टॉपिक या कीवर्ड सर्च करें...",
    helpTopics: "हेल्प टॉपिक्स",
    topIssues: "टॉप इश्यूज",
    browseProducts: "प्रोडक्ट्स ब्राउज़ करें",
    contactSupport: "सपोर्ट से संपर्क करें",
    nekDelivery: "Nek डिलीवरी",
    reportFraud: "फ्रॉड रिपोर्ट करें",
    upiHelpLabel: "यूपीआई हेल्प · NPCI द्वारा संचालित",
    chatWithSupport: "सपोर्ट से चैट करें",
    talkToSupport: "सपोर्ट से बात करें",
    helpCenter: "हेल्प सेंटर",

    // Troubleshooting
    transactionsNeedAttention: "ट्रांजैक्शन्स पर ध्यान देने की जरूरत है",
    troubleshoot: "ट्रबलशूट",
    fix: "फिक्स",

    // Question page
    listenToAnswer: "जवाब सुनें",
    tapToPlay: "प्ले करने के लिए टैप करें",
    playing: "चल रहा है...",
    relatedQuestions: "संबंधित सवाल",
    contactJarSupport: "कॉन्टैक्ट जार सपोर्ट",
    openInJarApp: "जार ऐप में खोलें",
    troubleshootInJarApp: "जार ऐप में ट्रबलशूट करें",
    wasThisHelpful: "क्या यह मददगार था?",
    thankYou: "आपकी प्रतिक्रिया के लिए धन्यवाद!",

    // Trust widget
    trustHeader: "आपका ट्रस्ट = हमारी प्राथमिकता",
    trustSubHeader: "जार पर ट्रस्ट और सेफ्टी",
    trustCategories: {
      safety: "सेफ्टी और प्रोटेक्शन",
      security: "सिक्योरिटी फीचर्स",
      gold: "डिजिटल गोल्ड बेसिक्स",
      engineering: "टेक्नोलॉजी",
    },
  },
};

// Category headers
export const categoryHeadersHi: Record<string, { faqCategory: string; faqPageHeader: string }> = {
  jar:                    { faqCategory: "जार के बारे में", faqPageHeader: "जार के बारे में जानें" },
  "jar-gold":             { faqCategory: "जार गोल्ड", faqPageHeader: "जार पर डिजिटल गोल्ड खरीदें" },
  "jar-silver":           { faqCategory: "जार सिल्वर", faqPageHeader: "जार पर डिजिटल सिल्वर खरीदें" },
  kyc:                    { faqCategory: "आईडी वेरिफिकेशन", faqPageHeader: "आईडी वेरिफिकेशन" },
  "upi-id":               { faqCategory: "यूपीआई आईडी/वीपीए", faqPageHeader: "अपनी यूपीआई आईडी मैनेज करें" },
  "payments-savings":     { faqCategory: "पेमेंट्स और स्टेटमेंट्स", faqPageHeader: "पेमेंट्स और स्टेटमेंट्स" },
  "autopay-subscription": { faqCategory: "ऑटोपे/सब्सक्रिप्शन", faqPageHeader: "अपने सब्सक्रिप्शन मैनेज करें" },
  withdrawal:             { faqCategory: "विदड्रॉल", faqPageHeader: "विदड्रॉल" },
  "refer-earn":           { faqCategory: "रेफर और अर्न", faqPageHeader: "रेफर और अर्न" },
  rewards:                { faqCategory: "रिवॉर्ड्स", faqPageHeader: "रिवॉर्ड्स" },
  profile:                { faqCategory: "प्रोफाइल", faqPageHeader: "प्रोफाइल डिटेल्स" },
  nominee:                { faqCategory: "नॉमिनी", faqPageHeader: "नॉमिनी एडिशन" },
  loans:                  { faqCategory: "लोन्स", faqPageHeader: "लोन्स रिलेटेड" },
  "jar-pay":              { faqCategory: "जार पे", faqPageHeader: "जार पे" },
  nek:                    { faqCategory: "Nek", faqPageHeader: "Nek" },
  "report-fraud":         { faqCategory: "फ्रॉड रिपोर्ट करें", faqPageHeader: "फ्रॉड रिपोर्ट करें" },
};

// Subcategory names
export const subcategoryNamesHi: Record<string, string> = {
  // Jar
  "about-jar": "जार के बारे में",
  "digital-gold-silver-basics": "डिजिटल गोल्ड / सिल्वर बेसिक्स",
  "payment-methods-pricing": "पेमेंट मेथड्स और प्राइसिंग",
  "charges-taxes": "चार्जेस और टैक्सेस",
  "membership-benefits": "मेंबरशिप और बेनिफिट्स",

  // Jar Gold
  "daily-savings": "डेली सेविंग्स",
  "weekly-savings": "वीकली सेविंग्स",
  "monthly-savings": "मंथली सेविंग्स",
  "instant-saving": "इंस्टेंट सेविंग",
  "track-savings": "सेविंग्स ट्रैक करें",
  "round-off": "राउंड ऑफ",

  // Jar Silver
  "about-digital-silver": "डिजिटल सिल्वर के बारे में",
  "silver-on-jar": "जार पर सिल्वर",
  "silver-pricing-value": "प्राइसिंग और वैल्यू",
  "silver-payment-status": "पेमेंट स्टेटस",
  "silver-withdrawal": "सिल्वर विदड्रॉल",
  "silver-withdrawal-issues": "विदड्रॉल में समस्याएं",

  // KYC
  "about-kyc": "केवाईसी के बारे में",
  "kyc-transactions": "केवाईसी और ट्रांजैक्शन्स",
  "kyc-documents": "केवाईसी डॉक्यूमेंट्स",
  "kyc-verification": "केवाईसी वेरिफिकेशन",
  "post-kyc-success": "केवाईसी सक्सेस के बाद",

  // UPI ID
  "primary-upi-id": "प्राइमरी यूपीआई आईडी",
  "managing-upi-ids": "यूपीआई आईडी मैनेज करें",
  "adding-new-upi": "नई यूपीआई आईडी जोड़ें",

  // Payments & Statements
  "payment-status": "पेमेंट स्टेटस",
  "payment-history-invoice": "पेमेंट हिस्ट्री और इनवॉइस",
  "account-statement": "अकाउंट स्टेटमेंट",

  // AutoPay/Subscription
  "start-savings": "सेविंग्स शुरू करें",
  "pause-savings": "सेविंग्स पॉज़ करें",
  "resume-savings": "सेविंग्स रिज्यूम करें",
  "stop-savings": "सेविंग्स स्टॉप करें",

  // Withdrawal
  "gold-withdrawal": "गोल्ड विदड्रॉल",
  "gold-withdrawal-issues": "विदड्रॉल में समस्याएं",

  // Refer & Earn
  "refer-earn-general": "रेफर और अर्न",

  // Rewards
  "weekly-magic": "वीकली मैजिक",
  "spins": "स्पिन्स",
  "coupons": "कूपन्स",
  "winnings": "विनिंग्स",

  // Profile
  "edit-profile": "प्रोफाइल एडिट करें",
  "account-deletion": "अकाउंट डिलीशन",
  "sms-permissions": "एसएमएस परमिशन्स",

  // Nominee
  "nominee-general": "नॉमिनी",

  // Loans
  "loans-general": "लोन्स",

  // Jar Pay
  "about-jar-pay": "जार पे के बारे में",
  "about-upi": "यूपीआई के बारे में",
  "upi-transactions": "ट्रांजैक्शन्स",

  // Nek
  "about-nek": "Nek के बारे में",
  "tracking-delivery": "ट्रैकिंग और डिलीवरी",
  "nek-payment-methods": "पेमेंट मेथड्स",

  // Report Fraud
  "fraud-reporting": "फ्रॉड रिपोर्टिंग",
};
