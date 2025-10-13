import { ToastContainer, showSuccess, showError } from "./utils/ToastUtils";

// Application data
const appData = {
  "teachers": [
    {"id": "prof_yamada", "password": "analytics2025", "name": "Prof. Yamada", "name_jp": "山田教授", "department": "Applied Linguistics", "department_jp": "応用言語学科", "courses": ["ENG101", "ENG201"]},
    {"id": "prof_suzuki", "password": "learning123", "name": "Prof. Suzuki", "name_jp": "鈴木教授", "department": "Educational Psychology", "department_jp": "教育心理学科", "courses": ["ENG101"]},
    {"id": "prof_tanaka", "password": "corpus2025", "name": "Prof. Tanaka", "name_jp": "田中教授", "department": "Corpus Linguistics", "department_jp": "コーパス言語学科", "courses": ["ENG101", "ENG301"]}
  ],
  "students": [
    {"id": "S001", "name": "Student A", "midterm_self_assessment": 24, "midterm_elaboration": 18, "final_self_assessment": 32, "final_elaboration": 28, "midterm_total_sentences": 65, "final_total_sentences": 78, "course": "ENG101", "status": "improving"},
    {"id": "S002", "name": "Student B", "midterm_self_assessment": 16, "midterm_elaboration": 12, "final_self_assessment": 10, "final_elaboration": 8, "midterm_total_sentences": 45, "final_total_sentences": 42, "status": "declining"},
    {"id": "S003", "name": "Student C", "midterm_self_assessment": 28, "midterm_elaboration": 22, "final_self_assessment": 35, "final_elaboration": 30, "midterm_total_sentences": 72, "final_total_sentences": 85, "status": "improving"},
    {"id": "S004", "name": "Student D", "midterm_self_assessment": 20, "midterm_elaboration": 15, "final_self_assessment": 18, "final_elaboration": 14, "midterm_total_sentences": 58, "final_total_sentences": 55, "status": "stable"},
    {"id": "S005", "name": "Student E", "midterm_self_assessment": 26, "midterm_elaboration": 20, "final_self_assessment": 40, "final_elaboration": 35, "midterm_total_sentences": 68, "final_total_sentences": 89, "status": "improving"},
    {"id": "S006", "name": "Student F", "midterm_self_assessment": 14, "midterm_elaboration": 10, "final_self_assessment": 12, "final_elaboration": 9, "midterm_total_sentences": 38, "final_total_sentences": 36, "status": "declining"},
    {"id": "S007", "name": "Student G", "midterm_self_assessment": 30, "midterm_elaboration": 25, "final_self_assessment": 38, "final_elaboration": 32, "midterm_total_sentences": 75, "final_total_sentences": 88, "status": "improving"},
    {"id": "S008", "name": "Student H", "midterm_self_assessment": 22, "midterm_elaboration": 17, "final_self_assessment": 26, "final_elaboration": 21, "midterm_total_sentences": 62, "final_total_sentences": 65, "status": "improving"},
    {"id": "S009", "name": "Student I", "midterm_self_assessment": 18, "midterm_elaboration": 14, "final_self_assessment": 15, "final_elaboration": 11, "midterm_total_sentences": 50, "final_total_sentences": 48, "status": "declining"},
    {"id": "S010", "name": "Student J", "midterm_self_assessment": 25, "midterm_elaboration": 19, "final_self_assessment": 29, "final_elaboration": 24, "midterm_total_sentences": 66, "final_total_sentences": 71, "status": "improving"},
    {"id": "S011", "name": "Student K", "midterm_self_assessment": 19, "midterm_elaboration": 16, "final_self_assessment": 22, "final_elaboration": 19, "midterm_total_sentences": 56, "final_total_sentences": 60, "status": "improving"},
    {"id": "S012", "name": "Student L", "midterm_self_assessment": 21, "midterm_elaboration": 18, "final_self_assessment": 24, "final_elaboration": 20, "midterm_total_sentences": 61, "final_total_sentences": 64, "status": "stable"},
    {"id": "S013", "name": "Student M", "midterm_self_assessment": 17, "midterm_elaboration": 13, "final_self_assessment": 14, "final_elaboration": 10, "midterm_total_sentences": 47, "final_total_sentences": 44, "status": "declining"},
    {"id": "S014", "name": "Student N", "midterm_self_assessment": 27, "midterm_elaboration": 21, "final_self_assessment": 33, "final_elaboration": 27, "midterm_total_sentences": 70, "final_total_sentences": 79, "status": "improving"},
    {"id": "S015", "name": "Student O", "midterm_self_assessment": 23, "midterm_elaboration": 20, "final_self_assessment": 28, "final_elaboration": 25, "midterm_total_sentences": 64, "final_total_sentences": 72, "status": "improving"}
  ],
  "sample_sentences": {
    "self_assessment": [
      "Looking back at my learning process, I realize that I have improved significantly in connecting theoretical concepts to practical examples.",
      "I found myself struggling with time management during this assignment, which affected the depth of my analysis.",
      "My understanding of the topic has evolved from a surface-level grasp to a more nuanced appreciation of its complexities.",
      "I believe my writing has become more coherent and structured compared to earlier assignments.",
      "This reflection has helped me identify areas where I need to focus more attention in future studies."
    ],
    "elaboration": [
      "The concept of social constructivism, as discussed by Vygotsky, particularly resonates with my experience in collaborative learning environments where peer interaction significantly enhanced my understanding.",
      "For instance, when analyzing the case study of urban development, I was able to apply the theoretical framework of sustainable development to identify specific environmental and social impacts.",
      "The methodology employed in this research involved a mixed-methods approach, combining quantitative survey data with qualitative interviews to provide a comprehensive understanding of the phenomenon.",
      "This experience taught me that effective communication requires not only clear expression of ideas but also careful consideration of the audience's background knowledge and expectations.",
      "Building on the previous argument, it becomes evident that cultural factors play a crucial role in shaping individual responses to educational interventions."
    ]
  },
  "uploaded_files": [
    {"id": "file_001", "name": "midterm_essays_batch1.csv", "upload_date": "2025-10-01", "status": "processed", "file_size": "245KB", "essays_count": 15, "upload_time": "14:30"},
    {"id": "file_002", "name": "final_essays_batch1.csv", "upload_date": "2025-10-05", "status": "processed", "file_size": "298KB", "essays_count": 15, "upload_time": "09:15"},
    {"id": "file_003", "name": "additional_midterm.csv", "upload_date": "2025-10-07", "status": "processing", "file_size": "156KB", "essays_count": 8, "upload_time": "16:45"}
  ]
};

