// Base de données du portfolio de Saad Eddine Laouina

export const profile = {
  name: 'Saad Eddine Laouina',
  title: 'Ingénieur Full-Stack & Data Visualisation',
  status: 'Disponible pour Stage PFE (2027)',
  email: 'eddinesaad494@gmail.com',
  phone: '+212 691 202 149',
  phoneHref: 'tel:+212691202149',
  city: 'Bouznika, Maroc',
  langs: [
    { name: 'Arabe', level: 'C1 (Langue maternelle)' },
    { name: 'Français', level: 'B2 / C1 (Professionnel)' },
    { name: 'Anglais', level: 'B2 (Intermédiaire Avancé)' },
    { name: 'Allemand', level: 'A2 (Élémentaire)' }
  ],
  langsText: 'Arabe C1 · Français B2/C1 · Anglais B2 · Allemand A2',
  github: 'https://github.com/sa3deddine',
  linkedin: 'https://www.linkedin.com/in/saad-eddine-laouina-a13361340',
  instagram: 'https://www.instagram.com/sa3d_ed1l',
  school: 'EMSI Rabat — 5e Année Cycle Ingénieur',
  option: 'Développement Digital & Systèmes d\'Information',
  summary: 'Élève ingénieur passionné par le développement full-stack, la data visualisation et les systèmes embarqués IoT. Fort de deux expériences significatives en stage (Ministère de l\'Économie et Leoni), je conçois des solutions digitales modernes, performantes et centrées utilisateur.'
}

export const projects = [
  {
    id: 'p1',
    t: 'Terrains & Tournois',
    d: 'Plateforme web complète de réservation de terrains de sport et d\'organisation automatisée de tournois avec gestion des équipes et classements.',
    fullDesc: 'Application web distribuée permettant la réservation en ligne de terrains sportifs, la recherche d\'adversaires, la création et le suivi de tournois avec algorithme de tirage au sort des matchs et suivi des scores en temps réel.',
    tags: ['JEE', 'React.js', 'PostgreSQL', 'REST API'],
    category: 'fullstack',
    gradient: 'from-amber-500 to-orange-600',
    bgBadge: '#FFE7A3',
    iconName: 'Trophy',
    stats: { users: '200+', teams: '32+', status: 'Production Ready' }
  },
  {
    id: 'p2',
    t: 'Gardien IoT',
    d: 'Système d\'ingénierie embarquée IoT assurant la surveillance en temps réel et la sécurisation automatisée d\'une station de recharge électrique.',
    fullDesc: 'Dispositif embarqué intelligent basé sur l\'ESP32 pour surveiller la température, la tension et les accès des bornes de recharge. Envoie des alertes instantanées et permet un contrôle à distance.',
    tags: ['ESP32', 'Wokwi', 'PlatformIO', 'C++', 'MQTT', 'Sensors'],
    category: 'iot',
    gradient: 'from-pink-500 to-rose-600',
    bgBadge: '#FFC9E3',
    iconName: 'Cpu',
    stats: { sensors: '8 Connected', uptime: '99.9%', protocol: 'MQTT' }
  },
  {
    id: 'p3',
    t: 'Blog Full-Stack',
    d: 'Plateforme de publication dynamique avec système d\'authentification sécurisé JWT, éditeur riche et gestion de contenu par rôles.',
    fullDesc: 'Application monolithique découplée avec une API REST robustes sous Django REST Framework et un front-end réactif React.js, incluant la gestion d\'images, les commentaires et la recherche d\'articles.',
    tags: ['React.js', 'Django', 'MongoDB', 'JWT Auth'],
    category: 'fullstack',
    gradient: 'from-emerald-500 to-teal-600',
    bgBadge: '#BFF2DA',
    iconName: 'Layout',
    stats: { security: 'JWT', db: 'MongoDB', api: 'RESTful' }
  },
  {
    id: 'p4',
    t: 'Dashboard de Stock',
    d: 'Plateforme interactive de Data Visualization pour le suivi en temps réel de l\'inventaire, l\'analyse prédictive et les rapports d\'activités.',
    fullDesc: 'Tableau de bord d\'entreprise interactif fournissant des graphiques dynamiques, des alertes de rupture de stock et l\'exportation de données analytiques pour la prise de décision stratégique.',
    tags: ['React.js', 'MongoDB', 'DataViz', 'Node.js'],
    category: 'dataviz',
    gradient: 'from-blue-500 to-indigo-600',
    bgBadge: '#C9D4FF',
    iconName: 'BarChart3',
    stats: { metrics: 'Real-time', export: 'PDF/Excel', charts: 'Dynamic' }
  },
  {
    id: 'p5',
    t: 'Covoiturage Desktop',
    d: 'Interface Desktop moderne de gestion de trajets partagés avec calculateur de coûts, système de réservation de sièges et géolocalisation.',
    fullDesc: 'Logiciel de bureau développé en Java Swing avec architecture MVC propre, permettant la mise en relation de conducteurs et passagers avec recherche multicritères.',
    tags: ['Java Swing', 'JDBC', 'MySQL', 'MVC'],
    category: 'desktop',
    gradient: 'from-amber-600 to-red-500',
    bgBadge: '#FFCDB0',
    iconName: 'Car',
    stats: { arch: 'MVC Pattern', db: 'MySQL', platform: 'Desktop App' }
  },
  {
    id: 'p6',
    t: 'Gestion Hôtelière',
    d: 'Système logiciel performant orienté objet pour la gestion des réservations de chambres, facturation et suivi de la clientèle hôtelière.',
    fullDesc: 'Application de bureau C++ optimisée pour la gestion complète d\'un établissement hôtelier : gestion des types de chambres, état d\'occupation, historique des clients et génération de factures.',
    tags: ['C++', 'POO', 'Fichiers / SGBD', 'Algorithmes'],
    category: 'desktop',
    gradient: 'from-purple-500 to-violet-600',
    bgBadge: '#DDD7FF',
    iconName: 'Hotel',
    stats: { speed: 'Native C++', paradigm: 'OOP Pure', storage: 'Fast Persistence' }
  }
]

