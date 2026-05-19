import { motion } from 'motion/react';
import { useSEO } from '@/hooks/useSEO';
import { FileText } from 'lucide-react';

const sections = [
  {
    title: 'Acceptance of Terms',
    content: `By accessing or using the AG Cube website (ag-cube.com) and any associated services, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our website or services.

These terms apply to all visitors, clients, and other users who access our website or engage with our advisory or technology services.`,
  },
  {
    title: 'Description of Services',
    content: `AG Cube provides integrated advisory and technology services across the following practice areas:

- **Digital Customer Experience (CX)**: Strategy, journey design, and operational frameworks.
- **Data & AI Strategy**: Intelligence architecture, AI readiness assessments, and use-case prioritisation.
- **Marketing Operations**: MarTech strategy, operating model design, and campaign performance frameworks.
- **Classic WMS**: AI-native warehouse management system implementation and support.
- **Supply Chain Technology Integration**: End-to-end supply chain system connectivity and orchestration.

Service engagements are governed by separate professional services agreements, statements of work, or master service agreements entered into between AG Cube and the client.`,
  },
  {
    title: 'Intellectual Property',
    content: `All content on the AG Cube website — including text, graphics, logos, icons, images, audio clips, data compilations, and software — is the property of AG Cube or its content suppliers and is protected by applicable intellectual property laws.

You may not reproduce, distribute, modify, transmit, or use any content from this website for commercial purposes without the prior written consent of AG Cube. Limited personal, non-commercial use is permitted provided that all copyright and proprietary notices are retained.

Any methodologies, frameworks, tools, or proprietary approaches developed by AG Cube in the course of service delivery remain the intellectual property of AG Cube unless expressly agreed otherwise in a written agreement.`,
  },
  {
    title: 'Client Responsibilities',
    content: `When engaging AG Cube's services, clients agree to:

- Provide accurate, complete, and timely information required for the delivery of services.
- Designate an appropriate point of contact and decision-maker for the engagement.
- Comply with all applicable laws and regulations in connection with their use of our services and deliverables.
- Refrain from using AG Cube deliverables for any unlawful, misleading, or harmful purpose.`,
  },
  {
    title: 'Confidentiality',
    content: `Both parties agree to maintain the confidentiality of proprietary or sensitive information exchanged during an engagement. AG Cube will not disclose client-specific information to third parties without consent, except as required by law or as permitted under our Privacy Policy.

Specific confidentiality obligations for commercial engagements are detailed in the applicable service agreement or non-disclosure agreement.`,
  },
  {
    title: 'Disclaimers',
    content: `The AG Cube website and its content are provided on an "as is" and "as available" basis without warranty of any kind, either express or implied.

AG Cube does not warrant that:
- The website will be uninterrupted, error-free, or free of viruses or other harmful components.
- The information provided on the website is accurate, complete, or current.
- The results obtained from using our services will meet your specific business objectives.

Advisory insights and strategic recommendations are based on the information available at the time of engagement and are subject to change as market conditions evolve.`,
  },
  {
    title: 'Limitation of Liability',
    content: `To the maximum extent permitted by applicable law, AG Cube shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the website or our services, including loss of profits, data, goodwill, or business opportunities.

Our total liability for any claims arising from or related to our services shall not exceed the fees paid by you to AG Cube in the three months preceding the claim, unless otherwise agreed in a signed service agreement.`,
  },
  {
    title: 'Third-Party Links',
    content: `Our website may contain links to third-party websites for reference or convenience. AG Cube does not endorse, control, or assume responsibility for the content, privacy practices, or accuracy of any third-party site. Accessing external links is at your own risk.`,
  },
  {
    title: 'Governing Law',
    content: `These Terms of Service shall be governed by and construed in accordance with applicable commercial law. Any disputes arising from these terms or your use of AG Cube's services shall be subject to the exclusive jurisdiction of the competent courts in the relevant jurisdiction.`,
  },
  {
    title: 'Amendments',
    content: `AG Cube reserves the right to update or modify these Terms of Service at any time. Changes will be effective upon posting to this page with an updated date. Continued use of the website or services following any changes constitutes your acceptance of the revised terms.`,
  },
  {
    title: 'Contact',
    content: `For questions regarding these Terms of Service, please contact:

**AG Cube**  
Email: info@ag-cube.com  
Website: ag-cube.com`,
  },
];

export default function TermsOfService() {
  useSEO({
    title: 'Terms of Service',
    description: 'Review the Terms of Service for using the AG Cube website and professional services.',
    canonical: 'https://agcube.com/terms-of-service',
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
              <FileText size={14} />
              Legal
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
              Terms of Service
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              These terms govern your use of the AG Cube website and professional services. Please read them carefully before engaging with our advisory or technology offerings.
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
