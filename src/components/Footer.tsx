import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">
              © {currentYear} Your Name. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center text-sm">
            <span>Built with</span>
            <Heart className="w-4 h-4 mx-2 text-primary fill-current" />
            <span>using React & TypeScript</span>
          </div>
        </div>
        
        <div className="border-t border-secondary-foreground/20 mt-6 pt-6 text-center">
          <p className="text-xs text-secondary-foreground/70">
            Designed and developed by Your Name
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;