export const jobs = [
  {
    t: 'Data Visualisation',
    w: 'DEPF, Ministère de l\'Économie et des Finances',
    when: '1 juil. — 14 août 2026',
    type: 'Stage d\'Immersion / Projet',
    badge: 'Finances Publiques',
    li: [
      'Conception et développement d\'une plateforme DataViz pour l\'analyse et le suivi des indicateurs socio-économiques nationaux.',
      'Réalisation d\'un benchmark international approfondi des meilleurs outils de Data Visualisation (PowerBI, Tableau, Superset, Custom D3/React).',
      'Développement d\'un prototype fonctionnel interactif facilitant la prise de décision par les analystes de la DEPF.'
    ],
    skillsUsed: ['React.js', 'DataViz', 'PowerBI', 'Analytics', 'SQL']
  },
  {
    t: 'Développeur Web & Mobile',
    w: 'Leoni, Bouznika',
    when: 'Juillet 2025',
    type: 'Stage Technicien',
    badge: 'Industrie Automobile',
    li: [
      'Développement d\'une application web et mobile complète couvrant la totalité de l\'architecture (Front-end réactif et Back-end).',
      'Conception de la base de données, intégration des API REST et écriture des modules de sécurité.',
      'Conception et exécution des plans de tests fonctionnels et d\'intégration pour garantir zéro régression.'
    ],
    skillsUsed: ['React Native', 'Node.js', 'Web API', 'QA Testing']
  },
  {
    t: 'Cycle d\'Ingénieur en Informatique',
    w: 'EMSI (École Marocaine des Sciences de l\'Ingénieur) — Rabat',
    when: 'Oct. 2022 — 2027 (Présent)',
    type: 'Formation Diplômante',
    badge: 'Diplôme d\'Ingénieur d\'État',
    li: [
      'Spécialité : Informatique & Réseaux — Option Développement Digital & Systèmes d\'Information (5e année).',
      'Projets académiques approfondis en génie logiciel, réseaux, sécurité, cloud et développement web/mobile.',
      'Participation active aux projets de groupe sous méthodologies Agiles (Scrum, Kanban).'
    ],
    skillsUsed: ['Architecture Logicielle', 'JEE', 'C/C++', 'DevOps', 'Agile/Scrum']
  }
]

