import { notFound } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

const categories = ["technology", "culture", "growth", "business", "lifestyle"];

const categoryPosts = {
  technology: [
    {
      id: 1,
      title: "The Future of Artificial Intelligence",
      excerpt: "Exploring the latest developments in AI and machine learning",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Web Development Trends 2024",
      excerpt: "The most important web technologies to watch this year",
      image:
        "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ],
  culture: [
    {
      id: 3,
      title: "The Evolution of Digital Art",
      excerpt: "How technology is reshaping artistic expression",
      image:
        "https://images.unsplash.com/photo-1647427060118-4911c9821b82?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ],
  growth: [
    {
      id: 4,
      title: "Productivity in the Digital Age",
      excerpt: "Strategies for staying focused in a connected world",
      image:
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ],
  business: [
    {
      id: 5,
      title: "Digital Transformation Strategies",
      excerpt: "How businesses are adapting to the digital era",
      image:
        "https://images.unsplash.com/photo-1507297230445-ff678f10b524?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ],
  lifestyle: [
    {
      id: 6,
      title: "Sustainable Living in 2024",
      excerpt: "Practical tips for an eco-friendly lifestyle",
      image:
        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ],
};

export default async function CategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;

  if (!categories.includes(slug)) {
    notFound();
  }

  const posts = categoryPosts[slug as keyof typeof categoryPosts];

  return (
    <div className="container mx-auto px-4 py-16 mt-16">
      <div className="mb-8">
        <h1 className="text-4xl font-bold capitalize mb-4">{slug}</h1>
        <p className="text-muted-foreground">
          Explore our latest articles about {slug}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Card
            key={post.id}
            className="overflow-hidden hover:shadow-lg transition-shadow duration-200"
          >
            <CardContent className="p-0">
              <div className="relative aspect-[16/9]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <Badge variant="secondary" className="mb-2 capitalize">
                  {slug}
                </Badge>
                <h2 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">
                  <Link href={`/post/${post.id}`}>{post.title}</Link>
                </h2>
                <p className="text-muted-foreground">{post.excerpt}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
