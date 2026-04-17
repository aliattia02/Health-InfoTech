// ==================== PAGE DATA ====================
const pageData = {
    home: {
        nav: {
            logo: { icon: 'HIT', text: 'Health Info Tech' },
            links: [
                { text: 'Projects', href: '#projects' },
                { text: 'Services', href: '#services' },
                { text: 'Contact', href: '#contact' }
            ]
        },
        hero: {
            title: 'Healthcare AI Solutions That Actually Work',
            subtitle: 'We bridge clinical medicine with cutting-edge technology to build intelligent healthcare systems that improve patient outcomes',
            ctaButtons: [
                { text: "Let's Work Together", href: '#contact', class: 'cta-primary' }
            ],
            stats: [
                { number: '92%',   label: 'Cost Reduction Achieved' },
                { number: '85%+',  label: 'ML Model Accuracy' },
                { number: '19K+',  label: 'Records Processed' },
                { number: '5+',    label: 'Years Experience' }
            ]
        },
        projects: [
            {
                badge: 'LMU Munich Thesis',
                title: 'DiaTwin',
                subtitle: 'AI-Powered Diabetes Management',
                description: 'Intelligent diabetes management system using Machine Learning and Reinforcement Learning to optimize personalized insulin dosing. Developed under Prof. Dr. Klaus Parhofer at LMU Munich, rated "Excellent."',
                features: [
                    'Pharmacokinetic modeling for insulin action',
                    'ML/RL continuous learning system',
                    'Real-time physician dashboard',
                    'Automated complex calculations',
                    'Multi-factor adjustment engine'
                ],
                techStack: ['React', 'Python/Flask', 'MongoDB', 'ML/RL'],
                links: [
                    { text: 'View Project', href: 'DiaTwin.html',  class: 'link-primary' },
                    { text: 'Learn More',   href: '#contact',       class: 'link-secondary' }
                ]
            },
            {
                badge: 'FHIR R4 · ISiK Stage 1',
                title: 'Morafek CareMate',
                subtitle: 'FHIR-Native Care Coordination Platform',
                description: 'مُرَافِق — your health companion. A production-grade, FHIR R4-compliant care coordination platform built for the German healthcare market. Every resource hand-coded — no pre-built FHIR server. ISiK Stage 1 compliant, DSGVO-ready, with Gemini AI-assisted ICD-10-GM clinical coding across 14,370 codes.',
                features: [
                    '6 FHIR R4 resource types — manually implemented',
                    'ISiK Stage 1 · GKV IDs · LANR numbers',
                    'Gemini AI ICD-10-GM coding (14,370 codes)',
                    'LOINC-coded vital signs · Real-time BP alerts',
                    'DSGVO-compliant · FHIR Bundle export · Offline-first'
                ],
                techStack: ['React Native', 'Python/Flask', 'MongoDB', 'Gemini AI', 'FHIR R4'],
                links: [
                    { text: 'Live Demo',  href: 'https://morafek-care-mate.vercel.app', class: 'link-primary',   target: '_blank' },
                    { text: 'Learn More', href: 'morafek.html',                         class: 'link-secondary' }
                ]
            },
            {
                badge: '19K+ Records',
                title: 'Data Visualization Platform',
                subtitle: 'Interactive Healthcare Analytics',
                description: 'Sophisticated web platform for organizing and visualizing large-scale healthcare data with interactive maps, charts, and multilingual support.',
                features: [
                    '19,000+ searchable medical records',
                    '400+ geographic data points with clustering',
                    '30+ interactive visualizations',
                    'Multilingual (3 languages, RTL support)',
                    'Performance optimized (FCP < 2s)'
                ],
                techStack: ['JavaScript', 'Chart.js', 'Leaflet.js', 'CSV/JSON'],
                links: [
                    { text: 'View Project', href: 'https://github.com/aliattia2', class: 'link-primary' },
                    { text: 'Request Demo', href: '#contact',                      class: 'link-secondary' }
                ]
            }
        ],
        services: [
            {
                icon: '🤖',
                title: 'AI/ML Clinical Solutions',
                description: 'Predictive models, treatment optimization, clinical decision support systems, and real-time patient monitoring powered by artificial intelligence.'
            },
            {
                icon: '📊',
                title: 'Healthcare Data Analytics',
                description: 'EHR data analysis, population health insights, clinical outcomes measurement, and regulatory compliance reporting (DRG, ICD-10, ATC).'
            },
            {
                icon: '💻',
                title: 'Digital Health Platforms',
                description: 'Patient management systems, telemedicine platforms, medical data visualization dashboards, and mobile health applications.'
            },
            {
                icon: '🔗',
                title: 'EHR Interoperability',
                description: 'Healthcare system integration, multi-system data consolidation (HIS, LIS, PACS), API development, and HL7/FHIR implementation.'
            }
        ]
    },

    // ==================== DIATWIN DATA ====================
    diatwin: {
        nav: {
            logo: { icon: 'DT', text: 'DiaTwin' },
            links: [
                { text: 'Features',          href: '#features' },
                { text: 'Compare',           href: '#comparison' },
                { text: 'Roadmap',           href: '#roadmap' },
                { text: 'Contact',           href: '#contact' },
                { text: '← Back',           href: 'index.html', class: 'back-link' }
            ]
        },
        hero: {
            badge: 'M.Sc. Thesis · Live Product · 2023–2025',
            title: 'DiaTwin',
            subtitle: 'Your Digital Twin for Diabetes Management',
            description: 'Pump-level precision without the pump cost. CGM-level insights without continuous sensors. Clinical supervision built into every decision.',
            ctaButtons: [
                { text: 'Request Demo', href: '#contact',  class: 'cta-primary' },
                { text: 'Learn More',   href: '#features', class: 'cta-secondary' }
            ]
        },
        valueCards: [
            { icon: '💰', title: '95-98% Cost Savings',      desc: '€50-100/year vs €3,000-16,000 for CGM/pumps' },
            { icon: '🎯', title: 'Dual Market Strategy',      desc: 'CGM-level awareness for pen users, pump-level intelligence for CGM users' },
            { icon: '🥼', title: 'Clinically Validated',      desc: '8.7/10 Clinical Utility Score, 50,000+ meal-outcome pairs' },
            { icon: '🇩🇪', title: 'DiGA Pathway Ready',      desc: 'CE Class IIa + German reimbursement track' }
        ],
        problems: [
            { icon: '⚠️', title: 'The Precision Gap',   desc: 'Patients have glucose data from CGM or finger-pricks, but no intelligent guidance on what to do with it. Doctor-set therapy plans are difficult to apply correctly in daily life, leading to dangerous guesswork.' },
            { icon: '📊', title: 'Technology Fails Alone', desc: 'A 2025 study found that 28% of automated insulin delivery users still fail to achieve glycemic targets, and 15.5% experience severe hypoglycemia. CGM data + pumps ≠ good outcomes without intelligence.' },
            { icon: '💸', title: 'Cost Barriers',        desc: 'CGM costs €3,000-5,000/year, insulin pumps cost €10,000-16,000. Only 15-20% of German T1D patients can access pumps, leaving 1.3 million with suboptimal management tools.' }
        ],
        features: [
            { icon: '🧬', title: 'Digital Twin Engine',        desc: 'Creates a personalized metabolic model for each patient. Continuously learns from outcomes to predict glucose responses and optimize dosing recommendations in real-time.' },
            { icon: '⚕️', title: 'Dual Net Effect System',    desc: 'Two-layer safety: physician validation layer sets clinical gold standard, patient projection layer provides real-time insights. Every decision has built-in clinical oversight.' },
            { icon: '🔮', title: '4-Hour Glucose Projection', desc: 'Predicts future glucose based on Insulin-on-Board (IOB) and Meal-on-Board (MOB). Prevents dangerous over-correction by showing what will happen before you dose.' },
            { icon: '🧠', title: 'Intelligent Glucose Estimation', desc: 'For pen users without CGM: physiology-based interpolation between 3-4 daily finger-pricks provides CGM-like trend awareness at 98% lower cost.' },
            { icon: '🍽️', title: '5-Profile Meal Modeling',   desc: 'Tracks meal absorption with 5 distinct curves (fast sugar, medium carbs, slow pasta, mixed meals, high-fat). Accounts for protein/fat conversion—more advanced than most pumps.' },
            { icon: '💊', title: 'S3 Guidelines Compliance',  desc: 'Implements German S3 Diabetes Guidelines pharmacokinetic profiles for 15 insulin types. Accurate onset/peak/duration modeling based on gold-standard clinical protocols.' }
        ],
        stats: [
            { number: '8.7/10',           label: 'Clinical Utility Score' },
            { number: '50,000+',          label: 'Meal-Outcome Pairs Validated' },
            { number: '€10,500-27,000',   label: 'Healthcare Savings/Patient/Year' },
            { number: 'TRL 4-5',          label: 'Technology Readiness Level' },
            { number: '26,000',           label: 'Projected German Users (3 years)' }
        ],
        roadmap: [
            { badge: '✓',    title: 'Phase 1: Research & Validation (Completed)',  desc: 'Master\'s thesis at DIT Germany (grade 1.3 "Excellent"). Core algorithms validated with 50,000+ meal-outcome pairs. Clinical Utility Score 8.7/10. Web + mobile prototypes operational. <strong>TRL 4-5 achieved.</strong>' },
            { badge: '▶',    title: 'Phase 2: Clinical Trial (In Progress)',        desc: 'Prospective study: N=100 T1D patients, 6-month follow-up. Primary sites: Charité Berlin (Prof. Dr. Braune), LMU network. Safety/efficacy validation, physician workflow integration. <strong>Target: TRL 6-7.</strong>' },
            { badge: '2025', title: 'Phase 3: Regulatory Approval',                desc: 'CE Class IIa certification (MDR compliance) via notified body. Parallel DiGA submission for German reimbursement. Technical documentation, clinical evaluation report, risk management file completion. <strong>Target: Market authorization.</strong>' },
            { badge: '2026', title: 'Phase 4: Market Launch & Scale',              desc: 'German market entry via DiGA pathway (physician prescription, statutory health insurance reimbursement). Patient onboarding with 3 clinical sites. Marketing to 1.3M insulin-pen users. API integrations with Abbott FreeStyle Libre and Dexcom G7. <strong>Target: 2% penetration (26,000 users).</strong>' },
            { badge: '2027+',title: 'Phase 5: International Expansion',            desc: 'EU market expansion (France, Netherlands, UK). FDA 510(k) pathway for US entry. Partnerships with Medtronic, Tandem, Insulet for pump integration. Real-world evidence studies for outcomes optimization. <strong>Target: 100,000+ users across 5 countries.</strong>' }
        ],
        opportunities: [
            { icon: '🥼', title: 'Clinical Partners',       desc: 'Diabetes centers interested in clinical trials, research collaborations, or early adoption programs for validated digital therapeutics.' },
            { icon: '💰', title: 'Investors',               desc: 'Seed/Series A investors focused on digital health, medical devices, or AI-driven healthcare solutions with proven clinical utility.' },
            { icon: '🤝', title: 'Industry Partners',       desc: 'CGM manufacturers (Abbott, Dexcom), insulin pump companies, or digital health platforms seeking integration partnerships.' },
            { icon: '🔬', title: 'Research Collaboration', desc: 'Academic institutions or research groups interested in digital twin technology, pharmacokinetic modeling, or diabetes management innovation.' }
        ]
    },

    // ==================== MORAFEK DATA ====================
    morafek: {
        nav: {
            logo: { icon: 'MC', text: 'Morafek CareMate' },
            links: [
                { text: 'Features',    href: '#features' },
                { text: 'FHIR',       href: '#fhir' },
                { text: 'Compliance', href: '#compliance' },
                { text: 'Contact',    href: '#contact' },
                { text: '← Back',    href: 'index.html', class: 'back-link' }
            ]
        },
        hero: {
            badge: 'Full-Stack · Production · 2024',
            title: 'Morafek CareMate',
            subtitle: 'مُرَافِق — your health companion',
            description: 'FHIR-native care coordination platform built for the German healthcare market. Manually implemented FHIR R4 resources, ISiK Stage 1 compliance, AI-assisted clinical coding, and DSGVO-ready patient consent — no pre-built FHIR server.',
            ctaButtons: [
                { text: 'Live Demo ↗', href: 'https://morafek-care-mate.vercel.app', class: 'cta-primary',   target: '_blank' },
                { text: 'GitHub ↗',   href: 'https://github.com/aliattia02',         class: 'cta-secondary', target: '_blank' }
            ],
            tags: ['FHIR R4', 'ISiK Stage 1', 'ICD-10-GM 2026', 'DSGVO / GDPR', 'LOINC-coded']
        },
        stats: [
            { number: '6',      label: 'FHIR R4 Resource Types Implemented' },
            { number: '35+',    label: 'REST Endpoints Across 5 Modules' },
            { number: '14,370', label: 'ICD-10-GM Codes (AI-assisted)' },
            { number: '7',      label: 'LOINC Codes for Vital Signs' }
        ],
        fhirResources: [
            { name: 'Observation',        desc: 'LOINC-coded vital signs — HR, SpO₂, glucose, blood pressure' },
            { name: 'Encounter',          desc: 'Clinical visits with ICD-10-GM 2026 diagnoses' },
            { name: 'Condition',          desc: 'Structured problem list with active / resolved status' },
            { name: 'DocumentReference', desc: 'LOINC-categorised clinical documents via Cloudinary' },
            { name: 'Communication',      desc: 'Secure patient–clinician message threads' },
            { name: 'Bundle',             desc: 'Full patient record export on demand' }
        ],
        features: [
            { icon: '🩺', title: 'Role-Based Clinical Dashboard',    desc: 'Per-patient views for vitals, visits, documents, and exercise prescriptions. Automated severity thresholds flag abnormal vitals (HR/Glucose/SpO₂/BP) in real time. Real-time BP classification from Normal to Hypertensive Crisis.' },
            { icon: '🤖', title: 'AI Clinical Coding',               desc: 'Clinicians describe an encounter in plain text; Gemini AI suggests the correct ICD-10-GM 2026 code from 14,370 options. Offline SQLite queue ensures no data loss during connectivity gaps.' },
            { icon: '📊', title: 'Vitals Monitoring & Alerts',       desc: 'LOINC-coded observations for blood pressure, heart rate, SpO₂, and glucose. Automated severity classification (info → warning → critical) with real-time alerts sent to the care team.' },
            { icon: '💬', title: 'Secure Patient–Clinician Messaging', desc: 'In-app encrypted direct messaging between patients and their authorized doctors. Conversation list with unread message count badges and RBAC-controlled access.' },
            { icon: '📁', title: 'Medical Document Management',      desc: 'Upload and organize lab reports, imaging, and prescriptions by category. LOINC-categorised via DocumentReference resources and stored via Cloudinary with doctor read-only access.' },
            { icon: '🏋️', title: 'Exercise Prescription',           desc: 'Doctor-assigned exercise programs with category, frequency, duration, sets/reps, video links, and images. Patient mark-as-done toggle with optimistic UI updates.' },
            { icon: '🔐', title: 'DSGVO-Compliant Auth',             desc: 'JWT HS256 authentication with role-based access control. Doctor–patient access controlled by explicit patient authorization. Right-to-erasure account deletion compliant with German data protection law.' },
            { icon: '📦', title: 'FHIR Bundle Export',               desc: 'Patients can export their complete health record as a standards-compliant FHIR R4 Bundle JSON — portable, vendor-neutral, and shareable with any FHIR-capable system.' }
        ],
        compliance: [
            { label: 'HL7 FHIR R4 — manual implementation',              status: '✓ Compliant' },
            { label: 'ISiK Stage 1 — GKV IDs & LANR numbers',           status: '✓ Compliant' },
            { label: 'ICD-10-GM 2026 diagnosis coding',                  status: '✓ Implemented' },
            { label: 'LOINC-coded vital signs (7 codes)',                 status: '✓ Implemented' },
            { label: 'DSGVO — right-to-erasure & explicit consent model', status: '✓ Compliant' },
            { label: 'JWT tokens stored in secure mobile keystores',      status: '✓ Implemented' },
            { label: 'OMOP CDM-ready schema design',                     status: '✓ Ready' },
            { label: 'FHIR Bundle full patient record export',            status: '✓ On-demand' }
        ],
        techStack: [
            { layer: 'Mobile',   tags: ['React Native', 'Expo Router', 'TypeScript', 'SQLite'] },
            { layer: 'Web',      tags: ['React 18', 'TypeScript', 'Vercel'] },
            { layer: 'Backend',  tags: ['Python / Flask', 'MongoDB Atlas', 'Render'] },
            { layer: 'AI & Storage', tags: ['Gemini AI', 'Cloudinary', 'JWT HS256'] }
        ]
    }
};