// Global variables
let charts = {};
let filteredStudents = [...appData.students];
let currentUser = null;

// LOGIN FUNCTIONALITY - MUST WORK RELIABLY
// How-to-Use Guide Expand/Collapse Logic
function initializeInstructionsPanel() {
  const panel = document.getElementById('instructions');
  if (!panel) return;
  const items = panel.querySelectorAll('.instruction-item');
  items.forEach(item => {
    const header = item.querySelector('.instruction-header');
    const content = item.querySelector('.instruction-content');
    if (!header || !content) return;
    header.addEventListener('click', () => {
      const expanded = header.getAttribute('aria-expanded') === 'true';
      // Collapse all others
      items.forEach(i => {
        i.classList.remove('open');
        const h = i.querySelector('.instruction-header');
        const c = i.querySelector('.instruction-content');
        if (h && c) {
          h.setAttribute('aria-expanded', 'false');
          c.setAttribute('aria-hidden', 'true');
        }
      });
      // Expand this one if it was not already open
      if (!expanded) {
        item.classList.add('open');
        header.setAttribute('aria-expanded', 'true');
        content.setAttribute('aria-hidden', 'false');
      }
    });
    // Keyboard accessibility
    header.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        header.click();
      }
    });
  });
}
function initializeLogin() {
  console.log('🔐 Initializing login system...');
  
  const loginForm = document.getElementById('loginForm');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const errorMessage = document.getElementById('loginError');
  
  if (!loginForm || !usernameInput || !passwordInput || !errorMessage) {
    console.error('❌ Login form elements not found!');
    return;
  }
  
  console.log('✅ Login form found, adding event listener');
  
  // Remove any existing event listeners
  const newForm = loginForm.cloneNode(true);
  loginForm.parentNode.replaceChild(newForm, loginForm);
  
  // Get fresh references after cloning
  const form = document.getElementById('loginForm');
  const username = document.getElementById('username');
  const password = document.getElementById('password');
  const error = document.getElementById('loginError');
  
  // Add form submit event listener with improved validation
  form.addEventListener('submit', function(event) {
    console.log('🔐 Login form submitted');
    
    // Always prevent default form submission
    event.preventDefault();
    event.stopPropagation();
    
    // Small delay to ensure form validation is complete
    setTimeout(() => {
      try {
        const usernameValue = username.value.trim();
        const passwordValue = password.value.trim();
        
        console.log('🔐 Attempting login with username:', usernameValue);
        console.log('🔐 Password provided:', passwordValue ? 'Yes' : 'No');
        
        // Clear any previous error messages
        error.classList.add('hidden');
        error.textContent = '';
        
        // Validate inputs
        if (!usernameValue || !passwordValue) {
          console.log('❌ Missing username or password');
          showLoginError('Please enter both username and password');
          return;
        }
        
        // Find teacher in database
        console.log('🔍 Searching for teacher in database...');
        const teacher = appData.teachers.find(t => t.id === usernameValue && t.password === passwordValue);
        
        if (teacher) {
          console.log('✅ Teacher found:', teacher.name);
          console.log('✅ Login successful!');
          
          // Store login info
          currentUser = teacher;
          try {
            sessionStorage.setItem('currentUser', JSON.stringify(teacher));
          } catch (storageError) {
            console.warn('⚠️ Could not save to session storage:', storageError);
          }
          
          // Hide login screen and show dashboard
          console.log('🔄 Switching to dashboard...');
          hideLoginScreen();
          showDashboard();
          
          console.log('✅ Login process completed successfully');
        } else {
          console.log('❌ Invalid credentials provided');
          showLoginError('Invalid username or password. Please check your credentials.');
        }
        
      } catch (error) {
        console.error('❌ Login error:', error);
        showLoginError('An error occurred during login. Please try again.');
      }
    }, 100);
  });
  
  // Add input event listeners to clear validation
  username.addEventListener('input', function() {
    this.setCustomValidity('');
    error.classList.add('hidden');
  });
  
  password.addEventListener('input', function() {
    this.setCustomValidity('');
    error.classList.add('hidden');
  });
  
  // Check for existing session
  checkExistingSession();
}

