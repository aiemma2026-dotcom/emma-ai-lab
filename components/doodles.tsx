import React from "react";

/**
 * EMMA AI LAB · 简笔画母题组件库
 * 与 AI百宝箱 同一视觉规范：2px 描边 / 圆角端点 / currentColor / 工程线稿
 */

type DoodleProps = {
  className?: string;
  stroke?: string;
  accent?: string;
};

const D = ({ className, children }: { className?: string; children: React.ReactNode }) => (
  <svg
    viewBox="0 0 96 96"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {children}
  </svg>
);

/** 行星 + 轨道 + 数据节点（Hero 主视觉之一） */
export function PlanetDoodle({ className, stroke = "currentColor", accent = "currentColor" }: DoodleProps) {
  return (
    <D className={className}>
      <circle className="doodle" stroke={stroke} cx="48" cy="52" r="18" />
      <path className="doodle" stroke={stroke} d="M20 52h56" />
      <path className="doodle" stroke={accent} d="M26 34c8-6 36-6 44 0M26 70c8 6 36 6 44 0" />
      <circle className="doodle" stroke={accent} cx="70" cy="40" r="3" />
      <circle className="doodle" stroke={accent} cx="30" cy="30" r="2.5" />
      <circle className="doodle" stroke={accent} cx="76" cy="60" r="2.5" />
    </D>
  );
}

/** 医疗数据网络：分子/十字节点 + 连线（Hero 主视觉之二） */
export function MedNetworkDoodle({ className, stroke = "currentColor", accent = "currentColor" }: DoodleProps) {
  return (
    <D className={className}>
      <path className="doodle" stroke={stroke} d="M20 30h22v22H20zM54 30h22v22H54zM20 62h22v22H20zM54 62h22v22H54z" />
      <path className="doodle" stroke={accent} d="M42 41h12M31 52v10M65 52v10M42 73h12" />
      <circle className="doodle" stroke={accent} cx="31" cy="41" r="3" />
      <circle className="doodle" stroke={accent} cx="65" cy="41" r="3" />
      <circle className="doodle" stroke={accent} cx="31" cy="73" r="3" />
      <circle className="doodle" stroke={accent} cx="65" cy="73" r="3" />
    </D>
  );
}

/** 医药市场分析：上升折线 + 药丸/分子（产品1） */
export function PharmaChartDoodle({ className, stroke = "currentColor", accent = "currentColor" }: DoodleProps) {
  return (
    <D className={className}>
      <path className="doodle" stroke={stroke} d="M14 78h68M14 78V18" />
      <path className="doodle" stroke={accent} d="M20 66l16-14 12 8 20-26" />
      <circle className="doodle" stroke={accent} cx="36" cy="52" r="3" />
      <circle className="doodle" stroke={accent} cx="48" cy="60" r="3" />
      <circle className="doodle" stroke={accent} cx="68" cy="34" r="3" />
      <path className="doodle" stroke={stroke} d="M58 30a8 8 0 0 1 8-8 8 8 0 0 1 8 8 8 8 0 0 1-8 8 8 8 0 0 1-8-8Z" />
      <path className="doodle" stroke={stroke} d="M66 22v16" />
    </D>
  );
}

/** 临床工作流：心电图 + 语音气泡（产品2） */
export function ClinicalPulseDoodle({ className, stroke = "currentColor", accent = "currentColor" }: DoodleProps) {
  return (
    <D className={className}>
      <path className="doodle" stroke={stroke} d="M14 30h12l6-10 8 22 8-14 6 10h28" />
      <circle className="doodle" stroke={accent} cx="22" cy="66" r="4" />
      <path className="doodle" stroke={stroke} d="M22 70v12M12 76h20" />
      <path className="doodle" stroke={accent} d="M62 62h20a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4h-8l-8 6v-6h-4a4 4 0 0 1-4-4v-8a4 4 0 0 1 4-4Z" />
      <path className="doodle" stroke={accent} d="M68 68h12M68 74h8" />
    </D>
  );
}

