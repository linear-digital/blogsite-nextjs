import Link from 'next/link'
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-5 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <h5 className="mb-3">About Modern Blog</h5>
            <p>
              Discover stories, thinking, and expertise from writers on any topic.
              Share your ideas with millions of readers.
            </p>
            <div className="d-flex gap-3 mt-3">
              <a href="#" className="text-light">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-light">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-light">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-light">
                <Youtube size={24} />
              </a>
            </div>
          </div>
          
          <div className="col-md-2 mb-4">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link href="/" className="text-light text-decoration-none">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/about" className="text-light text-decoration-none">
                  About
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/contact" className="text-light text-decoration-none">
                  Contact
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/privacy" className="text-light text-decoration-none">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-md-2 mb-4">
            <h5 className="mb-3">Categories</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link href="/category/technology" className="text-light text-decoration-none">
                  Technology
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/category/lifestyle" className="text-light text-decoration-none">
                  Lifestyle
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/category/travel" className="text-light text-decoration-none">
                  Travel
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/category/food" className="text-light text-decoration-none">
                  Food
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-md-4 mb-4">
            <h5 className="mb-3">Newsletter</h5>
            <p>Subscribe to our newsletter for the latest updates.</p>
            <form className="mt-3">
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your email address"
                  aria-label="Email address"
                />
                <button className="btn btn-primary" type="submit">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <hr className="my-4" />
        
        <div className="row">
          <div className="col-12 text-center">
            <p className="mb-0">
              © {new Date().getFullYear()} Modern Blog. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}