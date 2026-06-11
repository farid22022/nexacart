import Image from 'next/image'
import { MotionReveal } from '@/components/motion-reveal'
import { AnimatedStats } from '@/components/animated-stats'
import { FeatureGrid } from '@/components/feature-grid'
import { Zap, Shield, Headphones, Leaf } from 'lucide-react'

export const metadata = {
  title: 'About Us',
  description: 'Learn about NexaCart, our mission, and our team.',
}

export default function AboutPage() {
  const stats = [
    { label: 'Happy Customers', value: 50000, suffix: '+', icon: <Zap className="h-6 w-6" /> },
    { label: 'Products Listed', value: 100000, suffix: '+', icon: <Shield className="h-6 w-6" /> },
    { label: 'Daily Orders', value: 5000, suffix: '+', icon: <Headphones className="h-6 w-6" /> },
    { label: 'Sustainability Score', value: 98, suffix: '%', icon: <Leaf className="h-6 w-6" /> },
  ]

  const features = [
    {
      id: '1',
      icon: <Zap className="h-6 w-6" />,
      title: 'Lightning Fast',
      description: 'Optimized for speed with sub-second page loads and instant checkout.',
    },
    {
      id: '2',
      icon: <Shield className="h-6 w-6" />,
      title: 'Secure & Safe',
      description: 'Bank-level security with encrypted payments and buyer protection.',
    },
    {
      id: '3',
      icon: <Headphones className="h-6 w-6" />,
      title: '24/7 Support',
      description: 'Round-the-clock customer service to help with any questions.',
    },
    {
      id: '4',
      icon: <Leaf className="h-6 w-6" />,
      title: 'Eco-Friendly',
      description: 'Carbon-neutral shipping and sustainable packaging options.',
    },
  ]

  return (
    <div className="page-transition">
      {/* Hero section */}
      <section className="relative min-h-[500px] overflow-hidden py-20">
        <Image
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1800&q=85"
          alt="About NexaCart"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/40" />
        <div className="container-page relative flex min-h-[500px] items-center">
          <MotionReveal className="max-w-2xl">
            <h1 className="text-5xl font-bold tracking-tight md:text-6xl">
              Our Story
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              Building the future of commerce, one transaction at a time.
            </p>
          </MotionReveal>
        </div>
      </section>

      {/* Mission section */}
      <section className="container-page py-20">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <MotionReveal className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-7">
                At NexaCart, we believe commerce should be accessible, transparent, and rewarding for everyone. 
                We're building a platform that empowers sellers to reach global customers and gives buyers the 
                confidence to shop with trust.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Core Values</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  Trust in every transaction
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  Empowerment through innovation
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  Sustainability in growth
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  Community over competition
                </li>
              </ul>
            </div>
          </MotionReveal>

          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=85"
              alt="Our team"
              fill
              className="object-cover hover-scale"
            />
          </div>
        </div>
      </section>

      {/* Stats section */}
      <AnimatedStats stats={stats} />

      {/* Features section */}
      <section className="container-page py-20">
        <MotionReveal className="mb-12 text-center">
          <h2 className="text-3xl font-bold">Why Choose NexaCart?</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need for a seamless shopping experience
          </p>
        </MotionReveal>
        <FeatureGrid features={features} />
      </section>

      {/* Team section */}
      <section className="container-page py-20">
        <MotionReveal className="mb-12 text-center">
          <h2 className="text-3xl font-bold">Our Team</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Passionate individuals building the commerce platform of tomorrow
          </p>
        </MotionReveal>

        <div className="grid gap-8 md:grid-cols-4">
          {[
            { name: 'Asif-Alamgir', role: 'Director of Strategic Operations & Innovation', image: 'https://i.ibb.co.com/DHR4qngz/Asif-Alamgir.png' },
            { name: ' Md.Sayem Hossain', role: 'CTO', image: 'https://i.ibb.co.com/4wT1F6hr/Sayem-CEO.png' },
            { name: 'Most. Mrittika Khatun', role: 'Research & Product Development Manager', image: 'https://i.ibb.co.com/PG68v9M4/Most-Mrittika-Khatun.png' },
          ].map((member, index) => (
            <div
              key={member.name}
              className="group text-center animate-fade-in-up hover-lift"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 w-full rounded-lg overflow-hidden mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <h3 className="font-semibold text-lg">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
