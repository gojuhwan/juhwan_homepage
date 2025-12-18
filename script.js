// JavaScript Functionality for Juhwan's Homepage
// Created: 2025-12-18

// ===== DOM Ready Handler =====
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded - Initializing homepage...');
  initializeEventListeners();
  updateDateTime();
});

// ===== Date and Time Functions =====
function updateDateTime() {
  const now = new Date();
  const dateTimeString = formatDateTime(now);
  const dateElement = document.getElementById('current-date-time');
  if (dateElement) {
    dateElement.textContent = dateTimeString;
  }
}

function formatDateTime(date) {
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, '0');
  const day = String(date.getUTCDate()).padStart(2, '0');
  const hours = String(date.getUTCHours()).padStart(2, '0');
  const minutes = String(date.getUTCMinutes()).padStart(2, '0');
  const seconds = String(date.getUTCSeconds()).padStart(2, '0');
  
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

// Update date and time every second
setInterval(updateDateTime, 1000);

// ===== Event Listeners =====
function initializeEventListeners() {
  // Add smooth scrolling to anchor links
  setupSmoothScrolling();
  
  // Setup navigation menu
  setupNavigation();
  
  // Setup button handlers
  setupButtonHandlers();
}

function setupSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

function setupNavigation() {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      this.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function() {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
      });
    });
  }
}

function setupButtonHandlers() {
  // Example: Add click handlers for buttons
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      console.log('Button clicked:', this.textContent);
      // Add feedback animation
      this.classList.add('active');
      setTimeout(() => this.classList.remove('active'), 200);
    });
  });
}

// ===== Utility Functions =====
function toggleClass(element, className) {
  if (element && element.classList) {
    element.classList.toggle(className);
  }
}

function addClass(element, className) {
  if (element && element.classList) {
    element.classList.add(className);
  }
}

function removeClass(element, className) {
  if (element && element.classList) {
    element.classList.remove(className);
  }
}

// ===== Form Handling =====
function handleFormSubmit(formId, callback) {
  const form = document.getElementById(formId);
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      if (typeof callback === 'function') {
        callback(this);
      }
    });
  }
}

// ===== Animation Functions =====
function fadeIn(element, duration = 500) {
  if (!element) return;
  element.style.opacity = '0';
  element.style.display = 'block';
  let opacity = 0;
  const step = 100 / duration;
  
  const animate = setInterval(() => {
    opacity += step;
    element.style.opacity = opacity / 100;
    if (opacity >= 100) {
      clearInterval(animate);
      element.style.opacity = '1';
    }
  }, 10);
}

function fadeOut(element, duration = 500) {
  if (!element) return;
  let opacity = 100;
  const step = 100 / duration;
  
  const animate = setInterval(() => {
    opacity -= step;
    element.style.opacity = opacity / 100;
    if (opacity <= 0) {
      clearInterval(animate);
      element.style.display = 'none';
    }
  }, 10);
}

// ===== Scroll Event Handlers =====
window.addEventListener('scroll', function() {
  const scrollPosition = window.scrollY;
  
  // Add scroll-based animations or effects here
  if (scrollPosition > 100) {
    document.body.classList.add('scrolled');
  } else {
    document.body.classList.remove('scrolled');
  }
});

// ===== Debug Logging =====
function log(message, data = null) {
  if (data) {
    console.log(`[${new Date().toLocaleTimeString()}] ${message}:`, data);
  } else {
    console.log(`[${new Date().toLocaleTimeString()}] ${message}`);
  }
}

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    updateDateTime,
    formatDateTime,
    toggleClass,
    addClass,
    removeClass,
    handleFormSubmit,
    fadeIn,
    fadeOut,
    log
  };
}
