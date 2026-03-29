"use client";

import { useState } from "react";
import SecurityIcon from "@mui/icons-material/Security";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import LockIcon from "@mui/icons-material/Lock";
import ShieldIcon from "@mui/icons-material/Shield";
import GppGoodIcon from "@mui/icons-material/GppGood";
import TimerIcon from "@mui/icons-material/Timer";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import PriceChangeIcon from "@mui/icons-material/PriceChange";
import GavelIcon from "@mui/icons-material/Gavel";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import TokenIcon from "@mui/icons-material/Token";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import CloseIcon from "@mui/icons-material/Close";
import { useLocale } from "./LocaleContext";
import { uiStrings } from "../data/uiStrings";
import { trustItemsHi, categoryLabelsHi } from "./TrustSection.hi";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function RichText({ text }: { text: string }) {
  const lines = text.split("\n");
  return (
    <>
      {lines.map((line, i) => {
        const parts = line.split(/(\*\*[^*]+\*\*)/g);
        return (
          <span key={i}>
            {i > 0 && <br />}
            {parts.map((part, j) =>
              part.startsWith("**") && part.endsWith("**") ? (
                <strong key={j} className="font-semibold text-gray-900">
                  {part.slice(2, -2)}
                </strong>
              ) : (
                <span key={j}>{part}</span>
              )
            )}
          </span>
        );
      })}
    </>
  );
}

interface TrustItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  answer: string;
  category: "safety" | "security" | "gold" | "engineering";
}

