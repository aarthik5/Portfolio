import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing projects and skills with smooth animations and interactive elements.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      liveUrl: "https://aaarthik.vercel.app/",
      repoUrl: "https://github.com/aarthik5/fluid-intro",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop",
      hasLiveDemo: true
    },
    {
      id: 2,
      title: "Java Socket-Based Print Server",
      description: "Built a client-server print system with secure login and automatic file printing. Implemented real-time socket communication with error handling for disconnections.",
      technologies: ["Java", "Swing", "Socket Programming"],
      liveUrl: "#",
      repoUrl: "https://github.com/aarthik5/PrintServer",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      hasLiveDemo: false
    },
    {
      id: 3,
      title: "Role-Based Online Voting Platform",
      description: "Developed a secure voting system with JWT authentication and admin candidate management. Created a responsive React frontend and RESTful backend with file upload support.",
      technologies: ["MERN Stack", "MongoDB", "Express.js", "React.js", "Node.js"],
      liveUrl: "#",
      repoUrl: "https://github.com/aarthik5/college-voting",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      hasLiveDemo: false
    },
    {
      id: 4,
      title: "RainTrack - Rainfall Logger App",
      description: "Built a full-stack rainfall logging app with secure authentication, responsive dashboard, and CRUD functionality for rain records. Developed admin panel and timestamped history.",
      technologies: ["React.js", "Tailwind CSS", "Node.js", "Express", "MongoDB", "JWT"],
      liveUrl: "#",
      repoUrl: "https://github.com/aarthik5/raintrack",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop",
      hasLiveDemo: false
    },
    {
      id: 5,
      title: "Anonymous Confession Wall App",
      description: "Created a full-stack anonymous posting app with secure login, post interactions, and moderation features. Implemented real-time updates, flagging system, and dark neon-glass UI theme.",
      technologies: ["Flutter", "Dart", "Firebase Auth", "Firestore"],
      liveUrl: "#",
      repoUrl: "https://github.com/aarthik5/confession-app",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=250&fit=crop",
      hasLiveDemo: false
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
                    {project.hasLiveDemo && (
                      <Button
                        size="sm"
                        className="btn-hero"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    )}
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
                  {project.hasLiveDemo && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live
                    </Button>
                  )}
                  <Button
                    size="sm"
                    variant="outline"
                    className={project.hasLiveDemo ? "flex-1" : "w-full"}
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