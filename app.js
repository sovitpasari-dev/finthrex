/* ----------------------------------------------------
   FINTHREX ADVISORY - 3D WEBGL ENGINE & INTERACTIVE LOGIC
   Includes Three.js 3D Rotating Sphere Stage, Interactive 3D Card Tilt,
   Dynamic Metadata Router, Diagnostic Calculator & Insights Engine.
   ---------------------------------------------------- */

// Per-Page / Section Metadata Configuration
const SEO_CONFIG = {
  home: {
    title: "RBI Digital Lending Compliance | Fintech Regulatory Advisory India",
    description: "Finthrex Advisory provides RBI digital lending compliance, FLDG risk management, and fintech regulatory advisory India across Gurgaon, Mumbai, Bengaluru & Kolkata."
  },
  practice: {
    title: "FLDG Arrangement Structuring & NBFC Registration Advisory",
    description: "Expert FLDG arrangement structuring, co-lending framework compliance, payment aggregator authorization, and end-to-end NBFC registration advisory in India."
  },
  insights: {
    title: "RBI Master Directions Digital Lending & NBFC Compliance Updates",
    description: "Stay ahead with expert briefs on RBI master directions digital lending, FLDG guidelines, DPDP data sovereignty, and NBFC compliance updates India."
  },
  firm: {
    title: "Fintech Regulatory Advisory Firm India | RBI Compliance Experts",
    description: "Finthrex Advisory is a premier fintech regulatory advisory firm India. Our RBI compliance experts structure compliant lending products for leading fintechs."
  },
  contact: {
    title: "RBI Compliance Consultation | NBFC Licensing Advisory Contact",
    description: "Schedule a confidential RBI compliance consultation with Finthrex Advisory. NBFC licensing advisory contact for digital lending and payment aggregators."
  }
};

// Regulatory Insights Database
const INSIGHTS_DATABASE = [
  {
    id: 'fldg-caps-2026',
    category: 'digital-lending',
    tag: 'FLDG STRUCTURING',
    title: 'Navigating 5% Default Loss Guarantee Caps Under July 2026 RBI Directions',
    snippet: 'Analysis of escrow routing protocols, corporate guarantee enforceability, and LSP net worth audit requirements for digital lending platforms.',
    fullText: 'The RBI updated digital lending framework strictly limits Default Loss Guarantee (FLDG) arrangements to 5% of the total loan portfolio disbursed by a Lending Service Provider (LSP). Finthrex Advisory structures zero-pass-through escrow routes, audited capital buffers, and compliant legally-enforceable risk sharing agreements.'
  },
  {
    id: 'clm-co-lending-revamp',
    category: 'co-lending',
    tag: 'CLM-2 FRAMEWORK',
    title: 'Bank-NBFC Co-Lending: Joint Underwriting & Escrow Node Compliance',
    snippet: 'Structuring non-discretionary co-lending models (CLM-2) with automated escrow splits, zero-pass-through accounts, and immediate borrower disclosures.',
    fullText: 'Co-lending Model (CLM-2) directions mandate that banks and NBFCs must maintain non-discretionary credit risk exposure without indirect FLDG masking. We audit escrow node APIs, co-lending master agreements, and real-time interest rate disclosure workflows.'
  },
  {
    id: 'dpdp-lending-apps',
    category: 'dpdp',
    tag: 'DPDP DATA PRIVACY',
    title: 'DPDP Act Enforceability: Contact Bans & Consent Managers in Fintech',
    snippet: 'Impact of the Data Protection Act on loan applicant device permission harvesting, selfie biometrics, and mandatory data localization.',
    fullText: 'The Digital Personal Data Protection (DPDP) Act restricts digital lending apps from harvesting phone contacts, call logs, or gallery storage. Finthrex Advisory conducts full data localization audits and implements compliant Consent Manager APIs.'
  },
  {
    id: 'payment-aggregator-pa-cb',
    category: 'payments',
    tag: 'PA-P / PA-CB AUTHORIZATION',
    title: 'Cross-Border & Payment Aggregator Licensing Guidelines',
    snippet: 'Key net worth milestones, escrow nodal bank audits, and merchant onboarding verification for PA-P and PA-CB authorization.',
    fullText: 'Payment Aggregator (PA) applicants must satisfy a minimum net worth of ₹15 Crore at application time and ₹25 Crore within 3 years. We guide payment startups through escrow audit preparation, System Audit Report (SAR) submissions, and RBI representations.'
  },
  {
    id: 'kfs-apr-transparency',
    category: 'digital-lending',
    tag: 'CONSUMER PROTECTION',
    title: 'Key Fact Statement (KFS) Standardization & APR Disclosures',
    snippet: 'Mandatory inclusion of all processing fees, bounce charges, and cooling-off period terms in standardized KFS templates.',
    fullText: 'RBI directives require digital lenders to issue a standardized Key Fact Statement (KFS) prior to loan execution, disclosing the exact Annual Percentage Rate (APR). We provide automated KFS template audit protocols.'
  }
];

