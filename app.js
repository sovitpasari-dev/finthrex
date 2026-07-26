/* ----------------------------------------------------
   FINTHREX ADVISORY - INTERACTIVE APPLICATION ENGINE
   ---------------------------------------------------- */

// Regulatory Insights Database
const INSIGHTS_DATA = [
  {
    id: 1,
    category: "digital-lending",
    categoryLabel: "Digital Lending",
    tag: "MASTER DIRECTION",
    title: "RBI Digital Lending Guidelines: FLDG Caps & LSP Compliance",
    date: "July 2026 Brief",
    readTime: "6 min read",
    snippet: "An in-depth analysis of First Loss Default Guarantee (FLDG) 5% caps, mandatory LSP disclosure obligations, and compliant data isolation under current RBI circulars.",
    fullContent: `
      <h3>Digital Lending Guidelines & FLDG Architecture</h3>
      <p>The Reserve Bank of India's Master Direction on Digital Lending establishes strict boundaries around First Loss Default Guarantee (FLDG) arrangements between Regulated Entities (REs) and Lending Service Providers (LSPs).</p>
      <h4>Key Structural Directives:</h4>
      <ul>
        <li><strong>FLDG Cap:</strong> Total default guarantee cover cannot exceed 5% of the underlying loan portfolio outstanding at any given point.</li>
        <li><strong>Direct Disbursal:</strong> All disbursements and repayments must occur strictly between the bank/NBFC account and the borrower's verified bank account without pass-through pool accounts.</li>
        <li><strong>Data Isolation:</strong> LSPs are strictly prohibited from storing customer biometric, contact, or personal data beyond minimum KYC parameters required for onboarding.</li>
      </ul>
      <p>Our advisory team conducts structural audits of co-lending agreements and LSP technology interfaces to guarantee uninterrupted operations during supervisory reviews.</p>
    `
  },
  {
    id: 2,
    category: "co-lending",
    categoryLabel: "Co-Lending",
    tag: "CAPITAL ALLOCATION",
    title: "Bank-NBFC Co-Lending Structures & Sourcing Risk",
    date: "June 2026 Brief",
    readTime: "8 min read",
    snippet: "Structural legal risk assessment of Option-1 and Option-2 co-lending models, escrow routing, and blended interest rate calculations.",
    fullContent: `
      <h3>Co-Lending Frameworks & Risk Allocation</h3>
      <p>Co-lending Model 2 (CLM-2) allows non-banking financial companies (NBFCs) and commercial banks to jointly originate loans with real-time risk-sharing.</p>
      <h4>Key Compliance Pillars:</h4>
      <ul>
        <li><strong>Minimum Retention:</strong> The originating NBFC must retain a minimum of 20% credit exposure on its balance sheet.</li>
        <li><strong>Escrow Account Dynamics:</strong> Tripartite escrow accounts must govern interest and principal collection to eliminate liquidity pooling risks.</li>
        <li><strong>Unified Customer Disclosures:</strong> Key Fact Statements (KFS) must transparently reflect the blended All-In-Cost (APR) across both lending entities.</li>
      </ul>
      <p>We draft and negotiate institutional co-lending agreements to align loan origination software with RBI inspection criteria.</p>
    `
  },
  {
    id: 3,
    category: "dpdp",
    categoryLabel: "Data Privacy",
    tag: "DATA SOVEREIGNTY",
    title: "DPDP Act Compliance for Digital Lending Apps",
    date: "June 2026 Brief",
    readTime: "5 min read",
    snippet: "Navigating Digital Personal Data Protection (DPDP) mandates inside mobile apps, consent handles, and localized storage architecture.",
    fullContent: `
      <h3>Data Governance & Consent Architecture</h3>
      <p>Under the DPDP framework, fintech platforms operating in India must implement granular consent managers and enforce strict purpose-limitation controls.</p>
      <h4>Implementation Requirements:</h4>
      <ul>
        <li><strong>Multilingual Consent:</strong> Clear, standalone consent notices rendered in 22 official Indian languages.</li>
        <li><strong>Contact & Storage Ban:</strong> App permissions for phonebooks, media files, and biometric logs are strictly prohibited for credit assessment.</li>
        <li><strong>Data Localization:</strong> Critical financial and customer transaction logs must reside exclusively within onshore Indian data centers.</li>
      </ul>
    `
  },
  {
    id: 4,
    category: "payments",
    categoryLabel: "Payment Aggregators",
    tag: "PA AUTHORIZATION",
    title: "Payment Aggregator Norms: Merchant Onboarding & Escrow",
    date: "May 2026 Brief",
    readTime: "7 min read",
    snippet: "Compliance requirements for Payment Aggregator (PA) license applicants, net worth compliance, and T+1/T+2 settlement escrow flows.",
    fullContent: `
      <h3>Payment Aggregator Governance</h3>
      <p>RBI directives for online Payment Aggregators (PA-P) mandate minimum net worth maintenance of ₹25 Crore and continuous background verification of onboarded merchants.</p>
      <h4>Core Parameters:</h4>
      <ul>
        <li><strong>Nodal Escrow Management:</strong> Automated settlement loops ensuring funds are routed without holding period delays.</li>
        <li><strong>Board-Approved Policies:</strong> Mandatory appointment of dedicated Chief Risk Officers (CRO) and Principal Officers.</li>
        <li><strong>Cyber Security Audits:</strong> Bi-annual System Audit Report (SAR) submissions conducted by CERT-In empaneled auditors.</li>
      </ul>
    `
  }
];

