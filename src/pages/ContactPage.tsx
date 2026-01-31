import { useState } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

export function ContactPage() {
  const { language } = useLanguage();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    message: '',
  });
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const roles = language === 'zh' ? [
    'DJ',
    '制作人',
    '唱片公司',
    '学校',
    '创作者',
    '投资者',
    '其他',
  ] : [
    'DJs',
    'Producers',
    'Record Labels',
    'Schools',
    'Creators',
    'Investors',
    'Others',
  ];

  const t = {
    getInTouch: language === 'zh' ? '联系我们' : 'Get in Touch',
    title1: language === 'zh' ? '让我们谈谈' : 'Let\'s Talk About',
    title2: language === 'zh' ? '您的音乐未来' : 'Your Music Future',
    description: language === 'zh'
      ? '无论您是 DJ、制作人，还是只是对我们正在构建的内容感到好奇，我们都很乐意听到您的声音。'
      : 'Whether you\'re a DJ, producer, or just curious about what we\'re building, we\'d love to hear from you.',
    yourName: language === 'zh' ? '您的姓名' : 'Your Name',
    yourEmail: language === 'zh' ? '您的邮箱' : 'Your Email',
    role: language === 'zh' ? '角色' : 'Role',
    selectRole: language === 'zh' ? '选择角色' : 'Select a role',
    message: language === 'zh' ? '消息' : 'Message',
    messagePlaceholder: language === 'zh' ? '告诉我们您的想法...' : 'Tell us what\'s on your mind...',
    sendMessage: language === 'zh' ? '发送消息' : 'Send Message',
    sending: language === 'zh' ? '发送中...' : 'Sending...',
    successMessage: language === 'zh' ? '感谢您的联系！我们会尽快回复。' : 'Thank you for reaching out! We\'ll get back to you soon.',
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionStatus('submitting');
    setErrorMessage('');

    try {
      // Replace 'YOUR_FORM_ID' with your actual Formspree form ID
      const response = await fetch('https://formspree.io/f/mgvglrnq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmissionStatus('success');
        // Reset form
        setFormData({
          name: '',
          email: '',
          role: '',
          message: '',
        });
        // Reset success message after 5 seconds
        setTimeout(() => setSubmissionStatus('idle'), 5000);
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      setSubmissionStatus('error');
      setErrorMessage('Something went wrong. Please try again or email us directly.');
      console.error('Form submission error:', error);
    }
  };

  const handleScheduleCall = () => {
    // You can replace this with your actual scheduling link (e.g., Calendly)
    window.open('https://calendly.com/brenda-globsense/30min', '_blank');
  };

  return (
    <div className="relative bg-black min-h-screen pt-40 pb-40">
      <div className="max-w-[900px] mx-auto px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-16"
        >
          {/* Header */}
          <div className="text-center space-y-6">
            <div className="text-sm tracking-[0.3em] text-gray-500 uppercase">
              {t.getInTouch}
            </div>
            <h1 className="text-5xl sm:text-6xl tracking-tight leading-[0.95]">
              {t.title1}
              <br />
              {t.title2}
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              {t.description}
            </p>
          </div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            onSubmit={handleSubmit}
            className="space-y-8 bg-zinc-950 border border-white/5 p-6 sm:p-12 rounded-sm"
          >
            {/* Name */}
            <div className="space-y-3">
              <label htmlFor="name" className="block text-sm tracking-wide uppercase text-gray-400">
                {t.yourName}
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-black border border-white/10 px-4 sm:px-6 py-4 text-white placeholder-gray-600 focus:border-white/30 focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </div>

            {/* Email */}
            <div className="space-y-3">
              <label htmlFor="email" className="block text-sm tracking-wide uppercase text-gray-400">
                {t.yourEmail}
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-black border border-white/10 px-4 sm:px-6 py-4 text-white placeholder-gray-600 focus:border-white/30 focus:outline-none transition-colors"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Role */}
            <div className="space-y-3">
              <label htmlFor="role" className="block text-sm tracking-wide uppercase text-gray-400">
                {t.role}
              </label>
              <select
                id="role"
                required
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="w-full bg-black border border-white/10 px-4 sm:px-6 py-4 text-white focus:border-white/30 focus:outline-none transition-colors appearance-none cursor-pointer"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L6 6L11 1' stroke='%23888888' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 1.5rem center',
                }}
              >
                <option value="" disabled>
                  {t.selectRole}
                </option>
                {roles.map((role) => (
                  <option key={role} value={role}>
                    {role}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div className="space-y-3">
              <label htmlFor="message" className="block text-sm tracking-wide uppercase text-gray-400">
                {t.message}
              </label>
              <textarea
                id="message"
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={6}
                className="w-full bg-black border border-white/10 px-4 sm:px-6 py-4 text-white placeholder-gray-600 focus:border-white/30 focus:outline-none transition-colors resize-none"
                placeholder={t.messagePlaceholder}
              />
            </div>

            {/* CTAs */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={submissionStatus === 'submitting'}
                className="w-full px-8 py-5 bg-white text-black text-sm tracking-wide uppercase hover:bg-purple-600 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submissionStatus === 'submitting' ? t.sending : t.sendMessage}
              </button>
            </div>

            {/* Status Messages */}
            {submissionStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-green-500/10 border border-green-500/30 rounded text-center"
              >
                <p className="text-green-400 text-sm tracking-wide">
                  {t.successMessage}
                </p>
              </motion.div>
            )}

            {submissionStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-red-500/10 border border-red-500/30 rounded text-center"
              >
                <p className="text-red-400 text-sm tracking-wide">
                  {errorMessage}
                </p>
              </motion.div>
            )}
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
}