/** 工具箱（AI百宝箱，产品3） */
export function ToolboxDoodle({ className, stroke = "currentColor", accent = "currentColor" }: DoodleProps) {
  return (
    <D className={className}>
      <path className="doodle" stroke={stroke} d="M30 30h36a6 6 0 0 1 6 6v26a6 6 0 0 1-6 6H30a6 6 0 0 1-6-6V36a6 6 0 0 1 6-6Z" />
      <path className="doodle" stroke={stroke} d="M38 30v-6a6 6 0 0 1 6-6h8a6 6 0 0 1 6 6v6" />
      <path className="doodle" stroke={stroke} d="M26 48h44" />
      <path className="doodle" stroke={accent} d="M40 56l5 5 10-11" />
    </D>
  );
}

/** 从现场开始：放大镜 + 定位点（方法论1） */
export function FieldStartDoodle({ className, stroke = "currentColor", accent = "currentColor" }: DoodleProps) {
  return (
    <D className={className}>
      <circle className="doodle" stroke={stroke} cx="42" cy="42" r="22" />
      <path className="doodle" stroke={stroke} d="M58 58l16 16" />
      <path className="doodle" stroke={accent} d="M48 42l12 4-14 6 2-10Z" />
    </D>
  );
}

/** 让知识流动：节点网络（方法论2） */
export function KnowledgeFlowDoodle({ className, stroke = "currentColor", accent = "currentColor" }: DoodleProps) {
  return (
    <D className={className}>
      <circle className="doodle" stroke={accent} cx="22" cy="26" r="7" />
      <circle className="doodle" stroke={accent} cx="74" cy="26" r="7" />
      <circle className="doodle" stroke={accent} cx="48" cy="70" r="7" />
      <path className="doodle" stroke={stroke} d="M28 30l40-4M29 32l14 34M67 32l-14 34" />
      <path className="doodle" stroke={accent} d="M22 33v-14M74 33v-14M48 77v-14" />
    </D>
  );
}

/** 用原型回答：立方体原型（方法论3） */
export function PrototypeDoodle({ className, stroke = "currentColor", accent = "currentColor" }: DoodleProps) {
  return (
    <D className={className}>
      <path className="doodle" stroke={stroke} d="M48 16l28 16v32L48 80 20 64V32L48 16Z" />
      <path className="doodle" stroke={stroke} d="M20 32l28 16 28-16M48 48v32" />
      <path className="doodle" stroke={accent} d="M38 48l6 6 12-14" />
    </D>
  );
}

