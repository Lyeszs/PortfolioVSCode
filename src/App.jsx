import React, { useState, useEffect } from 'react';
import { 
  FileJson, 
  FileCode, 
  FileText, 
  Terminal as TerminalIcon, 
  Menu, 
  X, 
  Github, 
  Linkedin, 
  Mail, 
  Play,
  ChevronRight,
  ChevronDown,
  Search,
  Settings,
  Briefcase
} from 'lucide-react';

const PortfolioIDE = () => {
  const [activeFile, setActiveFile] = useState('home.py');
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isFolderOpen, setFolderOpen] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [openedProject, setOpenedProject] = useState(null);

  // --- DONNÉES ---
  const experiences = [
    {
      id: 1,
      role: "Ingénieur R&D (Stage)",
      company: "IDEMIA",
      period: "05/2025 - 06/2025",
      desc: "Optimisation d'algorithmes et développement de features pour un outil d'analyse biométrique.",
      tags: ["Python", "Streamlit", "Computer Vision"],
      logo: "/idemiagroup_logo.jpg"
    },
  ];

  const projects = [
    {
      id: 1,
      name: "bi_dashboard",
      ext: ".pbix",
      title: "Dashboard BI Dynamique",
      subtitle: "Visualisation Géospatiale & KPI Temps Réel",
      description: "Système complet de BI avec visualisations interactives. Intégration de multiples sources de données.",
      fullDescription: "Ce projet visait à transformer des données brutes de ventes en insights stratégiques. J'ai construit un pipeline ETL complet alimentant un rapport Power BI interactif avec des cartes dynamiques.",
      features: [
        "Carte interactive avec clustering automatique",
        "KPIs temps réel et alertes",
        "Modèles prédictifs de ventes (Forecasting)"
      ],
      media: { type: "image", url: "/powerbi.png" },
      stack: ["PowerBI", "DAX", "Python", "SQL", "Excel"],
      links: { demo: "#", github: "#" }
    },
    {
      id: 2,
      name: "ml_platform",
      ext: ".py",
      title: "MLOps Platform",
      subtitle: "Automatisation du cycle de vie ML",
      description: "Plateforme complète pour l'entraînement, le versioning et le déploiement de modèles.",
      fullDescription: "Une infrastructure MLOps construite from scratch pour gérer la dette technique des modèles de ML en production.",
      features: [
        "Moteur AutoML pour la sélection de modèles",
        "Feature Store centralisé",
        "Monitoring de drift en production"
      ],
      media: { type: "video", url: "/vidtest1.mp4" },
      stack: ["Python", "Docker", "Kubernetes", "MLflow"],
      wip: true,
      links: { demo: "#", github: "#" }
    },
    {
      id: 3,
      name: "3d_vision",
      ext: ".js",
      title: "Détection 3D & Hand Tracking",
      subtitle: "Computer Vision Temps Réel",
      description: "Interaction temps réel main/objet virtuel via Mediapipe et Three.js.",
      fullDescription: "Développement d'une interface immersive pour des journées portes ouvertes. L'utilisateur peut manipuler des objets 3D générés procéduralement avec ses mains.",
      features: [
        "Tracking 21 points de la main à 60 FPS",
        "Moteur physique (Collision & Gravité)",
        "Rendu WebGL optimisé"
      ],
      media: { type: "video", url: "/hand3d.mp4" },
      stack: ["Three.js", "React", "Mediapipe", "TensorFlow.js"],
      links: { demo: "#", github: "#" }
    },
    {
      id: 4,
      name: "kafka_stream",
      ext: ".py",
      title: "Data Streaming Pipeline",
      subtitle: "Architecture Big Data",
      description: "Architecture Kafka temps réel avec dashboard Streamlit.",
      fullDescription: "Simulation d'un flux de transactions de caisse à haute fréquence. Le pipeline ingère, traite et stocke les données pour un affichage instantané.",
      features: [
        "Ingestion 10k+ msg/sec avec Kafka",
        "Traitement 'Exactly-once'",
        "Dashboard Streamlit connecté au flux"
      ],
      media: { type: "video", url: "/kafka.mp4" },
      stack: ["Apache Kafka", "Streamlit", "PostgreSQL", "Docker"],
      links: { demo: "#", github: "#" }
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth < 768) setSidebarOpen(false);
      else setSidebarOpen(true);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleOpenProject = (project) => {
    setOpenedProject(project);
    setActiveFile(`${project.name}.md`);
  };

  const CodeLine = ({ num, children, className = "" }) => (
    <div className={`flex hover:bg-[#2a2d2e] ${className}`}>
      <span className="w-12 shrink-0 text-right pr-4 text-[#858585] select-none text-xs leading-6 font-mono">{num}</span>
      <div className="flex-1 whitespace-pre-wrap font-mono text-sm leading-6 text-[#d4d4d4]">{children}</div>
    </div>
  );

  // --- RENDERERS ---

  const RenderHome = () => (
    <div className="p-4 animate-in fade-in duration-300">
      <CodeLine num={1}><span className="text-keyword">class</span> <span className="text-class">LyesDjebbar</span>:</CodeLine>
      <CodeLine num={2}>    <span className="text-keyword">def</span> <span className="text-function">__init__</span>(self):</CodeLine>
      <CodeLine num={3}>        self.role = <span className="text-string">"Data & AI Engineer Student"</span></CodeLine>
      <CodeLine num={4}>        self.school = <span className="text-string">"EPITA"</span></CodeLine>
      <CodeLine num={5}>        self.status = <span className="text-string">"Open to opportunities"</span></CodeLine>
      <CodeLine num={6}>        self.passion = [<span className="text-string">"Big Data"</span>, <span className="text-string">"AI"</span>, <span className="text-string">"Cloud"</span>]</CodeLine>
      <CodeLine num={7}> </CodeLine>
      <CodeLine num={8}>    <span className="text-keyword">def</span> <span className="text-function">introduction</span>(self):</CodeLine>
      <CodeLine num={9}>        <span className="text-keyword">return</span> <span className="text-string">"""</span></CodeLine>
      <CodeLine num={10}><span className="text-string">        👋 Salut, moi c'est Lyes.</span></CodeLine>
      <CodeLine num={11}><span className="text-string">        Je travaille sur des projets en Data Science, IA, Cloud,</span></CodeLine>
      <CodeLine num={12}><span className="text-string">        et d’autres domaines liés à l’écosystème data.</span></CodeLine>
      <CodeLine num={13}><span className="text-string">        """</span></CodeLine>
      
      <div className="mt-8 ml-4 md:ml-12 p-6 bg-[#1e1e1e] border border-[#333] rounded-md max-w-2xl shadow-2xl">
        <div className="flex flex-col sm:flex-row gap-6 items-center">
          <img src="/profile.png" alt="Lyes" className="w-24 h-24 rounded-full border-2 border-[#569cd6] object-cover" />
          <div className="text-center sm:text-left">
            <h1 className="text-2xl font-bold text-[#569cd6]">Lyes Djebbar</h1>
            <p className="text-[#9cdcfe]">Étudiant et futur Ingénieur Data/IA</p>
            <div className="flex gap-3 mt-4 justify-center sm:justify-start">
              <button onClick={() => setActiveFile('projects.json')} className="px-4 py-2 bg-[#0e639c] text-white text-xs hover:bg-[#1177bb] transition-colors rounded-sm">
                Run projects.json
              </button>
              <a href="/CV.pdf" target="_blank" className="px-4 py-2 bg-[#333] text-white text-xs hover:bg-[#444] transition-colors rounded-sm border border-[#444]">
                Debug CV.pdf
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const RenderProjectsList = () => (
    <div className="p-4 animate-in fade-in duration-300">
      <CodeLine num={1}><span className="text-comment">// Click on a project object to view details</span></CodeLine>
      <CodeLine num={2}><span className="text-keyword">const</span> <span className="text-function">showcase</span> = [</CodeLine>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pl-4 md:pl-12 pr-4 py-4">
        {projects.map((p) => (
          <div 
            key={p.id} 
            onClick={() => handleOpenProject(p)}
            className="group bg-[#252526] border border-[#333] hover:border-[#569cd6] transition-all cursor-pointer rounded-sm overflow-hidden hover:shadow-lg"
          >
            <div className="flex items-center justify-between px-3 py-2 bg-[#333] border-b border-[#252526]">
              <div className="flex items-center gap-2">
                <FileCode size={14} className="text-[#e8b024]" />
                <span className="text-xs font-mono group-hover:text-[#9cdcfe] transition-colors">{p.name}{p.ext}</span>
              </div>
              {p.wip && <span className="text-[10px] bg-[#d7ba7d] text-black px-1 rounded font-bold">WIP</span>}
            </div>
            
            {/* CORRECTION ICI : Ajout de autoPlay, playsInline et muted pour la liste */}
            <div className="aspect-video bg-black relative overflow-hidden">
              {p.media.type === 'video' ? (
                <video 
                  src={p.media.url} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" 
                  autoPlay 
                  muted 
                  loop 
                  playsInline 
                />
              ) : (
                <img src={p.media.url} alt={p.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
              )}
              
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="px-3 py-1 bg-[#0e639c] text-white text-xs rounded-sm">Open Preview</span>
              </div>
            </div>

            <div className="p-4">
              <h3 className="text-[#569cd6] font-bold text-lg mb-1 font-mono">{p.title}</h3>
              <p className="text-[#ce9178] text-sm mb-3 line-clamp-2">"{p.description}"</p>
              <div className="flex flex-wrap gap-2">
                {p.stack.slice(0, 3).map(tech => (
                  <span key={tech} className="text-[10px] text-[#4ec9b0] bg-[#2d2d2d] px-2 py-1 rounded font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <CodeLine num={99}>];</CodeLine>
    </div>
  );

  const RenderProjectDetail = ({ project }) => (
    <div className="flex flex-col h-full bg-[#1e1e1e] animate-in slide-in-from-right-4 duration-300">
      <div className="px-6 py-2 border-b border-[#333] flex items-center gap-2 text-xs text-[#858585]">
        <span className="hover:text-[#d4d4d4] cursor-pointer" onClick={() => setActiveFile('projects.json')}>projects</span>
        <span>&gt;</span>
        <span className="text-[#d4d4d4]">{project.name}.md</span>
        <span className="ml-auto text-[#4ec9b0]">Markdown Preview</span>
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar p-6 md:p-10 max-w-5xl mx-auto w-full">
        <div className="mb-8 border-b border-[#333] pb-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[#569cd6] text-3xl font-bold">#</span>
            <h1 className="text-3xl md:text-4xl font-bold text-[#d4d4d4]">{project.title}</h1>
          </div>
          <div className="flex items-center gap-3 pl-6">
            <span className="text-[#569cd6] text-xl font-bold">##</span>
            <h2 className="text-xl text-[#9cdcfe] italic">{project.subtitle}</h2>
          </div>
        </div>

        <div className="mb-8 rounded-md overflow-hidden border border-[#333] bg-black shadow-lg">
          {project.media.type === 'video' ? (
            <video 
                src={project.media.url} 
                className="w-full max-h-[60vh] object-contain mx-auto" 
                controls 
                autoPlay 
                muted
            />
          ) : (
            <img 
                src={project.media.url} 
                alt={project.title} 
                className="w-full max-h-[60vh] object-contain mx-auto" 
            />
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-[#d4d4d4] font-bold border-b border-[#333] pb-2 mb-4">
              <span className="text-[#569cd6]">###</span> Description
            </h3>
            <p className="text-[#cccccc] leading-7 font-sans text-sm md:text-base">
              {project.fullDescription || project.description}
            </p>
            
            <h3 className="text-[#d4d4d4] font-bold border-b border-[#333] pb-2 mb-4 mt-8">
              <span className="text-[#569cd6]">###</span> Key Features
            </h3>
            <ul className="space-y-2 font-mono text-sm">
              {project.features ? project.features.map((feat, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-[#6a9955] font-bold">- [x]</span>
                  <span className="text-[#d4d4d4]">{feat}</span>
                </li>
              )) : (
                <li className="text-[#858585] italic">No features listed.</li>
              )}
            </ul>
          </div>

          <div className="bg-[#252526] p-4 rounded-sm border border-[#333] h-fit">
            <h3 className="text-[#d4d4d4] font-bold mb-4 text-sm">
              <span className="text-[#569cd6]">*</span> Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.stack.map(tech => (
                <span key={tech} className="text-xs bg-[#37373d] text-[#ce9178] px-2 py-1 rounded border border-[#333]">
                  {tech}
                </span>
              ))}
            </div>

            <h3 className="text-[#d4d4d4] font-bold mb-4 text-sm">
              <span className="text-[#569cd6]">*</span> Links
            </h3>
            <div className="space-y-2">
              {!project.wip && (
                <a href={project.links?.demo} className="flex items-center gap-2 text-xs text-[#d4d4d4] hover:text-white bg-[#0e639c] hover:bg-[#1177bb] p-2 rounded justify-center transition-colors">
                  <Play size={14} /> Run Build (Demo)
                </a>
              )}
              <a href={project.links?.github} className="flex items-center gap-2 text-xs text-[#d4d4d4] hover:text-white bg-[#333] hover:bg-[#444] p-2 rounded justify-center transition-colors">
                <Github size={14} /> View Source
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const RenderExperience = () => (
    <div className="p-4 animate-in fade-in duration-300">
      <CodeLine num={1}><span className="text-keyword"># Professional Experience Log</span></CodeLine>
      <CodeLine num={2}><span className="text-comment"># Todo: Add next big opportunity</span></CodeLine>
      <CodeLine num={3}> </CodeLine>
      
      <div className="pl-4 md:pl-8 mt-4 space-y-6">
        {experiences.map((exp) => (
          <div key={exp.id} className="relative pl-6 border-l-2 border-[#333]">
            <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#1e1e1e] border-2 border-[#569cd6] rounded-full"></div>
            
            <div className="flex flex-col sm:flex-row items-start gap-4 bg-[#252526] p-4 rounded-sm border border-[#333] hover:border-[#569cd6] transition-colors max-w-3xl">
              <div className="shrink-0 w-16 h-16 bg-white rounded p-1 flex items-center justify-center">
                <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="text-[#4ec9b0] font-bold text-lg">## {exp.role}</h3>
                <div className="flex items-center gap-2 text-sm text-[#d4d4d4] mt-1 mb-2 font-mono">
                  <span className="text-[#569cd6]">@{exp.company}</span>
                  <span className="text-[#858585]">|</span>
                  <span className="text-[#ce9178]">{exp.period}</span>
                </div>
                <p className="text-[#cccccc] text-sm leading-relaxed mb-3">
                  {exp.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map(tag => (
                    <span key={tag} className="text-xs border border-[#333] px-2 py-0.5 rounded text-[#9cdcfe] bg-[#1e1e1e]">
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
  );

  const RenderContact = () => (
    <div className="p-4 h-full flex flex-col animate-in fade-in duration-300">
      <CodeLine num={1}><span className="text-comment">#!/bin/bash</span></CodeLine>
      <CodeLine num={2}><span className="text-keyword">echo</span> <span className="text-string">"Initiating communication protocols..."</span></CodeLine>
      
      <div className="mt-8 pl-4 md:pl-12">
        <div className="bg-black p-4 rounded border border-[#333] font-mono text-sm max-w-lg shadow-xl">
          <div className="mb-2 text-[#4ec9b0]">➜  ~  ./contact_me.sh</div>
          <div className="mb-4 text-[#d4d4d4]">Select communication channel:</div>
          
          <div className="space-y-2">
            <a href="mailto:djlyes94@gmail.com" className="flex items-center gap-3 text-[#d4d4d4] hover:bg-[#333] p-2 rounded cursor-pointer group transition-colors">
              <Mail size={16} className="text-[#ce9178]" />
              <span className="group-hover:text-[#569cd6]">djlyes94@gmail.com</span>
            </a>
            <a href="https://linkedin.com/in/lyesss" target="_blank" className="flex items-center gap-3 text-[#d4d4d4] hover:bg-[#333] p-2 rounded cursor-pointer group transition-colors">
              <Linkedin size={16} className="text-[#569cd6]" />
              <span className="group-hover:text-[#569cd6]">linkedin.com/in/lyesss</span>
            </a>
            <a href="https://github.com/Lyeszs" target="_blank" className="flex items-center gap-3 text-[#d4d4d4] hover:bg-[#333] p-2 rounded cursor-pointer group transition-colors">
              <Github size={16} className="text-[#ffffff]" />
              <span className="group-hover:text-[#569cd6]">github.com/Lyeszs</span>
            </a>
          </div>

          <div className="mt-4 flex items-center gap-2">
            <span className="text-[#4ec9b0]">➜</span>
            <span className="text-[#569cd6]">~</span>
            <span className="animate-pulse w-2 h-4 bg-[#d4d4d4]"></span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen w-full bg-[#1e1e1e] text-[#d4d4d4] overflow-hidden font-mono">
      
      <div className="w-12 bg-[#333333] flex flex-col items-center py-4 gap-4 shrink-0 z-50 border-r border-[#1e1e1e]">
        <FileCode size={24} className="text-[#d4d4d4] opacity-100 border-l-2 border-white pl-3 pr-3 w-full cursor-pointer" />
        <Search size={24} className="text-[#858585] hover:text-white cursor-pointer transition-colors" />
        <div className="flex-1"></div>
        <Settings size={24} className="text-[#858585] hover:text-white cursor-pointer mb-2 transition-colors" />
      </div>

      <div className={`${isSidebarOpen ? 'w-64 translate-x-0' : 'w-0 -translate-x-full'} bg-[#252526] flex flex-col transition-all duration-300 ease-in-out border-r border-[#1e1e1e] overflow-hidden`}>
        <div className="flex items-center justify-between p-3 text-[11px] font-bold tracking-wider text-[#bbbbbb] bg-[#252526] select-none">
          <span>EXPLORER</span>
          <button onClick={() => setSidebarOpen(false)} className="md:hidden"><X size={14}/></button>
        </div>
        
        <div className="px-0">
          <div 
            className="flex items-center gap-1 text-xs font-bold text-[#d4d4d4] px-2 py-1 cursor-pointer hover:bg-[#2a2d2e] select-none"
            onClick={() => setFolderOpen(!isFolderOpen)}
          >
            {isFolderOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
            <span>PORTFOLIO-V2</span>
          </div>
          
          {isFolderOpen && (
            <div className="flex flex-col">
              <button 
                onClick={() => { setActiveFile('home.py'); setOpenedProject(null); }}
                className={`flex items-center gap-2 px-6 py-1 text-sm border-l-2 ${activeFile === 'home.py' ? 'bg-[#37373d] text-white border-[#569cd6]' : 'border-transparent text-[#a5a5a5] hover:bg-[#2a2d2e]'}`}
              >
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className="w-4 h-4" alt="py"/>
                home.py
              </button>

              <button 
                onClick={() => { setActiveFile('projects.json'); setOpenedProject(null); }}
                className={`flex items-center gap-2 px-6 py-1 text-sm border-l-2 ${activeFile === 'projects.json' ? 'bg-[#37373d] text-white border-[#e8b024]' : 'border-transparent text-[#a5a5a5] hover:bg-[#2a2d2e]'}`}
              >
                <FileJson size={16} className="text-[#e8b024]" />
                projects.json
              </button>

              <button 
                onClick={() => { setActiveFile('experience.md'); setOpenedProject(null); }}
                className={`flex items-center gap-2 px-6 py-1 text-sm border-l-2 ${activeFile === 'experience.md' ? 'bg-[#37373d] text-white border-[#519aba]' : 'border-transparent text-[#a5a5a5] hover:bg-[#2a2d2e]'}`}
              >
                <FileText size={16} className="text-[#519aba]" />
                experience.md
              </button>

              <button 
                onClick={() => { setActiveFile('contact.sh'); setOpenedProject(null); }}
                className={`flex items-center gap-2 px-6 py-1 text-sm border-l-2 ${activeFile === 'contact.sh' ? 'bg-[#37373d] text-white border-[#4d4d4d]' : 'border-transparent text-[#a5a5a5] hover:bg-[#2a2d2e]'}`}
              >
                <TerminalIcon size={16} className="text-[#4d4d4d]" />
                contact.sh
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="flex-1 flex flex-col min-w-0 bg-[#1e1e1e]">
        <div className="flex h-9 bg-[#252526] overflow-x-auto no-scrollbar border-b border-[#1e1e1e]">
          {!isSidebarOpen && (
            <button onClick={() => setSidebarOpen(true)} className="px-3 h-full flex items-center bg-[#2d2d2d] text-white hover:bg-[#3d3d3d] mr-1">
              <Menu size={14} />
            </button>
          )}
          
          {['home.py', 'projects.json', 'experience.md', 'contact.sh'].map(file => (
            <div 
              key={file}
              onClick={() => { setActiveFile(file); setOpenedProject(null); }}
              className={`
                flex items-center gap-2 px-3 min-w-[120px] border-r border-[#1e1e1e] cursor-pointer text-xs select-none
                ${activeFile === file && !openedProject ? 'bg-[#1e1e1e] text-white border-t-2 border-t-[#569cd6]' : 'bg-[#2d2d2d] text-[#969696] hover:bg-[#2a2d2e]'}
              `}
            >
              <span>{file}</span>
              {activeFile === file && !openedProject && <X size={12} className="ml-auto hover:bg-[#444] rounded-sm" />}
            </div>
          ))}

          {openedProject && (
            <div 
              className="flex items-center gap-2 px-3 min-w-[140px] border-r border-[#1e1e1e] cursor-pointer text-xs select-none bg-[#1e1e1e] text-white border-t-2 border-t-[#4ec9b0]"
            >
              <FileText size={12} className="text-[#4ec9b0]" />
              <span className="italic">{openedProject.name}.md</span>
              <X size={12} className="ml-auto hover:bg-[#444] rounded-sm" onClick={(e) => { e.stopPropagation(); setOpenedProject(null); setActiveFile('projects.json'); }} />
            </div>
          )}
        </div>

        <div className="h-6 flex items-center px-4 text-xs text-[#a5a5a5] bg-[#1e1e1e] border-b border-[#333]">
          <span>portfolio-v2</span>
          <ChevronRight size={12} className="mx-1" />
          <span>src</span>
          <ChevronRight size={12} className="mx-1" />
          {openedProject ? (
            <>
              <span>projects</span>
              <ChevronRight size={12} className="mx-1" />
              <span className="text-white">{openedProject.name}.md</span>
            </>
          ) : (
            <span className="text-white">{activeFile}</span>
          )}
        </div>

        <div className="flex-1 overflow-auto custom-scrollbar relative bg-[#1e1e1e]">
          {openedProject ? (
            <RenderProjectDetail project={openedProject} />
          ) : (
            <>
              {activeFile === 'home.py' && <RenderHome />}
              {activeFile === 'projects.json' && <RenderProjectsList />}
              {activeFile === 'experience.md' && <RenderExperience />}
              {activeFile === 'contact.sh' && <RenderContact />}
            </>
          )}
        </div>

        <div className="h-6 bg-[#007acc] flex items-center px-3 text-xs text-white justify-between select-none z-10">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 hover:bg-[#1f8ad2] px-1 rounded cursor-pointer">
              <Github size={12} />
              <span>main*</span>
            </div>
            <div className="flex items-center gap-1">
              <X size={12} className="rounded-full border border-white p-[1px]" />
              <span>0 errors</span>
              <span>0 warnings</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex gap-4">
              <span>Ln 12, Col 45</span>
              <span>UTF-8</span>
            </div>
            <div className="flex items-center gap-2 hover:bg-[#1f8ad2] px-1 rounded cursor-pointer">
              <span>{openedProject ? 'Markdown' : activeFile.endsWith('.py') ? 'Python' : activeFile.endsWith('.json') ? 'JSON' : 'Bash'}</span>
            </div>
            <div className="hover:bg-[#1f8ad2] px-1 rounded cursor-pointer">
              <span>Prettier</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PortfolioIDE;