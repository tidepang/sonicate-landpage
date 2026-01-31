
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { StarBackground } from './StarBackground';
import { Waveform } from './Waveform';
import { ArrowRight, Play } from 'lucide-react';

export function Hero() {
  const navigate = useNavigate();
  const { language } = useLanguage();

  const t = {
    tagline: language === 'zh' ? 'AI音乐智能体' : 'AI MUSIC INTELLIGENCE',
    title: language === 'zh' ? '全新定义 DJ 工作流' : 'REDEFINING THE\nDJ WORKFLOW',
    description: language === 'zh' 
      ? 'Sonicite Flow帮助你更快理解音乐、做出更清晰的选歌与编排判断，把时间从反复试听与试错中释放出来，留给真正重要的——你的创作与现场表达。'
      : 'Sonicite Flow helps you understand music faster, make clearer decisions, and frees you from repetitive trial-and-error to focus on what matters—your creativity.',
    tryFlow: language === 'zh' ? '试用 SONICITE FLOW' : 'TRY SONICITE FLOW',
    watchDemo: language === 'zh' ? '观看 DEMO' : 'WATCH DEMO',
    promptPlaceholder: "Find tracks similar to Amelie Lens - Feel It with 128 BPM",
  };

  const stagger = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center bg-black">
      {/* 1. Background */}
      <StarBackground />

      {/* 2. Content Container */}
      <div className="container mx-auto px-6 z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full pt-20">
        
        {/* Left: Text & CTA */}
        <motion.div 
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
          className="space-y-8 lg:max-w-xl"
        >
          <motion.div variants={stagger} className="flex items-center gap-3">
             <div className="h-[1px] w-8 bg-purple-500/50"></div>
             <span className="text-purple-400 text-sm tracking-[0.2em] uppercase font-medium">{t.tagline}</span>
          </motion.div>

          <motion.div variants={stagger}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.9] tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/50">
              {t.title.split('\n').map((line, i) => (
                <span key={i} className="block">{line}</span>
              ))}
            </h1>
          </motion.div>

          <motion.div variants={stagger}>
            <p className="text-lg text-gray-400 leading-relaxed max-w-lg border-l-2 border-white/10 pl-6">
              {t.description}
            </p>
          </motion.div>

          <motion.div variants={stagger} className="flex flex-wrap gap-4 pt-4">
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

            <button 
              onClick={() => navigate('/demo')}
              className="group px-8 py-4 border border-purple-500/30 text-white font-medium tracking-wide uppercase text-sm backdrop-blur-sm hover:bg-purple-500/10 transition-all duration-300 hover:border-purple-500/60"
            >
              <span className="flex items-center gap-2">
                {t.watchDemo} <Play className="w-4 h-4 fill-current" />
              </span>
            </button>
          </motion.div>
        </motion.div>

        {/* Right: Waveform & Prompt */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="relative flex flex-col justify-center h-full"
        >
          {/* Waveform Visualization - Breaking Bounds */}
          {/* We position it absolutely or use negative margins to break grid bounds */}
          <div className="relative w-[140%] -right-[20%] h-[400px] pointer-events-none">
             <Waveform />
          </div>

          {/* Prompt Bar - Neon Style */}
          <div className="absolute bottom-20 lg:bottom-1/4 left-0 right-10 lg:-left-20 lg:right-0">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-1000 animate-pulse"></div>
              <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-lg p-1 flex items-center">
                <div className="pl-4 pr-2 text-purple-400">
                  <span className="w-2 h-2 bg-purple-500 rounded-full inline-block animate-ping mr-2"></span>
                </div>
                <input 
                  type="text" 
                  readOnly
                  value={t.promptPlaceholder}
                  className="w-full bg-transparent border-none outline-none text-sm sm:text-base text-white/90 placeholder-gray-500 font-mono py-4"
                />
                 {/* Decorative Corner accents */}
                 <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-purple-500"></div>
                 <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-cyan-500"></div>
                 <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-purple-500"></div>
                 <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan-500"></div>
              </div>
            </div>
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