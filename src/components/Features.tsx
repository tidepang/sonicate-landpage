import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import trackLibraryImage from 'figma:asset/6cc7aead5fc377fab5ad6c0d8cddab51e093b56b.png';
import setBuilderImage from 'figma:asset/9af4db9980c459990766320695341a9727f7cff7.png';
import recommendationsImage from 'figma:asset/73921d8ce41c7648bed66cff79cbd58d37bd6311.png';
import guideImage from 'figma:asset/ab56391bcb8876626ef795a63689fe54a7812048.png';

export function Features() {
  const [activeFeature, setActiveFeature] = useState(0);
  const { language } = useLanguage();

  const t = {
    builtForPerformance: language === 'zh' ? '为性能而生' : 'Built for Performance',
    title1: language === 'zh' ? '更多灵感。' : 'More Inspiration.',
    title2: language === 'zh' ? '更高效率。' : 'Better Efficiency.',
    stat1Number: '10x',
    stat1Label: language === 'zh' ? '准备效率提升' : 'Faster Preparation',
    stat2Number: language === 'zh' ? '端到端' : 'End-to-End',
    stat2Label: language === 'zh' ? 'DJ 工作流' : 'DJ Workflow',
    stat3Number: '∞',
    stat3Label: language === 'zh' ? '创作潜能' : 'Creative Potential',
  };

  const features = [
    {
      id: 0,
      title: language === 'zh' ? '曲库管理和深度分析' : 'Track Library',
      subtitle: language === 'zh' ? '曲库管理和深度分析' : 'Instant Track Intelligence',
      description: language === 'zh'
        ? '自动解析每首歌的风格、能量、情绪、音色、人声及乐理结构等，同步生成标签和混音建议，让曲库清晰可搜、轻松管理。'
        : 'Analyze key, BPM, energy levels, and musical structure in seconds. Understand your entire library at a glance with AI-powered insights that go deeper than any manual analysis.',
      points: language === 'zh' ? [
        '和声调性检测与 Camelot 轮盘整合',
        '能量曲线分析实现完美过渡',
        '流派和情绪分类与置信度评分',
      ] : [
        'Harmonic key detection with Camelot wheel integration',
        'Energy curve analysis for perfect transitions',
        'Genre and mood classification with confidence scoring',
      ],
      image: trackLibraryImage,
    },
    {
      id: 1,
      title: language === 'zh' ? '场景化自动排歌' : 'Set Builder',
      subtitle: language === 'zh' ? '场景化自动排歌' : 'Craft Perfect Journeys',
      description: language === 'zh'
        ? '适配俱乐部、音乐节、咖啡店、时装活动等不同演出场景，从曲库中一键生成符合风格、能量与情绪走向的演出歌单，并支持灵活调整。'
        : 'Plan your sets with precision and visualize the entire flow. Our intelligent set builder helps you construct unforgettable musical journeys from opening to closing track.',
      points: language === 'zh' ? [
        '视觉能量流动映射',
        '过渡兼容性评分',
        '拖放式 set 编排',
      ] : [
        'Visual energy flow mapping',
        'Transition compatibility scoring',
        'Drag-and-drop set arrangement',
      ],
      image: setBuilderImage,
    },
    {
      id: 2,
      title: language === 'zh' ? '自然语言智能搜歌' : 'Recommendations',
      subtitle: language === 'zh' ? '自然语言智能搜歌' : 'AI-Powered Discovery',
      description: language === 'zh'
        ? '支持通过自然语言描述（如"适合健身房打拳，燃但不分心的歌"）在曲库与音乐平台中寻找合适曲目，也可快速找到风格与感觉相近的曲目。'
        : 'Let AI be your crate-digging assistant. Get track suggestions that match your vibe, complement your current selection, and help you discover hidden gems in your collection.',
      points: language === 'zh' ? [
        '基于 set 流程的上下文感知建议',
        '从您的混音模式和偏好中学习',
        '发现您可能错过的相似曲目',
      ] : [
        'Context-aware suggestions based on set flow',
        'Learn from your mixing patterns and preferences',
        'Discover similar tracks you might have missed',
      ],
      image: recommendationsImage,
    },
    {
      id: 3,
      title: language === 'zh' ? '专属AI助手' : 'Guide',
      subtitle: language === 'zh' ? '专属AI助手' : 'Your AI DJ Coach',
      description: language === 'zh'
        ? '提供混音技巧、设备操作及音乐知识等建议，辅助 DJ 在准备与演出过程中快速做出更稳定的音乐决策。'
        : 'Get real-time feedback on your selections and mixing decisions. Our AI coach analyzes your sets and provides personalized guidance to elevate your performance.',
      points: language === 'zh' ? [
        'AI 驱动的混音技巧建议',
        '实时表演反馈',
        '个性化改进建议',
      ] : [
        'AI-powered mixing technique suggestions',
        'Real-time performance feedback',
        'Personalized improvement recommendations',
      ],
      image: guideImage,
    },
  ];

  return (
    <section id="features" className="relative py-40 bg-zinc-950">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="text-sm tracking-[0.3em] text-gray-500 uppercase mb-6">
            {t.builtForPerformance}
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-[0.95] max-w-4xl">
            {t.title1}
            <br />
            {t.title2}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[35fr_65fr] gap-16 items-start">
          {/* Left side - Feature tabs */}
          <div className="space-y-3 lg:sticky lg:top-32">
            {features.map((feature, index) => (
              <button
                key={feature.id}
                onClick={() => setActiveFeature(index)}
                className={`w-full text-left px-8 py-6 border transition-all duration-300 ${
                  activeFeature === index
                    ? 'bg-white/5 border-white/20'
                    : 'bg-transparent border-white/5 hover:border-white/10 hover:bg-white/[0.02]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className={`text-2xl tracking-tight transition-colors ${
                      activeFeature === index ? 'text-white' : 'text-gray-400'
                    }`}>
                      {feature.title}
                    </div>
                    <div className={`text-sm mt-1 transition-colors ${
                      activeFeature === index ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {feature.subtitle}
                    </div>
                  </div>
                  <div className={`text-5xl transition-all duration-300 ${
                    activeFeature === index ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                  }`}>
                    →
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Right side - Feature content */}
          <div className="lg:min-h-[600px]">
            <motion.div
              key={activeFeature}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-8"
            >
              {/* Visual preview */}
              <div className="aspect-[16/9] bg-zinc-900 border border-white/10 rounded-sm overflow-hidden flex items-center justify-center">
                <ImageWithFallback
                  src={
                    activeFeature === 0 ? trackLibraryImage :
                    activeFeature === 1 ? setBuilderImage :
                    activeFeature === 2 ? recommendationsImage :
                    guideImage
                  }
                  alt={features[activeFeature].title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Content */}
              <div className="space-y-6">
                <h3 className="text-3xl tracking-tight">
                  {features[activeFeature].subtitle}
                </h3>
                <p className="text-lg text-gray-400 leading-relaxed">
                  {features[activeFeature].description}
                </p>
                <div className="pt-4 space-y-3 text-gray-400">
                  {features[activeFeature].points.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-1 h-1 bg-white rounded-full mt-2.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="mt-40"
        >
          <div className="grid md:grid-cols-3 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center space-y-6"
            >
              <div>
                <div className="text-6xl tracking-tight text-white mb-3">
                  {t.stat1Number}
                </div>
                <div className="text-sm tracking-[0.2em] text-gray-400 uppercase">
                  {t.stat1Label}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center space-y-6"
            >
              <div>
                <div className="text-6xl tracking-tight text-white mb-3">
                  {t.stat2Number}
                </div>
                <div className="text-sm tracking-[0.2em] text-gray-400 uppercase">
                  {t.stat2Label}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center space-y-6"
            >
              <div>
                <div className="text-6xl tracking-tight text-white mb-3">
                  {t.stat3Number}
                </div>
                <div className="text-sm tracking-[0.2em] text-gray-400 uppercase">
                  {t.stat3Label}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}