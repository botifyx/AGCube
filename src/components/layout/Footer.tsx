import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Linkedin, Twitter, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/agcube-logo.png"
                alt="AG Cube"
                className="h-10 w-auto object-contain dark:brightness-110 dark:contrast-110"
                style={{ mixBlendMode: 'multiply' }}
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Where Strategy Meets Execution Intelligence. Bridging the gap between high-level advisory and operational excellence.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" title="Coming Soon" className="text-muted-foreground hover:text-blue-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" title="Coming Soon" className="text-muted-foreground hover:text-blue-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="mailto:info@ag-cube.com" className="text-muted-foreground hover:text-blue-500 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-foreground font-semibold mb-6">Solutions</h4>
            <ul className="space-y-3">
              <li><Link to="/advisory" className="text-muted-foreground hover:text-blue-500 text-sm transition-colors">Digital CX Advisory</Link></li>
              <li><Link to="/advisory" className="text-muted-foreground hover:text-blue-500 text-sm transition-colors">Data & AI Strategy</Link></li>
              <li><Link to="/classic-wms" className="text-muted-foreground hover:text-blue-500 text-sm transition-colors">Classic WMS</Link></li>
              <li><Link to="/supply-chain" className="text-muted-foreground hover:text-blue-500 text-sm transition-colors">Supply Chain Tech</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/industries" className="text-muted-foreground hover:text-blue-500 text-sm transition-colors">Industries</Link></li>
              <li><Link to="/insights" className="text-muted-foreground hover:text-blue-500 text-sm transition-colors">Insights Hub</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-blue-500 text-sm transition-colors">Contact Us</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-blue-500 text-sm transition-colors">Request Demo</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-blue-500 shrink-0" />
                <span className="text-muted-foreground text-sm">info@ag-cube.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} AG Cube. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs">
            Site Designed and Maintained by Botifyx
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="text-muted-foreground hover:text-foreground text-xs transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-muted-foreground hover:text-foreground text-xs transition-colors">Terms of Service</Link>
            <Link to="/cookie-policy" className="text-muted-foreground hover:text-foreground text-xs transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