// Diagnostic Diagnostic State & Logic
const DIAGNOSTIC_QUESTIONS = [
  {
    id: "model",
    title: "1. Operational Model",
    subtitle: "Select your primary digital finance framework",
    options: [
      { label: "FLDG Digital Lending (LSP + NBFC / Bank)", score: 25, badge: "High Regulation" },
      { label: "Bank-NBFC Co-Lending Platform", score: 20, badge: "Institutional" },
      { label: "Payment Aggregator (PA-P / PA-CB)", score: 22, badge: "License Required" },
      { label: "Lending Tech / Sourcing Interface Only", score: 18, badge: "LSP Guidelines" }
    ]
  },
  {
    id: "fldg_status",
    title: "2. Credit Enhancement & FLDG Structure",
    subtitle: "What is your default guarantee model?",
    options: [
      { label: "Bank Guarantee / Cash Collateral ≤ 5%", score: 25, status: "Compliant" },
      { label: "Corporate Guarantee / Parent Cover", score: 15, status: "Under Review" },
      { label: "Sub-participating Default Buffer > 5%", score: 5, status: "High Risk" },
      { label: "No Credit Guarantee (Pure Sourcing)", score: 25, status: "Compliant" }
    ]
  },
  {
    id: "data_flow",
    title: "3. App Permissions & Data Storage",
    subtitle: "How does your platform handle borrower data?",
    options: [
      { label: "Zero contact/media access + Onshore Indian Data Storage", score: 25, status: "DPDP Ready" },
      { label: "Contact permissions enabled for fraud engine", score: 10, status: "Non-Compliant" },
      { label: "Third-party SDK analytics with offshore servers", score: 5, status: "High Risk" }
    ]
  },
  {
    id: "disbursal",
    title: "4. Loan Disbursal & Repayment Flow",
    subtitle: "Where do loan funds flow during transactions?",
    options: [
      { label: "Direct RE-to-Borrower account routing", score: 25, status: "100% Compliant" },
      { label: "Pool account / Nodal holding intermediate step", score: 0, status: "Violation Alert" }
    ]
  }
];

let selectedDiagnosticOptions = {};

// Initialize App
document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initDiagnosticTool();
  initInsightsSection();
  initContactForm();
  initModalListeners();
});

// Navigation Logic
function initNavigation() {
  const header = document.querySelector(".header");
  const mobileToggle = document.querySelector(".mobile-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  if (mobileToggle) {
    mobileToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  }

  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").replace("#", "");
      const targetSection = document.getElementById(targetId);
      
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");

      if (navMenu.classList.contains("active")) {
        navMenu.classList.remove("active");
      }

      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 90;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth"
        });
      }
    });
  });
}

// Diagnostic Readiness Calculator Logic
function initDiagnosticTool() {
  const container = document.getElementById("diagnosticContainer");
  if (!container) return;

  renderDiagnosticStep(0);
}

