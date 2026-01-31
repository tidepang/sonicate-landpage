import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

export function DemoPage() {
  const { language } = useLanguage();

  const t = {
    comingSoon: language === 'zh' ? '即将推出' : 'Coming Soon',
    title1: language === 'zh' ? '体验 SONICITE FLOW' : 'Experience SONICITE FLOW',
    title2: language === 'zh' ? '的强大功能' : 'In Action',
    description: language === 'zh'
      ? '我们正在为您准备一个令人惊叹的互动演示。很快您就能亲身体验 SONICITE FLOW 的 AI 驱动功能。'
      : 'We\'re preparing an amazing interactive demo for you. Soon you\'ll be able to experience the AI-powered capabilities of SONICITE FLOW firsthand.',
    notifyMe: language === 'zh' ? '上线时通知我' : 'Notify Me When It\'s Ready',
    orContact: language === 'zh' ? '或者' : 'Or',
    scheduleDemo: language === 'zh' ? '预约私人演示' : 'Schedule a Private Demo',
    features: language === 'zh' ? '您将体验的功能：' : 'What You\'ll Experience:',
    feature1: language === 'zh' ? '实时音轨分析与推荐' : 'Real-time track analysis and recommendations',
    feature2: language === 'zh' ? '智能 Set 构建和能量流映射' : 'Intelligent set building and energy flow mapping',
    feature3: language === 'zh' ? 'AI 教练的个性化反馈' : 'Personalized feedback from AI coach',
    feature4: language === 'zh' ? '与您音乐库的无缝集成' : 'Seamless integration with your music library',
  };

  const handleScheduleDemo = () => {
    window.open('https://calendly.com/brenda-globsense/30min', '_blank');
  };

  const handleNotifyMe = () => {
    // Scroll to newsletter section or redirect to contact
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <div className="relative bg-black min-h-screen pt-40 pb-20">
      <div className="max-w-[1200px] mx-auto px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center space-y-16"
        >
          {/* Header */}
          <div className="space-y-8">
            <div className="text-sm tracking-[0.3em] text-gray-500 uppercase">
              {t.comingSoon}
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-[0.95]">
              {t.title1}
              <br />
              {t.title2}
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              {t.description}
            </p>
          </div>

          {/* Visual Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative aspect-video bg-black border border-white/10 rounded-sm">
              <video 
                controls 
                playsInline 
                preload="metadata" 
                className="w-full h-full rounded-sm"
                controlsList="nodownload"
              >
                <source
                  src="https://sonicite.tos-cn-shanghai.volces.com/landing/demo-video.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </motion.div>

          {/* Features Preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            <h3 className="text-2xl tracking-tight text-white">
              {t.features}
            </h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
              {[t.feature1, t.feature2, t.feature3, t.feature4].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="flex items-start gap-4 p-6 bg-white/5 border border-white/10 rounded-sm"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-green-600 flex items-center justify-center">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 4L6 11L3 8"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{feature}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}