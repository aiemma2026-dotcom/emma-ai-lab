import Link from "next/link";
import {
  HeroDoodle,
  PharmaChartDoodle,
  ClinicalPulseDoodle,
  ToolboxDoodle,
  FieldStartDoodle,
  KnowledgeFlowDoodle,
  PrototypeDoodle,
} from "@/components/doodles";

const NAV = [
  { href: "#works", label: "作品" },
  { href: "#principle", label: "方法论" },
  { href: "#contact", label: "联系" },
];

const METRICS = [
  { num: "20 年", label: "快消/医疗健康经验" },
  { num: "5 家", label: "头部跨国企业" },
  { num: "2 年", label: "创业合伙人" },
  { num: "40+", label: "创新项目经验" },
  { num: "20+", label: "AI 落地经验" },
  { num: "持续", label: "商业模式创新探索" },
];

const PRODUCTS = [
  {
    no: "01",
    tag: "AI EDUCATION",
    title: "AI百宝箱",
    subtitle: "AI 与 Vibe Coding 知识库",
    desc: "82 个高频专业词、3 份实战指南与可复制话术，把 AI 黑话翻译成人话，打开就能用。",
    tags: ["名词解码", "实战锦囊", "选对工具"],
    audience: "服务对象：AI / Vibe Coding 学习者",
    outcome: "82 词 + 3 指南 + 可复制话术库",
    status: "已上线",
    icon: <ToolboxDoodle className="w-24 h-24 text-accent" />,
    href: "https://aiemma2026-dotcom.github.io/ai-treasure-box/",
    featured: false,
  },
  {
    no: "02",
    tag: "COMMERCIAL INTELLIGENCE",
    title: "AI Pharma Market Studio",
    subtitle: "AI 医药市场分析平台",
    desc: "连接疾病领域知识、市场测算模型与商业策略洞察，帮助市场团队快速完成分析与判断。",
    tags: ["疾病洞察", "市场测算", "策略推演"],
    audience: "服务对象：医药市场团队",
    outcome: "从数据到策略洞察的分析助手",
    status: "原型探索",
    icon: <PharmaChartDoodle className="w-24 h-24 text-accent" />,
    href: "https://aiemma2026-dotcom.github.io/pharma-insight-studio/prototype/pharma-market-sizing.html",
    featured: true,
  },
  {
    no: "03",
    tag: "CLINICAL AUGMENTATION",
    title: "AI Clinical Workflow Assistant",
    subtitle: "AI 医疗工作流助手",
    desc: "探索语音识别、大语言模型与知识库技术，帮助医生减少信息整理负担，提升沟通效率。",
    tags: ["语音转写", "信息总结", "人机协作"],
    audience: "服务对象：临床医生",
    outcome: "减少信息整理负担，提升沟通效率",
    status: "原型探索",
    icon: <ClinicalPulseDoodle className="w-24 h-24 text-accent" />,
    href: "#",
    featured: false,
  },
];

const PRINCIPLES = [
  {
    no: "01",
    title: "从现场开始",
    desc: "先理解问题发生在哪里，再决定技术如何介入。",
    icon: <FieldStartDoodle className="w-14 h-14 text-accent" />,
  },
  {
    no: "02",
    title: "让知识流动",
    desc: "连接行业知识、业务模型、数据逻辑与 AI。",
    icon: <KnowledgeFlowDoodle className="w-14 h-14 text-accent" />,
  },
  {
    no: "03",
    title: "用原型回答",
    desc: "把观点变成可看见、可体验、可持续迭代的产品原型。",
    icon: <PrototypeDoodle className="w-14 h-14 text-accent" />,
  },
];

