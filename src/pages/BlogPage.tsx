import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';

export function BlogPage() {
  const { language } = useLanguage();
  const navigate = useNavigate();

  const t = {
    journal: language === 'zh' ? 'SONICITE 期刊' : 'SONICITE Journal',
    title: language === 'zh' ? '洞察与故事' : 'Insights & Stories',
    subtitle: language === 'zh' 
      ? '深入探讨音乐智能、创意工作流程和声音的未来。' 
      : 'Deep dives into music intelligence, creative workflows, and the future of sound.',
    featuredArticle: language === 'zh' ? '精选文章' : 'Featured Article',
    readFullArticle: language === 'zh' ? '阅读全文' : 'Read Full Article',
    latestArticles: language === 'zh' ? '最新文章' : 'Latest Articles',
    readMore: language === 'zh' ? '阅读更多' : 'Read More',
    loadMore: language === 'zh' ? '加载更多文章' : 'Load More Articles',
    insights: language === 'zh' ? '洞察' : 'Insights',
    minRead: language === 'zh' ? '分钟阅读' : 'min read',
  };

  const allPosts = [
    {
      id: 1,
      title: '为什么人类永远需要音乐？',
      titleEn: 'Why Do Humans Always Need Music?',
      excerpt: '从本能到未来，声音如何构成我们共同的世界。地铁的晃动与耳机里的节拍不经意地合上了拍点；健身房的每一滴汗水，都敲出属于自己的节奏；午后的咖啡馆，思绪被轻盈的旋律托起；舞池的灯光闪烁中，身体在低频里找回最本能的律动...',
      excerptEn: 'From instinct to the future, how sound shapes our shared world. The subway sways in sync with the beats in your earphones; every drop of sweat in the gym echoes its own rhythm; afternoon cafe thoughts are lifted by gentle melodies...',
      date: 'Jan 11',
      category: t.insights,
      readTime: language === 'zh' ? '4分钟阅读' : '4 min read',
      image: 'https://images.unsplash.com/photo-1617994452722-4145e196248b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHdhdmVzJTIwZW1vdGlvbnxlbnwxfHx8fDE3NjgyMzAxMTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      fullContent: `地铁的晃动与耳机里的节拍不经意地合上了拍点；健身房的每一滴汗水，都敲出属于自己的节奏；午后的咖啡馆，思绪被轻盈的旋律托起；舞池的灯光闪烁中，身体在低频里找回最本能的律动；一个人的房间，总有几首歌陪你度过数不清的夜晚。无论我们身在何处，音乐仿佛都在场。音乐不仅是一种艺术，更是人类最古老、最底层的生存方式。它让我们理解自己、连接他人，也让我们在不断变化的世界里找到自己的位置。而在今天，音乐还有另一个意义：它是一种我们正在重新夺回的能力。

一、音乐是写入人类身体的"生理节律"
音乐并非被发明，它更像是被发现的。在自然的脉动里，在风声、潮汐与鸟鸣的节奏里，在我们自身的呼吸与心跳里，音乐一直都在，它是人类与生俱来的语言。心跳的节拍，呼吸的节奏，情绪的波动起伏。音乐不过是把这些深藏于身体里的节律，转译了出来。科学早已证明：节奏能牵动心率，旋律能让压力慢慢松开，而和声甚至能改变大脑的连通方式。这意味着，我们不是"喜欢"音乐，而是"需要"音乐。语言有隔阂，文化会迁移，工具会更新，但刻在DNA中的节律不会变。你一定有过不经意间被一段旋律所打动的瞬间，那是你恰好对上了它的频率，那一刻，你听见的不是音乐，而是自己的声音。

二、音乐让我们重新连接自己
我们生活在一个被工具理性推着前进的时代，信息增长总比情绪出口更快。明确的事越来越多，不明确的感受却越来越难安放。当世界变得不可捉摸，我们比任何时候都需要通过音乐来安放自身。焦虑、孤独、疲惫、困顿……情绪并不总是清晰的，音乐是帮我们述说无法言说之物的媒介，它无法代替我们言说，却能帮我们找到本来就存在的声音。在音乐中，我们才能更清晰地听到自身的声音。当低频脉动贴着身体推进、当旋律与呼吸对齐、当鼓点让你的步伐踏进一种新的节奏，那些无法命名的情绪，终于找到了去处，我们能在共振中完成一次深层的释放。只要我们还有失落、渴望、抗争、梦想和爱，音乐就有存在的理由。

三、音乐重建人与人的连接
从原始部落的击鼓，到宗教仪式的吟唱，从篝火旁的齐声，到舞池里的跳动，音乐自古以来便是我们创造社群、共享情绪、建立连接的方式。现代人看似彼此靠得更近，心却更容易孤独。人们建起一道道围墙，在音符的撞击下，那堵墙轰然倒塌。音乐作为表达情感的方式，和讲述事实的语言不同，它提供给我们一个纯粹的情绪结构，我们把身体交给音乐，它把情绪还给我们。音乐有着跨越语言和文化的能力。你或许体验过在音乐节或舞池中，人们一起跟随音乐跳动的时刻。尽管不认识彼此，但高潮来临时，人们会在同一个瞬间感受到那股能量。这是一场钢筋水泥森林里的电子萨满仪式，在合成器的光影里、在鼓点穿透空间的节奏里，人类暂时变得更接近彼此，也更接近自己。我们在节奏中同步，在旋律中理解，在情绪中靠近。无论你来自哪里、说着哪种语言、正经历怎样的生活，那一刻，在相似的频率里，我们照见对方的脸，认出了彼此的样子。我们从未如此紧密相连。原来，我们彼此并无分别。

四、音乐帮助我们感受世界
压力、不确定感、情绪疲惫、身份焦虑……现代人承受的负荷从未减少。时代的变化越来越快，不确定性像潮水一样不断涌来。我们无法控制世界的转向，但至少，我们可以在一首歌的时间里给世界按下暂停键。音乐并非逃避现实的方式，它提供了可以"短暂躲藏"的虚构空间。三分钟、一张专辑、一段loop，都能让人从日常的重量中抽离出来。它创造出一个最微小的宇宙，在其中，你孕育出重新面对现实的能力。它是重启，是调频，是通道，是自我修复。有时候，一段旋律能触发听觉上的普鲁斯特效应，它是记忆最忠诚的容器，你可能已经忘记了一个名字、一个日期、一个地点，但你不会忘记某时某刻一首歌带给你的感受。旋律伴随着一次离家、一次心碎，某次旅行、某个夏天的风、某段被你遗忘在深处的闪光时刻，但只要音乐再次响起，遥远的记忆就会重现。你可以瞬间回到一个城市、一段关系或一段已经忘却的人生。这时，记忆似乎保留了所有的细节：温度、心跳、渴望与不安、悲伤与告别。它比语言更忠诚地记住我们是谁。在某些强烈的感受袭来时，我们时常叹息语言的有限性。而音乐，恰好填补了语言的空白，它不可被言说，却超越时间和空间，从中我们可以窥见无限。如果有一天，我们失去了文字，音乐会继续为我们言说这个世界。

五、但今天的音乐工具，还远远不够
尽管我们比任何时代拥有更多音乐，是的，我们拥有着更丰富的播放器、更多的选择、更聪明的算法。但音乐创作仍然被困在专业主义的边界里：DJ有 DJ的系统，制作人需要复杂的DAW与插件，冥想导师、瑜伽室、咖啡馆、品牌商业项目，都需要用音乐创造氛围，却没有能力与资源。内容创作者缺版权音乐，艺术家缺灵感，品牌缺风格，行业缺连接。音乐明明人人需要，却不是人人能够参与创造。于是，我们开始思考：如果音乐是所有人的语言，那么创也应该属于所有人，也许音乐可以成为一门人人都可以讲的语言。

这正是SONICITE想做的事情，我们不是在做一个 DJ 工具，我们在重新设计"音乐 × AI × 人"的关系。在SONICITE的世界里：音乐不再是"播放"，而是"共创"；情绪不再只是被音乐影响，而是能被用户塑造；创作不再是专业身份，而是一种生活方式。你可以：在地铁的晃动里截取一段节奏，扩展成鼓组把深夜的情绪织成一段旋律在健身房调节自己的能量曲线在舞池里实时塑造下一秒的情绪高潮在任何场景，用声音描述当下的自己音乐将再次变得手可及、随时可生长、随时可分享。

科技不是来替代情绪，而是让情绪更自由。正因如此，人类永远需要音乐，而我们正在让音乐更接近人类。而未来的音乐，也不应该被限制在工具、界面、专业技能里。未来的音乐，是流动的、即时的、开放的、生命化的。它和人的心跳一样自然，一样不可替代，一样值得被创造。而音乐的未来，由我们一同创造。`,
      featured: true,
    },
  ];

  const categories = ['All', 'Research', 'Technology', 'Insights', 'Tutorial', 'History'];

  return (
    <div className="min-h-screen bg-black pt-24">
      {/* Hero Section */}
      <section className="relative bg-black py-20 border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="text-sm tracking-[0.3em] text-gray-500 uppercase mb-6">
              {t.journal}
            </div>
            <h1 className="text-5xl sm:text-7xl tracking-tight leading-[0.95] mb-8">
              {t.title}
            </h1>
            <p className="text-xl text-gray-400">
              {t.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="bg-black py-16">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="grid lg:grid-cols-2 gap-12 items-center group cursor-pointer"
          >
            <div className="order-2 lg:order-1 space-y-6">
              <div className="inline-block px-4 py-2 bg-white/5 border border-white/10 text-xs tracking-[0.2em] uppercase text-gray-400">
                {t.featuredArticle}
              </div>
              
              <h2 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[0.95] group-hover:text-gray-300 transition-colors">
                {language === 'zh' ? allPosts.find(post => post.featured)?.title : allPosts.find(post => post.featured)?.titleEn}
              </h2>

              <p className="text-lg text-gray-400 leading-relaxed">
                {language === 'zh' ? allPosts.find(post => post.featured)?.excerpt : allPosts.find(post => post.featured)?.excerptEn}
              </p>

              <div className="flex items-center gap-6 text-sm text-gray-500">
                <span className="uppercase tracking-wide">{allPosts.find(post => post.featured)?.category}</span>
                <span>•</span>
                <span>{allPosts.find(post => post.featured)?.readTime}</span>
                <span>•</span>
                <span>{allPosts.find(post => post.featured)?.date}</span>
              </div>

              <div className="pt-4">
                <button className="flex items-center gap-3 text-white group-hover:gap-5 transition-all cursor-pointer" onClick={() => navigate(`/blog/${allPosts.find(post => post.featured)?.id}`)}>
                  <span className="text-sm tracking-wide uppercase">{t.readFullArticle}</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="order-1 lg:order-2 aspect-[4/3] overflow-hidden bg-zinc-950 border border-white/10">
              <ImageWithFallback
                src={allPosts.find(post => post.featured)?.image}
                alt={allPosts.find(post => post.featured)?.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="bg-black py-16">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <h3 className="text-2xl tracking-tight">{t.latestArticles}</h3>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPosts.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5 + index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group cursor-pointer"
                onClick={() => navigate(`/blog/${article.id}`)}
              >
                <div className="relative overflow-hidden bg-zinc-950 border border-white/5 hover:border-white/20 transition-all duration-500">
                  <div className="aspect-[16/10] overflow-hidden">
                    <ImageWithFallback
                      src={article.image}
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
                      {language === 'zh' ? article.title : article.titleEn}
                    </h3>

                    <p className="text-sm text-gray-500 leading-relaxed">
                      {language === 'zh' ? article.excerpt : article.excerptEn}
                    </p>

                    <div className="flex items-center justify-between pt-4">
                      <span className="text-xs text-gray-600">{article.date}</span>
                      <div className="flex items-center gap-2 text-sm text-gray-400 group-hover:text-white transition-colors">
                        {t.readMore}
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
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-center mt-16"
          >
            <button className="px-10 py-4 border-2 border-white/10 text-white text-sm tracking-wide uppercase hover:border-white/30 hover:bg-white/5 transition-all">
              {t.loadMore}
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}