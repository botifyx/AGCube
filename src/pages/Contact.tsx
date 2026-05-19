import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { useSEO } from '@/hooks/useSEO';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Linkedin, Twitter, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  useSEO({
    title: 'Contact Us | Let\'s Build Your Execution Intelligence',
    description: 'Ready to bridge the gap between strategy and execution? Our team is ready to help you architect your future.',
    canonical: 'https://agcube.com/contact',
  });

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    inquiryType: 'Request Demo',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(`New ${formData.inquiryType} from ${formData.firstName} ${formData.lastName}`);
    const body = encodeURIComponent(`Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Inquiry Type: ${formData.inquiryType}

Message:
${formData.message}`);
    
    window.location.href = `mailto:info@ag-cube.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Side: Info */}
          <div className="space-y-12">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Badge variant="outline" className="border-blue-500/30 text-blue-400 mb-4">
                  Connect With Us
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-tight">
                  Let's Build Your <br />
                  <span className="text-blue-500">Execution Intelligence.</span>
                </h1>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-muted-foreground leading-relaxed"
              >
                Ready to bridge the gap between strategy and execution? Our team is ready to help you architect your future.
              </motion.p>
            </div>

            <div className="space-y-8">
              {[
                { icon: Mail, label: 'Email Us', value: 'info@ag-cube.com' },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-blue-500 uppercase tracking-widest mb-1">{item.label}</p>
                    <p className="text-lg text-foreground font-medium">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-8 flex items-center gap-6">
              <a href="#" className="text-muted-foreground hover:text-blue-500 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-blue-500 transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="glass-dark border-border p-8 md:p-12 rounded-[40px] relative overflow-hidden">
              <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none" />
              <CardContent className="p-0 space-y-8 relative z-10">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-foreground">Request a Demo</h3>
                  <p className="text-sm text-muted-foreground">Fill out the form below and we'll be in touch shortly.</p>
                </div>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-foreground uppercase tracking-widest">First Name</label>
                      <Input 
                        placeholder="John" 
                        className="bg-muted/30 border-border h-12 focus-visible:ring-blue-500"
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-foreground uppercase tracking-widest">Last Name</label>
                      <Input 
                        placeholder="Doe" 
                        className="bg-muted/30 border-border h-12 focus-visible:ring-blue-500"
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-foreground uppercase tracking-widest">Work Email</label>
                    <Input 
                      placeholder="john@company.com" 
                      type="email" 
                      className="bg-muted/30 border-border h-12 focus-visible:ring-blue-500"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-foreground uppercase tracking-widest">Inquiry Type</label>
                    <select 
                      className="w-full bg-muted/30 border border-border rounded-md h-12 px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({...formData, inquiryType: e.target.value})}
                    >
                      <option className="bg-background" value="Request Demo">Request Demo</option>
                      <option className="bg-background" value="Advisory Consultation">Advisory Consultation</option>
                      <option className="bg-background" value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-foreground uppercase tracking-widest">Message</label>
                    <Textarea 
                      placeholder="Tell us about your challenges..." 
                      className="bg-muted/30 border-border min-h-[120px] focus-visible:ring-blue-500"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white h-14 text-base font-bold rounded-xl group">
                    Send Message
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>

                <div className="pt-4 flex items-center gap-2 text-xs text-muted-foreground justify-center">
                  <CheckCircle2 size={14} className="text-blue-500" />
                  Your data is secure and will never be shared.
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
