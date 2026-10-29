<script setup>
import { ref } from "vue";

const lang = ref("en");

const t = {
  en: {
    nav: { work: "Work", experience: "Experience", skills: "Skills", contact: "Contact" },
    available: "Currently Front End Engineer at horaizen.io",
    role: "Front End Engineer · Full-Stack · Linux Specialist",
    pitch:
      "I design and ship systems end to end — from the Linux server in the rack to the screen in your hand. Twenty years of turning tangled technical problems into things that just run.",
    ctaWork: "See the work",
    ctaContact: "Get in touch",
    stats: [
      { n: "20+", l: "Years in production" },
      { n: "Full stack", l: "+ systems & infra" },
      { n: "EN · ES", l: "Native Spanish" },
    ],
    aboutKicker: "About",
    aboutTitle: "Engineer first, generalist by design",
    about: [
      "I'm Irving Bermúdez. For over twenty years I've worked the whole stack — not as a tourist in each layer, but as the person who has to make all of them agree. Linux administration, distributed systems, front ends, networks, and the unglamorous middle where most projects actually die.",
      "I've co-founded technology companies, led critical migrations off Windows and onto Linux, and built complete web platforms from bare metal up. I'm highly autonomous, I document what I learn, and I'm at my best where the problem is real and the deadline isn't theoretical.",
      "Languages: Spanish (native), English (full professional), Portuguese and Russian (working and elementary, respectively).",
    ],
    workKicker: "Selected work",
    workTitle: "Things I built that had to stay up",
    projects: [
      {
        kicker: "Infrastructure",
        title: "Cryptocurrency mining operations",
        body:
          "Designed and deployed mining operations end to end: rig assembly, supply chain, and a purpose-built Ubuntu image for the rigs. Wrote the in-house monitoring software that tracked every node across every site.",
        tags: ["Linux", "Hardware", "Monitoring", "Ops"],
      },
      {
        kicker: "Web platform",
        title: "High-availability WordPress at scale",
        body:
          "Designed, deployed and operated multi-server HA WordPress for a Seattle web company's clients on AWS. Built the plugins that automated migrating years of legacy Movable Type blogs into WordPress.",
        tags: ["AWS", "High availability", "Automation", "PHP"],
      },
      {
        kicker: "Networking",
        title: "Level 3 ISP network engineering",
        body:
          "As co-owner of a regional ISP, designed and deployed the company's LAN and WAN, wireless point-to-point and point-to-multipoint links, CPE selection and provisioning, plus capacity planning and platform monitoring.",
        tags: ["LAN/WAN", "Wireless", "Capacity planning"],
      },
      {
        kicker: "Current",
        title: "Private AI infrastructure",
        body:
          "A five-host Proxmox estate running containerised services with GPU passthrough, ZFS storage, wildcard TLS, an internal DNS and reverse-proxy edge, and automated encrypted backups — the same discipline, applied to a modern stack.",
        tags: ["Proxmox", "Docker", "ZFS", "GPU", "Self-hosted"],
      },
    ],
    expKicker: "Career",
    expTitle: "Twenty years, in order",
    jobs: [
      {
        when: "Nov 2025 — Present",
        title: "Front End Engineer",
        org: "horaizen.io · Remote",
        body:
          "Front end engineering on a production real estate web application in React 19 — feature planning, interaction design and implementation, plus the day-to-day maintenance that keeps a live product healthy. The stack is TypeScript and Vite 8 with MUI 9 component surfaces and data grids, MobX for state, a Lexical rich-text editor, Google Maps integration, AWS Amplify behind the API, Tailwind 4 for styling, and document export to PDF, DOCX and XLSX — held honest by Storybook, Vitest and Playwright.",
        current: true,
      },
      {
        when: "2014 — Nov 2025",
        title: "Freelance Full-Stack Developer · Linux Engineer",
        org: "Independent · Caracas",
        body:
          "Full web platforms in plain HTML or WordPress, Debian and Ubuntu administration on both client and server side, and the crypto mining operations above — including a tailored Ubuntu OS and its monitoring stack.",
      },
      {
        when: "2012 — 2014",
        title: "Linux Server Administrator & Full-Stack Developer",
        org: "Peak Systems · Seattle, WA",
        body:
          "Multi-server high-availability WordPress for the company's customers, AWS platform management, and plugins that automated Movable Type to WordPress migrations.",
      },
      {
        when: "2010 — 2011",
        title: "Chief Technology Officer",
        org: "Representaciones GP · Caracas",
        body:
          "Built, tested and deployed the entire web platform for a restaurant and retail promotion service, plus the servers and AWS footprint behind it.",
      },
      {
        when: "2008 — 2010",
        title: "Systems & Network Administrator · Co-owner",
        org: "Comunicaciones Wi-Fi · Maracay",
        body:
          "A Level 3 ISP: designed and operated the company's systems, hybrid and wireless networks, point-to-point and point-to-multipoint links, and the CPE provisioning used by end customers.",
      },
      {
        when: "2007 — 2008",
        title: "Technology Manager",
        org: "Grupo ICCO · Caracas",
        body:
          "Windows-to-Linux migrations: consulting, server installation and service configuration, automated end-user node rollout, and the training material that came with it.",
      },
      {
        when: "2005 — 2006",
        title: "Systems Manager · Senior Consultant",
        org: "Tera Opensystems · Caracas",
        body:
          "Network and service administration, plus open-source technologies instruction and course material.",
      },
      {
        when: "2004 — 2005",
        title: "Junior System Administrator",
        org: "Seguros Nuevo Mundo · Caracas",
        body:
          "Server administration, database backups, hardware upgrades, platform monitoring and deployment support for the development team.",
      },
      {
        when: "2003 — 2004",
        title: "Intern · Instructor",
        org: "Sun Microsystems · Caracas",
        body:
          "Subnetting and packet-filtering policy for the Sun Educational Services labs, and instructor for Solaris and Linux administration courses.",
      },
    ],
    eduLine: "B.Eng. Computer Engineering · UCAB, Universidad Católica Andrés Bello (1999 — 2008)",
    skillsKicker: "Toolkit",
    skillsTitle: "What I reach for",
    skills: [
      {
        title: "Languages & frameworks",
        items: ["TypeScript", "JavaScript", "React 19", "Vue", "Nuxt", "Node.js", "Vite", "MUI", "MobX", "Tailwind", "PHP", "Python", "SQL", "HTML/CSS"],
      },
      {
        title: "Systems & infrastructure",
        items: ["Linux (Debian/Ubuntu)", "Proxmox VE", "KVM / LXC", "Docker", "ZFS", "systemd", "Nginx", "Caddy", "Networking (LAN/WAN/VLAN)"],
      },
      {
        title: "AI & local inference",
        items: ["llama.cpp", "vLLM", "Ollama", "GGUF & quantization", "ROCm / CUDA", "GPU passthrough", "RAG & embeddings", "Whisper", "Kokoro TTS"],
      },
      {
        title: "AI tooling & agents",
        items: ["Hermes", "Claude Code", "Cursor", "OpenCode", "DeepSeek", "MiniMax", "ComfyUI", "MCP", "Agent orchestration"],
      },
      {
        title: "Cloud & data",
        items: ["AWS", "AWS Amplify", "Cloudflare", "MariaDB / MySQL", "PostgreSQL", "Redis", "Encrypted backups", "Monitoring"],
      },
      {
        title: "Practice",
        items: ["High availability", "Automation", "CI/CD", "Storybook", "Vitest / Playwright", "Technical writing", "Teaching & enablement"],
      },
    ],
    contactKicker: "Contact",
    contactTitle: "Let's build something that lasts",
    contactBody:
      "Open to senior engineering roles, infrastructure work, and consulting on the problems other people have quietly given up on.",
    email: "Email",
    footerNote: "Built with Nuxt, Solarized Light, and far too much care.",
    rights: "Irving Bermúdez",
  },
  es: {
    nav: { work: "Trabajo", experience: "Trayectoria", skills: "Herramientas", contact: "Contacto" },
    available: "Actualmente Ingeniero Front End en horaizen.io",
    role: "Ingeniero Front End · Full-Stack · Especialista Linux",
    pitch:
      "Diseño y entrego sistemas de extremo a extremo — desde el servidor Linux en el rack hasta la pantalla en tu mano. Veinte años convirtiendo problemas técnicos enredados en cosas que simplemente funcionan.",
    ctaWork: "Ver el trabajo",
    ctaContact: "Hablemos",
    stats: [
      { n: "+20", l: "Años en producción" },
      { n: "Full stack", l: "+ sistemas e infra" },
      { n: "EN · ES", l: "Español nativo" },
    ],
    aboutKicker: "Sobre mí",
    aboutTitle: "Ingeniero primero, generalista por diseño",
    about: [
      "Soy Irving Bermúdez. Durante más de veinte años he trabajado todo el stack — no como turista en cada capa, sino como la persona que tiene que hacerlas coincidir. Administración Linux, sistemas distribuidos, front ends, redes, y ese tramo poco glamoroso donde mueren la mayoría de los proyectos.",
      "He cofundado empresas de tecnología, liderado migraciones críticas de Windows a Linux y construido plataformas web completas desde el metal. Soy altamente autónomo, documento lo que aprendo, y rindo mejor donde el problema es real y la fecha límite no es teórica.",
      "Idiomas: español (nativo), inglés (profesional completo), portugués y ruso (laboral y elemental).",
    ],
    workKicker: "Trabajo seleccionado",
    workTitle: "Cosas que construí y tuvieron que seguir en pie",
    projects: [
      {
        kicker: "Infraestructura",
        title: "Operaciones de minería de criptomonedas",
        body:
          "Diseñé y desplegué operaciones de minería de extremo a extremo: ensamblaje de rigs, cadena de suministro y una imagen Ubuntu hecha a medida. Escribí el software interno de monitoreo que seguía cada nodo en cada sede.",
        tags: ["Linux", "Hardware", "Monitoreo", "Operaciones"],
      },
      {
        kicker: "Plataforma web",
        title: "WordPress de alta disponibilidad a escala",
        body:
          "Diseñé, desplegué y operé WordPress multi-servidor en alta disponibilidad para los clientes de una empresa web de Seattle sobre AWS. Construí los plugins que automatizaron la migración de años de blogs Movable Type a WordPress.",
        tags: ["AWS", "Alta disponibilidad", "Automatización", "PHP"],
      },
      {
        kicker: "Redes",
        title: "Ingeniería de red para un ISP Nivel 3",
        body:
          "Como co-dueño de un ISP regional, diseñé y desplegué la LAN y WAN de la empresa, enlaces inalámbricos punto a punto y punto a multipunto, selección y aprovisionamiento de CPE, además de planificación de capacidad y monitoreo.",
        tags: ["LAN/WAN", "Inalámbrico", "Capacidad"],
      },
      {
        kicker: "Actual",
        title: "Infraestructura privada de IA",
        body:
          "Un conjunto de cinco hosts Proxmox con servicios en contenedores, paso de GPU, almacenamiento ZFS, TLS comodín, DNS interno con proxy inverso en el borde y respaldos cifrados automáticos — la misma disciplina, aplicada a un stack moderno.",
        tags: ["Proxmox", "Docker", "ZFS", "GPU", "Self-hosted"],
      },
    ],
    expKicker: "Trayectoria",
    expTitle: "Veinte años, en orden",
    jobs: [
      {
        when: "Nov 2025 — Presente",
        title: "Ingeniero Front End",
        org: "horaizen.io · Remoto",
        body:
          "Ingeniería front end sobre una aplicación web inmobiliaria en producción con React 19 — planificación de funcionalidades, diseño de interacción e implementación, además del mantenimiento diario que mantiene sano un producto vivo. El stack es TypeScript y Vite 8 con componentes y tablas de MUI 9, MobX para el estado, un editor de texto enriquecido Lexical, integración con Google Maps, AWS Amplify detrás de la API, Tailwind 4 para estilos y exportación de documentos a PDF, DOCX y XLSX — sostenido con Storybook, Vitest y Playwright.",
        current: true,
      },
      {
        when: "2014 — Nov 2025",
        title: "Desarrollador Full-Stack · Ingeniero Linux",
        org: "Independiente · Caracas",
        body:
          "Plataformas web completas en HTML plano o WordPress, administración Debian y Ubuntu tanto en cliente como en servidor, y las operaciones de minería mencionadas arriba — incluido el SO Ubuntu a medida y su monitoreo.",
      },
      {
        when: "2012 — 2014",
        title: "Administrador de Servidores Linux & Full-Stack",
        org: "Peak Systems · Seattle, WA",
        body:
          "WordPress multi-servidor en alta disponibilidad para los clientes de la empresa, gestión de la plataforma AWS y plugins que automatizaron migraciones de Movable Type a WordPress.",
      },
      {
        when: "2010 — 2011",
        title: "Director de Tecnología (CTO)",
        org: "Representaciones GP · Caracas",
        body:
          "Construí, probé y desplegué toda la plataforma web de un servicio de promoción de restaurantes y comercios, junto con los servidores y la presencia en AWS.",
      },
      {
        when: "2008 — 2010",
        title: "Administrador de Sistemas y Redes · Co-dueño",
        org: "Comunicaciones Wi-Fi · Maracay",
        body:
          "Un ISP Nivel 3: diseñé y operé los sistemas de la empresa, redes híbridas e inalámbricas, enlaces punto a punto y punto a multipunto, y el aprovisionamiento de CPE de los clientes finales.",
      },
      {
        when: "2007 — 2008",
        title: "Gerente de Tecnología",
        org: "Grupo ICCO · Caracas",
        body:
          "Migraciones de Windows a Linux: consultoría, instalación de servidores y configuración de servicios, despliegue automatizado de nodos de usuario y el material de formación correspondiente.",
      },
      {
        when: "2005 — 2006",
        title: "Gerente de Sistemas · Consultor Senior",
        org: "Tera Opensystems · Caracas",
        body:
          "Administración de redes y servicios, además de instrucción en tecnologías de código abierto y material de cursos.",
      },
      {
        when: "2004 — 2005",
        title: "Administrador de Sistemas Junior",
        org: "Seguros Nuevo Mundo · Caracas",
        body:
          "Administración de servidores, respaldos de bases de datos, actualización de hardware, monitoreo de plataforma y apoyo de despliegue al equipo de desarrollo.",
      },
      {
        when: "2003 — 2004",
        title: "Pasante · Instructor",
        org: "Sun Microsystems · Caracas",
        body:
          "Subnetting y políticas de filtrado de paquetes para los laboratorios de Sun Educational Services, e instructor de cursos de administración Solaris y Linux.",
      },
    ],
    eduLine: "Ing. en Computación · UCAB, Universidad Católica Andrés Bello (1999 — 2008)",
    skillsKicker: "Herramientas",
    skillsTitle: "Con qué trabajo",
    skills: [
      {
        title: "Lenguajes y frameworks",
        items: ["TypeScript", "JavaScript", "React 19", "Vue", "Nuxt", "Node.js", "Vite", "MUI", "MobX", "Tailwind", "PHP", "Python", "SQL", "HTML/CSS"],
      },
      {
        title: "Sistemas e infraestructura",
        items: ["Linux (Debian/Ubuntu)", "Proxmox VE", "KVM / LXC", "Docker", "ZFS", "systemd", "Nginx", "Caddy", "Redes (LAN/WAN/VLAN)"],
      },
      {
        title: "IA e inferencia local",
        items: ["llama.cpp", "vLLM", "Ollama", "GGUF y cuantización", "ROCm / CUDA", "GPU passthrough", "RAG y embeddings", "Whisper", "Kokoro TTS"],
      },
      {
        title: "Herramientas de IA y agentes",
        items: ["Hermes", "Claude Code", "Cursor", "OpenCode", "DeepSeek", "MiniMax", "ComfyUI", "MCP", "Orquestación de agentes"],
      },
      {
        title: "Nube y datos",
        items: ["AWS", "AWS Amplify", "Cloudflare", "MariaDB / MySQL", "PostgreSQL", "Redis", "Respaldos cifrados", "Monitoreo"],
      },
      {
        title: "Práctica",
        items: ["Alta disponibilidad", "Automatización", "CI/CD", "Storybook", "Vitest / Playwright", "Documentación técnica", "Formación"],
      },
    ],
    contactKicker: "Contacto",
    contactTitle: "Construyamos algo que dure",
    contactBody:
      "Abierto a roles senior de ingeniería, trabajo de infraestructura y consultoría sobre esos problemas que otros ya abandonaron en silencio.",
    email: "Correo",
    footerNote: "Hecho con Nuxt, Solarized Light y demasiado cuidado.",
    rights: "Irving Bermúdez",
  },
};

