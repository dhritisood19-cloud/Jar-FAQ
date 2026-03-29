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
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import { categoryColors } from "./categoryColors";

const s = 24;

const iconMap: Record<string, React.ReactNode> = {
  jar:                    <SavingsOutlinedIcon sx={{ fontSize: s }} />,
  "jar-gold":             <WorkspacePremiumOutlinedIcon sx={{ fontSize: s }} />,
  "jar-silver":           <MonetizationOnOutlinedIcon sx={{ fontSize: s }} />,
  kyc:                    <VerifiedUserOutlinedIcon sx={{ fontSize: s }} />,
  "upi-id":               <CreditCardOutlinedIcon sx={{ fontSize: s }} />,
  "payments-savings":     <ReceiptLongOutlinedIcon sx={{ fontSize: s }} />,
  "autopay-subscription": <AutorenewOutlinedIcon sx={{ fontSize: s }} />,
  withdrawal:             <AccountBalanceOutlinedIcon sx={{ fontSize: s }} />,
  "refer-earn":           <CardGiftcardOutlinedIcon sx={{ fontSize: s }} />,
  rewards:                <EmojiEventsOutlinedIcon sx={{ fontSize: s }} />,
  profile:                <PersonOutlinedIcon sx={{ fontSize: s }} />,
  nominee:                <GroupOutlinedIcon sx={{ fontSize: s }} />,
  loans:                  <DescriptionOutlinedIcon sx={{ fontSize: s }} />,
  "jar-pay":              <SendOutlinedIcon sx={{ fontSize: s }} />,
  nek:                    <DiamondOutlinedIcon sx={{ fontSize: s }} />,
  "report-fraud":         <ReportProblemOutlinedIcon sx={{ fontSize: s }} />,
  "nek-delivery":         <LocalShippingOutlinedIcon sx={{ fontSize: s }} />,
  "upi-help":             <SupportAgentOutlinedIcon sx={{ fontSize: s }} />,
};

export default function CategoryIcon({ categoryId }: { categoryId: string }) {
  const icon = iconMap[categoryId] || <SavingsOutlinedIcon sx={{ fontSize: s }} />;
  const colors = categoryColors[categoryId] || { color: "#7C3AED", bg: "#F3F0FF" };

  return (
    <div
      className="cat-icon w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200"
      style={{ "--cat-color": colors.color, "--cat-bg": colors.bg } as React.CSSProperties}
    >
      <span className="inline-flex">{icon}</span>
    </div>
  );
}
