import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useLanguage } from '../contexts/LanguageContext';
import brendaImage from 'figma:asset/80dc7c4a730e6df4d5b3e682ab2993bf372d711a.png';
import remiImage from 'figma:asset/0abbd33b17dbaf625e9755771da8d6dbf63439b2.png';
import miaImage from 'figma:asset/a463d18496077ebdb51495dc9f43d54328e8246e.png';

export function AboutPage() {
  const { language } = useLanguage();
  
  const t = {
    // Our Story Section
    sectionNumber1: '01',
    ourStory: language === 'zh' ? '我们的故事' : 'Our Story',
    storyTitle: language === 'zh' ? '源于最纯粹的对音乐的热爱' : 'Born from Pure Love of Music',
    storyPara1: language === 'zh' 
      ? '在声音行业，真正稀缺的从来不是声音本身，而是对情绪、能量、结构、音色与场景的判断能力。'
      : 'In the sound industry, what is truly scarce has never been the sound itself, but the ability to judge emotion, energy, structure, timbre, and context.',
    storyPara2: language === 'zh'
      ? '我们自己就是 DJ，也是长期沉浸在音乐里的创作者。在选歌、编排、练习与准备演出的过程中，我们一次次意识到：真正消耗时间与精力的，并不是操作，而是判断——下一首该放什么、怎么接、整套音乐的走向是否成立。'
      : 'We are DJs ourselves, and creators deeply immersed in music. Through the process of selecting tracks, arranging sets, practicing, and preparing performances, we realized time and again: what truly consumes time and energy is not the operation, but the judgment—what to play next, how to transition, and whether the overall musical direction works.',
    storyPara3: language === 'zh'
      ? '这些音乐判断，今天几乎完全依赖经验、感觉与记忆，无法复用、无法解释，也难以被系统性地学习与传承。这正是音乐创作中最隐蔽、却最长期存在的瓶颈。'
      : 'These musical judgments today rely almost entirely on experience, feeling, and memory. They cannot be reused, cannot be explained, and are difficult to learn and pass on systematically. This is the most hidden yet persistent bottleneck in music creation.',
    storyPara4: language === 'zh'
      ? '因此，我们创立了 Sonicite。不是为了替代创作，而是想陪音乐人一起做判断。把那些原本只能靠感觉反复确认的决定，变得更清晰，也更安心。'
      : 'Therefore, we founded Sonicite. Not to replace creation, but to accompany musicians in making judgments. To make those decisions that could only be repeatedly confirmed by feeling become clearer and more assured.',
    storyPara5: language === 'zh'
      ? '我们希望，音乐人不再被无止境的试错消耗，而是把更多时间留给表达、现场和真正热爱的部分。'
      : 'We hope that musicians will no longer be consumed by endless trial and error, but instead spend more time on expression, performance, and what they truly love.',
      
    // Mission & Vision Section
    sectionNumber2: '02',
    missionVision: language === 'zh' ? '使命与愿景' : 'Mission & Vision',
    empowerTitle1: language === 'zh' ? '赋能下一代' : 'Empowering the Next',
    empowerTitle2: language === 'zh' ? '创作者' : 'Generation of Creators',
    ourMission: language === 'zh' ? '我们的使命' : 'Our Mission',
    missionText: language === 'zh'
      ? '通过构建能够在人类层面理解音乐的智能工具，革新音乐创作工作流程。我们消除繁琐的工作，放大创造力，为每位 DJ 和制作人提供完整制作团队的力量。'
      : 'To revolutionize the music creation workflow by building intelligent tools that understand music at a human level. We eliminate the tedious, amplify the creative, and give every DJ and producer the power of a full production team.',
    ourVision: language === 'zh' ? '我们的愿景' : 'Our Vision',
    visionText: language === 'zh'
      ? '未来，每位音乐创作者都能获得世界级的AI辅助。技术与艺术无缝融合。灵感与执行之间的障碍消失，创造力无限流动。'
      : 'A future where every music creator has access to world-class AI assistance. Where technology and artistry merge seamlessly. Where the barrier between inspiration and execution disappears, and creativity flows without limits.',
      
    // Our Belief Section
    sectionNumber3: '03',
    ourBelief: language === 'zh' ? '我们的信念' : 'Our Belief',
    belief1Title: language === 'zh' ? 'AI 应该走进过程，而不是站在终点' : 'AI Should Walk the Process, Not Stand at the Finish Line',
    belief1Desc: language === 'zh'
      ? '好的创作，从来不是一键生成。它来自一次次判断、调整、犹豫与确认。AI 不该替你给出答案，而应该陪你走完这个过程。'
      : 'Good creation has never been about one-click generation. It comes from repeated judgment, adjustment, hesitation, and confirmation. AI should not give you answers, but accompany you through this process.',
    belief2Title: language === 'zh' ? '判断，比作品本身更重要' : 'Judgment is More Important than the Work Itself',
    belief2Desc: language === 'zh'
      ? '做出一首歌很难，但持续做出好作品更难。真正决定创作质量的，不是某一次灵感，而是你一次次做出判断的能力。'
      : 'Creating one song is hard, but consistently creating good work is harder. What truly determines creative quality is not a single moment of inspiration, but your ability to make judgment after judgment.',
    belief3Title: language === 'zh' ? '时间，应该留给审美与表达' : 'Time Should Be Reserved for Aesthetics and Expression',
    belief3Desc: language === 'zh'
      ? '音乐人的时间，不该被反复找歌、试错和整理这类繁琐工作消耗。当判断变得更清晰，创作才会重新变得自由。'
      : 'Musicians\' time should not be consumed by tedious tasks like repeatedly searching for tracks, trial and error, and organizing. When judgment becomes clearer, creation becomes free again.',
    belief4Title: language === 'zh' ? '工具应该理解人，而不是训练人' : 'Tools Should Understand People, Not Train Them',
    belief4Desc: language === 'zh'
      ? '好的工具，不会要求你去适应它的逻辑。Sonicite 会随着你的使用不断理解你，学习你的偏好、判断方式和音乐语言。'
      : 'Good tools don\'t require you to adapt to their logic. Sonicite continuously understands you as you use it, learning your preferences, judgment patterns, and musical language.',
      
    // Our Promise Section
    sectionNumber4: '04',
    ourPromise: language === 'zh' ? '我们的承诺' : 'Our Promise',
    promise1Title: language === 'zh' ? '不会被打断创作节奏' : 'Won\'t Interrupt Your Creative Flow',
    promise1Desc: language === 'zh'
      ? 'Sonicite 的存在，是为了自然融入你的工作流，而不是增加新的步骤或打乱你的思路。'
      : 'Sonicite exists to naturally integrate into your workflow, not to add new steps or disrupt your thinking.',
    promise2Title: language === 'zh' ? '不需要"学会用 AI"' : 'No Need to "Learn AI"',
    promise2Desc: language === 'zh'
      ? '你不必理解复杂的技术或概念，只需按照自己的方式使用音乐，继续你的创作。'
      : 'You don\'t need to understand complex technology or concepts, just use music in your own way and continue creating.',
    promise3Title: language === 'zh' ? '音乐没有标准答案' : 'Music Has No Standard Answer',
    promise3Desc: language === 'zh'
      ? '我们不会试图"纠正"你的选择，而是帮助你看清不同可能性，最终的判断，始终属于你。'
      : 'We won\'t try to "correct" your choices, but help you see different possibilities. The final judgment always belongs to you.',
    promise4Title: language === 'zh' ? '用户体验至上' : 'User Experience First',
    promise4Desc: language === 'zh'
      ? '我们在设计每一个细节时，都尽量减少多余操作，让使用过程自然、顺畅、不打断思路。'
      : 'In designing every detail, we minimize unnecessary operations to make the experience natural, smooth, and non-disruptive.',
      
    // Our Team Section
    sectionNumber5: '05',
    ourTeam: language === 'zh' ? '我们的团队' : 'Our Team',
  };
  
  const values = [
    {
      title: language === 'zh' ? '创新' : 'Innovation',
      description: language === 'zh' 
        ? '我们突破可能性的边界，将前沿 AI 与深度音乐理解相结合。'
        : 'We push the boundaries of what\'s possible, combining cutting-edge AI with deep musical understanding.',
    },
    {
      title: language === 'zh' ? '创造力' : 'Creativity',
      description: language === 'zh'
        ? '音乐是艺术。我们构建放大创造力的工具，而不是取代它。'
        : 'Music is art. We build tools that amplify creativity, not replace it.',
    },
    {
      title: language === 'zh' ? '卓越' : 'Excellence',
      description: language === 'zh'
        ? '从技术到用户体验，每个细节都追求卓越品质。'
        : 'Premium quality in every detail, from our technology to our user experience.',
    },
    {
      title: language === 'zh' ? '社区' : 'Community',
      description: language === 'zh'
        ? '由 DJ 为 DJ 打造。我们倾听、学习，并与我们的社区共同进化。'
        : 'Built by DJs, for DJs. We listen, learn, and evolve with our community.',
    },
  ];

  return (
    <div className="relative bg-black min-h-screen">
      {/* 01 / Our Story */}
      <div className="pt-40 pb-40 bg-black">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              <div>
                <div className="text-sm tracking-[0.3em] text-gray-500 uppercase mb-6">
                  {t.sectionNumber1} / {t.ourStory}
                </div>
                <h2 className="text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-[0.95] mb-12 max-w-4xl">
                  {t.storyTitle}
                </h2>
              </div>
              <div className="space-y-6 text-lg text-gray-400 leading-relaxed max-w-4xl">
                <p>{t.storyPara1}</p>
                <p>{t.storyPara2}</p>
                <p>{t.storyPara3}</p>
                <p>{t.storyPara4}</p>
                <p>{t.storyPara5}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 02 / Mission & Vision */}
      <div className="py-40 bg-zinc-950">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-sm tracking-[0.3em] text-gray-500 uppercase mb-6">
              {t.sectionNumber2} / {t.missionVision}
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="border-l-2 border-white/10 pl-8 py-6 space-y-4 hover:border-white/30 transition-colors"
            >
              <h3 className="text-2xl tracking-tight">{t.ourMission}</h3>
              <p className="text-gray-400 leading-relaxed">{t.missionText}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="border-l-2 border-white/10 pl-8 py-6 space-y-4 hover:border-white/30 transition-colors"
            >
              <h3 className="text-2xl tracking-tight">{t.ourVision}</h3>
              <p className="text-gray-400 leading-relaxed">{t.visionText}</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 03 / Our Belief */}
      <div className="py-40 bg-black">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-sm tracking-[0.3em] text-gray-500 uppercase mb-6">
              {t.sectionNumber3} / {t.ourBelief}
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="border-l-2 border-white/10 pl-8 py-6 space-y-4 hover:border-white/30 transition-colors"
            >
              <div className="text-5xl tracking-tight mb-4">1</div>
              <h3 className="text-2xl tracking-tight">{t.belief1Title}</h3>
              <p className="text-gray-400 leading-relaxed">{t.belief1Desc}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="border-l-2 border-white/10 pl-8 py-6 space-y-4 hover:border-white/30 transition-colors"
            >
              <div className="text-5xl tracking-tight mb-4">2</div>
              <h3 className="text-2xl tracking-tight">{t.belief2Title}</h3>
              <p className="text-gray-400 leading-relaxed">{t.belief2Desc}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="border-l-2 border-white/10 pl-8 py-6 space-y-4 hover:border-white/30 transition-colors"
            >
              <div className="text-5xl tracking-tight mb-4">3</div>
              <h3 className="text-2xl tracking-tight">{t.belief3Title}</h3>
              <p className="text-gray-400 leading-relaxed">{t.belief3Desc}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="border-l-2 border-white/10 pl-8 py-6 space-y-4 hover:border-white/30 transition-colors"
            >
              <div className="text-5xl tracking-tight mb-4">4</div>
              <h3 className="text-2xl tracking-tight">{t.belief4Title}</h3>
              <p className="text-gray-400 leading-relaxed">{t.belief4Desc}</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 04 / Our Promise */}
      <div className="py-40 bg-black">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-sm tracking-[0.3em] text-gray-500 uppercase mb-6">
              {t.sectionNumber4} / {t.ourPromise}
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="border-l-2 border-white/10 pl-8 py-6 space-y-4 hover:border-white/30 transition-colors"
            >
              <div className="text-5xl tracking-tight mb-4">1</div>
              <h3 className="text-2xl tracking-tight">{t.promise1Title}</h3>
              <p className="text-gray-400 leading-relaxed">{t.promise1Desc}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="border-l-2 border-white/10 pl-8 py-6 space-y-4 hover:border-white/30 transition-colors"
            >
              <div className="text-5xl tracking-tight mb-4">2</div>
              <h3 className="text-2xl tracking-tight">{t.promise2Title}</h3>
              <p className="text-gray-400 leading-relaxed">{t.promise2Desc}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="border-l-2 border-white/10 pl-8 py-6 space-y-4 hover:border-white/30 transition-colors"
            >
              <div className="text-5xl tracking-tight mb-4">3</div>
              <h3 className="text-2xl tracking-tight">{t.promise3Title}</h3>
              <p className="text-gray-400 leading-relaxed">{t.promise3Desc}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="border-l-2 border-white/10 pl-8 py-6 space-y-4 hover:border-white/30 transition-colors"
            >
              <div className="text-5xl tracking-tight mb-4">4</div>
              <h3 className="text-2xl tracking-tight">{t.promise4Title}</h3>
              <p className="text-gray-400 leading-relaxed">{t.promise4Desc}</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 05 / Our Team */}
      <div className="py-40 bg-zinc-950">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-sm tracking-[0.3em] text-gray-500 uppercase mb-6">
              {t.sectionNumber5} / {t.ourTeam}
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Brenda */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="aspect-square bg-zinc-900 border border-white/10 rounded-sm overflow-hidden">
                <img
                  src={brendaImage}
                  alt="夏佳萱 Brenda"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl tracking-tight">夏佳萱 Brenda</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {language === 'zh'
                    ? '多伦多大都会大学商科管理；12 年深耕北美学习工作，兼具国际化视野与资源；4 年 UX 设计经验，对复杂产品工作流具备系统化理解；同时创办了咨询公司，专注出海 0→1 项目操盘，主导 10+ 款数字产品成功落地；5 岁起学习音乐，会多类乐器且身兼 DJ。'
                    : 'Business Management at Toronto Metropolitan University; 12 years of experience in North America with international vision; 4 years of UX design experience with systematic understanding of complex product workflows; Founded a consulting company focused on 0→1 overseas projects, leading 10+ successful digital product launches; Learning music since age 5, plays multiple instruments and DJs.'}
                </p>
              </div>
            </motion.div>

            {/* Remi */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="aspect-square bg-zinc-900 border border-white/10 rounded-sm overflow-hidden">
                <img
                  src={remiImage}
                  alt="管仁夫 Remi"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl tracking-tight">管仁夫 Remi</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {language === 'zh'
                    ? '全栈技术专家（精通 10 + 编程语言），从小学起从未接受过学校常规教育，凭一腔技术热爱，自学探索进阶入读伦敦大学；对系统架构 / AI 趋势高度敏感，深度参与欧亚多产品项目，且在全球开发者社区认可度高；擅长构建稳定可扩展的技术体系。'
                    : 'Full-stack technical expert (proficient in 10+ programming languages), never received conventional school education since elementary school, admitted to University of London through self-learning and technical passion; Highly sensitive to system architecture and AI trends, deeply involved in multiple European and Asian product projects with high recognition in global developer communities; Excels in building stable and scalable technical systems.'}
                </p>
              </div>
            </motion.div>

            {/* Mia */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="aspect-square bg-zinc-900 border border-white/10 rounded-sm overflow-hidden">
                <img
                  src={miaImage}
                  alt="张琪 Mia"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl tracking-tight">张琪 Mia</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {language === 'zh'
                    ? '武汉大学硕士，前华为北非区域市场负责人，精通英法双语，8 年市场实战经验；曾在制裁 + 舆情双重压力下实现区域业绩逆势增长，获评 "金牌个人"；wavespire音乐厂牌合伙人兼DJ，创建深圳本地最大电子乐社群，跨界资源丰富，擅长打通商业渠道与圈层资源'
                    : 'Master\'s degree from Wuhan University, former Huawei North Africa regional marketing lead, fluent in English and French, 8 years of marketing experience; Achieved counter-trend regional performance growth under dual pressure of sanctions and public opinion, awarded "Gold Individual"; Partner and DJ at wavespire music label, founded Shenzhen\'s largest electronic music community, rich cross-industry resources, excels in connecting business channels and community networks'}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}