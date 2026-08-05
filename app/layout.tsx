import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EMMA AI LAB · 让行业经验抵达 AI 的未知边界",
  description:
    "从二十年医药健康商业经验出发，探索行业知识、真实业务问题与 AI 技术的新连接。AI Pharma Market Studio · AI Clinical Workflow Assistant · AI百宝箱",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