function renderDiagnosticStep(stepIndex) {
  const container = document.getElementById("diagnosticContainer");
  if (stepIndex >= DIAGNOSTIC_QUESTIONS.length) {
    renderDiagnosticResult();
    return;
  }

  const q = DIAGNOSTIC_QUESTIONS[stepIndex];
  let optionsHtml = q.options.map((opt, idx) => `
    <button class="option-btn ${selectedDiagnosticOptions[q.id] === idx ? 'selected' : ''}" onclick="selectDiagnosticOption('${q.id}', ${idx}, ${stepIndex})">
      <span>${opt.label}</span>
      ${opt.badge ? `<span class="eyebrow" style="margin:0; font-size:0.7rem;">${opt.badge}</span>` : ''}
    </button>
  `).join('');

  container.innerHTML = `
    <div class="diagnostic-header">
      <div>
        <span class="eyebrow">DIAGNOSTIC STEP ${stepIndex + 1} OF ${DIAGNOSTIC_QUESTIONS.length}</span>
        <h3>${q.title}</h3>
        <p class="section-desc" style="font-size:0.95rem; margin-top:4px;">${q.subtitle}</p>
      </div>
    </div>
    <div class="diagnostic-steps">
      <div class="options-group">
        ${optionsHtml}
      </div>
      <div class="score-card">
        <span class="eyebrow" style="margin:0;">ESTIMATED READINESS</span>
        <div class="score-gauge" id="liveScoreGauge">${calculateCurrentScore()}%</div>
        <p class="score-status" id="liveScoreStatus">${getScoreStatusLabel(calculateCurrentScore())}</p>
        <p style="font-size:0.85rem; color:var(--text-dim); margin-top:12px;">Select options to calculate your RBI audit vulnerability</p>
      </div>
    </div>
  `;
}

window.selectDiagnosticOption = function(qId, optionIdx, currentStep) {
  selectedDiagnosticOptions[qId] = optionIdx;
  if (currentStep < DIAGNOSTIC_QUESTIONS.length - 1) {
    renderDiagnosticStep(currentStep + 1);
  } else {
    renderDiagnosticResult();
  }
};

function calculateCurrentScore() {
  let score = 0;
  DIAGNOSTIC_QUESTIONS.forEach(q => {
    if (selectedDiagnosticOptions[q.id] !== undefined) {
      const idx = selectedDiagnosticOptions[q.id];
      score += q.options[idx].score;
    }
  });
  return score;
}

function getScoreStatusLabel(score) {
  if (score >= 90) return "Institutional Ready";
  if (score >= 70) return "Moderate Compliance";
  if (score >= 40) return "Action Required";
  return "High Audit Risk";
}

function renderDiagnosticResult() {
  const container = document.getElementById("diagnosticContainer");
  const finalScore = calculateCurrentScore();
  const statusText = getScoreStatusLabel(finalScore);

  container.innerHTML = `
    <div class="diagnostic-header">
      <div>
        <span class="eyebrow">DIAGNOSTIC COMPLETE</span>
        <h3>Your Platform Compliance Profile</h3>
      </div>
      <button class="btn btn-outline" onclick="resetDiagnostic()" style="padding:8px 16px; font-size:0.85rem;">Reset Assessment</button>
    </div>
    <div class="diagnostic-steps" style="grid-template-columns: 1fr 1fr;">
      <div class="score-card" style="padding:40px;">
        <span class="eyebrow" style="margin:0;">FINAL COMPLIANCE SCORE</span>
        <div class="score-gauge" style="font-size:4.5rem; color:${finalScore >= 75 ? 'var(--accent-emerald)' : 'var(--accent-gold)'};">${finalScore}%</div>
        <p class="score-status" style="font-size:1.1rem;">${statusText}</p>
      </div>
      <div>
        <h4 style="margin-bottom:16px;">Recommended Operational Actions:</h4>
        <ul style="list-style:none; display:flex; flex-direction:column; gap:12px; font-size:0.95rem; color:var(--text-muted);">
          <li style="display:flex; gap:10px;"><span style="color:var(--accent-teal-light);">✓</span> Conduct formal FLDG cap audit under July 2026 master directions.</li>
          <li style="display:flex; gap:10px;"><span style="color:var(--accent-teal-light);">✓</span> Enforce zero-pass-through account routing for all disbursals.</li>
          <li style="display:flex; gap:10px;"><span style="color:var(--accent-teal-light);">✓</span> Execute conflict-cleared legal review of LSP outsourcing agreements.</li>
        </ul>
        <button class="btn btn-primary" onclick="openConsultationModal('Diagnostic Audit Review - Score ' + ${finalScore} + '%')" style="margin-top:24px; width:100%;">
          Request Detailed Structural Review
        </button>
      </div>
    </div>
  `;
}