// ==================== COMPONENT BUILDERS ====================

function buildNav(data) {
    return `
        <nav>
            <div class="nav-container">
                <a href="index.html" class="logo">
                    <div class="logo-icon">${data.logo.icon}</div>
                    <span>${data.logo.text}</span>
                </a>
                <ul class="nav-links">
                    ${data.links.map(link => `
                        <li><a href="${link.href}" ${link.class ? `class="${link.class}"` : ''}>${link.text}</a></li>
                    `).join('')}
                </ul>
            </div>
        </nav>
    `;
}

function buildHeroHome(data) {
    return `
        <section class="hero">
            <div class="hero-content">
                <h1>${data.title}</h1>
                <p>${data.subtitle}</p>
                ${data.ctaButtons.map(btn => `
                    <a href="${btn.href}" class="cta-button ${btn.class}">${btn.text}</a>
                `).join('')}
                <div class="hero-stats">
                    ${data.stats.map(stat => `
                        <div class="stat">
                            <span class="stat-number">${stat.number}</span>
                            <span class="stat-label">${stat.label}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
    `;
}

function buildHeroDiatwin(data) {
    return `
        <section class="hero">
            <div class="hero-content">
                <div class="hero-badge">${data.badge}</div>
                <h1>${data.title}</h1>
                <p class="hero-subtitle">${data.subtitle}</p>
                <p>${data.description}</p>
                <div class="cta-buttons">
                    ${data.ctaButtons.map(btn => `
                        <a href="${btn.href}" class="cta-button ${btn.class}">${btn.text}</a>
                    `).join('')}
                </div>
            </div>
        </section>
    `;
}

function buildHeroMorafek(data) {
    return `
        <section class="hero" style="background: linear-gradient(135deg, #1e3a5f 0%, #0f2027 100%);">
            <div class="hero-content">
                <div class="hero-badge">${data.badge}</div>
                <h1>${data.title}</h1>
                <p class="hero-subtitle" style="font-size:1.3rem; opacity:0.85;">${data.subtitle}</p>
                <p>${data.description}</p>
                <div class="cta-buttons" style="margin-top:1.5rem;">
                    ${data.ctaButtons.map(btn => `
                        <a href="${btn.href}" class="cta-button ${btn.class}" ${btn.target ? `target="${btn.target}"` : ''}>${btn.text}</a>
                    `).join('')}
                </div>
                <div class="tech-stack" style="margin-top:1.5rem; justify-content:center;">
                    ${data.tags.map(tag => `<span class="tech-tag" style="background:rgba(255,255,255,0.15); color:white;">${tag}</span>`).join('')}
                </div>
            </div>
        </section>
    `;
}

function buildValueCards(cards) {
    return `
        <div class="value-prop">
            <div class="value-cards">
                ${cards.map(card => `
                    <div class="value-card">
                        <div class="value-icon">${card.icon}</div>
                        <h3 class="value-title">${card.title}</h3>
                        <p class="value-desc">${card.desc}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function buildProjectsSection(projects) {
    return `
        <section id="projects">
            <h2 class="section-title">Featured Projects</h2>
            <p class="section-subtitle">Production-ready healthcare solutions combining clinical expertise with AI/ML</p>
            <div class="projects-grid">
                ${projects.map(project => `
                    <div class="project-card">
                        <div class="project-header">
                            <div class="project-badge">${project.badge}</div>
                            <h3 class="project-title">${project.title}</h3>
                            <p class="project-subtitle">${project.subtitle}</p>
                        </div>
                        <div class="project-body">
                            <p class="project-description">${project.description}</p>
                            <ul class="project-features">
                                ${project.features.map(f => `<li>${f}</li>`).join('')}
                            </ul>
                            <div class="tech-stack">
                                ${project.techStack.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                            </div>
                            <div class="project-links">
                                ${project.links.map(link => `
                                    <a href="${link.href}" class="project-link ${link.class}" ${link.target ? `target="${link.target}"` : ''}>${link.text}</a>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </section>
    `;
}

function buildServicesSection(services) {
    return `
        <section id="services">
            <h2 class="section-title">What We Offer</h2>
            <p class="section-subtitle">Comprehensive healthcare IT solutions from strategy to implementation</p>
            <div class="services-grid">
                ${services.map(service => `
                    <div class="service-card">
                        <div class="service-icon">${service.icon}</div>
                        <h3 class="service-title">${service.title}</h3>
                        <p class="service-description">${service.description}</p>
                    </div>
                `).join('')}
            </div>
        </section>
    `;
}

function buildProblemsSection(problems) {
    return `
        <section>
            <h2 class="section-title">The Problem We're Solving</h2>
            <p class="section-subtitle">Even with advanced technology, Type 1 Diabetes patients still struggle</p>
            <div class="features-grid">
                ${problems.map(problem => `
                    <div class="feature-card">
                        <div class="feature-header">
                            <div class="feature-icon">${problem.icon}</div>
                            <h3 class="feature-title">${problem.title}</h3>
                        </div>
                        <p class="feature-desc">${problem.desc}</p>
                    </div>
                `).join('')}
            </div>
        </section>
    `;
}

function buildFeaturesSection(features) {
    return `
        <section id="features">
            <h2 class="section-title">Core Technology</h2>
            <p class="section-subtitle">Digital twin technology powered by pharmacokinetic modeling and machine learning</p>
            <div class="features-grid">
                ${features.map(feature => `
                    <div class="feature-card">
                        <div class="feature-header">
                            <div class="feature-icon">${feature.icon}</div>
                            <h3 class="feature-title">${feature.title}</h3>
                        </div>
                        <p class="feature-desc">${feature.desc}</p>
                    </div>
                `).join('')}
            </div>
        </section>
    `;
}

function buildMorafekFeaturesSection(features) {
    return `
        <section id="features">
            <h2 class="section-title">Platform Features</h2>
            <p class="section-subtitle">End-to-end care coordination for patients and clinicians</p>
            <div class="features-grid">
                ${features.map(feature => `
                    <div class="feature-card">
                        <div class="feature-header">
                            <div class="feature-icon">${feature.icon}</div>
                            <h3 class="feature-title">${feature.title}</h3>
                        </div>
                        <p class="feature-desc">${feature.desc}</p>
                    </div>
                `).join('')}
            </div>
        </section>
    `;
}

function buildMorafekStatsSection(stats) {
    return `
        <div class="stats-section">
            <div class="stats-content">
                <h2 class="section-title" style="color: white;">By the Numbers</h2>
                <p class="section-subtitle" style="color: rgba(255,255,255,0.8);">FHIR R4 implementation depth</p>
                <div class="stats-grid">
                    ${stats.map(stat => `
                        <div class="stat-box">
                            <span class="stat-number">${stat.number}</span>
                            <span class="stat-label">${stat.label}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

function buildFhirSection(resources) {
    return `
        <section id="fhir">
            <h2 class="section-title">FHIR R4 Implementation</h2>
            <p class="section-subtitle">6 resource types — hand-coded to spec, no pre-built FHIR server</p>
            <div class="projects-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));">
                ${resources.map(r => `
                    <div class="project-card" style="border-top: 3px solid var(--primary);">
                        <div class="project-body">
                            <h3 class="project-title" style="font-family: monospace; color: var(--primary);">${r.name}</h3>
                            <p class="project-description">${r.desc}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </section>
    `;
}

function buildComplianceSection(items) {
    return `
        <section id="compliance" style="background: var(--light); padding: 5rem 2rem;">
            <div style="max-width: 1200px; margin: 0 auto;">
                <h2 class="section-title">Compliance &amp; Standards</h2>
                <p class="section-subtitle">ISiK Stage 1 · DSGVO · German HIS Standards</p>
                <div style="max-width: 720px; margin: 0 auto;">
                    ${items.map(item => `
                        <div style="display:flex; align-items:center; justify-content:space-between; padding:1rem 1.25rem; background:white; border:1px solid #e2e8f0; border-radius:8px; margin-bottom:.75rem; box-shadow:0 1px 4px rgba(0,0,0,0.05);">
                            <span style="font-family:monospace; font-size:.85rem; color:#334155;">${item.label}</span>
                            <span style="font-family:monospace; font-size:.75rem; color:#059669; background:rgba(5,150,105,.08); border:1px solid rgba(5,150,105,.2); padding:.2rem .75rem; border-radius:99px; white-space:nowrap; margin-left:1rem;">${item.status}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
    `;
}

function buildTechStackSection(stack) {
    return `
        <section>
            <h2 class="section-title">Tech Stack</h2>
            <p class="section-subtitle">Cross-platform · Cloud-native · Standards-compliant</p>
            <div class="services-grid">
                ${stack.map(layer => `
                    <div class="service-card">
                        <h3 class="service-title">${layer.layer}</h3>
                        <div class="tech-stack" style="justify-content:center; margin-top:.75rem;">
                            ${layer.tags.map(t => `<span class="tech-tag">${t}</span>`).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        </section>
    `;
}

function buildStatsSection(stats) {
    return `
        <div class="stats-section">
            <div class="stats-content">
                <h2 class="section-title" style="color: white;">Clinical Validation</h2>
                <p class="section-subtitle" style="color: rgba(255,255,255,0.8);">Evidence-based results from real-world data</p>
                <div class="stats-grid">
                    ${stats.map(stat => `
                        <div class="stat-box">
                            <span class="stat-number">${stat.number}</span>
                            <span class="stat-label">${stat.label}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

function buildComparisonSection() {
    return `
        <section id="comparison">
            <h2 class="section-title">Why DiaTwin?</h2>
            <p class="section-subtitle">Competitive advantages over existing solutions</p>
            <div class="comparison">
                <table class="comparison-table">
                    <thead>
                        <tr>
                            <th>Feature</th>
                            <th class="highlight-col">DiaTwin</th>
                            <th>CGM-Only</th>
                            <th>Basic Apps</th>
                            <th>Insulin Pumps</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>Intelligent Dosing Guidance</strong></td><td class="highlight-col"><span class="check-icon">✓</span> Multi-factor IOB/MOB</td><td><span class="x-icon">✗</span></td><td><span class="x-icon">✗</span></td><td><span class="check-icon">✓</span> Closed-loop</td></tr>
                        <tr><td><strong>Works with Insulin Pens</strong></td><td class="highlight-col"><span class="check-icon">✓</span></td><td><span class="check-icon">✓</span></td><td><span class="check-icon">✓</span></td><td><span class="x-icon">✗</span></td></tr>
                        <tr><td><strong>Annual Cost</strong></td><td class="highlight-col"><strong>€50-100</strong></td><td>€3,000-5,000</td><td>€0-200</td><td>€10,000-16,000</td></tr>
                        <tr><td><strong>4-Hour Glucose Projection</strong></td><td class="highlight-col"><span class="check-icon">✓</span></td><td><span class="x-icon">✗</span></td><td><span class="x-icon">✗</span></td><td>Limited</td></tr>
                        <tr><td><strong>Physician Remote Monitoring</strong></td><td class="highlight-col"><span class="check-icon">✓</span> Built-in</td><td><span class="x-icon">✗</span></td><td><span class="x-icon">✗</span></td><td>Device-specific</td></tr>
                        <tr><td><strong>Meal Absorption Modeling</strong></td><td class="highlight-col"><span class="check-icon">✓</span> 5 profiles</td><td><span class="x-icon">✗</span></td><td>Basic</td><td>2-3 profiles</td></tr>
                        <tr><td><strong>Protein/Fat Contribution</strong></td><td class="highlight-col"><span class="check-icon">✓</span></td><td><span class="x-icon">✗</span></td><td><span class="x-icon">✗</span></td><td><span class="x-icon">✗</span> Most pumps</td></tr>
                        <tr><td><strong>Non-CGM Support</strong></td><td class="highlight-col"><span class="check-icon">✓</span> Intelligent Estimation</td><td>N/A</td><td>Manual only</td><td>N/A</td></tr>
                    </tbody>
                </table>
            </div>
        </section>
    `;
}

function buildRoadmapSection(items) {
    return `
        <section id="roadmap">
            <h2 class="section-title">Development Roadmap</h2>
            <p class="section-subtitle">From research excellence to clinical deployment</p>
            <div class="timeline">
                ${items.map(item => `
                    <div class="timeline-item">
                        <div class="timeline-badge">${item.badge}</div>
                        <div class="timeline-content">
                            <h3 class="timeline-title">${item.title}</h3>
                            <p class="timeline-desc">${item.desc}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </section>
    `;
}

function buildContactSectionHome() {
    return `
        <section class="contact" id="contact">
            <div class="contact-content">
                <h2>Let's Build the Future of Healthcare Together</h2>
                <p style="margin-bottom: 2rem; opacity: 0.9;">
                    Have a healthcare IT challenge? Let's discuss how we can help transform your organization with intelligent, data-driven solutions.
                </p>
                <div class="contact-methods">
                    <div class="contact-item">
                        <strong>Email</strong>
                        <a href="mailto:aliattia2@gmail.com">aliattia2@gmail.com</a>
                    </div>
                    <div class="contact-item">
                        <strong>LinkedIn</strong>
                        <a href="https://www.linkedin.com/in/ali-attia-74748bb4/" target="_blank">Connect with Ali</a>
                    </div>
                    <div class="contact-item">
                        <strong>GitHub</strong>
                        <a href="https://github.com/aliattia2" target="_blank">View Portfolio</a>
                    </div>
                    <div class="contact-item">
                        <strong>Location</strong>
                        <span style="color: var(--secondary);">Munich, Germany</span>
                    </div>
                </div>
            </div>
        </section>
    `;
}

function buildContactSectionDiatwin(opportunities) {
    return `
        <section id="contact">
            <h2 class="section-title">Let's Connect</h2>
            <p class="section-subtitle">Interested in partnerships, clinical trials, or investment opportunities?</p>
            <div class="contact-container">
                <div class="contact-info">
                    <div class="contact-card">
                        <div class="contact-icon">📧</div>
                        <h3>Email</h3>
                        <a href="mailto:aliattia2@gmail.com" class="contact-link">aliattia2@gmail.com</a>
                    </div>
                    <div class="contact-card">
                        <div class="contact-icon">💼</div>
                        <h3>LinkedIn</h3>
                        <a href="https://www.linkedin.com/in/ali-attia-74748bb4/" class="contact-link" target="_blank">Connect with me</a>
                    </div>
                    <div class="contact-card">
                        <div class="contact-icon">🌍</div>
                        <h3>Location</h3>
                        <div class="contact-detail">Munich, Germany</div>
                        <div class="contact-subtitle">Open to remote collaboration</div>
                    </div>
                </div>
                <div class="contact-opportunities">
                    <h3 class="opportunities-title">Collaboration Opportunities</h3>
                    <div class="opportunity-list">
                        ${opportunities.map(opp => `
                            <div class="opportunity-item">
                                <div class="opportunity-icon">${opp.icon}</div>
                                <div>
                                    <h4>${opp.title}</h4>
                                    <p>${opp.desc}</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </section>
    `;
}

function buildContactSectionMorafek() {
    return `
        <section class="contact" id="contact">
            <div class="contact-content">
                <h2>Interested in Morafek CareMate?</h2>
                <p style="margin-bottom: 2rem; opacity: 0.9;">
                    Whether you're a clinic, health system, or developer looking to integrate FHIR-compliant care coordination — let's talk.
                </p>
                <div class="contact-methods">
                    <div class="contact-item">
                        <strong>Email</strong>
                        <a href="mailto:aliattia2@gmail.com">aliattia2@gmail.com</a>
                    </div>
                    <div class="contact-item">
                        <strong>Live Demo</strong>
                        <a href="https://morafek-care-mate.vercel.app" target="_blank">morafek-care-mate.vercel.app</a>
                    </div>
                    <div class="contact-item">
                        <strong>GitHub</strong>
                        <a href="https://github.com/aliattia02" target="_blank">github.com/aliattia02</a>
                    </div>
                    <div class="contact-item">
                        <strong>Location</strong>
                        <span style="color: var(--secondary);">Munich, Germany</span>
                    </div>
                </div>
            </div>
        </section>
    `;
}

function buildCtaSection() {
    return `
        <div class="cta-section">
            <h2>Ready to Transform Diabetes Care?</h2>
            <p>Join us in making intelligent insulin guidance accessible to every Type 1 Diabetes patient</p>
            <div class="cta-buttons">
                <a href="#contact" class="cta-button cta-primary">Get in Touch</a>
            </div>
        </div>
    `;
}

function buildMorafekCtaSection() {
    return `
        <div class="cta-section">
            <h2>FHIR-Native. DSGVO-Ready. Built for Germany.</h2>
            <p>The only care coordination platform with ISiK Stage 1 compliance built from scratch — no pre-built FHIR server.</p>
            <div class="cta-buttons">
                <a href="https://morafek-care-mate.vercel.app" class="cta-button cta-primary" target="_blank">Try Live Demo ↗</a>
                <a href="#contact" class="cta-button cta-secondary">Get in Touch</a>
            </div>
        </div>
    `;
}

function buildFooter(type = 'home') {
    if (type === 'diatwin') {
        return `
            <footer>
                <p>&copy; 2024 DiaTwin | Research Project by Ali Attia | <a href="mailto:aliattia2@gmail.com">aliattia2@gmail.com</a></p>
                <p style="margin-top: 0.5rem; opacity: 0.8; font-size: 0.9rem;">Master's Thesis Project — LMU Munich | For research and partnership inquiries only</p>
            </footer>
        `;
    }
    if (type === 'morafek') {
        return `
            <footer>
                <p>&copy; 2024 Morafek CareMate | Health Info Tech | Developed by Ali Attia</p>
                <p style="margin-top: 0.5rem; opacity: 0.8; font-size: 0.9rem;">FHIR R4 · ISiK Stage 1 · DSGVO Compliant | Munich, Germany</p>
            </footer>
        `;
    }
    return `
        <footer>
            <p>&copy; 2016-2025 Health Info Tech. Healthcare AI Solutions.</p>
            <p style="margin-top: 0.5rem; font-size: 0.9rem;">
                Founded 2016 | Munich, Germany | M.Sc. Digital Health (LMU Munich)
            </p>
        </footer>
    `;
}

// ==================== PAGE RENDERERS ====================

function renderHomePage() {
    const data = pageData.home;
    document.title = 'Health Info Tech — Healthcare AI Solutions';
    document.body.innerHTML = `
        ${buildNav(data.nav)}
        ${buildHeroHome(data.hero)}
        ${buildProjectsSection(data.projects)}
        ${buildServicesSection(data.services)}
        ${buildContactSectionHome()}
        ${buildFooter('home')}
    `;
}

function renderDiatwinPage() {
    const data = pageData.diatwin;
    document.title = 'DiaTwin — Clinical AI Insulin Dosing · Health Info Tech';
    document.body.innerHTML = `
        ${buildNav(data.nav)}
        ${buildHeroDiatwin(data.hero)}
        ${buildValueCards(data.valueCards)}
        ${buildProblemsSection(data.problems)}
        ${buildFeaturesSection(data.features)}
        ${buildStatsSection(data.stats)}
        ${buildComparisonSection()}
        ${buildRoadmapSection(data.roadmap)}
        ${buildCtaSection()}
        ${buildContactSectionDiatwin(data.opportunities)}
        ${buildFooter('diatwin')}
    `;
}

function renderMorafekPage() {
    const data = pageData.morafek;
    document.title = 'Morafek CareMate — FHIR-Native Care Coordination · Health Info Tech';
    document.body.innerHTML = `
        ${buildNav(data.nav)}
        ${buildHeroMorafek(data.hero)}
        ${buildMorafekStatsSection(data.stats)}
        ${buildMorafekFeaturesSection(data.features)}
        ${buildFhirSection(data.fhirResources)}
        ${buildComplianceSection(data.compliance)}
        ${buildTechStackSection(data.techStack)}
        ${buildMorafekCtaSection()}
        ${buildContactSectionMorafek()}
        ${buildFooter('morafek')}
    `;
}

// ==================== INITIALIZATION ====================

function initPage() {
    const path = window.location.pathname.toLowerCase();

    if (path.includes('diatwin')) {
        renderDiatwinPage();
    } else if (path.includes('morafek')) {
        renderMorafekPage();
    } else {
        renderHomePage();
    }
}

document.addEventListener('DOMContentLoaded', initPage);