// Interactive Diagnostic Tool State
const DIAGNOSTIC_QUESTIONS = [
  {
    id: 'model',
    step: 1,
    title: 'Primary Operational Framework',
    desc: 'Select your primary digital finance framework.',
    options: [
      { label: 'FLDG Digital Lending (LSP + NBFC / Bank)', score: 35, badge: 'HIGH REGULATION' },
      { label: 'Bank-NBFC Co-Lending Platform (CLM)', score: 25, badge: 'INSTITUTIONAL' },
      { label: 'Payment Aggregator (PA-P / PA-CB)', score: 30, badge: 'LICENSE REQUIRED' },
      { label: 'Lending Tech / Sourcing Interface Only', score: 10, badge: 'LSP GUIDELINES' }
    ]
  },
  {
    id: 'guarantee',
    step: 2,
    title: 'Default Guarantee Structuring',
    desc: 'How is credit risk or default loss guaranteed across partner portfolios?',
    options: [
      { label: 'Strictly capped at ≤ 5% FLDG under master directions', score: 30, badge: 'COMPLIANT' },
      { label: 'Uncapped corporate guarantee / corporate indemnity', score: 5, badge: 'HIGH AUDIT RISK' },
      { label: 'Sub-servicing fee retention / deferred commission model', score: 20, badge: 'REQUIRES AUDIT' },
      { label: 'Zero default guarantee (Pure marketplace sourcing)', score: 35, badge: 'LOW RISK' }
    ]
  },
  {
    id: 'routing',
    step: 3,
    title: 'Fund Flow & Escrow Architecture',
    desc: 'How are loan disbursals and repayments routed through your platform?',
    options: [
      { label: 'Direct Bank-to-Borrower account routing (Zero Pass-Through)', score: 35, badge: 'COMPLIANT' },
      { label: 'Pooled nodal / escrow account managed by LSP tech', score: 10, badge: 'RBI WARNING' },
      { label: 'Payment Aggregator escrow node with automated split settlement', score: 30, badge: 'PA AUDITED' }
    ]
  }
];

let selectedDiagnosticOptions = {};

// Helper: Dynamically Update Rendered <head> Metadata
function updatePageMetadata(sectionKey) {
  const meta = SEO_CONFIG[sectionKey] || SEO_CONFIG.home;
  document.title = meta.title;
  
  let metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', meta.description);

  let metaTitle = document.querySelector('meta[name="title"]');
  if (metaTitle) metaTitle.setAttribute('content', meta.title);

  let ogTitle = document.getElementById('ogTitle');
  if (ogTitle) ogTitle.setAttribute('content', meta.title);

  let ogDesc = document.getElementById('ogDesc');
  if (ogDesc) ogDesc.setAttribute('content', meta.description);

  let twitterTitle = document.getElementById('twitterTitle');
  if (twitterTitle) twitterTitle.setAttribute('content', meta.title);

  let twitterDesc = document.getElementById('twitterDesc');
  if (twitterDesc) twitterDesc.setAttribute('content', meta.description);
}

function switchSectionView(sectionKey) {
  updatePageMetadata(sectionKey);
}

