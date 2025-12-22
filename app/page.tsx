"use client"

import Link from "next/link"
import { ArrowRight, BookOpen, Code2, Container, Gauge, GitBranch, Rocket, Target, Users, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { useI18n } from "@/components/i18n-provider"

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

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-12 md:py-24 lg:py-32">
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
        </section>

        <section className="container py-12 md:py-24 bg-gradient-to-b from-background to-muted/30">
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
        <section className="container py-12 md:py-24 bg-muted/50">
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

        {/* CTA Section */}
        <section className="container py-12 md:py-24">
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
      </main>

      <SiteFooter />
    </div>
  )
}