function showLoginError(message) {
  console.log('⚠️ Showing login error:', message);
  showError(message);
}

function hideLoginScreen() {
  console.log('🔄 Hiding login screen...');
  const loginScreen = document.getElementById('loginScreen');
  if (loginScreen) {
    loginScreen.classList.add('hidden');
    console.log('✅ Login screen hidden');
  } else {
    console.error('❌ Login screen element not found');
  }
}

function showDashboard() {
  console.log('🔄 Showing dashboard...');
  const dashboardPage = document.getElementById('dashboardPage');
  if (dashboardPage) {
    dashboardPage.classList.remove('hidden');
    console.log('✅ Dashboard shown');
    
    // Add success toast for login
    showSuccess(`Welcome back, ${currentUser.name}!`);
    
    // Update welcome message
    updateWelcomeMessage();
    
    // Initialize dashboard functionality
    initializeDashboard();
    
  } else {
    console.error('❌ Dashboard page element not found');
    showError('Failed to load dashboard. Please refresh the page.');
  }
}

function updateWelcomeMessage() {
  console.log('🔄 Updating welcome message...');
  const welcomeMessage = document.getElementById('welcomeMessage');
  if (welcomeMessage && currentUser) {
    welcomeMessage.textContent = `Welcome, ${currentUser.name_jp} / ${currentUser.name}`;
    console.log('✅ Welcome message updated');
  }
}

