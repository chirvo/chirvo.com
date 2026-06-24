export const content = {
  /**
   * static holds all the simple, non-repeating page content,
   * organized by semantic section (component-first).
   * Access content like: content.static.hero.en
   */
  static: {
    hero: {
      en: {
        available: "Available for senior roles & consulting",
        role: "Full-Stack Engineer · Linux Specialist · Systems Architect",
        years: "20+",
        yearsText: "years engineering high-availability systems",
        specialty: "Distributed systems · Cloud · MLOps",
        scroll: "Scroll",
        items: [
          {
            subheadline:
              "I design and ship end-to-end systems — from the Linux server in the rack to the screen in the user's hand. Senior engineer with two decades of turning complex technical problems into stable, scalable, deployed realities.",
            cta: {
              primary: "View Projects",
              secondary: "Get in Touch",
            },
          },
        ],
      },
      es: {
        available: "Disponible para roles senior y consultoría",
        role: "Ingeniero Full-Stack · Especialista Linux · Arquitecto de Sistemas",
        years: "+20",
        yearsText: "años diseñando sistemas de alta disponibilidad",
        specialty: "Sistemas distribuidos · Cloud · MLOps",
        scroll: "Deslizar",
        items: [
          {
            subheadline:
              "Diseño y entrego sistemas de extremo a extremo — desde el servidor Linux en el rack hasta la pantalla del usuario. Ingeniero senior con dos décadas convirtiendo problemas técnicos complejos en realidades estables, escalables y desplegadas.",
            cta: {
              primary: "Ver Proyectos",
              secondary: "Contactar",
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
      en: {
        title: "Core Competencies",
      },
      es: {
        title: "Competencias Clave",
      },
      clusters: [
        {
          id: "dev",
          en: { title: "Development & APIs", subtitle: "Languages, frameworks, APIs. What I ship daily." },
          es: { title: "Desarrollo y APIs", subtitle: "Lenguajes, frameworks, APIs. Lo que entrego a diario." },
          skills: [
            { name: "TypeScript",                weight: 5, since: 2015, frequency: "daily",      en: "Type-safe JavaScript — default for all new projects and AI tooling.",                                                                                                                                                es: "JavaScript con tipos — por defecto en todo proyecto nuevo y tooling de IA.",                                                                                                       bridges: ["Vite", "React", "Vue", "Node.js", "AI Coding (Claude, Cursor)"] },
            { name: "JavaScript (Node.js)",      weight: 5, since: 2012, frequency: "daily",      en: "Backend runtime of choice. Async-first, no compromises.",                                                                                                                                                            es: "Runtime backend por elección. Async-first, sin compromisos.",                                                                                                                          bridges: ["Fastify", "TypeScript", "Bun", "Local LLM Deployment"] },
            { name: "Python",                    weight: 4, since: 2008, frequency: "weekly",     en: "Scripting, data work, and AI tooling. FastAPI when a Python service is warranted.",                                                                                                                                 es: "Scripting, datos y tooling de IA. FastAPI cuando un servicio en Python se justifica.",                                                                                              bridges: ["Local LLM Deployment", "MLOps Lifecycle", "OCR Solutions"] },
            { name: "Bun",                       weight: 3, since: 2023, frequency: "weekly",     en: "Newer runtime. Used for side projects, CLIs, and fast dev servers.",                                                                                                                                                  es: "Runtime más nuevo. Para side projects, CLIs y dev servers rápidos.",                                                                                                                    bridges: ["TypeScript", "Node.js"] },
            { name: "PHP (Yii, Zend)",           weight: 4, since: 2005, frequency: "monthly",    en: "Legacy enterprise stacks — maintained, hardened, and migrated to modern PHP 8.x.",                                                                                                                                es: "Stacks enterprise legacy — mantenidos, endurecidos y migrados a PHP 8.x moderno.",                                                                                                  bridges: ["MySQL", "Nginx & Apache"] },
            { name: "Bash",                      weight: 5, since: 2003, frequency: "daily",      en: "The glue. Automation, server admin, deployment scripts. If it runs more than twice, it gets a script.",                                                                                                            es: "El pegamento. Automatización, admin de servidores, scripts de deploy. Si corre más de dos veces, tiene script.",                                                                  bridges: ["Linux System Hardening", "Debian/Ubuntu GNU/Linux", "Docker & Docker-Compose"] },
            { name: "Fastify",                   weight: 4, since: 2018, frequency: "weekly",     en: "The Node.js web framework. Fast, schema-based, low overhead. Powers most of my API servers.",                                                                                                                       es: "El framework web para Node.js. Rápido, schema-based, ligero. Motor de la mayoría de mis API servers.",                                                                            bridges: ["Node.js", "RAG & Vector DBs", "TypeScript", "REST & JSON:API"] },
            { name: "REST & JSON:API",           weight: 5, since: 2010, frequency: "daily",      en: "API design is a craft. Spec-first, OpenAPI 3, JSON:API where the shape fits.",                                                                                                                                          es: "Diseñar APIs es un oficio. Spec-first, OpenAPI 3, JSON:API donde la forma encaja.",                                                                                                  bridges: ["Fastify", "TypeScript"] },
            { name: "Test-Driven Development",   weight: 4, since: 2010, frequency: "daily",      en: "Discipline, not dogma. Tests are documentation that runs — and survives refactors.",                                                                                                                                 es: "Disciplina, no dogma. Los tests son documentación que corre — y sobrevive a refactors.",                                                                                          bridges: ["TypeScript", "Fastify"] },
            { name: "HTML5 & CSS3",              weight: 4, since: 2003, frequency: "daily",      en: "Semantic markup and modern CSS — Grid, Flex, custom properties, container queries. No frameworks when none are needed.",                                                                                       es: "Markup semántico y CSS moderno — Grid, Flex, custom properties, container queries. Sin frameworks cuando no hacen falta.",                                                       bridges: ["Vue", "React"] },
            { name: "React",                     weight: 4, since: 2016, frequency: "daily",      en: "Component-driven UI. Hooks, state management, server components. The default for new SPAs.",                                                                                                                          es: "UI dirigida por componentes. Hooks, state, server components. El default para SPAs nuevas.",                                                                                          bridges: ["TypeScript", "Vite", "Next.js", "Vue"] },
            { name: "Vue",                       weight: 3, since: 2017, frequency: "weekly",     en: "Composition API, SFCs. Lighter footprint than React for many use cases — and Nuxt when SSR matters.",                                                                                                                es: "Composition API, SFCs. Más liviano que React en muchos casos — y Nuxt cuando el SSR importa.",                                                                                  bridges: ["TypeScript", "Vite", "HTML5 & CSS3"] },
            { name: "Vite",                      weight: 5, since: 2020, frequency: "daily",      en: "Build tool of choice for modern projects. Fast HMR, native ESM, great DX.",                                                                                                                                            es: "Build tool de elección para proyectos modernos. HMR rápido, ESM nativo, gran DX.",                                                                                                 bridges: ["TypeScript", "React", "Vue", "Bun"] },
            { name: "Perl",                      weight: 2, since: 2002, frequency: "occasional", en: "Still in the toolbox. Legacy maintenance, CGI scripts, regex wizardry. Once fluent, never forgotten.",                                                                                                                es: "Sigue en la caja de herramientas. Mantenimiento legacy, CGI, brujería de regex. Una vez fluido, nunca olvidado.",                                                              bridges: [] },
            { name: "C/C++",                     weight: 3, since: 2002, frequency: "occasional", en: "Lower-level work when warranted. Embedded, performance-critical paths, native modules.",                                                                                                                              es: "Trabajo de bajo nivel cuando se justifica. Embebido, caminos críticos de performance, módulos nativos.",                                                                        bridges: [] },
            { name: "Ruby",                      weight: 2, since: 2006, frequency: "occasional", en: "Quick scripts, Sinatra services, the occasional legacy Rails.",                                                                                                                                                       es: "Scripts rápidos, servicios con Sinatra, el Rails legacy ocasional.",                                                                                                                  bridges: [] },
            { name: "Java",                      weight: 3, since: 2004, frequency: "occasional", en: "Enterprise work. Spring Boot when a JVM is the requirement, not the preference.",                                                                                                                                       es: "Trabajo enterprise. Spring Boot cuando la JVM es requisito, no preferencia.",                                                                                                      bridges: [] },
          ],
        },
        {
          id: "ai",
          en: { title: "AI-Native Engineering", subtitle: "Shipping with LLMs — not as a black box." },
          es: { title: "Ingeniería Nativa en IA", subtitle: "Entregando con LLMs, sin caja negra." },
          skills: [
            { name: "Prompt Engineering",                  weight: 5, since: 2023, frequency: "daily",   en: "The discipline. System prompts, few-shot, chain-of-thought, eval-driven iteration. Not magic — engineering.",                                                                                                            es: "La disciplina. System prompts, few-shot, chain-of-thought, iteración guiada por evals. No es magia — es ingeniería.",                                          bridges: ["AI Coding (Claude, Cursor)", "RAG & Vector DBs", "Model Context Protocol (MCP)"] },
            { name: "AI Coding (Claude, Cursor)",         weight: 5, since: 2023, frequency: "daily",   en: "Daily driver for production code. Claude Code and Cursor — not autocomplete, full pair-programming.",                                                                                                                  es: "Driver diario para código de producción. Claude Code y Cursor — no autocompletar, pair-programming completo.",                                                          bridges: ["TypeScript", "Node.js", "Prompt Engineering", "Model Context Protocol (MCP)"] },
            { name: "RAG & Vector DBs",                   weight: 4, since: 2024, frequency: "weekly",  en: "Embeddings, retrieval pipelines, pgvector and Pinecone. The boring plumbing that makes LLMs useful.",                                                                                                                  es: "Embeddings, pipelines de retrieval, pgvector y Pinecone. La plomería aburrida que hace útiles a los LLMs.",                                                              bridges: ["PostgreSQL", "Fastify", "Python", "Prompt Engineering"] },
            { name: "Model Context Protocol (MCP)",       weight: 3, since: 2024, frequency: "weekly",  en: "Connecting LLMs to tools. The plumbing layer for AI agents and tool-using assistants.",                                                                                                                                es: "Conectando LLMs a herramientas. La capa de plomería para agentes de IA y asistentes que usan tools.",                                                                    bridges: ["AI Coding (Claude, Cursor)", "Fastify", "Node.js"] },
            { name: "Local LLM Deployment",               weight: 4, since: 2023, frequency: "weekly",  en: "Ollama, vLLM, llama.cpp. Privacy-first, cost-controlled, latency-bounded. Self-hosted beats vendor for many workloads.",                                                                                          es: "Ollama, vLLM, llama.cpp. Privacy-first, costo controlado, latencia acotada. Self-hosted gana al vendor en muchos casos.",                                  bridges: ["Docker & Docker-Compose", "Python", "Nginx & Apache", "Linux System Hardening"] },
            { name: "MLOps Lifecycle",                     weight: 3, since: 2022, frequency: "monthly", en: "Training, eval, monitoring, retraining. The full loop — not just inference.",                                                                                                                                            es: "Entrenar, evals, monitor, reentrenar. El ciclo completo — no solo inferencia.",                                                                                                  bridges: ["Python", "Docker & Docker-Compose", "LLM Observability"] },
            { name: "OpenWebUI & ComfyUI",                 weight: 3, since: 2024, frequency: "occasional", en: "Self-hosted chat and image-gen interfaces. The visual layer of local AI.",                                                                                                                                            es: "Interfaces self-hosted de chat e imagen. La capa visual de la IA local.",                                                                                                       bridges: ["Local LLM Deployment", "Docker & Docker-Compose"] },
            { name: "LLM Observability",                   weight: 3, since: 2024, frequency: "weekly",  en: "Langfuse, Helicone, custom logging. You can't improve what you don't measure — same rule as always.",                                                                                                                  es: "Langfuse, Helicone, logging custom. No podés mejorar lo que no medís — la misma regla de siempre.",                                                                         bridges: ["MLOps Lifecycle", "AI Coding (Claude, Cursor)"] },
          ],
        },
        {
          id: "systems",
          en: { title: "Systems & Infrastructure", subtitle: "Linux, cloud, and the backbone under the stack." },
          es: { title: "Sistemas e Infraestructura", subtitle: "Linux, nube y la columna vertebral." },
          skills: [
            { name: "Debian/Ubuntu GNU/Linux",    weight: 5, since: 2003, frequency: "daily",   en: "Default server OS. apt, systemd, the usual. First love, still.",                                                                                                                                                       es: "OS servidor por defecto. apt, systemd, lo de siempre. Primer amor, aún.",                                                                                                            bridges: ["Bash", "Nginx & Apache", "Docker & Docker-Compose", "Arch Linux"] },
            { name: "Arch Linux",                 weight: 4, since: 2008, frequency: "weekly",  en: "Personal daily-driver. Pacman, AUR, the rolling release model. LFS build once — the rite of passage.",                                                                                                                es: "Driver diario personal. Pacman, AUR, el modelo rolling release. Un build de LFS — el rito de pasaje.",                                                                  bridges: ["Debian/Ubuntu GNU/Linux", "Bash"] },
            { name: "Red Hat/CentOS",             weight: 3, since: 2008, frequency: "monthly", en: "Enterprise work. RHEL, CentOS Stream, rpm/dnf. When a client is on it, I'm on it.",                                                                                                                                 es: "Trabajo enterprise. RHEL, CentOS Stream, rpm/dnf. Cuando un cliente está ahí, yo estoy ahí.",                                                                              bridges: ["Debian/Ubuntu GNU/Linux"] },
            { name: "Amazon AWS (EC2, S3, RDS)",  weight: 4, since: 2012, frequency: "weekly",  en: "Cloud workhorse. EC2 for compute, S3 for storage, RDS for managed DBs. TCO-aware, not fashion-driven.",                                                                                                                es: "El caballo de batalla de la nube. EC2 para cómputo, S3 para storage, RDS para DBs administradas. TCO-aware, no fashion-driven.",                                   bridges: ["Debian/Ubuntu GNU/Linux", "PostgreSQL", "Docker & Docker-Compose"] },
            { name: "Docker & Docker-Compose",    weight: 5, since: 2015, frequency: "daily",   en: "Containerization. Compose for dev, swarm for small prod, k8s only when the org needs it.",                                                                                                                              es: "Containerización. Compose para dev, swarm para prod pequeño, k8s solo cuando la org lo necesita.",                                                                           bridges: ["Debian/Ubuntu GNU/Linux", "Nginx & Apache", "Local LLM Deployment", "Bash"] },
            { name: "Proxmox & KVM",              weight: 3, since: 2016, frequency: "monthly", en: "Virtualization. Self-hosted clusters for cost savings and learning. Beats cloud when scale is moderate.",                                                                                                                es: "Virtualización. Clusters self-hosted para ahorrar costos y aprender. Le gana a la nube cuando la escala es moderada.",                                                  bridges: ["Debian/Ubuntu GNU/Linux", "Linux System Hardening"] },
            { name: "Nginx & Apache",             weight: 5, since: 2004, frequency: "daily",   en: "Web servers. Nginx in front of Node/PHP, Apache for legacy. Reverse proxies, TLS termination, the works.",                                                                                                              es: "Servidores web. Nginx delante de Node/PHP, Apache para legacy. Reverse proxies, TLS termination, todo eso.",                                                              bridges: ["Docker & Docker-Compose", "PHP (Yii, Zend)", "Debian/Ubuntu GNU/Linux"] },
            { name: "PostgreSQL",                 weight: 5, since: 2008, frequency: "daily",   en: "Primary database. JSONB, full-text search, pgvector — the most versatile datastore I know.",                                                                                                                            es: "Base de datos primaria. JSONB, full-text search, pgvector — el datastore más versátil que conozco.",                                                                       bridges: ["RAG & Vector DBs", "Prisma ORM", "Nginx & Apache"] },
            { name: "MySQL",                      weight: 4, since: 2005, frequency: "weekly",  en: "Legacy systems, WordPress, the usual. Still tuned by hand when needed.",                                                                                                                                                es: "Sistemas legacy, WordPress, lo de siempre. Tuned a mano cuando hace falta.",                                                                                                    bridges: ["WordPress", "Nginx & Apache"] },
            { name: "Memcached",                  weight: 3, since: 2010, frequency: "monthly", en: "When you need a fast cache, this is the boring answer. Battle-tested for fifteen years.",                                                                                                                                es: "Cuando necesitás un cache rápido, esta es la respuesta aburrida. Battle-tested por quince años.",                                                                            bridges: ["PostgreSQL"] },
            { name: "TCP/IP & VPN",               weight: 4, since: 2006, frequency: "monthly", en: "Network fundamentals. WireGuard, OpenVPN, IPsec. ISP-level work in another life.",                                                                                                                                     es: "Fundamentos de red. WireGuard, OpenVPN, IPsec. Trabajo de ISP en otra vida.",                                                                                                    bridges: ["Network Engineering (PtP/PtmP)", "Linux System Hardening"] },
            { name: "DNS & DHCP",                 weight: 3, since: 2006, frequency: "monthly", en: "BIND, dnsmasq, Unbound. Core network services that nobody notices when they work.",                                                                                                                                      es: "BIND, dnsmasq, Unbound. Servicios de red clave que nadie nota cuando funcionan.",                                                                                              bridges: ["Debian/Ubuntu GNU/Linux"] },
            { name: "Prisma ORM",                 weight: 3, since: 2020, frequency: "weekly",  en: "Node.js ORM. Type-safe queries, migrations, schema-first. Default for new Node data layers.",                                                                                                                              es: "ORM para Node.js. Queries type-safe, migraciones, schema-first. Default para capas de datos nuevas en Node.",                                                              bridges: ["PostgreSQL", "TypeScript", "Node.js"] },
          ],
        },
        {
          id: "specialized",
          en: { title: "Specialized Experience", subtitle: "Niche depth from two decades of the unusual." },
          es: { title: "Experiencia Especializada", subtitle: "Profundidad de nicho de dos décadas." },
          skills: [
            { name: "High-Availability Architecture",  weight: 5, since: 2008, frequency: "daily",   en: "Designing for failure. Load balancing, replication, failover, the boring discipline that keeps things up.",                                                                                                          es: "Diseñar para el fallo. Load balancing, replicación, failover, la disciplina aburrida que mantiene las cosas arriba.",                                          bridges: ["Debian/Ubuntu GNU/Linux", "PostgreSQL", "Docker & Docker-Compose"] },
            { name: "Cryptocurrency Mining Platforms", weight: 4, since: 2017, frequency: "occasional", en: "Built a distributed mining operation. Custom read-only Ubuntu, monitoring dashboards, 150+ nodes. The systems-engineering capstone of my freelancing years.",                                                  es: "Construí una operación de minería distribuida. Ubuntu read-only custom, dashboards de monitoreo, 150+ nodos. El capstone de systems engineering de mis años freelance.", bridges: ["Linux System Hardening", "Debian/Ubuntu GNU/Linux", "Docker & Docker-Compose"] },
            { name: "Network Engineering (PtP/PtmP)",   weight: 4, since: 2008, frequency: "occasional", en: "ISP-level networking. Wireless backhauls, PtP and PtmP links, network ops from another career.",                                                                                                                      es: "Networking a nivel ISP. Backhauls inalámbricos, enlaces PtP y PtmP, network ops de otra carrera.",                                                                          bridges: ["TCP/IP & VPN", "DNS & DHCP", "Linux System Hardening"] },
            { name: "Linux System Hardening",          weight: 5, since: 2010, frequency: "weekly",  en: "CIS benchmarks, SELinux/AppArmor, minimal attack surface. Default posture for anything I deploy.",                                                                                                                       es: "CIS benchmarks, SELinux/AppArmor, mínima superficie de ataque. Postura por defecto para todo lo que despliego.",                                                          bridges: ["Debian/Ubuntu GNU/Linux", "Bash", "Network Engineering (PtP/PtmP)"] },
            { name: "OCR Solutions",                   weight: 3, since: 2012, frequency: "occasional", en: "Tesseract, custom preprocessing pipelines. Document digitization for a newspaper-era client base.",                                                                                                                      es: "Tesseract, pipelines de preprocesamiento custom. Digitalización de documentos para una base de clientes de era papel.",                                                bridges: ["Python", "Bash"] },
            { name: "Cost-Saving Infrastructure Design", weight: 4, since: 2015, frequency: "weekly",  en: "Right-sizing, reserved capacity, self-hosted alternatives. The unsexy work that pays the bills.",                                                                                                                          es: "Right-sizing, capacidad reservada, alternativas self-hosted. El trabajo poco sexy que paga las cuentas.",                                                                   bridges: ["Proxmox & KVM", "Amazon AWS (EC2, S3, RDS)", "Debian/Ubuntu GNU/Linux"] },
          ],
        },
      ],
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
        copyright: "© 2025 Irving A. Bermúdez S. — All rights reserved.",
        tagline: "Designing and shipping end-to-end systems — from the Linux server to the user's screen.",
      },
      es: {
        copyright: "© 2025 Irving A. Bermúdez S. — Todos los derechos reservados.",
        tagline: "Diseñando y entregando sistemas de extremo a extremo — desde el servidor Linux hasta la pantalla del usuario.",
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
          image: "/images/project-crypto.jpg",
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
          image: "/images/project-api.jpg",
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
          image: "/images/project-code.jpg",
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
          image: "/images/project-isp.jpg",
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
          image: "/images/project-llm.jpg",
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
