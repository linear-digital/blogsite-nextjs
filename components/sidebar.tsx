"use client"

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Search, Mail } from 'lucide-react'

const categories = [
  { name: 'Technology', count: 24 },
  { name: 'Culture', count: 18 },
  { name: 'Business', count: 12 },
  { name: 'Lifestyle', count: 15 },
  { name: 'Growth', count: 9 },
]

const popularPosts = [
  {
    title: "The Future of Work in 2025",
    date: "Mar 15, 2024",
    image: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
  },
  {
    title: "Understanding Quantum Computing",
    date: "Mar 14, 2024",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
  },
  {
    title: "Sustainable Living Guide",
    date: "Mar 13, 2024",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
  },
  {
    title: "Digital Minimalism in 2024",
    date: "Mar 12, 2024",
    image: "https://images.unsplash.com/photo-1507297230445-ff678f10b524?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
  },
  {
    title: "The Rise of AI in Healthcare",
    date: "Mar 11, 2024",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
  },
]

export default function Sidebar() {
  return (
    <div className="space-y-8 sticky top-24">
      {/* Search */}
      <Card>
        <CardContent className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="search"
              placeholder="Search articles..."
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Categories */}
      <Card>
        <CardHeader>
          <CardTitle>Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge
                key={category.name}
                variant="secondary"
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
              >
                {category.name} ({category.count})
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Popular Posts */}
      <Card>
        <CardHeader>
          <CardTitle>Popular Posts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {popularPosts.map((post, index) => (
              <div key={index} className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={post.image} />
                  <AvatarFallback>PO</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-medium line-clamp-1 hover:text-primary cursor-pointer">
                    {post.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">{post.date}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Newsletter */}
      <Card>
        <CardHeader>
          <CardTitle>Newsletter</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            Get the latest posts delivered straight to your inbox.
          </p>
          <div className="space-y-2">
            <Input
              type="email"
              placeholder="Enter your email"
            />
            <Button className="w-full">
              <Mail className="mr-2 h-4 w-4" /> Subscribe
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Author Spotlight */}
      <Card>
        <CardHeader>
          <CardTitle>Author Spotlight</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center">
            <Avatar className="w-20 h-20 mx-auto mb-4">
              <AvatarImage src="https://i.pravatar.cc/150?img=68" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <h4 className="font-semibold mb-1">Jane Doe</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Tech journalist and digital culture expert
            </p>
            <Button variant="outline" size="sm">
              View Profile
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}