function checkExistingSession() {
  console.log('🔍 Checking for existing session...');
  try {
    const storedUser = sessionStorage.getItem('currentUser');
    if (storedUser) {
      currentUser = JSON.parse(storedUser);
      console.log('✅ Found existing session for:', currentUser.name);
      hideLoginScreen();
      showDashboard();
      return;
    }
  } catch (error) {
    console.log('❌ Error parsing stored user, clearing session');
    try {
      sessionStorage.removeItem('currentUser');
    } catch (e) {
      console.warn('Could not clear session storage');
    }
  }
  console.log('ℹ️ No existing session found');
}

function initializeLogout() {
  console.log('🔄 Initializing logout functionality...');
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', function() {
      console.log('🚪 Logout clicked');
      currentUser = null;
      
      try {
        sessionStorage.removeItem('currentUser');
      } catch (e) {
        console.warn('Could not clear session storage');
      }
      
      // Hide dashboard and show login
      const dashboardPage = document.getElementById('dashboardPage');
      const loginScreen = document.getElementById('loginScreen');
      
      if (dashboardPage) dashboardPage.classList.add('hidden');
      if (loginScreen) loginScreen.classList.remove('hidden');
      
      // Clear form
      const loginForm = document.getElementById('loginForm');
      const loginError = document.getElementById('loginError');
      
      if (loginForm) loginForm.reset();
      if (loginError) loginError.classList.add('hidden');
      
      console.log('✅ Logout completed');
    });
  }
}

// DASHBOARD FUNCTIONALITY
function initializeDashboard() {
  console.log('🚀 Initializing dashboard...');
  initializeNavigation();
  loadOverviewContent();
  initializeExportButtons();
  initializeFileUpload();
  console.log('✅ Dashboard initialized');
}

// Utility functions
function calculateEngagementScore(student, period) {
  const selfAssess = period === 'midterm' ? student.midterm_self_assessment : student.final_self_assessment;
  const elaboration = period === 'midterm' ? student.midterm_elaboration : student.final_elaboration;
  const total = period === 'midterm' ? student.midterm_total_sentences : student.final_total_sentences;
  return Math.round(((selfAssess + elaboration) / total) * 100);
}

function calculatePercentage(student, type, period) {
  const value = student[`${period}_${type}`];
  const total = student[`${period}_total_sentences`];
  return Math.round((value / total) * 100);
}

function getEngagementChange(student) {
  const midtermScore = calculateEngagementScore(student, 'midterm');
  const finalScore = calculateEngagementScore(student, 'final');
  return finalScore - midtermScore;
}

// Navigation functionality
function initializeNavigation() {
  const navItems = document.querySelectorAll('.nav-item');
  const sections = document.querySelectorAll('.content-section');

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const targetSection = item.dataset.section;
      
      // Update navigation
      navItems.forEach(nav => nav.classList.remove('active'));
      item.classList.add('active');
      
      // Update sections
      sections.forEach(section => section.classList.remove('active'));
      const targetElement = document.getElementById(targetSection);
      if (targetElement) {
        targetElement.classList.add('active');
      }
      
      // Load section-specific content
      loadSectionContent(targetSection);
    });
  });
}

function loadSectionContent(section) {
  switch(section) {
    case 'overview':
      loadOverviewContent();
      break;
    case 'temporal':
      loadTemporalTrends();
      break;
    case 'profiles':
      loadStudentProfiles();
      break;
    case 'comparative':
      loadComparativeAnalytics();
      break;
    case 'upload':
      loadFileUploadContent();
      break;
    case 'guide':
      // Initialize the instructions panel dropdowns when User Guide is shown
      setTimeout(() => {
        initializeInstructionsPanel();
      }, 0);
      break;
  }
}

// Overview section
function loadOverviewContent() {
  // Load declining students alert
  const decliningStudents = appData.students.filter(student => {
    const change = getEngagementChange(student);
    return change <= -20;
  });
  
  const alertContainer = document.getElementById('declining-students');
  if (alertContainer) {
    if (decliningStudents.length > 0) {
      alertContainer.innerHTML = decliningStudents.map(student => {
        const change = getEngagementChange(student);
        return `
          <div class="alert-item">
            <span class="alert-student">${student.name}</span>
            <span class="alert-change">${change}%</span>
          </div>
        `;
      }).join('');
    } else {
      alertContainer.innerHTML = '<p style="color: var(--color-success); text-align: center;">No students require immediate attention</p>';
    }
  }
}

