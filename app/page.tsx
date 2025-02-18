import Image from 'next/image'
import Link from 'next/link'
import { Clock, User } from 'lucide-react'
import FeaturedPost from '@/components/home/FeaturedPost'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 className="display-4 fw-bold mb-4">Welcome to Modern Blog</h1>
          <p className="lead mb-4">Discover stories, thinking, and expertise from writers on any topic.</p>
          <Link href="/start-writing" className="btn btn-primary btn-lg">
            Start Writing
          </Link>
        </div>
      </section>

      {/* Featured Posts */}
      <FeaturedPost />

      {/* Latest Posts with Sidebar */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            {/* Main Content */}
            <div className="col-lg-8">
              <h2 className="mb-4">Latest Posts</h2>
              <div className="row g-4">
                {[1, 2, 3, 4, 5, 6].map((post) => (
                  <div key={post} className="col-md-6">
                    <div className="card h-100">
                      <Image
                        src={`/images/no-image.png`}
                        className="card-img-top"
                        alt="Post thumbnail"
                        width={800}
                        height={600}
                      />
                      <div className="card-body">
                        <h5 className="card-title">Latest Post Title {post}</h5>
                        <p className="card-text">
                          A brief description of the latest post that gives readers an idea of what to expect.
                        </p>
                        <div className="d-flex align-items-center text-muted mb-3">
                          <User size={16} className="me-2" />
                          <small>Jane Smith</small>
                          <Clock size={16} className="ms-3 me-2" />
                          <small>3 min read</small>
                        </div>
                        <Link href={`/post/${post}`} className="btn btn-primary">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Pagination */}
              <nav className="mt-5">
                <ul className="pagination justify-content-center">
                  <li className="page-item disabled">
                    <a className="page-link" href="#" tabIndex={-1}>Previous</a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">1</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">2</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">3</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">Next</a>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              <div className="sticky-sidebar">
                {/* Search */}
                <div className="card mb-4">
                  <div className="card-body">
                    <h5 className="card-title">Search</h5>
                    <form className="mt-3">
                      <div className="input-group">
                        <input
                          type="search"
                          className="form-control"
                          placeholder="Search posts..."
                        />
                        <button className="btn btn-primary" type="submit">
                          Search
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                {/* Categories */}
                <div className="card mb-4">
                  <div className="card-body">
                    <h5 className="card-title">Categories</h5>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        Technology
                        <span className="badge bg-primary rounded-pill">14</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        Lifestyle
                        <span className="badge bg-primary rounded-pill">8</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        Travel
                        <span className="badge bg-primary rounded-pill">11</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        Food
                        <span className="badge bg-primary rounded-pill">9</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Newsletter */}
                <div className="newsletter-form">
                  <h5 className="mb-3">Subscribe to Newsletter</h5>
                  <p className="text-muted mb-4">
                    Get the latest posts delivered right to your inbox.
                  </p>
                  <form>
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your email address"
                      />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}