const trustItems: TrustItem[] = [
  {
    id: "how-jar-works",
    icon: <AccountBalanceIcon fontSize="small" />,
    title: "How does the Jar App work?",
    category: "safety",
    answer:
      "Jar lets you save in **digital gold and silver** starting from just **₹10**.\n\nYou can save through **daily, weekly, or monthly auto-savings**, or invest manually anytime. Your savings are always yours: withdraw as **cash to your bank** or get **physical gold coins and jewellery** delivered.\n\nWith **AutoPay**, saving happens automatically while you go about your day.",
  },
  {
    id: "brinks-vistra",
    icon: <WarehouseIcon fontSize="small" />,
    title: "What is BRINKS and VISTRA? How do they keep gold safe?",
    category: "safety",
    answer:
      "Your gold is protected by two globally trusted names:\n\n**Brink's** is a world leader in secure vault storage, used by banks and governments. Your gold sits in their **bank-grade, 24x7 monitored vaults** under your name and is fully **insured**.\n\n**Vistra** is an independent trustee that audits the vaults regularly. They make sure the gold stored there **always matches what you own**. No one, not even Jar, can touch your gold without your consent.\n\nTwo layers of trust: **secure storage + independent verification**.",
  },
  {
    id: "safeguards",
    icon: <VerifiedUserIcon fontSize="small" />,
    title: "How does Jar safeguard users and their gold?",
    category: "safety",
    answer:
      "Your savings on Jar are protected at every step:\n\n• Stored in **Brink's vaults**: globally trusted, 24x7 monitored\n• **Fully insured**: your gold is fully covered\n• Verified by **Vistra**: independent audits confirm your gold matches your balance\n• **Zero storage fees**: no extra charges to keep your gold safe\n• **Encrypted payments**: every transaction needs your UPI PIN\n\n**40M+ users** trust Jar with their savings.",
  },
  {
    id: "lock-in-period",
    icon: <TimerIcon fontSize="small" />,
    title: "Why is there a lock-in period of 24 hours on my gold withdrawal?",
    category: "safety",
    answer:
      "The 24-hour wait exists **only to ensure your gold is safe and prevent fraud**.\n\nWhen you buy gold, it takes a short time for the purchase to settle. During this window, we verify that the payment is legitimate and protect you from unauthorized transactions.\n\nOnce settled (usually **24 to 48 hours**), you can withdraw freely. There is **no long-term lock-in** on Jar.",
  },
  {
    id: "2fa",
    icon: <LockIcon fontSize="small" />,
    title: "Does Jar support Two-Factor Authentication (2FA)?",
    category: "security",
    answer:
      "Yes. Every action on Jar is protected by multiple verification steps:\n\n• **KYC verification**: you must complete ID verification (Aadhaar + PAN) before you can transact. This ensures only verified, real users can use Jar\n• **VPA name matching**: when you add a new UPI ID for withdrawal, Jar matches the name on it with your primary VPA. Withdrawals can only go to **the rightful owner**, not anyone else\n\nThese two layers make sure **your identity is confirmed** and **your money goes only to you**.",
  },
  {
    id: "jar-shield",
    icon: <ShieldIcon fontSize="small" />,
    title: "What is Jar Shield, and how does it protect my savings?",
    category: "security",
    answer:
      "Jar Shield is built around **KYC / ID Verification**.\n\nWhen you complete KYC, Jar verifies your identity using **Aadhaar and PAN**. This ensures:\n\n• **Only verified users** can buy, sell, or withdraw gold: no anonymous accounts\n• Your identity is **authenticated at every step**, preventing anyone else from operating your account\n• It helps us **detect and block fraudulent accounts** before they cause harm\n• Meets **government compliance** requirements for financial transactions\n\nKYC is the foundation of Jar Shield: it makes sure every rupee and every gram of gold belongs to the right person.",
  },
  {
    id: "fraud-prevention",
    icon: <GppGoodIcon fontSize="small" />,
    title: "How does Jar's real-time risk assessment proactively prevent fraud?",
    category: "security",
    answer:
      "Jar doesn't wait for fraud to happen: we stop it before it reaches you.\n\n• **Real-time transaction checks**: every transaction is scanned instantly for anything unusual\n• **Behavioural analysis**: the system knows your normal patterns and flags anomalies\n• **Unknown device blocking**: access from unrecognized devices is automatically blocked\n• **Instant alerts**: you're notified immediately if something looks suspicious\n• **Auto-blocking**: fraudulent transactions are stopped before they complete\n\nSpot something odd? Report it through the app and our team acts on it right away.",
  },
  {
    id: "buy-sell-difference",
    icon: <PriceChangeIcon fontSize="small" />,
    title: "Why is there a difference in sell price and buy price on Jar?",
    category: "gold",
    answer:
      "This is called the **\"price spread\"** and it's standard in gold investing:\n\n• **Market spread**: buyback prices are naturally slightly lower than selling prices\n• **3% GST**: applies only when you buy, not when you sell\n• **Operational costs**: covers secure vault storage, insurance, and payment processing\n\nJar always shows you the **exact buy and sell price upfront** before any transaction. No hidden charges, no surprises.",
  },
  {
    id: "digital-gold-regulation",
    icon: <GavelIcon fontSize="small" />,
    title: "If digital gold is unregulated by SEBI and RBI, why should people buy it?",
    category: "gold",
    answer:
      "While SEBI and RBI don't directly regulate digital gold, your investment is protected through a strong trust framework:\n\n• **Vistra** independently verifies your gold is always accounted for\n• Stored in **Brink's vaults** and **fully insured**\n• Every gram is backed by **real 24K gold (99.99% purity)**\n• All transactions are **GST-compliant**\n\nCompared to Gold ETFs, digital gold on Jar is simpler:\n\n• Start from just **₹10** (no minimum lot size)\n• **No demat account** needed\n• Get **physical delivery** as coins or jewellery\n• **No management fees** (ETFs charge annual expense ratios)\n• Buy **24x7** (ETFs only work during market hours)",
  },
  {
    id: "physical-vs-digital",
    icon: <CompareArrowsIcon fontSize="small" />,
    title: "What's the difference between physical gold and digital gold?",
    category: "gold",
    answer:
      "Digital gold gives you all the benefits of gold without the headaches:\n\n• Start from **₹10**: no need to save up for jewellery\n• **No making charges** (jewellery costs 8-25% extra!)\n• **Free storage** in insured Brink's vaults\n• Guaranteed **24K purity** (99.99%)\n• Buy, sell, or withdraw **anytime from your phone**\n• **No theft risk**: securely stored and insured\n\nWith physical gold, you deal with making charges, storage worries, purity concerns, and it's hard to sell in small amounts.\n\nYou can always **convert digital gold into physical coins or jewellery** whenever you want.",
  },
  {
    id: "charges-taxes",
    icon: <ReceiptLongIcon fontSize="small" />,
    title: "What are the charges and taxes on purchase and sale of digital gold?",
    category: "gold",
    answer:
      "Jar keeps it simple:\n\nWhen you buy:\n• **3% GST**: a government tax on gold, not a Jar fee\n• **Zero commission**: Jar doesn't charge you anything extra\n\nWhen you sell or withdraw:\n• **No fees at all**: selling and bank withdrawal are completely free\n\nFor physical delivery:\n• Making charges apply for jewellery\n• Delivery charges may apply based on location\n\nThe **final price is always shown before you confirm** any transaction.",
  },
  {
    id: "what-is-digital-gold",
    icon: <TokenIcon fontSize="small" />,
    title: "What is digital gold and how does it work?",
    category: "gold",
    answer:
      "Digital gold is the easiest way to own **real gold**. When you invest, an equivalent amount of **24K gold (99.99% purity)** is bought and stored in your name.\n\nHow it works:\n\n• **Buy**: invest any amount from ₹10 at live market rates\n• **Store**: your gold sits in insured Brink's vaults, verified by Vistra\n• **Track**: watch your holdings in real-time in the app\n• **Sell**: sell anytime, cash reaches your bank within hours\n• **Deliver**: get physical coins, bars, or jewellery\n\nEvery gram is **backed by real physical gold**, independently verified and fully insured.",
  },
  {
    id: "engineering",
    icon: <RocketLaunchIcon fontSize="small" />,
    title: "How Jar App Engineering enables millions to buy gold in seconds?",
    category: "engineering",
    answer:
      "Behind Jar's simple experience is serious engineering:\n\n• **Auto-scaling infrastructure**: handles traffic spikes when gold prices move sharply\n• **Under 2-second transactions**: optimized pipelines for instant gold purchases\n• **99.9% uptime**: redundant systems keep the app always available\n• **Live price engine**: gold prices update every few seconds from bullion markets\n• **End-to-end encryption**: secure APIs and regular security audits\n• **Smart AutoPay**: manages millions of recurring savings plans daily\n• **Edge caching**: fast app performance across India, even on slower networks\n\nThis is what powers **40M+ users** saving and investing every single day.",
  },
];