// ----------------------------------------------------
// 3D WebGL Engine (Three.js Interactive Sphere Stage)
// ----------------------------------------------------
function init3DHeroCanvas() {
  const container = document.getElementById('hero3DCanvas');
  if (!container || typeof THREE === 'undefined') return;

  const width = container.clientWidth || 600;
  const height = container.clientHeight || 600;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
  camera.position.z = 18;

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(renderer.domElement);

  // 1. Outer Wireframe Regulatory Sphere
  const outerGeo = new THREE.IcosahedronGeometry(6.5, 2);
  const outerMat = new THREE.MeshBasicMaterial({
    color: 0x1b7a82,
    wireframe: true,
    transparent: true,
    opacity: 0.35
  });
  const outerMesh = new THREE.Mesh(outerGeo, outerMat);
  scene.add(outerMesh);

  // 2. Inner Metallic Gold Core
  const innerGeo = new THREE.IcosahedronGeometry(4.2, 1);
  const innerMat = new THREE.MeshPhongMaterial({
    color: 0xb8860b,
    emissive: 0x3a2503,
    specular: 0xffd700,
    shininess: 60,
    wireframe: true,
    transparent: true,
    opacity: 0.65
  });
  const innerMesh = new THREE.Mesh(innerGeo, innerMat);
  scene.add(innerMesh);

  // 3. Orbit Ring (Compliance Axis)
  const ringGeo = new THREE.TorusGeometry(8.5, 0.08, 16, 100);
  const ringMat = new THREE.MeshBasicMaterial({
    color: 0xd4af37,
    transparent: true,
    opacity: 0.4
  });
  const ringMesh = new THREE.Mesh(ringGeo, ringMat);
  ringMesh.rotation.x = Math.PI / 3;
  scene.add(ringMesh);

  // 4. Floating Particle Nodes
  const particleGeo = new THREE.BufferGeometry();
  const particleCount = 120;
  const posArray = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 22;
  }
  particleGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
  const particleMat = new THREE.PointsMaterial({
    size: 0.15,
    color: 0x1b7a82,
    transparent: true,
    opacity: 0.7
  });
  const particles = new THREE.Points(particleGeo, particleMat);
  scene.add(particles);

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
  scene.add(ambientLight);

  const pointLight = new THREE.PointLight(0xd4af37, 1.5, 100);
  pointLight.position.set(10, 10, 10);
  scene.add(pointLight);

  // Mouse Parallax Interaction
  let mouseX = 0;
  let mouseY = 0;

  window.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  // Animation Loop
  function animate() {
    requestAnimationFrame(animate);

    outerMesh.rotation.y += 0.003;
    outerMesh.rotation.x += 0.0015;

    innerMesh.rotation.y -= 0.004;
    innerMesh.rotation.z += 0.002;

    ringMesh.rotation.z += 0.0025;

    particles.rotation.y += 0.001;

    // Smooth Mouse Parallax Shift
    scene.rotation.y += (mouseX * 0.3 - scene.rotation.y) * 0.05;
    scene.rotation.x += (mouseY * 0.3 - scene.rotation.x) * 0.05;

    renderer.render(scene, camera);
  }

  animate();

  // Resize Handler
  window.addEventListener('resize', () => {
    const w = container.clientWidth || 600;
    const h = container.clientHeight || 600;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  });
}

// ----------------------------------------------------
// Ultra 3D Interactive Card Parallax Tilt Handlers
// ----------------------------------------------------
function init3DTiltCards() {
  const cards = document.querySelectorAll('.practice-card, .tilt-3d-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Calculate 3D rotation angles
      const rotateX = ((y - centerY) / centerY) * -12; // 12 deg max
      const rotateY = ((x - centerX) / centerX) * 12;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(22px) scale(1.02)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)';
    });
  });
}

// Render Diagnostic Steps
function renderDiagnosticStep(stepIndex) {
  const container = document.getElementById('diagnosticContainer');
  if (!container) return;

  if (stepIndex >= DIAGNOSTIC_QUESTIONS.length) {
    let totalScore = 0;
    Object.values(selectedDiagnosticOptions).forEach(score => totalScore += score);
    
    let statusText = 'HIGH AUDIT RISK';
    let statusColor = '#dc2626';
    if (totalScore >= 80) {
      statusText = 'HIGH INSTITUTIONAL READINESS';
      statusColor = '#059669';
    } else if (totalScore >= 50) {
      statusText = 'MODERATE COMPLIANCE';
      statusColor = '#b8860b';
    }

    container.innerHTML = `
      <div class="diagnostic-header">
        <div>
          <span class="eyebrow" style="color:var(--accent-teal-dark);">DIAGNOSTIC COMPLETE</span>
          <h3>Your Platform Compliance Profile</h3>
        </div>
        <button class="btn btn-outline" onclick="resetDiagnostic()" style="padding:8px 16px; font-size:0.85rem;">Reset Assessment</button>
      </div>

      <div class="diagnostic-steps">
        <div class="score-card">
          <span class="eyebrow" style="color:var(--accent-teal-dark); margin:0;">FINAL COMPLIANCE SCORE</span>
          <div class="score-gauge">${totalScore}%</div>
          <div class="score-status" style="color:${statusColor};">${statusText}</div>
        </div>

        <div style="display:flex; flex-direction:column; justify-content:center;">
          <h4 style="margin-bottom:12px; color:var(--text-heading);">Recommended Operational Actions:</h4>
          <ul style="list-style:none; display:flex; flex-direction:column; gap:10px; font-size:0.92rem; color:var(--text-muted);">
            <li>✓ Conduct formal FLDG cap audit under July 2026 master directions.</li>
            <li>✓ Enforce zero-pass-through account routing for all disbursals.</li>
            <li>✓ Execute conflict-cleared legal review of LSP outsourcing agreements.</li>
          </ul>
          <button class="btn btn-primary" onclick="openConsultationModal('Diagnostic Audit Request (Score: ${totalScore}%)')" style="margin-top:20px;">Request Detailed Structural Review</button>
        </div>
      </div>
    `;
    return;
  }

  const q = DIAGNOSTIC_QUESTIONS[stepIndex];
  let optionsHtml = q.options.map((opt, idx) => `
    <button class="option-btn ${selectedDiagnosticOptions[q.id] === opt.score ? 'selected' : ''}" onclick="selectDiagnosticOption('${q.id}', ${opt.score}, ${stepIndex})">
      <span>${opt.label}</span>
      ${opt.badge ? `<span class="eyebrow" style="margin:0; font-size:0.7rem; color:var(--accent-teal-dark);">${opt.badge}</span>` : ''}
    </button>
  `).join('');

  container.innerHTML = `
    <div class="diagnostic-header">
      <div>
        <span class="eyebrow" style="color:var(--accent-teal-dark);">DIAGNOSTIC STEP ${q.step} OF 3</span>
        <h3>${q.step}. ${q.title}</h3>
        <p style="font-size:0.9rem; color:var(--text-muted); margin-top:4px;">${q.desc}</p>
      </div>
    </div>

    <div class="diagnostic-steps">
      <div class="options-group">
        ${optionsHtml}
      </div>

      <div class="score-card">
        <span class="eyebrow" style="color:var(--accent-teal-dark); margin:0;">ESTIMATED READINESS</span>
        <div class="score-gauge">${calculateCurrentScore()}%</div>
        <div class="score-status">Assessment in Progress</div>
        <p style="font-size:0.8rem; color:var(--text-dim); margin-top:8px;">Select options to calculate your RBI audit vulnerability</p>
      </div>
    </div>
  `;
}