export default function HomePage() {
  return (
    <div>
      {/* ===== 顶栏 ===== */}
      <header className="site-header">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 h-16 flex items-center gap-6">
          <a href="#top" className="font-mono font-bold text-base tracking-widest text-accent shrink-0">
            EMMA AI LAB
          </a>
          <nav className="hidden md:flex items-center gap-1 ml-auto">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-1.5 rounded-lg text-sm text-ink-soft hover:text-accent hover:bg-white/5 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* ===== Hero ===== */}
      <section id="top" className="tech-glow relative overflow-hidden">
        <div className="absolute inset-0 tech-grid" aria-hidden="true" />
        {/* 标题后方蓝色纵深光 */}
        <div
          className="absolute -top-24 left-1/4 w-[560px] h-[420px] rounded-full blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(56,189,248,0.20), transparent 65%)" }}
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 pt-20 pb-16 sm:pt-28 sm:pb-24 grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
          <div>
            <span className="status-tag">HEALTHCARE / AI / INNOVATION</span>
            <h1 className="mt-8 font-display font-black tracking-tight text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.16] text-ink">
              二十年行业经验，
              <br />
              一座面向 AI 的
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-cyan-400 to-blue-500">
                个人实验室。
              </span>
            </h1>
            <p className="mt-8 text-base sm:text-lg text-ink-soft leading-relaxed max-w-xl">
              专注于医药健康商业经验 × AI 产品创新，
              探索行业知识、真实业务问题与 AI 技术的新连接。
            </p>
            <div className="mt-10">
              <a href="#contact" className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 text-sm">
                联系 Emma
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M12 5v14M6 13l6 6 6-6" />
                </svg>
              </a>
            </div>
          </div>
          {/* 右侧：实验室数据面板（平衡左右视觉） */}
          <div className="hidden lg:block relative">
            <div
              className="absolute -inset-8 rounded-full blur-3xl pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(56,189,248,0.16), transparent 65%)" }}
              aria-hidden="true"
            />
            <div className="relative card-glass p-8">
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-[10px] tracking-[0.2em] text-accent">LAB / PROFILE</span>
                <span className="w-2 h-2 rounded-full bg-success" />
              </div>
              <HeroDoodle className="w-[300px] h-[225px] text-accent mx-auto" />
              <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5">
                {METRICS.map((m) => (
                  <div key={m.label} className="border-t border-line pt-3">
                    <p className="font-mono font-black text-2xl text-accent leading-none">{m.num}</p>
                    <p className="text-xs text-ink-soft mt-2 leading-snug">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 02 EXPERIMENTS 作品集 ===== */}
      <section id="works" className="tech-glow-2 relative overflow-hidden scroll-mt-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-24 relative z-10">
          <div className="flex items-center gap-3 mb-2">
            <span className="section-no">01 / SELECTED EXPERIMENTS</span>
            <span className="w-8 h-px bg-line-strong" />
          </div>
          <h2 className="mt-6 font-display font-bold text-2xl sm:text-3xl text-ink">创新作品集</h2>

          <div className="mt-10 space-y-6">
            {PRODUCTS.map((p) => (
              <div
                key={p.no}
                className={`card card-hover p-8 sm:p-10 grid lg:grid-cols-[1fr_auto] gap-8 items-center overflow-hidden relative group ${
                  p.featured ? "border-accent/60" : ""
                }`}
              >
                <div className="relative z-10">
                  {p.featured && (
                    <span className="inline-flex items-center gap-1 mb-3 font-mono text-[10px] tracking-widest text-accent-deep">
                      ★ 代表作
                    </span>
                  )}
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-accent-deep">PROJECT {p.no}</span>
                    <span className="w-6 h-px bg-line-strong" />
                    <span className="font-mono text-[10px] tracking-widest text-ink-soft-dark">{p.tag}</span>
                    <span
                      className={`ml-auto px-2 py-0.5 rounded-full border text-[10px] font-mono ${
                        p.status === "已上线"
                          ? "border-success/40 bg-success/10 text-success-strong"
                          : "border-line bg-surface-soft text-ink-soft-dark"
                      }`}
                    >
                      {p.status}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display font-bold text-xl sm:text-2xl text-ink-dark group-hover:text-accent-deep transition-colors">
                    {p.title}
                  </h3>
                  <p className="mt-1 font-mono text-sm text-accent-deep">{p.subtitle}</p>
                  <p className="mt-4 text-ink-soft-dark leading-relaxed max-w-xl">{p.desc}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="card-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 text-xs text-ink-soft-dark font-mono">
                    {p.audience} · {p.outcome}
                  </p>
                  <a
                    href={p.href}
                    target={p.href.startsWith("http") ? "_blank" : undefined}
                    rel={p.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-1.5 mt-6 text-sm font-semibold text-accent-deep hover:underline"
                  >
                    打开项目档案
                    <svg viewBox="0 0 24 24" className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M7 17L17 7M9 7h8v8" />
                    </svg>
                  </a>
                </div>
                <div className="relative z-10 hidden sm:flex justify-center p-4">
                  <div className="doodle-draw">{p.icon}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 03 PRINCIPLE 方法论 ===== */}
      <section id="principle" className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-24 scroll-mt-16">
        <div className="flex items-center gap-3 mb-2">
          <span className="section-no">02 / OPERATING PRINCIPLE</span>
          <span className="w-8 h-px bg-line-strong" />
        </div>
        <h2 className="mt-6 font-display font-bold text-2xl sm:text-3xl text-ink">
          把 AI 放回<span className="text-accent">真实世界。</span>
        </h2>
        <div className="mt-10 grid sm:grid-cols-3 gap-4">
          {PRINCIPLES.map((pr) => (
            <div key={pr.no} className="card card-hover p-6 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-accent-deep">{pr.no}</span>
                <div className="doodle-draw">{pr.icon}</div>
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-ink-dark">{pr.title}</h3>
                <p className="text-sm text-ink-soft-dark mt-2 leading-relaxed">{pr.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== 04 CONTACT 联系 ===== */}
      <section id="contact" className="tech-glow-2 relative overflow-hidden scroll-mt-16 border-t border-line">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-28 relative z-10">
          <div className="flex items-center gap-3 mb-2 justify-center">
            <span className="section-no">03 / OPEN CHANNEL</span>
            <span className="w-8 h-px bg-line-strong" />
          </div>
          <h2 className="mt-8 font-display font-black text-3xl sm:text-4xl text-center text-ink leading-snug">
            为下一个医疗健康新可能，
            <br />
            保持连接。
          </h2>
          <p className="mt-8 text-center text-ink-soft leading-relaxed text-base sm:text-lg">
            如果你也在探索 AI、医药商业或医疗服务的未来，
            <br />
            欢迎开始一段对话。
          </p>
          <div className="mt-12 max-w-md mx-auto card p-8 sm:p-10">
            <div className="space-y-5 font-mono text-sm">
              <div className="flex items-center gap-3">
                <span className="text-ink-soft-dark shrink-0">Email</span>
                <span className="w-8 h-px bg-line-strong shrink-0" />
                <a href="mailto:zxlan628@foxmail.com" className="text-accent-deep hover:underline break-all">
                  zxlan628@foxmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-ink-soft-dark shrink-0">GitHub</span>
                <span className="w-8 h-px bg-line-strong shrink-0" />
                <a href="https://github.com/aiemma2026-dotcom" target="_blank" rel="noopener noreferrer" className="text-accent-deep hover:underline">
                  aiemma2026-dotcom
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 页脚 ===== */}
      <footer className="border-t border-line">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 flex items-center justify-between">
          <p className="font-mono text-sm tracking-widest text-accent">EMMA AI LAB</p>
          <p className="text-xs text-ink-soft font-mono">[ SYS.ONLINE ] HEALTHCARE × AI</p>
        </div>
      </footer>
    </div>
  );
}