export const skillsCategories = [
  {
    name: 'Langages & Core',
    icon: 'Code2',
    color: '#38BDF8',
    skills: [
      { name: 'Java', level: 90, desc: 'JEE, Swing, Architecture' },
      { name: 'JavaScript / ES6+', level: 92, desc: 'React, Node, Async' },
      { name: 'C++', level: 85, desc: 'POO, Algorithmique' },
      { name: 'Python', level: 82, desc: 'Django, Scripts, Data' }
    ]
  },
  {
    name: 'Frontend & Mobile',
    icon: 'Smartphone',
    color: '#818CF8',
    skills: [
      { name: 'React.js', level: 94, desc: 'Hooks, Context, Modern UI' },
      { name: 'React Native', level: 85, desc: 'Apps mobiles cross-platform' },
      { name: 'HTML5 / CSS3', level: 95, desc: 'Flexbox, Grid, Animations' }
    ]
  },
  {
    name: 'Backend & Bases de données',
    icon: 'Database',
    color: '#34D399',
    skills: [
      { name: 'Django / DRF', level: 86, desc: 'API REST, Auth' },
      { name: 'Node.js / Express', level: 84, desc: 'Microservices, REST' },
      { name: 'JEE / Java Web', level: 82, desc: 'Servlets, JSP' },
      { name: 'PostgreSQL & MongoDB', level: 88, desc: 'SQL & NoSQL' }
    ]
  },
  {
    name: 'IoT & Data Visualization',
    icon: 'Cpu',
    color: '#F59E0B',
    skills: [
      { name: 'ESP32 & Microcontrôleurs', level: 85, desc: 'MQTT, Capteurs' },
      { name: 'Wokwi & PlatformIO', level: 82, desc: 'C++ Embarqué' },
      { name: 'Data Visualization', level: 90, desc: 'Dashboards, MEF' }
    ]
  },
  {
    name: 'Outils & Méthodologies',
    icon: 'GitBranch',
    color: '#EC4899',
    skills: [
      { name: 'Git & GitHub', level: 90, desc: 'Workflow GitFlow' },
      { name: 'Agile / Scrum', level: 88, desc: 'Sprints, Jira' },
      { name: 'UML & Conception', level: 85, desc: 'Diagrammes & Design' }
    ]
  }
]

export const skills = {
  Langages: ['Java', 'C++', 'Python', 'JavaScript'],
  Frontend: ['React.js', 'React Native'],
  Backend: ['Django', 'Node.js', 'JEE'],
  'Bases de données': ['PostgreSQL', 'MongoDB', 'MySQL'],
  'IoT & Data': ['ESP32', 'Wokwi', 'PlatformIO', 'DataViz'],
  Outils: ['Git', 'GitHub', 'Agile/Scrum', 'UML']
}

export const certs = [
  { name: 'Agile Project Management', issuer: 'Google', date: '2025', badge: 'Certifié Google' },
  { name: 'React Native & React', issuer: 'Meta', date: '2025', badge: 'Meta Professional' },
  { name: 'Python for Data Science & AI', issuer: 'IBM', date: '2025', badge: 'Spécialiste Data' },
  { name: 'Software Design & PM', issuer: 'HKUST', date: '2024', badge: 'Génie Logiciel' },
  { name: 'OOP C++', issuer: 'EPFL', date: '2024', badge: 'Informatique' },
  { name: 'Unix Workbench', issuer: 'Johns Hopkins', date: '2024', badge: 'Systèmes' },
  { name: 'JavaScript Interactivity', issuer: 'U. Michigan', date: '2024', badge: 'Web Tech' }
]

export const marquee = [
  'Java', 'React.js', 'Django', 'ESP32', 'DataViz', 'JEE', 'Node.js', 'MongoDB', 'PostgreSQL', 'React Native', 'Python', 'C++', 'Git', 'Agile'
]
