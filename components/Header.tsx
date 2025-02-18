'use client'

import Link from 'next/link'
import { Search } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">
        <Link href="/" className="navbar-brand fw-bold">
          Modern Blog
        </Link>
        
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/categories" className="nav-link">
                Categories
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
          
          <form className="d-flex">
            <div className="input-group">
              <input
                type="search"
                className="form-control"
                placeholder="Search..."
                aria-label="Search"
              />
              <button className="btn btn-outline-primary" type="submit">
                <Search size={20} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </nav>
  )
}