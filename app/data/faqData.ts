export interface FAQQuestion {
  id: string;
  question: string;
  answer: string;
  supportActionable: "Solved by FAQ" | "In App Redirection" | "Through In App Troubleshooting" | "Support Required";
  faqContent?: "Video" | "Text Suffices" | "GIF";
  deeplink?: string;
  relatedQuestions?: string[];
  comments?: string;
}

export interface FAQSubCategory {
  id: string;
  name: string;
  questions: FAQQuestion[];
}

export interface FAQCategory {
  id: string;
  faqCategory: string;
  faqPageHeader: string;
  icon: string;
  subcategories: FAQSubCategory[];
}

export const faqData: FAQCategory[] = [
  {
    id: "jar",
    faqCategory: "About Jar",
    faqPageHeader: "Know About Jar",
    icon: "💰",
    subcategories: [
      {
        id: "about-jar",
        name: "About Jar",
        questions: [
          {
            id: "what-is-jar",
            question: "What is Jar?",
            answer:
              "**Jar** is an investment app that helps you invest **small amounts** into **digital gold** and **silver**.\n\nYou can start with as little as **₹10**, grow your **savings automatically** through daily, weekly and monthly micro-savings or choose to invest lumpsum through **Instant** Save /One time investment options, and **withdraw anytime** as **Cash** or even get **100% hallmark** physical gold/silver coins and jewellery delivered at your doorstep.",
            supportActionable: "Solved by FAQ",
            faqContent: "Video",
          },
          {
            id: "how-does-jar-help-save",
            question: "How does Jar help me save money automatically?",
            answer:
              "Through **AutoPay**, Jar automatically saves small amounts from your spends and invests them into **digital gold** or silver based on your selected plan.\n\nThis way, you **build** savings **without thinking** about it, while still having **full control** to **track or withdraw anytime**.",
            supportActionable: "Solved by FAQ",
            faqContent: "Video",
          },
          {
            id: "how-to-start-saving",
            question: "How do I start saving in Jar?",
            answer:
              "Saving in Jar is **simple** and **flexible**. You can start saving in **24K digital gold** from just **₹10**.\n\nWays to save on Jar:\n• Daily Savings – Save a fixed amount every day\n• Weekly Savings – Save a fixed amount every week\n• Monthly Savings – Save a fixed amount every month\n• Manual Savings – Add money anytime you want\n• Round-Off – Jar rounds up your online spends and invests the spare change\n\nAll your savings are securely stored in digital gold, and you can track, grow, or withdraw anytime.",
            supportActionable: "Solved by FAQ",
            faqContent: "Video",
          },
          {
            id: "jar-different-from-others",
            question: "How is Jar different from other investment apps?",
            answer:
              "Unlike traditional apps that require large investments, Jar focuses on **micro-savings**.\n\nIt helps you invest small amounts **regularly**, making it easy to **build wealth** in gold and silver **without** needing **big money** or **active effort**.\n\nYou can start with as little as ₹10, grow your savings automatically through daily, weekly and monthly micro-savings or choose to invest lumpsum through Instant Save options, and **withdraw anytime** as cash or even get 100% hallmark physical gold/silver coins and jewellery delivered.",
            supportActionable: "Solved by FAQ",
            faqContent: "Video",
          },
          {
            id: "why-digital-gold-silver",
            question:
              "Why should I invest in digital gold/silver than physical gold/silver?",
            answer:
              "**Digital gold and silver** let you invest without **worrying** about **storage**, **safety**, or **making charges**. You can buy small amounts anytime, track value in real-time, and still convert it into physical gold/silver whenever you want.\n\n- Start small – Invest from just ₹10\n- No making charges\n- Zero storage cost – Stored securely at no extra charge\n- High purity – 24K gold (99.99%)\n- Easy access – Buy, track, sell, or withdraw anytime",
            supportActionable: "Solved by FAQ",
            faqContent: "Video",
          },
          {
            id: "why-invest-through-jar",
            question: "Why should I invest through Jar?",
            answer:
              "Jar makes saving and investing simple, flexible, and secure.\n\n- Start small : Invest from just ₹10 and build savings through micro-investments\n- Withdraw anytime : Get cash in your bank or opt for physical gold/silver delivery\n- Your money is safe : Stored securely in **Brink's vaults** with independent oversight by **Vistra**\n- Fully protected – 24×7 monitored vaults with complete insurance coverage\n- Zero storage costs –Secure locker storage at no extra charge\n- Independently verified : Your gold always matches your balance and cannot be accessed without your consent\n- Trusted by millions : Jar is used by 40M+ users and follows bank-grade security standards\n\nSimple savings, strong security, and full control - everything in one place.",
            supportActionable: "Solved by FAQ",
            faqContent: "Video",
          },
        ],
      },
      {
        id: "digital-gold-silver-basics",
        name: "Digital Gold / Silver Basics",
        questions: [
          {
            id: "what-is-digital-gold-silver",
            question: "What is digital gold/silver?",
            answer:
              "Digital gold and silver are a simple way to invest in precious metals. You can start saving from just ₹10, and for every amount you invest, an equivalent amount of 24K gold (99.99% purity) or pure silver is securely stored in your name in BRINK vaults.",
            supportActionable: "Solved by FAQ",
            faqContent: "Video",
          },
          {
            id: "what-are-brinks-vault",
            question: "What are BRINKs VAULT?",
            answer:
              "**Brink's Vaults** are world-class secure storage facilities where your digital gold and silver are safely stored.\n\n• Used globally for storing precious metals\n• Bank-grade security infrastructure\n• 24×7 monitored and protected\n• Your gold/silver is stored securely under your ownership\n\nThis ensures your investment is always safe and protected.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "what-is-vistra",
            question: "What is Vistra?",
            answer:
              "**Vistra** is an independent trustee and administrator that monitors and verifies your gold holdings.\n\n• Ensures your gold/silver always matches your account balance\n• Regularly audits the vault storage\n• Ensures your assets cannot be accessed without your consent\n\nVistra adds an extra layer of trust and transparency to keep your investment secure.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "where-is-gold-stored",
            question:
              "Where is my purchased digital gold/silver stored? Is it safe in Jar?",
            answer:
              "Your gold and silver are stored in secure **Brink's vaults**, one of the **world's leading** vault providers that offer:\n\n• Bank-grade security infrastructure\n• 24×7 monitored vaults\n• Stored under your name\n\nThe storage is independently monitored by **Vistra**, ensuring your holdings are always safe and cannot be accessed without your consent.",
            supportActionable: "Solved by FAQ",
            faqContent: "Video",
          },
          {
            id: "is-gold-insured",
            question: "Is my purchased digital gold/silver insured?",
            answer:
              "For the digital gold/silver you own, an equivalent amount of physical gold/silver is stored securely in Brink's vaults, which are insured by **ICICI Lombard**.",
            supportActionable: "Solved by FAQ",
            faqContent: "Video",
          },
        ],
      },
      {
        id: "payment-methods-pricing",
        name: "Payment Methods & Pricing",
        questions: [
          {
            id: "payment-methods-available",
            question:
              "What payments methods are available to invest and withdraw?",
            answer:
              "You can save and withdraw through **UPI** using any of your preferred UPI Apps like PhonePe, Paytm, Cred, BHIM etc.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "min-max-invest",
            question:
              "What is the minimum and maximum amount I can invest?",
            answer:
              "You can start your Daily Savings with minimum amount of **₹10** and maximum of **₹5000**. If you wish to save more, you can save upto **₹1,00,000** manually.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "gold-silver-price-calculated",
            question: "How is the gold/silver price calculated?",
            answer:
              "Gold and silver prices on Jar are based on **live market rates**.\n\n• Prices are derived from the wholesale bullion market\n• A small margin is added to cover operational costs (like storage, insurance, and processing)\n• The final buy and sell price is always shown clearly in the app before you invest\n\nThis ensures full transparency, so you always know exactly what price you're buying or selling at.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "buy-sell-price-difference",
            question:
              "Why is there a difference between sell price and buy price?",
            answer:
              "The difference between buy and sell price is called the price spread, and it is a standard part of digital gold/silver investing.\n\n• **Market spread** : Gold/silver is bought from and sold in the wholesale bullion market, where buyback prices are slightly lower than selling prices\n• **GST on buying** : 3% GST is applied when you buy gold/silver, but not when you sell\n• **Operational costs** : Includes secure storage, insurance, trustee oversight, and payment processing\n\nJar always shows you the final buy and sell price upfront, so you can make informed decisions with full transparency.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "current-vs-invested-value",
            question:
              "Why there is a difference in Current vs Invested Value?",
            answer:
              "The difference is due to changes in gold/silver prices over time.\n\n• **Invested Value** : Total amount you've invested\n• **Current Value** : Latest value based on live market prices\n\nSince gold and silver prices fluctuate daily, your current value may be higher or lower than what you invested.\n\nThis is normal and reflects how your investment is performing in real time.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
        ],
      },
      {
        id: "charges-taxes",
        name: "Charges & Taxes",
        questions: [
          {
            id: "any-charges-fees",
            question: "Are there any charges or fees?",
            answer:
              "No, The only charge you need to pay is **3% GST** paid to **government** when you buy digital gold/digital silver. Jar does not charge any additional commission.",
            supportActionable: "Solved by FAQ",
            faqContent: "Video",
          },
          {
            id: "why-3-percent-gst",
            question:
              "Why do I have to pay 3% GST while purchasing digital gold/silver on Jar?",
            answer:
              "As per government regulations, a **3% GST** is applicable on the purchase of gold and silver, including digital gold/silver.\n\n• This tax is mandated by the government, not set by Jar\n• It is applied only when you buy, not when you sell\n• The GST amount is clearly shown before you complete the transaction\n\nThis ensures full transparency while staying compliant with tax laws.",
            supportActionable: "Solved by FAQ",
            faqContent: "Video",
          },
        ],
      },
      {
        id: "membership-benefits",
        name: "Membership & Benefits",
        questions: [
          {
            id: "get-membership-card",
            question: "How can I get a Membership Card from Jar?",
            answer:
              "The Membership Card is issued to users who reach a certain savings milestone on the Jar platform. Keep saving daily to become eligible.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "download-membership-card",
            question: "Can I download the Membership Card?",
            answer:
              "Yes. You can download your Membership Card and certificates from the **Jar Safety Centre**. Save them to your device or print them for your records. You can also share them with family.",
            supportActionable: "In App Redirection",
            faqContent: "Text Suffices",
          },
          {
            id: "why-become-member",
            question: "Why should I become a Jar Member?",
            answer:
              "Becoming a Jar member gives you access to an **exclusive Membership Card** available to only a select **few Jar users**.\n\nYou also receive trust certificates for your Jar savings. Save daily to unlock your Membership Card.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "lose-membership-on-delete",
            question:
              "If I delete my app or lose my phone, will I lose my membership?",
            answer:
              "Your Membership Card is securely linked to your account and phone number.\n\nJust **reinstall** the app and **log in**, your card and all Jar savings proof will be restored automatically. For extra safety, you can also download and save the card to your phone's gallery as a backup.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "physical-card-available",
            question: "Is there a Physical card also available?",
            answer:
              "Physical card delivery will be available **soon**. Until then, your **digital Membership Card** acts as valid proof of your Jar savings and can be downloaded for your records.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
        ],
      },
    ],
  },
  {
    id: "jar-gold",
    faqCategory: "Jar Gold",
    faqPageHeader: "Buying Digital Gold on Jar",
    icon: "🥇",
    subcategories: [
      {
        id: "daily-savings",
        name: "Daily Savings",
        questions: [
          {
            id: "what-are-daily-savings",
            question: "What are Daily Savings on Jar?",
            answer:
              "Daily Savings lets you automatically save a **fixed amount** in digital gold **every day**. The amount is auto-debited from your bank account, so you can save consistently without having to remember it. You can start, modify, or cancel it anytime.",
            supportActionable: "Solved by FAQ",
            faqContent: "Video",
          },
          {
            id: "why-setup-daily-savings",
            question: "Why should I setup Daily Savings?",
            answer:
              "Daily Savings helps you build a saving habit effortlessly. With automatic deductions, you stay consistent, avoid missing savings, and steadily grow your gold savings over time.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "how-setup-daily-savings",
            question: "How do I set up Daily Savings?",
            answer:
              "To set up Daily Savings:\n\n1. Open the Jar app\n2. Select **Daily Savings**\n3. Enter the **amount** you want to save daily\n4. Tap **Proceed**\n5. Select your payment menthod and setup autopay\n\nOnce done, the first debit for your daily savings will happen **within 24 hours** of setup, usually this happens immediately.",
            supportActionable: "In App Redirection",
            faqContent: "Text Suffices",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "first-daily-savings-debit",
            question:
              "When will my first Daily Savings debit be initiated after setup?",
            answer:
              "Your **first** Daily Savings debit happens immediately after setup. However, in few cases it make take upto 24 hours.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "daily-savings-min-max",
            question:
              "What is the minimum and maximum amount allowed for Daily Savings?",
            answer:
              "You can start your Daily Savings with minimum amount of **₹10** and maximum of **₹5000**. If you wish to save more, you can save upto **₹1,00,000** manually through Instant save.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "manage-daily-savings",
            question: "How can I manage my Daily Savings?",
            answer:
              "To Manage your active savings plan:\n\n1. Open your Jar App.\n2. Tap on the **Profile** icon at the top left corner.\n3. Scroll down to the **Jar Gold** section. All active plans will be displayed here, with **Active** highlighted in green.\n4. Tap on the **Active Plan** to view details such as total savings, subscription amount, and total days invested under the latest plan.\n5. Scroll down to see the option to increase your savings.\n6. Further down, you'll find **Manage Savings**.\n7. Tap **Manage Savings** to customize your savings plan.",
            supportActionable: "In App Redirection",
            faqContent: "Text Suffices",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "daily-savings-autopay-fails",
            question:
              "What will happen if the scheduled Daily Savings autopay fails?",
            answer:
              "If a daily savings payment is missed for any reason, we'll automatically **retry within** the **next 15 days** to keep your savings on track.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "change-daily-savings-amount",
            question: "Can I change/edit my active Daily Savings amount?",
            answer:
              "To Pause your active savings plan:\n\n1. Open your Jar App.\n2. Tap on the **Profile icon** at the top left corner.\n3. Scroll down to the **Jar Gold** section. All active plans will be displayed here, with **Active** highlighted in green.\n4. Tap on the **Active** Plan to view details such as total savings, subscription amount, and total days invested under the latest plan.\n5. Scroll down to see the **option** to increase your savings.\n6. Tap on the Increase Savings. Enter the amount you want to update.\n7. Select your payment menthod and complete the payment.\n\nYou daily savings amount will now be updated.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "pause-daily-savings",
            question: "How do I Pause my Savings Plan? (Daily)",
            answer:
              "To Pause your active savings plan:\n\n1. Open your Jar App.\n2. Tap on the **Profile** icon at the top left corner.\n3. Scroll down to the **Jar Gold** section. All active plans will be displayed here, with **Active** highlighted in green.\n4. Tap on the **Active Plan** to view details such as total savings, subscription amount, and total days invested under the latest plan.\n5. Scroll down to see the option to increase your savings.\n6. Further down, you'll find **Manage Savings**.\n7. Tap **Manage Savings** and tap **Pause** to pause your plan.\n8. Enter the days for which you want to Pause your plan.\n\nNote: Active will apprear only if you have active plan in your account. \"",
            supportActionable: "In App Redirection",
            faqContent: "Text Suffices",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "stop-daily-savings",
            question: "How do I Stop my Savings Plan? (Daily)",
            answer:
              "To Stop your plan:\n\n1. Open your Jar App.\n2. Tap on the **Profile icon** at the top left corner.\n3. Scroll down to the **Jar Gold** section. All active plans will be displayed here, with **Active** highlighted in green.\n4. Tap on the **Active Plan** to view details such as total savings, subscription amount, and total days invested under the latest plan.\n5. Scroll down to see the option to increase your savings.\n6. Further down, you'll find **Manage Savings**.\n7. Tap **Manage Savings** and tap **Stop** to Stop your plan.\n8. Confirm by tapping on **Stop Savings**.\n\nNote: **Active** will apprear only if you have active plan in your account. Incase you want to Stop a **Paused Plan** you will see **Resume**.",
            supportActionable: "In App Redirection",
            faqContent: "Text Suffices",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "two-debits-daily-savings",
            question:
              "Why have 2 debits happened for a single subscribed Daily Savings plan?",
            answer:
              "A **double debit** may occur if a previous day's savings **autopay fails** or is **missed**, often due to a bank-related issue. This is done to recover missed savings and ensure continuity in your savings plan.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
        ],
      },
      {
        id: "weekly-savings",
        name: "Weekly Savings",
        questions: [
          {
            id: "what-are-weekly-savings",
            question: "What are Weekly Savings on Jar?",
            answer:
              "Weekly Savings allow you automatically save a fixed amount in digital gold every week. The amount is auto-debited from your bank account, so you don't have to remember to save. You can cancel it anytime.",
            supportActionable: "Solved by FAQ",
            faqContent: "Video",
          },
          {
            id: "why-setup-weekly-savings",
            question: "Why should I setup Weekly Savings?",
            answer:
              "Weekly Savings helps you build a consistent saving habit without daily effort. It ensures you save regularly while keeping your plan flexible and manageable.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "how-setup-weekly-savings",
            question: "How do I set up Weekly Savings?",
            answer:
              "To set up Weekly Savings:\n\n1. Open the Jar app\n2. Select **Weekly Savings**\n3. Enter the **amount** you want to save daily\n4. Tap **Proceed**\n5. Select your payment menthod and setup autopay\n\nOnce done, the first debit for your daily savings will happen **within 7 days** of setup. You can see the schedule of debit through the following steps:\n\n1. Open your Jar App.\n2. Tap on the **Profile icon** at the top left corner.\n3. Scroll down to the **Jar Gold** section. All active plans will be displayed here, with **Active** highlighted in green.\n4. Tap on the **Active Plan** to view the debit schedule.",
            supportActionable: "In App Redirection",
            faqContent: "Text Suffices",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "manage-weekly-savings",
            question: "How can I manage my Weekly Savings?",
            answer:
              "To Manage your active savings plan:\n\n1. Open your Jar App.\n2. Tap on the **Profile** icon at the top left corner.\n3. Scroll down to the **Jar Gold** section. All active plans will be displayed here, with **Active** highlighted in green.\n4. Tap on the **Active Plan** to view details such as total savings, subscription amount, and total days invested under the latest plan.\n5. At the bottom, you'll find **Update Savings Plan**.\n6. Tap **Update Savings Plan** to customize your savings plan.",
            supportActionable: "In App Redirection",
            faqContent: "Text Suffices",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "change-weekly-savings-amount",
            question: "Can I change/edit my active Weekly Savings amount?",
            answer:
              "To change savings amount for your active plan:\n\n1. Open your Jar App.\n2. Tap on the **Profile** icon at the top left corner.\n3. Scroll down to the **Jar Gold** section. All active plans will be displayed here, with **Active** highlighted in green.\n4. Tap on the **Active Plan** to view details such as total savings, subscription amount, and total days invested under the latest plan.\n5. At the bottom, you'll find **Update Savings Plan**.\n6. Tap **Update Savings Plan** to customize the frequency and amount.\n\nYour weekly savings amount will now be updated.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "pause-weekly-savings",
            question: "How do I Pause my Savings Plan? (Weekly)",
            answer:
              "To Pause your active savings plan:\n\n1. Open your Jar App.\n2. Tap on the **Profile** icon at the top left corner.\n3. Scroll down to the **Jar Gold** section. All active plans will be displayed here, with **Active** highlighted in green.\n4. Tap on the **Active Plan** to view details such as total savings, subscription amount, and total days invested under the latest plan.\n5. Scroll down to see the option to increase your savings.\n6. Further down, you'll find **Disable Savings Plan**. Tap on it.\n7. Now Select **Pause** instead. Select the duration and tap **Pause**.",
            supportActionable: "In App Redirection",
            faqContent: "Text Suffices",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "stop-weekly-savings",
            question: "How do I Stop my Savings Plan? (Weekly)",
            answer:
              "To Stop your plan:\n\n1. Open your Jar App.\n2. Tap on the **Profile icon** at the top left corner.\n3. Scroll down to the **Jar Gold** section. All active plans will be displayed here, with **Active** highlighted in green.\n4. Tap on the **Active Plan** to view details such as total savings, subscription amount, and total days invested under the latest plan.\n5. Scroll down to see the option to increase your savings.\n6. Further down, you'll find **Disable Savings Plan**. Tap on it.\n7. Now, tap **Diable Savings Plan**.\n\nNote: **Active** will apprear only if you have active plan in your account. Incase you want to Stop a **Paused Plan** you will see **Resume**.",
            supportActionable: "In App Redirection",
            faqContent: "Text Suffices",
            deeplink: "https://www.myjar.app/",
          },
        ],
      },
      {
        id: "monthly-savings",
        name: "Monthly Savings",
        questions: [
          {
            id: "what-are-monthly-savings",
            question: "What are Monthly Savings on Jar?",
            answer:
              "Monthly Savings lets you automatically save a **fixed amount** in digital gold **every month**. The amount is deducted from your bank account automatically, so you don't have to remember to save. You can cancel anytime, and only the chosen amount will be deducted.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "why-setup-monthly-savings",
            question: "Why should I setup Monthly Savings?",
            answer:
              "Monthly Savings helps you build a disciplined saving habit without any hassle. By automating your savings, you ensure steady growth of your gold investment **every month**.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "how-setup-monthly-savings",
            question: "How do I set up Monthly Savings?",
            answer:
              "To set up Monthly Savings:\n\n1. Open the Jar app\n2. Select **Monthly Savings**\n3. Enter the **amount** you want to save daily\n4. Tap **Proceed**\n5. Select your payment menthod and setup autopay\n\nOnce done, the first debit for your daily savings will happen **within 30 days** of setup. You can see the **schedule** of debit through the following steps:\n\n1. Open your Jar App.\n2. Tap on the **Profile icon** at the top left corner.\n3. Scroll down to the **Jar Gold** section. All active plans will be displayed here, with **Active** highlighted in green.\n4. Tap on the **Active Plan** to view the debit schedule.",
            supportActionable: "In App Redirection",
            faqContent: "Text Suffices",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "manage-monthly-savings",
            question: "How can I manage my Monthly Savings?",
            answer:
              "To Manage your active savings plan:\n\n1. Open your Jar App.\n2. Tap on the **Profile** icon at the top left corner.\n3. Scroll down to the **Jar Gold** section. All active plans will be displayed here, with **Active** highlighted in green.\n4. Tap on the **Active Plan** to view details such as total savings, subscription amount, and total days invested under the latest plan.\n5. At the bottom, you'll find **Update Savings Plan**.\n6. Tap **Update Savings Plan** to customize your savings plan.",
            supportActionable: "In App Redirection",
            faqContent: "Text Suffices",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "change-monthly-savings-amount",
            question: "Can I change/edit my active Monthly Savings amount?",
            answer:
              "To change savings amount for your active plan:\n\n1. Open your Jar App.\n2. Tap on the **Profile** icon at the top left corner.\n3. Scroll down to the **Jar Gold** section. All active plans will be displayed here, with **Active** highlighted in green.\n4. Tap on the **Active Plan** to view details such as total savings, subscription amount, and total days invested under the latest plan.\n5. At the bottom, you'll find **Update Savings Plan**.\n6. Tap **Update Savings Plan** to customize the frequency and amount.\n\nYour monthly savings amount will now be updated.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "pause-monthly-savings",
            question: "How do I Pause my Savings Plan? (Monthly)",
            answer:
              "To Pause your active savings plan:\n\n1. Open your Jar App.\n2. Tap on the **Profile** icon at the top left corner.\n3. Scroll down to the **Jar Gold** section. All active plans will be displayed here, with **Active** highlighted in green.\n4. Tap on the **Active Plan** to view details such as total savings, subscription amount, and total days invested under the latest plan.\n5. Scroll down to see the option to increase your savings.\n6. Further down, you'll find **Disable Savings Plan**. Tap on it.\n7. Now Select **Pause** instead. Select the duration and tap **Pause**.",
            supportActionable: "In App Redirection",
            faqContent: "Text Suffices",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "stop-monthly-savings",
            question: "How do I Stop my Savings Plan? (Monthly)",
            answer:
              "To Stop your plan:\n\n1. Open your Jar App.\n2. Tap on the **Profile icon** at the top left corner.\n3. Scroll down to the **Jar Gold** section. All active plans will be displayed here, with **Active** highlighted in green.\n4. Tap on the **Active Plan** to view details such as total savings, subscription amount, and total days invested under the latest plan.\n5. Scroll down to see the option to increase your savings.\n6. Further down, you'll find **Disable Savings Plan**. Tap on it.\n7. Now, tap **Diable Savings Plan**.\n\nNote: **Active** will apprear only if you have active plan in your account. Incase you want to Stop a **Paused Plan** you will see **Resume**.",
            supportActionable: "In App Redirection",
            faqContent: "Text Suffices",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "monthly-savings-autopay-fails",
            question:
              "What will happen if the scheduled Monthly Savings autopay fails?",
            answer:
              "If a daily savings payment is missed for any reason, we'll automatically **retry within** the **next 15 days** to keep your savings on track.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
        ],
      },
      {
        id: "instant-saving",
        name: "Instant Saving",
        questions: [
          {
            id: "what-are-instant-saving",
            question: "What are Instant Saving?",
            answer:
              "Instant Savings/Manual Savings/ One time Savings lets you buy digital gold anytime you want. You can save instantly by tapping the **Save Instantly** icon on the home screen and start investing immediately.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "when-opt-instant-savings",
            question: "When should I opt for Instant Savings?",
            answer:
              "Use Instant Savings whenever you want to invest immediately, without waiting for your Daily, Weekly, or Monthly Savings plan. It's perfect for topping up your gold balance or taking advantage of market opportunities.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "purchase-gold-instantly",
            question: "How can I purchase digital gold instantly on Jar?",
            answer:
              "To purchase digital gold instantly:\n\n1. Open the Jar app\n2. Tap **Save Instantly**\n3. Enter the amount you want to save\n4. Tap **Pay Now** to complete the purchase",
            supportActionable: "In App Redirection",
            faqContent: "Text Suffices",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "instant-saving-min-max",
            question:
              "What are the maximum and minimum amounts I can use for Instant Saving?",
            answer:
              "The minimum amount for Instant Savings is **₹10**, and the maximum is **₹1,00,000** per transaction, with a limit of **₹1,000** per transaction for your first **5 transactions.**",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "instant-saving-daily-limit",
            question: "How many Instant Saving transactions can I do in a day?",
            answer:
              "There's no limit on the number of transactions, but as per UPI regulations, you can do payments up to **₹1,00,000** in a single day.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
        ],
      },
      {
        id: "track-savings",
        name: "Track Savings",
        questions: [
          {
            id: "track-investment-value",
            question: "How do I track my investment value?",
            answer:
              "You can track your investment value on Jar by viewing the **Locker** on the home screen, which shows the **amount** of 24K gold in your savings and its **total value** in ₹. You can also go to the **Transactions tab**, tap the dropdown icon in the locker, you will see both your **invested amount** and the **current value** of your savings in ₹.",
            supportActionable: "In App Redirection",
            faqContent: "GIF",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "payment-history-investments",
            question:
              "Where can I see the payment history for my investments on Jar?",
            answer:
              "You can view the complete **payment history** of your investments in the Transactions section available in the bottom navigation bar. You can also use filters on the Transactions screen to find specific transactions types easily.",
            supportActionable: "Solved by FAQ",
            faqContent: "GIF",
          },
        ],
      },
      {
        id: "round-off",
        name: "Round-Off",
        questions: [
          {
            id: "what-is-round-off",
            question:
              "What is Round-offs and how does it work? Why opt for the round off feature?",
            answer:
              "Round-Off helps you **save automatically** whenever you **spend online**. Jar **reads** your transaction amounts **via SMS** and **rounds** them up to the **nearest ₹5** or **₹10**. For example, if you spend ₹18, it will be rounded up to ₹20, and the extra ₹2 will be saved in your locker. You can set it up to save automatically or manually.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "setup-round-off",
            question: "How do I set up Round-Off?",
            answer:
              "To set up Round Off:\n\n1. Open the **Account** icon on the bottom of the home screen.\n2. Go to the **Settings** tab.\n3. Click **Round-offs** and tap **Proceed**.\n4. Choose how you want to save and tap **Go Ahead**.\n5. Review your Round-Off details, tap **Proceed**, and select a payment method to complete setup.",
            supportActionable: "In App Redirection",
            faqContent: "Text Suffices",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "round-off-min-max",
            question:
              "What is the minimum & maximum amount that can be rounded off?",
            answer:
              "The minimum amount is **₹5**, and the maximum amount is **₹20**.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "stop-round-off",
            question: "How do I stop Round-Off on Jar?",
            answer:
              "To stop round-off:\n\n1. Open the **Account** icon at the bottom of the screen.\n2. Go to **Settings**.\n3. Tap **Round-off**.\n4. Click **Stop Round-Off**.\n6. Tap **Disable** on the pop-up.",
            supportActionable: "In App Redirection",
            faqContent: "Text Suffices",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "pause-round-off",
            question: "How do I pause Round-Off on Jar?",
            answer:
              "To stop round-off:\n\n1. Open the **Account** icon at the bottom of the screen.\n2. Go to **Settings**.\n3. Tap **Round-off**.\n4. Click **Stop Round-Off**.\n6. Tap **Pause Instead** on the pop-up.",
            supportActionable: "In App Redirection",
            faqContent: "Text Suffices",
            deeplink: "https://www.myjar.app/",
          },
        ],
      },
    ],
  },
  {
    id: "jar-silver",
    faqCategory: "Jar Silver",
    faqPageHeader: "Buying Digital Silver on Jar",
    icon: "🪙",
    subcategories: [
      {
        id: "about-digital-silver",
        name: "About Digital Silver",
        questions: [
          {
            id: "what-is-digital-silver",
            question: "What is Digital Silver?",
            answer:
              "Digital silver is a simple way to invest in precious metals. You can start saving from just ₹10, and for every amount you invest, an equivalent amount of pure silver is securely stored in your name in BRINK vaults",
            supportActionable: "Solved by FAQ",
            faqContent: "Video",
          },
          {
            id: "why-digital-silver",
            question:
              "Why should I buy digital silver instead of physical silver?",
            answer:
              "Digital silver let you invest without worrying about storage, safety, or making charges. You can buy small amounts anytime, track value in real-time, and still convert it into physical gold/silver whenever you want.\n\n- Start small – Invest from just ₹10\n- No making charges\n- Zero storage cost – Stored securely at no extra charge\n- High purity – 999 Fine Silver (99.99%)\n- Easy access – Buy, track, sell, or withdraw anytime",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "silver-stored-safely",
            question:
              "Where is my digital silver stored? Is it stored safely?",
            answer:
              "Your silver is stored in secure **Brink's vaults**, one of the **world's leading** vault providers that offer -\n\n- Bank-grade security infrastructure\n- 24×7 monitored vaults\n- Stored under your name\n\nThe storage is independently monitored by **Vistra**, ensuring your holdings are always safe and cannot be accessed without your consent.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "silver-savings-safe",
            question: "Is my savings safe with Jar?",
            answer:
              "Yes, they 100% safe with Jar. Your silver is stored in secure **Brink's vaults**, one of the **world's leading** vault providers that offer -\n\n- Bank-grade security infrastructure\n- 24×7 monitored vaults\n- Stored under your name\n\nThe storage is independently monitored by **Vistra**, ensuring your holdings are always safe and cannot be accessed without your consent.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "live-silver-price",
            question: "Where can I find the live silver price?",
            answer:
              "The live silver price is displayed at the top right corner of the Silver Savings screen, which you can access from the Jar app home screen.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "silver-not-showing-home",
            question: "Why isn't my Silver savings showing in the Home screen?",
            answer:
              "Your silver savings are currently visible only on the Silver Savings screen. Don't worry, we're working on an update to soon show your silver savings along with your total Jar savings on the home screen.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
        ],
      },
      {
        id: "silver-on-jar",
        name: "Silver on Jar",
        questions: [
          {
            id: "how-save-jar-silver",
            question: "How can I save in Jar Silver?",
            answer:
              "Saving in Jar is simple and flexible. You can save in 999 pure digital silver either manually anytime with Instant Buy, or automatically with Daily Savings. All your savings are securely stored in digital silver, and their value can grow as silver prices increase over time.",
            supportActionable: "In App Redirection",
            faqContent: "Text Suffices",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "what-is-one-time-savings",
            question: "What is One-time Savings?",
            answer:
              "With One-time Savings, you can buy digital silver instantly, anytime and for any amount. Simply tap the Buy Now in the Silver Savings section to get started.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "purchase-silver-manually",
            question: "How can I purchase silver manually on Jar?",
            answer:
              "To buy silver:\n\n1. Open the Jar app\n2. Tap the Silver Savings card on the home screen\n3. Tap Buy Now\n4. Enter the amount\n5. Tap Continue",
            supportActionable: "In App Redirection",
            faqContent: "Text Suffices",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "silver-min-max",
            question: "What is the minimum & maximum amount I can save?",
            answer:
              "The minimum amount you can invest in manual savings is ₹10 and the maximum amount you can invest is ₹1,00,000.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "daily-savings-silver",
            question: "Can I set up Daily Savings for Silver on Jar?",
            answer:
              "You can set up Daily Savings for Silver only if you have an active Daily Savings plan for digital gold of more than ₹50.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "weekly-monthly-silver",
            question:
              "Do we have options to setup up weekly and monthly savings for Silver on Jar?",
            answer:
              "No, currently we don't have options to set up Weekly and Monthly Savings for Silver on Jar.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
        ],
      },
      {
        id: "silver-pricing-value",
        name: "Pricing & Value",
        questions: [
          {
            id: "silver-buy-sell-difference",
            question:
              "Why is there a difference between buying and selling price of silver?",
            answer:
              "The difference between buy and sell price is called the price spread, and it is a standard part of digital gold/silver investing.\n\n**Market spread** - Silver is bought from and sold in the wholesale bullion market, where buyback prices are slightly lower than selling prices\n**GST on buying** - 3% GST is applied when you buy gold/silver, but not when you sell\n**Operational costs** - Includes secure storage, insurance, trustee oversight, and payment processing\n\nJar always shows you the final buy and sell price upfront, so you can make informed decisions with full transparency.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "silver-additional-charges",
            question:
              "Is there any additional charges applied while buying silver?",
            answer:
              "No, The only charge you need to pay is 3% GST paid to government when you buy digital silver. Jar does not charge any additional commission.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "silver-current-vs-invested",
            question:
              "Why there is a difference in Current vs Invested Value?",
            answer:
              "The difference is due to changes in silver prices over time.\n\n**Invested Value** - Total amount you've invested\n**Current Value** - Latest value based on live market prices\n\nSince gold and silver prices fluctuate daily, your current value may be higher or lower than what you invested.\n\nThis is normal and reflects how your investment is performing in real time.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
        ],
      },
      {
        id: "silver-payment-status",
        name: "Payment Status",
        questions: [
          {
            id: "silver-purchase-pending",
            question:
              "Why is my silver purchase pending even after a successful payment?",
            answer:
              "We are apologe for the delay. This can occasionally happen due to a partner-side issue. Don't worry, your money is safe with us.\n\nWe're actively retrying, and your purchase should reflect in the locker within **24–72 hours**. You can also tap **Troubleshoot** to instantly recheck the status.",
            supportActionable: "Through In App Troubleshooting",
            faqContent: "GIF",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "silver-purchase-failed",
            question:
              "Why is my silver purchase marked as failed after a successful payment?",
            answer:
              "Sorry for the confusion, we understand your concern. This may happen due to a temporary partner-side issue. Don't worry, your money is safe with us. We're retrying from our end, and the status should update within **24–72 hours**. You can tap **Troubleshoot** to retry and refresh the status.",
            supportActionable: "Through In App Troubleshooting",
            faqContent: "GIF",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "silver-payment-in-progress",
            question: "Why my payment status is in progress?",
            answer:
              "Sorry for the delay. This is usually due to a temporary issue with your bank. Don't worry, your money is safe. The status will update within **24–72 hours**. You can also tap **Troubleshoot** to instantly recheck the payment status. If it fails, the amount will be refunded automatically.",
            supportActionable: "Through In App Troubleshooting",
            faqContent: "GIF",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "silver-payment-failed",
            question: "Why my payment status is failed?",
            answer:
              "This usually happens due to an issue at your bank's end. Don't worry, no money is deducted for failed transactions. If any amount is deducted, it will be refunded to your bank account within **24–72 hours**. Your money is safe.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "silver-download-invoice",
            question: "How can I download the invoice for my silver savings and withdrawals?",
            answer:
              "To download your invoice:\n\n1. Open the Jar app\n2. Tap the Silver Savings card on the home screen\n3. Scroll down to Recent Transactions\n4. Select the transaction you want\n5. Tap Download Invoice",
            supportActionable: "In App Redirection",
            faqContent: "Text Suffices",
            deeplink: "https://www.myjar.app/",
          },
        ],
      },
      {
        id: "silver-withdrawal",
        name: "Silver Withdrawal",
        questions: [
          {
            id: "silver-withdrawal-ways",
            question: "What are the different ways in which I can withdraw?",
            answer:
              "There are 3 ways to withdraw your savings:\n\n1. Withdraw savings in your Bank Account. (Note: No Charges are applied)\n2. Use your Jar savings to purchase Gold Coins.\n3. Use your Jar savings to purchase Jewellery through Nek",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "silver-withdraw-bank",
            question: "How can I withdraw my savings in my bank account?",
            answer:
              "To withdraw your savings:\n\n1. Open the Jar app and tap the Silver Savings card on the home screen\n2. Tap Withdraw\n3. Select Withdraw to Bank Account\n4. Enter the amount and tap Proceed\n5. Select the UPI ID where you want to receive the money\n6. Tap Proceed\n\nThe amount will be automatically transferred to your bank account.",
            supportActionable: "In App Redirection",
            faqContent: "Text Suffices",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "silver-withdraw-wait",
            question: "How long do I need to wait to withdraw my savings?",
            answer:
              "To keep your **savings secure** and **protect** your account from fraud, withdrawals can be made only after a **24-hour** wait period.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "silver-withdraw-daily-limit",
            question: "How many times can I withdraw in a day?",
            answer:
              "To keep your **savings secure** and **protect** your account from fraud, withdrawals can be made **once** in a **24-hours**.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "silver-withdraw-fees",
            question:
              "Does Jar charge any fees/taxes while withdrawing my savings?",
            answer:
              "No, there are **no charges** for withdrawing your savings from Jar.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
        ],
      },
      {
        id: "silver-withdrawal-issues",
        name: "Issues with Withdrawal",
        questions: [
          {
            id: "silver-withdrawal-in-progress",
            question:
              "Why is my withdrawal still in progress even though the silver has been deducted from my locker?",
            answer:
              "We are apologe for the delay. This can occasionally happen due to server issues with your bank. Don't worry, your money is safe.\n\nWe're actively retrying, and your withdrawn amount should reflect in your bank account within **48-72 hours**. You can also tap **Troubleshoot** to instantly recheck the status.",
            supportActionable: "Through In App Troubleshooting",
            faqContent: "GIF",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "silver-withdrawal-time",
            question:
              "How long does it take for my withdrawal to reach a final status?",
            answer:
              "Withdrawals are usually instant. In rare occassions this can happen due to server issues with your bank. Don't worry, your money is safe.\n\nWe're actively retrying, and your withdrawn amount should reflect in your bank account within **48-72 hours**. You can also tap **Troubleshoot** to instantly recheck the status.",
            supportActionable: "Through In App Troubleshooting",
            faqContent: "GIF",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "silver-withdrawal-failed",
            question:
              "Why did my withdrawal fail even though the silver was deducted from my locker?",
            answer:
              "This may be due to:\n\n1. Temporary bank server issues\n2. An invalid UPI ID\n3. A closed or inactive bank account\n\nIf the **issue persists**, please try again or use a different UPI ID.",
            supportActionable: "Through In App Troubleshooting",
            faqContent: "GIF",
            deeplink: "https://www.myjar.app/",
          },
        ],
      },
    ],
  },
  {
    id: "kyc",
    faqCategory: "ID Verification",
    faqPageHeader: "ID Verification",
    icon: "🪪",
    subcategories: [
      {
        id: "about-kyc",
        name: "About KYC",
        questions: [
          {
            id: "why-kyc",
            question: "Why should I do KYC/ID verification? Why is it necessary?",
            answer:
              "KYC helps keep your **account** and **savings secure**. It allows us to verify your identity, prevent fraud, and protect your funds.\n\nCompleting KYC allows you to **withdraw more than ₹30** at a time. Additonally, with **PAN KYC**, you can save beyond **₹1.5 lakh** in a financial year.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "where-start-kyc",
            question: "From where can I start doing my KYC/ID verification?",
            answer:
              "To start your KYC:\n\n1. Open the Jar app\n2. Tap the **Profile** icon (top left)\n3. Tap on your **Profile**\n4. Next to **KYC Verification**, tap **Not Verified**\n5. Enter your **PAN** details and tap **Verify**\n\nIf you **don't** have your PAN:\n6. Tap **Verify another way**\n7. Choose **Aadhaar verification**\n8. Upload a clear photo of your **Aadhaar card** (from **camera** or **gallery**)\n9. Tap **Upload Photo**\n\n**Note:** Verification is usually completed within **60 seconds** if all details are clear.",
            supportActionable: "In App Redirection",
            faqContent: "Text Suffices",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "kyc-status",
            question: "Where can I see my KYC Status?",
            answer:
              "To see your KYC status:\n\n1. Open the Jar app\n2. Tap the **Profile** icon (top left)\n3. Tap on your **Profile**\n4. You will be able to see KYC status next to **KYC Verification**\n\nIt will be **Verified** if KYC is done, **Not verified** if not done.",
            supportActionable: "In App Redirection",
            faqContent: "Text Suffices",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "pan-different-account",
            question: "Why can't I use my PAN card to verify a different account?",
            answer:
              "A PAN card can be linked to **only one** Jar account for KYC verification. If your PAN is already used on another account, it cannot be used again.\n\nYou can try verifying using your Aadhaar card or use a different PAN (if applicable).",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
        ],
      },
      {
        id: "kyc-transactions",
        name: "KYC & Transactions",
        questions: [
          {
            id: "purchase-without-kyc",
            question:
              "Can I purchase digital gold/silver without doing KYC/ID verification?",
            answer:
              "**Yes**, you can buy digital gold/silver without KYC. However, to withdraw **more than ₹30** in one go, completing KYC is required.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "withdraw-without-kyc",
            question:
              "Can I withdraw my digital gold/silver without doing KYC/ID verification?",
            answer:
              "Without KYC, withdrawals are **limited** to **only ₹30** . To withdraw higher amounts, you need to complete KYC.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "1.5-lakh-asked-again",
            question: "I have ₹1.5 lakh in savings and I am being asked for KYC again. Why?",
            answer:
              "This is because you have only completed **Aadhaar verification**. To continue saving beyond this limit, **PAN verification** is required as per **government regulatory guidelines.** Please complete PAN verification to keep saving without interruptions.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "savings-plan-paused-after-kyc",
            question: "My savings plan is paused even after completing KYC. Why?",
            answer:
              "This is because you have only completed **Aadhaar verification**. To continue saving beyond ₹1.5 lakh, **PAN verification** is required as per **government regulatory guidelines.** Please complete PAN verification to keep saving without interruptions.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
        ],
      },
      {
        id: "kyc-documents",
        name: "KYC Documents",
        questions: [
          {
            id: "kyc-required-documents",
            question: "What documents are required for KYC/ID verification?",
            answer:
              "You can complete KYC using:\n\n1. PAN card\n2. Aadhaar card",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "no-pan-alternative",
            question:
              "If I don't have a PAN card, can I use any alternative document?",
            answer:
              "Yes, you can use your Aadhaar card for KYC/ID verification.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "unable-upload-aadhaar",
            question:
              "I'm unable to upload my Aadhaar card photo from my gallery. What should I do?",
            answer:
              "Please try again with a clear image. If the issue continues, tap **Contact Jar Support** or write to **voc@changejar.in** for assistance.",
            supportActionable: "Support Required",
            faqContent: "Text Suffices",
          },
        ],
      },
      {
        id: "kyc-verification",
        name: "KYC Verification",
        questions: [
          {
            id: "kyc-failing-multiple-attempts",
            question: "Why is my KYC/ID verification failing even after multiple attempts?",
            answer:
              "This may happen if:\n\n1. The document or selfie image is unclear\n2. The selfie does not match the document\n3. Incorrect or someone else's document is uploaded\n\nPlease upload **clear** and **correct** details. If the issue persists, tap **Contact Jar Support** or write to **voc@changejar.in**.",
            supportActionable: "Support Required",
            faqContent: "Text Suffices",
          },
          {
            id: "kyc-stuck-pending",
            question:
              "My KYC/ID verification has been stuck in pending for more than 24 hours. What should I do?",
            answer:
              "Delays can happen due to:\n\n1. Unclear document or selfie\n2. Mismatch between document and selfie\n3. Incorrect or incomplete submission\n\nPlease wait or tap **Contact Jar Support** or write to **voc@changejar.in** if it takes longer than expected.",
            supportActionable: "Support Required",
            faqContent: "Text Suffices",
            comments: "Support - manually and approve",
          },
        ],
      },
      {
        id: "post-kyc-success",
        name: "Post KYC Success",
        questions: [
          {
            id: "unable-add-vpa-after-kyc",
            question:
              "After completing my KYC/ID verification, I am unable to added new VPA. Why?",
            answer:
              "This could be due to a name mismatch or verification issue. Please tap **Contact Jar Support** or write to **voc@changejar.in** for help.",
            supportActionable: "Support Required",
            faqContent: "Text Suffices",
          },
          {
            id: "redo-kyc-change-name",
            question:
              "Can I redo KYC/ID verification? I want to change my name on Invoice?",
            answer:
              "KYC **cannot** be redone once completed. For more details please tap **Contact Jar Support** or write to **voc@changejar.in**.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
        ],
      },
    ],
  },
  {
    id: "upi-id",
    faqCategory: "UPI ID/VPA",
    faqPageHeader: "Managing Your UPI IDs",
    icon: "💳",
    subcategories: [
      {
        id: "primary-upi-id",
        name: "Primary UPI ID",
        questions: [
          {
            id: "what-is-primary-upi",
            question: "What is a Primary UPI ID on Jar?",
            answer:
              "Your **Primary UPI ID** is the one you used to make your **first savings** on the Jar app.\n\nThe **name** linked to this UPI ID is used to verify any additional UPI IDs you add. This helps ensure that only you can make transactions on your account and keeps your savings secure.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "check-primary-upi",
            question: "Where can I check my Primary UPI ID?",
            answer:
              "To view your Primary UPI ID -\n\n1. Open Jar App\n2. Tap on the Profile (top left)\n3. Tap on your Name\n4. Tap Manage UPI IDs\n5. The First UPI ID you see in the Saved UPI ID's list is the Primary UPI ID\n\n**Note:** You can delete the other UPI IDs , but the Primary UPI ID can never be deleted",
            supportActionable: "In App Redirection",
            faqContent: "Text Suffices",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "change-primary-upi",
            question: "Can I change my Primary UPI ID?",
            answer:
              "No, your Primary UPI ID **cannot** be changed once it is set.\n\nHowever, in special cases, such as changes in bank account name, separation of joint accounts, or other valid circumstances. you can contact Jar Support to request an update to the name linked to your Primary UPI ID.\n\nOnce the name is updated in our system, you will be able to add new UPI IDs that match the updated name.\n\n**Note:** You may be required to submit valid supporting documents for verification.\n\nTap **Contact Jar Support** for further assistance or write to **voc@changejar.in**.",
            supportActionable: "Support Required",
            faqContent: "Text Suffices",
          },
          {
            id: "documents-for-name-update",
            question: "What documents are need to update the Name linked to my Primary VPA?",
            answer:
              "To process a name update request, we may require the following documents and checks:\n\n1. **Transaction Verification** - We verify past transactions made using your UPI ID to ensure they align with the requested name change.\n2. **Identity Proof** - Valid government ID proof such as: Aadhaar, PAN. The name on the document should match the requested name.\n3. **Bank Statement** - A recent bank statement showing transactions made using the UPI ID, especially in case of any name mismatch.\n4. **Additional Documents** (if applicable) - Depending on your situation, you may be asked to provide:\n - User's death: Death certificate\n - Closed bank account: Bank-issued closure proof\n - Relationship-based requests (e.g., father–son, spouses): ID proofs of both individuals\n - Separation of joint accounts: Documents confirming the account change\n - Separated couples: Supporting documents confirming separation\n\nThis process is designed to ensure strong security, so only you can access and use your savings.",
            supportActionable: "Support Required",
            faqContent: "Text Suffices",
          },
          {
            id: "unable-delete-primary-upi",
            question: "Why am I unable to delete my Primary UPI ID?",
            answer:
              "Your Primary UPI ID **cannot** be deleted. However, in special cases, such as a change in bank account name, separation of joint accounts, or other valid circumstances, you can contact Jar Support to request an **update** to the **name linked** to your Primary UPI ID.",
            supportActionable: "Support Required",
            faqContent: "Text Suffices",
          },
          {
            id: "primary-upi-not-recognized",
            question:
              "What should I do if the Primary UPI ID shown on my account is not recognized by me?",
            answer:
              "If you don't recognize the **Primary UPI ID** on your account, please tap **Conatct Jar Support** immediately or write to **voc@changejar.in**. This may indicate unauthorized activity, and our team will help secure your account and investigate the issue.",
            supportActionable: "Support Required",
            faqContent: "Text Suffices",
            comments: "Report Fraud Flow",
          },
          {
            id: "primary-upi-name-change",
            question:
              "I am the owner of the Primary UPI ID, however my name itself has changed, Can I request for Primary UPI ID change?",
            answer:
              "**Yes**, you can request a **name update** for your Primary UPI ID. Please Tap **Contact Jar Support** or voc@changejar.in and share valid supporting documents for verification. Our team will review your request and assist you with the update.",
            supportActionable: "Through In App Troubleshooting",
            faqContent: "Text Suffices",
            deeplink: "https://www.myjar.app/",
          },
        ],
      },
      {
        id: "managing-upi-ids",
        name: "Managing UPI IDs",
        questions: [
          {
            id: "view-all-upi",
            question:
              "Where can I view all the UPI IDs linked to my Jar account?",
            answer:
              "To view all the UPI IDs linked to your account -\n\n1. Open Jar App\n2. Tap on the Profile (top left)\n3. Tap on your Name\n4. Tap Manage UPI IDs\n5. You will see all the UPI IDs linked to your account\n\n**Note:** You can delete the other UPI IDs , but the Primary UPI ID can never be deleted",
            supportActionable: "In App Redirection",
            faqContent: "Text Suffices",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "add-additional-upi",
            question:
              "Where can I add additional UPI ids to my Jar account?",
            answer:
              "To add a new UPI ID to your account -\n\n1. Open Jar App\n2. Tap on the Profile (top left)\n3. Tap on your Name\n4. Tap Manage UPI IDs\n5. Tap Add a new UPI ID",
            supportActionable: "In App Redirection",
            faqContent: "Text Suffices",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "delete-non-primary-upi",
            question:
              "Can I delete UPI IDs other than my Primary UPI ID?",
            answer:
              "Yes you can **delete all** UPI IDs **expect** the Primary UPI ID as it is used for identity verification to keep your account secure.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "max-upi-ids",
            question:
              "What is the maximum number of UPI IDs I can add on Jar?",
            answer:
              "You can only add upto **5 UPI IDs** to you Jar account.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
        ],
      },
      {
        id: "adding-new-upi",
        name: "Adding a New UPI ID",
        questions: [
          {
            id: "unable-add-new-upi",
            question: "Why am I unable to add a new UPI ID?",
            answer:
              "You may be unable to add UPI ID due to the following reasons:\n\n1. You have reached the maximum limit of adding 5 UPI IDs.\n2. The name on your new UPI ID does not match with the name on your primary UPI ID.\n3. Your UPI ID is invalid\n\nFor more help tap on **Contact Jar Support** or write to **voc@changejar.in**.",
            supportActionable: "Support Required",
            faqContent: "Text Suffices",
          },
          {
            id: "name-mismatch-upi",
            question:
              "Why am I seeing a name mismatch error while adding a new UPI ID?",
            answer:
              "This happens because the name on the UPI ID you're trying to add doesn't match with the name linked to your primary UPI ID on Jar. For security reasons and fraud prevention, we only allow UPI IDs that belong to the same account holder.\n\nIf you believe this is an error or need further assistance, tap on **Contact Jar Support**.",
            supportActionable: "Support Required",
            faqContent: "Text Suffices",
          },
          {
            id: "add-non-matching-upi",
            question:
              "When can I request to add a UPI ID that does not match the name on my Primary UPI ID or does not belong to me?",
            answer:
              "In general, Jar only allows UPI IDs that belong to the same account holder for security reasons. However, exceptions can be requested in specific use cases, such as:\n\n**Example Scenarios:**\n\n1. Parent - Child: Primary VPA in the parent's name, new VPA in the child's name.\n2. Husband - Wife: Primary VPA in the husband's name, new VPA in the wife's name.\n3. Death Case: Primary VPA holder is deceased.\n4. Different Name Formats - Minor variations like \"A Rahul\" vs \"Anurag Rahul.\"\n5. Used Business Account First - First VPA added was a business UPI ID.\n\nIf your case falls under one of these scenarios, you can request support to add the new UPI ID.\n\n**Note:** Supporting proofs will be required to allow additon of new UPI ID",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "documents-non-matching-upi",
            question:
              "What documents are required to add a UPI ID that does not match the name on my Primary UPI ID?",
            answer:
              "Depending on your situation, the following requirements apply:\n\n1. Death Case: A valid death certificate of the primary VPA holder is mandatory.\n2. Business to Personal: You must provide bank proof showing ownership of the account.\n3. Divorce Case: Legal documentation proving the divorce is required.\n\n**Important:** Additionally, **PAN or Aadhaar** card proof of the person whose UPI ID is to be added is required. Ensure that the name on the government document submitted as proof matches the UPI ID name exactly.\n\nAfter preparing these documents, tap **Contact Jar Support**.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "raise-request-add-upi",
            question: "How can I raise a request to add or update such a UPI ID?",
            answer:
              "Once you have all the requested dicuments handy, you can contact Jar's support team, by tapping **Contact Jar Support** or email us at **voc@changejar.in**.",
            supportActionable: "Support Required",
            faqContent: "Text Suffices",
            comments: "72 hours TAT",
          },
          {
            id: "new-upi-activation-time",
            question:
              "After submitting the required documents, how long does it take for the new UPI ID to be activated on Jar?",
            answer:
              "After you submit all the requested proofs to Jar Support, it can take **3–5 working days** for the new VPA to be added once validation is successful. If the validation fails, the Jar Support team will inform you with the reason.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
        ],
      },
    ],
  },
  {
    id: "payments-savings",
    faqCategory: "Payments/ Savings",
    faqPageHeader: "Payments & Statements",
    icon: "📱",
    subcategories: [
      {
        id: "payment-status",
        name: "Payment Status",
        questions: [
          {
            id: "gold-purchase-pending",
            question:
              "Why is my gold purchase still pending even though the payment was successful?",
            answer:
              "We are apologe for the delay. This can occasionally happen due to a partner-side issue. Don't worry, your money is safe with us.\n\nWe're actively retrying, and your purchase should reflect in the locker within **24–72 hours**. You can also tap **Troubleshoot** to instantly recheck the status.",
            supportActionable: "Through In App Troubleshooting",
            faqContent: "Video",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "gold-purchase-failed",
            question:
              "Why is my gold purchase marked as failed after a successful payment?",
            answer:
              "Sorry for the confusion, we understand your concern. This may happen due to a temporary partner-side issue. Don't worry, your money is safe with us. We're retrying from our end, and the status should update within **24–72 hours**. You can tap **Troubleshoot** to retry and refresh the status.",
            supportActionable: "Through In App Troubleshooting",
            faqContent: "Video",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "unknown-gold-purchases",
            question:
              "Why do I see gold purchases in my transaction history that I did not make?",
            answer:
              "We understand this may feel concerning. These are usually auto-debits from an **active savings plan** on Jar.\n\nIf you don't have any active plans or something feels incorrect, please tap **Contact Jar Support**, our team will help you.",
            supportActionable: "Support Required",
            faqContent: "Text Suffices",
          },
          {
            id: "payment-in-progress",
            question: "Why is my payment status showing as 'In Progress'?",
            answer:
              "Sorry for the delay. This is usually due to a temporary issue with your bank. Don't worry, your money is safe. The status will update within **24–72 hours**. You can also tap **Troubleshoot** to instantly recheck the payment status. If it fails, the amount will be refunded automatically.",
            supportActionable: "Through In App Troubleshooting",
            faqContent: "Video",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "payment-status-update-time",
            question:
              "How long does it take for a payment status to update to 'Success' or 'Failed'?",
            answer:
              "We understand the wait can be frustrating. Payment status usually updates within **24–72 hours** due to bank or processing delays.\n\nYou can tap **Troubleshoot** anytime to get the latest status instantly.",
            supportActionable: "Through In App Troubleshooting",
            faqContent: "Video",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "payment-status-failed",
            question: "Why is my payment status showing as 'Failed'?",
            answer:
              "This usually happens due to an issue at your bank's end. Don't worry, no money is deducted for failed transactions. If any amount is deducted, it will be refunded to your bank account within **24–72 hours**. Your money is safe.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
        ],
      },
      {
        id: "payment-history-invoice",
        name: "Payment History and Invoice",
        questions: [
          {
            id: "view-payment-details",
            question: "Where can I view the details of my payments?",
            answer:
              "To view your payment details:\n\n1. Open the Jar app\n2. Tap **Transactions** on the bottom navigation bar\n3. Apply **filters** based on transaction status, type, and date\n4. Select the transaction you want to view\n\n**Note:** You'll be able to see the **Transaction status** and **Order details**. You can also download the **invoice** by tapping **Invoice**.",
            supportActionable: "In App Redirection",
            faqContent: "GIF",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "find-invoice",
            question: "Where can I find the invoice for my payment?",
            answer:
              "To download your invoice:\n\n1. Open the Jar app\n2. Tap **Transactions** on the bottom navigation bar\n3. Select the transaction\n4. Tap **Invoice** to download it\n\n**Note:** You can also use filters on the Transactions screen to find specific transactions easily.",
            supportActionable: "In App Redirection",
            faqContent: "GIF",
            deeplink: "https://www.myjar.app/",
          },
        ],
      },
      {
        id: "account-statement",
        name: "Account Statement",
        questions: [
          {
            id: "download-account-statement",
            question: "Where can I download my account statement?",
            answer:
              "To download your account statement:\n\n1. Open the Jar app\n2. Tap **Transactions** on the bottom navigation bar\n3. Tap **Statement** (below the Locker)\n4. Select the **date range**\n5. Tap **Generate Statement**\n\nOnce generated, you can find it under **Previous Reports**. Tap the statement to open the PDF and download it.",
            supportActionable: "In App Redirection",
            faqContent: "GIF",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "statement-generation-time",
            question:
              "How long does it take for an account statement to be generated?",
            answer:
              "Account statements are generated in real time. Once requested, you can view them immediately under the **Previous Reports** section.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "view-previous-statements",
            question:
              "Where can I view previously requested account statements?",
            answer:
              "All your previously generated statements are available under the **Previous Reports** section of the Account Statment Page.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
        ],
      },
    ],
  },
  {
    id: "autopay-subscription",
    faqCategory: "AutoPay/ Subscription",
    faqPageHeader: "Managing your subscriptions",
    icon: "🔄",
    subcategories: [
      {
        id: "start-savings",
        name: "Start Savings",
        questions: [
          {
            id: "when-autopay-setup",
            question: "When does an autopay get setup on Jar?",
            answer:
              "AutoPay is set up through your **selected UPI app** when you choose to invest in Jar via Daily, Weekly, or Monthly subscription plans. AutoPay allows you to automatically save in digital gold/silver based on your selected plan. For every AutoPay deduction, your bank will send a notification reminding you of the debit. You can **manage** your AutoPay **easily** through the Jar app.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "see-savings-plans",
            question:
              "Where can I see the Savings Plans I have opted for on Jar?",
            answer:
              "To view your active savings plans:\n\n1. Open your Jar App\n2. Scroll down to the **Gold Saving Plans** section\n\n**Note:** This section appears only if you have active plans in your account.\n\nHere, you can see the **savings plans** you are **enrolled in** and the **amount** you are investing regularly. You can also **increase** your savings by **updating** the investment amount according to your preference through this section.",
            supportActionable: "In App Redirection",
            faqContent: "GIF",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "manage-savings-plans",
            question:
              "How can I manage the Savings Plans I have active on Jar?",
            answer:
              "To manage your active plans:\n\n1. Open your Jar App.\n2. Tap on the **Profile** icon at the top left corner.\n3. Scroll down to the **Jar Gold** section. All active plans will be displayed here, with **Active** highlighted in **green**.\n4. Tap on the Active Plan to view details such as total savings, subscription amount, and total days invested under the latest plan.\n5. Scroll down to see the option to increase your savings.\n6. Further down, you'll find **Manage Savings**.\n7. Tap Manage Savings to **Pause** or **Stop** your plan as needed.\n\n**Note:** **Active** will apprear only if you have active plan in your account.",
            supportActionable: "In App Redirection",
            faqContent: "Video",
            deeplink: "https://www.myjar.app/",
          },
        ],
      },
      {
        id: "pause-savings",
        name: "Pause Savings",
        questions: [
          {
            id: "how-pause-savings",
            question: "How do I Pause my Savings Plan?",
            answer:
              "To Pause your active plan:\n\n1. Open your Jar App.\n2. Tap on the **Profile** icon at the top left corner.\n3. Scroll down to the **Jar Gold** section. All active plans will be displayed here, with **Active** highlighted in green.\n4. Tap on the Active Plan to view details such as total savings, subscription amount, and total days invested under the latest plan.\n5. Scroll down to see the option to increase your savings.\n6. Further down, you'll find **Manage Savings**.\n7. Tap Manage Savings and tap **Pause** to pause your plan.\n8. Enter the days for which you want to Pause your plan.\n\n**Note:** Active will apprear only if you have active plan in your account.",
            supportActionable: "In App Redirection",
            faqContent: "Text Suffices",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "why-not-pause",
            question: "Why should I not Pause my plan?",
            answer:
              "Pausing your plan **interrupts** your regular savings and can **delay** your financial goals. **Consistent investing** through your active plan helps you **grow** your Jar savings steadily and make the most of your chosen subscription benefits.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
        ],
      },
      {
        id: "resume-savings",
        name: "Resume Savings",
        questions: [
          {
            id: "resume-savings-plan",
            question: "How do I Resume my Savings Plan?",
            answer:
              "To Resume your Paused plan:\n\n1. Open your Jar App.\n2. Tap on the **Profile** icon at the top left corner.\n3. Scroll down to the **Jar Gold** section. All Resumed plans will be displayed here, with **RESUME** highlighted.\n4. Tap on the **Resume** Plan to view details such as total savings, subscription amount, and total days invested under the latest plan.\n5. Scroll down to see **Manage Savings**.\n6. Tap **Manage Savings** and tap **Resume**. Your plan will be resumed.\n\n**Note:** Resume will apprear only if you have **Resumed** plan in your account.",
            supportActionable: "In App Redirection",
            faqContent: "Text Suffices",
            deeplink: "https://www.myjar.app/",
          },
        ],
      },
      {
        id: "stop-savings",
        name: "Stop Savings",
        questions: [
          {
            id: "how-stop-savings",
            question: "How do I Stop my Savings Plan?",
            answer:
              "To Stop your plan:\n\n1. Open your Jar App.\n2. Tap on the **Profile icon** at the top left corner.\n3. Scroll down to the **Jar Gold** section. All active plans will be displayed here, with **Active** highlighted in green.\n4. Tap on the **Active Plan** to view details such as total savings, subscription amount, and total days invested under the latest plan.\n5. Scroll down to see the option to increase your savings.\n6. Further down, you'll find **Manage Savings**.\n7. Tap **Manage Savings** and tap **Stop** to Stop your plan.\n8. Confirm by tapping on **Stop Savings**.\n\nNote: **Active** will apprear only if you have active plan in your account. Incase you want to Stop a **Paused Plan** you will see **Resume**.",
            supportActionable: "In App Redirection",
            faqContent: "Text Suffices",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "why-not-stop",
            question: "Why should I not Stop my plan?",
            answer:
              "Stopping your plan completely **ends** your **automatic savings**, which can significantly **delay** achieving your financial goals. Maintaining an active plan ensures your Jar savings continue to grow steadily and you continue to benefit from your chosen subscription plan.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
        ],
      },
    ],
  },
  {
    id: "withdrawal",
    faqCategory: "Withdrawal",
    faqPageHeader: "Withdrawal",
    icon: "🏦",
    subcategories: [
      {
        id: "gold-withdrawal",
        name: "Gold Withdrawal",
        questions: [
          {
            id: "gold-withdrawal-ways",
            question: "What are the different ways in which I can withdraw?",
            answer:
              "There are 3 ways to withdraw your savings:\n\n1. Withdraw savings in your Bank Account. (Note: No Charges are applied)\n2. Use your Jar savings to purchase Gold Coins.\n3. Use your Jar savings to purchase Jewellery through Nek",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "withdraw-to-bank",
            question: "How can I withdraw my savings in my bank account?",
            answer:
              "To withdraw your savings:\n\n1. Open the Jar app\n2. Tap **Withdraw** on your Jar Locker\n3. Select **Withdraw to Bank Account**\n4. Enter the **amount** and tap **Proceed**\n5. Select the **UPI ID** and tap **Confirm**\n\nThe amount will be transferred to your bank account.\n\nNote: You can track your withdrawal in the Transactions section.\n\nTo view the withdrawal transactions:\n\n1. Open the Jar app\n2. Tap **Transactions** on the bottom navigation bar\n3. Tap **Filter**\n4. Select **Withdrawal** under **Transaction Type**\n\nYou'll see all your withdrawal transactions. Tap any transaction to view details.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "purchase-jewellery-coins",
            question:
              "How can I use your Jar savings to purchase Jewellery/Gold Coins?",
            answer:
              "To withdraw your savings:\n\n1. Open the Jar app\n2. Tap **Withdraw** on your Jar Locker\n3. Select **24K Standard Gold Coin / Exclusive Silver Jwellery**\n4. Make a selection and during **checkout**, Use your **Jar Savings** for making payment\n\nYou Jar savings will be used for the order.\n\nNote: These options will be enabled only if you have Jar savings of **0.1g or more**. You can track your purchase in the Transactions section.\n\nTo view the Nek transactions:\n\n1. Open the Jar app\n2. Tap **Transactions** on the bottom navigation bar\n3. Tap **Filter**\n4. Select **Withdrawal** under **Transaction Type**\n5. You will see **Reedeemed on Nek** Transactions\n\nTap any transaction to view details of the payment and order.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "withdrawal-wait-time",
            question:
              "How long do I need to wait to withdraw my savings into my bank account?",
            answer:
              "To keep your **savings secure** and **protect** your account from fraud, withdrawals can be made only after a **24-hour** wait period.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "withdrawal-daily-limit",
            question: "How many times can I withdraw in a day?",
            answer:
              "To keep your **savings secure** and **protect** your account from fraud, withdrawals can be made **once** in a **24-hours**.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "withdrawal-fees",
            question:
              "Does Jar charge any fees/taxes while withdrawing my savings?",
            answer:
              "No, there are **no charges** for withdrawing your savings from Jar.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "amount-locked-withdrawal",
            question:
              "Why do I see some of my invested amount locked for withdrawal to my bank account?",
            answer:
              "To keep your savings secure and protect your account from fraud, withdrawals can be made only **after 24-hours** of **buy time**.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "gold-current-vs-invested",
            question:
              "Why there is a difference in my Current vs my Invested Value?",
            answer:
              "The difference is due to changes in gold/silver prices over time.\n\n**Invested Value -** Total amount you've invested\n**Current Value -** Latest value based on live market prices\n\nSince gold and silver prices fluctuate daily, your current value may be higher or lower than what you invested.\n\nThis is normal and reflects how your investment is performing in real time.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
        ],
      },
      {
        id: "gold-withdrawal-issues",
        name: "Issues with Withdrawal",
        questions: [
          {
            id: "gold-withdrawal-in-progress",
            question:
              "Why is my withdrawal still in progress even though the gold has already been deducted from my locker?",
            answer:
              "We are apologe for the delay. This can occasionally happen due to server issues with your bank. Don't worry, your money is safe.\n\nWe're actively retrying, and your withdrawn amount should reflect in your bank account within **24 hours**. You can also tap **Troubleshoot** to instantly recheck the status.\n\nIf your bank is unable to process the payment within 24 hours, we will reverse the withdrawn quantity back to your Jar savings.",
            supportActionable: "Through In App Troubleshooting",
            faqContent: "Video",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "gold-withdrawal-processing-time",
            question:
              "How long does it take for a withdrawal request to be processed and reach a final status?",
            answer:
              "Withdrawals are usually instant. In rare occassions this can happen due to server issues with your bank. Don't worry, your money is safe. We're actively retrying, and your withdrawn amount should reflect in your bank account within **24 hours**. You can also tap **Troubleshoot** to instantly recheck the status.\n\nIf your bank is unable to process the payment within 24 hours, we will reverse the withdrawn quantity back to your Jar savings.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
            comments: "instant, beneficiary, 42-78 hours",
          },
          {
            id: "gold-withdrawal-failed",
            question:
              "Why did my withdrawal fail even though the gold was deducted from my locker?",
            answer:
              "This may be due to:\n\n1. Temporary bank server issues\n2. An invalid UPI ID\n3. A closed or inactive bank account\n\nIf the **issue persists**, please try again or use a different UPI ID.",
            supportActionable: "Through In App Troubleshooting",
            faqContent: "Text Suffices",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "gold-withdrawal-refund-time",
            question:
              "If my withdrawal fails, how long will it take for the gold to be credited back to my Jar locker?",
            answer:
              "If the withdrawal continues to fail after retries, the deducted gold will be credited back to your locker within **24 hours**. Don't worry, your savings are safe with us. In case the issue persists, please try again or use a different UPI ID for withdrawal.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
            comments:
              "24 hours of window to retry, incase it doesn't go through amount will be settled within 48 hours of transaction",
          },
          {
            id: "withdrawal-blocked",
            question:
              "My withdrawal request is blocked. What should I do?",
            answer:
              "We've detected unusual activity on your account and temporarily paused withdrawals to keep your savings safe.\n\nPlease write to us at **voc@changejar.in**, and our team will help you resolve this and guide you on the next steps.",
            supportActionable: "Support Required",
            faqContent: "Text Suffices",
          },
          {
            id: "withdraw-different-upi",
            question:
              "I want to withdraw to a different UPI ID, but I'm unable to add a new one. What should I do?",
            answer:
              "You may be unable to add a new UPI ID due to the following reasons:\n\n1. You have reached the limit of 5 UPI IDs\n2. The name on the new UPI ID does not match your primary UPI ID\n3. The UPI ID entered is invalid\n\nPlease check and try again with the correct details.",
            supportActionable: "Through In App Troubleshooting",
            faqContent: "GIF",
            deeplink: "https://www.myjar.app/",
            comments: "Add Related Topics",
          },
          {
            id: "lost-sim-withdraw",
            question:
              "I lost my SIM card and cannot log in to my Jar account. How can I withdraw my savings from my Jar wallet?",
            answer:
              "We understand this can be concerning. Since your registered number is unavailable, our support team will help you process the withdrawal manually.\n\nPlease email **voc@changejar.in** with:\n\n1. Your registered mobile number\n2. KYC document used (Aadhaar or PAN)\n3. UPI ID where you want to receive the funds\n4. Bank statement showing transactions made on Jar\n\nOur team will verify your details and assist you with the withdrawal.",
            supportActionable: "Support Required",
            faqContent: "Text Suffices",
          },
        ],
      },
    ],
  },
  {
    id: "refer-earn",
    faqCategory: "Refer & Earn",
    faqPageHeader: "Refer & Earn",
    icon: "🎁",
    subcategories: [
      {
        id: "refer-earn-general",
        name: "Refer & Earn",
        questions: [
          {
            id: "what-is-refer-earn",
            question: "What is the Refer & Earn Program?",
            answer:
              "It's a program that allows you to **invite** friends and family to join Jar and **earn rewards** every time they save. Your rewards are added **directly** to your **locker** and can be **withdrawn anytime**.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "when-receive-rewards",
            question: "When will I receive my rewards?",
            answer:
              "You get **rewards** each time your refered friend saves. Rewards are credited **instantly** or **within** an hour into your Jar locker.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "eligibility-earn-rewards",
            question: "How do I qualify to earn referral rewards?",
            answer:
              "To qualify:\n\n1. Share your unique referral link with a friend\n2. Your friend must download the Jar app using your link and successfully create an account\n3. The referral should be properly tracked; if tracking fails, you can contact support for manual verification (as per policy)\n4. Rewards are based on the number and quality of transactions completed by your referred friend\n5. Maximum potential reward is up to ₹500\n6. Final payout will be the lower of:\n • the calculated reward based on transactions, or\n • the maximum reward cap (₹500)\n7. Any fraudulent activity (self-referrals, duplicate accounts, or duplicate UPI IDs) will lead to disqualification of rewards and may result in account suspension",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "where-rewards-credited",
            question: "Where will my rewards be credited?",
            answer:
              "Your **rewards** are added directly to your **Jar locker**, and you can **withdraw** them **anytime**.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "referral-reward-not-received",
            question:
              "I successfully referred someone but did not receive the reward. Why?",
            answer:
              "This may happen due to a few reasons:\n\n1. The user already had the Jar app installed or an existing account\n2. Your referral link had expired\n3. You have reached your referral limit for the month/year\n\nPlease tap **Contact Jar Support** or write to **voc@changejar.in** and our team will be able to help you.",
            supportActionable: "Support Required",
            faqContent: "Text Suffices",
            comments:
              "user - refer's phone number, timestamp of share, T&C matching",
          },
          {
            id: "referral-limits",
            question: "Are there any referral limits?",
            answer:
              "**Yes**, limits are defined as per Jar's terms of use to ensure fair participation for all users.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
        ],
      },
    ],
  },
  {
    id: "rewards",
    faqCategory: "Rewards",
    faqPageHeader: "Rewards",
    icon: "🏆",
    subcategories: [
      {
        id: "weekly-magic",
        name: "Weekly Magic",
        questions: [
          {
            id: "what-is-weekly-magic",
            question: "What is Weekly Magic?",
            answer:
              "Weekly Magic is a savings challenge where you can earn exciting rewards by saving consistently throughout the week",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "win-weekly-magic",
            question: "How can I win a Weekly Magic reward?",
            answer:
              "Join the weekly challenge and save daily to earn mystery cards. Collect all the cards for the week to unlock your reward.",
            supportActionable: "In App Redirection",
            faqContent: "Text Suffices",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "check-weekly-magic",
            question: "Where can I check my Weekly Magic reward?",
            answer:
              "You can find your Weekly Magic reward in the **Transactions** tab. You can also check your rewards in the **Weekly Magic** section on the **home screen**.",
            supportActionable: "In App Redirection",
            faqContent: "Text Suffices",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "weekly-magic-no-reward",
            question:
              "What should I do if I've completed my Weekly Magic but didn't get the reward?",
            answer:
              "All your earned rewards should be visible in the Transactions tab. Incase you are unable to see your rewards, Please tap **Contact Jar Support** or write to **voc@changejar.in**, and our team will help you resolve this.",
            supportActionable: "Support Required",
            faqContent: "Text Suffices",
          },
        ],
      },
      {
        id: "spins",
        name: "Spins",
        questions: [
          {
            id: "how-get-spins",
            question: "How will I get spins?",
            answer:
              "You earn spins when you save on Jar. The more you save, the higher your chances of getting spins. You can check your available spins in the **Spin to Win** section on **Jar's home screen**.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "spin-rewards",
            question: "What rewards can I get on playing spins?",
            answer:
              "You can win rewards like jackpot coupons, winnings, and brand offers on every spin.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "spins-daily-limit",
            question: "How many spins can I play in a day?",
            answer:
              "You can check your daily spin limit below the wheel. The maximum limit is **5 spins** per day.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "what-is-jackpot",
            question: "What is Jackpot and how can I use it?",
            answer:
              "A Jackpot is a special coupon you can win from Spin the Wheel. You can use it to unlock rewards. Make sure to use it before it expires.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "see-spin-coupons",
            question: "Where can I see the coupons I won while playing spins?",
            answer:
              "To view your coupons:\n\n1. Open the Jar app\n2. Tap the **Profile icon** (top left)\n3. Scroll to **Rewards**\n4. Tap **Offers**\n\nYou'll see all your active coupons here.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "withdraw-spin-rewards",
            question: "Can I withdraw the rewards I got in spins?",
            answer:
              "**No**, spin rewards **cannot** be withdrawn to your bank account. They can only be used for rewards through manual/instant/one time savings.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
        ],
      },
      {
        id: "coupons",
        name: "Coupons",
        questions: [
          {
            id: "find-coupons",
            question: "Where can I find the coupons?",
            answer:
              "To view your coupons:\n\n1. Open the Jar app\n2. Tap the **Profile icon** (top left)\n3. Scroll to **Rewards**\n4. Tap **Offers**\n\nYou'll see all your active coupons here.",
            supportActionable: "In App Redirection",
            faqContent: "Text Suffices",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "use-coupons",
            question: "How can I use the coupons?",
            answer:
              "You can use your coupons while making a manual/instant/ one time savings on Jar App.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
        ],
      },
      {
        id: "winnings",
        name: "Winnings",
        questions: [
          {
            id: "get-more-winnings",
            question: "How do I get more winnings?",
            answer:
              "You can earn more winnings by:\n\n1. Playing **Spin to Win**\n2. Setting up **Daily Savings**\n3. **Increasing** your **savings amount** regularly\n4. **Saving more** during special offers",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "use-winnings",
            question: "How do I use winnings?",
            answer:
              "You can use your winnings while making a manual/instant/ one time savings on Jar App.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "withdraw-winnings",
            question: "Can I withdraw my winnings directly?",
            answer:
              "**No**, winnings **cannot** be withdrawn to your bank account. They can only be used for rewards through manual/instant/one time savings.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "winnings-expiring",
            question: "Why are my winnings expiring?",
            answer:
              "Each winning comes with an expiry date. Make sure to use them before they expire.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
        ],
      },
    ],
  },
  {
    id: "profile",
    faqCategory: "Profile",
    faqPageHeader: "Profile Details",
    icon: "👤",
    subcategories: [
      {
        id: "edit-profile",
        name: "Edit Profile",
        questions: [
          {
            id: "change-mobile-number",
            question: "Can I change my registered mobile number?",
            answer:
              "No, your registered mobile number cannot be changed.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "update-name-email",
            question:
              "Can I update my name, age, email id or saved addresses?",
            answer:
              "Yes, you can update your details from the app.\n\nTo update your profile:\n\n1. Open the Jar app\n2. Tap the **Profile Icon** (top left)\n3. Select your **Profile**\n4. **Choose** the detail you want to update\n5. Make the changes and tap **Save**",
            supportActionable: "In App Redirection",
            faqContent: "GIF",
            deeplink: "https://www.myjar.app/",
          },
        ],
      },
      {
        id: "account-deletion",
        name: "Account Deletion",
        questions: [
          {
            id: "how-delete-account",
            question: "How do I delete my Jar account?",
            answer:
              "To delete your account:\n\n1. Open the Jar app\n2. Tap the **Profile** icon\n3. Scroll down to **Jar Support**\n4. Select **Profile Settings**\n5. Tap **Account Deletion** and Tap **Delete Account**",
            supportActionable: "In App Redirection",
            faqContent: "Text Suffices",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "check-before-deleting",
            question: "What should I check before deleting my Jar account?",
            answer:
              "Before deleting your account, ensure:\n\n- Your gold balance is 0\n- No autopay is active (daily, weekly, monthly)\n- No pending or failed autopay transactions\n- No gold delivery is in progress\n- No rewards, gifts, or offers are pending\n- No active gold lease\n- No active loan or insurance\n- No active P2P transactions\n- No active vouchers",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "data-after-deletion",
            question:
              "What happens to my private data after I delete my Jar account?",
            answer:
              "Once your account is deleted, your personal data is removed from our systems. However, some transaction data may be retained as required for legal or regulatory purposes.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "recover-deleted-account",
            question: "Can I recover a deleted account?",
            answer:
              "Yes, you can recover your account **within 60 days** of deletion. After that, it will be permanently deleted and cannot be restored.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "deletion-time",
            question: "How long does it take to delete the account?",
            answer:
              "The deletion request is processed immediately, but it may take **up to 24 hours** to complete.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "delete-through-support",
            question: "Can I delete my account through customer support?",
            answer:
              "Yes, you can Contact Jar Support by writing to **voc@changejar.in**, if you face any issues while deleting your account.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "deletion-charges",
            question: "Are there any charges for deleting my account?",
            answer:
              "No, there are no charges for deleting your Jar account.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "reason-for-deletion",
            question:
              "Is it compulsory to provide a reason for deleting my account?",
            answer:
              "No, providing a reason is optional. However, your feedback helps us improve.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "issues-deleting-account",
            question:
              "What should I do if I am facing issues while deleting the account?",
            answer:
              "Please tap **Contact Jar Support** or write to **voc@changejar.in**, and our team will assist you.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
        ],
      },
      {
        id: "sms-permissions",
        name: "SMS Permissions",
        questions: [
          {
            id: "why-sms-permissions",
            question: "Why does Jar ask for SMS permissions?",
            answer:
              "Jar asks for SMS permissions **only** to detect your online transactions and enable the Round-Off feature. You can **opt in** or out at any time.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "reads-personal-messages",
            question: "Does Jar reads my personal messages?",
            answer:
              "No, Jar **does not** read your personal messages. It only reads transaction-related SMS from banks and payment apps to power the Round-Off feature.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "use-without-sms",
            question: "Can I use Jar without providing SMS permission?",
            answer:
              "**Yes**, you can use Jar without SMS permissions. However, the Round-Off feature won't work without it. All other features like Daily Savings, Instant Save, and withdrawals will work normally.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
        ],
      },
    ],
  },
  {
    id: "nominee",
    faqCategory: "Nominee",
    faqPageHeader: "Nominee Addition",
    icon: "👥",
    subcategories: [
      {
        id: "nominee-general",
        name: "Nominee",
        questions: [
          {
            id: "who-is-nominee",
            question: "Who is a nominee?",
            answer:
              "A **nominee** is a person you assign to **receive your savings** in case of unforeseen circumstances.",
            supportActionable: "Solved by FAQ",
            faqContent: "Video",
          },
          {
            id: "why-add-nominee",
            question: "Why should I add a nominee?",
            answer:
              "Adding a nominee ensures that your savings can be easily transferred to a trusted person if something happens to you.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "where-add-nominee",
            question: "Where do i add nominee on the Jar?",
            answer:
              "To add a nominee:\n\n1. Open the Jar app\n2. Tap the **Profile** icon (top left)\n3. Tap **Add a Nominee** below your registered mobile number\n\n**Note:** This option is visible only if you haven't added a nominee yet.",
            supportActionable: "In App Redirection",
            faqContent: "Text Suffices",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "see-nominee",
            question: "Where can I see the nominee?",
            answer:
              "To view or update your nominee:\n\n1. Open the Jar app\n2. Tap the **Profile** icon\n3. Scroll down to the **Settings** section\n4. Tap **Nominee Details**\n5. Tap **Edit Details** to update\n\n**Note:** Nominee details can be updated only once every 30 days.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "how-many-nominees",
            question: "How many nominees can I jar on my Jar account?",
            answer:
              "You can add only **one nominee** to your Jar account.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "nominee-details-needed",
            question: "What details of the nominee are needed?",
            answer:
              "You'll need:\n\n1. Full name (as per official documents)\n2. Date of birth\n3. Relationship with the nominee\n4. Phone number\n\nYou can also optionally provide a government ID for records.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
        ],
      },
    ],
  },
  {
    id: "loans",
    faqCategory: "Loans",
    faqPageHeader: "Loans Related",
    icon: "📄",
    subcategories: [
      {
        id: "loans-general",
        name: "Loans",
        questions: [
          {
            id: "apply-loans-jar",
            question: "Where can I apply for loans on Jar?",
            answer:
              "Loan applications are currently not available on Jar. Only users with active loans can manage them through the app.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
            comments: "Mention that we are not giving any loans",
          },
          {
            id: "foreclose-loan",
            question: "How do I raise a request to foreclose my loan?",
            answer:
              "To request foreclosure of your active loan, please tap **Contact Jar Support**. Our team will guide you through the process.",
            supportActionable: "Support Required",
            faqContent: "Text Suffices",
          },
          {
            id: "pending-emis",
            question: "How many EMIs are pending for my loan to close?",
            answer:
              "To check your pending EMIs, please tap **Contact Jar Support**. Our team will help you with the details.",
            supportActionable: "Support Required",
            faqContent: "Text Suffices",
          },
          {
            id: "loan-interest",
            question: "How much interest do I pay for my active loan?",
            answer:
              "To know the interest details of your loan, please tap **Contact Jar Support**. Our team will assist you.",
            supportActionable: "Support Required",
            faqContent: "Text Suffices",
          },
          {
            id: "ongoing-loan-details",
            question: "Where can I see the details of my ongoing loan?",
            answer:
              "To view details of your active loan, please tap **Contact Jar Support**. Our team will help you with the information.",
            supportActionable: "Support Required",
            faqContent: "Text Suffices",
          },
        ],
      },
    ],
  },
  {
    id: "jar-pay",
    faqCategory: "Jar Pay",
    faqPageHeader: "Jar Pay",
    icon: "💸",
    subcategories: [
      {
        id: "about-jar-pay",
        name: "About Jar Pay",
        questions: [
          {
            id: "what-is-jar-pay",
            question: "What is Jar Pay?",
            answer:
              "Jar Pay is a digital payment method used to transfer money instantly from one bank account to any bank account. It is developed by NPCI (National Payments Corporation of India) and is RBI-regulated.",
            supportActionable: "Solved by FAQ",
            faqContent: "Video",
          },
          {
            id: "how-use-jar-pay",
            question: "How can I use Jar Pay?",
            answer:
              "To use Jar Pay UPI:\n\n1. Use Your Registered Mobile Number – Ensure the mobile number linked to your Jar app is active.\n2. Link Your Bank Account – Connect your bank account seamlessly to enable transactions.\n3. Create Your UPI ID – Set up your UPI ID and experience fast, safe, and secure money transfers.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "jar-pay-instant-transfer",
            question: "Can I transfer money instantly using JarPay?",
            answer:
              "Yes, you can transfer money instantly using Jar Pay.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "jar-pay-benefits",
            question: "What are the benefits of using JarPay?",
            answer:
              "1. Send money to your friends and family instantly.\n2. Scan and pay at any store - digital or physical.\n3. Easily check your transaction history with just a few clicks.\n4. No need for cash or debit cards anymore.\n5. No need for ATM visits.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "jar-pay-safe",
            question: "Is JarPay safe?",
            answer:
              "Yes, Jar Pay UPI keeps your information safe always. It is NPCI-approved, so it is trustworthy and safe.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
        ],
      },
      {
        id: "about-upi",
        name: "About UPI",
        questions: [
          {
            id: "what-is-upi-pin",
            question: "What is an UPI PIN?",
            answer:
              "UPI PIN (UPI Personal Identification Number) is a 4-6 digit code you set up when you first created Jar Pay account. You have to enter this UPI PIN to confirm all your bank transactions.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "wrong-upi-pin",
            question:
              "What happens if I enter wrong UPI PIN during a transaction?",
            answer:
              "If you enter the wrong UPI PIN , the transaction will fail. In case you enter wrong UPI PIN multiple times, your bank may temporarily block you from sending money using UPI. This may vary depending on your bank.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "bank-not-detected",
            question:
              "I have selected the Bank name to link with UPI but it does not find my bank A/C?",
            answer:
              "Please make sure the mobile number linked to your bank account matches the one you verified in any UPI app. If it doesn't match, your bank account will not be available on the UPI platform.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "pay-online-merchant",
            question: "How do I pay an online merchant through UPI?",
            answer:
              "When you shop online, you can pay through UPI when you see UPI as a payment option. On clicking that, you will need to enter your Payment Address (eg - xyz@upi). Once entered, you will receive a collect request on your Jar Pay app. Enter your UPI PIN here and your payment will be complete.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "upi-banking-hours",
            question:
              "Do money transfers happen on UPI only during banking hours?",
            answer:
              "All payments are instant and 24/7, regardless of your bank's working hours.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "upi-vs-imps",
            question: "How is UPI different from IMPS?",
            answer:
              "UPI is providing additional benefits to IMPS in the following ways:\n\n1.Provides for a P2P Pull functionality\n2.Simplifies Merchant Payments\n3.Single APP for money transfer\n4.Single click two factor authentication",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
        ],
      },
      {
        id: "upi-transactions",
        name: "Transactions",
        questions: [
          {
            id: "payment-no-product",
            question:
              "I have paid for my transaction but not received anything. Why is that?",
            answer:
              "Once you complete a transaction, you should see a success status on the screen and receive an SMS from your bank. In some cases due to operator issues it can take longer time. In case you have not received your confirmation within an hour please contact the customer support at your bank.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "view-upi-history",
            question: "How can I view my transaction history?",
            answer:
              "To view your transaction history,\n\n1. Go to Transactions tab\n2. Click Jar Pay\n3. Click Statement",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "register-before-sending",
            question:
              "Does a customer need to register before remitting funds using UPI?",
            answer:
              "Yes, a customer needs to register with his/her PSP before remitting funds using UPI and link his accounts.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "add-beneficiary",
            question:
              "Does the customer need to register a beneficiary before transferring funds through UPI? What details of beneficiary will be required?",
            answer:
              "No, registration of Beneficiary is not required for transferring funds through UPI as the fund would be transferred on the basis of Virtual ID/Account+IFSC/Aadhaar Number. (Please check with your PSP and Issuing bank with regard to the services enabled on the App).",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "bank-account-needed",
            question:
              "Does customer need to have a bank account or this can be linked to a card or wallet?",
            answer:
              "Earlier customer was allowed to link only bank accounts, now customer can link PPI Wallets as well in UPI.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "receiver-needs-upi",
            question:
              "Does the beneficiary also have to register for UPI for receiving funds?",
            answer:
              "In case of Virtual ID transaction, the beneficiary needs to have a Virtual ID and in turn be registered with UPI but in case of Account + IFSC or Aadhaar number, the beneficiary need not be registered for UPI. (Please check with your PSP and Issuing bank with regard to the services enabled on the App).",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "upi-lose-phone",
            question: "What happens if my mobile phone is lost?",
            answer:
              "In case of mobile loss, one needs to simply block his mobile number thus no transaction can be initiated from the same mobile number which is a part of device tracking and at the same time UPI pin would be required for any transaction which is not to be shared with anyone.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "multiple-bank-accounts",
            question:
              "Can I link more than one bank account to the same virtual address?",
            answer:
              "Yes, several bank accounts can be linked to the same virtual address depending on the functionalities being made available by the respective PSPs.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "upi-transfer-ways",
            question:
              "What are the different channels for transferring funds using UPI?",
            answer:
              "The different channels for transferring funds using UPI are:\n\na.Send/Collect through Virtual ID\nb.Account Number + IFSC\nc.Aadhaar Number",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "money-debited-no-transaction",
            question:
              "What if my account is debited but the transaction does not go through?",
            answer:
              "UPI provides for real time reversals for declines and amount would be transferred back to the payer account immediately. In case if it does not reverse the amount immediately, you can contact your bank for the same.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "cancel-upi-payment",
            question:
              "Can I put a stop payment request for funds transferred by UPI?",
            answer:
              "No, once the payment is initiated, it cannot be stopped.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "raise-upi-complaint",
            question:
              "Where do I register a complaint with reference to the UPI transaction?",
            answer:
              "You can also raise your grievance or check status of UPI transaction through the UPI App of the participating banks.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "upi-max-limit",
            question:
              "What is the limit of fund transfer using UPI?",
            answer:
              "For normal UPI the transaction limit is up to Rs 1 Lakh per transaction. For few specific categories of transaction in UPI like Capital Markets, Collections, Insurance, Foreign Inward Remittances the transaction limit is up to 2 lakh and for Initial Public Offering and Retail Direct Scheme the limit is up to Rs 5 lakh per transaction.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "switch-upi-app",
            question:
              "If I change my UPI app will I be required to register again or I can carry the same virtual address?",
            answer:
              "In case of change in UPI App, a person needs to re-register and it needs to create a new VPA with the handle of the PSP.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "forget-upi-pin",
            question: "What happens if I forget my pin?",
            answer:
              "In case someone forgets the UPI pin, he needs to re-generate a new UPI pin using his debit card details (the last six digits of their debit card & expiry date).",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "upi-after-sim-change",
            question:
              "Will I be able to use UPI after I change my sim or mobile?",
            answer:
              "In case of change in sim/mobile/application of the PSP, customer would require to re-register themselves for UPI.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "upi-cross-platform",
            question:
              "Will I be able to use UPI across all Mobile platforms?",
            answer:
              "UPI is available on Android and iOS platform.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "collect-request-time",
            question:
              "What is the timeline to approve a collect request by a payer?",
            answer:
              "The timeline to approve a collect request needs to be defined by the requester.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "someone-else-access",
            question:
              "In case my mobile is used by another person, will there be any security breach?",
            answer:
              "In any transaction, the UPI pin would be required which needs to be fed through the mobile at the time of any transaction making it safe and secured.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "upi-network-change",
            question:
              "What if I change my mobile carrier?",
            answer:
              "No problem at all. You can continue using UPI apps as usual.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "upi-phone-change",
            question:
              "What if I change my handset?",
            answer:
              "If you change your handset, you will need to:\n\n1.Download the PSP app again\n2.Register through mobile verification\n3.Your VPA will be auto saved",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "auto-debit-without-permission",
            question:
              "Will you ever auto-deduct payments from my account?",
            answer:
              "We will not auto deduct payments from your account.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "app-access-bank-details",
            question: "How are you getting all my bank A/C information?",
            answer:
              "This is a feature of the UPI payment platform (built by NPCI - an RBI regulated entity). The UPI platform retrieves the accounts details linked with your mobile number in a masked manner i.e. UPI app can't see all the details. This exchange is done over secure banking networks and we don't store or ever use it.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "lost-phone-upi",
            question: "What if I lose my phone?",
            answer:
              "If you lose your phone, the UPI-PIN is required to authorize all transactions which will not be known to any third person and hence they will not be able to use the UPI app. In addition, please contact our customer support at your bank in the event you lose your phone.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "upi-payment-fail-debited",
            question:
              "My UPI transaction has failed but my bank account has been debited.",
            answer:
              "In case of failures money will be refunded back to your account. Sometimes this takes longer than intended. If you do not receive the refund within 1 hour, please contact customer support at your bank.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "set-reset-upi-pin",
            question: "How do I set my UPI-PIN with the bank directly?",
            answer:
              "You can set your UPI pin on any PSP app using your debit card details.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "transaction-pending",
            question:
              "My transaction is showing \"Pending\". The amount has been debited and not credited. Is there a problem?",
            answer:
              "Your transaction is successful, but due to some issue at the beneficiary bank end, there is a delay. The amount will reach him/her in 48 hours, once the bank is done with its daily settlements.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "multiple-upi-apps",
            question:
              "Can I use more than one UPI application on the same mobile if they are linked to different bank accounts?",
            answer:
              "Yes, one can use more than one UPI application on the same mobile and link both same as well as different accounts.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
        ],
      },
    ],
  },
  {
    id: "nek",
    faqCategory: "Nek",
    faqPageHeader: "Nek",
    icon: "💎",
    subcategories: [
      {
        id: "about-nek",
        name: "About Nek",
        questions: [
          {
            id: "what-is-nek",
            question: "What is Nek?",
            answer:
              "Nek is a digital jewellery brand by Jar offering affordable gold and silver jewellery. You can buy **BIS-hallmarked 24K gold coins**, **925 silver jewellery** with **22K gold plating**, **925 silver idols**, and more. It stands out for certified quality, trendy designs, wide delivery reach, and easy online buying.",
            supportActionable: "Solved by FAQ",
            faqContent: "Video",
          },
          {
            id: "buy-without-jar-savings",
            question:
              "Can I buy jwelery from nek without having Jar Savings?",
            answer:
              "Yes. You can shop via the **Jar App**, Nek website, or by downloading the **Nek App** from the Google Play Store or Apple Store. Simply browse products, add to cart, enter your address, and place your order.",
            supportActionable: "Solved by FAQ",
            faqContent: "Video",
          },
          {
            id: "nek-owned-by-jar",
            question: "Is Nek owned by Jar?",
            answer:
              "Yes, Nek is the jwelery brand **owned** by **Jar**. You can use your Jar savings to buy BIS-hallmarked 24K gold coins, 925 silver jewellery with 22K gold plating, 925 silver idols and many more.\n\n**Note:** You need atleast **0.1 gram** of Jar gold savings to **redeem** as physical gold/silver jewellery through Nek",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "products-genuine",
            question: "Are Nek products genuine?",
            answer:
              "Yes, All the product are **100% BIS Hallmarked**, ensuring authenticity and purity.",
            supportActionable: "Solved by FAQ",
            faqContent: "Video",
          },
          {
            id: "nek-viba-same",
            question: "Is Nek and Viba the same brand?",
            answer:
              "Yes. **Viba** has been rebranded as **Nek.**",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "custom-jewellery",
            question: "Can custom jwelery be ordered from nek?",
            answer:
              "No. Custom jewellery is **not available**. However, Nek offers a **wide variety** of **hallmarked designs** to choose from.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "order-size-limit",
            question: "Is there any limit on the order size?",
            answer:
              "Yes. You can add up to **10** different **items** in your cart, with a **maximum quantity** of **9** per item",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "making-design-charges",
            question: "What are M&D charges? Why are they applied?",
            answer:
              "**Making charges** cover the crafting, design, and skilled labour involved in creating each jewellery piece.\n**Delivery charges** cover packaging, handling, and shipping to ensure safe delivery.\n\nTogether, these charges ensure quality craftsmanship and a secure, reliable delivery experience.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
        ],
      },
      {
        id: "tracking-delivery",
        name: "Tracking & Delivery",
        questions: [
          {
            id: "gold-coin-delivery-time",
            question: "When will my order or gold coin purchased through Nek be delivered?",
            answer:
              "Your order, including **gold coins**, is typically delivered within **5 to 9 woking days**, depending on your **location**. Delivery timelines may vary slightly based on serviceability and logistics in your area.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "how-orders-delivered",
            question: "How are Nek order delivered?",
            answer:
              "Your Nek order will be delivered to your doorstep with utmost care. We partner with **trusted courier services** like BlueDart, DTDC, and India Post to ensure safe and secure delivery.\n\nYou can track your order in **real time**, and it will arrive within the **estimated delivery timeline**.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "track-order",
            question: "How can I track my order?",
            answer:
              "To track your order:\n\n1. Go to Your Account\n2. Click on Orders\n3. Select the order you want to track\n\nYou will also receive regular updates via WhatsApp and SMS.\n\nYou can also, Tap on the **Track Order** button below to get redirected to the Order Tracking screen.",
            supportActionable: "In App Redirection",
            faqContent: "GIF",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "cancel-order",
            question: "How can I cancel my order?",
            answer:
              "To cancel your order:\n\n1. Go to Your Account\n2. Click on Orders\n3. Select the order\n4. Click on Cancel\n\n**Note:** Orders can only be cancelled within **2 hours** of placing the order.\n\nYou can also, Tap on the **Track Order** button below to get redirected to the Order Tracking screen, Select the order you wish to cancel. You will be able to see the Cancel option only if the cancellation window is still open.",
            supportActionable: "In App Redirection",
            faqContent: "GIF",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "when-cancel-order",
            question: "When can I cancel my order?",
            answer:
              "You can cancel your order **within 2 hours** of purchase. After this period, cancellation is not allowed.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "unable-cancel-order",
            question: "Why I am not able to cancel the order?",
            answer:
              "If you're unable to cancel, it is likely because the **2 hour** cancellation window has **expired**.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "return-order",
            question: "How can I return my order?",
            answer:
              "We offer a **3-day** return policy for select products only. There is **no return avaible** on **gold coins**. To initiate a return, please contact our support team and raise a request.",
            supportActionable: "Support Required",
            faqContent: "GIF",
          },
          {
            id: "order-shows-delivered",
            question: "My order shows as delivered, but I haven't received it, what should I do?",
            answer:
              "If your order is marked as delivered but you haven't received it:\n\n- Check the **tracking details** shared via **SMS** or **email**\n- Verify with **neighbors** or your **building security**\n\nIf you still **cannot locate** your order, please contact **Customer Support** within **72 hours** of the **delivery** update so we can assist you promptly.",
            supportActionable: "Support Required",
            faqContent: "Text Suffices",
          },
          {
            id: "order-delayed",
            question: "Why is my order delayed?",
            answer:
              "Delays may occur due to **high order volumes**, **weather conditions**, or **courier issues** beyond our control.\n\nWe recommend **checking** the **tracking link** shared via **SMS** or **email** for the **latest updates**. If your order is **delayed beyond** the expected delivery timeline, please contact **Customer Support** for further assistance.",
            supportActionable: "Support Required",
            faqContent: "Text Suffices",
          },
        ],
      },
      {
        id: "nek-payment-methods",
        name: "Payment Methods",
        questions: [
          {
            id: "nek-payment-options",
            question: "What are the available payment options?",
            answer:
              "You can pay using **UPI**, **Jar savings**, or opt for **Cash on Delivery (COD)**, making your purchase simple and convenient.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "nek-credit-card",
            question:
              "Can I use my credit card for ordering from Nek?",
            answer:
              "You can use a **UPI-enabled RuPay credit card** for payments through your **preferred UPI app**. However, credit cards from **other card networks** like Visa or Mastercard are **not supported**.",
            supportActionable: "Solved by FAQ",
            faqContent: "Text Suffices",
          },
          {
            id: "unable-use-jar-savings",
            question:
              "I am not able to use my Jar Savings for the purchase. What do I do?",
            answer:
              "To use your Jar savings for a purchase:\n\n1. Log in to the **Jar app**\n2. Tap on **Withdraw** from your Jar vault\n3. Select **24K Standard Gold Coins** (for gold) or **Exclusive Silver Jewellery**\n4. You will be redirected to **Nek**\n5. Add your chosen products to the **cart** and checkout using **Jar savings**\n\n**Note:** A **minimum** of **0.1 gm** of **Jar savings** is required to access this option\n\nIf you face any issues, please contact Customer Support for assistance.",
            supportActionable: "Support Required",
            faqContent: "GIF",
          },
        ],
      },
    ],
  },
  {
    id: "report-fraud",
    faqCategory: "Report a Fraud",
    faqPageHeader: "Report a Fraud",
    icon: "🚨",
    subcategories: [
      {
        id: "fraud-reporting",
        name: "Fraud Reporting",
        questions: [
          {
            id: "report-fraud-upi",
            question:
              "What should I do if the Primary UPI ID shown on my account is not recognized by me?",
            answer:
              "If you don't recognize the Primary UPI ID on your account, please contact support immediately and report it through the fraud reporting flow.",
            supportActionable: "Support Required",
            faqContent: "Text Suffices",
          },
          {
            id: "report-unauthorized-transaction",
            question: "I see an unauthorized transaction on my account. What should I do?",
            answer:
              "If you notice any unauthorized transaction, please contact our support team immediately. Do not share your OTP, PIN, or password with anyone. Our team will investigate and help secure your account.",
            supportActionable: "Support Required",
            faqContent: "Text Suffices",
          },
          {
            id: "report-suspicious-activity",
            question: "How do I report suspicious activity on my Jar account?",
            answer:
              "If you notice any suspicious activity on your account, please reach out to our support team immediately through the app or contact us directly. We take fraud very seriously and will investigate promptly to protect your account.",
            supportActionable: "Support Required",
            faqContent: "Text Suffices",
          },
        ],
      },
    ],
  },
];

// Top FAQ entries
export const topFAQs = [
  {
    title: "Withdrawal not received in bank",
    categoryId: "withdrawal",
    questionId: "gold-withdrawal-in-progress",
    label: "Withdrawal",
  },
  {
    title: "Unable to add new UPI ID getting name mismatch error",
    categoryId: "upi-id",
    questionId: "name-mismatch-upi",
    label: "UPI ID",
  },
  {
    title: "Referral reward not credited",
    categoryId: "refer-earn",
    questionId: "referral-reward-not-received",
    label: "Refer & Earn",
  },
  {
    title: "KYC verification failed or stuck",
    categoryId: "kyc",
    questionId: "kyc-failing-multiple-attempts",
    label: "KYC",
  },
  {
    title: "Amount deducted but not added to Jar Locker",
    categoryId: "payments-savings",
    questionId: "gold-purchase-pending",
    label: "Savings",
  },
];

// Video data
export const helpVideos = [
  {
    id: "v1",
    title: "How to Start Saving on Jar",
    thumbnail: "🎬",
    url: "https://wiki.myjar.app/hi/help-videos/",
  },
  {
    id: "v2",
    title: "Setting Up Daily Savings",
    thumbnail: "🎬",
    url: "https://wiki.myjar.app/hi/help-videos/",
  },
  {
    id: "v3",
    title: "How to Withdraw Your Savings",
    thumbnail: "🎬",
    url: "https://wiki.myjar.app/hi/help-videos/",
  },
  {
    id: "v4",
    title: "Complete Your KYC in Minutes",
    thumbnail: "🎬",
    url: "https://wiki.myjar.app/hi/help-videos/",
  },
  {
    id: "v5",
    title: "Understanding Digital Gold",
    thumbnail: "🎬",
    url: "https://wiki.myjar.app/hi/help-videos/",
  },
  {
    id: "v6",
    title: "Jar Pay - Send & Receive Money",
    thumbnail: "🎬",
    url: "https://wiki.myjar.app/hi/help-videos/",
  },
  {
    id: "v7",
    title: "Round-Off Feature Explained",
    thumbnail: "🎬",
    url: "https://wiki.myjar.app/hi/help-videos/",
  },
  {
    id: "v8",
    title: "Order Gold Coins from Nek",
    thumbnail: "🎬",
    url: "https://wiki.myjar.app/hi/help-videos/",
  },
];

// Supported languages
export const supportedLanguages = [
  { code: "en", name: "English", nativeName: "English" },
  { code: "hi", name: "Hindi", nativeName: "हिन्दी" },
  { code: "ta", name: "Tamil", nativeName: "தமிழ்" },
  { code: "te", name: "Telugu", nativeName: "తెలుగు" },
  { code: "kn", name: "Kannada", nativeName: "ಕನ್ನಡ" },
  { code: "gu", name: "Gujarati", nativeName: "ગુજરાતી" },
  { code: "mr", name: "Marathi", nativeName: "मराठी" },
  { code: "bn", name: "Bengali", nativeName: "বাংলা" },
];

// Helper: get all questions flat
export function getAllQuestions(): (FAQQuestion & {
  categoryId: string;
  categoryName: string;
  subcategoryName: string;
})[] {
  const all: (FAQQuestion & {
    categoryId: string;
    categoryName: string;
    subcategoryName: string;
  })[] = [];
  for (const cat of faqData) {
    for (const sub of cat.subcategories) {
      for (const q of sub.questions) {
        all.push({
          ...q,
          categoryId: cat.id,
          categoryName: cat.faqPageHeader,
          subcategoryName: sub.name,
        });
      }
    }
  }
  return all;
}

// Helper: find question by ID
export function findQuestionById(questionId: string) {
  for (const cat of faqData) {
    for (const sub of cat.subcategories) {
      for (const q of sub.questions) {
        if (q.id === questionId) {
          return {
            question: q,
            category: cat,
            subcategory: sub,
          };
        }
      }
    }
  }
  return null;
}

// Helper: find category by ID
export function findCategoryById(categoryId: string) {
  return faqData.find((c) => c.id === categoryId) || null;
}

// Helper: search questions
export function searchQuestions(query: string) {
  const q = query.toLowerCase().trim();
  if (!q) return [];

  const words = q.split(/\s+/);
  const allQuestions = getAllQuestions();

  const scored = allQuestions.map((item) => {
    const questionLower = item.question.toLowerCase();
    const answerLower = item.answer.toLowerCase();
    const categoryLower = item.categoryName.toLowerCase();
    const subcategoryLower = item.subcategoryName.toLowerCase();
    let score = 0;

    // Exact phrase match in question
    if (questionLower.includes(q)) score += 100;
    // Exact phrase match in answer
    if (answerLower.includes(q)) score += 50;
    // Category/subcategory match
    if (categoryLower.includes(q)) score += 30;
    if (subcategoryLower.includes(q)) score += 30;

    // Individual word matches
    for (const word of words) {
      if (questionLower.includes(word)) score += 10;
      if (answerLower.includes(word)) score += 5;
      if (categoryLower.includes(word)) score += 3;
      if (subcategoryLower.includes(word)) score += 3;
    }

    return { ...item, score };
  });

  return scored
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 10);
}

// Helper: get related questions
export function getRelatedQuestions(questionId: string, limit: number = 4) {
  const found = findQuestionById(questionId);
  if (!found) return [];

  const { category, subcategory } = found;
  const allQuestions = getAllQuestions();

  // Get questions from same subcategory first, then same category
  const related = allQuestions
    .filter((q) => q.id !== questionId)
    .map((q) => {
      let score = 0;
      if (q.subcategoryName === subcategory.name) score += 2;
      if (q.categoryId === category.id) score += 1;
      return { ...q, score };
    })
    .filter((q) => q.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);

  return related;
}