// Temporal trends section
function loadTemporalTrends() {
  createTrendsChart();
  createDistributionChart();
}

function createTrendsChart() {
  const ctx = document.getElementById('trendsChart');
  if (!ctx) return;
  
  // Calculate class averages
  const midtermSelfAssess = appData.students.reduce((sum, s) => sum + calculatePercentage(s, 'self_assessment', 'midterm'), 0) / appData.students.length;
  const finalSelfAssess = appData.students.reduce((sum, s) => sum + calculatePercentage(s, 'self_assessment', 'final'), 0) / appData.students.length;
  const midtermElab = appData.students.reduce((sum, s) => sum + calculatePercentage(s, 'elaboration', 'midterm'), 0) / appData.students.length;
  const finalElab = appData.students.reduce((sum, s) => sum + calculatePercentage(s, 'elaboration', 'final'), 0) / appData.students.length;

  if (charts.trends) {
    charts.trends.destroy();
  }

  charts.trends = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Midterm', 'Final'],
      datasets: [{
        label: 'Self-Assessment',
        data: [midtermSelfAssess, finalSelfAssess],
        borderColor: '#1FB8CD',
        backgroundColor: '#1FB8CD',
        tension: 0.4,
        pointRadius: 8,
        pointHoverRadius: 10
      }, {
        label: 'Elaboration',
        data: [midtermElab, finalElab],
        borderColor: '#FFC185',
        backgroundColor: '#FFC185',
        tension: 0.4,
        pointRadius: 8,
        pointHoverRadius: 10
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top'
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              return `${context.dataset.label}: ${context.parsed.y.toFixed(1)}%`;
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          title: {
            display: true,
            text: 'Percentage (%)'
          }
        },
        x: {
          title: {
            display: true,
            text: 'Assessment Period'
          }
        }
      }
    }
  });
}

function createDistributionChart() {
  const ctx = document.getElementById('distributionChart');
  if (!ctx) return;
  
  const changes = appData.students.map(student => getEngagementChange(student));
  const bins = [-30, -20, -10, 0, 10, 20, 30, 40];
  const binCounts = new Array(bins.length - 1).fill(0);
  
  changes.forEach(change => {
    for (let i = 0; i < bins.length - 1; i++) {
      if (change >= bins[i] && change < bins[i + 1]) {
        binCounts[i]++;
        break;
      }
    }
  });

  if (charts.distribution) {
    charts.distribution.destroy();
  }

  charts.distribution = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: bins.slice(0, -1).map((bin, i) => `${bin} to ${bins[i + 1]}`),
      datasets: [{
        label: 'Student Count',
        data: binCounts,
        backgroundColor: ['#B4413C', '#FFC185', '#ECEBD5', '#5D878F', '#1FB8CD', '#DB4545', '#D2BA4C']
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              return `Students: ${context.parsed.y}`;
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Number of Students'
          }
        },
        x: {
          title: {
            display: true,
            text: 'Engagement Change (%)'
          }
        }
      }
    }
  });
}

// Student profiles section
function loadStudentProfiles() {
  renderStudentsTable();
  initializeStudentSearch();
  initializeStudentModal();
}

function renderStudentsTable() {
  const container = document.getElementById('studentsTable');
  if (!container) return;
  
  // Add table header
  const header = `
    <div class="table-header">
      <div>Student</div>
      <div>Midterm</div>
      <div>Final</div>
      <div>Change</div>
      <div>Status</div>
    </div>
  `;
  
  const rows = filteredStudents.map(student => {
    const midtermScore = calculateEngagementScore(student, 'midterm');
    const finalScore = calculateEngagementScore(student, 'final');
    const change = finalScore - midtermScore;
    
    return `
      <div class="student-row" data-student-id="${student.id}">
        <div>
          <div class="student-name">${student.name}</div>
          <div class="student-id">${student.id}</div>
        </div>
        <div class="engagement-score">${midtermScore}%</div>
        <div class="engagement-score">${finalScore}%</div>
        <div class="change-indicator ${change >= 0 ? 'change-positive' : 'change-negative'}">${change > 0 ? '+' : ''}${change}%</div>
        <div class="status status-${student.status}">${student.status}</div>
      </div>
    `;
  }).join('');
  
  container.innerHTML = header + rows;
  
  // Add click listeners
  container.querySelectorAll('.student-row').forEach(row => {
    row.addEventListener('click', () => {
      const studentId = row.dataset.studentId;
      showStudentModal(studentId);
    });
  });
}

