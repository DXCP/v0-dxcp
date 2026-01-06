"use client"

import { useI18n } from "@/components/i18n-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Activity, Users, Zap, Target, BarChart3, Brain, Clock, Heart } from "lucide-react"
import Link from "next/link"

export default function ToolsPage() {
  const { t } = useI18n()

  const frameworks = [
    {
      id: "dora",
      icon: Activity,
      color: "bg-blue-500",
      metrics: [
        { key: "tools.dora.metric1", icon: Clock },
        { key: "tools.dora.metric2", icon: Zap },
        { key: "tools.dora.metric3", icon: Activity },
        { key: "tools.dora.metric4", icon: Target },
      ],
      link: "https://dora.dev/quickcheck/",
    },
    {
      id: "space",
      icon: Users,
      color: "bg-purple-500",
      metrics: [
        { key: "tools.space.metric1", icon: Heart },
        { key: "tools.space.metric2", icon: Target },
        { key: "tools.space.metric3", icon: Activity },
        { key: "tools.space.metric4", icon: Users },
        { key: "tools.space.metric5", icon: Zap },
      ],
      links: [
        { url: "https://blog.codacy.com/space-framework", label: "Codacy Blog" },
        { url: "https://linearb.io/blog/space-framework", label: "LinearB Blog" },
      ],
    },
    {
      id: "dvi",
      icon: BarChart3,
      color: "bg-green-500",
      metrics: [
        { key: "tools.dvi.metric1", icon: Clock },
        { key: "tools.dvi.metric2", icon: Brain },
        { key: "tools.dvi.metric3", icon: Users },
        { key: "tools.dvi.metric4", icon: Target },
      ],
    },
    {
      id: "dxcore",
      icon: Brain,
      color: "bg-orange-500",
      metrics: [
        { key: "tools.dxcore.metric1", icon: Zap },
        { key: "tools.dxcore.metric2", icon: Brain },
        { key: "tools.dxcore.metric3", icon: Activity },
      ],
      link: "https://getdx.com/research/measuring-developer-productivity-with-the-dx-core-4/",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">{t("tools.title")}</h1>
              <p className="text-xl text-muted-foreground">{t("tools.description")}</p>
            </div>
          </div>
        </section>

        {/* Frameworks Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-8">
              {frameworks.map((framework) => (
                <Card key={framework.id} className="border-border hover:border-primary transition-colors duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-lg ${framework.color} text-white`}>
                          <framework.icon className="h-6 w-6" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl">{t(`tools.${framework.id}.title`)}</CardTitle>
                          <CardDescription className="text-base mt-1">
                            {t(`tools.${framework.id}.subtitle`)}
                          </CardDescription>
                        </div>
                      </div>
                      {framework.link && (
                        <Button variant="outline" size="sm" asChild>
                          <Link href={framework.link} target="_blank" rel="noopener noreferrer">
                            {t("tools.tryIt")}
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">{t(`tools.${framework.id}.desc`)}</p>

                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">{t("tools.keyMetrics")}</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {framework.metrics.map((metric, index) => (
                          <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                            <metric.icon className="h-5 w-5 text-primary" />
                            <span className="text-sm">{t(metric.key)}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {framework.links && (
                      <div className="flex flex-wrap gap-2">
                        <span className="text-sm text-muted-foreground mr-2">{t("tools.references")}:</span>
                        {framework.links.map((link, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                          >
                            <Link
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1"
                            >
                              {link.label}
                              <ExternalLink className="h-3 w-3" />
                            </Link>
                          </Badge>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Comparison Table */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">{t("tools.comparison.title")}</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-background rounded-lg overflow-hidden">
                <thead>
                  <tr className="border-b">
                    <th className="p-4 text-left font-semibold">{t("tools.comparison.framework")}</th>
                    <th className="p-4 text-left font-semibold">{t("tools.comparison.focus")}</th>
                    <th className="p-4 text-left font-semibold">{t("tools.comparison.bestFor")}</th>
                    <th className="p-4 text-left font-semibold">{t("tools.comparison.metrics")}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-muted/50">
                    <td className="p-4 font-medium">DORA</td>
                    <td className="p-4">{t("tools.comparison.dora.focus")}</td>
                    <td className="p-4">{t("tools.comparison.dora.bestFor")}</td>
                    <td className="p-4">{t("tools.comparison.dora.metrics")}</td>
                  </tr>
                  <tr className="border-b hover:bg-muted/50">
                    <td className="p-4 font-medium">SPACE</td>
                    <td className="p-4">{t("tools.comparison.space.focus")}</td>
                    <td className="p-4">{t("tools.comparison.space.bestFor")}</td>
                    <td className="p-4">{t("tools.comparison.space.metrics")}</td>
                  </tr>
                  <tr className="border-b hover:bg-muted/50">
                    <td className="p-4 font-medium">DVI</td>
                    <td className="p-4">{t("tools.comparison.dvi.focus")}</td>
                    <td className="p-4">{t("tools.comparison.dvi.bestFor")}</td>
                    <td className="p-4">{t("tools.comparison.dvi.metrics")}</td>
                  </tr>
                  <tr className="hover:bg-muted/50">
                    <td className="p-4 font-medium">DX Core 4</td>
                    <td className="p-4">{t("tools.comparison.dxcore.focus")}</td>
                    <td className="p-4">{t("tools.comparison.dxcore.bestFor")}</td>
                    <td className="p-4">{t("tools.comparison.dxcore.metrics")}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">{t("tools.cta.title")}</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">{t("tools.cta.desc")}</p>
            <Button asChild size="lg">
              <Link href="https://dora.dev/quickcheck/" target="_blank" rel="noopener noreferrer">
                {t("tools.cta.button")}
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
