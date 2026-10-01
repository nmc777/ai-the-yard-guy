import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { ArrowRight, Check } from 'lucide-react'
import { SiteNav, SiteFooter } from '@/components/site-chrome'
import { areas, areaList, services } from '@/lib/site'

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)
  if (!service) return {}
  return {
    title: `${service.name} in Windsor-Essex | AI The Yard Guy`,
    description: `${service.copy} Serving ${areaList}.`,
  }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)
  if (!service) notFound()
  const others = services.filter((s) => s.slug !== slug)

  return (
    <main className="site-shell">
      <SiteNav />
      <section className="service-hero" style={{ backgroundImage: `url(${service.image})` }}>
        <div className="hero-overlay" />
        <div className="service-hero-content">
          <p className="eyebrow light">{service.kicker}</p>
          <h1>{service.name}</h1>
          <p className="hero-copy">{service.copy}</p>
          <Link className="button button-light" href="/#contact">Contact now <ArrowRight size={17} /></Link>
        </div>
      </section>

      <section className="service-detail">
        <div>
          <p className="eyebrow">ABOUT THIS SERVICE</p>
          <h2>{service.name} for<br /><em>Windsor-Essex homes.</em></h2>
        </div>
        <div className="service-detail-copy">
          <p>{service.intro}</p>
          <p>{service.body}</p>
          <p className="service-season">{service.season}</p>
          <h4>What is included</h4>
          <ul>{service.includes.map((item) => <li key={item}><Check size={16} />{item}</li>)}</ul>
        </div>
      </section>

      <section className="service-areas">
        <p className="eyebrow">WHERE WE WORK</p>
        <h2>{service.name} in <em>your neighbourhood.</em></h2>
        <p>We provide {service.name.toLowerCase()} across {areaList}, and nearby communities.</p>
        <div className="area-chips">{areas.map((a) => <span key={a.name}>{a.name}</span>)}</div>
      </section>

      <section className="more-services">
        <p className="eyebrow">MORE SERVICES</p>
        <div className="more-grid">{others.map((s) => <Link key={s.slug} href={`/services/${s.slug}`}>{s.name}<ArrowRight size={15} /></Link>)}</div>
      </section>
      <SiteFooter />
    </main>
  )
}
