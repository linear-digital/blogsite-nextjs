import Hero from '@/components/hero'
import FeaturedPosts from '@/components/featured-posts'
import MainContent from '@/components/main-content'
import Sidebar from '@/components/sidebar'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedPosts />
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <MainContent />
          </div>
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  )
}