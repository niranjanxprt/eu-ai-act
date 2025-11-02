// Theme Management
let currentTheme = 'light';

function initTheme() {
  // Set initial theme to light
  document.documentElement.setAttribute('data-theme', currentTheme);
}

function toggleTheme() {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', currentTheme);
}

// Mobile Menu Toggle
function toggleMobileMenu() {
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
}

// Risk Level Expansion
function toggleRiskLevel(header) {
  const card = header.closest('.risk-level-card');
  card.classList.toggle('expanded');
}

// Tab Switching
function switchTab(tabName) {
  // Remove active class from all buttons and contents
  document.querySelectorAll('.tab-button').forEach(btn => {
    btn.classList.remove('active');
  });
  document.querySelectorAll('.tab-content').forEach(content => {
    content.classList.remove('active');
  });

  // Add active class to clicked button and corresponding content
  event.target.classList.add('active');
  document.getElementById(`tab-${tabName}`).classList.add('active');
}

// FAQ Toggle
function toggleFaq(question) {
  const faqItem = question.closest('.faq-item');
  faqItem.classList.toggle('active');
}

// Compliance Checker
const questions = [
  {
    id: 1,
    question: "Does your AI system use subliminal manipulation, exploit vulnerabilities, or perform social scoring?",
    answers: [
      { text: "Yes", next: "result_prohibited" },
      { text: "No", next: 2 }
    ]
  },
  {
    id: 2,
    question: "Does your AI system make or significantly influence decisions about:",
    subtext: "Employment, credit/lending, education, law enforcement, healthcare, or access to essential services?",
    answers: [
      { text: "Yes", next: "result_high_risk" },
      { text: "No", next: 3 }
    ]
  },
  {
    id: 3,
    question: "Does your AI system use biometric identification, emotion recognition, or process sensitive personal data for critical decisions?",
    answers: [
      { text: "Yes", next: "result_high_risk" },
      { text: "No", next: 4 }
    ]
  },
  {
    id: 4,
    question: "Does your AI system interact with users (chatbot, content generator, virtual assistant)?",
    answers: [
      { text: "Yes", next: "result_limited_risk" },
      { text: "No", next: "result_minimal_risk" }
    ]
  }
];

const results = {
  result_prohibited: {
    risk_level: "Unacceptable Risk",
    classification: "PROHIBITED",
    color: "#DC2626",
    message: "Your AI system appears to fall under prohibited practices. You CANNOT develop or deploy this system.",
    requirements: [
      "Immediate cessation of development/deployment required",
      "Redesign system to eliminate prohibited features",
      "Consult legal expert immediately"
    ],
    penalty: "€35M or 7% global revenue",
    deadline: "Already in effect",
    gdpr_note: "GDPR compliance is irrelevant if system is prohibited"
  },
  result_high_risk: {
    risk_level: "High-Risk",
    classification: "ALLOWED with strict requirements",
    color: "#F59E0B",
    message: "Your AI system is classified as high-risk. Substantial compliance work required before market entry.",
    requirements: [
      "Implement risk management system",
      "Ensure high-quality, unbiased training data",
      "Create comprehensive technical documentation",
      "Design human oversight mechanisms",
      "Conduct pre-market conformity assessment",
      "Register with national authority",
      "Establish continuous monitoring"
    ],
    penalty: "€15M or 3% revenue for non-compliance",
    deadline: "August 2, 2026",
    cost_estimate: "€10,000 - €100,000+ (SME support available)",
    timeline_estimate: "6-12 months",
    gdpr_note: "If processing personal data, GDPR also applies. DPIAs required. Can leverage GDPR compliance for AI Act.",
    next_steps: [
      "Apply for regulatory sandbox access",
      "Engage AI Act compliance consultant",
      "Begin risk assessment documentation",
      "Review SME support programs"
    ]
  },
  result_limited_risk: {
    risk_level: "Limited-Risk",
    classification: "ALLOWED with transparency obligations",
    color: "#EAB308",
    message: "Your AI system has limited risk. Straightforward transparency requirements apply.",
    requirements: [
      "Inform users they're interacting with AI",
      "Label AI-generated content clearly",
      "Disclose training data sources (if GPAI)",
      "Provide model documentation",
      "Implement basic cybersecurity"
    ],
    penalty: "€7.5M or 1% revenue for non-compliance",
    deadline: "August 2, 2025 (already in effect)",
    cost_estimate: "€2,000 - €10,000",
    timeline_estimate: "1-3 months",
    gdpr_note: "If processing personal data, GDPR applies. Ensure lawful basis and data minimization.",
    next_steps: [
      "Implement user disclosure mechanisms",
      "Create content labeling system",
      "Document training data sources",
      "Review GDPR compliance if processing personal data"
    ]
  },
  result_minimal_risk: {
    risk_level: "Minimal/No Risk",
    classification: "ALLOWED - mostly unregulated",
    color: "#10B981",
    message: "Your AI system has minimal risk. No specific AI Act requirements apply.",
    requirements: [
      "Follow general best practices (recommended)",
      "Consider voluntary documentation",
      "Implement basic security measures"
    ],
    penalty: "None",
    deadline: "N/A",
    cost_estimate: "€0 - €2,000 (optional)",
    timeline_estimate: "Immediate deployment possible",
    gdpr_note: "If processing personal data, GDPR still applies. Ensure compliance with data protection rules.",
    next_steps: [
      "Focus on product development",
      "Implement voluntary best practices",
      "Monitor for future regulatory updates",
      "Ensure GDPR compliance if applicable"
    ]
  }
};

