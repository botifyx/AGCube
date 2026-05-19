import { motion } from 'motion/react';
import { useSEO } from '@/hooks/useSEO';
import { Cookie } from 'lucide-react';

const cookieTypes = [
  {
    name: 'Strictly Necessary',
    purpose: 'Required for the website to function properly. These cannot be disabled.',
    examples: 'Session management, security tokens, load balancing.',
    duration: 'Session',
    canOptOut: false,
  },
  {
    name: 'Analytics & Performance',
    purpose: 'Help us understand how visitors interact with our website to improve performance and content.',
    examples: 'Google Analytics (page views, session duration, traffic sources).',
    duration: 'Up to 2 years',
    canOptOut: true,
  },
  {
    name: 'Functional',
    purpose: 'Enable enhanced functionality and personalisation such as remembering your theme preference.',
    examples: 'Theme preference (dark/light mode), language settings.',
    duration: 'Up to 1 year',
    canOptOut: true,
  },
  {
    name: 'Marketing & Targeting',
    purpose: 'Used to deliver relevant content and measure the effectiveness of our outreach campaigns.',
    examples: 'LinkedIn Insight Tag, retargeting pixels.',
    duration: 'Up to 90 days',
    canOptOut: true,
  },
];

const sections = [
  {
    title: 'What Are Cookies?',
    content: `Cookies are small text files placed on your device (computer, tablet, or mobile) when you visit a website. They are widely used to make websites work efficiently and to provide reporting information to website owners.

Cookies allow websites to recognise your device, remember your preferences, and tailor your experience. They do not contain personal information by themselves, but may be linked to information you have provided.`,
  },
  {
    title: 'How We Use Cookies',
    content: `AG Cube uses cookies to:

- Ensure the website functions correctly and securely.
- Understand how visitors navigate and engage with our content.
- Remember your preferences (e.g., dark mode) across sessions.
- Measure the reach and effectiveness of our marketing communications.
- Improve our content, services, and user experience over time.`,
  },
  {
    title: 'Third-Party Cookies',
    content: `In addition to our own cookies, we may use third-party cookies from trusted analytics and marketing partners. These third parties operate under their own privacy policies and cookie notices:

- **Google Analytics**: Used for website traffic and behavioural analytics.
- **LinkedIn Insight Tag**: Used to understand the professional profile of our visitors and measure the effectiveness of LinkedIn campaigns.

We do not permit third-party advertising networks to set cookies on our website beyond those listed above.`,
  },
  {
    title: 'Managing Your Cookie Preferences',
    content: `You can control and manage cookies in several ways:

- **Browser Settings**: Most modern browsers allow you to refuse or delete cookies. Visit your browser's help section for instructions.
- **Opt-Out Tools**: For analytics cookies, you can use the Google Analytics Opt-out Browser Add-on (tools.google.com/dlpage/gaoptout).
- **Consent Preferences**: When visiting our site for the first time, you will be presented with a cookie consent notice where you can customise your preferences.

Please note that disabling certain cookies may affect the functionality of our website and your ability to access some features.`,
  },
  {
    title: 'Updates to This Policy',
    content: `We may update this Cookie Policy periodically to reflect changes in the cookies we use or applicable legislation. The date at the top of this page will always reflect when the policy was last revised. We recommend reviewing this page regularly to stay informed.`,
  },
  {
    title: 'Contact',
    content: `If you have any questions about how AG Cube uses cookies or wish to exercise your rights regarding cookie-based data, please contact us at:

**AG Cube**  
Email: info@ag-cube.com  
Website: ag-cube.com`,
  },
];

export default function CookiePolicy() {
  useSEO({
    title: 'Cookie Policy',
    description: 'Learn how AG Cube uses cookies and similar technologies to improve your experience.',
    canonical: 'https://agcube.com/cookie-policy',
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 text-blue-500 text-xs font-mono uppercase tracking-widest mb-6 border border-blue-500/20 bg-blue-500/5 px-4 py-2 rounded-full">
              <Cookie size={14} />
              Legal
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
              Cookie Policy
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              This policy explains what cookies AG Cube uses on its website, why we use them, and how you can manage your cookie preferences.
            </p>
            <p className="text-sm text-muted-foreground/60 mt-6 font-mono">
              Last Updated: 19 May 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cookie Table */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-foreground mb-8"
            >
              Cookies We Use
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="overflow-x-auto rounded-xl border border-border"
            >
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/40">
                    <th className="text-left px-6 py-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Category</th>
                    <th className="text-left px-6 py-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Purpose</th>
                    <th className="text-left px-6 py-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Examples</th>
                    <th className="text-left px-6 py-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Duration</th>
                    <th className="text-left px-6 py-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Optional</th>
                  </tr>
                </thead>
                <tbody>
                  {cookieTypes.map((cookie, i) => (
                    <tr
                      key={cookie.name}
                      className={`border-b border-border last:border-0 ${i % 2 === 0 ? '' : 'bg-muted/10'}`}
                    >
                      <td className="px-6 py-4 font-medium text-foreground whitespace-nowrap">{cookie.name}</td>
                      <td className="px-6 py-4 text-muted-foreground max-w-xs">{cookie.purpose}</td>
                      <td className="px-6 py-4 text-muted-foreground">{cookie.examples}</td>
                      <td className="px-6 py-4 text-muted-foreground whitespace-nowrap font-mono text-xs">{cookie.duration}</td>
                      <td className="px-6 py-4">
                        {cookie.canOptOut ? (
                          <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">Yes</span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground bg-muted/40 border border-border px-2 py-0.5 rounded-full">Required</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto space-y-16">
            {sections.map((section, i) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="space-y-4"
              >
                <h2 className="text-xl font-semibold text-foreground flex items-center gap-3">
                  <span className="text-blue-500 font-mono text-sm">{String(i + 1).padStart(2, '0')}.</span>
                  {section.title}
                </h2>
                <div className="text-muted-foreground leading-relaxed text-sm space-y-3 pl-9 article-body">
                  <div dangerouslySetInnerHTML={{ __html: section.content
                    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                    .replace(/^- (.+)$/gm, '<li>$1</li>')
                    .replace(/(<li>.*<\/li>\n?)+/g, (m) => `<ul>${m}</ul>`)
                    .replace(/\n\n/g, '</p><p>')
                    .replace(/^([^<])/, '<p>$1')
                    .replace(/([^>])$/, '$1</p>')
                  }} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
