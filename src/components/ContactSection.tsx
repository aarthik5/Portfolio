import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Linkedin, Github, Phone, MessageCircle, Mail, MapPin } from 'lucide-react';

const ContactSection = () => {
  const contactMethods = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://linkedin.com/in/yourprofile",
      color: "text-[#0077B5]"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Check my repositories",
      href: "https://github.com/yourusername",
      color: "text-[#333]"
    },
    {
      icon: Mail,
      label: "Email",
      value: "your.email@example.com",
      href: "mailto:your.email@example.com",
      color: "text-[#EA4335]"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
      color: "text-primary"
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Message me",
      href: "https://wa.me/15551234567",
      color: "text-[#25D366]"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Your City, Country",
      href: "#",
      color: "text-[#FF5722]"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-primary/10 rounded-full floating-animation"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-secondary/10 rounded-full floating-animation" style={{ animationDelay: '2s' }}></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm always interested in hearing about new opportunities and exciting projects. 
            Whether you want to collaborate or just say hello, feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <Card 
              key={index} 
              className="card-elegant group cursor-pointer"
              onClick={() => window.open(method.href, '_blank')}
            >
              <CardContent className="p-6 text-center">
                <method.icon className={`w-12 h-12 mx-auto mb-4 ${method.color} group-hover:scale-110 transition-transform duration-300`} />
                <h3 className="font-semibold text-lg mb-2">{method.label}</h3>
                <p className="text-muted-foreground text-sm">{method.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center fade-in-up">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to work together?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your project and see how we can create something amazing together. 
              I'm always excited to tackle new challenges and bring innovative ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="btn-hero px-8 py-6 text-lg"
                onClick={() => window.open('mailto:your.email@example.com', '_blank')}
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </Button>
              <Button 
                variant="outline"
                className="px-8 py-6 text-lg"
                onClick={() => window.open('https://linkedin.com/in/yourprofile', '_blank')}
              >
                <Linkedin className="w-5 h-5 mr-2" />
                Connect on LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;