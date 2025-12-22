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
    "nav.templates": "模板下载",
    "nav.about": "关于",
    "hero.title": "开发者体验中心计划",
    "hero.subtitle": "Developer Experience Center Program",
    "hero.description":
      "建立统一、系统化、可持续改进的开发者体验平台，提升研发生产力、交付效率、系统质量与工程师满意度",
    "hero.getStarted": "开始使用",
    "hero.viewDocs": "查看文档",
    "section.concepts": "核心概念",
    "section.concepts.desc": "理解开发者体验的完整框架：从理念到组织到社区",
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
    "footer.copyright": "© 2025 DXCP. 保留所有权利。",
  },
  en: {
    "nav.home": "Home",
    "nav.cases": "Cases",
    "nav.knowledge": "Knowledge",
    "nav.templates": "Templates",
    "nav.about": "About",
    "hero.title": "Developer Experience Center Program",
    "hero.subtitle": "DXCP",
    "hero.description":
      "Build a unified, systematic, and continuously improving developer experience platform to enhance R&D productivity, delivery efficiency, system quality, and engineer satisfaction",
    "hero.getStarted": "Get Started",
    "hero.viewDocs": "View Docs",
    "section.concepts": "Core Concepts",
    "section.concepts.desc":
      "Understanding the complete framework of developer experience: from philosophy to organization to community",
    "concept.dx.title": "DX / DevEx",
    "concept.dx.desc":
      "Developer Experience refers to the overall feeling and efficiency developers have when using tools, platforms, APIs, and services. Good DX significantly improves productivity, reduces learning costs, minimizes friction, and ultimately enhances engineer satisfaction and innovation speed.",
    "concept.dx.subtypes.label": "Scope Categories",
    "concept.dx.subtypes.internal": "Internal DX",
    "concept.dx.subtypes.ecosystem": "Ecosystem DX",
    "concept.dx.subtypes.opensource": "Open Source DX",
    "concept.dx.subtypes.platform": "Platform DX",
    "concept.dxc.title": "DXC",
    "concept.dxc.desc":
      "Developer Experience Center is a unified platform and organization responsible for building, maintaining, and optimizing the developer toolchain, processes, and infrastructure within an organization. DXC helps development teams improve efficiency and quality by providing standardized templates, automation tools, and best practices.",
    "concept.dxcp.title": "DXCP",
    "concept.dxcp.desc":
      "Developer Experience Center Program is a systematic initiative and community aimed at promoting DXC concepts, sharing best practices, providing implementation guides, and establishing industry standards. DXCP helps organizations build their own DXC from scratch and continuously improve developer experience.",
    "section.features": "Core Capabilities",
    "section.cases": "Success Stories",
    "section.knowledge": "Knowledge Base",
    "section.templates": "Download Templates",
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
    "footer.copyright": "© 2025 DXCP. All rights reserved.",
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
