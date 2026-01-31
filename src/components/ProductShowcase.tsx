import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import djMixerImage from 'figma:asset/f67a2b18e1d858e6ba94dcfaf4a04cdaa30eac45.png';

export function ProductShowcase() {
  const { language } = useLanguage();
  const navigate = useNavigate();
  
  const t = {
    introducing: language === 'zh' ? '介绍 SONICITE FLOW' : 'Introducing SONICITE FLOW',
    title1: language === 'zh' ? '智能' : 'Intelligent',
    title2: language === 'zh' ? 'DJ 助手' : 'DJ Assistant',
    description: language === 'zh'
      ? '先进的 AI 理解您的音乐、您的风格和您的听众。将数小时的准备工作转化为几分钟的灵感创作。'
      : 'Advanced AI that understands your music, your style, and your audience. Transform hours of preparation into minutes of inspired creativity.',
    exploreFeatures: language === 'zh' ? '探索功能' : 'Explore Features',
    value1Title: language === 'zh' ? '提高效率' : 'Improve Efficiency',
    value1Desc: language === 'zh' 
      ? '大幅节省找歌与准备时间，将排歌过程从10-40小时压缩至十几分钟，减少试错成本，让DJ将经历集中到审美判断' 
      : 'Dramatically reduce track searching and preparation time, compress the set building process from 10-40 hours to just minutes, reduce trial and error costs, and let DJs focus their energy on aesthetic judgment',
    value2Title: language === 'zh' ? '激发灵感' : 'Inspire Creativity',
    value2Desc: language === 'zh'
      ? '作为 DJ 的灵感伙伴，辅助探索不同风格与能量组合，帮助尝试新的编排路径与表达方式，让创作不再被局限于经验。'
      : 'As a DJ\'s creative partner, assist in exploring different style and energy combinations, help try new arrangement paths and expression methods, and let creation no longer be limited by experience.',
    value3Title: language === 'zh' ? '稳定发挥' : 'Consistent Performance',
    value3Desc: language === 'zh'
      ? '让 DJ 在不同场景与风格切换中，对能量、情绪与结构走向有更清晰的预期，减少"凭感觉赌现场"的不确定性。'
      : 'Give DJs clearer expectations about energy, emotion, and structural direction when switching between different scenarios and styles, reducing the uncertainty of "betting on gut feeling."',
    value4Title: language === 'zh' ? '降低门槛' : 'Lower the Barrier',
    value4Desc: language === 'zh'
      ? '基于结构与情绪逻辑，让新手和初学者也能快速完成连贯、流畅的 Set 编排，缩短从学习到实战的成长路径。'
      : 'Based on structure and emotion logic, enable beginners to quickly complete coherent and smooth set arrangements, shortening the growth path from learning to performance.',
  };
  
  return (
    <section id="product" className="relative py-16 bg-black">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        <div className="grid md:grid-cols-4 gap-px bg-white/5">
          <div className="bg-black p-12 space-y-4">
            <div className="text-4xl">01</div>
            <h3 className="text-xl tracking-wide">{t.value1Title}</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              {t.value1Desc}
            </p>
          </div>

          <div className="bg-black p-12 space-y-4">
            <div className="text-4xl">02</div>
            <h3 className="text-xl tracking-wide">{t.value2Title}</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              {t.value2Desc}
            </p>
          </div>

          <div className="bg-black p-12 space-y-4">
            <div className="text-4xl">03</div>
            <h3 className="text-xl tracking-wide">{t.value3Title}</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              {t.value3Desc}
            </p>
          </div>

          <div className="bg-black p-12 space-y-4">
            <div className="text-4xl">04</div>
            <h3 className="text-xl tracking-wide">{t.value4Title}</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              {t.value4Desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}