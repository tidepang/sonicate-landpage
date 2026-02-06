
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { StarBackground } from './StarBackground';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  const { language } = useLanguage();

  const t = {
    title: language === 'zh' ? '全新定义 DJ 工作流' : 'REDEFINING THE DJ WORKFLOW',
    description: language === 'zh' 
      ? 'Sonicite Flow帮助你更快理解音乐、做出更清晰的选歌与编排判断，把时间从反复试听与试错中释放出来，留给真正重要的——你的创作与现场表达。'
      : 'Sonicite Flow helps you understand music faster, make clearer decisions, and frees you from repetitive trial-and-error to focus on what matters—your creativity.',
    tryFlow: language === 'zh' ? '试用 SONICITE FLOW' : 'TRY SONICITE FLOW',
  };

  const stagger = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* 1. Background */}
      <StarBackground />

      {/* 2. Content Container */}
      <div
        className="container mx-auto px-6 relative z-10 pb-24"
        style={{ paddingTop: 'clamp(180px, 22vh, 320px)' }}
      >
        
        {/* Text & CTA */}
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
          className="space-y-10 max-w-6xl"
        >
          <motion.div variants={stagger} className="space-y-8">
            <h1
              className="font-black tracking-tighter text-white"
              style={{ fontSize: 'clamp(52px, 7.2vw, 140px)', lineHeight: '0.7', fontWeight: '900' }}
            >
              {t.title}
            </h1>

            <div className="grid gap-6 lg:grid-cols-[minmax(0,720px)_auto] lg:items-center w-full" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '84px' }}>
              <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-none" style={{ width: '700px'}}>
                {t.description}
              </p>
              <div className="flex lg:justify-end lg:justify-self-end">
                <button
                  onClick={() => window.open('https://flow.sonicite.ai/', '_blank')}
                  className="group relative px-8 py-4 bg-purple-600 text-white font-semibold tracking-wide uppercase text-sm overflow-hidden transition-all duration-300 hover:scale-105"
                  style={{
                    boxShadow: '0 0 20px rgba(124, 58, 237, 0.5)',
                  }}
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  <span className="relative z-10 flex items-center gap-2">
                    {t.tryFlow} <ArrowRight className="w-4 h-4" />
                  </span>
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Video: Half-revealed */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-16 lg:mt-24"
        >
          <div className="relative rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm overflow-hidden">
            <div className="relative h-[190px] sm:h-[240px] lg:h-[320px] overflow-hidden">
              <video
                src="https://ufwqrsdoaxjxcsbxpirb.supabase.co/storage/v1/object/public/langding_page/landing.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-[140%] object-cover"
                style={{ transform: 'translateY(-12%)' }}
              />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
          </div>
        </motion.div>
      </div>

      {/* Decorative overlaid gradients for atmosphere */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-900/10 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
}
