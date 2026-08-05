# EMMA AI LAB 个人网站部署报告

> 生成时间：2026-08-05  
> 执行环境：Windows 10 / Node.js 24.11.1 / npm 11 / Next.js 16.3.0

---

## 1. 项目状态检查

| 检查项 | 结果 |
|--------|------|
| 项目路径 | `D:\Long-term Career\2. AI\00260802 一堂Vibe Coding训战营\造物笔记网站系统\emma-ai-lab` |
| `package.json` | ✅ 存在，依赖 `next@16.3.0`、`react@19.2.8`、`react-dom@19.2.8` |
| `node_modules` | ✅ 已安装 |
| 纯静态输出配置 | ⚠️ 原 `next.config.ts` 未开启 `output: 'export'`，已补充（见下方变更） |
| 生产构建 | ✅ `npm run build` 通过 |

### 本次为部署做的唯一配置变更

仅修改了 `next.config.ts`，未改动任何页面、组件或样式：

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
};

export default nextConfig;
```

构建产物已输出到 `dist/` 目录，包含 `index.html` 及 `_next/` 静态资源。

### 构建摘要

```text
▲ Next.js 16.3.0 (Turbopack)
✓ Compiled successfully
✓ Generating static pages using 5 workers (4/4)
Route (app)
┌ ○ /
└ ○ /_not-found
○ (Static) prerendered as static content
Process exited with code 0
```

---

## 2. 部署方案与执行结果

### 优先级 a：Vercel CLI（首选）

**执行命令：**

```powershell
cd "D:\Long-term Career\2. AI\00260802 一堂Vibe Coding训战营\造物笔记网站系统\emma-ai-lab"
npx vercel --prod
```

**结果：** ❌ 部署未执行  
**阻塞点：** 本机未登录 Vercel 账号。

```text
Error: No existing credentials found. Please run `vercel login` or pass "--token"
```

Vercel CLI 已可用（版本 `58.5.1`），但缺少认证凭据；非交互式环境无法完成 `vercel login` 的浏览器授权流程。

---

### 优先级 b：Netlify CLI

**结果：** ❌ 未执行  
**阻塞点：**

1. `netlify` / `ntl` 未全局安装。
2. `npx netlify-cli` 安装包体积较大，在当前执行环境中因超时/资源限制被中断两次。
3. 即使安装成功，仍需先执行 `ntl login` 进行账号授权，本机同样未登录。

---

### 优先级 c：GitHub Pages

**结果：** ❌ 未执行  
**阻塞点：**

1. 当前 Git 仓库没有配置 remote：

   ```powershell
   git remote -v
   # （无输出）
   ```

2. 未安装 GitHub CLI (`gh`)。
3. 需要先在 GitHub 创建仓库、推送代码，并配置 Pages（分支或 GitHub Actions），这些步骤均需要 GitHub 账号/Token。

---

## 3. 当前结论

- **本地构建已验证通过**，项目已具备上线条件。
- **公网部署尚未完成**，所有方案均卡在「需要用户自有账号及授权」这一步。
- **访问地址：** 暂无。

---

## 4. 推荐后续步骤（任选其一）

### 方案 A：Vercel CLI 部署（推荐，最简）

1. 注册/登录 Vercel 账号：<https://vercel.com/signup>
2. 在本地终端执行：

   ```powershell
   cd "D:\Long-term Career\2. AI\00260802 一堂Vibe Coding训战营\造物笔记网站系统\emma-ai-lab"
   npx vercel login
   # 按提示完成浏览器授权
   npx vercel --prod
   ```

3. 部署成功后，Vercel 会返回形如 `https://emma-ai-lab-xxx.vercel.app` 的访问地址。

### 方案 B：Netlify CLI 部署

1. 注册/登录 Netlify 账号：<https://app.netlify.com/signup>
2. 在本地终端执行：

   ```powershell
   cd "D:\Long-term Career\2. AI\00260802 一堂Vibe Coding训战营\造物笔记网站系统\emma-ai-lab"
   npm install -g netlify-cli
   ntl login
   ntl deploy --prod --dir=dist
   ```

3. 部署成功后，Netlify 会返回形如 `https://xxx.netlify.app` 的访问地址。

### 方案 C：GitHub Pages 部署

1. 在 GitHub 创建仓库（例如 `yourname/emma-ai-lab`）。
2. 配置 `next.config.ts` 的 `basePath` 为仓库名（如 `/emma-ai-lab`），否则静态资源路径会 404。
3. 提交并推送代码：

   ```powershell
   git remote add origin https://github.com/yourname/emma-ai-lab.git
   git add .
   git commit -m "prepare for gh-pages"
   git push -u origin main
   ```

4. 使用 GitHub Actions 自动构建并部署到 `gh-pages` 分支，或在仓库设置中启用 Pages 并指向该分支。
5. 访问地址：`https://yourname.github.io/emma-ai-lab`

---

## 5. 环境要求

- Node.js ≥ 18（当前使用 24.11.1）
- npm ≥ 9（当前使用 11）
- 网络可访问 npm registry 与部署平台
- 对应平台账号及授权（Vercel / Netlify / GitHub）

---

## 6. 回滚方式

### 代码配置回滚

`next.config.ts` 的原始内容为：

```ts
const nextConfig: NextConfig = {
  /* config options here */
};
```

如需撤销本次为静态导出做的变更，恢复上述内容即可。

### 已部署版本回滚

- **Vercel：** 在 Dashboard 进入项目 → Deployments → 选择旧版本 → "Promote to Production"。
- **Netlify：** 在 Dashboard 进入项目 → Deploys → 选择旧版本 → "Publish deploy"。
- **GitHub Pages：** 回退 `gh-pages` 分支到上一提交，或重新运行旧的 GitHub Actions 工作流。

---

## 7. 阻塞点汇总

| 平台 | 阻塞原因 |
|------|----------|
| Vercel | 本机未登录 Vercel CLI，缺少 `vercel login` 或 `VERCEL_TOKEN` |
| Netlify | CLI 未安装且未登录，安装过程超时 |
| GitHub Pages | 无 Git remote、未安装 `gh` CLI、缺少 GitHub 授权 |

> **下一步需要用户提供的输入：** Vercel / Netlify / GitHub 账号及完成至少一次 CLI 登录授权。
