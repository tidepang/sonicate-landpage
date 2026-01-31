import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

export function TermsPage() {
  const { language } = useLanguage();

  const t = {
    title: language === 'zh' ? '服务条款' : 'Terms of Service',
    lastUpdated: language === 'zh' ? '最后更新：2025年1月' : 'Last Updated: January 2025',
    intro: language === 'zh'
      ? '欢迎使用 SONICITE。通过访问或使用我们的服务，您同意遵守这些服务条款。请仔细阅读。'
      : 'Welcome to SONICITE. By accessing or using our services, you agree to be bound by these Terms of Service. Please read them carefully.',
    
    section1Title: language === 'zh' ? '1. 服务描述' : '1. Service Description',
    section1Content: language === 'zh'
      ? 'SONICITE FLOW 是一个为 DJ、制作人和创作者提供的音乐智能平台。我们的服务包括音轨分析、智能推荐、演出规划工具和 AI 辅助功能，旨在增强您的创作工作流程。'
      : 'SONICITE FLOW is a music intelligence platform for DJs, producers, and creators. Our services include track analysis, intelligent recommendations, set planning tools, and AI-assisted features designed to enhance your creative workflow.',
    
    section2Title: language === 'zh' ? '2. 用户账户' : '2. User Accounts',
    section2Content: language === 'zh'
      ? '要使用 SONICITE FLOW，您必须创建一个账户。您有责任：\n\n• 提供准确和完整的注册信息。\n\n• 维护账户凭据的安全性和机密性。\n\n• 通知我们任何未经授权的账户使用。\n\n• 对您账户下发生的所有活动负责。'
      : 'To use SONICITE FLOW, you must create an account. You are responsible for:\n\n• Providing accurate and complete registration information.\n\n• Maintaining the security and confidentiality of your account credentials.\n\n• Notifying us of any unauthorized account use.\n\n• All activities that occur under your account.',
    
    section3Title: language === 'zh' ? '3. 用户内容和版权责任' : '3. User Content and Copyright Responsibility',
    section3Content: language === 'zh'
      ? '当您将音轨上传到 SONICITE 时，您声明并保证：\n\n• 您拥有或已获得所有必要的权利、执照和许可，以上传、存储和使用这些音轨。\n\n• 您上传的内容不侵犯任何第三方的版权、商标或其他知识产权。\n\n• 您对上传内容的合法性承担全部责任。\n\n• 您了解并同意，您有责任确保所有上传的音轨都具有适当的许可证和版权授权。\n\n重要提示：SONICITE 不对用户上传内容的版权状态进行验证。您必须确保您有权使用您上传到我们平台的任何音乐内容。未经授权上传受版权保护的材料可能导致法律后果，包括但不限于账户终止和法律诉讼。\n\n如果您不确定是否拥有必要的权利或许可，请在上传前咨询法律顾问或版权所有者。'
      : 'When you upload tracks to SONICITE, you represent and warrant that:\n\n• You own or have obtained all necessary rights, licenses, and permissions to upload, store, and use these tracks.\n\n• Your uploaded content does not infringe upon any third party\'s copyright, trademark, or other intellectual property rights.\n\n• You accept full responsibility for the legality of the content you upload.\n\n• You understand and agree that it is your responsibility to ensure all uploaded tracks have proper licenses and copyright authorization.\n\nIMPORTANT: SONICITE does not verify the copyright status of user-uploaded content. You must ensure you have the right to use any music content you upload to our platform. Unauthorized uploading of copyrighted material may result in legal consequences, including but not limited to account termination and legal action.\n\nIf you are uncertain whether you possess the necessary rights or licenses, please consult with legal counsel or the copyright owner before uploading.',
    
    section4Title: language === 'zh' ? '4. 许可授予' : '4. License Grant',
    section4Content: language === 'zh'
      ? '通过将内容上传到 SONICITE，您授予我们有限的、非排他性的、全球性的许可，以存储、处理和分析您的音轨，仅用于提供和改进我们的服务。我们不会将您的内容用于任何其他目的，也不会在未经您明确同意的情况下与第三方共享。'
      : 'By uploading content to SONICITE, you grant us a limited, non-exclusive, worldwide license to store, process, and analyze your tracks solely for the purpose of providing and improving our services. We will not use your content for any other purpose or share it with third parties without your explicit consent.',
    
    section5Title: language === 'zh' ? '5. 版权侵权通知' : '5. Copyright Infringement Notices',
    section5Content: language === 'zh'
      ? 'SONICITE 尊重知识产权。如果您认为您的版权作品被侵犯，请通过 copyright@sonicite.com 通知我们，并提供：\n\n• 您声称被侵犯的版权作品的描述。\n\n• 侵权材料在我们平台上的位置。\n\n• 您的联系信息。\n\n• 一份声明，表明您有诚意相信该使用未经版权所有者、其代理人或法律授权。\n\n• 一份声明，表明通知中的信息准确，并且您是版权所有者或被授权代表版权所有者行事。\n\n我们将迅速调查所有有效的侵权声明，并可能删除或禁用对涉嫌侵权材料的访问。'
      : 'SONICITE respects intellectual property rights. If you believe your copyrighted work has been infringed, please notify us at copyright@sonicite.com with:\n\n• A description of the copyrighted work you claim has been infringed.\n\n• The location of the infringing material on our platform.\n\n• Your contact information.\n\n• A statement that you have a good faith belief that the use is not authorized by the copyright owner, its agent, or the law.\n\n• A statement that the information in the notification is accurate, and that you are the copyright owner or authorized to act on behalf of the copyright owner.\n\nWe will promptly investigate all valid infringement claims and may remove or disable access to allegedly infringing material.',
    
    section6Title: language === 'zh' ? '6. 禁止行为' : '6. Prohibited Conduct',
    section6Content: language === 'zh'
      ? '您同意不会：\n\n• 违反任何适用的法律或法规。\n\n• 侵犯他人的知识产权或其他权利。\n\n• 上传恶意软件、病毒或任何有害代码。\n\n• 试图未经授权访问我们的系统或其他用户的账户。\n\n• 使用我们的服务进行任何非法或欺诈活动。\n\n• 干扰或破坏我们服务的正常运行。\n\n• 使用自动化工具或机器人访问我们的服务，除非得到我们的明确许可。'
      : 'You agree not to:\n\n• Violate any applicable laws or regulations.\n\n• Infringe upon the intellectual property or other rights of others.\n\n• Upload malware, viruses, or any harmful code.\n\n• Attempt unauthorized access to our systems or other users\' accounts.\n\n• Use our services for any illegal or fraudulent activity.\n\n• Interfere with or disrupt the normal operation of our services.\n\n• Use automated tools or bots to access our services without our explicit permission.',
    
    section7Title: language === 'zh' ? '7. 服务修改和终止' : '7. Service Modification and Termination',
    section7Content: language === 'zh'
      ? 'SONICITE 保留随时修改、暂停或终止服务（或其任何部分）的权利，无论是否通知。我们可能会因任何原因（包括但不限于违反这些条款）暂停或终止您的账户。'
      : 'SONICITE reserves the right to modify, suspend, or discontinue the services (or any part thereof) at any time, with or without notice. We may suspend or terminate your account for any reason, including but not limited to violation of these Terms.',
    
    section8Title: language === 'zh' ? '8. 免责声明' : '8. Disclaimers',
    section8Content: language === 'zh'
      ? '我们的服务按"原样"和"可用"基础提供，不提供任何明示或暗示的保证。SONICITE 不保证：\n\n• 服务将不间断、安全或无错误。\n\n• 服务的结果将准确或可靠。\n\n• 通过服务获得的任何信息的质量。\n\nAI 生成的建议和分析仅供参考。您应根据自己的判断评估和使用这些建议。'
      : 'Our services are provided "as is" and "as available" without warranties of any kind, either express or implied. SONICITE does not warrant that:\n\n• The services will be uninterrupted, secure, or error-free.\n\n• The results of the services will be accurate or reliable.\n\n• The quality of any information obtained through the services.\n\nAI-generated recommendations and analysis are provided for informational purposes only. You should evaluate and use these recommendations based on your own judgment.',
    
    section9Title: language === 'zh' ? '9. 责任限制' : '9. Limitation of Liability',
    section9Content: language === 'zh'
      ? '在适用法律允许的最大范围内，SONICITE 及其关联公司、董事、员工或代理人对任何间接、偶然、特殊、后果性或惩罚性损害（包括但不限于利润损失、数据丢失或业务中断）不承担责任，即使我们已被告知此类损害的可能性。'
      : 'To the maximum extent permitted by applicable law, SONICITE and its affiliates, directors, employees, or agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data loss, or business interruption, even if we have been advised of the possibility of such damages.',
    
    section10Title: language === 'zh' ? '10. 赔偿' : '10. Indemnification',
    section10Content: language === 'zh'
      ? '您同意赔偿、辩护并使 SONICITE 及其关联公司、董事、员工和代理人免受因以下原因产生的任何索赔、损害、义务、损失、责任、成本或债务以及费用（包括但不限于律师费）的损害：\n\n• 您使用我们的服务。\n\n• 您违反这些条款。\n\n• 您侵犯任何第三方权利，包括任何版权、财产权或隐私权。\n\n• 您上传到我们平台的任何内容。'
      : 'You agree to indemnify, defend, and hold harmless SONICITE and its affiliates, directors, employees, and agents from any claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney\'s fees) arising from:\n\n• Your use of our services.\n\n• Your violation of these Terms.\n\n• Your violation of any third-party rights, including any copyright, property, or privacy right.\n\n• Any content you upload to our platform.',
    
    section11Title: language === 'zh' ? '11. 适用法律' : '11. Governing Law',
    section11Content: language === 'zh'
      ? '这些条款受适用法律管辖并根据其解释。因这些条款引起的任何争议应通过友好协商解决。'
      : 'These Terms shall be governed by and construed in accordance with applicable law. Any disputes arising from these Terms shall be resolved through amicable negotiation.',
    
    section12Title: language === 'zh' ? '12. 条款变更' : '12. Changes to Terms',
    section12Content: language === 'zh'
      ? '我们可能会不时更新这些条款。我们将在本页面发布任何更改，并在适当的情况下通过电子邮件通知您。继续使用我们的服务即表示您接受修订后的条款。'
      : 'We may update these Terms from time to time. We will post any changes on this page and, where appropriate, notify you via email. Your continued use of our services constitutes acceptance of the revised Terms.',
    
    section13Title: language === 'zh' ? '13. 联系我们' : '13. Contact Us',
    section13Content: language === 'zh'
      ? '如果您对这些服务条款有任何疑问，请通过以下方式联系我们：\n\n电子邮件：legal@sonicite.com\n地址：SONICITE Legal Team'
      : 'If you have any questions about these Terms of Service, please contact us:\n\nEmail: legal@sonicite.com\nAddress: SONICITE Legal Team',
  };

  const sections = [
    { title: t.section1Title, content: t.section1Content },
    { title: t.section2Title, content: t.section2Content },
    { title: t.section3Title, content: t.section3Content, highlight: true },
    { title: t.section4Title, content: t.section4Content },
    { title: t.section5Title, content: t.section5Content },
    { title: t.section6Title, content: t.section6Content },
    { title: t.section7Title, content: t.section7Content },
    { title: t.section8Title, content: t.section8Content },
    { title: t.section9Title, content: t.section9Content },
    { title: t.section10Title, content: t.section10Content },
    { title: t.section11Title, content: t.section11Content },
    { title: t.section12Title, content: t.section12Content },
    { title: t.section13Title, content: t.section13Content },
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
                  className={`mb-12 ${section.highlight ? 'border-l-2 border-purple-500/50 pl-8 py-4 bg-purple-500/5' : ''}`}
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
