import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Briefcase, Code, Database, Globe, Smartphone } from 'lucide-react';

const AboutSection = () => {
  const education = [
    {
      degree: "Master of Computer Applications",
      institution: "NMAM Institute of Technology | NITTE University",
      year: "Pursuing 2024 – 2026",
      description: "Current CGPA: 7.74"
    },
    {
      degree: "Bachelor of Computer Applications",
      institution: "ST Aloysius College Manglore | Mangalore University",
      year: "Graduated 2024",
      description: "CGPA: 6.32"
    }
  ];

  const experience = [
    {
      role: "Intern",
      company: "Ethical Byte",
      period: "Dec 2023",
      description: "Assisted in penetration testing, vulnerability assessments, security audits, and ethical hacking challenges using KaliLinux."
    }
  ];

  const skills = [
    { name: "Frontend", icon: Globe, items: ["React", "TypeScript", "Next.js", "Tailwind CSS"] },
    { name: "Backend", icon: Database, items: ["Node.js", "Python", "PostgreSQL", "MongoDB"] },
    { name: "Mobile", icon: Smartphone, items: ["React Native", "Flutter", "iOS", "Android"] },
    { name: "Tools", icon: Code, items: ["Git", "Docker", "AWS", "Figma"] }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* About Me */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Aspiring Software Engineer with a strong foundation in Python, Java, and data structures, seeking to apply
            academic knowledge and hands-on project experience to design, develop, and maintain efficient software solutions.
            Eager to contribute to collaborative development teams, solve real-world problems, and continuously enhance skills
            in software design, algorithms, and full-stack development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Education */}
          <div className="slide-in-left">
            <div className="flex items-center mb-8">
              <GraduationCap className="w-8 h-8 text-primary mr-3" />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="card-elegant">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-lg mb-2">{edu.degree}</h4>
                    <p className="text-primary font-medium mb-1">{edu.institution}</p>
                    <p className="text-muted-foreground text-sm mb-3">{edu.year}</p>
                    <p className="text-muted-foreground">{edu.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="slide-in-right">
            <div className="flex items-center mb-8">
              <Briefcase className="w-8 h-8 text-primary mr-3" />
              <h3 className="text-2xl font-bold">Professional Experience</h3>
            </div>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <Card key={index} className="card-elegant">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-lg mb-2">{exp.role}</h4>
                    <p className="text-primary font-medium mb-1">{exp.company}</p>
                    <p className="text-muted-foreground text-sm mb-3">{exp.period}</p>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Skills */}
        <div id="skills" className="fade-in-up">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold gradient-text mb-4">Skills & Technologies</h3>
            <p className="text-muted-foreground">
              Here are the technologies and tools I work with
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className="card-elegant text-center">
                <CardContent className="p-6">
                  <skill.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold text-lg mb-4">{skill.name}</h4>
                  <div className="space-y-2">
                    {skill.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="text-sm text-muted-foreground">
                        {item}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;