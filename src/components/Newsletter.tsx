import { useState } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const { language } = useLanguage();

  const t = {
    tagline: language === 'zh' ? '和我们一起探索音乐的下一步' : 'Be Part of Something Greater',
    title: language === 'zh' ? '加入 SONICITE 社群' : 'Join the SONICITE Circle',
    description: language === 'zh'
      ? '我们会持续分享关于 DJ 和音乐的内容，并邀请你参与新功能体验，一起把 Sonicite 做得更好。'
      : 'Get exclusive access to early features, industry insights, and insider updates from the future of music intelligence.',
    emailPlaceholder: language === 'zh' ? '输入您的邮箱' : 'Enter your email',
    subscribe: language === 'zh' ? '订阅' : 'Subscribe',
    subscribing: language === 'zh' ? '订阅中...' : 'Subscribing...',
    thankYou: language === 'zh' ? '感谢您的订阅！' : 'Thank you for subscribing!',
    privacy: language === 'zh' ? '我们尊重您的隐私。随时退订。' : 'We respect your privacy. Unsubscribe at any time.',
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('https://formspree.io/f/mgvglrnq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSubmissionStatus('success');
        setEmail('');
        // Reset success message after 5 seconds
        setTimeout(() => setSubmissionStatus('idle'), 5000);
      } else {
        const data = await response.json();
        throw new Error(data.error || 'Failed to subscribe');
      }
    } catch (error) {
      setSubmissionStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
      // Reset error message after 5 seconds
      setTimeout(() => setSubmissionStatus('idle'), 5000);
    }
  };

  return (
    <section className="relative bg-zinc-950 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center space-y-12"
        >
          <div className="space-y-6">
            <div className="text-sm tracking-[0.3em] text-gray-500 uppercase">
              {t.tagline}
            </div>
            <h2 className="text-4xl sm:text-5xl tracking-tight leading-[0.95]">
              {t.title}
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              {t.description}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t.emailPlaceholder}
              className="flex-1 bg-black border border-white/10 px-6 py-4 text-white placeholder-gray-600 focus:border-white/30 focus:outline-none transition-colors"
            />
            <button
              type="submit"
              disabled={submissionStatus === 'submitting'}
              className="px-10 py-4 bg-white text-black text-sm tracking-wide uppercase hover:bg-purple-600 hover:text-white transition-colors whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submissionStatus === 'submitting' ? t.subscribing : t.subscribe}
            </button>
          </form>

          {submissionStatus === 'success' && (
            <p className="text-xs text-gray-600">
              {t.thankYou}
            </p>
          )}
          {submissionStatus === 'error' && (
            <p className="text-xs text-red-500">
              {errorMessage}
            </p>
          )}
          {submissionStatus === 'idle' && (
            <p className="text-xs text-gray-600">
              {t.privacy}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}