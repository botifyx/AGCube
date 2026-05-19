import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  Download, 
  ClipboardCheck, 
  HelpCircle, 
  X, 
  Check, 
  RefreshCw, 
  FileText 
} from 'lucide-react';
import { jsPDF } from 'jspdf';

const quizQuestions = [
  {
    question: "Customer Feedback Collection",
    subtitle: "How does your organization gather customer feedback?",
    options: [
      { text: "We don't actively collect feedback", score: 1 },
      { text: "We collect it reactively when issues arise", score: 2 },
      { text: "We run regular surveys like NPS or CSAT", score: 3 },
      { text: "We capture feedback across multiple digital touchpoints", score: 4 },
      { text: "Feedback is continuously analyzed and triggers real-time workflows", score: 5 },
    ]
  },
  {
    question: "Data Integration",
    subtitle: "How integrated is your customer data across systems?",
    options: [
      { text: "Siloed in individual team spreadsheets or emails", score: 1 },
      { text: "Partially integrated within departmental tools", score: 2 },
      { text: "Connected via database syncs or weekly batch processes", score: 3 },
      { text: "Single unified customer view (CRM) accessible to all client-facing teams", score: 4 },
      { text: "Real-time Customer Data Platform (CDP) powering personalization", score: 5 },
    ]
  },
  {
    question: "Personalization Depth",
    subtitle: "To what level do you personalize the customer journey?",
    options: [
      { text: "No personalization, same experience for everyone", score: 1 },
      { text: "Basic personalization, like using their name in emails", score: 2 },
      { text: "Segment-based personalization for major demographics", score: 3 },
      { text: "Behavioral personalization based on recent interactions", score: 4 },
      { text: "Real-time, AI-driven 1-to-1 dynamic personalization", score: 5 },
    ]
  },
  {
    question: "Technology Stack Integration",
    subtitle: "What does your customer-facing technology stack look like?",
    options: [
      { text: "Fragmented tools with no central architecture", score: 1 },
      { text: "Separate platforms for support, sales, and marketing", score: 2 },
      { text: "Standard CRM suite with basic integrations", score: 3 },
      { text: "Fully integrated stack with custom APIs and tracking", score: 4 },
      { text: "Modern, API-first headless tech stack with AI orchestration", score: 5 },
    ]
  },
  {
    question: "Ownership & Culture",
    subtitle: "Who owns the customer experience in your organization?",
    options: [
      { text: "Nobody, it is handled ad-hoc by support", score: 1 },
      { text: "Department heads own their respective customer touchpoints", score: 2 },
      { text: "A dedicated CX manager or small team coordinates initiatives", score: 3 },
      { text: "Executive leadership (e.g. Chief Customer Officer) oversees CX strategy", score: 4 },
      { text: "CX is a core corporate value; every employee's goals are linked to CX metrics", score: 5 },
    ]
  }
];

const checklistSections = [
  {
    title: 'Strategy & Leadership',
    items: [
      'Clear business goals defined for AI adoption.',
      'Executive sponsorship and budget allocated.',
      'Defined KPIs for measuring AI ROI.'
    ]
  },
  {
    title: 'Data Infrastructure',
    items: [
      'Centralized data repository (Data Lake/Warehouse).',
      'Data cleaning and pipeline automation processes in place.',
      'Data privacy, security, and compliance frameworks.'
    ]
  },
  {
    title: 'Talent & Culture',
    items: [
      'Team members trained in basic AI/data literacy.',
      'Data science/engineering resources available (in-house or partners).',
      'Change management plan to address employee concerns.'
    ]
  },
  {
    title: 'Technology & Systems',
    items: [
      'API-first integration capabilities in existing systems.',
      'Scalable cloud compute infrastructure.',
      'Established guidelines for selecting build vs. buy solutions.'
    ]
  },
  {
    title: 'Ethics & Governance',
    items: [
      'AI ethics guidelines (bias, transparency, fairness).',
      'Model monitoring and feedback loop processes.',
      'Legal review process for intellectual property and usage.'
    ]
  }
];

