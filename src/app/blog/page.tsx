import { getBlogPosts } from '@/lib/content'
import Image from 'next/image'
import Link from 'next/link'

export default function BlogPage() {
  const posts = getBlogPosts()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      
      <div className="space-y-6">
        {posts.map((post) => (
          <article key={post._meta.path} className="border border-white/10 rounded-lg p-6 hover:bg-white/5 transition-colors">
            <div className="flex gap-6">
              {post.cover && (
                <div className="w-48 h-32 relative overflow-hidden rounded-lg flex-shrink-0">
                  <Image
                    src={post.cover}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              
              <div className="flex-grow">
                <a href={`/blog/${post._meta.path.split('/').pop()?.replace('.md', '')}`}>
                  <h2 className="text-2xl font-bold mb-2 hover:text-blue-400 transition-colors">
                    {post.title}
                  </h2>
                </a>
                
                <p className="text-gray-400 mb-3">{post.description}</p>
                
                <time className="text-sm text-gray-500">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}