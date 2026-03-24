export interface FAQQuestion {
  id: string;
  question: string;
  answer: string;
  supportActionable: "Solved by FAQ" | "In App Redirection" | "Through In App Troubleshooting" | "Support Required";
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
              "Jar is an investment app that helps you invest small amounts into digital gold and silver. You can start with as little as ₹10, grow your savings automatically through daily, weekly and monthly micro-savings or choose to invest lumpsum through Instant Save options, and withdraw anytime as cash or even get physical gold/silver coins and jewellery delivered.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "how-does-jar-help-save",
            question: "How does Jar help me save money automatically?",
            answer:
              "Through AutoPay, Jar automatically saves small amounts from your spends and invests them into digital gold or silver based on your selected plan. This way, you build savings without thinking about it, while still having full control to track or withdraw anytime.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "how-to-start-saving",
            question: "How do I start saving in Jar?",
            answer:
              "Saving in Jar is simple and flexible. You can start saving in 24K digital gold from just ₹10.\n\nWays to save on Jar:\n• Daily Savings – Save a fixed amount every day\n• Weekly Savings – Save a fixed amount every week\n• Monthly Savings – Save a fixed amount every month\n• Manual Savings – Add money anytime you want\n• Round-Off – Jar rounds up your online spends and invests the spare change\n\nAll your savings are securely stored in digital gold, and you can track, grow, or withdraw anytime.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "jar-different-from-others",
            question: "How is Jar different from other investment apps?",
            answer:
              "Unlike traditional apps that require large investments, Jar focuses on micro-savings. It helps you invest small amounts regularly, making it easy to build wealth in gold and silver without needing big money or active effort. You can start with as little as ₹10, grow your savings automatically through daily, weekly and monthly micro-savings or choose to invest lumpsum through Instant Save options, and withdraw anytime as cash or even get physical gold/silver coins and jewellery delivered.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "why-digital-gold-silver",
            question:
              "Why should I invest in digital gold/silver than physical gold/silver?",
            answer:
              "Digital gold and silver let you invest without worrying about storage, safety, or making charges. You can buy small amounts anytime, track value in real-time, and still convert it into physical gold/silver whenever you want.\n\n• Start small – Invest from just ₹10\n• No making charges\n• Zero storage cost – Stored securely at no extra charge\n• High purity – 24K gold (99.99%)\n• Easy access – Buy, track, sell, or withdraw anytime",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "why-invest-through-jar",
            question: "Why should I invest through Jar?",
            answer:
              "Jar makes saving and investing simple, flexible, and secure.\n\n• Start small: Invest from just ₹10 and build savings through micro-investments\n• Withdraw anytime: Get cash in your bank or opt for physical gold/silver delivery\n• Your money is safe: Stored securely in Brink's vaults with independent oversight by Vistra\n• Fully protected – 24×7 monitored vaults with complete insurance coverage\n• Zero storage costs – Secure locker storage at no extra charge\n• Independently verified: Your gold always matches your balance and cannot be accessed without your consent\n• Trusted by millions: Jar is used by 40M+ users and follows bank-grade security standards\n\nSimple savings, strong security, and full control - everything in one place.",
            supportActionable: "Solved by FAQ",
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
          },
          {
            id: "what-are-brinks-vault",
            question: "What are BRINKs VAULT?",
            answer:
              "Brink's Vaults are world-class secure storage facilities where your digital gold and silver are safely stored.\n\n• Used globally for storing precious metals\n• Bank-grade security infrastructure\n• 24×7 monitored and protected\n• Your gold/silver is stored securely under your ownership\n\nThis ensures your investment is always safe and protected.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "what-is-vistra",
            question: "What is Vistra?",
            answer:
              "Vistra is an independent trustee and administrator that monitors and verifies your gold holdings.\n\n• Ensures your gold/silver always matches your account balance\n• Regularly audits the vault storage\n• Ensures your assets cannot be accessed without your consent\n\nVistra adds an extra layer of trust and transparency to keep your investment secure.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "where-is-gold-stored",
            question:
              "Where is my purchased digital gold/silver stored? Is it safe in Jar?",
            answer:
              "Your gold and silver are stored in secure Brink's vaults, one of the world's leading vault providers that offer:\n\n• Bank-grade security infrastructure\n• 24×7 monitored vaults\n• Stored under your name\n\nThe storage is independently monitored by Vistra, ensuring your holdings are always safe and cannot be accessed without your consent.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "is-gold-insured",
            question: "Is my purchased digital gold/silver insured?",
            answer:
              "For the digital gold/silver you own, an equivalent amount of physical gold/silver is stored securely in Brink's vaults, which are insured by ICICI Lombard.",
            supportActionable: "Solved by FAQ",
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
              "You can save and withdraw through UPI using any of your preferred UPI Apps like PhonePe, Paytm, Cred, BHIM etc.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "min-max-invest",
            question:
              "What is the minimum and maximum amount I can invest?",
            answer:
              "You can start your Daily Savings with minimum amount of ₹10 and maximum of ₹5000. If you wish to save more, you can save upto ₹1,00,000 manually.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "gold-silver-price-calculated",
            question: "How is the gold/silver price calculated?",
            answer:
              "Gold and silver prices on Jar are based on live market rates.\n\n• Prices are derived from the wholesale bullion market\n• A small margin is added to cover operational costs (like storage, insurance, and processing)\n• The final buy and sell price is always shown clearly in the app before you invest\n\nThis ensures full transparency, so you always know exactly what price you're buying or selling at.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "buy-sell-price-difference",
            question:
              "Why is there a difference between sell price and buy price?",
            answer:
              "The difference between buy and sell price is called the price spread, and it is a standard part of digital gold/silver investing.\n\n• Market spread – Gold/silver is bought from and sold in the wholesale bullion market, where buyback prices are slightly lower than selling prices\n• GST on buying – 3% GST is applied when you buy gold/silver, but not when you sell\n• Operational costs – Includes secure storage, insurance, trustee oversight, and payment processing\n\nJar always shows you the final buy and sell price upfront, so you can make informed decisions with full transparency.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "current-vs-invested-value",
            question:
              "Why there is a difference in Current vs Invested Value?",
            answer:
              "The difference is due to changes in gold/silver prices over time.\n\n• Invested Value – Total amount you've invested\n• Current Value – Latest value based on live market prices\n\nSince gold and silver prices fluctuate daily, your current value may be higher or lower than what you invested.\n\nThis is normal and reflects how your investment is performing in real time.",
            supportActionable: "Solved by FAQ",
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
              "No, the only charge you need to pay is 3% GST paid to government when you buy digital gold/digital silver. Jar does not charge any additional commission.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "why-3-percent-gst",
            question:
              "Why do I have to pay 3% GST while purchasing digital gold/silver on Jar?",
            answer:
              "As per government regulations, a 3% GST is applicable on the purchase of gold and silver, including digital gold/silver.\n\n• This tax is mandated by the government, not set by Jar\n• It is applied only when you buy, not when you sell\n• The GST amount is clearly shown before you complete the transaction\n\nThis ensures full transparency while staying compliant with tax laws.",
            supportActionable: "Solved by FAQ",
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
              "You can get your Jar Membership Card directly from the app. Go to your Profile section and look for the Membership Card option. Follow the steps to generate and view your card.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "download-membership-card",
            question: "Can I download the Membership Card?",
            answer:
              "Yes, you can download your Membership Card from the app. Navigate to your Profile section, find the Membership Card, and use the download option to save it to your device.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "why-become-member",
            question: "Why should I become a Jar Member?",
            answer:
              "Becoming a Jar Member gives you access to exclusive benefits, rewards, and features that enhance your savings journey. Members get priority support, special offers, and additional perks.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "lose-membership-on-delete",
            question:
              "If I delete my app or lose my phone, will I lose my membership?",
            answer:
              "No, your membership is linked to your registered mobile number, not your device. Simply reinstall the app and log in with the same number to access your membership and all your savings.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "download-membership-app",
            question:
              "Where can I download my Membership card on the App?",
            answer:
              "You can download your Membership Card from the Profile section in the Jar app. Look for the Membership Card option and tap on the download button.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "physical-card-available",
            question: "Is there a Physical card also available?",
            answer:
              "Currently, the Membership Card is available in digital format within the app. Check the app for the latest updates on physical card availability.",
            supportActionable: "Solved by FAQ",
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
              "Daily Savings is an automated savings plan where a fixed amount is debited from your bank account every day and invested in 24K digital gold. It helps you build a consistent savings habit effortlessly.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "why-setup-daily-savings",
            question: "Why should I setup Daily Savings?",
            answer:
              "Daily Savings helps you build a disciplined saving habit. By investing a small amount every day, your savings grow steadily over time without you having to remember to do it manually.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "how-setup-daily-savings",
            question: "How do I set up Daily Savings?",
            answer:
              "You can set up Daily Savings directly in the Jar app. Go to the Savings section, select Daily Savings, choose your preferred amount, and set up AutoPay.",
            supportActionable: "In App Redirection",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "first-daily-savings-debit",
            question:
              "When will my first Daily Savings debit be initiated after setup?",
            answer:
              "Your first Daily Savings debit will be initiated within 24 hours of setting up your plan, depending on the time of setup and your bank's processing schedule.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "daily-savings-min-max",
            question:
              "What is the minimum and maximum amount allowed for Daily Savings?",
            answer:
              "You can set up Daily Savings with a minimum of ₹10 and a maximum of ₹5,000 per day.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "manage-daily-savings",
            question: "How can I manage my Daily Savings?",
            answer:
              "You can manage your Daily Savings from the Savings section in the Jar app. Here you can view, edit, pause, or stop your active savings plan.",
            supportActionable: "In App Redirection",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "daily-savings-autopay-fails",
            question:
              "What will happen if the scheduled Daily Savings autopay fails?",
            answer:
              "If your scheduled Daily Savings autopay fails, the system will retry the payment. If it continues to fail, your savings for that day will be skipped. You won't lose any previously saved amount.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "change-daily-savings-amount",
            question: "Can I change/edit my active Daily Savings amount?",
            answer:
              "Yes, you can change your Daily Savings amount. Go to the Savings section, select your active Daily Savings plan, and modify the amount as needed.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "pause-daily-savings",
            question: "How do I Pause my Daily Savings Plan?",
            answer:
              "You can pause your Daily Savings Plan from the Savings section in the Jar app. Select your active plan and choose the Pause option.",
            supportActionable: "In App Redirection",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "stop-daily-savings",
            question: "How do I Stop my Daily Savings Plan?",
            answer:
              "You can stop your Daily Savings Plan from the Savings section in the Jar app. Select your active plan and choose the Stop option.",
            supportActionable: "In App Redirection",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "two-debits-daily-savings",
            question:
              "Why have 2 debits happened for a single subscribed Daily Savings plan?",
            answer:
              "If you notice 2 debits, it could be due to a timing overlap between two consecutive daily cycles. Check your transaction history in the app for details. If the issue persists, please contact support.",
            supportActionable: "Solved by FAQ",
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
              "Weekly Savings is an automated savings plan where a fixed amount is debited from your bank account once every week and invested in 24K digital gold.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "why-setup-weekly-savings",
            question: "Why should I setup Weekly Savings?",
            answer:
              "Weekly Savings is great if you want to save regularly but prefer a less frequent debit schedule than daily. It helps you accumulate gold savings week by week.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "how-setup-weekly-savings",
            question: "How do I set up Weekly Savings?",
            answer:
              "You can set up Weekly Savings directly in the Jar app. Go to the Savings section, select Weekly Savings, choose your preferred amount and day, and set up AutoPay.",
            supportActionable: "In App Redirection",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "first-weekly-savings-debit",
            question:
              "When will my first Weekly Savings debit be initiated after setup?",
            answer:
              "Your first Weekly Savings debit will be initiated on the next scheduled day after you set up the plan.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "weekly-savings-min-max",
            question:
              "What is the minimum and maximum amount allowed for Weekly Savings?",
            answer:
              "You can set up Weekly Savings with a minimum of ₹10 and a maximum of ₹5,000 per week.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "manage-weekly-savings",
            question: "How can I manage my Weekly Savings?",
            answer:
              "You can manage your Weekly Savings from the Savings section in the Jar app.",
            supportActionable: "In App Redirection",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "change-weekly-savings-amount",
            question: "Can I change/edit my active Weekly Savings amount?",
            answer:
              "Yes, you can change your Weekly Savings amount from the Savings section. Select your active plan and modify the amount.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "pause-weekly-savings",
            question: "How do I Pause my Weekly Savings Plan?",
            answer:
              "You can pause your Weekly Savings Plan from the Savings section in the Jar app.",
            supportActionable: "In App Redirection",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "stop-weekly-savings",
            question: "How do I Stop my Weekly Savings Plan?",
            answer:
              "You can stop your Weekly Savings Plan from the Savings section in the Jar app.",
            supportActionable: "In App Redirection",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "weekly-savings-autopay-fails",
            question:
              "What will happen if the scheduled Weekly Savings autopay fails?",
            answer:
              "If your scheduled Weekly Savings autopay fails, the system will retry. If it continues to fail, your savings for that week will be skipped. Your existing savings remain safe.",
            supportActionable: "Solved by FAQ",
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
              "Monthly Savings is an automated savings plan where a fixed amount is debited from your bank account once every month and invested in 24K digital gold.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "why-setup-monthly-savings",
            question: "Why should I setup Monthly Savings?",
            answer:
              "Monthly Savings is ideal if you want to align your savings with your salary cycle. Set it once and let your gold savings grow every month.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "how-setup-monthly-savings",
            question: "How do I set up Monthly Savings?",
            answer:
              "You can set up Monthly Savings directly in the Jar app. Go to the Savings section, select Monthly Savings, choose your amount and date, and set up AutoPay.",
            supportActionable: "In App Redirection",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "first-monthly-savings-debit",
            question:
              "When will my first Monthly Savings debit be initiated after setup?",
            answer:
              "Your first Monthly Savings debit will be initiated on the date you selected during setup.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "monthly-savings-min-max",
            question:
              "What is the minimum and maximum amount allowed for Monthly Savings?",
            answer:
              "You can set up Monthly Savings with a minimum of ₹10 and a maximum of ₹5,000 per month.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "manage-monthly-savings",
            question: "How can I manage my Monthly Savings?",
            answer:
              "You can manage your Monthly Savings from the Savings section in the Jar app.",
            supportActionable: "In App Redirection",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "change-monthly-savings-amount",
            question: "Can I change/edit my active Monthly Savings amount?",
            answer:
              "Yes, you can change your Monthly Savings amount. Go to the Savings section, select your active plan, and modify.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "pause-monthly-savings",
            question: "How do I Pause my Monthly Savings Plan?",
            answer:
              "You can pause your Monthly Savings Plan from the Savings section in the Jar app.",
            supportActionable: "In App Redirection",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "stop-monthly-savings",
            question: "How do I Stop my Monthly Savings Plan?",
            answer:
              "You can stop your Monthly Savings Plan from the Savings section in the Jar app.",
            supportActionable: "In App Redirection",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "monthly-savings-autopay-fails",
            question:
              "What will happen if the scheduled Monthly Savings autopay fails?",
            answer:
              "If your scheduled Monthly Savings autopay fails, the system will retry. If it continues to fail, your savings for that month will be skipped. Your existing savings remain safe.",
            supportActionable: "Solved by FAQ",
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
              "Instant Saving allows you to invest any amount into digital gold immediately, without setting up a recurring plan. It's perfect for one-time investments.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "when-opt-instant-savings",
            question: "When should I opt for Instant Savings?",
            answer:
              "Use Instant Savings when you have extra money and want to invest it right away into digital gold without waiting for a scheduled plan.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "purchase-gold-instantly",
            question: "How can I purchase digital gold instantly on Jar?",
            answer:
              "Open the Jar app, go to the home screen, and tap on 'Instant Save' or 'Save Now'. Enter the amount you want to invest and complete the payment via UPI.",
            supportActionable: "In App Redirection",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "instant-saving-min-max",
            question:
              "What are the maximum and minimum amounts I can use for Instant Saving?",
            answer:
              "You can save a minimum of ₹10 and a maximum of ₹1,00,000 per transaction through Instant Saving.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "instant-saving-daily-limit",
            question: "How many Instant Saving transactions can I do in a day?",
            answer:
              "You can make multiple Instant Saving transactions in a day. Check the app for the latest daily transaction limits.",
            supportActionable: "In App Redirection",
            deeplink: "https://www.myjar.app/",
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
              "You can track your investment value on the Jar app home screen. It shows your total invested amount, current value, and returns in real-time.",
            supportActionable: "In App Redirection",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "payment-history-investments",
            question:
              "Where can I see the payment history for my investments on Jar?",
            answer:
              "You can view your complete payment history in the Jar app. Go to your profile or transaction history section to see all your past investments and payments.",
            supportActionable: "Solved by FAQ",
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
              "Round-Off automatically rounds up your online spends to the nearest amount and invests the spare change into digital gold. For example, if you spend ₹47, Jar rounds it to ₹50 and invests ₹3 in gold. It's a great way to save without noticing!",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "setup-round-off",
            question: "How do I set up Round-Off?",
            answer:
              "You can set up Round-Off from the Jar app. Go to the Savings section, find the Round-Off option, and enable it.",
            supportActionable: "In App Redirection",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "round-off-min-max",
            question:
              "What is the minimum & maximum amount that can be rounded off?",
            answer:
              "The Round-Off amount depends on your spending. The minimum round-off is ₹1 and the maximum can be configured in the app settings.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "stop-round-off",
            question: "How do I stop Round-Off on Jar?",
            answer:
              "You can stop Round-Off from the Savings section in the Jar app. Find your active Round-Off and tap Stop.",
            supportActionable: "In App Redirection",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "pause-round-off",
            question: "How do I pause Round-Off on Jar?",
            answer:
              "You can pause Round-Off from the Savings section in the Jar app. Find your active Round-Off and tap Pause.",
            supportActionable: "In App Redirection",
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
              "Digital Silver is a way to invest in pure silver digitally through the Jar app. For every amount you invest, an equivalent amount of pure silver is securely stored in your name in Brink's vaults.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "why-digital-silver",
            question:
              "Why should I buy digital silver instead of physical silver?",
            answer:
              "Digital silver eliminates the hassle of storage, security, and making charges. You can invest small amounts, track value in real-time, and convert to physical silver whenever you want.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "silver-stored-safely",
            question:
              "Where is my digital silver stored? Is it stored safely?",
            answer:
              "Your digital silver is stored in secure Brink's vaults with bank-grade security, 24×7 monitoring, and independent oversight by Vistra.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "silver-savings-safe",
            question: "Is my savings safe with Jar?",
            answer:
              "Yes, your savings are completely safe. Your silver is stored in insured Brink's vaults with 24×7 monitoring and independent oversight by Vistra.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "live-silver-price",
            question: "Where can I find the live silver price?",
            answer:
              "You can find the live silver price on the Jar app home screen or in the Silver section. Prices are updated in real-time based on market rates.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "silver-not-showing-home",
            question: "Why isn't my Silver savings showing in the Home screen?",
            answer:
              "If your Silver savings aren't showing on the Home screen, try refreshing the app or switching to the Silver tab. If the issue persists, contact support.",
            supportActionable: "Solved by FAQ",
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
              "You can save in Jar Silver by opening the Silver section in the app and making a one-time purchase or setting up Daily Savings for silver.",
            supportActionable: "In App Redirection",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "what-is-one-time-savings",
            question: "What is One-time Savings?",
            answer:
              "One-time Savings allows you to make a single, instant investment in digital silver without setting up a recurring plan.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "purchase-silver-manually",
            question: "How can I purchase silver manually on Jar?",
            answer:
              "Open the Jar app, go to the Silver section, enter the amount you want to invest, and complete the payment via UPI.",
            supportActionable: "In App Redirection",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "silver-min-max",
            question: "What is the minimum & maximum amount I can save?",
            answer:
              "You can save a minimum of ₹10 in digital silver. Check the app for the current maximum limit.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "daily-savings-silver",
            question: "Can I set up Daily Savings for Silver on Jar?",
            answer:
              "Yes, you can set up Daily Savings for Silver. Go to the Silver section in the app and choose the Daily Savings option.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "weekly-monthly-silver",
            question:
              "Do we have options to setup up weekly and monthly savings for Silver on Jar?",
            answer:
              "Currently, weekly and monthly savings options for Silver may be limited. Check the app for the latest available savings plans for Silver.",
            supportActionable: "Solved by FAQ",
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
              "The difference is due to market spread, operational costs (storage, insurance, processing), and GST on buying. This is standard in precious metals trading.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "silver-additional-charges",
            question:
              "Is there any additional charges applied while buying silver?",
            answer:
              "A 3% GST is applied when you buy digital silver, as mandated by the government. Jar does not charge any additional commission.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "silver-current-vs-invested",
            question:
              "Why there is a difference in Current vs Invested Value?",
            answer:
              "The difference reflects changes in silver market prices. Your current value is based on live rates and may be higher or lower than your invested amount.",
            supportActionable: "Solved by FAQ",
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
              "Sometimes payments take a few minutes to process. If your purchase is still pending after 30 minutes, please use the in-app troubleshooting option to check the status.",
            supportActionable: "Through In App Troubleshooting",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "silver-purchase-failed",
            question:
              "Why is my silver purchase marked as failed after a successful payment?",
            answer:
              "This can happen due to a payment processing delay. If money was debited, it will be refunded within 5-7 business days. Use in-app troubleshooting for status updates.",
            supportActionable: "Through In App Troubleshooting",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "silver-payment-in-progress",
            question: "Why my payment status is in progress?",
            answer:
              "Your payment is being processed. It usually takes a few minutes. If it doesn't update within 30 minutes, use the in-app troubleshooting option.",
            supportActionable: "Through In App Troubleshooting",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "silver-payment-failed",
            question: "Why my payment status is failed?",
            answer:
              "A payment can fail due to insufficient balance, bank server issues, or UPI app errors. If money was debited, it will be refunded within 5-7 business days.",
            supportActionable: "Solved by FAQ",
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
              "You can withdraw your silver savings as cash to your bank account via UPI.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "silver-withdraw-bank",
            question: "How can I withdraw my savings in my bank account?",
            answer:
              "Go to the Silver section in the Jar app, tap Withdraw, enter the amount, select your UPI ID, and confirm.",
            supportActionable: "In App Redirection",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "silver-withdraw-wait",
            question: "How long do I need to wait to withdraw my savings?",
            answer:
              "You can withdraw your savings anytime. There is no lock-in period for digital silver on Jar.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "silver-withdraw-daily-limit",
            question: "How many times can I withdraw in a day?",
            answer:
              "You can make multiple withdrawals in a day. Check the app for the current daily withdrawal limits.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "silver-withdraw-fees",
            question:
              "Does Jar charge any fees/taxes while withdrawing my savings?",
            answer:
              "Jar does not charge any fees for withdrawals. However, applicable taxes on capital gains may apply as per government regulations.",
            supportActionable: "Solved by FAQ",
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
              "The withdrawal is being processed. It may take some time for the amount to reach your bank account. Use in-app troubleshooting to check status.",
            supportActionable: "Through In App Troubleshooting",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "silver-withdrawal-time",
            question:
              "How long does it take for my withdrawal to reach a final status?",
            answer:
              "Withdrawals are usually processed instantly or within a few hours. In some cases, it may take up to 48 hours.",
            supportActionable: "Through In App Troubleshooting",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "silver-withdrawal-failed",
            question:
              "Why did my withdrawal fail even though the silver was deducted from my locker?",
            answer:
              "If your withdrawal failed, the silver will be credited back to your locker. Use in-app troubleshooting for details.",
            supportActionable: "Through In App Troubleshooting",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "silver-withdrawal-refund-time",
            question:
              "How long does it take for silver to be added back to my locker after a failed withdrawal?",
            answer:
              "Silver is usually added back to your locker within 24-48 hours after a failed withdrawal.",
            supportActionable: "Through In App Troubleshooting",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "silver-withdrawal-credit-back",
            question:
              "When will the amount be credited back to my source account?",
            answer:
              "If a withdrawal fails, the amount will be credited back to your source within 5-7 business days.",
            supportActionable: "Solved by FAQ",
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
            question: "Why should I do KYC? Why is it necessary?",
            answer:
              "KYC (Know Your Customer) is required by government regulations for financial transactions. Completing KYC ensures your account is secure and allows you to access all features including withdrawal.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "where-start-kyc",
            question: "From where can I start doing my KYC?",
            answer:
              "You can start your KYC from the Jar app. Go to your Profile or the KYC section and follow the step-by-step process.",
            supportActionable: "In App Redirection",
            deeplink: "https://www.myjar.app/",
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
              "Can I purchase digital gold/silver without doing KYC?",
            answer:
              "You can purchase digital gold/silver without KYC up to certain limits. However, KYC is required for full access to all features.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "withdraw-without-kyc",
            question:
              "Can I withdraw my digital gold/silver without doing KYC?",
            answer:
              "No, KYC is mandatory for withdrawing your digital gold/silver. Please complete your KYC to enable withdrawals.",
            supportActionable: "Solved by FAQ",
          },
        ],
      },
      {
        id: "kyc-documents",
        name: "KYC Documents",
        questions: [
          {
            id: "kyc-required-documents",
            question: "What documents are required to complete KYC?",
            answer:
              "You need your PAN card and Aadhaar card to complete KYC on Jar.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "no-pan-alternative",
            question:
              "If I don't have a PAN card, can I use any alternative document?",
            answer:
              "Currently, PAN card is the primary document required for KYC. If you don't have one, you may need to apply for a PAN card first.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "unable-upload-aadhaar",
            question:
              "I'm unable to upload my Aadhaar card photo from my gallery. What should I do?",
            answer:
              "Please ensure your app has gallery/storage permissions enabled. Try restarting the app or using the camera option instead. If the issue persists, contact support.",
            supportActionable: "Support Required",
          },
        ],
      },
      {
        id: "kyc-verification",
        name: "KYC Verification",
        questions: [
          {
            id: "kyc-failing-multiple-attempts",
            question: "Why is my KYC failing even after multiple attempts?",
            answer:
              "KYC can fail due to unclear documents, name mismatch, or technical issues. Ensure your documents are clear, details match, and try again. If it still fails, contact support.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "kyc-stuck-pending",
            question:
              "My KYC has been stuck in pending for more than 24 hours. What should I do?",
            answer:
              "If your KYC has been pending for more than 24 hours, please contact our support team for manual verification and approval.",
            supportActionable: "Support Required",
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
              "After completing my KYC, I am unable to add new VPA. Why?",
            answer:
              "After KYC completion, the name on your UPI ID must match your KYC name. If there's a mismatch, you won't be able to add that UPI ID directly.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "redo-kyc-change-name",
            question:
              "Can I redo KYC? I want to change my name on Invoice?",
            answer:
              "Once KYC is completed, it cannot be redone. The name on your invoice will match your KYC documents. If you need a name change, contact support.",
            supportActionable: "Solved by FAQ",
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
              "Your Primary UPI ID is the main UPI address linked to your Jar account. It's used for all withdrawals and is linked to your verified identity.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "check-primary-upi",
            question: "Where can I check my Primary UPI ID?",
            answer:
              "You can check your Primary UPI ID in the Jar app under your Profile or UPI section.",
            supportActionable: "In App Redirection",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "change-primary-upi",
            question: "Can I change my Primary UPI ID?",
            answer:
              "Your Primary UPI ID is set during account creation and cannot be changed directly. If needed, contact support for assistance.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "unable-delete-primary-upi",
            question: "Why am I unable to delete my Primary UPI ID?",
            answer:
              "Your Primary UPI ID cannot be deleted as it's the main identity linked to your Jar account for security purposes.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "primary-upi-not-recognized",
            question:
              "What should I do if the Primary UPI ID shown on my account is not recognized by me?",
            answer:
              "If you don't recognize the Primary UPI ID on your account, please contact support immediately and report it through the fraud reporting flow.",
            supportActionable: "Support Required",
            comments: "Report Fraud Flow",
          },
          {
            id: "primary-upi-name-change",
            question:
              "I am the owner of the Primary UPI ID, however my name itself has changed. Can I request for Primary UPI ID change?",
            answer:
              "If your name has changed (e.g., after marriage), you can request a Primary UPI ID update through the in-app troubleshooting option with supporting documents.",
            supportActionable: "Through In App Troubleshooting",
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
              "You can view all linked UPI IDs in the Jar app under Profile > UPI IDs section.",
            supportActionable: "In App Redirection",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "add-additional-upi",
            question:
              "Where can I add additional UPI IDs to my Jar account?",
            answer:
              "You can add additional UPI IDs from the Profile > UPI IDs section in the Jar app.",
            supportActionable: "In App Redirection",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "delete-non-primary-upi",
            question:
              "Can I delete UPI IDs other than my Primary UPI ID?",
            answer:
              "Yes, you can delete UPI IDs other than your Primary UPI ID from the UPI management section in the app.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "max-upi-ids",
            question:
              "What is the maximum number of UPI IDs I can add on Jar?",
            answer:
              "You can add multiple UPI IDs to your Jar account. Check the app for the current maximum limit.",
            supportActionable: "Solved by FAQ",
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
              "You may be unable to add a new UPI ID due to a name mismatch with your KYC details, or you may have reached the maximum limit. Ensure the UPI ID name matches your KYC name.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "name-mismatch-upi",
            question:
              "Why am I seeing a name mismatch error while adding a new UPI ID?",
            answer:
              "The name on the UPI ID must match the name on your KYC documents. If they don't match, you'll see a name mismatch error. You can request an exception by submitting documents.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "add-non-matching-upi",
            question:
              "When can I request to add a UPI ID that does not match the name on my Primary UPI ID or does not belong to me?",
            answer:
              "You can request to add a non-matching UPI ID by submitting the required documents through the in-app process. This is reviewed on a case-by-case basis.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "documents-non-matching-upi",
            question:
              "What documents are required to add a UPI ID that does not match the name on my Primary UPI ID?",
            answer:
              "You may need to submit identity proof and a bank statement linking the UPI ID to your name. The exact requirements are shown in the in-app request process.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "raise-request-add-upi",
            question: "How can I raise a request to add or update such a UPI ID?",
            answer:
              "You can raise a request through the in-app troubleshooting section. Submit the required documents and your request will be processed within 72 hours.",
            supportActionable: "Through In App Troubleshooting",
            deeplink: "https://www.myjar.app/",
            comments: "72 hours TAT",
          },
          {
            id: "new-upi-activation-time",
            question:
              "After submitting the required documents, how long does it take for the new UPI ID to be activated on Jar?",
            answer:
              "After submitting the required documents, the new UPI ID is typically activated within 72 hours.",
            supportActionable: "Solved by FAQ",
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
              "Sometimes payments take a few minutes to process. If your purchase is still pending after 30 minutes, use the in-app troubleshooting option.",
            supportActionable: "Through In App Troubleshooting",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "gold-purchase-failed",
            question:
              "Why is my gold purchase marked as failed after a successful payment?",
            answer:
              "This can happen due to payment processing delays. If money was debited, it will be refunded within 5-7 business days. Use in-app troubleshooting for details.",
            supportActionable: "Through In App Troubleshooting",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "unknown-gold-purchases",
            question:
              "Why do I see gold purchases in my transaction history that I did not make?",
            answer:
              "These could be from your active savings plans (Daily/Weekly/Monthly Savings or Round-Off). Check your active subscriptions in the app. If they still seem unauthorized, contact support immediately.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "payment-in-progress",
            question: "Why is my payment status showing as 'In Progress'?",
            answer:
              "Your payment is being processed. It usually takes a few minutes. If it doesn't update within 30 minutes, use in-app troubleshooting.",
            supportActionable: "Through In App Troubleshooting",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "payment-status-update-time",
            question:
              "How long does it take for a payment status to update to 'Success' or 'Failed'?",
            answer:
              "Payment status usually updates within a few minutes. In rare cases, it may take up to 30 minutes. Use in-app troubleshooting if it takes longer.",
            supportActionable: "Through In App Troubleshooting",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "payment-status-failed",
            question: "Why is my payment status showing as 'Failed'?",
            answer:
              "A payment can fail due to insufficient balance, bank server issues, or UPI app errors. If money was debited, it will be refunded within 5-7 business days.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "refund-failed-purchase",
            question:
              "When will I receive the refund for a failed gold purchase after a successful payment?",
            answer:
              "If your payment was debited but the purchase failed, the refund will be processed within 5-7 business days to your source account.",
            supportActionable: "Solved by FAQ",
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
              "You can view your payment details in the Transaction History section of the Jar app.",
            supportActionable: "In App Redirection",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "find-invoice",
            question: "Where can I find the invoice for my payment?",
            answer:
              "You can find invoices for your payments in the Transaction History section. Tap on any transaction to view and download the invoice.",
            supportActionable: "In App Redirection",
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
              "You can download your account statement from the Profile or Settings section in the Jar app.",
            supportActionable: "In App Redirection",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "statement-generation-time",
            question:
              "How long does it take for an account statement to be generated?",
            answer:
              "Account statements are usually generated within a few minutes. You'll be notified once it's ready.",
            supportActionable: "In App Redirection",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "view-previous-statements",
            question:
              "Where can I view previously requested account statements?",
            answer:
              "Previously requested account statements can be found in the Profile or Settings section under Account Statements.",
            supportActionable: "Solved by FAQ",
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
              "An autopay is set up when you activate any savings plan (Daily, Weekly, or Monthly Savings) and complete the UPI mandate setup.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "see-savings-plans",
            question:
              "Where can I see the Savings Plans I have opted for on Jar?",
            answer:
              "You can see all your active Savings Plans in the Savings section of the Jar app.",
            supportActionable: "In App Redirection",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "manage-savings-plans",
            question:
              "How can I manage the Savings Plans I have active on Jar?",
            answer:
              "You can manage your active Savings Plans from the Savings section in the Jar app. Here you can edit, pause, or stop plans.",
            supportActionable: "In App Redirection",
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
              "You can pause your Savings Plan from the Savings section in the Jar app. Select your plan and choose Pause.",
            supportActionable: "In App Redirection",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "why-not-pause",
            question: "Why should I not Pause my plan?",
            answer:
              "Pausing your plan means you'll miss out on building consistent savings. Regular savings help you accumulate gold over time and benefit from cost averaging.",
            supportActionable: "Solved by FAQ",
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
              "You can stop your Savings Plan from the Savings section in the Jar app. Select your plan and choose Stop.",
            supportActionable: "In App Redirection",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "why-not-stop",
            question: "Why should I not Stop my plan?",
            answer:
              "Stopping your plan means your automated savings will end. Your existing savings remain safe, but you'll need to manually save or restart a plan to continue growing your gold.",
            supportActionable: "Solved by FAQ",
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
              "You can withdraw your gold savings as:\n\n• Cash to your bank account via UPI\n• Physical gold coins or jewellery through Nek (Jar's jewellery brand)",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "withdraw-to-bank",
            question: "How can I withdraw my savings in my bank account?",
            answer:
              "Go to the Withdrawal section in the Jar app, enter the amount, select your UPI ID, and confirm. The amount will be credited to your bank account.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "purchase-jewellery-coins",
            question:
              "How can I use my Jar savings to purchase Jewellery/Gold Coins?",
            answer:
              "You can use your Jar savings to purchase jewellery and gold coins through Nek, Jar's jewellery platform. Browse products and pay using your Jar gold balance.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "withdrawal-wait-time",
            question:
              "How long do I need to wait to withdraw my savings into my bank account?",
            answer:
              "You can withdraw your savings anytime. There is no lock-in period. The withdrawal amount is usually credited within a few hours.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "withdrawal-daily-limit",
            question: "How many times can I withdraw in a day?",
            answer:
              "You can make multiple withdrawals in a day. Check the app for current withdrawal limits.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "withdrawal-fees",
            question:
              "Does Jar charge any fees/taxes while withdrawing my savings?",
            answer:
              "Jar does not charge any fees for withdrawals. However, applicable taxes on capital gains may apply as per government regulations.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "amount-locked-withdrawal",
            question:
              "Why do I see some of my invested amount locked for withdrawal to my bank account?",
            answer:
              "Some amount may be temporarily locked due to recent purchases that haven't been settled yet. It usually becomes available within 24-48 hours.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "gold-current-vs-invested",
            question:
              "Why there is a difference in my Current vs my Invested Value?",
            answer:
              "The difference reflects changes in gold market prices over time. Your current value is based on live rates and may be higher or lower than your invested amount.",
            supportActionable: "Solved by FAQ",
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
              "The withdrawal is being processed. It may take some time for the amount to reach your bank account. Use in-app troubleshooting to check the status.",
            supportActionable: "Through In App Troubleshooting",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "gold-withdrawal-processing-time",
            question:
              "How long does it take for a withdrawal request to be processed and reach a final status?",
            answer:
              "Withdrawals are usually processed instantly. For beneficiary bank transfers, it may take 42-78 hours in some cases.",
            supportActionable: "Solved by FAQ",
            comments: "instant, beneficiary, 42-78 hours",
          },
          {
            id: "gold-withdrawal-failed",
            question:
              "Why did my withdrawal fail even though the gold was deducted from my locker?",
            answer:
              "If your withdrawal failed, the gold will be credited back to your locker. Use in-app troubleshooting for details.",
            supportActionable: "Through In App Troubleshooting",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "gold-withdrawal-refund-time",
            question:
              "If my withdrawal fails, how long will it take for the gold to be credited back to my Jar locker?",
            answer:
              "You have a 24-hour window to retry the withdrawal. If it doesn't go through, the amount will be settled within 48 hours of the transaction.",
            supportActionable: "Solved by FAQ",
            comments:
              "24 hours of window to retry, incase it doesn't go through amount will be settled within 48 hours of transaction",
          },
          {
            id: "withdrawal-blocked",
            question:
              "My withdrawal request is blocked. What should I do?",
            answer:
              "If your withdrawal is blocked, please contact our support team for assistance. They will review your account and help resolve the issue.",
            supportActionable: "Support Required",
          },
          {
            id: "withdraw-different-upi",
            question:
              "I want to withdraw to a different UPI ID, but I'm unable to add a new one. What should I do?",
            answer:
              "If you're unable to add a new UPI ID, it may be due to a name mismatch with your KYC details. Use the in-app troubleshooting to request adding a new UPI ID.",
            supportActionable: "Through In App Troubleshooting",
            deeplink: "https://www.myjar.app/",
            comments: "Add Related Topics",
          },
          {
            id: "lost-sim-withdraw",
            question:
              "I lost my SIM card and cannot log in to my Jar account. How can I withdraw my savings from my Jar wallet?",
            answer:
              "If you've lost your SIM card, get a replacement SIM with the same number from your telecom provider. Once you have the same number active, you can log back into Jar and access your savings.",
            supportActionable: "Solved by FAQ",
          },
        ],
      },
    ],
  },
  {
    id: "refer-earn",
    faqCategory: "Refer and Earn",
    faqPageHeader: "Refer and Earn",
    icon: "🎁",
    subcategories: [
      {
        id: "refer-earn-general",
        name: "Refer and Earn",
        questions: [
          {
            id: "how-receive-rewards",
            question: "How will I receive my rewards?",
            answer:
              "Your referral rewards are automatically credited to your Jar account once the referred person meets the eligibility criteria.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "eligibility-earn-rewards",
            question: "What are the eligibility criteria to earn rewards?",
            answer:
              "To earn referral rewards, the person you referred must download the Jar app, sign up, and complete their first savings transaction.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "where-rewards-credited",
            question: "Where will my rewards be credited?",
            answer:
              "Your referral rewards will be credited directly to your Jar account as digital gold or reward balance.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "referral-reward-not-received",
            question:
              "I successfully referred someone but did not receive the reward. Why?",
            answer:
              "If you didn't receive your referral reward, it could be because the referred person hasn't met the eligibility criteria yet, or there might be a processing delay. Please contact support with the referral details.",
            supportActionable: "Support Required",
            comments:
              "user - refer's phone number, timestamp of share, T&C matching",
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
              "Weekly Magic is a rewards feature on Jar where you can win prizes by completing savings tasks during the week.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "win-weekly-magic",
            question: "How can I win a Weekly Magic reward?",
            answer:
              "Complete the required savings tasks shown in the Weekly Magic section of the app to win rewards.",
            supportActionable: "In App Redirection",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "check-weekly-magic",
            question: "Where can I check my Weekly Magic reward?",
            answer:
              "Check your Weekly Magic rewards in the Rewards section of the Jar app.",
            supportActionable: "In App Redirection",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "weekly-magic-no-reward",
            question:
              "What should I do if I've completed my Weekly Magic but didn't get the reward?",
            answer:
              "If you completed Weekly Magic but didn't receive the reward, please contact our support team with the details.",
            supportActionable: "Support Required",
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
              "You earn spins by saving on Jar, completing tasks, or through promotional offers. Each savings transaction may earn you spins to play.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "spin-rewards",
            question: "What rewards can I get on playing spins?",
            answer:
              "You can win digital gold, coupons, discount vouchers, and other exciting prizes by playing spins.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "spins-daily-limit",
            question: "How many spins can I play in a day?",
            answer:
              "The number of spins you can play depends on how many you've earned. Check the app for your available spins.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "what-is-jackpot",
            question: "What is Jackpot and how can I use it?",
            answer:
              "Jackpot is a special spin reward with bigger prizes. When you win a Jackpot, the reward is automatically credited to your account.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "see-spin-coupons",
            question: "Where can I see the coupons I won while playing spins?",
            answer:
              "You can see your won coupons in the Rewards or Coupons section of the Jar app.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "withdraw-spin-rewards",
            question: "Can I withdraw the rewards I got in spins?",
            answer:
              "Spin rewards like digital gold can be withdrawn like regular savings. Coupons and vouchers can be redeemed as per their terms.",
            supportActionable: "Solved by FAQ",
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
              "You can find your coupons in the Rewards > Coupons section of the Jar app.",
            supportActionable: "In App Redirection",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "use-coupons",
            question: "How can I use the coupons?",
            answer:
              "Tap on a coupon to view its details and redemption instructions. Each coupon has specific terms and validity.",
            supportActionable: "Solved by FAQ",
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
              "You can earn more winnings by saving regularly, playing spins, completing Weekly Magic challenges, and participating in promotional offers.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "use-winnings",
            question: "How do I use winnings?",
            answer:
              "Winnings can be used to invest in digital gold or redeemed as per the specific reward terms.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "withdraw-winnings",
            question: "Can I withdraw my winnings directly?",
            answer:
              "Some winnings can be withdrawn while others can only be used within the app. Check the Rewards section for withdrawal options.",
            supportActionable: "In App Redirection",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "winnings-expiring",
            question: "Why are my winnings expiring?",
            answer:
              "Winnings have a validity period. If not used within that time, they expire. Check the expiry date in your Rewards section and use them before they expire.",
            supportActionable: "Solved by FAQ",
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
              "Currently, you cannot change your registered mobile number as it's linked to your account identity and KYC. If you need to use a different number, you may need to create a new account.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "update-name-email",
            question:
              "Can I update my name, age, email id or saved addresses?",
            answer:
              "Yes, you can update your profile details like name, age, email, and addresses from the Profile section in the Jar app.",
            supportActionable: "In App Redirection",
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
              "You can delete your Jar account from the app. Go to Profile > Settings > Delete Account and follow the steps.",
            supportActionable: "In App Redirection",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "check-before-deleting",
            question: "What should I check before deleting my Jar account?",
            answer:
              "Before deleting your account, make sure to:\n\n• Withdraw all your savings to your bank account\n• Check for any pending transactions\n• Download any statements or invoices you need\n• Note that account deletion is permanent",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "data-after-deletion",
            question:
              "What happens to my private data after I delete my Jar account?",
            answer:
              "After account deletion, your personal data is removed as per our privacy policy and applicable data protection regulations.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "recover-deleted-account",
            question: "Can I recover a deleted account?",
            answer:
              "Once an account is deleted, it cannot be recovered. You would need to create a new account with the same or different number.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "deletion-time",
            question: "How long does it take to delete the account?",
            answer:
              "Account deletion is usually processed within 24-48 hours after the request is submitted.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "delete-through-support",
            question: "Can I delete my account through customer support?",
            answer:
              "Yes, you can also request account deletion through customer support if you're unable to do it through the app.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "deletion-charges",
            question: "Are there any charges for deleting my account?",
            answer:
              "No, there are no charges for deleting your Jar account.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "reason-for-deletion",
            question:
              "Is it compulsory to provide a reason for deleting my account?",
            answer:
              "While not compulsory, providing a reason helps us improve our services. You can skip this step if you prefer.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "issues-deleting-account",
            question:
              "What should I do if I am facing issues while deleting the account?",
            answer:
              "If you're facing issues deleting your account, try updating the app, clearing cache, or contact our support team for assistance.",
            supportActionable: "Solved by FAQ",
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
              "Jar asks for SMS permissions to detect your online transactions and enable the Round-Off feature, which automatically rounds up your spends and invests the spare change.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "reads-personal-messages",
            question: "Does Jar reads my personal messages?",
            answer:
              "No, Jar does not read your personal messages. It only reads transaction-related SMS from banks and payment apps to power the Round-Off feature.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "use-without-sms",
            question: "Can I use Jar without providing SMS permission?",
            answer:
              "Yes, you can use Jar without SMS permissions. However, the Round-Off feature won't work without it. All other features like Daily Savings, Instant Save, and withdrawals will work normally.",
            supportActionable: "Solved by FAQ",
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
              "A nominee is a person you designate to receive your Jar savings in case of any unfortunate event. Adding a nominee ensures your savings are protected.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "why-add-nominee",
            question: "Why should I add a nominee?",
            answer:
              "Adding a nominee ensures your digital gold/silver savings are safely transferred to your chosen person in case of any unforeseen circumstances.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "where-add-nominee",
            question: "Where do I add nominee on the Jar?",
            answer:
              "You can add a nominee from the Profile section in the Jar app. Look for the Nominee option and follow the steps.",
            supportActionable: "In App Redirection",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "see-nominee",
            question: "Where can I see the nominee?",
            answer:
              "You can view your nominee details in the Profile > Nominee section of the Jar app.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "how-many-nominees",
            question: "How many nominees can I add on my Jar account?",
            answer:
              "You can add one nominee to your Jar account.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "nominee-details-needed",
            question: "What details of the nominee are needed?",
            answer:
              "You need to provide the nominee's full name, relationship, date of birth, and contact details.",
            supportActionable: "Solved by FAQ",
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
              "Currently, Jar does not offer loans. Jar is focused on helping you save and invest in digital gold and silver. Stay tuned for updates on new features.",
            supportActionable: "Solved by FAQ",
            comments: "Mention that we are not giving any loans",
          },
          {
            id: "foreclose-loan",
            question: "How do I raise a request to foreclose my loan?",
            answer:
              "If you have an existing loan, please contact our support team for assistance with foreclosure.",
            supportActionable: "Support Required",
          },
          {
            id: "pending-emis",
            question: "How many EMIs are pending for my loan to close?",
            answer:
              "Please contact our support team to check your pending EMI details.",
            supportActionable: "Support Required",
          },
          {
            id: "loan-interest",
            question: "How much interest do I pay for my active loan?",
            answer:
              "Please contact our support team for details about your loan interest.",
            supportActionable: "Support Required",
          },
          {
            id: "ongoing-loan-details",
            question: "Where can I see the details of my ongoing loan?",
            answer:
              "Please contact our support team for details about your ongoing loan.",
            supportActionable: "Support Required",
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
              "Jar Pay is a UPI-based payment feature within the Jar app that allows you to send and receive money, pay bills, and make transactions seamlessly.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "how-use-jar-pay",
            question: "How can I use Jar Pay?",
            answer:
              "Open the Jar app, go to the Jar Pay section, link your bank account, and start making UPI payments to anyone.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "jar-pay-instant-transfer",
            question: "Can I transfer money instantly using JarPay?",
            answer:
              "Yes, Jar Pay supports instant UPI transfers. Money is sent and received in real-time.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "jar-pay-benefits",
            question: "What are the benefits of using JarPay?",
            answer:
              "Benefits include instant transfers, seamless UPI payments, bill payments, and the convenience of managing savings and payments in one app.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "jar-pay-safe",
            question: "Is JarPay safe?",
            answer:
              "Yes, Jar Pay is completely safe. It uses bank-grade security, UPI PIN verification, and encrypted transactions to protect your money.",
            supportActionable: "Solved by FAQ",
          },
        ],
      },
      {
        id: "about-upi",
        name: "About UPI",
        questions: [
          {
            id: "what-is-upi-pin",
            question: "What is a UPI PIN?",
            answer:
              "A UPI PIN is a 4 or 6-digit password you set with your bank to authorize UPI transactions. It's required for every payment you make.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "upi-vs-imps",
            question: "How is UPI different from IMPS?",
            answer:
              "UPI is built on top of IMPS but offers a simpler interface using virtual payment addresses (UPI IDs) instead of bank account numbers. Both support instant transfers.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "upi-transfer-ways",
            question:
              "What are the different ways to transfer money using UPI?",
            answer:
              "You can transfer money using UPI via UPI ID, QR code, phone number, or bank account number.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "upi-max-limit",
            question:
              "What is the maximum limit for transferring money through UPI?",
            answer:
              "The standard UPI transaction limit is ₹1,00,000 per transaction. Some banks may have lower limits.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "upi-cross-platform",
            question:
              "Can I use UPI across different mobile platforms (Android / iOS)?",
            answer:
              "Yes, UPI works across both Android and iOS platforms. You can use any UPI app on either platform.",
            supportActionable: "Solved by FAQ",
          },
        ],
      },
      {
        id: "upi-setup-registration",
        name: "UPI Setup & Registration",
        questions: [
          {
            id: "register-before-sending",
            question:
              "Do I need to register before sending money using UPI?",
            answer:
              "Yes, you need to register on a UPI app and link your bank account before you can send money.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "bank-account-needed",
            question:
              "Do I need a bank account to use UPI, or can it be linked to a card or wallet?",
            answer:
              "You need a bank account to use UPI. It cannot be linked to a credit card or wallet directly.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "multiple-bank-accounts",
            question:
              "Can I link more than one bank account to the same UPI ID?",
            answer:
              "Yes, you can link multiple bank accounts to the same UPI app, but each bank account will have its own UPI ID.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "switch-upi-app",
            question:
              "If I switch to another UPI app, can I continue using the same UPI ID?",
            answer:
              "UPI IDs are app-specific. If you switch apps, you'll get a new UPI ID, but your bank account and money remain the same.",
            supportActionable: "Solved by FAQ",
          },
        ],
      },
      {
        id: "sending-receiving-money",
        name: "Sending & Receiving Money",
        questions: [
          {
            id: "pay-online-merchant",
            question: "How can I pay an online merchant using UPI?",
            answer:
              "You can pay online merchants by selecting UPI as the payment method, entering your UPI ID or scanning the QR code, and authorizing with your UPI PIN.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "upi-banking-hours",
            question:
              "Do UPI transfers work only during banking hours?",
            answer:
              "No, UPI transfers work 24×7, including weekends and holidays.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "receiver-needs-upi",
            question:
              "Does the receiver also need to be registered on UPI to receive money?",
            answer:
              "Yes, the receiver needs to have a UPI-enabled bank account to receive money via UPI.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "add-beneficiary",
            question:
              "Do I need to add a beneficiary before sending money using UPI? What details are required?",
            answer:
              "No, you don't need to add a beneficiary for UPI transfers. You just need the receiver's UPI ID, phone number, or QR code.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "collect-request-time",
            question:
              "How long does a payer have to approve a collect request?",
            answer:
              "A collect request is valid for a limited time (usually a few hours). After that, it expires automatically.",
            supportActionable: "Solved by FAQ",
          },
        ],
      },
      {
        id: "upi-pin-security",
        name: "UPI PIN & Security",
        questions: [
          {
            id: "wrong-upi-pin",
            question:
              "What happens if I enter the wrong UPI PIN during a transaction?",
            answer:
              "If you enter the wrong UPI PIN, the transaction will fail. After multiple wrong attempts, your UPI access may be temporarily blocked by your bank.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "forget-upi-pin",
            question: "What should I do if I forget my UPI PIN?",
            answer:
              "You can reset your UPI PIN through your UPI app using your debit card details and registered mobile number.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "set-reset-upi-pin",
            question: "How can I set or reset my UPI PIN with my bank?",
            answer:
              "Open your UPI app, go to bank account settings, and select 'Set/Reset UPI PIN'. You'll need your debit card number and expiry date.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "auto-debit-without-permission",
            question:
              "Can payments be auto-debited from my bank account without my permission?",
            answer:
              "No, every UPI transaction requires your UPI PIN authorization. No payment can be made without your explicit approval.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "app-access-bank-details",
            question: "How does the app access my bank account details?",
            answer:
              "The app accesses your bank account through the UPI infrastructure provided by NPCI. Your bank details are secured and encrypted.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "someone-else-access",
            question:
              "If someone else uses my phone, can they access my UPI account?",
            answer:
              "They cannot make transactions without your UPI PIN. However, it's recommended to keep your phone locked and not share your UPI PIN with anyone.",
            supportActionable: "Solved by FAQ",
          },
        ],
      },
      {
        id: "device-sim-changes",
        name: "Device & SIM Changes",
        questions: [
          {
            id: "upi-after-sim-change",
            question:
              "Can I continue using UPI after changing my SIM card?",
            answer:
              "Yes, but you'll need to re-register on your UPI app with the new SIM. Your bank account linkage will need to be set up again.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "upi-phone-change",
            question:
              "Will I be able to use UPI if I change my mobile phone?",
            answer:
              "Yes, install your UPI app on the new phone, log in with your registered number, and re-link your bank account.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "upi-lose-phone",
            question: "What should I do if I lose my phone?",
            answer:
              "Block your SIM immediately through your telecom provider. Get a replacement SIM with the same number and set up UPI again on your new device.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "upi-network-change",
            question:
              "What happens to my UPI access if I change my mobile network provider?",
            answer:
              "If you port your number, UPI may need to be re-registered. Ensure your new SIM is active and linked to your bank account.",
            supportActionable: "Solved by FAQ",
          },
        ],
      },
      {
        id: "bank-linking-issues",
        name: "Bank Linking Issues",
        questions: [
          {
            id: "bank-not-detected",
            question:
              "Why is my bank account not being detected when I try to link it to UPI?",
            answer:
              "This can happen if your mobile number is not registered with your bank, or if there's a temporary bank server issue. Ensure your number is linked to your bank account and try again.",
            supportActionable: "Solved by FAQ",
          },
        ],
      },
      {
        id: "transaction-issues",
        name: "Transaction Issues",
        questions: [
          {
            id: "upi-payment-fail-debited",
            question:
              "Why did my UPI payment fail even though my bank account was debited?",
            answer:
              "This can happen due to a network issue during the transaction. The amount will be automatically refunded within 5-7 business days.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "transaction-pending",
            question:
              "What should I do if my transaction is showing as 'Pending'?",
            answer:
              "Wait for some time as pending transactions usually resolve within 30 minutes. If it remains pending, check with your bank or contact support.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "payment-no-product",
            question:
              "I made a payment but did not receive the service or product. What should I do?",
            answer:
              "Contact the merchant first. If unresolved, raise a complaint through your UPI app or contact your bank.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "money-debited-no-transaction",
            question:
              "What happens if the money is debited but the transaction does not go through?",
            answer:
              "The amount will be automatically refunded to your bank account within 5-7 business days.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "cancel-upi-payment",
            question:
              "Can I stop or cancel a UPI payment after it has been sent?",
            answer:
              "No, UPI payments are instant and cannot be cancelled once sent. Contact the receiver to request a refund.",
            supportActionable: "Solved by FAQ",
          },
        ],
      },
      {
        id: "transaction-history-support",
        name: "Transaction History & Support",
        questions: [
          {
            id: "view-upi-history",
            question: "How can I view my UPI transaction history?",
            answer:
              "You can view your UPI transaction history in the Jar Pay section or Transaction History of the Jar app.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "raise-upi-complaint",
            question:
              "Where can I raise a complaint for a failed or incorrect UPI transaction?",
            answer:
              "You can raise a complaint through the Jar app support section or directly through your bank's UPI complaint mechanism.",
            supportActionable: "Solved by FAQ",
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
              "Nek is Jar's jewellery and gold coin delivery platform. You can use your digital gold savings to purchase jewellery, gold coins, and silver products.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "buy-without-jar-savings",
            question:
              "Can I buy jewellery from Nek without having Jar Savings?",
            answer:
              "Yes, you can purchase from Nek using other payment methods like UPI, even without existing Jar savings.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "nek-owned-by-jar",
            question: "Is Nek owned by Jar?",
            answer:
              "Yes, Nek is a brand by Jar that specializes in jewellery and gold coin delivery.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "products-genuine",
            question: "Are your products genuine?",
            answer:
              "Yes, all Nek products are genuine and come with purity certification. Gold products are 24K (99.99% purity).",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "nek-viba-same",
            question: "Is Nek and Viba the same brand?",
            answer:
              "Nek is the current brand name for Jar's jewellery platform. Viba was the previous name.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "custom-jewellery",
            question: "Can custom jewellery be ordered from Nek?",
            answer:
              "Currently, Nek offers a curated collection of jewellery. Custom orders may not be available. Check the app for the latest product offerings.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "order-size-limit",
            question: "Is there any limit on the order size?",
            answer:
              "Order limits depend on the product. Check individual product pages for quantity and order limits.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "making-design-charges",
            question: "What are the M&D charges applied?",
            answer:
              "Making and Design (M&D) charges are applied on jewellery products to cover craftsmanship and design costs. These are clearly shown on each product page.",
            supportActionable: "Solved by FAQ",
          },
        ],
      },
      {
        id: "tracking-delivery",
        name: "Tracking & Delivery",
        questions: [
          {
            id: "gold-coin-delivery-time",
            question: "When would my gold coin be delivered?",
            answer:
              "Gold coins are typically delivered within 7-10 business days after order confirmation. Delivery time may vary by location.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "track-order",
            question: "How can I track my order?",
            answer:
              "You can track your order from the Orders section in the Jar app. You'll also receive tracking updates via SMS and notifications.",
            supportActionable: "In App Redirection",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "cancel-order",
            question: "How can I cancel my order?",
            answer:
              "You can cancel your order from the Orders section in the Jar app before it's shipped.",
            supportActionable: "In App Redirection",
            deeplink: "https://www.myjar.app/",
          },
          {
            id: "when-cancel-order",
            question: "When can I cancel my order?",
            answer:
              "You can cancel your order before it has been shipped. Once shipped, cancellation may not be possible.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "unable-cancel-order",
            question: "Why I am not able to cancel the order?",
            answer:
              "You may not be able to cancel if the order has already been shipped or is being processed for delivery.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "return-order",
            question: "How can I return my order?",
            answer:
              "You can initiate a return from the Orders section in the Jar app within the return window. Check the return policy for specific product return conditions.",
            supportActionable: "Solved by FAQ",
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
              "You can pay using your Jar Gold savings, UPI, or a combination of both.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "nek-credit-card",
            question:
              "Can I use my credit card for ordering from Nek?",
            answer:
              "Currently, Nek primarily supports UPI and Jar Gold savings as payment methods. Credit card support may be limited.",
            supportActionable: "Solved by FAQ",
          },
          {
            id: "unable-use-jar-savings",
            question:
              "I am not able to use my Jar Savings for the purchase. What do I do?",
            answer:
              "Ensure your KYC is complete and your savings are not locked due to recent transactions. If the issue persists, contact support.",
            supportActionable: "Solved by FAQ",
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
          },
          {
            id: "report-unauthorized-transaction",
            question: "I see an unauthorized transaction on my account. What should I do?",
            answer:
              "If you notice any unauthorized transaction, please contact our support team immediately. Do not share your OTP, PIN, or password with anyone. Our team will investigate and help secure your account.",
            supportActionable: "Support Required",
          },
          {
            id: "report-suspicious-activity",
            question: "How do I report suspicious activity on my Jar account?",
            answer:
              "If you notice any suspicious activity on your account, please reach out to our support team immediately through the app or contact us directly. We take fraud very seriously and will investigate promptly to protect your account.",
            supportActionable: "Support Required",
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
    label: "Refer and Earn",
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
      if (word.length < 2) continue;
      if (questionLower.includes(word)) score += 20;
      if (answerLower.includes(word)) score += 10;
      if (categoryLower.includes(word)) score += 5;
      if (subcategoryLower.includes(word)) score += 5;
    }

    // Semantic keyword matching
    const semanticMap: Record<string, string[]> = {
      withdraw: ["withdrawal", "cash out", "bank transfer", "money back", "take out"],
      pending: ["in progress", "stuck", "waiting", "not received", "processing"],
      failed: ["failure", "unsuccessful", "error", "not working", "declined"],
      kyc: ["verification", "identity", "pan card", "aadhaar", "document", "id proof"],
      upi: ["payment", "pay", "transfer", "send money", "receive money", "vpa"],
      gold: ["digital gold", "24k", "investment", "savings", "locker"],
      silver: ["digital silver", "precious metal"],
      refund: ["money back", "cashback", "return", "credit back"],
      autopay: ["subscription", "recurring", "automatic", "scheduled"],
      savings: ["save", "invest", "daily savings", "weekly savings", "monthly savings"],
      round: ["round off", "spare change", "roundup"],
      reward: ["referral", "bonus", "earn", "spin", "coupon", "winning"],
      nek: ["jewellery", "jewelry", "gold coin", "delivery", "order"],
      fraud: ["unauthorized", "not recognized", "scam", "report", "suspicious"],
    };

    for (const [key, synonyms] of Object.entries(semanticMap)) {
      const allTerms = [key, ...synonyms];
      const queryHasTerm = allTerms.some((t) => q.includes(t));
      if (queryHasTerm) {
        const contentHasTerm = allTerms.some(
          (t) => questionLower.includes(t) || answerLower.includes(t)
        );
        if (contentHasTerm) score += 25;
      }
    }

    return { ...item, score };
  });

  return scored
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 20);
}

// Helper: get related questions for a given question
export function getRelatedQuestions(questionId: string, limit = 4) {
  const found = findQuestionById(questionId);
  if (!found) return [];

  const { category, subcategory, question } = found;
  const related: (FAQQuestion & { categoryId: string })[] = [];

  // First, get other questions from same subcategory
  for (const q of subcategory.questions) {
    if (q.id !== questionId && related.length < limit) {
      related.push({ ...q, categoryId: category.id });
    }
  }

  // Then from same category but different subcategory
  if (related.length < limit) {
    for (const sub of category.subcategories) {
      if (sub.id === subcategory.id) continue;
      for (const q of sub.questions) {
        if (related.length >= limit) break;
        if (!related.find((r) => r.id === q.id)) {
          related.push({ ...q, categoryId: category.id });
        }
      }
    }
  }

  return related.slice(0, limit);
}
