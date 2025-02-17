"use client"

import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Clock } from 'lucide-react'

const featuredPosts = [
  {
    id: 1,
    title: "The Evolution of Artificial Intelligence in Modern Society",
    excerpt: "Exploring how AI is reshaping our daily lives and future prospects",
    category: "Technology",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Sustainable Living: A Guide to Eco-Friendly Practices",
    excerpt: "Simple steps towards a more sustainable and conscious lifestyle",
    category: "Lifestyle",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "The Psychology of Productivity: Understanding Focus",
    excerpt: "Delving into the science behind productivity and mental focus",
    category: "Growth",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Digital Art Revolution: NFTs and Creative Economy",
    excerpt: "How blockchain technology is transforming the art world",
    category: "Culture",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1647427060118-4911c9821b82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  }
]

export default function FeaturedPosts() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Featured Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredPosts.map((post) => (
            <Card key={post.id} className="group hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-0">
                <div className="relative aspect-[16/9]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-4">
                  <Badge variant="secondary" className="mb-2">
                    {post.category}
                  </Badge>
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    <Link href={`/post/${post.id}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}