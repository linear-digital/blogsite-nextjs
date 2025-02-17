"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Clock, ThumbsUp, MessageSquare } from 'lucide-react'

// Move posts data outside component to ensure consistent values
const posts = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  title: `Understanding the Impact of ${['AI', 'Blockchain', 'IoT', 'Cloud Computing', 'Cybersecurity', 'Big Data', 'Machine Learning', 'DevOps', 'Edge Computing'][i]} in Modern Business`,
  excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  category: ['Technology', 'Business', 'Innovation'][i % 3],
  author: {
    name: `Author ${i + 1}`,
    avatar: `https://i.pravatar.cc/150?img=${i + 1}`
  },
  date: "March 15, 2024", // Use fixed date to avoid hydration mismatch
  readTime: "5 min read", // Use fixed read time to avoid hydration mismatch
  image: `https://picsum.photos/seed/${i + 1}/800/400`, // Use seed for consistent images
  likes: 42, // Use fixed numbers to avoid hydration mismatch
  comments: 23
}))

export default function MainContent() {
  const [visiblePosts, setVisiblePosts] = useState(6)

  return (
    <div className="space-y-8">
      {posts.slice(0, visiblePosts).map((post) => (
        <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-200">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative aspect-[16/9] md:aspect-square">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <Badge variant="secondary" className="mb-2">
                  {post.category}
                </Badge>
                <h3 className="text-2xl font-semibold mb-2 hover:text-primary transition-colors">
                  <Link href={`/post/${post.id}`}>
                    {post.title}
                  </Link>
                </h3>
                <p className="text-muted-foreground mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center space-x-4 mb-4">
                  <Avatar>
                    <AvatarImage src={post.author.avatar} />
                    <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{post.author.name}</p>
                    <p className="text-sm text-muted-foreground">{post.date}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-muted-foreground">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </div>
                  <div className="flex items-center">
                    <ThumbsUp className="h-4 w-4 mr-1" />
                    {post.likes}
                  </div>
                  <div className="flex items-center">
                    <MessageSquare className="h-4 w-4 mr-1" />
                    {post.comments}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}

      {visiblePosts < posts.length && (
        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            onClick={() => setVisiblePosts(prev => prev + 3)}
          >
            Load More
          </Button>
        </div>
      )}
    </div>
  )
}