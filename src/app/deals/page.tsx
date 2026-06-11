import { MotionReveal } from '@/components/motion-reveal'
import { AnimatedStats } from '@/components/animated-stats'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { Clock, TrendingUp, Zap } from 'lucide-react'

export const metadata = {
  title: 'Daily Deals & Flash Sales',
  description: 'Limited-time offers and exclusive deals on premium products.',
}

export default function DealsPage() {
  const stats = [
    { label: 'Active Deals', value: 156, icon: <TrendingUp className="h-6 w-6" /> },
    { label: 'Avg. Discount', value: 45, suffix: '%', icon: <Zap className="h-6 w-6" /> },
    { label: 'Time Left', value: 12, suffix: 'h', icon: <Clock className="h-6 w-6" /> },
  ]

  const deals = [
    {
      id: '1',
      title: 'Premium Wireless Earbuds',
      originalPrice: 299,
      salePrice: 149,
      discount: 50,
      timeLeft: '6h 23m',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=60',
    },
    {
      id: '2',
      title: 'Smart Watch Pro',
      originalPrice: 499,
      salePrice: 299,
      discount: 40,
      timeLeft: '3h 45m',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=60',
    },
    {
      id: '3',
      title: '4K Webcam',
      originalPrice: 199,
      salePrice: 89,
      discount: 55,
      timeLeft: '8h 12m',
      image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=500&q=60',
    },
    {
      id: '4',
      title: 'Mechanical Keyboard',
      originalPrice: 149,
      salePrice: 79,
      discount: 47,
      timeLeft: '5h 54m',
      image: 'https://images.unsplash.com/photo-1587829191301-46e5b0e6f748?auto=format&fit=crop&w=500&q=60',
    },
    {
      id: '5',
      title: 'USB-C Hub',
      originalPrice: 79,
      salePrice: 39,
      discount: 51,
      timeLeft: '2h 30m',
      image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?auto=format&fit=crop&w=500&q=60',
    },
    {
      id: '6',
      title: 'Monitor Arm',
      originalPrice: 129,
      salePrice: 69,
      discount: 46,
      timeLeft: '7h 15m',
      image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=500&q=60',
    },
  ]

  return (
    <div className="page-transition">
      {/* Hero */}
      <section className="container-page py-20">
        <MotionReveal className="mb-12 text-center">
          <Badge className="mb-4">⏰ Limited Time</Badge>
          <h1 className="text-5xl font-bold tracking-tight md:text-6xl mb-4">
            Flash Sales & Daily Deals
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover unbeatable discounts on premium products. Deals refresh daily with limited inventory.
          </p>
        </MotionReveal>
      </section>

      {/* Stats */}
      <AnimatedStats stats={stats} />

      {/* Deals Grid */}
      <section className="container-page py-20">
        <div className="mb-8">
          <h2 className="text-3xl font-bold">Today's Top Deals</h2>
          <p className="text-muted-foreground mt-2">Shop before these incredible offers expire</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {deals.map((deal, index) => (
            <div
              key={deal.id}
              className="group relative overflow-hidden rounded-lg border bg-card transition-all hover:shadow-lg hover:border-primary/50 animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden bg-muted">
                <img
                  src={deal.image}
                  alt={deal.title}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
                
                {/* Discount Badge */}
                <div className="absolute right-3 top-3 rounded-lg bg-red-500 px-3 py-1 text-sm font-bold text-white">
                  -{deal.discount}%
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                  {deal.title}
                </h3>

                {/* Price */}
                <div className="mt-3 flex items-end gap-2">
                  <span className="text-2xl font-bold text-primary">
                    ${deal.salePrice}
                  </span>
                  <span className="text-sm text-muted-foreground line-through">
                    ${deal.originalPrice}
                  </span>
                </div>

                {/* Timer */}
                <div className="mt-4 flex items-center gap-2 text-sm font-medium text-orange-500">
                  <Clock className="h-4 w-4" />
                  {deal.timeLeft} left
                </div>

                {/* CTA */}
                <Button asChild className="mt-4 w-full">
                  <Link href="/products">Buy Now</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="container-page py-20">
        <div className="rounded-lg border bg-gradient-to-r from-primary/10 to-primary/5 p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Never Miss a Deal</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Get instant notifications for flash sales and exclusive member-only deals delivered to your inbox.
          </p>
          <Button size="lg">Subscribe to Deal Alerts</Button>
        </div>
      </section>
    </div>
  )
}
