export const content = {
  /**
   * static holds all the simple, non-repeating page content,
   * organized by semantic section (component-first).
   * Access content like: content.static.hero.en
   */
  static: {
    hero: {
      greeting: {
        en: "Hi, my name is Irving",
        es: "Hola, me llamo Irving",
      },
      items: {
        en: [
          {
            headline: "Build Your Vision, Faster",
            subheadline:
              "I help businesses create high-quality web applications, turning complex ideas into elegant, user-friendly solutions.",
            cta: {
              primary: "Let's Build Together",
              secondary: "Contact Me",
            },
          },
          {
            headline: "Tired of Slow, Buggy Software?",
            subheadline:
              "I deliver robust and scalable code that performs. Let's build a product your users will love.",
            cta: {
              primary: "Upgrade Your Codebase",
              secondary: "Contact Me",
            },
          },
          {
            headline: "Expert Full-Stack Development",
            subheadline:
              "From concept to deployment, I provide end-to-end development services to bring your digital products to life.",
            cta: {
              primary: "See My Work",
              secondary: "Contact Me",
            },
          },
          {
            headline: "Your Startup's Next Technical Co-founder",
            subheadline:
              "I partner with early-stage startups to build foundational technology, ship features fast, and scale for growth.",
            cta: {
              primary: "Discuss Your Project",
              secondary: "Contact Me",
            },
          },
          {
            headline: "From Idea to MVP in Record Time",
            subheadline:
              "Leverage my expertise in rapid prototyping and development to get your product to market before the competition.",
            cta: {
              primary: "Book a Free Consultation",
              secondary: "Contact Me",
            },
          },
          {
            headline: "Senior Software Engineer",
            subheadline:
              "A Senior Full Stack Engineer with over two decades of experience designing high-availability systems and delivering innovative, end-to-end solutions. I turn complex technical challenges into stable, scalable, and deployed realities.",
            cta: {
              primary: "View Projects",
              secondary: "Contact Me",
            },
          },
          {
            headline: "Your Digital Solutions Expert",
            subheadline:
              "I craft bespoke digital strategies and build powerful, scalable solutions to solve your most complex business challenges.",
            cta: {
              primary: "Solve My Problem",
              secondary: "Learn More",
            },
          },
        ],
        es: [
          {
            headline: "Construye Tu Visión, Más Rápido.",
            subheadline:
              "Ayudo a las empresas a crear aplicaciones web de alta calidad, convirtiendo ideas complejas en soluciones elegantes y fáciles de usar.",
            cta: {
              primary: "Construyamos Juntos",
              secondary: "Contáctame",
            },
          },
          {
            headline: "¿Cansado de Software Lento y con Errores?",
            subheadline:
              "Entrego código robusto y escalable que funciona. Construyamos un producto que a tus usuarios les encantará.",
            cta: {
              primary: "Actualiza Tu Código",
              secondary: "Contáctame",
            },
          },
          {
            headline: "Desarrollo Full-Stack Experto",
            subheadline:
              "Desde el concepto hasta el despliegue, ofrezco servicios de desarrollo de extremo a extremo para dar vida a tus productos digitales.",
            cta: {
              primary: "Mira Mi Trabajo",
              secondary: "Contáctame",
            },
          },
          {
            headline: "El Próximo Cofundador Técnico de Tu Startup",
            subheadline:
              "Me asocio con startups en etapa inicial para construir tecnología fundamental, lanzar funcionalidades rápidamente y escalar para el crecimiento.",
            cta: {
              primary: "Discute Tu Proyecto",
              secondary: "Contáctame",
            },
          },
          {
            headline: "De la Idea al MVP en Tiempo Récord",
            subheadline:
              "Aprovecha mi experiencia en prototipado y desarrollo rápido para llevar tu producto al mercado antes que la competencia.",
            cta: {
              primary: "Reserva una Consulta Gratuita",
              secondary: "Contáctame",
            },
          },
          {
            headline: "Ingeniero de Software Senior",
            subheadline:
              "Un Ingeniero Full Stack Senior con más de dos décadas de experiencia diseñando sistemas de alta disponibilidad y entregando soluciones innovadoras, de extremo a extremo. Convierto desafíos técnicos complejos en realidades estables, escalables y desplegadas.",
            cta: {
              primary: "Ver Proyectos",
              secondary: "Contáctame",
            },
          },
          {
            headline: "Tu Experto en Soluciones Digitales",
            subheadline:
              "Creo estrategias digitales a medida y construyo soluciones potentes y escalables para resolver tus desafíos empresariales más complejos.",
            cta: {
              primary: "Resuelve Mi Problema",
              secondary: "Saber Más",
            },
          },
        ],
      },
    },
    about: {
      en: {
        title: "About Me",
        description:
          "Hi. I'm Irving Bermúdez.\n\nFor over 20 years, I've lived and breathed the full technology stack. My passion lies in solving complex problems, whether it's architecting a distributed system or optimizing back-end operations. I'm not just a developer; I'm an engineer who builds the complete solution, from the Linux server administration to the user's screen.\n\nMy career has been defined by a generalist approach and a strong entrepreneurial drive. I have co-founded technology companies, led critical infrastructure migrations from Windows to Linux, and designed complete web platforms from scratch. I am highly autonomous, adaptable, and thrive in dynamic, high-growth environments where I can deliver results quickly and efficiently.",
      },
      es: {
        title: "Sobre Mí",
        description:
          "Hola. Soy Irving Bermúdez.\n\nDurante más de 20 años, he vivido y respirado el stack tecnológico completo. Mi pasión radica en resolver problemas complejos, ya sea diseñando un sistema distribuido u optimizando operaciones de back-end. No soy solo un desarrollador; soy un ingeniero que construye la solución completa, desde la administración del servidor Linux hasta la pantalla del usuario.\n\nMi carrera se ha definido por un enfoque generalista y un fuerte impulso emprendedor. He cofundado empresas de tecnología, liderado migraciones de infraestructura críticas de Windows a Linux y diseñado plataformas web completas desde cero. Soy altamente autónomo, adaptable y prospero en entornos dinámicos y de alto crecimiento donde puedo entregar resultados de manera rápida y eficiente.",
      },
    },
    competencies: {
      // Non-translatable skill lists are now "shared" within this section
      pillars: [
        {
          en: { title: "Development & Engineering" },
          es: { title: "Desarrollo e Ingeniería" },
          skills: [
            "JavaScript (Node.js)",
            "TypeScript",
            "PHP (Yii, Zend)",
            "Python",
            "Ruby",
            "Bash",
            "Java",
            "C/C++",
            "HTML5",
            "CSS3",
            "Fastify",
            "WordPress",
            "API Development (JSON:API, Swagger)",
            "Test-Driven Development (TDD)",
            "AI-Assisted Programming",
          ],
        },
        {
          en: { title: "Systems & Infrastructure" },
          es: { title: "Sistemas e Infraestructura" },
          skills: [
            "Debian GNU/Linux",
            "Ubuntu",
            "Red Hat/CentOS",
            "Oracle Solaris",
            "PostgreSQL",
            "MySQL",
            "Memcached",
            "Prisma ORM",
            "Amazon AWS (EC2, S3, RDS)",
            "Proxmox",
            "KVM",
            "VMWare",
            "Docker",
            "Docker-Compose",
            "Nginx",
            "Apache",
            "Squid",
            "TCP/IP",
            "VPN",
            "DNS",
            "DHCP",
          ],
        },
        {
          en: { title: "Specialized Expertise" },
          es: { title: "Experiencia Especializada" },
          skills: [
            "Scalable Platform Architecture",
            "High-Availability Systems",
            "Network Engineering (PtP/PtmP)",
            "MLOps & Local LLM Deployment",
            "Cryptocurrency Mining Platforms",
            "Linux System Hardening",
            "Full MLOps Lifecycle",
            "Cost-Saving Infrastructure Design",
          ],
        },
      ],
      // Translatable section title
      en: {
        title: "Core Competencies",
      },
      es: {
        title: "Competencias Clave",
      },
    },
    projects: {
      en: {
        title: "Featured Projects",
      },
      es: {
        title: "Proyectos Destacados",
      },
    },
    experience: {
      en: {
        title: "Career Timeline",
      },
      es: {
        title: "Línea de Carrera",
      },
    },
    contact: {
      en: {
        title: "Let's Build Something Great",
        description:
          "I'm always interested in new challenges, complex problems, and opportunities to build lasting solutions.\n\nWhether you have a project in mind, a position to fill, or just want to connect, I'd be happy to hear from you.",
      },
      es: {
        title: "Construyamos Algo Grandioso",
        description:
          "Siempre estoy interesado en nuevos desafíos, problemas complejos y oportunidades para construir soluciones duraderas.\n\nYa sea que tengas un proyecto en mente, un puesto que cubrir o simplemente quieras conectar, estaré encantado de escucharte.",
      },
    },
    footer: {
      en: {
        copyright: "© 2025 Irving A. Bermúdez S. - All rights reserved.",
      },
      es: {
        copyright: "© 2025 Irving A. Bermúdez S. - Todos los derechos reservados.",
      },
    },
  },

  /**
   * shared holds all the entity-based data.
   * This is for lists of items (like jobs, projects, etc.) where each item
   * needs to contain its own translated content.
   */
  shared: {
    links: {
      email: "bigchirv@gmail.com",
      linkedin: "https://www.linkedin.com/in/irvingbermudez",
      github: "https://github.com/chirvo",
    },
    name: { first: "Irving", middle: "Alexander", last: "Bermúdez", maiden: "Silva" },
    languages: [
      {
        en: { lang: "Spanish", level: "Native" },
        es: { lang: "Español", level: "Nativo" },
      },
      {
        en: { lang: "English", level: "Proficient" },
        es: { lang: "Inglés", level: "Competente" },
      },
      {
        en: { lang: "Portuguese", level: "Basic" },
        es: { lang: "Portugués", level: "Básico" },
      },
      {
        en: { lang: "Russian", level: "Basic" },
        es: { lang: "Ruso", level: "Básico" },
      },
    ],
    education: [
      {
        period: "Oct 1999 - Jul 2008",
        en: {
          institution: "UCAB - Universidad Católica Andrés Bello",
          degree: "Computer Engineer (Bachelor of Engineering)",
        },
        es: {
          institution: "UCAB - Universidad Católica Andrés Bello",
          degree: "Ingeniero en Informática (Bachelor of Engineering)",
        },
      },
    ],
    experience: [
      {
        period: "August 2014 - Present",
        company: "Freelance",
        en: {
          role: "Full-Stack Developer, Linux Engineer, Senior Software Engineer",
          achievements: [
            "Architected a globally-deployed cryptocurrency mining platform with a custom, cost-saving read-only Ubuntu OS.",
            "Developed a comprehensive web-based dashboard for real-time monitoring and remote management of 150+ nodes.",
            "Delivered a complete, fully test-covered JSON:API compliant API server with RBAC using Node.js, Fastify, and Prisma.",
            "Integrated AI-assisted pair programming (Google Gemini) into development workflows to increase velocity.",
            "Provided full-stack development and IT support, delivering responsive WordPress sites and custom PHP plugins.",
          ],
        },
        es: {
          role: "Full-Stack Developer, Ingeniero Linux, Ingeniero de Software Senior",
          achievements: [
            "Diseñé una plataforma de minería de criptomonedas desplegada globalmente con un SO Ubuntu personalizado de solo lectura para ahorrar costos.",
            "Desarrollé un panel de control web integral para el monitoreo en tiempo real y la gestión remota de más de 150 nodos.",
            "Entregué un servidor API completo, compatible con JSON:API, con cobertura total de pruebas y RBAC usando Node.js, Fastify y Prisma.",
            "Integré la programación en pares asistida por IA (Google Gemini) en los flujos de trabajo de desarrollo para aumentar la velocidad.",
            "Proporcioné desarrollo full-stack y soporte de TI, entregando sitios de WordPress responsivos y plugins de PHP personalizados.",
          ],
        },
      },
      {
        period: "June 2012 - July 2014",
        company: "Peak Systems - UpTop",
        en: {
          role: "Linux Server Administrator and Full Stack Web Developer",
          achievements: [
            "Managed two large-scale, high-availability WordPress Multi-User (WP-MU) installations supporting over 1000 blogs.",
            "Solved critical database performance issues by implementing memcached and tuning MySQL configurations.",
            "Led the complete rewrite of a critical internal application, shifting from Zend to Yii, achieving an 8x performance increase.",
          ],
        },
        es: {
          role: "Administrador de Servidores Linux y Desarrollador Web Full Stack",
          achievements: [
            "Administré dos instalaciones de WordPress Multi-User (WP-MU) a gran escala y de alta disponibilidad que alojaban más de 1000 blogs.",
            "Resolví problemas críticos de rendimiento de la base de datos implementando memcached y ajustando las configuraciones de MySQL.",
            "Lideré la reescritura completa de una aplicación interna crítica, cambiando de Zend a Yii, logrando un aumento de rendimiento de 8x.",
          ],
        },
      },
      {
        period: "December 2010 - April 2011",
        company: "Representaciones GP Marketing, C.A.",
        en: {
          role: "Chief Technology Officer (CTO)",
          achievements: [
            "Led the complete design, testing, and deployment of the company's core e-commerce web platform from scratch.",
            "Architected and managed the AWS server infrastructure (EC2, S3, RDS) to support rapid growth, scaling to the first 10,000 users.",
          ],
        },
        es: {
          role: "Director de Tecnología (CTO)",
          achievements: [
            "Lideré el diseño, las pruebas y el despliegue completos de la plataforma web de comercio electrónico principal de la empresa desde cero.",
            "Diseñé y administré la infraestructura de servidores de AWS (EC2, S3, RDS) para soportar un rápido crecimiento, escalando hasta los primeros 10,000 usuarios.",
          ],
        },
      },
      {
        period: "August 2008 - December 2010",
        company: "Comunicaciones Wi-Fi, C.A.",
        en: {
          role: "Systems and Technology Administrator",
          achievements: [
            "Co-founded a Level 3 Internet Service Provider and architected the entire technical operations platform.",
            "Designed and deployed hybrid wireless networks (PtP and PtmP) to deliver reliable internet service.",
          ],
        },
        es: {
          role: "Administrador de Sistemas y Tecnologías",
          achievements: [
            "Cofundé un Proveedor de Servicios de Internet (ISP) de Nivel 3 y diseñé toda la plataforma de operaciones técnicas.",
            "Diseñé y desplegué redes inalámbricas híbridas (PtP y PtmP) para ofrecer un servicio de Internet fiable.",
          ],
        },
      },
      {
        period: "January 2007 - August 2008",
        company: "Grupo ICCO, C.A.",
        en: {
          role: "Technology Manager",
          achievements: [
            "Provided expert consulting for public and private sector clients on migrating infrastructure from Windows to Linux.",
            "Developed comprehensive educational materials and led hands-on IT training courses on open-source technologies.",
          ],
        },
        es: {
          role: "Gerente de Tecnología",
          achievements: [
            "Proporcioné consultoría experta a clientes del sector público y privado sobre la migración de su infraestructura de Windows a Linux.",
            "Desarrollé materiales educativos integrales y dirigí cursos de capacitación prácticos sobre tecnologías de código abierto.",
          ],
        },
      },
    ],
    projects: {
      en: {
        title: "Featured Projects",
      },
      es: {
        title: "Proyectos Destacados",
      },
      items: [
        {
          tags: [
            "Platform Architecture",
            "Ubuntu",
            "Linux",
            "Cost-Saving",
            "Hardware Optimization",
            "Distributed Systems",
          ],
          image: "https://placehold.co/400x200?text=Crypto+Project",
          en: {
            title: "Scalable Cryptocurrency Mining Platform",
            description:
              "Engineered a globally-deployed mining platform with a custom, read-only Ubuntu OS that booted from USB into RAM. This innovation eliminated SSDs/HDDs, drastically cutting hardware costs and deployment times for 150+ nodes.",
          },
          es: {
            title: "Plataforma Escalable de Minería de Criptomonedas",
            description:
              "Diseñé una plataforma de minería desplegada globalmente con un sistema operativo Ubuntu personalizado de solo lectura que arrancaba desde USB a la RAM. Esta innovación eliminó los SSD/HDD, reduciendo drásticamente los costos de hardware y el tiempo de despliegue para más de 150 nodos.",
          },
        },
        {
          tags: [
            "REST",
            "OpenAPI",
            "API Development",
            "Node.js",
            "Fastify",
            "Prisma",
            "PostgreSQL",
            "TDD",
            "AI Programming",
            "RBAC",
          ],
          image: "https://placehold.co/400x200?text=REST+API+Project",
          en: {
            title: "AI-Assisted Modern API Development",
            description:
              "Architected and built a fully test-covered, JSON:API compliant API server with robust RBAC. Leveraged a modern stack (Node.js, Fastify, Prisma, PostgreSQL) and used Google Gemini for AI-assisted pair programming to accelerate development.",
          },
          es: {
            title: "Desarrollo de API Moderna Asistida por IA",
            description:
              "Diseñé y construí un servidor API compatible con JSON:API, totalmente cubierto por pruebas y con RBAC robusto. Utilicé un stack moderno (Node.js, Fastify, Prisma, PostgreSQL) y usé Google Gemini para programación en pares asistida por IA para acelerar el desarrollo.",
          },
        },
        {
          tags: [
            "Application Rewrite",
            "Performance Optimization",
            "PHP",
            "Yii Framework",
            "Zend Framework",
            "Tech Leadership",
          ],
          image: "https://placehold.co/400x200?text=Rewrite+Project",
          en: {
            title: "Critical Application Rewrite (8x Performance Gain)",
            description:
              "Led the complete rewrite of a critical internal application. Successfully advocated for and migrated the stack from Zend Framework to Yii, resulting in a new version that performed up to 8x faster and met future milestones ahead of schedule.",
          },
          es: {
            title: "Reescritura de Aplicación Crítica (Mejora de 8x en Rendimiento)",
            description:
              "Lideré la reescritura completa de una aplicación interna crítica. Defendí con éxito y migré el stack de Zend Framework a Yii, lo que resultó en una nueva versión hasta 8 veces más rápida y que cumplió con los hitos futuros antes de lo previsto.",
          },
        },
        {
          tags: [
            "ISP",
            "Network Engineering",
            "Network Architecture",
            "PtP",
            "PtmP",
            "Wireless",
            "Entrepreneurship",
          ],
          image: "https://placehold.co/400x200?text=ISP+Project",
          en: {
            title: "ISP Co-Founder & Network Architect",
            description:
              "Co-founded a Level 3 Internet Service Provider and architected the entire technical operations platform from the ground up. Designed and deployed hybrid wireless networks (PtP and PtmP) to deliver reliable internet service.",
          },
          es: {
            title: "Cofundador de ISP y Arquitecto de Red",
            description:
              "Cofundé un Proveedor de Servicios de Internet (ISP) de Nivel 3 y diseñé toda la plataforma de operaciones técnicas desde cero. Diseñé y desplegué redes inalámbricas híbridas (PtP y PtmP) para ofrecer un servicio de Internet fiable.",
          },
        },
        {
          tags: ["MLOps", "LLM", "Docker", "AI", "OpenWebUI", "ComfyUI", "GPU", "Self-Hosting"],
          image: "https://placehold.co/400x200?text=LLM+Project",
          en: {
            title: "Local LLM & MLOps Experimentation",
            description:
              "Hands-on research into the full MLOps lifecycle for local LLMs. Involves containerizing AI services (Docker), managing GPU resources, and building interfaces with OpenWebUI and ComfyUI to create privacy-first, offline-capable AI tools.",
          },
          es: {
            title: "Experimentación con LLMs Locales y MLOps",
            description:
              "Investigación práctica sobre el ciclo de vida completo de MLOps para LLMs locales. Implica la contenedorización de servicios de IA (Docker), gestión de recursos de GPU y construcción de interfaces con OpenWebUI y ComfyUI para crear herramientas de IA offline y centradas en la privacidad.",
          },
        },
      ],
    },
  },
};
