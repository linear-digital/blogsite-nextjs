"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 bg-white text-black",
      isScrolled ? "backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b" : " backdrop-blur supports-[backdrop-filter]:bg-background/60"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold">
            Mindscape
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/category/technology" className="text-foreground/80 hover:text-foreground">
              Technology
            </Link>
            <Link href="/category/culture" className="text-foreground/80 hover:text-foreground">
              Culture
            </Link>
            <Link href="/category/growth" className="text-foreground/80 hover:text-foreground">
              Growth
            </Link>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="search"
                placeholder="Search..."
                className="pl-10 w-64"
              />
            </div>
            <Button>Subscribe</Button>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-b">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="search"
                placeholder="Search..."
                className="pl-10 w-full"
              />
            </div>
            <nav className="flex flex-col space-y-4">
              <Link href="/category/technology" className="text-foreground/80 hover:text-foreground">
                Technology
              </Link>
              <Link href="/category/culture" className="text-foreground/80 hover:text-foreground">
                Culture
              </Link>
              <Link href="/category/growth" className="text-foreground/80 hover:text-foreground">
                Growth
              </Link>
              <Button className="w-full">Subscribe</Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}