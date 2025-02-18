import { fetchHashnodeBlogs } from "@/lib/hasnode";
import { Post } from "@/types/blogs";
import { Clock, User } from "lucide-react";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FeaturedPost = async () => {
  const featuredPosts: Post[] = await fetchHashnodeBlogs();
  // get random 4 posts
  const posts: Post[] = featuredPosts
    ?.sort(() => Math.random() - Math.random())
    .slice(0, 4);
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">Featured Posts</h2>
        <div className="row g-4">
          {posts?.map((post) => (
            <div key={post.id} className="col-md-6 col-lg-3">
              <div className="card h-100 featured-post">
                <div style={{ aspectRatio: "16/12", position: "relative" }}>
                  <Image
                    src={post.coverImage?.url || "/images/no-image.png"}
                    alt={post.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="card-body">
                  <Link href={`/post/${post.slug}`} className="card-title">{post.title}</Link>
                  <p className="card-text">{post.brief?.slice(0, 100)}</p>
                  <div className="d-flex align-items-start text-muted">
                    <div>
                      <User size={20} className="me-2" />
                    </div>
                    <div>
                      <small>{post.author.name}</small>
                      <div>
                        <Clock size={16} className="" />
                        <small>{moment(post.publishedAt).fromNow()}</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPost;