function initializeStudentSearch() {
  const searchInput = document.getElementById('studentSearch');
  const statusFilter = document.getElementById('statusFilter');
  
  if (!searchInput || !statusFilter) return;
  
  function filterStudents() {
    const searchTerm = searchInput.value.toLowerCase();
    const statusFilter_value = statusFilter.value;
    
    filteredStudents = appData.students.filter(student => {
      const matchesSearch = student.name.toLowerCase().includes(searchTerm) || 
                           student.id.toLowerCase().includes(searchTerm);
      const matchesStatus = statusFilter_value === 'all' || student.status === statusFilter_value;
      
      return matchesSearch && matchesStatus;
    });
    
    renderStudentsTable();
  }
  
  searchInput.addEventListener('input', filterStudents);
  statusFilter.addEventListener('change', filterStudents);
}

function initializeStudentModal() {
  const modal = document.getElementById('studentModal');
  if (!modal) return;
  
  const closeBtn = modal.querySelector('.modal-close');
  
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.add('hidden');
    });
  }
  
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.add('hidden');
    }
  });
}

function showStudentModal(studentId) {
  const student = appData.students.find(s => s.id === studentId);
  if (!student) return;
  
  const modal = document.getElementById('studentModal');
  const nameElement = document.getElementById('modalStudentName');
  
  if (nameElement) {
    nameElement.textContent = `${student.name} (${student.id})`;
  }
  
  // Create progress chart
  createStudentProgressChart(student);
  
  // Create distribution chart
  createStudentDistributionChart(student);
  
  // Load sample sentences
  loadSampleSentences();
  
  modal.classList.remove('hidden');
}

function createStudentProgressChart(student) {
  const ctx = document.getElementById('studentProgressChart');
  if (!ctx) return;
  
  const midtermScore = calculateEngagementScore(student, 'midterm');
  const finalScore = calculateEngagementScore(student, 'final');

  if (charts.studentProgress) {
    charts.studentProgress.destroy();
  }

  charts.studentProgress = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Midterm', 'Final'],
      datasets: [{
        label: 'Engagement Score',
        data: [midtermScore, finalScore],
        borderColor: '#1FB8CD',
        backgroundColor: '#1FB8CD',
        tension: 0.4,
        pointRadius: 8,
        pointHoverRadius: 10
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        title: {
          display: true,
          text: 'Engagement Trajectory'
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          title: {
            display: true,
            text: 'Score (%)'
          }
        }
      }
    }
  });
}

function createStudentDistributionChart(student) {
  const ctx = document.getElementById('studentDistributionChart');
  if (!ctx) return;
  
  const finalSelfAssess = calculatePercentage(student, 'self_assessment', 'final');
  const finalElab = calculatePercentage(student, 'elaboration', 'final');
  const other = 100 - finalSelfAssess - finalElab;

  if (charts.studentDistribution) {
    charts.studentDistribution.destroy();
  }

  charts.studentDistribution = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Self-Assessment', 'Elaboration', 'Other'],
      datasets: [{
        data: [finalSelfAssess, finalElab, other],
        backgroundColor: ['#1FB8CD', '#FFC185', '#ECEBD5']
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom'
        },
        title: {
          display: true,
          text: 'Discourse Move Distribution (Final)'
        }
      }
    }
  });
}

function loadSampleSentences() {
  const selfAssessmentList = document.getElementById('selfAssessmentSamples');
  const elaborationList = document.getElementById('elaborationSamples');
  
  if (!selfAssessmentList || !elaborationList) return;
  
  // Show random 3 sentences from each category
  const selfSamples = appData.sample_sentences.self_assessment.slice(0, 3);
  const elabSamples = appData.sample_sentences.elaboration.slice(0, 3);
  
  selfAssessmentList.innerHTML = selfSamples.map(sentence => `<li>${sentence}</li>`).join('');
  elaborationList.innerHTML = elabSamples.map(sentence => `<li>${sentence}</li>`).join('');
}

