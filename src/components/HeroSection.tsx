import { Button } from '@/components/ui/button';
import { Download, ArrowDown } from 'lucide-react';
import profilePicture from '@/assets/profile-picture.jpg';
import floatingShapes from '@/assets/floating-shapes.jpg';

const HeroSection = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen relative overflow-hidden hero-background flex items-center">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src={floatingShapes} 
          alt="Background shapes" 
          className="w-full h-full object-cover floating-animation"
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-20 h-20 bg-primary/20 rounded-full floating-animation opacity-60"></div>
      <div className="absolute bottom-40 left-10 w-16 h-16 bg-secondary/20 rounded-full floating-animation opacity-40" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-accent/20 rounded-full floating-animation opacity-50" style={{ animationDelay: '4s' }}></div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="slide-in-left">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="gradient-text">Hello, I'm</span>
              <br />
              <span className="text-primary-foreground">Your Name</span>
            </h1>
            
            <h2 className="text-2xl lg:text-3xl text-primary-foreground/80 mb-6">
              Full Stack Developer
            </h2>
            
            <p className="text-lg text-primary-foreground/70 mb-8 max-w-lg">
              Passionate about creating beautiful, functional, and user-friendly applications. 
              Specializing in modern web technologies and always eager to learn new skills.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-hero text-primary-foreground border-0 px-8 py-6 text-lg">
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
              
              <Button 
                variant="outline" 
                onClick={scrollToAbout}
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-secondary px-8 py-6 text-lg"
              >
                Learn More
                <ArrowDown className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="slide-in-right flex justify-center lg:justify-end">
            <div className="relative">
              <div className="pulse-glow rounded-full p-2">
                <img
                  src={profilePicture}
                  alt="Profile"
                  className="w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-primary-foreground/20"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary rounded-full opacity-20 floating-animation"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-secondary rounded-full opacity-30 floating-animation" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={scrollToAbout}
          className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
        >
          <ArrowDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;