window.resetDiagnostic = function() {
  selectedDiagnosticOptions = {};
  renderDiagnosticStep(0);
};

// Regulatory Insights Filtering & Modal Reader
function initInsightsSection() {
  renderInsightsList("all", "");

  const searchInput = document.getElementById("insightsSearch");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const activePill = document.querySelector(".pill-btn.active");
      const category = activePill ? activePill.dataset.category : "all";
      renderInsightsList(category, e.target.value);
    });
  }
}

window.filterInsights = function(category, btn) {
  document.querySelectorAll(".pill-btn").forEach(p => p.classList.remove("active"));
  btn.classList.add("active");
  
  const searchInput = document.getElementById("insightsSearch");
  const query = searchInput ? searchInput.value : "";
  renderInsightsList(category, query);
};

function renderInsightsList(category, searchQuery) {
  const container = document.getElementById("insightsGrid");
  if (!container) return;

  const filtered = INSIGHTS_DATA.filter(item => {
    const matchesCategory = category === "all" || item.category === category;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.snippet.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `<p style="grid-column:1/-1; text-align:center; padding:40px; color:var(--text-dim);">No regulatory briefs matched your query.</p>`;
    return;
  }

  container.innerHTML = filtered.map(item => `
    <div class="insight-card" onclick="openInsightModal(${item.id})">
      <div>
        <div class="insight-tag">${item.tag} • ${item.categoryLabel}</div>
        <h3 class="insight-title">${item.title}</h3>
        <p class="insight-snippet">${item.snippet}</p>
      </div>
      <div style="display:flex; justify-space-between; align-items:center; border-top:1px solid var(--border-subtle); padding-top:16px; margin-top:16px;">
        <span style="font-size:0.8rem; color:var(--text-dim);">${item.date}</span>
        <span class="card-link">Read Brief →</span>
      </div>
    </div>
  `).join('');
}

window.openInsightModal = function(id) {
  const item = INSIGHTS_DATA.find(i => i.id === id);
  if (!item) return;

  const modal = document.getElementById("appModal");
  const modalBody = document.getElementById("modalBody");

  modalBody.innerHTML = `
    <div class="insight-tag" style="margin-bottom:8px;">${item.tag} • ${item.categoryLabel}</div>
    <h2 style="margin-bottom:16px;">${item.title}</h2>
    <div style="font-size:0.85rem; color:var(--text-dim); margin-bottom:24px;">${item.date} • ${item.readTime}</div>
    <div style="line-height:1.7; font-size:1rem; color:var(--text-muted);">
      ${item.fullContent}
    </div>
    <button class="btn btn-primary" onclick="closeModal()" style="margin-top:32px;">Close Regulatory Brief</button>
  `;

  modal.classList.add("active");
};

// Contact Intake Form Handling
function initContactForm() {
  const form = document.getElementById("consultationForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("formName").value;
    const email = document.getElementById("formEmail").value;
    const priority = document.getElementById("formPriority").checked;

    openModal(`
      <div style="text-align:center; padding:20px 0;">
        <div style="width:60px; height:60px; border-radius:50%; background:rgba(16, 185, 129, 0.15); border:1px solid var(--accent-emerald); display:flex; align-items:center; justify-content:center; font-size:1.8rem; color:var(--accent-emerald); margin:0 auto 20px;">✓</div>
        <h2 style="margin-bottom:12px;">Intake Brief Received</h2>
        <p style="font-size:1rem; color:var(--text-muted); margin-bottom:24px;">Thank you, <strong>${name}</strong>. Your confidential inquiry (${email}) has been submitted.</p>
        ${priority ? '<div style="padding:12px; background:rgba(239,68,68,0.1); border:1px solid rgba(239,68,68,0.3); border-radius:6px; font-size:0.85rem; color:#fca5a5; margin-bottom:24px;">⚡ Accelerated Response Triggered: Senior Partner assigned within 4 business hours.</div>' : ''}
        <button class="btn btn-primary" onclick="closeModal()">Return to Finthrex Advisory</button>
      </div>
    `);

    form.reset();
  });
}

