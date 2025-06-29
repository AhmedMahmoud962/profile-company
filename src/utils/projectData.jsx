const projectsData = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    shortDescription: 'Full-stack e-commerce solution with modern UI/UX for your online store.',
    fullDescription: `
      منصة تجارة إلكترونية متكاملة تم تطويرها باستخدام أحدث التقنيات. 
      تتضمن المنصة نظام إدارة المنتجات، سلة التسوق، نظام الدفع الآمن، 
      وإدارة الطلبات. تم تصميمها لتكون سريعة وآمنة وسهلة الاستخدام.
    `,
    heroImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80',
    mainImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=600&q=80'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT', 'Stripe'],
    category: 'Web Development',
    status: 'Completed',
    duration: '3 months',
    client: 'Tech Store Inc.',
    demoLink: 'https://demo-ecommerce.com',
    githubLink: 'https://github.com/polygon/ecommerce',
    features: [
      'نظام إدارة المنتجات',
      'سلة التسوق الذكية',
      'نظام الدفع الآمن',
      'إدارة الطلبات',
      'لوحة تحكم المدير',
      'نظام التقييمات والمراجعات'
    ]
  },
  {
    id: 2,
    title: 'Mobile Banking App',
    shortDescription: 'Secure mobile banking application with biometric authentication.',
    fullDescription: `
      تطبيق بنكي محمول آمن يتضمن جميع الخدمات البنكية الأساسية. 
      يدعم التطبيق المصادقة البيومترية، التحويلات الفورية، 
      وإدارة الحسابات بشكل آمن وسهل.
    `,
    heroImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
    mainImage: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1551808525-51a94da548ce?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80'
    ],
    technologies: ['React Native', 'Firebase', 'Redux', 'Expo', 'Biometrics API'],
    category: 'Mobile Development',
    status: 'In Progress',
    duration: '4 months',
    client: 'National Bank',
    demoLink: '#',
    githubLink: '#',
    features: [
      'المصادقة البيومترية',
      'التحويلات الفورية',
      'إدارة الحسابات',
      'تتبع المعاملات',
      'الإشعارات الفورية',
      'دعم متعدد اللغات'
    ]
  },
  {
    id: 3,
    title: 'AI Dashboard',
    shortDescription: 'Analytics dashboard with machine learning insights.',
    fullDescription: `
      لوحة تحكم ذكية تستخدم الذكاء الاصطناعي لتحليل البيانات 
      وتقديم رؤى عملية للأعمال. تتضمن تنبؤات، تحليلات تفاعلية، 
      وتقارير مخصصة.
    `,
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    mainImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=600&q=80'
    ],
    technologies: ['Vue.js', 'Python', 'TensorFlow', 'D3.js', 'FastAPI'],
    category: 'AI/ML',
    status: 'Completed',
    duration: '5 months',
    client: 'Data Analytics Corp',
    demoLink: 'https://demo-ai-dashboard.com',
    githubLink: 'https://github.com/polygon/ai-dashboard',
    features: [
      'تحليلات الذكاء الاصطناعي',
      'تنبؤات مستقبلية',
      'رسوم بيانية تفاعلية',
      'تقارير مخصصة',
      'تحديث البيانات الفوري',
      'تصدير التقارير'
    ]
  },
  {
    id: 4,
    title: 'Cloud Storage Solution',
    shortDescription: 'Scalable cloud storage with file sharing capabilities.',
    fullDescription: `
      حل تخزين سحابي قابل للتوسع يتضمن إمكانيات مشاركة الملفات 
      والتعاون الجماعي. يدعم جميع أنواع الملفات مع نظام أمان متقدم.
    `,
    heroImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80',
    mainImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80'
    ],
    technologies: ['Angular', 'AWS S3', 'Docker', 'Kubernetes', 'Redis'],
    category: 'Cloud Solutions',
    status: 'Planning',
    duration: '6 months',
    client: 'Enterprise Solutions Ltd',
    demoLink: '#',
    githubLink: '#',
    features: [
      'تخزين سحابي آمن',
      'مشاركة الملفات',
      'التعاون الجماعي',
      'إدارة الصلاحيات',
      'نسخ احتياطي تلقائي',
      'مزامنة عبر الأجهزة'
    ]
  },
  {
    id: 5,
    title: 'IoT Monitoring System',
    shortDescription: 'Real-time monitoring system for IoT devices.',
    fullDescription: `
      نظام مراقبة فوري لأجهزة إنترنت الأشياء يتضمن تتبع الحالة، 
      التنبيهات الذكية، والتحكم عن بُعد. مناسب للمصانع والمنازل الذكية.
    `,
    heroImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    mainImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80'
    ],
    technologies: ['React', 'Express', 'Socket.io', 'MQTT', 'InfluxDB'],
    category: 'IoT',
    status: 'Completed',
    duration: '4 months',
    client: 'Smart Manufacturing Co',
    demoLink: 'https://demo-iot-system.com',
    githubLink: 'https://github.com/polygon/iot-monitoring',
    features: [
      'مراقبة فورية',
      'تنبيهات ذكية',
      'تحكم عن بُعد',
      'تحليل البيانات',
      'لوحة تحكم شاملة',
      'تقارير دورية'
    ]
  },
  {
    id: 6,
    title: 'Blockchain Wallet',
    shortDescription: 'Secure cryptocurrency wallet with multi-chain support.',
    fullDescription: `
      محفظة عملات رقمية آمنة تدعم عدة شبكات blockchain. تتضمن 
      إدارة العملات، التداول، وإرسال واستقبال المدفوعات بأمان عالي.
    `,
    heroImage: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=1200&q=80',
    mainImage: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1622630998477-20aa696ecb05?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80'
    ],
    technologies: ['React', 'Web3.js', 'Solidity', 'Ethereum', 'MetaMask'],
    category: 'Blockchain',
    status: 'In Progress',
    duration: '5 months',
    client: 'CryptoTech Solutions',
    demoLink: '#',
    githubLink: '#',
    features: [
      'دعم عملات متعددة',
      'محفظة آمنة',
      'التداول المباشر',
      'إرسال واستقبال',
      'تتبع المحفظة',
      'تجميع العوائد'
    ]
  }
]

export default projectsData