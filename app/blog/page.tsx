import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "components/ui/card";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Software Development: AI and Machine Learning",
    excerpt: "Explore how artificial intelligence and machine learning are revolutionizing the software development landscape.",
    date: "2024-03-15",
    readTime: "8 min read",
    slug: "future-of-software-development"
  },
  {
    id: 2,
    title: "Best Practices for Modern Web Development",
    excerpt: "Learn about the latest best practices and tools for building modern, scalable web applications.",
    date: "2024-03-12",
    readTime: "10 min read",
    slug: "modern-web-development-practices"
  },
  {
    id: 3,
    title: "Microservices vs Monolithic Architecture",
    excerpt: "A comprehensive comparison of microservices and monolithic architectures for modern applications.",
    date: "2024-03-10",
    readTime: "12 min read",
    slug: "microservices-vs-monolithic"
  },
  {
    id: 4,
    title: "Securing Your Web Applications",
    excerpt: "Essential security practices and techniques to protect your web applications from common threats.",
    date: "2024-03-08",
    readTime: "15 min read",
    slug: "web-application-security"
  },
  {
    id: 5,
    title: "The Rise of Edge Computing",
    excerpt: "Understanding edge computing and its impact on modern software architecture.",
    date: "2024-03-05",
    readTime: "7 min read",
    slug: "edge-computing-explained"
  },
  {
    id: 6,
    title: "DevOps Best Practices for 2024",
    excerpt: "Stay up-to-date with the latest DevOps practices and tools for efficient software delivery.",
    date: "2024-03-01",
    readTime: "11 min read",
    slug: "devops-best-practices-2024"
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Latest Blog Posts</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest insights, tutorials, and news about software development and technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl mb-2">
                  <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                    {post.title}
                  </Link>
                </CardTitle>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                >
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
