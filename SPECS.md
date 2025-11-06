# SPECS.md

## Project: Irving Bermudez Personal Portfolio Website

**Version:** 1.0
**Date:** 2025-10-17

This document outlines the complete specifications for the development of a personal portfolio website for Irving Bermudez. It includes the high-level design, a detailed development task list, and a system prompt for an AI development assistant.

---

### **A. High-Level Design & Technical Specifications**

This section outlines the architectural and design goals for the project.

#### **1. Core Concept & Theme**

* [cite_start]**Objective:** To build a professional, single-page portfolio website that effectively showcases over 20 years of experience as a Full-Stack Engineer and Systems Architect[cite: 5].
* [cite_start]**Core Message:** The site must convey deep technical expertise, versatility across the tech stack, and an entrepreneurial, problem-solving mindset[cite: 7].
* **Aesthetic:** The design shall be modern, clean, and professional. A dark theme is required, using a palette of dark grays, off-white text, and a single, strong accent color (e.g., electric blue) for interactive elements.

#### **2. Target Audience**

The design and content should be tailored for:
* Technical Recruiters and Hiring Managers.
* Potential freelance clients seeking senior-level consultation.
* Industry peers.

#### **3. Architecture: Single-Page Application (SPA)**

The website will be a single-page parallax design, allowing users to scroll seamlessly through distinct content sections.

* **Section 1: Hero Banner:** Above-the-fold content to immediately establish identity and value. [cite_start]Must contain name, title, a concise pitch, CTA buttons, and links to GitHub and LinkedIn[cite: 3].
* [cite_start]**Section 2: About:** A narrative expansion of the resume's summary, focusing on key achievements like co-founding companies [cite: 7] [cite_start]and leading major migrations[cite: 36].
* [cite_start]**Section 3: Core Competencies:** A visual, three-pillar breakdown of skills: (1) Full-Stack Development [cite: 9][cite_start], (2) Systems & Infrastructure [cite: 10][cite_start], and (3) Specialized Expertise[cite: 12].
* [cite_start]**Section 4: Featured Projects:** Mini-case studies of 3-4 significant career highlights, such as the Cryptocurrency Mining Architecture [cite: 20][cite_start], High-Availability WordPress Management [cite: 25][cite_start], and ISP Network Engineering[cite: 31].
* [cite_start]**Section 5: Career Timeline:** A visual, chronological representation of the Work Experience section from the resume[cite: 14, 21, 27, 30, 35].
* [cite_start]**Section 6: Contact:** A simple, functional contact form and direct contact information[cite: 3].

#### **4. Technical Stack**

* **Frontend Framework:** **Nuxt.js (v3+)**. To be used for its performance benefits (static site generation) and modern Vue.js architecture.
* **Styling:** **Tailwind CSS**. To be used for its utility-first approach, enabling rapid and maintainable styling.
* **Deployment:** The application will be deployed on **Vercel** or **Netlify**, connected directly to the project's GitHub repository for CI/CD.

---

### **B. Development TODO List & Progress Tracker**

This is the granular, step-by-step implementation plan. Mark tasks as complete (`- [x]`) as they are finished.

#### **Phase 1: Foundation & Project Setup**

* [ ] **Task 1: Environment & Tooling**
    * [ ] Initialize a new Git repository and connect it to a hosting provider (Vercel/Netlify).
    * [ ] Initialize a new Nuxt 3 project (`npx nuxi@latest init .`).
    * [ ] Install and configure the Nuxt Tailwind CSS module (`npx nuxi@latest module add tailwindcss`).
    * [ ] Install and configure `nuxt-icon` and `@nuxt/image` modules.
* [ ] **Task 2: Design System & Project Structure**
    * [ ] Create the directory structure: `components/global/`, `components/sections/`, `assets/images/`.
    * [ ] Define the core color palette and fonts in `tailwind.config.js` and a global CSS file.

#### **Phase 2: Content & Asset Creation**

* [ ] **Task 1: Content Aggregation**
    * [ ] Create a `lib/content.js` file to store all static text content (hero pitch, project descriptions, etc.) to separate it from the UI components.
* [ ] **Task 2: Asset Preparation**
    * [ ] Process and compress a professional headshot, saving it as a `.webp` in `assets/images/`.
    * [ ] Create or source minimalist vector graphics (SVG) for each of the featured projects.
    * [ ] Compile a list of icon names (from a library like Material Design Icons) needed for the skills section.

#### **Phase 3: Development & Implementation**

* [ ] **Task 1: Build Global Components**
    * [ ] Create `components/global/TheHeader.vue`: A sticky navbar with smooth-scroll navigation links and a mobile-responsive hamburger menu.
    * [ ] Create `components/global/TheFooter.vue`: A simple footer with social links and a copyright notice.
* [ ] **Task 2: Build `app.vue` Layout**
    * [ ] Structure the main `app.vue` to sequentially include the header, all section components, and the footer.
* [ ] **Task 3: Build Section Components**
    * [ ] `components/sections/Hero.vue`: Implement the full-screen hero section with headline, sub-headline, and CTA buttons.
    * [ ] `components/sections/About.vue`: Create a two-column layout with the headshot and narrative text.
    * [ ] `components/sections/Skills.vue`: Use a CSS Grid to create the three-pillar layout, populating it with skill "pills" (icon + text).
    * [ ] `components/sections/Projects.vue`:
        * [ ] First, build a reusable `components/ProjectCard.vue` component that accepts props for project data.
        * [ ] Then, in `Projects.vue`, use a `v-for` loop to render the project cards from the content file in a responsive grid.
    * [ ] `components/sections/Experience.vue`: Implement the vertical timeline using CSS with `position: relative/absolute` for item placement.
    * [ ] `components/sections/Contact.vue`: Build the contact form. If deploying to Netlify, add the `data-netlify="true"` attribute for seamless submission handling.

#### **Phase 4: Finalization & Deployment**

* [ ] **Task 1: Quality Assurance & Testing**
    * [ ] Conduct thorough responsive testing across mobile, tablet, and desktop breakpoints.
    * [ ] Run a Lighthouse audit in Chrome DevTools and address any issues related to Performance, Accessibility, Best Practices, and SEO. Aim for scores >90.
    * [ ] Test all interactive elements, links, and the contact form submission.
* [ ] **Task 2: SEO & Meta Content**
    * [ ] Use Nuxt's `useHead` composable in `app.vue` to set the site-wide title, meta description, and language attribute.
    * [ ] Generate and add a complete set of favicons to the `public/` directory.
* [ ] **Task 3: Deployment**
    * [ ] Push the final, tested code to the `main` branch of the GitHub repository.
    * [ ] Verify that the CI/CD pipeline on the hosting provider successfully builds and deploys the site.
    * [ ] Configure the custom domain and ensure HTTPS is enforced.

---

### **C. System Prompt for AI Developer Assistant**