const categoryLabels: Record<string, string> = {
  safety: "Safety & Protection",
  security: "Security Features",
  gold: "Digital Gold Basics",
  engineering: "Technology",
};

const categoryOrder = ["safety", "security", "gold", "engineering"] as const;

export default function TrustSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("safety");
  const { locale } = useLocale();
  const t = uiStrings[locale];

  const catLabels = locale === "hi" ? categoryLabelsHi : categoryLabels;

  // Merge Hindi text with English icons
  const items: TrustItem[] = locale === "hi"
    ? trustItems.map((en) => {
        const hi = trustItemsHi.find((h) => h.id === en.id);
        return hi ? { ...en, title: hi.title, answer: hi.answer } : en;
      })
    : trustItems;

  const filteredItems = items.filter(
    (item) => item.category === activeCategory
  );

  return (
    <section>
      {/* CTA Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full group cursor-pointer"
      >
        <div
          className="relative rounded-xl px-4 py-3 text-white overflow-hidden transition-all hover:shadow-lg"
          style={{ background: "#5F259F" }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center">
                <SecurityIcon style={{ fontSize: 18 }} />
              </div>
              <h3 className="text-sm font-bold">
                {t.trustHeader}
              </h3>
            </div>
            <ChevronRightIcon
              style={{ fontSize: 18 }}
              className={`transition-transform duration-300 ${
                isOpen ? "rotate-90" : "group-hover:translate-x-1"
              }`}
            />
          </div>
        </div>
      </button>

      {/* Expanded Panel */}
      {isOpen && (
        <div className="mt-3 rounded-2xl border border-gray-100 bg-white overflow-hidden shadow-sm">
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100 bg-gray-50/50">
            <div className="flex items-center gap-2">
              <SecurityIcon
                style={{ fontSize: 18, color: "#5B21B6" }}
              />
              <h3 className="text-sm font-bold text-gray-900">
                {t.trustSubHeader}
              </h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-7 h-7 rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <CloseIcon style={{ fontSize: 16 }} />
            </button>
          </div>

          {/* Category Tabs */}
          <div className="flex gap-2 px-5 py-2.5 border-b border-gray-100 overflow-x-auto scrollbar-hide">
            {categoryOrder.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setExpandedId(null);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "text-white"
                    : "bg-gray-50 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                }`}
                style={
                  activeCategory === cat
                    ? { background: "#5B21B6" }
                    : undefined
                }
              >
                {catLabels[cat]}
              </button>
            ))}
          </div>

          {/* Items */}
          <div className="divide-y divide-gray-50">
            {filteredItems.map((item) => {
              const isExpanded = expandedId === item.id;
              return (
                <div key={item.id}>
                  <button
                    onClick={() =>
                      setExpandedId(isExpanded ? null : item.id)
                    }
                    className="w-full flex items-center gap-3 px-5 py-3 text-left hover:bg-gray-50/50 transition-colors cursor-pointer"
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors"
                      style={
                        isExpanded
                          ? { background: "#EDE9FE", color: "#5B21B6" }
                          : { background: "#F3F4F6", color: "#6B7280" }
                      }
                    >
                      {item.icon}
                    </div>
                    <span className="text-sm font-medium text-gray-800 flex-1">
                      {item.title}
                    </span>
                    <ExpandMoreIcon
                      style={{ fontSize: 20 }}
                      className={`text-gray-400 transition-transform duration-200 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isExpanded && (
                    <div className="px-5 pb-4">
                      <div className="ml-11 p-4 rounded-xl bg-gray-50 border border-gray-100">
                        <div className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                          <RichText text={item.answer} />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