function calculateCurrentScore() {
  let score = 0;
  Object.values(selectedDiagnosticOptions).forEach(s => score += s);
  return score;
}

function selectDiagnosticOption(qId, score, currentStep) {
  selectedDiagnosticOptions[qId] = score;
  renderDiagnosticStep(currentStep + 1);
}

function resetDiagnostic() {
  selectedDiagnosticOptions = {};
  renderDiagnosticStep(0);
}

// Render Insights Database
function renderInsights(items) {
  const grid = document.getElementById('insightsGrid');
  if (!grid) return;

  if (items.length === 0) {
    grid.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding:40px; color:var(--text-dim);">No regulatory briefs matched your query.</div>`;
    return;
  }

  grid.innerHTML = items.map(item => `
    <article class="insight-card tilt-3d-card" onclick="openInsightModal('${item.id}')">
      <div>
        <span class="insight-tag">${item.tag}</span>
        <h3 class="insight-title">${item.title}</h3>
        <p class="insight-snippet">${item.snippet}</p>
      </div>
      <span class="card-link" style="margin-top:16px;">Read Brief & Technical Requirements →</span>
    </article>
  `).join('');

  // Re-bind 3D tilt on newly rendered insight cards
  init3DTiltCards();
}

function filterInsights(category, btnElement) {
  if (btnElement) {
    document.querySelectorAll('.pill-btn').forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');
  }

  if (category === 'all') {
    renderInsights(INSIGHTS_DATABASE);
  } else {
    const filtered = INSIGHTS_DATABASE.filter(item => item.category === category);
    renderInsights(filtered);
  }
}

// Modals Handler
function openModal(htmlContent) {
  const overlay = document.getElementById('appModal');
  const body = document.getElementById('modalBody');
  if (!overlay || !body) return;

  body.innerHTML = htmlContent;
  overlay.classList.add('active');
  overlay.setAttribute('aria-hidden', 'false');
}

function closeModal() {
  const overlay = document.getElementById('appModal');
  if (!overlay) return;
  overlay.classList.remove('active');
  overlay.setAttribute('aria-hidden', 'true');
}

function openPracticeModal(title, desc) {
  openModal(`
    <span class="eyebrow" style="color:var(--accent-teal-dark);">PRACTICE FRAMEWORK</span>
    <h2 style="margin-bottom:16px; font-family:var(--font-serif);">${title}</h2>
    <p style="margin-bottom:24px; line-height:1.7; font-size:1.05rem;">${desc}</p>
    <div style="background:var(--bg-cream-elevated); padding:20px; border-radius:var(--radius-md); border:1px solid var(--border-gold); margin-bottom:24px;">
      <h4 style="margin-bottom:8px; color:var(--text-heading);">Institutional Deliverables:</h4>
      <ul style="list-style:none; display:flex; flex-direction:column; gap:8px; font-size:0.9rem; color:var(--text-muted);">
        <li>• Complete transaction flow and escrow node legal mapping</li>
        <li>• RBI Master Direction compliance opinion for institutional investors</li>
        <li>• Tripartite LSP-NBFC-Bank agreement drafting and FLDG capping</li>
      </ul>
    </div>
    <button class="btn btn-primary" onclick="closeModal(); switchSectionView('contact'); location.href='#contact';">Request Advisory Proposal</button>
  `);
}