// Comparative analytics section
function loadComparativeAnalytics() {
  createComparisonChart();
  createScatterChart();
  loadStatisticalSummary();
}

function createComparisonChart() {
  const ctx = document.getElementById('comparisonChart');
  if (!ctx) return;
  
  const midtermSelfAssess = appData.students.map(s => calculatePercentage(s, 'self_assessment', 'midterm'));
  const finalSelfAssess = appData.students.map(s => calculatePercentage(s, 'self_assessment', 'final'));
  const midtermElab = appData.students.map(s => calculatePercentage(s, 'elaboration', 'midterm'));
  const finalElab = appData.students.map(s => calculatePercentage(s, 'elaboration', 'final'));
  
  const avgMidtermSelf = midtermSelfAssess.reduce((a, b) => a + b, 0) / midtermSelfAssess.length;
  const avgFinalSelf = finalSelfAssess.reduce((a, b) => a + b, 0) / finalSelfAssess.length;
  const avgMidtermElab = midtermElab.reduce((a, b) => a + b, 0) / midtermElab.length;
  const avgFinalElab = finalElab.reduce((a, b) => a + b, 0) / finalElab.length;

  if (charts.comparison) {
    charts.comparison.destroy();
  }

  charts.comparison = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Self-Assessment', 'Elaboration'],
      datasets: [{
        label: 'Midterm',
        data: [avgMidtermSelf, avgMidtermElab],
        backgroundColor: '#5D878F'
      }, {
        label: 'Final',
        data: [avgFinalSelf, avgFinalElab],
        backgroundColor: '#1FB8CD'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top'
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              return `${context.dataset.label}: ${context.parsed.y.toFixed(1)}%`;
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          title: {
            display: true,
            text: 'Average Percentage (%)'
          }
        }
      }
    }
  });
}

