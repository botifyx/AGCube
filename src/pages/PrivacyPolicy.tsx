import { motion } from 'motion/react';
import { useSEO } from '@/hooks/useSEO';
import { Shield } from 'lucide-react';

const sections = [
  {
    title: 'Information We Collect',
    content: `We collect information you provide directly to us when you request a demo, fill out a contact form, subscribe to our communications, or otherwise interact with our services. This includes:
    
- **Contact Information**: Name, email address, phone number, and job title.
- **Company Information**: Organisation name, industry, company size, and business challenges.
- **Communication Data**: Messages, enquiries, and feedback you send to us.
- **Usage Data**: Information about how you interact with our website, including pages visited, time spent, and referral sources (collected via cookies and analytics tools).`,
  },
  {
    title: 'How We Use Your Information',
    content: `AG Cube uses the information we collect for the following purposes:

- **Service Delivery**: To respond to your enquiries, schedule consultations, and deliver advisory or technology services you have requested.
- **Communications**: To send you relevant updates, thought leadership content, event invitations, and service announcements, where you have opted in to receive them.
- **Business Intelligence**: To improve our services, website experience, and content based on aggregated usage patterns.
- **Legal Compliance**: To comply with applicable laws, regulations, and professional obligations.
- **Security**: To detect, investigate, and prevent fraudulent or unauthorised activity.`,
  },
  {
    title: 'Sharing Your Information',
    content: `We do not sell, rent, or trade your personal information to third parties. We may share your information in the following limited circumstances:

- **Service Providers**: Trusted third-party vendors who assist with CRM, email communication, analytics, and website hosting, under strict data processing agreements.
- **Professional Advisors**: Legal, accounting, or consulting partners when required for legitimate business operations.
- **Legal Requirements**: When required by law, court order, or regulatory authority.
- **Business Transfers**: In connection with a merger, acquisition, or sale of all or substantially all of our assets, with appropriate notice provided to affected individuals.`,
  },
  {
    title: 'Data Retention',
    content: `We retain your personal information only for as long as is necessary to fulfil the purposes for which it was collected, including to satisfy legal, regulatory, accounting, or reporting obligations.

Contact and enquiry data is typically retained for up to 3 years following our last meaningful interaction. Analytics and usage data is retained in aggregated or anonymised form. You may request deletion of your personal data at any time by contacting us at info@ag-cube.com.`,
  },
  {
    title: 'Your Rights',
    content: `Depending on your location, you may have the following rights regarding your personal information:

- **Access**: The right to request a copy of the personal data we hold about you.
- **Correction**: The right to request correction of inaccurate or incomplete data.
- **Deletion**: The right to request erasure of your personal data, subject to legal obligations.
- **Objection**: The right to object to certain types of processing, including direct marketing.
- **Portability**: The right to receive your data in a structured, machine-readable format.
- **Withdrawal of Consent**: Where processing is based on your consent, the right to withdraw it at any time.

To exercise any of these rights, contact us at info@ag-cube.com.`,
  },
  {
    title: 'Cookies',
    content: `Our website uses cookies and similar tracking technologies to enhance your browsing experience and gather usage analytics. Please refer to our Cookie Policy for full details on the types of cookies used and how to manage your preferences.`,
  },
  {
    title: 'International Transfers',
    content: `AG Cube operates globally and may transfer your personal data to countries outside your country of residence. Where such transfers occur, we ensure appropriate safeguards are in place, including Standard Contractual Clauses approved by relevant data protection authorities.`,
  },
  {
    title: 'Security',
    content: `We implement industry-standard technical and organisational measures to protect your personal information against unauthorised access, disclosure, alteration, or destruction. These include encryption in transit (TLS), access controls, and regular security assessments.

However, no method of transmission over the internet or electronic storage is 100% secure. We encourage you to use secure connections and keep your credentials confidential.`,
  },
  {
    title: 'Changes to This Policy',
    content: `We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or legal requirements. When we make material changes, we will update the "Last Updated" date at the top of this page. We encourage you to review this policy periodically.`,
  },
  {
    title: 'Contact Us',
    content: `If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:

**AG Cube**  
Email: info@ag-cube.com  
Website: ag-cube.com`,
  },
];

export default function PrivacyPolicy() {
  useSEO({
    title: 'Privacy Policy',
    description: 'AG Cube is committed to protecting your privacy. Read our policy on data collection and usage.',
    canonical: 'https://agcube.com/privacy-policy',
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
              <Shield size={14} />
              Legal
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              AG Cube is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your personal information when you engage with our advisory and technology services.
            </p>
            <p className="text-sm text-muted-foreground/60 mt-6 font-mono">
              Last Updated: 19 May 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
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
