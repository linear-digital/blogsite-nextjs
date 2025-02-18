import Image from "next/image";
import Link from "next/link";
import { Clock, User, Share2, ThumbsUp, MessageSquare } from "lucide-react";
import { getPostBySlug } from "@/lib/hasnode";
import { Post } from "@/types/blogs";
// import { useState } from 'react'

export default async function BlogPost({ params }: { params: { id: string } }) {
  // const [likes, setLikes] = useState(0)
  // const [showCommentForm, setShowCommentForm] = useState(false)

  // Mock data - In production, this would come from your database
  // const post = {
  //   title: "Understanding Modern Web Development",
  //   author: "Jane Smith",
  //   date: "March 15, 2024",
  //   readTime: "8 min read",
  //   image:
  //     "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
  //   content: `
  //     <p class="lead">Modern web development has evolved significantly over the past decade, bringing new challenges and opportunities for developers.</p>
      
  //     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      
  //     <h2>The Evolution of Web Technologies</h2>
      
  //     <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      
  //     <blockquote class="blockquote">
  //       <p>The only way to do great work is to love what you do.</p>
  //       <footer class="blockquote-footer">Steve Jobs</footer>
  //     </blockquote>
  //   `,
  //   tags: ["Web Development", "Technology", "Programming"],
  // };

  const relatedPosts = [
    {
      id: 1,
      title: "Getting Started with React",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80",
      author: "John Doe",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "CSS Best Practices",
      image:
        "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?auto=format&fit=crop&q=80",
      author: "Sarah Johnson",
      readTime: "6 min read",
    },
  ];
  const { id } = await params;
  const post : Post= await getPostBySlug(id);

  return (
    <div className="container py-5">
      <article className="blog-post">
        {/* Header */}
        <header className="mb-4">
          <h1 className="display-4 mb-3">{post.title}</h1>
          <div className="d-flex align-items-center text-muted mb-4">
            <User size={20} className="me-2" />
            <span className="me-3">{post.author.name}</span>
            <Clock size={20} className="me-2" />
            {/* <span>{post.readTime}</span> */}
          </div>
        </header>

        {/* Featured Image */}
        {/* <div className="position-relative mb-4" style={{ height: "400px" }}>
          <Image
           src={post.coverImage?.url || "/images/no-image.png"}
            alt={post.title}
            fill
            style={{ objectFit: "cover" }}
            className="rounded"
          />
        </div> */}

        {/* Content */}
        <div
          className="blog-content mb-5"
          dangerouslySetInnerHTML={{ __html: post.content.html }}
        />

        {/* Tags */}
        <div className="mb-4">
          {/* {post.tags.map((tag) => (
            <Link
              key={tag}
              href={`/tag/${tag.toLowerCase().replace(" ", "-")}`}
              className="badge bg-secondary text-decoration-none me-2"
            >
              {tag}
            </Link>
          ))} */}
        </div>

        {/* Engagement Section */}
        <div className="d-flex align-items-center mb-5">
          <button
            className="btn btn-outline-primary me-3"
            // onClick={() => setLikes(likes + 1)}
          >
            <ThumbsUp size={20} className="me-2" />4 Likes
          </button>
          <button
            className="btn btn-outline-primary me-3"
            // onClick={() => setShowCommentForm(!showCommentForm)}
          >
            <MessageSquare size={20} className="me-2" />
            Comments
          </button>
          <button className="btn btn-outline-primary">
            <Share2 size={20} className="me-2" />
            Share
          </button>
        </div>

        {/* Comment Form */}
        {/* {showCommentForm && (
          <div className="card mb-5">
            <div className="card-body">
              <h3 className="h5 mb-4">Leave a Comment</h3>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" id="name" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="comment" className="form-label">Comment</label>
                  <textarea className="form-control" id="comment" rows={4} required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit Comment</button>
              </form>
            </div>
          </div>
        )} */}

        {/* Author Bio */}
        <div className="card mb-5">
          <div className="card-body">
            <div className="d-flex align-items-center">
              <Image
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
                alt={post.author.profilePicture}
                width={80}
                height={80}
                className="rounded-circle me-3"
              />
              <div>
                <h3 className="h5 mb-2">{post.author.name}</h3>
                <p className="mb-0">
                  Technical writer and web developer with over 5 years of
                  experience in creating content for developers.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        <section>
          <h2 className="h3 mb-4">Related Posts</h2>
          <div className="row">
            {relatedPosts.map((relatedPost) => (
              <div key={relatedPost.id} className="col-md-6 mb-4">
                <div className="card h-100">
                  <div
                    className="position-relative"
                    style={{ height: "200px" }}
                  >
                    <Image
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      fill
                      style={{ objectFit: "cover" }}
                      className="card-img-top"
                    />
                  </div>
                  <div className="card-body">
                    <h3 className="h5 card-title">{relatedPost.title}</h3>
                    <div className="d-flex align-items-center text-muted">
                      <User size={16} className="me-2" />
                      <span className="me-3">{relatedPost.author}</span>
                      <Clock size={16} className="me-2" />
                      <span>{relatedPost.readTime}</span>
                    </div>
                    <Link
                      href={`/post/${relatedPost.id}`}
                      className="btn btn-link px-0"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
}
