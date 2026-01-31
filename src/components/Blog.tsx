import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';

export function Blog() {
  const posts = [
    {
      id: 1,
      title: 'The Neuroscience of Music: How Sound Shapes Human Emotion',
      excerpt: 'Explore the fascinating connection between music frequencies, brain chemistry, and emotional responses. Discover why certain tracks move us to tears while others energize our souls.',
      date: 'November 28, 2025',
      category: 'Research',
      readTime: '8 min read',
      image: 'music neuroscience',
    },
    {
      id: 2,
      title: 'AI in Music Production: Evolution or Revolution?',
      excerpt: 'From beatmatching algorithms to generative composition, artificial intelligence is reshaping how we create and experience music. What does this mean for artists?',
      date: 'November 15, 2025',
      category: 'Technology',
      readTime: '6 min read',
      image: 'music technology',
    },
    {
      id: 3,
      title: 'The Art of Flow State: DJing Beyond Technical Perfection',
      excerpt: 'Technical skills are essential, but the magic happens when DJs transcend the mechanics and enter a state of pure creative flow. Learn how to unlock your potential.',
      date: 'November 8, 2025',
      category: 'Insights',
      readTime: '7 min read',
      image: 'dj performance',
    },
  ];

  return (
    <section id="blog" className="relative bg-black py-32">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="text-sm tracking-[0.3em] text-gray-500 uppercase mb-6">
            Insights & Stories
          </div>
          <h2 className="text-4xl sm:text-5xl tracking-tight leading-[0.95] mb-6">
            From the SONICITE Journal
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Deep dives into music intelligence, creative workflows, and the future of sound.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden bg-zinc-950 border border-white/5 hover:border-white/20 transition-all duration-500">
                <div className="aspect-[16/10] overflow-hidden">
                  <ImageWithFallback
                    src={`https://source.unsplash.com/800x500/?${encodeURIComponent(article.image)}`}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                <div className="p-8 space-y-4">
                  <div className="flex items-center gap-4 text-xs tracking-wide uppercase text-gray-500">
                    <span>{article.category}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="text-xl leading-tight group-hover:text-gray-300 transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-sm text-gray-500 leading-relaxed">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4">
                    <span className="text-xs text-gray-600">{article.date}</span>
                    <div className="flex items-center gap-2 text-sm text-gray-400 group-hover:text-white transition-colors">
                      Read More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="px-10 py-4 border-2 border-white/10 text-white text-sm tracking-wide uppercase hover:border-white/30 hover:bg-white/5 transition-all">
            View All Articles
          </button>
        </motion.div>
      </div>
    </section>
  );
}