function openInsightModal(insightId) {
  const insight = INSIGHTS_DATABASE.find(i => i.id === insightId);
  if (!insight) return;

  openModal(`
    <span class="eyebrow" style="color:var(--accent-teal-dark);">${insight.tag}</span>
    <h2 style="margin-bottom:16px; font-family:var(--font-serif);">${insight.title}</h2>
    <p style="margin-bottom:24px; line-height:1.7; font-size:1.05rem; color:var(--text-main);">${insight.fullText}</p>
    <div style="display:flex; gap:16px;">
      <button class="btn btn-primary" onclick="closeModal(); switchSectionView('contact'); location.href='#contact';">Discuss Implementation</button>
      <button class="btn btn-outline" onclick="closeModal()">Close Brief</button>
    </div>
  `);
}

function openConsultationModal(contextSubject) {
  openModal(`
    <span class="eyebrow" style="color:var(--accent-teal-dark);">CONFIDENTIAL CONSULTATION</span>
    <h2 style="margin-bottom:16px; font-family:var(--font-serif);">Initiate Regulatory Review</h2>
    <p style="margin-bottom:20px; font-size:0.95rem;">Subject: <strong>${contextSubject}</strong></p>
    <p style="margin-bottom:24px; font-size:0.9rem; color:var(--text-muted);">Prior to reviewing proprietary digital lending flows, our legal team executes a formal conflict check across active banking partners.</p>
    <button class="btn btn-primary" onclick="closeModal(); switchSectionView('contact'); location.href='#contact';">Go to Intake Form</button>
  `);
}

// App Initialization
document.addEventListener('DOMContentLoaded', () => {
  // Initialize 3D WebGL Canvas Engine
  init3DHeroCanvas();

  // Initialize Interactive 3D Card Tilt
  init3DTiltCards();

  // Initialize Diagnostic Tool
  renderDiagnosticStep(0);

  // Initialize Regulatory Insights Grid
  renderInsights(INSIGHTS_DATABASE);

  // Insights Search Listener
  const searchInput = document.getElementById('insightsSearch');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      if (!q) {
        renderInsights(INSIGHTS_DATABASE);
        return;
      }
      const matches = INSIGHTS_DATABASE.filter(i => 
        i.title.toLowerCase().includes(q) || 
        i.snippet.toLowerCase().includes(q) || 
        i.tag.toLowerCase().includes(q)
      );
      renderInsights(matches);
    });
  }

  // Consultation Form Handler
  const form = document.getElementById('consultationForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('formName').value;
      const email = document.getElementById('formEmail').value;
      const subject = document.getElementById('formSubject').value;

      openModal(`
        <div style="text-align:center; padding:20px 0;">
          <div style="font-size:3rem; margin-bottom:16px;">🏛️</div>
          <h2 style="font-family:var(--font-serif); margin-bottom:12px;">Intake Request Received</h2>
          <p style="margin-bottom:20px; color:var(--text-muted);">Thank you, <strong>${name}</strong>. Our regulatory team has received your inquiry regarding <strong>${subject}</strong>.</p>
          <p style="font-size:0.88rem; color:var(--accent-teal-dark);">We will reach out to <strong>${email}</strong> following our conflict check.</p>
          <button class="btn btn-primary" onclick="closeModal()" style="margin-top:24px;">Return to Site</button>
        </div>
      `);

      form.reset();
    });
  }

  // IntersectionObserver for Dynamic Section Metadata Updates
  const sections = document.querySelectorAll('section[id]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        const key = id === 'hero' ? 'home' : id;
        if (SEO_CONFIG[key]) {
          updatePageMetadata(key);
        }
        // Update active nav link
        document.querySelectorAll('.nav-link').forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, { threshold: 0.3 });

  sections.forEach(s => observer.observe(s));

  // Mobile Menu Toggle
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const primaryNav = document.getElementById('primaryNav');
  if (mobileBtn && primaryNav) {
    mobileBtn.addEventListener('click', () => {
      primaryNav.classList.toggle('active');
    });
  }
});
