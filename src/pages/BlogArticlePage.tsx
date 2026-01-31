import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useLanguage } from '../contexts/LanguageContext';

export function BlogArticlePage() {
  const navigate = useNavigate();
  const { language } = useLanguage();

  const t = {
    backToBlog: language === 'zh' ? '返回博客' : 'Back to Blog',
    insights: language === 'zh' ? '洞察' : 'Insights',
    minRead: language === 'zh' ? '分钟阅读' : 'min read',
    shareArticle: language === 'zh' ? '分享文章' : 'Share Article',
  };

  const article = {
    title: '为什么人类永远需要音乐？',
    titleEn: 'Why Do Humans Always Need Music?',
    date: 'Jan 11',
    category: t.insights,
    readTime: language === 'zh' ? '4分钟阅读' : '4 min read',
    image: 'https://images.unsplash.com/photo-1617994452722-4145e196248b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHdhdmVzJTIwZW1vdGlvbnxlbnwxfHx8fDE3NjgyMzAxMTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
  };

  const displayTitle = language === 'zh' ? article.title : article.titleEn;

  return (
    <div className="min-h-screen bg-black pt-24">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-8 lg:px-16 py-8">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          onClick={() => navigate('/blog')}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm uppercase tracking-wide">{t.backToBlog}</span>
        </motion.button>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-8 lg:px-16 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-8"
        >
          {/* Meta Info */}
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <span className="uppercase tracking-wide">{article.category}</span>
            <span>•</span>
            <span>{article.readTime}</span>
            <span>•</span>
            <span>{article.date}</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[0.95]">
            {displayTitle}
          </h1>

          {/* Featured Image */}
          <div className="aspect-[16/9] overflow-hidden bg-zinc-950 border border-white/10">
            <ImageWithFallback
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            <div className="text-lg text-gray-300 leading-relaxed space-y-6">
              {language === 'zh' ? (
                <>
                  <p>
                    地铁的晃动与耳机里的节拍不经意地合上了拍点；健身房的每一滴汗水，都敲出属于自己的节奏；午后的咖啡馆，思绪被轻盈的旋律托起；舞池的灯光闪烁中，身体在低频里找回最本能的律动；一个人的房间，总有几首歌陪你度过数不清的夜晚。无论我们身在何处，音乐仿佛都在场。音乐不仅是一种艺术，更是人类最古老、最底层的生存方式。它让我们理解自己、连接他人，也让我们在不断变化的世界里找到自己的位置。而在今天，音乐还有另一个意义：它是一种我们正在重新夺回的能力。
                  </p>

                  <h2 className="text-3xl tracking-tight mt-12 mb-6">一、音乐是写入人类身体的"生理节律"</h2>
                  <p>
                    音乐并非被发明，它更像是被发现的。在自然的脉动里，在风声、潮汐与鸟鸣的节奏里，在我们自身的呼吸与心跳里，音乐一直都在，它是人类与生俱来的语言。心跳的节拍，呼吸的节奏,绪的波动起伏。音乐不过是把这些深藏于身体里的节律，转译了出来。科学早已证明：节奏能牵动心率，旋律能让压力慢慢松开，而和声甚至能改变大脑的连通方式。这意味着，我们不是"喜欢"音乐，而是"需要"音乐。语言有隔阂，文化会迁移，工具会更新，但刻在DNA中的节律不会变。你一定有过不经意间被一段旋律所打动的瞬间，那是你恰好对上了它的频率，那一刻，你听见的不是音乐，而是自己的声音。
                  </p>

                  <h2 className="text-3xl tracking-tight mt-12 mb-6">二、音乐让我们重新连接自己</h2>
                  <p>
                    我们生活在一个被工具理性推着前进的时代，信息增长总比情绪出口更快。明确的事越来越多，不明确的感受却越来越难安放。当世界变得不可捉摸，我们比任何时候都需要通过音乐来安放自身。焦虑、孤独、疲惫、困顿……情绪并不总是清晰的，音乐是帮我们述说无法言说之物的媒介，它无法代替我们言说，却能帮我们找到本来就存在的声音。在音乐中，我们才能更清晰地听到自身的声音。当低频脉动贴着身体推进、当旋律与呼吸对齐、当鼓点让你的步伐踏进一种新的节奏，那些无法命名的情绪，终于找到了去处，我们能在共振中完成一次深层的释放。只要我们还有失落、渴望、抗争、梦想和爱，音乐就有存在的理由。
                  </p>

                  <h2 className="text-3xl tracking-tight mt-12 mb-6">三、音乐重建人与人的连接</h2>
                  <p>
                    从原始部落的击鼓，到宗教仪式的吟唱，从篝火旁的齐声，到舞池里的跳动，音乐自古以来便是我们创造社群、共享情绪、建立连接的方式。现代人看似彼此靠得更近，心却更容易孤独。人们建起一道道围墙，在音符的撞击下，那堵墙轰然倒塌。音乐作为表达情感的方式，和讲述事实的语言不同，它提供给我们一个纯粹的情绪结构，我们把身体交给音乐，它把情绪还给我们。音乐有着跨越语言和文化的能力。你或许体验过在音乐节或舞池中，人们一起跟随音乐跳动的时刻。尽管不认识彼此，但高潮来临时，人们会在同一个瞬间感受到那股能量。这是一场钢筋水泥森林里的电子萨满仪式，在合成器的光影里、在鼓点穿透空间的节奏里，人类暂时变得更接近彼此，也更接近自己。我们在节奏中同步，在旋律中理解，在情绪中靠近。无论你来自哪里、说着哪种语言、正经历怎样的生活，那一刻，在相似的频率里，我们照见对方的脸，认出了彼此的样子。我们从未如此紧密相连。原来，我们彼此并无分别。
                  </p>

                  <h2 className="text-3xl tracking-tight mt-12 mb-6">四、音乐帮助我们感受世界</h2>
                  <p>
                    压力、不确定感、情绪疲惫、身份焦虑……现代人承受的负荷从未减少。时代的变化越来越快，不确定性像潮水一样不断涌来。我们无法控制世界的转向，但至少，我们可以在一首歌的时间里给世界按下暂停键。音乐并非逃避现实的方式，它提供了可以"短暂躲藏"的虚构空间。三分钟、一张专辑、一段loop，都能让人从日常的重量中抽离出来。它创造出一个最微小的宇宙，在其中，你孕育出重新面对现实的能。它是重启，是调频，是通道，是自我修复。有时候，一段旋律能触发听觉上的普鲁斯特效应，它是记忆最忠诚的容器，你可能已经忘记了一个名字、一个日期、一个地点，但你不会忘记某时某刻一首歌带给你的感受。旋律伴随着一次离家、一次心碎，某次旅行、某个夏天的风、某段被你遗忘在深处的闪光时刻，但只要音乐再次响起，遥远的记忆就会重现。你可以瞬间回到一个城市、一段关系或一段已经忘却的人生。这时，记忆似乎保留了所有的细节：温度、心跳、渴望与不安、悲伤与告别。它比语言更忠诚地记住我们是谁。在某些强烈的感受袭来时，我们时常叹息语言的有限性。而音乐，恰好填补了语言的空白，它不可被言说，却超越时间和空间，从中我们可以窥见无限。如果有一天，我们失去了文字,音乐会继续为我们言说这个世界。
                  </p>

                  <h2 className="text-3xl tracking-tight mt-12 mb-6">五、但今天的音乐工具，还远远不够</h2>
                  <p>
                    尽管我们比任何时代拥有更多音乐，是的，我们拥有着更丰富的播放器、更多的选择、更聪明的算法。但音乐创作仍然被困在专业主义的边界里：DJ有 DJ的系统，制作人需要复杂的DAW与插件，冥想导师、瑜伽室、咖啡馆、品牌商业项目，都需要用音乐创造氛围，却没有能力与资源。内容创作者缺版权音乐，艺术家缺灵感，品牌缺风格，行业缺连接。音乐明明人人需要，却不是人人能够参与创造。于是，我们开始思考：如果音乐是所有人的语言，那么创作也应该属于所有人，也许音乐可以成为一门人人都可以讲的语言。
                  </p>

                  <p>
                    这正是SONICITE想做的事情，我们不是在做一个 DJ 工具，我们在重新设计"音乐 × AI × 人"的关系。在SONICITE的世界里：音乐不再是"播放"，而是"共创"；情绪不再只是被音乐影响，而是能被用户塑造；创作不再是专业身份，而是一种生活方式。你可以：在地铁的晃动里截取一段节奏，扩展成鼓组把深夜的情绪织成一段旋律在健身房调节自己的能量曲线在舞池里实时塑造下一秒的情绪高潮在任何场景，用声音描述当下的自己音乐将再次变得触手可及、随时可生长、随时可分享。
                  </p>

                  <p className="text-xl text-gray-200 border-l-4 border-purple-500 pl-6 my-12">
                    科技不是来替代情绪，而是让情绪更自由。正因如此，人类永远需要音乐，而我们正在让音乐更接近人类。而未来的音乐，也不应该被限制在工具、界面、专业技能里。未来的音乐，是流动的、即时的、开放的、生命化的。它和人的心跳一样自然，一样不可替代，一样值得被创造。而音乐的未来，由我们一同创造。
                  </p>
                </>
              ) : (
                <>
                  <p>
                    The subway sways in sync with the beats in your earphones; every drop of sweat in the gym echoes its own rhythm; afternoon cafe thoughts are lifted by gentle melodies; on the dance floor under flashing lights, your body rediscovers its most primal groove in the low frequencies; in the solitude of your room, a few songs accompany you through countless nights. Wherever we are, music seems to be present. Music is not just an art form—it's humanity's oldest and most fundamental way of existing. It helps us understand ourselves, connect with others, and find our place in an ever-changing world. And today, music carries another meaning: it's a capability we're reclaiming.
                  </p>

                  <h2 className="text-3xl tracking-tight mt-12 mb-6">I. Music is the "Physiological Rhythm" Written into the Human Body</h2>
                  <p>
                    Music wasn't invented; it was discovered. In the pulse of nature, in the rhythm of wind, tides, and birdsong, in our own breathing and heartbeat, music has always been there—it is humanity's innate language. The beat of the heart, the rhythm of breath, the rise and fall of emotions. Music simply translates these rhythms hidden deep within our bodies. Science has long proven that rhythm can influence heart rate, melodies can ease stress, and harmonies can even alter brain connectivity. This means we don't just "like" music—we "need" it. Languages have barriers, cultures migrate, tools evolve, but the rhythms encoded in our DNA remain constant. You've surely experienced a moment when a melody unexpectedly moved you—that's when you tuned into its frequency. In that moment, what you heard wasn't music, but your own voice.
                  </p>

                  <h2 className="text-3xl tracking-tight mt-12 mb-6">II. Music Reconnects Us with Ourselves</h2>
                  <p>
                    We live in an era driven by instrumental rationality, where information grows faster than emotional outlets. Clear facts multiply, yet unclear feelings become harder to place. When the world becomes incomprehensible, we need music more than ever to anchor ourselves. Anxiety, loneliness, exhaustion, confusion—emotions aren't always clear. Music is the medium that helps us articulate the inexpressible. It doesn't speak for us, but helps us find the voice that was always there. In music, we hear ourselves more clearly. When low-frequency pulses move through our bodies, when melodies align with our breathing, when drum beats guide our steps into a new rhythm, those unnamed emotions finally find their place. We complete a deep release through resonance. As long as we still feel loss, desire, resistance, dreams, and love, music has a reason to exist.
                  </p>

                  <h2 className="text-3xl tracking-tight mt-12 mb-6">III. Music Rebuilds Human Connection</h2>
                  <p>
                    From tribal drumming to religious chants, from campfire singing to dance floor movement, music has always been our way of creating community, sharing emotions, and building connections. Modern people seem closer to each other physically, yet hearts are more easily lonely. People build walls, and in the collision of notes, those walls come crashing down. Unlike language that conveys facts, music as emotional expression provides us with a pure emotional structure. We give our bodies to music, and it returns our emotions to us. Music has the ability to transcend language and culture. You may have experienced moments at music festivals or on dance floors where people move together with the music. Though strangers, when the climax hits, everyone feels that energy at the same instant. This is an electronic shamanic ritual in the concrete jungle—in the light of synthesizers, in the rhythm of beats penetrating space, humans temporarily become closer to each other and to themselves. We synchronize in rhythm, understand through melody, and approach each other through emotion. No matter where you're from, what language you speak, or what life you're living, in that moment, at similar frequencies, we see each other's faces and recognize one another. We've never been so intimately connected. It turns out we're not so different after all.
                  </p>

                  <h2 className="text-3xl tracking-tight mt-12 mb-6">IV. Music Helps Us Experience the World</h2>
                  <p>
                    Stress, uncertainty, emotional exhaustion, identity anxiety—the burden modern people carry has never decreased. The pace of change accelerates, uncertainty rushes in like tides. We can't control where the world turns, but at least we can press pause on the world for the duration of a song. Music isn't an escape from reality; it provides a space for "temporary hiding." Three minutes, an album, a loop—all can lift us from the weight of daily life. It creates the smallest universe where you cultivate the ability to face reality again. It's a reset, a retuning, a channel, a self-repair. Sometimes a melody can trigger an auditory Proustian effect. Music is memory's most loyal container. You might forget a name, a date, a place, but you won't forget how a song made you feel at a certain moment. Melodies accompany leaving home, heartbreak, a journey, a summer breeze, a brilliant moment you'd buried deep inside. But once the music plays again, distant memories resurface. You can instantly return to a city, a relationship, a forgotten chapter of life. At that moment, memory seems to preserve every detail: temperature, heartbeat, longing and unease, sadness and farewell. Music remembers who we are more faithfully than language. When intense feelings strike, we often lament language's limitations. Music fills that gap language leaves. It cannot be spoken, yet it transcends time and space, allowing us to glimpse the infinite. If one day we lose words, music will continue to speak this world for us.
                  </p>

                  <h2 className="text-3xl tracking-tight mt-12 mb-6">V. But Today's Music Tools Are Still Far from Enough</h2>
                  <p>
                    Though we have more music than any era before—yes, we have richer players, more choices, smarter algorithms—music creation remains trapped within the boundaries of professionalism. DJs have DJ systems, producers need complex DAWs and plugins, meditation instructors, yoga studios, cafes, and brand commercial projects all need music to create atmosphere, yet lack the ability and resources. Content creators lack licensed music, artists lack inspiration, brands lack style, industries lack connection. Music is clearly needed by everyone, yet not everyone can participate in creating it. So we began to think: if music is everyone's language, then creation should belong to everyone too. Perhaps music can become a language everyone can speak.
                  </p>

                  <p>
                    This is exactly what SONICITE aims to do. We're not building a DJ tool; we're redesigning the relationship between "Music × AI × Human." In SONICITE's world: music is no longer about "playback" but "co-creation"; emotions are no longer just influenced by music but shaped by users; creation is no longer a professional identity but a lifestyle. You can: capture a rhythm from subway movements and expand it into drum patterns, weave late-night emotions into a melody, adjust your energy curve at the gym, shape the next emotional peak in real-time on the dance floor, describe your current self with sound in any scenario. Music will once again become accessible, constantly growable, and instantly shareable.
                  </p>

                  <p className="text-xl text-gray-200 border-l-4 border-purple-500 pl-6 my-12">
                    Technology isn't here to replace emotions—it's here to set them free. That's why humans will always need music, and we're making music more accessible to humanity. The future of music shouldn't be confined to tools, interfaces, or professional skills. The music of the future is fluid, immediate, open, and alive. It's as natural as your heartbeat, as irreplaceable, and as worthy of creation. And the future of music will be created by all of us together.
                  </p>
                </>
              )}
            </div>
          </div>
        </motion.div>
      </article>
    </div>
  );
}