/** Hero 组合插画：生命之树 × AI 神经网络（320×240） */
export function HeroDoodle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 240"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Sparse star field keeps the silhouette airy on the dark hero card. */}
      <g fill="#94a9c6" opacity="0.78">
        <circle cx="28" cy="41" r="1.1" />
        <circle cx="48" cy="118" r="0.9" />
        <circle cx="38" cy="184" r="1.2" />
        <circle cx="74" cy="27" r="0.8" />
        <circle cx="104" cy="18" r="1" />
        <circle cx="216" cy="20" r="0.9" />
        <circle cx="261" cy="36" r="1.1" />
        <circle cx="286" cy="91" r="0.8" />
        <circle cx="278" cy="169" r="1.1" />
        <circle cx="249" cy="191" r="0.8" />
        <circle cx="91" cy="204" r="0.8" />
        <circle cx="214" cy="226" r="1" />
      </g>

      {/* Faint, disconnected signals add depth behind the primary tree. */}
      <g
        stroke="#38bdf8"
        strokeWidth="0.85"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.28"
      >
        <path d="M30 82h20l10-10h17" />
        <path d="M43 148h18l9-9h18" />
        <path d="M243 69h20l9 9h17" />
        <path d="M235 153h20l10-10h19" />
        <path d="M121 13v9l7 7" />
        <path d="M193 12v10l-7 7" />
      </g>

      {/* Secondary circuit branches: angular, layered and intentionally open. */}
      <g
        stroke="#38bdf8"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.82"
      >
        <path d="M148 171l-23-23h-20l-13-13H65" />
        <path d="M150 158l-27-27v-15l-17-17H84L72 87H52" />
        <path d="M151 146l-21-21h-20L98 113V91L86 79" />
        <path d="M143 112h-18l-12 12H91l-11-11H66" />
        <path d="M126 95l-18-18V58L97 47H81" />
        <path d="M137 82l-16-16V49l-11-11H96" />
        <path d="M116 102H99L87 90V70L74 57H59" />
        <path d="M172 171l23-23h20l13-13h28" />
        <path d="M170 158l27-27v-14l17-17h21l13-13h20" />
        <path d="M169 146l21-21h20l12-12V92l11-11" />
        <path d="M177 112h18l12 12h22l11-11h15" />
        <path d="M187 87l17-17V52l12-12h15" />
        <path d="M198 100l18-19V63l13-13h18" />
        <path d="M204 102h17l12-12V71l13-13h15" />
        <path d="M160 83l-13-14V51l-10-10V27" />
        <path d="M160 83l14-15V49l12-12" />
      </g>

      {/* The five-line trunk grows directly into the canopy like a circuit bus. */}
      <g
        stroke="#0e9be4"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M150 197v-43l-15-15v-18l-19-19V82L98 64H79" />
        <path d="M155 199v-49l-12-12v-27l-17-17V71l-16-17V42" />
        <path d="M159 200v-55l-8-8V96l-14-14V53l-9-10V28" />
        <path d="M163 200v-60l11-12V99l13-13V57l12-12V30" />
        <path d="M168 198v-47l12-11v-24l17-17V79l19-20V47" />
      </g>

      {/* A few brighter signal routes guide the eye through the crown. */}
      <g
        stroke="#7dd3fc"
        strokeWidth="1.45"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.95"
      >
        <path d="M155 150l-19-19h-18l-13-13H86" />
        <path d="M159 121l-13-14V89l-15-15V57" />
        <path d="M163 140l18-19h18l13-13h20" />
        <path d="M163 105l15-16V70l13-13h17" />
        <path d="M163 63V25" />
      </g>

      {/* Circuit roots mirror the crown and anchor the tree without a heavy base. */}
      <g
        stroke="#38bdf8"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.78"
      >
        <path d="M150 192l-14 14H99l-11 11H48" />
        <path d="M154 196l-14 15h-25l-12 12H72" />
        <path d="M158 198l-10 17-14 10h-29" />
        <path d="M162 199l8 15h24l12 12h34" />
        <path d="M166 196l14 13h35l13 10h47" />
        <path d="M170 192l18 12h32l11-9h37" />
        <path d="M156 203v19l-7 7" />
        <path d="M164 203v20l8 8" />
      </g>

      {/* Neural terminals: mixed open and live nodes keep the network organic. */}
      <g stroke="#7dd3fc" strokeWidth="1.15">
        <circle cx="52" cy="87" r="3.2" />
        <circle cx="65" cy="135" r="2.6" />
        <circle cx="59" cy="57" r="2.8" />
        <circle cx="81" cy="47" r="2.4" />
        <circle cx="86" cy="79" r="2.7" />
        <circle cx="96" cy="38" r="2.5" />
        <circle cx="110" cy="42" r="2.8" />
        <circle cx="128" cy="28" r="3.1" />
        <circle cx="137" cy="27" r="2.5" />
        <circle cx="163" cy="25" r="3.8" />
        <circle cx="186" cy="37" r="2.6" />
        <circle cx="199" cy="30" r="3" />
        <circle cx="216" cy="47" r="2.5" />
        <circle cx="231" cy="40" r="3" />
        <circle cx="247" cy="50" r="2.7" />
        <circle cx="261" cy="58" r="2.4" />
        <circle cx="268" cy="87" r="3.1" />
        <circle cx="256" cy="135" r="2.7" />
        <circle cx="233" cy="81" r="2.4" />
        <circle cx="48" cy="217" r="2.5" />
        <circle cx="72" cy="223" r="2.5" />
        <circle cx="105" cy="225" r="2.2" />
        <circle cx="240" cy="226" r="2.5" />
        <circle cx="275" cy="219" r="2.5" />
        <circle cx="268" cy="195" r="2.2" />
      </g>
      <g fill="#7dd3fc">
        <circle cx="72" cy="87" r="1.8" />
        <circle cx="66" cy="113" r="1.7" />
        <circle cx="57" cy="118" r="1.5" />
        <circle cx="86" cy="118" r="1.8" />
        <circle cx="131" cy="57" r="1.8" />
        <circle cx="191" cy="57" r="1.8" />
        <circle cx="208" cy="57" r="1.7" />
        <circle cx="232" cy="108" r="1.8" />
        <circle cx="255" cy="113" r="1.7" />
        <circle cx="232" cy="81" r="1.6" />
        <circle cx="149" cy="229" r="1.7" />
        <circle cx="172" cy="231" r="1.7" />
      </g>
    </svg>
  );
}
