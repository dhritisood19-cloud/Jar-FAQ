"use client";

import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";
import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";

const iconMap: Record<string, React.ReactNode> = {
  jar: <SavingsOutlinedIcon sx={{ fontSize: 32, color: "#7C3AED" }} />,
  "jar-gold": <WorkspacePremiumOutlinedIcon sx={{ fontSize: 32, color: "#F59E0B" }} />,
  "jar-silver": <MonetizationOnOutlinedIcon sx={{ fontSize: 32, color: "#6B7280" }} />,
  kyc: <VerifiedUserOutlinedIcon sx={{ fontSize: 32, color: "#10B981" }} />,
  "upi-id": <CreditCardOutlinedIcon sx={{ fontSize: 32, color: "#3B82F6" }} />,
  "payments-savings": <ReceiptLongOutlinedIcon sx={{ fontSize: 32, color: "#8B5CF6" }} />,
  "autopay-subscription": <AutorenewOutlinedIcon sx={{ fontSize: 32, color: "#06B6D4" }} />,
  withdrawal: <AccountBalanceOutlinedIcon sx={{ fontSize: 32, color: "#059669" }} />,
  "refer-earn": <CardGiftcardOutlinedIcon sx={{ fontSize: 32, color: "#EF4444" }} />,
  rewards: <EmojiEventsOutlinedIcon sx={{ fontSize: 32, color: "#F59E0B" }} />,
  profile: <PersonOutlinedIcon sx={{ fontSize: 32, color: "#6366F1" }} />,
  nominee: <GroupOutlinedIcon sx={{ fontSize: 32, color: "#7C3AED" }} />,
  loans: <DescriptionOutlinedIcon sx={{ fontSize: 32, color: "#64748B" }} />,
  "jar-pay": <SendOutlinedIcon sx={{ fontSize: 32, color: "#2563EB" }} />,
  nek: <DiamondOutlinedIcon sx={{ fontSize: 32, color: "#EC4899" }} />,
  "report-fraud": <ReportProblemOutlinedIcon sx={{ fontSize: 32, color: "#DC2626" }} />,
};

export default function CategoryIcon({ categoryId, size = 32 }: { categoryId: string; size?: number }) {
  const icon = iconMap[categoryId];
  if (!icon) return <SavingsOutlinedIcon sx={{ fontSize: size, color: "#7C3AED" }} />;

  if (size !== 32) {
    // Clone with different size
    const entry = Object.entries(iconMap).find(([k]) => k === categoryId);
    if (entry) {
      const [, node] = entry;
      // Re-render with custom size
      return <span style={{ display: "inline-flex", transform: `scale(${size / 32})` }}>{node}</span>;
    }
  }

  return <>{icon}</>;
}
