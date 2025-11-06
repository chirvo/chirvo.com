export const content = {
  hero: {
    name: 'Irving Bermudez',
    title: 'Full-Stack Engineer & Systems Architect',
    pitch: 'Over 20 years of experience in building and scaling web applications. Co-founded two companies and led major infrastructure migrations.',
    cta: {
      primary: 'View Projects',
      secondary: 'Contact Me',
    },
    links: {
      github: 'https://github.com/irving',
      linkedin: 'https://linkedin.com/in/irving-bermudez',
    },
  },
  about: {
    title: 'About Me',
    description: `As a seasoned Full-Stack Engineer and Systems Architect with over two decades of experience, I have a proven track record of designing, building, and scaling complex web applications and infrastructure. I've co-founded two successful companies, led large-scale data center migrations, and engineered high-availability systems that have served millions of users.

My expertise spans the entire technology stack, from front-end development with modern JavaScript frameworks to back-end engineering with Node.js and PHP, and infrastructure management with Docker, Kubernetes, and cloud platforms like AWS and Google Cloud.`,
  },
  competencies: {
    title: 'Core Competencies',
    pillars: [
      {
        title: 'Full-Stack Development',
        skills: ['JavaScript (ES6+)', 'TypeScript', 'Vue.js', 'Nuxt.js', 'Node.js', 'PHP', 'Laravel', 'MySQL', 'PostgreSQL', 'MongoDB'],
      },
      {
        title: 'Systems & Infrastructure',
        skills: ['Docker', 'Kubernetes', 'AWS', 'Google Cloud', 'CI/CD', 'Terraform', 'Ansible', 'Linux System Administration'],
      },
      {
        title: 'Specialized Expertise',
        skills: ['Cryptocurrency Mining Architecture', 'High-Availability WordPress', 'ISP Network Engineering', 'Data Center Migrations'],
      },
    ],
  },
  projects: {
    title: 'Featured Projects',
    items: [
      {
        title: 'Cryptocurrency Mining Architecture',
        description: 'Designed and built a large-scale cryptocurrency mining operation, including hardware selection, custom software development, and infrastructure management.',
        image: '/images/project-crypto.svg',
      },
      {
        title: 'High-Availability WordPress Management',
        description: 'Engineered a highly available and scalable WordPress hosting platform using containerization and load balancing to serve millions of page views per month.',
        image: '/images/project-wordpress.svg',
      },
      {
        title: 'ISP Network Engineering',
        description: 'Designed and implemented the core network infrastructure for a regional Internet Service Provider, including routing, switching, and security.',
        image: '/images/project-isp.svg',
      },
    ],
  },
  timeline: {
    title: 'Career Timeline',
    events: [
      {
        year: '2020 - Present',
        title: 'Senior Staff Engineer, Acme Inc.',
        description: 'Leading the architecture and development of a new cloud-native platform.',
      },
      {
        year: '2015 - 2020',
        title: 'Co-founder & CTO, Startup X',
        description: 'Built and scaled a SaaS platform from the ground up.',
      },
      {
        year: '2010 - 2015',
        title: 'Lead Engineer, Tech Corp',
        description: 'Managed a team of engineers and oversaw the development of several key products.',
      },
      {
        year: '2005 - 2010',
        title: 'Software Engineer, Web Solutions',
        description: 'Developed and maintained a variety of web applications for clients.',
      },
    ],
  },
  contact: {
    title: 'Contact',
    description: 'I am always open to discussing new opportunities. Feel free to reach out to me.',
    form: {
      name: 'Name',
      email: 'Email',
      message: 'Message',
      submit: 'Send Message',
    },
  },
};
