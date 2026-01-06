"use client"

import * as React from "react"

export type Locale = "zh" | "en"

type I18nContextType = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
}

const translations: Record<Locale, Record<string, string>> = {
  zh: {
    "nav.home": "首页",
    "nav.cases": "案例展示",
    "nav.knowledge": "知识库",
    "nav.tools": "常用工具",
    "nav.templates": "模板下载",
    "nav.about": "关于",
    "hero.title": "开发者体验中心计划",
    "hero.subtitle": "Developer Experience Center Program",
    "hero.description":
      "建立统一、系统化、可持续改进的开发者体验平台，提升研发生产力、交付效率、系统质量与工程师满意度",
    "hero.getStarted": "开始使用",
    "hero.viewDocs": "查看文档",
    "hero.contact": "我要咨询",
    "section.concepts": "核心概念",
    "section.concepts.desc": "理解开发者体验的完整框架：从理念到组织到社区",
    "section.devex.intro": "什么是开发者体验？",
    "section.devex.intro.desc":
      "开发者体验（Developer Experience, DX）是开发者在整个软件开发生命周期中与工具、平台、流程和团队互动时的整体感受和效率。优秀的开发者体验能够消除摩擦、提升生产力、激发创新。",
    "devex.pillars.title": "开发者体验的三大支柱",
    "devex.pillar.feedback.title": "反馈循环",
    "devex.pillar.feedback.desc": "快速、清晰的反馈机制让开发者能够及时发现和修正问题，缩短从编码到验证的时间",
    "devex.pillar.cognitive.title": "认知负荷",
    "devex.pillar.cognitive.desc": "通过简化工具、统一流程、清晰文档降低开发者的心智负担，让他们专注于创造价值",
    "devex.pillar.flow.title": "流畅状态",
    "devex.pillar.flow.desc": "消除干扰和阻碍，让开发者能够长时间保持专注和高效的工作状态",
    "devex.value.title": "开发者体验的核心价值",
    "devex.value.item1.title": "提升研发效率",
    "devex.value.item1.desc": "优化工具链和流程，显著提高开发者的工作效率和代码质量",
    "devex.value.item2.title": "加速产品交付",
    "devex.value.item2.desc": "缩短从想法到上线的时间，快速响应市场需求和用户反馈",
    "devex.value.item3.title": "提高工程师满意度",
    "devex.value.item3.desc": "创造愉悦的工作体验，增强团队凝聚力，降低人才流失率",
    "devex.value.item4.title": "促进技术创新",
    "devex.value.item4.desc": "释放开发者的创造力，鼓励实验和创新，推动技术演进",
    "concept.dx.title": "DX / DevEx",
    "concept.dx.desc":
      "开发者体验（Developer Experience）是指开发者在使用工具、平台、API和服务时的整体感受和效率。良好的DX能显著提升生产力、降低学习成本、减少摩擦，最终提高工程师满意度和创新速度。",
    "concept.dx.subtypes.label": "不同范围划分",
    "concept.dx.subtypes.internal": "内部开发者体验",
    "concept.dx.subtypes.ecosystem": "开放生态开发者体验",
    "concept.dx.subtypes.opensource": "开源开发者体验",
    "concept.dx.subtypes.platform": "平台开发者体验",
    "concept.dxc.title": "DXC",
    "concept.dxc.desc":
      "开发者体验中心（Developer Experience Center）是一个统一的平台和组织，负责构建、维护和优化组织内的开发者工具链、流程和基础设施。DXC通过提供标准化模板、自动化工具和最佳实践，帮助开发团队提高效率和质量。",
    "concept.dxcp.title": "DXCP",
    "concept.dxcp.desc":
      "开发者体验中心计划（Developer Experience Center Program）是一个系统化的倡议和社区，旨在推广DXC理念、分享最佳实践、提供实施指南和建立行业标准。DXCP帮助组织从零开始建立自己的DXC，并持续改进开发者体验。",
    "section.features": "核心能力",
    "section.cases": "成功案例",
    "section.knowledge": "知识库",
    "section.templates": "下载模板",
    "section.books": "DevEx 图书推荐",
    "section.books.desc": "精选的开发者体验相关书籍，帮助您深入理解和实践DX理念",
    "books.item1.title": "现代开发者体验",
    "books.item1.author": "作者：Steve Buchanan",
    "books.item1.desc": "探索如何通过减少复杂性、简化工作流程和营造支持性环境来改善开发者体验",
    "books.item2.title": "开发者体验释放",
    "books.item2.author": "作者：K. Rain Leander",
    "books.item2.desc": "创建高效开发者环境的艺术，深入探讨DX对软件开发过程的影响",
    "books.item3.title": "开发者体验",
    "books.item3.author": "作者：Addy Osmani",
    "books.item3.desc": "优化开发者完成工作的便捷性和有效性，创建让开发者高效、满意和赋能的工具与服务",
    "books.item4.title": "团队拓扑",
    "books.item4.author": "作者：Matthew Skelton & Manuel Pais",
    "books.item4.desc": "为快速流动而组织业务和技术团队，提供组织设计和团队交互的实用模型",
    "feature.portal.title": "开发者门户",
    "feature.portal.desc": "统一的服务目录、组件模板、API文档与最佳实践",
    "feature.cicd.title": "CI/CD 自动化",
    "feature.cicd.desc": "模板化流水线、内置质量守则、自动安全扫描",
    "feature.template.title": "服务模板库",
    "feature.template.desc": "标准微服务模板、内置监控、日志与部署配置",
    "feature.onboarding.title": "快速上手",
    "feature.onboarding.desc": "新员工极速上手包，一键开发环境配置",
    "feature.observability.title": "可观测性",
    "feature.observability.desc": "标准日志、指标、追踪模板及统一告警",
    "feature.devenv.title": "开发环境",
    "feature.devenv.desc": "云端可复现开发环境，即服务化管理",
    "cases.viewMode.grid": "宫格视图",
    "cases.viewMode.list": "列表视图",
    "cases.filter.all": "全部",
    "cases.submitCase": "提交案例",
    "knowledge.search": "搜索知识库...",
    "knowledge.categories": "分类",
    "knowledge.cat.basics": "基础知识",
    "knowledge.cat.frameworks": "框架方法",
    "knowledge.cat.metrics": "度量标准",
    "knowledge.cat.practices": "最佳实践",
    "knowledge.cat.sharing": "大厂分享",
    "templates.proposal": "DXC 项目提案",
    "templates.proposal.desc": "包含项目概述、背景、目标、实施计划等完整提案模板",
    "templates.pilot": "DXC 试点计划",
    "templates.pilot.desc": "12周试点交付计划，包含周级里程碑和关键交付物",
    "templates.download": "下载模板",
    "footer.github": "GitHub",
    "footer.community": "社区",
    "footer.docs": "文档",
    "footer.contact": "联系我们",
    "footer.copyright": "© 2025 DXCP. 保留所有权利。",
    "tools.title": "常用工具与度量框架",
    "tools.description": "探索业界领先的开发者体验度量框架和自测工具，帮助您评估和改进团队的开发效能",
    "tools.tryIt": "立即体验",
    "tools.keyMetrics": "核心指标",
    "tools.references": "参考资料",
    "tools.dora.title": "DORA 指标",
    "tools.dora.subtitle": "DevOps 研究与评估",
    "tools.dora.desc":
      "DORA（DevOps Research and Assessment）是由 Google Cloud 团队开发的软件交付性能度量框架。通过四个关键指标衡量团队的软件交付能力，帮助识别改进机会并推动持续改进。DORA Quick Check 是一个免费的在线自测工具，可以在一分钟内评估您团队的表现并与行业基准进行比较。",
    "tools.dora.metric1": "部署频率 (Deployment Frequency)",
    "tools.dora.metric2": "变更前置时间 (Lead Time for Changes)",
    "tools.dora.metric3": "变更失败率 (Change Failure Rate)",
    "tools.dora.metric4": "服务恢复时间 (MTTR)",
    "tools.space.title": "SPACE 框架",
    "tools.space.subtitle": "全面的开发者生产力度量",
    "tools.space.desc":
      "SPACE 框架由 GitHub、Microsoft 和维多利亚大学的研究人员共同开发，提供五个维度来全面评估开发者生产力。与单一指标不同，SPACE 提供了更广泛的视角来理解团队内部发生的情况，帮助团队设定更好的目标、发现工作流程瓶颈并提升生产力，同时不忽视软件开发的人性化方面。",
    "tools.space.metric1": "满意度与幸福感 (Satisfaction)",
    "tools.space.metric2": "绩效表现 (Performance)",
    "tools.space.metric3": "活动水平 (Activity)",
    "tools.space.metric4": "沟通与协作 (Communication)",
    "tools.space.metric5": "效率与流畅 (Efficiency)",
    "tools.dvi.title": "DVI 框架",
    "tools.dvi.subtitle": "开发者速度指数",
    "tools.dvi.desc":
      "开发者速度指数（Developer Velocity Index）由 McKinsey 提出，是一种将企业的技术和实践与同行进行对标的调查方法，帮助发现改进领域。DVI 关注内部/外部循环时间分配、贡献分析、人才能力评分等指标，为组织提供关于开发者生产力的深入洞察和改进建议。",
    "tools.dvi.metric1": "内外循环时间分配",
    "tools.dvi.metric2": "贡献分析",
    "tools.dvi.metric3": "人才能力评分",
    "tools.dvi.metric4": "技术实践对标",
    "tools.dxcore.title": "DX Core 4 指标",
    "tools.dxcore.subtitle": "核心开发者体验度量",
    "tools.dxcore.desc":
      "DX Core 4 是由 DX（原 Gergely Orosz 的开发者体验公司）提出的核心指标框架，专注于衡量开发者体验的关键维度。该框架强调反馈循环速度、认知负荷和心流状态三个核心因素，通过定性和定量指标相结合的方式，帮助组织识别和消除开发者体验中的摩擦点。",
    "tools.dxcore.metric1": "反馈循环速度 (Speed)",
    "tools.dxcore.metric2": "认知负荷 (Cognitive Load)",
    "tools.dxcore.metric3": "心流状态 (Flow State)",
    "tools.comparison.title": "框架对比",
    "tools.comparison.framework": "框架",
    "tools.comparison.focus": "关注重点",
    "tools.comparison.bestFor": "最适用场景",
    "tools.comparison.metrics": "指标数量",
    "tools.comparison.dora.focus": "DevOps 交付性能",
    "tools.comparison.dora.bestFor": "CI/CD 流水线优化",
    "tools.comparison.dora.metrics": "4 个核心指标",
    "tools.comparison.space.focus": "团队生产力与幸福感",
    "tools.comparison.space.bestFor": "团队效能评估",
    "tools.comparison.space.metrics": "5 个维度 20+ 指标",
    "tools.comparison.dvi.focus": "开发者速度对标",
    "tools.comparison.dvi.bestFor": "企业级能力评估",
    "tools.comparison.dvi.metrics": "多维度调查指标",
    "tools.comparison.dxcore.focus": "开发者体验核心",
    "tools.comparison.dxcore.bestFor": "DX 改进优先级",
    "tools.comparison.dxcore.metrics": "3 个核心维度",
    "tools.cta.title": "开始评估您的团队",
    "tools.cta.desc": "使用 DORA Quick Check 在一分钟内评估您团队的软件交付性能，并与行业基准进行比较",
    "tools.cta.button": "立即进行 DORA 自测",
  },
  en: {
    "nav.home": "Home",
    "nav.cases": "Cases",
    "nav.knowledge": "Knowledge",
    "nav.tools": "Tools",
    "nav.templates": "Templates",
    "nav.about": "About",
    "hero.title": "Developer Experience Center Program",
    "hero.subtitle": "DXCP",
    "hero.description":
      "Build a unified, systematic, and continuously improving developer experience platform to enhance R&D productivity, delivery efficiency, system quality, and engineer satisfaction",
    "hero.getStarted": "Get Started",
    "hero.viewDocs": "View Docs",
    "hero.contact": "Contact Us",
    "section.features": "Core Capabilities",
    "section.cases": "Success Stories",
    "section.knowledge": "Knowledge Base",
    "section.templates": "Download Templates",
    "section.books": "DevEx Book Recommendations",
    "section.books.desc":
      "Curated books on developer experience to help you deeply understand and practice DX principles",
    "books.item1.title": "The Modern Developer Experience",
    "books.item1.author": "By Steve Buchanan",
    "books.item1.desc":
      "Explores how organizations can improve the developer experience by reducing complexity, streamlining workflows, and fostering supportive environments",
    "books.item2.title": "Developer Experience Unleashed",
    "books.item2.author": "By K. Rain Leander",
    "books.item2.desc":
      "The Art of Creating Efficient Developer Environments. Explores the intricate world of developer experience and its impact on the software development process",
    "books.item3.title": "Developer Experience",
    "books.item3.author": "By Addy Osmani",
    "books.item3.desc":
      "Optimize how easily and effectively developers can get things done. Creating tools, APIs, and services that enable developers to be productive, satisfied, and empowered",
    "books.item4.title": "Team Topologies",
    "books.item4.author": "By Matthew Skelton & Manuel Pais",
    "books.item4.desc":
      "Organizing Business and Technology Teams for Fast Flow. A practical, step-by-step, adaptive model for organizational design and team interaction",
    "feature.portal.title": "Developer Portal",
    "feature.portal.desc": "Unified service catalog, component templates, API docs and best practices",
    "feature.cicd.title": "CI/CD Automation",
    "feature.cicd.desc": "Template pipelines, built-in quality gates, automated security scanning",
    "feature.template.title": "Service Templates",
    "feature.template.desc": "Standard microservice templates with monitoring, logging, and deployment",
    "feature.onboarding.title": "Quick Onboarding",
    "feature.onboarding.desc": "Fast onboarding kit for new engineers with one-click dev environment",
    "feature.observability.title": "Observability",
    "feature.observability.desc": "Standard logging, metrics, tracing templates with unified alerting",
    "feature.devenv.title": "Dev Environment",
    "feature.devenv.desc": "Cloud-based reproducible dev environments as a service",
    "cases.viewMode.grid": "Grid View",
    "cases.viewMode.list": "List View",
    "cases.filter.all": "All",
    "cases.submitCase": "Submit Case",
    "knowledge.search": "Search knowledge base...",
    "knowledge.categories": "Categories",
    "knowledge.cat.basics": "Basics",
    "knowledge.cat.frameworks": "Frameworks",
    "knowledge.cat.metrics": "Metrics",
    "knowledge.cat.practices": "Best Practices",
    "knowledge.cat.sharing": "Industry Insights",
    "templates.proposal": "DXC Project Proposal",
    "templates.proposal.desc":
      "Complete proposal template with project overview, background, goals, and implementation plan",
    "templates.pilot": "DXC Pilot Plan",
    "templates.pilot.desc": "12-week pilot delivery plan with weekly milestones and key deliverables",
    "templates.download": "Download",
    "footer.github": "GitHub",
    "footer.community": "Community",
    "footer.docs": "Documentation",
    "footer.contact": "Contact",
    "footer.copyright": "© 2025 DXCP. All rights reserved.",
    "tools.title": "Tools & Metrics Frameworks",
    "tools.description":
      "Explore industry-leading developer experience metrics frameworks and assessment tools to help evaluate and improve your team's development effectiveness",
    "tools.tryIt": "Try It",
    "tools.keyMetrics": "Key Metrics",
    "tools.references": "References",
    "tools.dora.title": "DORA Metrics",
    "tools.dora.subtitle": "DevOps Research and Assessment",
    "tools.dora.desc":
      "DORA (DevOps Research and Assessment) is a software delivery performance measurement framework developed by the Google Cloud team. It measures team software delivery capabilities through four key metrics, helping identify improvement opportunities and drive continuous improvement. DORA Quick Check is a free online self-assessment tool that can evaluate your team's performance and compare it to industry benchmarks in less than a minute.",
    "tools.dora.metric1": "Deployment Frequency",
    "tools.dora.metric2": "Lead Time for Changes",
    "tools.dora.metric3": "Change Failure Rate",
    "tools.dora.metric4": "Mean Time to Restore (MTTR)",
    "tools.space.title": "SPACE Framework",
    "tools.space.subtitle": "Comprehensive Developer Productivity Measurement",
    "tools.space.desc":
      "The SPACE framework was developed by researchers from GitHub, Microsoft, and the University of Victoria, providing five dimensions to comprehensively assess developer productivity. Unlike narrow metrics, SPACE offers a broader view of what's happening inside teams, helping set better goals, uncover workflow blockers, and boost productivity without losing sight of the human side of software development.",
    "tools.space.metric1": "Satisfaction and Well-being",
    "tools.space.metric2": "Performance",
    "tools.space.metric3": "Activity",
    "tools.space.metric4": "Communication and Collaboration",
    "tools.space.metric5": "Efficiency and Flow",
    "tools.dvi.title": "DVI Framework",
    "tools.dvi.subtitle": "Developer Velocity Index",
    "tools.dvi.desc":
      "Developer Velocity Index (DVI), proposed by McKinsey, is a survey methodology that benchmarks an enterprise's technology and practices against peers, helping uncover areas for improvement. DVI focuses on inner/outer loop time allocation, contribution analysis, talent capability scores, and other metrics to provide organizations with deep insights and improvement recommendations on developer productivity.",
    "tools.dvi.metric1": "Inner/Outer Loop Time Allocation",
    "tools.dvi.metric2": "Contribution Analysis",
    "tools.dvi.metric3": "Talent Capability Score",
    "tools.dvi.metric4": "Technology Practice Benchmarking",
    "tools.dxcore.title": "DX Core 4 Metrics",
    "tools.dxcore.subtitle": "Core Developer Experience Measurement",
    "tools.dxcore.desc":
      "DX Core 4 is a core metrics framework proposed by DX (formerly Gergely Orosz's developer experience company), focusing on measuring key dimensions of developer experience. The framework emphasizes three core factors: feedback loop speed, cognitive load, and flow state, combining qualitative and quantitative metrics to help organizations identify and eliminate friction points in developer experience.",
    "tools.dxcore.metric1": "Feedback Loop Speed",
    "tools.dxcore.metric2": "Cognitive Load",
    "tools.dxcore.metric3": "Flow State",
    "tools.comparison.title": "Framework Comparison",
    "tools.comparison.framework": "Framework",
    "tools.comparison.focus": "Focus Area",
    "tools.comparison.bestFor": "Best For",
    "tools.comparison.metrics": "Metrics Count",
    "tools.comparison.dora.focus": "DevOps Delivery Performance",
    "tools.comparison.dora.bestFor": "CI/CD Pipeline Optimization",
    "tools.comparison.dora.metrics": "4 Core Metrics",
    "tools.comparison.space.focus": "Team Productivity & Well-being",
    "tools.comparison.space.bestFor": "Team Effectiveness Assessment",
    "tools.comparison.space.metrics": "5 Dimensions, 20+ Metrics",
    "tools.comparison.dvi.focus": "Developer Velocity Benchmarking",
    "tools.comparison.dvi.bestFor": "Enterprise Capability Assessment",
    "tools.comparison.dvi.metrics": "Multi-dimensional Survey Metrics",
    "tools.comparison.dxcore.focus": "Developer Experience Core",
    "tools.comparison.dxcore.bestFor": "DX Improvement Prioritization",
    "tools.comparison.dxcore.metrics": "3 Core Dimensions",
    "tools.cta.title": "Start Assessing Your Team",
    "tools.cta.desc":
      "Use DORA Quick Check to evaluate your team's software delivery performance in less than a minute and compare it to industry benchmarks",
    "tools.cta.button": "Take the DORA Quick Check",
  },
}

const defaultContextValue: I18nContextType = {
  locale: "zh",
  setLocale: () => {},
  t: (key: string) => translations.zh[key] || key,
}

const I18nContext = React.createContext<I18nContextType>(defaultContextValue)

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = React.useState<Locale>("zh")
  const [isClient, setIsClient] = React.useState(false)

  React.useEffect(() => {
    setIsClient(true)
    const stored = window.localStorage.getItem("locale") as Locale
    if (stored && (stored === "zh" || stored === "en")) {
      setLocale(stored)
    }
  }, [])

  const handleSetLocale = React.useCallback((newLocale: Locale) => {
    setLocale(newLocale)
    if (typeof window !== "undefined") {
      window.localStorage.setItem("locale", newLocale)
    }
  }, [])

  const t = React.useCallback(
    (key: string) => {
      return translations[locale][key] || key
    },
    [locale],
  )

  const value = React.useMemo(
    () => ({
      locale,
      setLocale: handleSetLocale,
      t,
    }),
    [locale, handleSetLocale, t],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const context = React.useContext(I18nContext)
  return context
}
