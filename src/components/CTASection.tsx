import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

export function CTASection() {
  const navigate = useNavigate();
  
  return (
    <section className="relative py-40 bg-black">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="space-y-6">
            <div className="text-sm tracking-[0.3em] text-gray-500 uppercase">
              Start Your Journey
            </div>
            
            <h2 className="text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-[0.95] max-w-4xl mx-auto">
              Ready to Transform
              <br />
              Your Workflow?
            </h2>

            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Experience the future of DJ preparation. Join SONICITE FLOW and 
              unlock your full creative potential.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <a 
              href="https://flow.sonicite.ai/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-10 py-4 bg-white text-black text-sm tracking-wide uppercase hover:bg-purple-600 hover:text-white transition-colors"
            >
              Get Started Free
            </a>
            <button 
              onClick={() => navigate('/demo')}
              className="px-10 py-4 border border-white/20 text-sm tracking-wide uppercase hover:bg-white/5 transition-colors"
            >
              Schedule Demo
            </button>
          </div>

          <div className="pt-12 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              No credit card required
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              14-day free trial
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Cancel anytime
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}