function createScatterChart() {
  const ctx = document.getElementById('scatterChart');
  if (!ctx) return;
  
  const scatterData = appData.students.map(student => ({
    x: calculateEngagementScore(student, 'midterm'),
    y: calculateEngagementScore(student, 'final'),
    label: student.name
  }));

  if (charts.scatter) {
    charts.scatter.destroy();
  }

  charts.scatter = new Chart(ctx, {
    type: 'scatter',
    data: {
      datasets: [{
        label: 'Students',
        data: scatterData,
        backgroundColor: '#1FB8CD',
        borderColor: '#1FB8CD',
        pointRadius: 6,
        pointHoverRadius: 8
      }, {
        label: 'Improvement Line',
        data: [{x: 0, y: 0}, {x: 100, y: 100}],
        type: 'line',
        borderColor: '#B4413C',
        borderDash: [5, 5],
        pointRadius: 0,
        tension: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        tooltip: {
          callbacks: {
            label: function(context) {
              if (context.dataset.label === 'Students') {
                return `${context.parsed.label || 'Student'}: (${context.parsed.x}%, ${context.parsed.y}%)`;
              }
              return context.dataset.label;
            }
          }
        }
      },
      scales: {
        x: {
          beginAtZero: true,
          max: 100,
          title: {
            display: true,
            text: 'Midterm Engagement (%)'
          }
        },
        y: {
          beginAtZero: true,
          max: 100,
          title: {
            display: true,
            text: 'Final Engagement (%)'
          }
        }
      }
    }
  });
}

function loadStatisticalSummary() {
  const container = document.getElementById('statisticalSummary');
  if (!container) return;
  
  // Calculate statistics
  const midtermScores = appData.students.map(s => calculateEngagementScore(s, 'midterm'));
  const finalScores = appData.students.map(s => calculateEngagementScore(s, 'final'));
  const changes = appData.students.map(s => getEngagementChange(s));
  
  const stats = {
    'Midterm Mean': mean(midtermScores).toFixed(1) + '%',
    'Final Mean': mean(finalScores).toFixed(1) + '%',
    'Mean Change': mean(changes).toFixed(1) + '%',
    'Midterm Std Dev': standardDeviation(midtermScores).toFixed(1) + '%',
    'Final Std Dev': standardDeviation(finalScores).toFixed(1) + '%',
    'Improving Students': appData.students.filter(s => s.status === 'improving').length,
    'Stable Students': appData.students.filter(s => s.status === 'stable').length,
    'Declining Students': appData.students.filter(s => s.status === 'declining').length
  };
  
  container.innerHTML = Object.entries(stats).map(([key, value]) => `
    <div class="stats-item">
      <h4>${key}</h4>
      <div class="stats-value">${value}</div>
    </div>
  `).join('');
}

// File Upload Section
function loadFileUploadContent() {
  const uploadHistory = document.getElementById('uploadHistory');
  if (uploadHistory) {
    uploadHistory.innerHTML = appData.uploaded_files.map(file => `
      <div class="upload-item">
        <div class="upload-item-info">
          <h5>${file.name}</h5>
          <div class="upload-item-meta">
            ${file.upload_date} at ${file.upload_time} • ${file.file_size} • ${file.essays_count} essays • ${file.status}
          </div>
        </div>
        <div class="status status-${file.status === 'processed' ? 'improving' : 'declining'}">${file.status}</div>
      </div>
    `).join('');
  }
}

function initializeFileUpload() {
  const uploadArea = document.getElementById('uploadArea');
  const fileInput = document.getElementById('fileInput');
  
  if (uploadArea && fileInput) {
    // Drag and drop functionality
    uploadArea.addEventListener('dragover', (e) => {
      e.preventDefault();
      uploadArea.classList.add('dragover');
    });
    
    uploadArea.addEventListener('dragleave', () => {
      uploadArea.classList.remove('dragover');
    });
    
    uploadArea.addEventListener('drop', (e) => {
      e.preventDefault();
      uploadArea.classList.remove('dragover');
      const files = e.dataTransfer.files;
      handleFileUpload(files);
    });
    
    // File input change
    fileInput.addEventListener('change', (e) => {
      handleFileUpload(e.target.files);
    });
  }
}

function handleFileUpload(files) {
  console.log('Files selected for upload:', files.length);
  Array.from(files).forEach(file => {
    console.log('Processing file:', file.name);
    // Replace alert with toast
    showSuccess(`File "${file.name}" uploaded successfully!`);
  });
}

// Statistical helper functions
function mean(arr) {
  return arr.reduce((sum, val) => sum + val, 0) / arr.length;
}

function standardDeviation(arr) {
  const avg = mean(arr);
  const squaredDiffs = arr.map(val => Math.pow(val - avg, 2));
  return Math.sqrt(mean(squaredDiffs));
}

// Export functionality
function initializeExportButtons() {
  document.querySelectorAll('.export-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const chartType = e.target.dataset.chart;
      exportChart(chartType);
    });
  });
}

function exportChart(chartType) {
  const canvas = document.querySelector(`#${chartType}Chart`);
  if (canvas) {
    const link = document.createElement('a');
    link.download = `${chartType}-chart.png`;
    link.href = canvas.toDataURL();
    link.click();
  }
}

// Initialize application when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  console.log('🚀 Application starting...');
  
  // Test toast functionality
  setTimeout(() => {
    showSuccess("Debug: Toast system test");
  }, 1000);
  
  return (
    <>
      <div className="App">
        {/* ...existing code... */}
      </div>
      <ToastContainer />
    </>
  );
});

function handleLogin(event) {
  event.preventDefault();
  console.log('🔑 Login attempt started');

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  console.log('📧 Email provided:', email);
  console.log('🔒 Password length:', password.length);

  try {
    // Validate inputs
    if (!email || !password) {
      showError('Please provide both email and password');
      console.log('❌ Login failed: Missing credentials');
      return;
    }

    // Attempt login
    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log('✅ Login successful:', userCredential.user.email);
        showSuccess('Login successful!');
        showDashboard();
      })
      .catch((error) => {
        console.error('❌ Login error:', error.code, error.message);
        showError(`Login failed: ${error.message}`);
      });

  } catch (error) {
    console.error('🔥 Unexpected error:', error);
    showError('An unexpected error occurred');
  }
}
