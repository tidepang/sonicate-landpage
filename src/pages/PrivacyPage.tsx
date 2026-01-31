import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

export function PrivacyPage() {
  const { language } = useLanguage();

  const t = {
    title: language === 'zh' ? '隐私政策' : 'Privacy Policy',
    lastUpdated: language === 'zh' ? '最后更新：2025年1月' : 'Last Updated: January 2025',
    intro: language === 'zh'
      ? '在 SONICITE，我们重视您的隐私。本隐私政策说明了我们如何收集、使用和保护您在使用我们服务时的个人信息。'
      : 'At SONICITE, we value your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you use our services.',
    
    section1Title: language === 'zh' ? '1. 我们收集的信息' : '1. Information We Collect',
    section1Content: language === 'zh'
      ? '我们可能会收集以下类型的信息：\n\n• 账户信息：当您注册 SONICITE FLOW 时，我们收集您的姓名、电子邮件地址和其他必要的注册信息。\n\n• 音乐文件和元数据：您上传到我们平台的音轨及其相关元数据，用于分析和提供我们的服务。\n\n• 使用数据：我们收集有关您如何使用我们服务的信息，包括您的交互、偏好和使用模式。\n\n• 技术信息：我们自动收集设备信息、IP 地址、浏览器类型和操作系统。'
      : 'We may collect the following types of information:\n\n• Account Information: When you register for SONICITE FLOW, we collect your name, email address, and other necessary registration details.\n\n• Music Files and Metadata: Audio tracks you upload to our platform and their associated metadata for analysis and service provision.\n\n• Usage Data: Information about how you use our services, including your interactions, preferences, and usage patterns.\n\n• Technical Information: We automatically collect device information, IP addresses, browser type, and operating system.',
    
    section2Title: language === 'zh' ? '2. 我们如何使用您的信息' : '2. How We Use Your Information',
    section2Content: language === 'zh'
      ? '我们使用收集的信息用于：\n\n• 提供和改进我们的服务，包括音轨分析、推荐和 AI 辅助功能。\n\n• 个性化您的体验并根据您的偏好定制建议。\n\n• 与您就服务更新、新功能和支持进行沟通。\n\n• 监控和分析使用趋势以改进我们的平台。\n\n• 确保我们服务的安全性和完整性。'
      : 'We use the collected information to:\n\n• Provide and improve our services, including track analysis, recommendations, and AI-assisted features.\n\n• Personalize your experience and tailor recommendations based on your preferences.\n\n• Communicate with you about service updates, new features, and support.\n\n• Monitor and analyze usage trends to improve our platform.\n\n• Ensure the security and integrity of our services.',
    
    section3Title: language === 'zh' ? '3. 数据存储和安全' : '3. Data Storage and Security',
    section3Content: language === 'zh'
      ? '我们采取适当的技术和组织措施来保护您的个人信息免遭未经授权的访问、披露、更改或破坏。您的数据安全地存储在加密服务器上，我们定期审查我们的安全实践以确保最高级别的保护。'
      : 'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, disclosure, alteration, or destruction. Your data is stored securely on encrypted servers, and we regularly review our security practices to ensure the highest level of protection.',
    
    section4Title: language === 'zh' ? '4. 数据共享' : '4. Data Sharing',
    section4Content: language === 'zh'
      ? '我们不会向第三方出售您的个人信息。我们可能会在以下情况下共享您的信息：\n\n• 在您同意的情况下。\n\n• 与帮助我们运营服务的服务提供商（受严格保密义务约束）。\n\n• 遵守法律义务或响应合法请求。\n\n• 保护 SONICITE、我们的用户或公众的权利、财产或安全。'
      : 'We do not sell your personal information to third parties. We may share your information:\n\n• With your consent.\n\n• With service providers who help us operate our services (bound by strict confidentiality obligations).\n\n• To comply with legal obligations or respond to lawful requests.\n\n• To protect the rights, property, or safety of SONICITE, our users, or the public.',
    
    section5Title: language === 'zh' ? '5. 您的权利' : '5. Your Rights',
    section5Content: language === 'zh'
      ? '您对您的个人信息拥有以下权利：\n\n• 访问和获取我们持有的关于您的数据副本。\n\n• 更正不准确或不完整的信息。\n\n• 删除您的个人信息（受某些法律义务约束）。\n\n• 反对或限制某些数据处理活动。\n\n• 数据可移植性。\n\n如需行使这些权利，请通过 privacy@sonicite.com 联系我们。'
      : 'You have the following rights regarding your personal information:\n\n• Access and obtain a copy of the data we hold about you.\n\n• Correct inaccurate or incomplete information.\n\n• Delete your personal information (subject to certain legal obligations).\n\n• Object to or restrict certain data processing activities.\n\n• Data portability.\n\nTo exercise these rights, please contact us at privacy@sonicite.com.',
    
    section6Title: language === 'zh' ? '6. Cookie 和跟踪技术' : '6. Cookies and Tracking Technologies',
    section6Content: language === 'zh'
      ? '我们使用 Cookie 和类似的跟踪技术来增强您的体验、分析使用情况并提供个性化内容。您可以通过浏览器设置管理 Cookie 偏好，但请注意，禁用 Cookie 可能会影响某些功能。'
      : 'We use cookies and similar tracking technologies to enhance your experience, analyze usage, and provide personalized content. You can manage cookie preferences through your browser settings, though please note that disabling cookies may affect certain functionalities.',
    
    section7Title: language === 'zh' ? '7. 儿童隐私' : '7. Children\'s Privacy',
    section7Content: language === 'zh'
      ? 'SONICITE 不针对 13 岁以下的儿童。我们不会故意收集 13 岁以下儿童的个人信息。如果您认为我们可能拥有来自 13 岁以下儿童的信息，请联系我们。'
      : 'SONICITE is not intended for children under 13. We do not knowingly collect personal information from children under 13. If you believe we may have information from a child under 13, please contact us.',
    
    section8Title: language === 'zh' ? '8. 政策变更' : '8. Changes to This Policy',
    section8Content: language === 'zh'
      ? '我们可能会不时更新本隐私政策。我们将在本页面发布任何更改，并在适当的情况下通过电子邮件通知您。我们鼓励您定期查看本政策以了解最新信息。'
      : 'We may update this Privacy Policy from time to time. We will post any changes on this page and, where appropriate, notify you via email. We encourage you to review this policy regularly to stay informed.',
    
    section9Title: language === 'zh' ? '9. 联系我们' : '9. Contact Us',
    section9Content: language === 'zh'
      ? '如果您对本隐私政策有任何疑问或疑虑，请通过以下方式联系我们：\n\n电子邮件：privacy@sonicite.com\n地址：SONICITE Privacy Team'
      : 'If you have any questions or concerns about this Privacy Policy, please contact us:\n\nEmail: privacy@sonicite.com\nAddress: SONICITE Privacy Team',
  };

  const sections = [
    { title: t.section1Title, content: t.section1Content },
    { title: t.section2Title, content: t.section2Content },
    { title: t.section3Title, content: t.section3Content },
    { title: t.section4Title, content: t.section4Content },
    { title: t.section5Title, content: t.section5Content },
    { title: t.section6Title, content: t.section6Content },
    { title: t.section7Title, content: t.section7Content },
    { title: t.section8Title, content: t.section8Content },
    { title: t.section9Title, content: t.section9Content },
  ];

  return (
    <div className="relative bg-black min-h-screen">
      <div className="pt-40 pb-40">
        <div className="max-w-[900px] mx-auto px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-[0.95] mb-6">
              {t.title}
            </h1>
            <p className="text-sm text-gray-500 mb-16">{t.lastUpdated}</p>
            
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-lg text-gray-400 leading-relaxed mb-12">
                {t.intro}
              </p>

              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true }}
                  className="mb-12"
                >
                  <h2 className="text-2xl tracking-tight mb-6">{section.title}</h2>
                  <div className="text-gray-400 leading-relaxed whitespace-pre-line">
                    {section.content}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