let currentQuestion = 1;

function initChecker() {
  displayQuestion(1);
  updateProgress();
}

function displayQuestion(questionId) {
  const question = questions.find(q => q.id === questionId);
  if (!question) return;

  const container = document.getElementById('questionContainer');
  container.innerHTML = `
    <div class="question-card">
      <h3>${question.question}</h3>
      ${question.subtext ? `<p class="question-subtext">${question.subtext}</p>` : ''}
      <div class="answer-options">
        ${question.answers.map(answer => `
          <button class="answer-btn" onclick="handleAnswer(${typeof answer.next === 'string' ? `'${answer.next}'` : answer.next})">
            ${answer.text}
          </button>
        `).join('')}
      </div>
    </div>
  `;
}

function handleAnswer(next) {
  if (typeof next === 'string') {
    // It's a result
    showResult(next);
  } else {
    // It's another question
    currentQuestion = next;
    displayQuestion(next);
    updateProgress();
  }
}

function updateProgress() {
  const progress = (currentQuestion / questions.length) * 100;
  document.getElementById('progressFill').style.width = `${progress}%`;
  document.getElementById('progressText').textContent = `Question ${currentQuestion} of ${questions.length}`;
}

function showResult(resultKey) {
  const result = results[resultKey];
  const questionContainer = document.getElementById('questionContainer');
  const resultContainer = document.getElementById('resultContainer');
  const progressBar = document.querySelector('.progress-bar');
  const progressText = document.getElementById('progressText');
  const restartBtn = document.getElementById('restartBtn');

  // Hide question, show result
  questionContainer.style.display = 'none';
  progressBar.style.display = 'none';
  progressText.style.display = 'none';
  resultContainer.style.display = 'block';
  restartBtn.style.display = 'inline-block';

  // Build result HTML
  resultContainer.innerHTML = `
    <div class="result-header">
      <div class="result-classification" style="background: ${result.color};">
        ${result.risk_level}
      </div>
      <p class="result-message">${result.message}</p>
    </div>

    <div class="result-section">
      <h4>Classification: ${result.classification}</h4>
    </div>

    <div class="result-section">
      <h4>Requirements:</h4>
      <ul>
        ${result.requirements.map(req => `<li>${req}</li>`).join('')}
      </ul>
    </div>

    ${result.next_steps ? `
      <div class="result-section">
        <h4>Recommended Next Steps:</h4>
        <ul>
          ${result.next_steps.map(step => `<li>${step}</li>`).join('')}
        </ul>
      </div>
    ` : ''}

    <div class="result-meta">
      <div class="result-meta-item">
        <strong>Penalty:</strong>
        <span>${result.penalty}</span>
      </div>
      <div class="result-meta-item">
        <strong>Deadline:</strong>
        <span>${result.deadline}</span>
      </div>
      ${result.cost_estimate ? `
        <div class="result-meta-item">
          <strong>Cost Estimate:</strong>
          <span>${result.cost_estimate}</span>
        </div>
      ` : ''}
      ${result.timeline_estimate ? `
        <div class="result-meta-item">
          <strong>Timeline:</strong>
          <span>${result.timeline_estimate}</span>
        </div>
      ` : ''}
    </div>

    <div class="result-section">
      <h4>GDPR Connection:</h4>
      <p>${result.gdpr_note}</p>
    </div>
  `;
}

function restartChecker() {
  currentQuestion = 1;
  document.getElementById('questionContainer').style.display = 'block';
  document.getElementById('resultContainer').style.display = 'none';
  document.querySelector('.progress-bar').style.display = 'block';
  document.getElementById('progressText').style.display = 'block';
  document.getElementById('restartBtn').style.display = 'none';
  initChecker();
}

// Countdown Timer
function updateCountdown() {
  const targetDate = new Date('2026-08-02T00:00:00Z');
  const now = new Date();
  const diff = targetDate - now;

  if (diff > 0) {
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    const countdownEl = document.getElementById('countdown-2026');
    if (countdownEl) {
      countdownEl.textContent = `Time remaining: ${days} days, ${hours} hours, ${minutes} minutes`;
    }
  }
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
  initTheme();
  initChecker();
  updateCountdown();
  setInterval(updateCountdown, 60000); // Update every minute

  // Theme toggle
  document.getElementById('themeToggle').addEventListener('click', toggleTheme);

  // Mobile menu
  document.getElementById('mobileMenuToggle').addEventListener('click', toggleMobileMenu);

  // Close mobile menu when clicking a link
  document.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('nav').classList.remove('active');
    });
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href.length > 1) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const headerHeight = 80;
          const targetPosition = target.offsetTop - headerHeight;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });
});