// Modal System
function initModalListeners() {
  const modal = document.getElementById("appModal");
  if (!modal) return;

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
}

window.openConsultationModal = function(subjectContext = "") {
  const modal = document.getElementById("appModal");
  const modalBody = document.getElementById("modalBody");

  modalBody.innerHTML = `
    <h2 style="margin-bottom:12px;">Initiate Regulatory Intake</h2>
    <p style="font-size:0.95rem; color:var(--text-muted); margin-bottom:24px;">Schedule a confidential conflict-cleared review of your digital lending framework or RBI application.</p>
    <form id="modalIntakeForm" onsubmit="handleModalFormSubmit(event)">
      <div class="form-group">
        <label class="form-label">Full Name</label>
        <input type="text" class="form-input" required placeholder="E.g. Devendra Sharma">
      </div>
      <div class="form-group">
        <label class="form-label">Corporate Email</label>
        <input type="email" class="form-input" required placeholder="name@company.com">
      </div>
      <div class="form-group">
        <label class="form-label">Practice Subject</label>
        <input type="text" class="form-input" value="${subjectContext}" placeholder="FLDG / LSP / Co-Lending / PA Licensing">
      </div>
      <div class="form-group">
        <label class="form-label">Regulatory Context</label>
        <textarea class="form-textarea" rows="3" placeholder="Briefly specify key RBI directives or operational deadlines..."></textarea>
      </div>
      <button type="submit" class="btn btn-primary" style="width:100%;">Submit Consultation Request</button>
    </form>
  `;

  modal.classList.add("active");
};

window.handleModalFormSubmit = function(e) {
  e.preventDefault();
  closeModal();
  openModal(`
    <div style="text-align:center; padding:20px 0;">
      <h2 style="margin-bottom:12px;">Consultation Scheduled</h2>
      <p style="font-size:0.95rem; color:var(--text-muted); margin-bottom:24px;">Our legal team will execute a preliminary conflict check and confirm your consultation within 24 hours.</p>
      <button class="btn btn-primary" onclick="closeModal()">Close Window</button>
    </div>
  `);
};

window.openPracticeModal = function(title, desc) {
  openModal(`
    <span class="eyebrow">PRACTICE AREA DETAIL</span>
    <h2 style="margin-bottom:16px;">${title}</h2>
    <p style="font-size:1.05rem; line-height:1.7; color:var(--text-muted); margin-bottom:24px;">${desc}</p>
    <div style="padding:20px; background:rgba(27,122,130,0.1); border:1px solid var(--border-teal); border-radius:8px; margin-bottom:24px;">
      <h4 style="margin-bottom:8px; color:var(--accent-teal-light);">Institutional Deliverables:</h4>
      <ul style="list-style:none; display:flex; flex-direction:column; gap:8px; font-size:0.9rem;">
        <li>• Board-approved compliance policies & Master Direction alignment maps</li>
        <li>• Tripartite contract drafting (Bank, NBFC, LSP)</li>
        <li>• RBI Inspection readiness audit reports & remediation briefs</li>
      </ul>
    </div>
    <button class="btn btn-primary" onclick="openConsultationModal('${title} Structural Engagement')">Engage Practice Specialists</button>
  `);
};

function openModal(htmlContent) {
  const modal = document.getElementById("appModal");
  const modalBody = document.getElementById("modalBody");
  modalBody.innerHTML = htmlContent;
  modal.classList.add("active");
}

window.closeModal = function() {
  const modal = document.getElementById("appModal");
  if (modal) modal.classList.remove("active");
};
