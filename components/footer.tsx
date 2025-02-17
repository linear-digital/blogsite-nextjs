"use client"

import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-card mt-16 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Mindscape</h3>
            <p className="text-muted-foreground mb-4">
              Exploring ideas that shape our world through thoughtful content and meaningful discussions.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  The Future of AI in 2025
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Sustainable Living Guide
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Digital Minimalism
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Remote Work Culture
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-muted-foreground mb-4">
              Subscribe to our newsletter for weekly updates and insights.
            </p>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-full"
              />
              <Button className="w-full">
                <Mail className="mr-2 h-4 w-4" /> Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Mindscape. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}