export function CTA() {
  const [isRequesting, setIsRequesting] = useState(false);
  const navigate = useNavigate();

  // Modals & States
  const [activeModal, setActiveModal] = useState<'quiz' | 'checklist' | null>(null);
  
  // Quiz states
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedScore, setSelectedScore] = useState<number | null>(null);
  const [quizScores, setQuizScores] = useState<number[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);

  // Checklist states
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const handleGetStarted = () => {
    setIsRequesting(true);
    setTimeout(() => {
      navigate('/contact');
    }, 1200);
  };

  const handleQuizAnswer = () => {
    if (selectedScore === null) return;
    const newScores = [...quizScores, selectedScore];
    setQuizScores(newScores);
    setSelectedScore(null);
    
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedScore(null);
    setQuizScores([]);
    setQuizCompleted(false);
  };

  const toggleChecklistItem = (secIdx: number, itemIdx: number) => {
    const key = `${secIdx}-${itemIdx}`;
    setCheckedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    
    // Header block
    doc.setFillColor(13, 17, 23); // #0d1117
    doc.rect(0, 0, 210, 45, 'F');
    
    doc.setTextColor(255, 255, 255);
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(24);
    doc.text('AG CUBE', 20, 20);
    
    doc.setFontSize(10);
    doc.setFont('Helvetica', 'normal');
    doc.setTextColor(156, 163, 175);
    doc.text('STRATEGY MEETS EXECUTION INTELLIGENCE', 20, 28);
    
    doc.setFontSize(14);
    doc.setFont('Helvetica', 'bold');
    doc.setTextColor(59, 130, 246); // #3b82f6
    doc.text('AI READINESS CHECKLIST', 120, 24);

    doc.setFillColor(59, 130, 246);
    doc.rect(120, 28, 70, 1, 'F');
    
    // Subtitle
    doc.setTextColor(75, 85, 99);
    doc.setFont('Helvetica', 'normal');
    doc.setFontSize(10);
    doc.text('A framework for assessing your organization\'s preparedness for AI integration.', 20, 56);
    
    let y = 72;
    
    checklistSections.forEach((sec, secIdx) => {
      if (y > 240) {
        doc.addPage();
        y = 30;
      }
      
      // Section Header
      doc.setFont('Helvetica', 'bold');
      doc.setFontSize(12);
      doc.setTextColor(13, 17, 23);
      doc.text(sec.title.toUpperCase(), 20, y);
      
      // Section accent line
      doc.setFillColor(229, 231, 235);
      doc.rect(20, y + 2, 170, 0.5, 'F');
      y += 10;
      
      doc.setFont('Helvetica', 'normal');
      doc.setFontSize(10);
      
      sec.items.forEach((item, itemIdx) => {
        const isChecked = checkedItems[`${secIdx}-${itemIdx}`];
        
        // Draw checkbox
        doc.setDrawColor(156, 163, 175);
        doc.setLineWidth(0.5);
        doc.rect(20, y - 3.5, 4, 4);
        
        if (isChecked) {
          // Draw a small cross or checkmark inside
          doc.setFillColor(59, 130, 246);
          doc.rect(21, y - 2.5, 2, 2, 'F');
          
          doc.setTextColor(17, 24, 39);
          doc.setFont('Helvetica', 'bold');
        } else {
          doc.setTextColor(75, 85, 99);
          doc.setFont('Helvetica', 'normal');
        }
        
        // Wrap text if too long
        const splitText = doc.splitTextToSize(item, 155);
        doc.text(splitText, 28, y);
        y += (splitText.length * 5) + 3;
      });
      
      y += 5; // Extra padding between sections
    });
    
    // Page footer
    const pageCount = (doc as any).internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      doc.setFont('Helvetica', 'normal');
      doc.setFontSize(8);
      doc.setTextColor(156, 163, 175);
      doc.text('© 2026 AG Cube. All rights reserved.', 20, 285);
      doc.text(`Page ${i} of ${pageCount}`, 180, 285);
    }
    
    doc.save('AGCube-AI-Readiness-Checklist.pdf');
  };

  const totalQuizScore = quizScores.reduce((a, b) => a + b, 0);
  
  const getMaturityResult = (score: number) => {
    if (score <= 8) {
      return {
        level: "Ad-Hoc / Initial",
        description: "Your customer experience is currently unstructured and reactive. Focus on mapping basic user flows and consolidating customer feedback channels to establish a baseline.",
        color: "text-red-400 border-red-500/20 bg-red-500/5"
      };
    } else if (score <= 12) {
      return {
        level: "Reactive",
        description: "You recognize the importance of CX, but it is currently managed in department silos. Establish cross-functional communication and standard survey tools.",
        color: "text-orange-400 border-orange-500/20 bg-orange-500/5"
      };
    } else if (score <= 16) {
      return {
        level: "Structured",
        description: "Standardized processes and basic integrations are in place. To scale, focus on real-time data syncs, automated workflows, and behavioral tracking.",
        color: "text-yellow-400 border-yellow-500/20 bg-yellow-500/5"
      };
    } else if (score <= 20) {
      return {
        level: "Managed",
        description: "You have a unified view and customer-centric culture. The next leap is integrating AI-driven predictive insights and real-time orchestration across channels.",
        color: "text-blue-400 border-blue-500/20 bg-blue-500/5"
      };
    } else {
      return {
        level: "Optimized & AI-Native",
        description: "Congratulations! You are operating at the cutting edge with real-time orchestration, predictive analytics, and automated personalization. Keep innovating!",
        color: "text-emerald-400 border-emerald-500/20 bg-emerald-500/5"
      };
    }
  };

  const maturity = getMaturityResult(totalQuizScore);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-square bg-blue-500/10 blur-[120px] rounded-full -z-10" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="glass-dark border-border rounded-[40px] p-8 md:p-16 text-center space-y-12 relative overflow-hidden">
          {/* Decorative Grid */}
          <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
          
          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold tracking-tight text-foreground"
            >
              Build the Intelligence <br />
              <span className="text-gradient-blue">That Compounds.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-muted-foreground"
            >
              Ready to bridge the gap between strategy and execution? Let's build your execution intelligence roadmap together.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {[
              {
                title: 'AI Readiness Checklist',
                description: 'Assess your organization\'s preparedness for AI integration.',
                icon: Download,
                action: 'Download PDF',
                onClick: () => setActiveModal('checklist')
              },
              {
                title: 'CX Maturity Mini-Quiz',
                description: 'Discover where you stand in the customer experience landscape.',
                icon: ClipboardCheck,
                action: 'Take Quiz',
                onClick: () => setActiveModal('quiz')
              },
              {
                title: 'Personalized Walkthrough',
                description: 'Get a custom demo of our advisory and product capabilities.',
                icon: HelpCircle,
                action: 'Request Demo',
                href: '/contact'
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-muted/30 border border-border p-8 rounded-3xl text-left space-y-4 hover:bg-muted/50 transition-colors group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                    <item.icon size={24} />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-foreground">{item.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
                
                {item.href ? (
                  <Button asChild variant="link" className="text-blue-500 p-0 h-auto font-semibold group/btn w-fit mt-4">
                    <Link to={item.href}>
                      {item.action}
                      <ArrowRight size={14} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                ) : (
                  <Button 
                    variant="link" 
                    className="text-blue-500 p-0 h-auto font-semibold group/btn w-fit mt-4 cursor-pointer"
                    onClick={item.onClick}
                  >
                    {item.action}
                    <ArrowRight size={14} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="pt-8 relative z-10"
          >
            <Button 
              onClick={handleGetStarted}
              loading={isRequesting}
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-12 h-16 text-lg font-semibold shadow-xl shadow-blue-500/20"
            >
              Get Started Today
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Modals & Portal Overlays */}
      <AnimatePresence>
        {/* CX MATURITY QUIZ MODAL */}
        {activeModal === 'quiz' && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-background/80 backdrop-blur-md"
              onClick={() => setActiveModal(null)}
            />
            
            {/* Dialog Panel */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-card border border-border w-full max-w-2xl rounded-3xl p-6 md:p-8 shadow-2xl relative z-10 overflow-hidden"
            >
              <button 
                className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground rounded-full hover:bg-muted/50 transition-colors"
                onClick={() => setActiveModal(null)}
              >
                <X size={20} />
              </button>

              {!quizCompleted ? (
                <div className="space-y-6">
                  {/* Header */}
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-blue-500 uppercase tracking-widest">
                      Question {currentQuestion + 1} of {quizQuestions.length}
                    </span>
                    <h3 className="text-2xl font-bold text-foreground">
                      {quizQuestions[currentQuestion].question}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {quizQuestions[currentQuestion].subtitle}
                    </p>
                  </div>

                  {/* Progress bar */}
                  <div className="w-full bg-muted h-1 rounded-full overflow-hidden">
                    <div 
                      className="bg-blue-600 h-full transition-all duration-300"
                      style={{ width: `${((currentQuestion) / quizQuestions.length) * 100}%` }}
                    />
                  </div>

                  {/* Options */}
                  <div className="space-y-3 pt-2">
                    {quizQuestions[currentQuestion].options.map((opt) => (
                      <button
                        key={opt.text}
                        onClick={() => setSelectedScore(opt.score)}
                        className={`w-full text-left p-4 rounded-xl border text-sm transition-all duration-200 flex items-center justify-between ${
                          selectedScore === opt.score
                            ? 'border-blue-500 bg-blue-500/5 text-blue-400 font-medium'
                            : 'border-border hover:border-blue-500/30 hover:bg-muted/30 text-muted-foreground'
                        }`}
                      >
                        <span>{opt.text}</span>
                        {selectedScore === opt.score && (
                          <Check size={16} className="text-blue-500 shrink-0 ml-2" />
                        )}
                      </button>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex justify-end pt-4">
                    <Button 
                      onClick={handleQuizAnswer}
                      disabled={selectedScore === null}
                      className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8"
                    >
                      {currentQuestion === quizQuestions.length - 1 ? "Submit" : "Next Question"}
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-6 text-center py-6">
                  {/* Results Screen */}
                  <div className="w-20 h-20 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 mx-auto mb-4">
                    <ClipboardCheck size={40} />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-foreground">Your CX Maturity Result</h3>
                    <p className="text-sm text-muted-foreground">Based on your assessments, your organization operates at:</p>
                  </div>

                  <div className={`p-6 rounded-2xl border ${maturity.color} inline-block max-w-md mx-auto`}>
                    <p className="text-2xl font-extrabold tracking-tight">{maturity.level}</p>
                    <p className="text-xs font-semibold uppercase tracking-widest mt-1 opacity-70">
                      Score: {totalQuizScore} / 25
                    </p>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed max-w-md mx-auto">
                    {maturity.description}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                    <Button 
                      onClick={resetQuiz}
                      variant="outline"
                      className="border-border hover:bg-muted text-foreground rounded-full"
                    >
                      <RefreshCw size={16} className="mr-2" />
                      Retake Quiz
                    </Button>
                    <Button 
                      asChild
                      className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8"
                    >
                      <Link to="/contact" onClick={() => setActiveModal(null)}>
                        Get Custom Roadmap
                        <ArrowRight size={16} className="ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}

        {/* AI READINESS CHECKLIST PREVIEW MODAL */}
        {activeModal === 'checklist' && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-background/80 backdrop-blur-md"
              onClick={() => setActiveModal(null)}
            />
            
            {/* Dialog Panel */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-card border border-border w-full max-w-3xl rounded-3xl p-6 md:p-8 shadow-2xl relative z-10 max-h-[85vh] flex flex-col"
            >
              <button 
                className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground rounded-full hover:bg-muted/50 transition-colors"
                onClick={() => setActiveModal(null)}
              >
                <X size={20} />
              </button>

              <div className="space-y-2 mb-6">
                <span className="text-xs font-bold text-blue-500 uppercase tracking-widest flex items-center gap-1.5">
                  <FileText size={14} />
                  Interactive Preview
                </span>
                <h3 className="text-2xl font-bold text-foreground">
                  AI Readiness Checklist
                </h3>
                <p className="text-sm text-muted-foreground">
                  Assess your organization's readiness. Check your progress below, then download the structured PDF report.
                </p>
              </div>

              {/* Scrollable list content */}
              <div className="flex-grow overflow-y-auto pr-2 space-y-6 min-h-[200px] border-y border-border py-6">
                {checklistSections.map((sec, secIdx) => (
                  <div key={sec.title} className="space-y-3">
                    <h4 className="text-sm font-bold text-foreground tracking-wider uppercase opacity-85">
                      {sec.title}
                    </h4>
                    <div className="space-y-2">
                      {sec.items.map((item, itemIdx) => {
                        const key = `${secIdx}-${itemIdx}`;
                        const isChecked = !!checkedItems[key];
                        return (
                          <button
                            key={item}
                            onClick={() => toggleChecklistItem(secIdx, itemIdx)}
                            className={`w-full text-left p-3.5 rounded-xl border text-sm transition-all flex items-start gap-3 group ${
                              isChecked
                                ? 'border-blue-500/30 bg-blue-500/5 text-foreground'
                                : 'border-border hover:border-blue-500/20 hover:bg-muted/30 text-muted-foreground'
                            }`}
                          >
                            <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 transition-all ${
                              isChecked 
                                ? 'border-blue-500 bg-blue-600 text-white' 
                                : 'border-muted-foreground/30 group-hover:border-blue-500/50'
                            }`}>
                              {isChecked && <Check size={14} />}
                            </div>
                            <span className={isChecked ? 'font-medium' : ''}>{item}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {/* Actions footer */}
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pt-6 mt-auto">
                <span className="text-xs text-muted-foreground">
                  {Object.values(checkedItems).filter(Boolean).length} of 15 completed
                </span>
                <div className="flex gap-3 w-full sm:w-auto">
                  <Button 
                    onClick={() => setCheckedItems({})}
                    variant="outline"
                    className="border-border hover:bg-muted text-foreground rounded-full flex-1 sm:flex-initial"
                  >
                    Reset List
                  </Button>
                  <Button 
                    onClick={handleDownloadPDF}
                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 flex-1 sm:flex-initial"
                  >
                    <Download size={16} className="mr-2" />
                    Download PDF
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
