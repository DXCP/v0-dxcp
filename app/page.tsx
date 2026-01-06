"use client"

import Link from "next/link"
import {
  ArrowRight,
  BookOpen,
  Code2,
  Container,
  Gauge,
  GitBranch,
  Rocket,
  Target,
  Users,
  Globe,
  Zap,
  Brain,
  Workflow,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { useI18n } from "@/components/i18n-provider"
import { ScrollProgressNav } from "@/components/scroll-progress-nav"

export default function HomePage() {
  const { t } = useI18n()

  const features = [
    {
      icon: BookOpen,
      titleKey: "feature.portal.title",
      descKey: "feature.portal.desc",
    },
    {
      icon: GitBranch,
      titleKey: "feature.cicd.title",
      descKey: "feature.cicd.desc",
    },
    {
      icon: Container,
      titleKey: "feature.template.title",
      descKey: "feature.template.desc",
    },
    {
      icon: Rocket,
      titleKey: "feature.onboarding.title",
      descKey: "feature.onboarding.desc",
    },
    {
      icon: Gauge,
      titleKey: "feature.observability.title",
      descKey: "feature.observability.desc",
    },
    {
      icon: Code2,
      titleKey: "feature.devenv.title",
      descKey: "feature.devenv.desc",
    },
  ]

  const concepts = [
    {
      icon: Globe,
      titleKey: "concept.dx.title",
      descKey: "concept.dx.desc",
      subtypes: "concept.dx.subtypes",
    },
    {
      icon: Target,
      titleKey: "concept.dxc.title",
      descKey: "concept.dxc.desc",
      highlight: true,
    },
    {
      icon: Users,
      titleKey: "concept.dxcp.title",
      descKey: "concept.dxcp.desc",
      highlight: true,
    },
  ]

  const books = [
    {
      titleKey: "books.item1.title",
      authorKey: "books.item1.author",
      descKey: "books.item1.desc",
      url: "https://www.oreilly.com/library/view/the-modern-developer/9781098169701/",
      image: "/the-modern-developer-experience-book-cover.jpg",
    },
    {
      titleKey: "books.item2.title",
      authorKey: "books.item2.author",
      descKey: "books.item2.desc",
      url: "https://link.springer.com/book/10.1007/979-8-8688-0242-3",
      image: "/developer-experience-unleashed-book-cover.jpg",
    },
    {
      titleKey: "books.item3.title",
      authorKey: "books.item3.author",
      descKey: "books.item3.desc",
      url: "https://leanpub.com/developerexperience",
      image: "/developer-experience-by-addy-osmani-book-cover.jpg",
    },
    {
      titleKey: "books.item4.title",
      authorKey: "books.item4.author",
      descKey: "books.item4.desc",
      url: "https://teamtopologies.com/book",
      image: "/team-topologies-book-cover.jpg",
    },
  ]

  const pillars = [
    {
      icon: Zap,
      titleKey: "devex.pillar.feedback.title",
      descKey: "devex.pillar.feedback.desc",
    },
    {
      icon: Brain,
      titleKey: "devex.pillar.cognitive.title",
      descKey: "devex.pillar.cognitive.desc",
    },
    {
      icon: Workflow,
      titleKey: "devex.pillar.flow.title",
      descKey: "devex.pillar.flow.desc",
    },
  ]

  const navSections = [
    { id: "hero", label: t("nav.home") },
    { id: "devex-intro", label: t("section.devex.intro") },
    { id: "concepts", label: t("section.concepts") },
    { id: "features", label: t("section.features") },
    { id: "templates", label: t("section.templates") },
    { id: "books", label: t("section.books") },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <ScrollProgressNav sections={navSections} />

      <main className="flex-1">
        {/* Hero Section */}
        <section id="hero" className="relative py-12 md:py-24 lg:py-32 overflow-hidden">
          {/* Light mode background */}
          <div
            className="absolute inset-0 -z-20 w-full bg-cover bg-center bg-no-repeat opacity-100 dark:opacity-0 transition-opacity duration-300"
            style={{ backgroundImage: "url('/hero-bg.jpg')" }}
          />
          {/* Dark mode background */}
          <div
            className="absolute inset-0 -z-20 w-full bg-cover bg-center bg-no-repeat opacity-0 dark:opacity-100 transition-opacity duration-300"
            style={{ backgroundImage: "url('/hero-bg-dark.jpg')" }}
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 -z-10 w-full bg-gradient-to-b from-background/90 via-background/80 to-background" />

          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-4 inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                {t("hero.subtitle")}
              </div>
              <h1 className="mb-4 text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-7xl">
                {t("hero.title")}
              </h1>
              <p className="mb-8 text-lg text-muted-foreground text-balance md:text-xl">{t("hero.description")}</p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button size="lg" asChild>
                  <Link href="/templates">
                    {t("hero.getStarted")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/knowledge">{t("hero.viewDocs")}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* DevEx Introduction Section */}
        <section id="devex-intro" className="container py-12 md:py-24 mt-16">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance mb-4">
              {t("section.devex.intro")}
            </h2>
            <p className="text-lg text-muted-foreground text-balance max-w-3xl mx-auto">
              {t("section.devex.intro.desc")}
            </p>
          </div>

          {/* Three Pillars */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">{t("devex.pillars.title")}</h3>
            <div className="grid gap-6 md:grid-cols-3">
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center p-6 rounded-lg border-2 border-border bg-card hover:border-primary hover:shadow-lg transition-all duration-300"
                  >
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">{t(pillar.titleKey)}</h4>
                    <p className="text-sm text-muted-foreground">{t(pillar.descKey)}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Value Proposition */}
          <div className="rounded-lg border-2 border-primary/20 bg-primary/5 p-8">
            <h3 className="text-2xl font-bold mb-4 text-center">{t("devex.value.title")}</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{t("devex.value.item1.title")}</h4>
                  <p className="text-sm text-muted-foreground">{t("devex.value.item1.desc")}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{t("devex.value.item2.title")}</h4>
                  <p className="text-sm text-muted-foreground">{t("devex.value.item2.desc")}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{t("devex.value.item3.title")}</h4>
                  <p className="text-sm text-muted-foreground">{t("devex.value.item3.desc")}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                  4
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{t("devex.value.item4.title")}</h4>
                  <p className="text-sm text-muted-foreground">{t("devex.value.item4.desc")}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Concepts Section */}
        <section id="concepts" className="container py-12 md:py-24 bg-gradient-to-b from-background to-muted/30">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance mb-4">{t("section.concepts")}</h2>
            <p className="text-muted-foreground text-balance max-w-2xl mx-auto">{t("section.concepts.desc")}</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {concepts.map((concept, index) => {
              const Icon = concept.icon
              return (
                <Card
                  key={index}
                  className="border-2 border-border hover:border-primary hover:shadow-lg transition-all duration-300"
                >
                  <CardHeader>
                    <div
                      className={`mb-3 flex h-14 w-14 items-center justify-center rounded-lg ${concept.highlight ? "bg-primary text-primary-foreground" : "bg-muted"}`}
                    >
                      <Icon className="h-7 w-7" />
                    </div>
                    <CardTitle className="text-xl mb-2">{t(concept.titleKey)}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">{t(concept.descKey)}</CardDescription>
                    {concept.subtypes && (
                      <div className="mt-4 pt-4 border-t">
                        <p className="text-sm font-medium text-muted-foreground mb-2">
                          {t("concept.dx.subtypes.label")}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {["internal", "ecosystem", "opensource", "platform"].map((type) => (
                            <span
                              key={type}
                              className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary"
                            >
                              {t(`concept.dx.subtypes.${type}`)}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="container py-12 md:py-24 bg-muted/50">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">{t("section.features")}</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle>{t(feature.titleKey)}</CardTitle>
                    <CardDescription>{t(feature.descKey)}</CardDescription>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </section>

        {/* CTA Section - Download Templates */}
        <section id="templates" className="container py-12 md:py-24">
          <div className="rounded-lg border bg-card p-8 md:p-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-balance">{t("section.templates")}</h2>
            <p className="mb-6 text-muted-foreground text-balance">{t("templates.proposal.desc")}</p>
            <Button size="lg" asChild>
              <Link href="/templates">
                {t("templates.download")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Books Section */}
        <section id="books" className="container py-12 md:py-24 bg-muted/30">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance mb-4">{t("section.books")}</h2>
            <p className="text-muted-foreground text-balance max-w-2xl mx-auto">{t("section.books.desc")}</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {books.map((book, index) => (
              <a key={index} href={book.url} target="_blank" rel="noopener noreferrer" className="group flex flex-col">
                <Card className="flex flex-col h-full border-2 hover:border-primary hover:shadow-lg transition-all duration-300">
                  <div className="aspect-[2/3] overflow-hidden rounded-t-lg bg-muted">
                    <img
                      src={book.image || "/placeholder.svg"}
                      alt={t(book.titleKey)}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader className="flex-1">
                    <CardTitle className="text-lg line-clamp-2">{t(book.titleKey)}</CardTitle>
                    <p className="text-sm text-muted-foreground">{t(book.authorKey)}</p>
                    <CardDescription className="mt-2 line-clamp-3">{t(book.descKey)}</CardDescription>
                  </CardHeader>
                </Card>
              </a>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
