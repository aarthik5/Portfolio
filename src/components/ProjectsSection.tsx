import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      liveUrl: "#",
      repoUrl: "#",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["Vue.js", "Firebase", "Vuetify", "Socket.io"],
      liveUrl: "#",
      repoUrl: "#",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather dashboard that displays current conditions and forecasts for multiple cities with beautiful data visualizations.",
      technologies: ["React", "TypeScript", "Chart.js", "OpenWeather API"],
      liveUrl: "#",
      repoUrl: "#",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop"
    },
    {
      id: 4,
      title: "Social Media Dashboard",
      description: "A comprehensive dashboard for managing multiple social media accounts with analytics, scheduling, and engagement metrics.",
      technologies: ["Next.js", "MongoDB", "TailwindCSS", "Social APIs"],
      liveUrl: "#",
      repoUrl: "#",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=250&fit=crop"
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing projects and skills with smooth animations and interactive elements.",
      technologies: ["React", "TypeScript", "Framer Motion", "Tailwind"],
      liveUrl: "#",
      repoUrl: "#",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop"
    },
    {
      id: 6,
      title: "Fitness Tracker",
      description: "A mobile-first fitness tracking application with workout planning, progress monitoring, and social features.",
      technologies: ["React Native", "Express.js", "MongoDB", "Redux"],
      liveUrl: "#",
      repoUrl: "#",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">My Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Here are some of the projects I've worked on. Each one represents a unique challenge 
            and showcases different aspects of my development skills.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="card-elegant overflow-hidden group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-secondary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <Button
                      size="sm"
                      className="btn-hero"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-secondary"
                      onClick={() => window.open(project.repoUrl, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Repo
                    </Button>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1"
                    onClick={() => window.open(project.repoUrl, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;