import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { Logo } from './Logo';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  const t = {
    about: language === 'zh' ? '关于我们' : 'About',
    blog: language === 'zh' ? '博客' : 'Blog',
    demo: language === 'zh' ? '演示' : 'Demo',
    contact: language === 'zh' ? '联系我们' : 'Contact',
    product: language === 'zh' ? '产品' : 'Product',
    getStarted: language === 'zh' ? '开始使用' : 'Get Started',
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const handleProductClick = () => {
    setIsMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const productSection = document.getElementById('product');
        if (productSection) {
          productSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const productSection = document.getElementById('product');
      if (productSection) {
        productSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-black/95 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        <div className="flex items-center justify-between h-16 md:h-24">
          <div className="flex items-center">
            <button onClick={handleLogoClick} className="cursor-pointer">
              {/* Desktop: Full logo, Mobile: Icon only (cropped) */}
              <Logo className="h-12 md:w-auto w-10" />
            </button>
          </div>

          <div className="hidden md:flex items-center gap-12">
            <Link
              to="/about"
              className={`text-sm tracking-wide transition-colors uppercase inline-block text-center ${
                isActive('/about') ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
              style={{ minWidth: '65px' }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              {t.about}
            </Link>
            <Link
              to="/blog"
              className={`text-sm tracking-wide transition-colors uppercase inline-block text-center ${
                isActive('/blog') ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
              style={{ minWidth: '40px' }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              {t.blog}
            </Link>
            <Link
              to="/demo"
              className={`text-sm tracking-wide transition-colors uppercase inline-block text-center ${
                isActive('/demo') ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
              style={{ minWidth: '45px' }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              {t.demo}
            </Link>
            <Link
              to="/contact"
              className={`text-sm tracking-wide transition-colors uppercase inline-block text-center ${
                isActive('/contact') ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
              style={{ minWidth: '72px' }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              {t.contact}
            </Link>
            
            {/* Language Switcher */}
            <div className="flex items-center gap-2 border border-white/10 rounded-sm overflow-hidden">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-2 text-xs tracking-wide uppercase transition-colors ${
                  language === 'en' ? 'bg-white text-black' : 'text-gray-400 hover:text-white'
                }`}
              >
                ENG
              </button>
              <button
                onClick={() => setLanguage('zh')}
                className={`px-3 py-2 text-xs transition-colors ${
                  language === 'zh' ? 'bg-white text-black' : 'text-gray-400 hover:text-white'
                }`}
              >
                中文
              </button>
            </div>
            
            <a 
              href="https://flow.sonicite.ai/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white text-black text-sm tracking-wide uppercase hover:bg-purple-600 hover:text-white transition-colors inline-block text-center"
              style={{ minWidth: '156px' }}
            >
              {t.getStarted}
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden absolute top-16 md:top-24 left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/5 overflow-hidden"
          >
            <div className="px-8 py-8">
              <div className="flex flex-col items-center gap-8">
                <button 
                  onClick={handleProductClick}
                  className="text-base tracking-wide text-gray-400 hover:text-white transition-colors uppercase"
                >
                  {t.product}
                </button>
                <Link
                  to="/about"
                  className={`text-base tracking-wide transition-colors uppercase ${
                    isActive('/about') ? 'text-white' : 'text-gray-400 hover:text-white'
                  }`}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  {t.about}
                </Link>
                <Link
                  to="/blog"
                  className={`text-base tracking-wide transition-colors uppercase ${
                    isActive('/blog') ? 'text-white' : 'text-gray-400 hover:text-white'
                  }`}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  {t.blog}
                </Link>
                <Link
                  to="/demo"
                  className={`text-base tracking-wide transition-colors uppercase ${
                    isActive('/demo') ? 'text-white' : 'text-gray-400 hover:text-white'
                  }`}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  {t.demo}
                </Link>
                <Link
                  to="/contact"
                  className={`text-base tracking-wide transition-colors uppercase ${
                    isActive('/contact') ? 'text-white' : 'text-gray-400 hover:text-white'
                  }`}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  {t.contact}
                </Link>
                
                {/* Language Switcher - Mobile */}
                <div className="flex items-center gap-2 border border-white/10 rounded-sm overflow-hidden">
                  <button
                    onClick={() => setLanguage('en')}
                    className={`px-4 py-2 text-xs tracking-wide uppercase transition-colors ${
                      language === 'en' ? 'bg-white text-black' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    ENG
                  </button>
                  <button
                    onClick={() => setLanguage('zh')}
                    className={`px-4 py-2 text-xs transition-colors ${
                      language === 'zh' ? 'bg-white text-black' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    中文
                  </button>
                </div>
                
                <a 
                  href="https://flow.sonicite.ai/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-4 px-8 py-3 bg-white text-black text-sm tracking-wide uppercase hover:bg-purple-600 hover:text-white transition-colors"
                >
                  {t.getStarted}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}