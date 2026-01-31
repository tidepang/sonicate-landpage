import logo from 'figma:asset/b4260d6bd0c3e2c1fba98dbcd5bf26b96f790458.png';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';

export function Footer() {
  const { language } = useLanguage();
  
  const t = {
    tagline: language === 'zh' ? '为下一代创作者打造的音乐智能生态系统。' : 'The music intelligence ecosystem for the next generation of creators.',
    company: language === 'zh' ? '公司' : 'Company',
    about: language === 'zh' ? '关于' : 'About',
    blog: language === 'zh' ? '博客' : 'Blog',
    contact: language === 'zh' ? '联系' : 'Contact',
    legal: language === 'zh' ? '法律' : 'Legal',
    privacy: language === 'zh' ? '隐私' : 'Privacy',
    terms: language === 'zh' ? '条款' : 'Terms',
    copyright: language === 'zh' ? '© 2025 SONICITE. 保留所有权利。' : '© 2025 SONICITE. All rights reserved.',
  };
  
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <footer className="relative border-t border-white/5 bg-black">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16 py-20">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-12 mb-20">
          <div>
            <div className="mb-6">
              <img src={logo} alt="SONICITE" className="h-10" />
            </div>
            <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
              {t.tagline}
            </p>
          </div>

          <div>
            <h4 className="text-sm tracking-wide uppercase mb-6 text-gray-400">{t.company}</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link to="/about" onClick={handleLinkClick} className="text-gray-500 hover:text-white transition-colors">
                  {t.about}
                </Link>
              </li>
              <li>
                <Link to="/blog" onClick={handleLinkClick} className="text-gray-500 hover:text-white transition-colors">
                  {t.blog}
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={handleLinkClick} className="text-gray-500 hover:text-white transition-colors">
                  {t.contact}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm tracking-wide uppercase mb-6 text-gray-400">{t.legal}</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link to="/privacy" onClick={handleLinkClick} className="text-gray-500 hover:text-white transition-colors">
                  {t.privacy}
                </Link>
              </li>
              <li>
                <Link to="/terms" onClick={handleLinkClick} className="text-gray-500 hover:text-white transition-colors">
                  {t.terms}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5">
          <p className="text-sm text-gray-500">
            {t.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}