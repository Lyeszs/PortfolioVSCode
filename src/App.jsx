import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, Mail, Linkedin, Github, ExternalLink, Briefcase, Calendar } from 'lucide-react';

const Portfolio3D = () => {
  // État pour suivre la largeur de la fenêtre
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [currentSection, setCurrentSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const containerRef = useRef(null);
  const bgRef = useRef(null);

  // --- DONNÉES EXPÉRIENCES ---
  const experiences = [
    {
      id: 1,
      role: "Ingénieur Data Science recherche/développement (Stage)",
      company: "IDEMIA",
      period: "mai 2025 - juin 2025 (2 mois)",
      description: "Développement de nouvelles fonctionnalités et Optimisation des algorithmes d'un Outil d'Analyse de Performances Biométriques.",
      tags: ["Python", "Streamlit", "Pandas, NumPy", "Biométrie", "Computer Vision" , "Machine Learning"],
      logo: "/idemiagroup_logo.jpg" 
    },
  ];

  const projects = [
    {
      id: 1,
      title: "Dashboard BI Dynamique",
      subtitle: "Dashboard Interactif & Géospatial",
      description: "Système complet de BI avec visualisations interactives, carte géospatiale dynamique et analyses en temps réel. Intégration de multiples sources de données pour des insights métier exploitables.",
      techStack: ["Python", "Power BI", "DAX", "Excel", "SQL"],
      color: "from-cyan-500 to-pink-500",
      features: [
        {
          name: "Carte Interactive",
          description: "Visualisation géospatiale en temps réel avec filtres dynamiques et clustering automatique",
          position: { top: "20%", left: "15%" }
        },
        {
          name: "KPI Dashboard",
          description: "Métriques clés actualisées en temps réel avec alertes automatiques",
          position: { top: "45%", left: "60%" }
        },
        {
          name: "Analyses Prédictives",
          description: "Modèles ML intégrés pour forecasting et détection d'anomalies",
          position: { top: "70%", left: "30%" }
        }
      ],
      media: [
        { type: "image", url: "/powerbi.png", caption: "Démo Dashboard" },
        { type: "image", url: "/api/placeholder/800/600", caption: "Dashboard principal" },
        { type: "image", url: "/api/placeholder/800/600", caption: "Carte géospatiale" }
      ]
    },
    {
      id: 2,
      title: "Machine Learning Platform",
      subtitle: "Coming Soon",
      description: "Coming Soon",
      techStack: ["Comming Soon"],
      color: "from-green-400 to-cyan-500",
      features: [
        {
          name: "AutoML Engine",
          description: "Optimisation automatique des hyperparamètres et sélection de modèles",
          position: { top: "25%", left: "20%" }
        },
        {
          name: "Feature Store",
          description: "Gestion centralisée des features avec versioning et lineage",
          position: { top: "50%", left: "65%" }
        },
        {
          name: "Model Registry",
          description: "Suivi des versions, A/B testing et déploiement continu des modèles",
          position: { top: "75%", left: "35%" }
        }
      ],
      media: [
        { type: "video", url: "/vidtest1.mp4", caption: "Démo AutoML" },
        { type: "image", url: "/api/placeholder/800/600", caption: "Interface AutoML" }
      ],
      comingSoon: true
    },
    {
      id: 3,
      title: "Détection d'Objets 3D",
      subtitle: "Interaction Main Virtuelle + Génération d'objets 3D",
      description: "Système de détection en temps réel via Mediapipe permettant d'attraper des objets virtuels avec notre main, avec possibilité de générer des objets 3D, si on filme un object il est automatiquement détécté et un object 3d tombe a l'écran si j'ai le modele 3d (.glb) correspondant. Développé à la base pour être affiché lors de Journées Portes Ouvertes",
      techStack: ["MediaPipe", "Gemini API", "Three.js", "React"],
      color: "from-orange-400 to-pink-500",
      features: [
        {
          name: "Hand Tracking",
          description: "Détection en temps réel des 21 points clés de la main avec 60 FPS",
          position: { top: "30%", left: "25%" }
        },
        {
          name: "Collision Physics",
          description: "Moteur physique pour interactions naturelles avec les objets 3D",
          position: { top: "55%", left: "70%" }
        },
        {
          name: "3D Rendering",
          description: "Rendu optimisé avec shaders personnalisés et effets de particules",
          position: { top: "80%", left: "40%" }
        }
      ],
      media: [
        { type: "video", url: "/hand3d.mp4", caption: "Démo interaction main" },
        { type: "image", url: "/api/placeholder/800/600", caption: "Tracking main" },
        { type: "image", url: "/api/placeholder/800/600", caption: "Interface JPO" }
      ]
    },
    {
      id: 4,
      title: "Infrastructure Cloud & Data",
      subtitle: "Pipeline Temps Réel de Ticket de caisse avec Kafka",
      description: "Architecture cloud avec ingestion de données en temps réel via Kafka, stockage SQL optimisé et Streamlit interactif pour tester, avec monitoring complet.",
      techStack: ["Kafka", "PostgreSQL", "Streamlit", "Docker"],
      color: "from-purple-500 to-cyan-400",
      features: [
        {
          name: "Kafka Streaming",
          description: "Pipeline de données en temps réel avec 10k+ messages/sec et exactly-once semantics",
          position: { top: "20%", left: "30%" }
        },
        {
          name: "SQL Optimization",
          description: "Base PostgreSQL avec partitionnement, indexation avancée et réplication",
          position: { top: "50%", left: "15%" }
        },
        {
          name: "Streamlit Dashboard",
          description: "Interface temps réel connectée au pipeline avec cache intelligent",
          position: { top: "65%", left: "65%" }
        },
        {
          name: "Auto-Scaling",
          description: "Kubernetes avec HPA et monitoring Prometheus/Grafana",
          position: { top: "85%", left: "40%" }
        }
      ],
      media: [
        { type: "video", url: "/kafka.mp4", caption: "Démo Infra Cloud" },
        { type: "image", url: "/api/placeholder/800/600", caption: "Architecture cloud" },
        { type: "image", url: "/api/placeholder/800/600", caption: "Dashboard Streamlit" }
      ]
    }
  ];

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % projects.length);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const openProject = (project) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedProject(project);
      setIsTransitioning(false);
    }, 400);
  };

  const closeProject = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedProject(null);
      setIsTransitioning(false);
    }, 400);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedProject) {
        if (e.key === 'Escape') closeProject();
      } else {
        // Navigation par touches de flèche désactivée
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);
  
  // AJOUT : useEffect pour gérer le redimensionnement
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); 

  // Canvas-based animated starfield / nebula background (no external image)
  useEffect(() => {
    const canvas = bgRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    let stars = [];
    let animationId;

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      const count = Math.max(100, Math.floor((width * height) / 10000));
      stars = [];
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          r: Math.random() * 1.2 + 0.3,
          alpha: Math.random() * 0.8 + 0.2,
          vx: (Math.random() - 0.5) * 0.1,
          vy: (Math.random() - 0.5) * 0.1
        });
      }
    };

    const draw = () => {
      if (!ctx) return;
      // subtle nebula background
      const g = ctx.createLinearGradient(0, 0, width, height);
      g.addColorStop(0, 'rgba(10,10,20,0.6)');
      g.addColorStop(0.5, 'rgba(20,18,30,0.6)');
      g.addColorStop(1, 'rgba(6,6,10,0.85)');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, width, height);

      // add faint large nebula blobs
      ctx.globalCompositeOperation = 'lighter';
      const blobs = [
        { x: width * 0.2, y: height * 0.25, r: Math.min(width, height) * 0.6, c: 'rgba(80,80,90,0.03)' },
        { x: width * 0.8, y: height * 0.8, r: Math.min(width, height) * 0.5, c: 'rgba(120,90,100,0.03)' }
      ];
      blobs.forEach(b => {
        const radial = ctx.createRadialGradient(b.x, b.y, b.r * 0.1, b.x, b.y, b.r);
        radial.addColorStop(0, b.c);
        radial.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = radial;
        ctx.fillRect(b.x - b.r, b.y - b.r, b.r * 2, b.r * 2);
      });
      ctx.globalCompositeOperation = 'source-over';

      // draw stars
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        // twinkle
        s.alpha += (Math.random() - 0.5) * 0.02;
        s.alpha = Math.min(1, Math.max(0.15, s.alpha));
        s.x += s.vx;
        s.y += s.vy;
        if (s.x < 0) s.x = width;
        if (s.x > width) s.x = 0;
        if (s.y < 0) s.y = height;
        if (s.y > height) s.y = 0;

        ctx.beginPath();
        ctx.fillStyle = `rgba(255,255,255,${s.alpha})`;
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }

      animationId = requestAnimationFrame(draw);
    };

    resize();
    draw();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[data-section]');
      let currentSectionId = 'home';

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          currentSectionId = section.getAttribute('data-section');
        }
      });

      if (currentSectionId !== currentSection) {
        setCurrentSection(currentSectionId);
      }
    };

    if (!selectedProject) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [currentSection, selectedProject]);

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(`[data-section="${sectionId}"]`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // MODIFICATION CRITIQUE : Utilisation de windowWidth pour l'adaptabilité 3D
  const getSlideTransform = (index) => {
    const diff = index - currentSlide;
    const absPos = ((diff % projects.length) + projects.length) % projects.length;

    // Définition des valeurs adaptatives
    let translateSide;
    let translateDepth;
    let scaleFactor;

    if (windowWidth < 768) { // Écrans Mobiles
        translateSide = '45%'; 
        translateDepth = '-100px'; 
        scaleFactor = '0.8';
    } else if (windowWidth < 1024) { // Tablettes / petits ordinateurs
        translateSide = '55%';
        translateDepth = '-200px'; 
        scaleFactor = '0.75';
    } else { // Grands écrans (1024px et plus)
        translateSide = '70%';
        translateDepth = '-300px';
        scaleFactor = '0.7';
    }


    if (absPos === 0) {
      return 'translateX(0) translateZ(0) rotateY(0deg) scale(1)';
    } else if (absPos === 1 || absPos === -3) {
      return `translateX(${translateSide}) translateZ(${translateDepth}) rotateY(-45deg) scale(${scaleFactor})`;
    } else if (absPos === projects.length - 1 || absPos === -1) {
      return `translateX(-${translateSide}) translateZ(${translateDepth}) rotateY(45deg) scale(${scaleFactor})`;
    } else {
      return 'translateX(0) translateZ(-600px) scale(0.4)';
    }
  };

  return (
    <>
      {/* Animated Space Background (canvas - no external image) */}
      <canvas ref={bgRef} className="fixed inset-0 pointer-events-none z-0" />
      
      {/* INDICATEUR DE RÉSOLUTION - NOUVEAU BLOC À GARDER POUR DÉBUGGER */}
      <div className="fixed top-4 left-4 z-[100] bg-black/80 backdrop-blur-md text-cyan-400 border border-cyan-400/50 px-4 py-2 text-xs font-mono rounded pointer-events-none transition-all duration-300">
        <span className="font-bold uppercase tracking-widest">Résolution :</span> 
        <span className="ml-2 font-normal">{windowWidth}px</span>
        <span className="ml-4 font-bold uppercase tracking-widest">Breakpoint :</span> 
        <span className="ml-2 font-normal">
          {windowWidth >= 1536 ? '2xl:' : 
           windowWidth >= 1280 ? 'xl:' : 
           windowWidth >= 1024 ? 'lg:' : 
           windowWidth >= 768 ? 'md:' : 
           windowWidth >= 640 ? 'sm:' : 
           'Mobile'}
        </span>
      </div>
      {/* FIN INDICATEUR DE RÉSOLUTION */}

      <div className="bg-black/40 text-white relative z-10" style={{ fontFamily: "'Space Grotesk', 'Inter', sans-serif" }}>
        {/* Grid Pattern */}
        <div className="fixed inset-0 pointer-events-none opacity-5" style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>

        {/* Navigation (transparent - only buttons) */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent pointer-events-none">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-end items-center pointer-events-auto">
            <div className="flex gap-3 bg-black/40 backdrop-blur-md px-3 py-2 rounded-full">
              {['home', 'projects', 'about', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`uppercase text-xs font-bold tracking-widest transition-all duration-300 relative px-3 py-1 ${currentSection === section ? 'text-cyan-400' : 'text-white/80 hover:text-white'}`}
                >
                  {/* MODIFICATION NAVIGATION : 'about' devient 'EXPERIENCE' */}
                  {section === 'home' ? 'HOME' : section === 'about' ? 'EXPERIENCE' : section.toUpperCase()}
                  {currentSection === section && (
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-500"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* Home Section */}
        {/* Correction de l'alignement : justify-center */}
        <div data-section="home" className="min-h-screen flex items-center justify-center px-6 relative">
          <div className="animate-fade-in w-full max-w-5xl">
            <div className="inline-block mb-8">
              <span className="text-xs uppercase tracking-[0.3em] text-cyan-400 font-bold border border-cyan-400/30 px-4 py-2 rounded-full">
                Portfolio
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[auto,1fr] gap-4 md:gap-6 items-center">
              {/* Photo */}
              <div className="flex justify-center md:justify-start order-2 md:order-1">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-pink-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                  <img
                    src="/profile.png"
                    alt="Lyes Djebbar"
                    // CORRECTION PHOTO : Ajustement des tailles pour lg et 2xl
                    className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 2xl:w-72 2xl:h-72 rounded-full object-cover border-2 border-white/30 shadow-2xl"
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="flex flex-col items-start text-left space-y-4 order-1 md:order-2 w-full">
                <div className="space-y-2">
                  <h1 
                    // CORRECTION TITRE : Ajustement des tailles pour lg et 2xl
                    className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-[100px] font-black tracking-tighter leading-tight"
                  >
                    <span className="block" style={{
                      background: 'linear-gradient(135deg, #ffffff 0%, #00ffff 50%, #ff00ff 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}>
                      LYES
                    </span>
                    <span className="block" style={{
                      background: 'linear-gradient(135deg, #ff00ff 0%, #00ffff 50%, #ffffff 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}>
                      DJEBBAR
                    </span>
                  </h1>


                </div>

                <p 
                  // CORRECTION DESCRIPTION : Ajustement des tailles pour lg et 2xl
                  className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-lg lg:text-lg 2xl:text-xl"
                >
                  👋 Salut, moi c’est Lyes Djebbar<br />
                  🎓 Actuellement Étudiant en Data & IA à l'EPITA<br />
                  ⚙️ Je travaille sur des projets en Data Science, IA, Cloud et d’autres domaines liés à l’écosystème data.
                </p>



                <div className="flex flex-col sm:flex-row gap-3 mt-2">
                  <button
                    onClick={() => scrollToSection('projects')}
                    className="group relative px-6 py-3 text-xs font-bold uppercase tracking-widest overflow-hidden"
                    style={{
                      background: 'linear-gradient(135deg, #00ffff 0%, #ff00ff 100%)',
                      borderRadius: '0px'
                    }}
                  >
                    <span className="relative z-10 text-black">Voir mes projets</span>
                    <div className="absolute inset-0 bg-white transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </button>

                  <a
                    href="/CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative px-6 py-3 text-xs font-bold uppercase tracking-widest overflow-hidden text-center"
                    style={{
                      background: 'linear-gradient(135deg, #00ffff 0%, #ff00ff 100%)',
                      border: '1px solid rgba(0, 255, 255, 0.5)',
                      borderRadius: '0px'
                    }}
                  >
                    <span className="relative z-10 text-cyan-400 group-hover:text-white transition-colors duration-300">Voir mon CV</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </a>
                </div>
              </div>
            </div>

            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
              <div className="w-px h-16 bg-gradient-to-b from-cyan-400 to-transparent animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        {!selectedProject && (
          <div data-section="projects" className="min-h-screen flex items-center justify-center px-3 sm:px-4 md:px-6 pt-24">
            <div className="w-full max-w-4xl sm:max-w-6xl md:max-w-5xl lg:max-w-7xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-center mb-16 uppercase">
                <span style={{
                  background: 'linear-gradient(135deg, #00ffff 0%, #ff00ff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  Mes Projects
                </span>
              </h2>

              {/* Utilisation de windowWidth pour la perspective */}
              <div 
                className="relative h-[450px] sm:h-[500px] md:h-[600px] lg:h-[700px]" 
                style={{ perspective: windowWidth < 768 ? '1000px' : '2000px' }}
              >
                {projects.map((project, index) => {
                  const diff = index - currentSlide;
                  const absPos = ((diff % projects.length) + projects.length) % projects.length;
                  const isActive = absPos === 0;

                  // NOUVELLE LOGIQUE : Définir si c'est la slide précédente ou suivante
                  const isNext = absPos === 1 || absPos === -3;
                  const isPrev = absPos === projects.length - 1 || absPos === -1;
                  
                  // Définir l'action de clic
                  let clickAction = () => isActive ? openProject(project) : null;
                  if (isNext) {
                      clickAction = nextSlide;
                  } else if (isPrev) {
                      clickAction = prevSlide;
                  }

                  return (
                    <div
                      key={project.id}
                      className="absolute inset-0 transition-all duration-700 ease-out cursor-pointer"
                      style={{
                        transform: getSlideTransform(index),
                        // Opacité : Visible si actif, suivant ou précédent
                        opacity: isActive || isNext || isPrev ? 1 : 0,
                        // PointerEvents : Cliquable si actif, suivant ou précédent
                        pointerEvents: isActive || isNext || isPrev ? 'auto' : 'none',
                        transformStyle: 'preserve-3d'
                      }}
                      // APPLICATION DU CLIC : Ouvre le projet actif, navigue sur les autres
                      onClick={clickAction} 
                    >
                      <div className={`relative transition-all duration-300`}>
                        {project.comingSoon && (
                          <div className="absolute top-2 right-2 bg-cyan-400 text-black px-3 py-1 text-xs font-black uppercase tracking-wider rounded">
                            COMING SOON
                          </div>
                        )}

                        <h3 className="text-xl sm:text-2xl md:text-3xl font-black mb-3 tracking-tighter uppercase text-center">{project.title}</h3>

                        {/* CORRECTION CI-DESSOUS : Format 21/9 (Cinema) pour moins de hauteur, object-cover pour remplir */}
                        {project.media && project.media[0] && (project.media[0].type === 'video' ? (
                          <div className="w-full mb-4 overflow-hidden rounded-xl">
                            <video 
                                src={project.media[0].url} 
                                muted 
                                playsInline 
                                autoPlay 
                                loop 
                                className="w-full aspect-[21/9] object-cover rounded-xl" 
                            />
                          </div>
                        ) : (
                          <img 
                            src={project.media[0].url} 
                            alt={project.media[0].caption || project.title} 
                            className="w-full aspect-[21/9] object-cover rounded-xl mb-4" 
                          />
                        ))}

                        <p className="text-sm text-white/80 leading-relaxed text-center px-2">{project.description}</p>
                      </div>
                    </div>
                  );
                })}

                {/* SUPPRESSION des boutons Chevron Left et Right */}
              </div>

              <div className="flex justify-center gap-3 mt-12">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsTransitioning(true);
                      setCurrentSlide(index);
                      setTimeout(() => setIsTransitioning(false), 600);
                    }}
                    className={`h-1 transition-all duration-300 ${index === currentSlide ? 'w-12 bg-gradient-to-r from-cyan-400 to-pink-500' : 'w-1 bg-white/20'
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Project Detail View (inchangé, sauf ajustement object-contain si souhaité) */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg overflow-y-auto pt-20">
            <button
              onClick={closeProject}
              className="fixed top-24 right-8 p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all duration-300 z-50"
            >
              <X size={24} />
            </button>

            <div className="max-w-7xl mx-auto px-6 py-12">
              <div className={`text-center mb-12 animate-fade-in bg-gradient-to-br ${selectedProject.color} p-12 border border-white/10`} style={{
                boxShadow: '0 0 100px rgba(0, 255, 255, 0.2)'
              }}>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 tracking-tighter uppercase">{selectedProject.title}</h2>
                <p className="text-sm sm:text-base md:text-lg text-white/70 uppercase tracking-widest font-bold">{selectedProject.subtitle}</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Media Column */}
                <div className="lg:col-span-2 space-y-6">
                  {selectedProject.media.map((item, index) => (
                    <div key={index} className="bg-white/5 backdrop-blur-md rounded-2xl p-6 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                      {item.type === 'video' ? (
                        // CORRECTION VIDÉO : Utilisation de object-contain et aspectRatio
                        <div className="w-full rounded-xl bg-black overflow-hidden flex justify-center items-center">
                          <video 
                            controls 
                            playsInline 
                            className="w-full h-auto max-h-[70vh] object-contain" 
                            style={{ maxHeight: '70vh' }}
                          >
                            <source src={item.url} type="video/mp4" />
                            Votre navigateur ne supporte pas la vidéo.
                          </video>
                        </div>
                      ) : (
                        <div className="w-full rounded-xl bg-black/20 overflow-hidden flex justify-center items-center">
                            <img 
                                src={item.url} 
                                alt={item.caption}
                                className="w-full h-auto max-h-[70vh] object-contain rounded-xl"
                            />
                        </div>
                      )}
                      <p className="mt-4 text-center text-gray-300">{item.caption}</p>
                    </div>
                  ))}

                  {/* Interactive Features */}
                  <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 relative" style={{ minHeight: '400px' }}>
                    <h3 className="text-2xl font-bold mb-6">Fonctionnalités Interactives</h3>
                    <div className="relative h-80 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl">
                      {selectedProject.features.map((feature, index) => (
                        <div
                          key={index}
                          className="absolute"
                          style={feature.position}
                          onMouseEnter={() => setHoveredFeature(index)}
                          onMouseLeave={() => setHoveredFeature(null)}
                        >
                          <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${selectedProject.color} flex items-center justify-center cursor-pointer transform transition-all duration-300 ${hoveredFeature === index ? 'scale-125' : 'scale-100'}`}>
                            <span className="text-xl font-bold">{index + 1}</span>
                          </div>

                          {hoveredFeature === index && (
                            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 bg-black/90 backdrop-blur-md p-4 rounded-xl shadow-2xl z-10 animate-fade-in">
                              <h4 className="font-bold text-lg mb-2 text-purple-400">{feature.name}</h4>
                              <p className="text-sm text-gray-300">{feature.description}</p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Info Column */}
                <div className="space-y-6">
                  <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 animate-fade-in">
                    <h3 className="text-2xl font-bold mb-4">Description</h3>
                    <p className="text-gray-300 leading-relaxed">{selectedProject.description}</p>
                  </div>

                  <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 animate-fade-in" style={{ animationDelay: '100ms' }}>
                    <h3 className="text-2xl font-bold mb-4">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech, i) => (
                        <span key={i} className={`px-4 py-2 bg-gradient-to-br ${selectedProject.color} rounded-full text-sm font-semibold`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 animate-fade-in" style={{ animationDelay: '200ms' }}>
                    <h3 className="text-2xl font-bold mb-4">Points Clés</h3>
                    <ul className="space-y-3">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className={`w-6 h-6 rounded-full bg-gradient-to-br ${selectedProject.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                            <span className="text-xs font-bold">{index + 1}</span>
                          </span>
                          <div>
                            <p className="font-semibold text-white">{feature.name}</p>
                            <p className="text-sm text-gray-400">{feature.description}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {!selectedProject.comingSoon && (
                    <button className={`w-full py-4 bg-gradient-to-r ${selectedProject.color} rounded-xl font-semibold hover:scale-105 transition-transform duration-300 shadow-lg flex items-center justify-center gap-2`}>
                      <ExternalLink size={20} />
                      Voir le projet
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* EXPÉRIENCES PROFESSIONNELLES (Ex-About Section) */}
        <div data-section="about" className="min-h-screen flex items-center justify-center px-6 pt-24">
          <div className="max-w-5xl mx-auto w-full space-y-12 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-center">
              Expériences Professionnelles
            </h2>
            
            <div className="grid gap-6">
              {experiences.map((exp, index) => (
                <div key={exp.id} className="group relative bg-white/5 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:bg-white/10">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Colonne Logo */}
                    <div className="flex-shrink-0">
                        {/* Suppression du p-2 pour que l'image touche les bords */}
                        <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center overflow-hidden border border-white/10">
                            {/* Passage à object-cover pour que l'image remplisse tout le cadre */}
                            <img src={exp.logo} alt={exp.company} className="w-full h-full object-cover" />
                        </div>
                    </div>

                    {/* Colonne Contenu */}
                    <div className="flex-grow">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                            <div className="space-y-1">
                            <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">{exp.role}</h3>
                            <div className="flex items-center gap-2 text-gray-400">
                                <Briefcase size={16} />
                                <span className="font-medium text-lg">{exp.company}</span>
                            </div>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
                            <Calendar size={14} className="text-pink-400" />
                            <span className="text-sm font-mono text-pink-400 font-bold">{exp.period}</span>
                            </div>
                        </div>
                        
                        <p className="text-gray-300 leading-relaxed mb-6 text-sm md:text-base">
                            {exp.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {exp.tags.map((tag, i) => (
                            <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-gray-400 border border-white/5">
                                {tag}
                            </span>
                            ))}
                        </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div data-section="contact" className="min-h-screen flex items-center justify-center px-6 pt-24">
          <div className="max-w-2xl mx-auto text-center space-y-8 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Contact
            </h2>
            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-12 space-y-6">
              <p className="text-xl text-gray-300">
                Intéressé par une collaboration ? N'hésitez pas à me contacter !
              </p>
              <div className="flex justify-center gap-6 pt-6">
                <a href="mailto:djlyes94@gmail.com" className="p-4 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110">
                  <Mail size={28} />
                </a>
                <a href="https://www.linkedin.com/in/lyesss/" className="p-4 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110">
                  <Linkedin size={28} />
                </a>
                <a href="https://github.com/Lyeszs" className="p-4 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110">
                  <Github size={28} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio3D;