const c = () => t[lang.value];

const links = {
  email: "mailto:irving@chirvo.com",
  emailText: "irving@chirvo.com",
  linkedin: "https://www.linkedin.com/in/irvingbermudez",
  github: "https://github.com/chirvo",
};
</script>

<template>
  <header class="site-header">
    <div class="wrap inner">
      <a href="#top" class="brand">Irving Bermúdez<span class="dot">.</span></a>
      <nav class="nav">
        <a href="#work">{{ c().nav.work }}</a>
        <a href="#experience">{{ c().nav.experience }}</a>
        <a href="#skills">{{ c().nav.skills }}</a>
        <a href="#contact">{{ c().nav.contact }}</a>
        <span class="lang" role="group" aria-label="Language">
          <button :aria-pressed="lang === 'en'" @click="lang = 'en'">EN</button>
          <button :aria-pressed="lang === 'es'" @click="lang = 'es'">ES</button>
        </span>
      </nav>
    </div>
  </header>

  <main id="top">
    <!-- Hero -->
    <section class="hero">
      <div class="wrap">
        <div class="hero-grid">
          <div>
            <span class="availability"><span class="pip" />{{ c().available }}</span>
            <h1>Irving<br />Bermúdez</h1>
            <p class="role">{{ c().role }}</p>
            <p class="pitch">{{ c().pitch }}</p>
            <div class="actions">
              <a href="#work" class="btn btn-primary">{{ c().ctaWork }}</a>
              <a href="#contact" class="btn btn-ghost">{{ c().ctaContact }}</a>
            </div>
            <div class="stats">
              <div v-for="s in c().stats" :key="s.l" class="stat">
                <span class="n">{{ s.n }}</span>
                <span class="l">{{ s.l }}</span>
              </div>
            </div>
          </div>
          <div class="portrait">
            <img src="/images/irving.jpg" alt="Irving Bermúdez" width="520" height="520" />
          </div>
        </div>
      </div>
    </section>

    <!-- About -->
    <section id="about">
      <div class="wrap about-grid">
        <div>
          <p class="eyebrow">{{ c().aboutKicker }}</p>
          <h2>{{ c().aboutTitle }}</h2>
        </div>
        <div class="about-copy">
          <p v-for="(p, i) in c().about" :key="i">{{ p }}</p>
          <p class="muted" style="font-size: 0.9375rem; margin-top: 1.5rem">
            {{ c().eduLine }}
          </p>
        </div>
      </div>
    </section>

    <!-- Work -->
    <section id="work">
      <div class="wrap">
        <p class="eyebrow">{{ c().workKicker }}</p>
        <h2>{{ c().workTitle }}</h2>
        <div class="cards">
          <article v-for="p in c().projects" :key="p.title" class="card">
            <div class="kicker">{{ p.kicker }}</div>
            <h3>{{ p.title }}</h3>
            <p>{{ p.body }}</p>
            <div class="tags">
              <span v-for="tag in p.tags" :key="tag">{{ tag }}</span>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Experience -->
    <section id="experience">
      <div class="wrap">
        <p class="eyebrow">{{ c().expKicker }}</p>
        <h2>{{ c().expTitle }}</h2>
        <div class="timeline">
          <article
            v-for="j in c().jobs"
            :key="j.when + j.title"
            class="job"
            :class="{ current: j.current }"
          >
            <div class="when">{{ j.when }}</div>
            <h3>{{ j.title }}</h3>
            <div class="org">{{ j.org }}</div>
            <p>{{ j.body }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- Skills -->
    <section id="skills">
      <div class="wrap">
        <p class="eyebrow">{{ c().skillsKicker }}</p>
        <h2>{{ c().skillsTitle }}</h2>
        <div class="skill-groups">
          <div v-for="g in c().skills" :key="g.title" class="skill-group">
            <h3>{{ g.title }}</h3>
            <div class="chips">
              <span v-for="s in g.items" :key="s">{{ s }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section id="contact">
      <div class="wrap contact">
        <p class="eyebrow" style="justify-content: center">{{ c().contactKicker }}</p>
        <h2>{{ c().contactTitle }}</h2>
        <p class="lede">{{ c().contactBody }}</p>
        <div class="contact-links">
          <a :href="links.email" class="btn btn-primary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                 stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
              <rect x="2" y="4" width="20" height="16" rx="2.5" />
              <path d="m2.5 7.5 9.5 6 9.5-6" />
            </svg>
            <span>{{ links.emailText }}</span>
          </a>
          <a :href="links.linkedin" class="btn btn-ghost" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
              <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4V21H3zM9.5 9.5h3.83v1.57h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.5 4.78 5.75V21h-4v-5.53c0-1.32-.03-3.02-1.85-3.02-1.85 0-2.13 1.44-2.13 2.93V21h-4z" />
            </svg>
            <span>LinkedIn</span>
          </a>
          <a :href="links.github" class="btn btn-ghost" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
              <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.55v-2.1c-3.2.7-3.88-1.4-3.88-1.4-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.7.08-.7 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.73 1.27 3.4.97.1-.75.4-1.27.74-1.56-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.18-1.49 3.14-1.18 3.14-1.18.63 1.59.23 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.26 5.69.42.36.79 1.07.79 2.16v3.2c0 .31.21.66.8.55A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5z" />
            </svg>
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="wrap inner">
      <span>© {{ new Date().getFullYear() }} {{ c().rights }}</span>
      <span class="muted">{{ c().footerNote }}</span>
    </div>
  </footer>
</template>
