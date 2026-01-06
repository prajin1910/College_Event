const sliderData = [
  {
    icon: '🎯',
    title: 'Contest Theme',
    content: 'National Level Article Presentation Contest',
    subtitle: 'Showcase your research and innovation'
  },
  {
    icon: '🏆',
    title: 'Win Amazing Prizes',
    content: 'Exciting prizes and recognition await winners',
    subtitle: 'Showcase your talent and win big'
  },
  {
    icon: '📚',
    title: 'Get Published',
    content: 'Best articles published with ISBN recognition',
    subtitle: 'Academic Decipher Press publication opportunity'
  },
  {
    icon: '🌟',
    title: 'Networking Opportunity',
    content: 'Connect with scholars and researchers',
    subtitle: 'Build valuable academic connections'
  },
  {
    icon: '🚀',
    title: 'Launch Your Career',
    content: 'Boost your academic profile and resume',
    subtitle: 'Make a mark in the academic world'
  }
];

const timelineData = [
  {
    date: '6th February 2026',
    event: 'Last date of registration'
  },
  {
    date: '24th February 2026',
    event: 'Last date of article PDF submission'
  },
  {
    date: '7th March 2026',
    event: 'Declaration of 1st round result'
  },
  {
    date: '11th March 2026',
    event: 'Date of 2nd round (Article presentation)'
  },
  {
    date: '14th March 2026',
    event: 'Final result declaration'
  }
];

let currentSlide = 0;

function initNavbar() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  const navLinks = navMenu.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });
}

function smoothScroll(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}

function initSlider() {
  const sliderDots = document.getElementById('sliderDots');
  const slideContent = document.getElementById('slideContent');

  sliderDots.innerHTML = sliderData.map((_, index) =>
    `<div class="dot ${index === 0 ? 'active' : ''}" data-index="${index}"></div>`
  ).join('');

  const dots = sliderDots.querySelectorAll('.dot');
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      currentSlide = parseInt(dot.dataset.index);
      updateSlider();
    });
  });

  setInterval(() => {
    currentSlide = (currentSlide + 1) % sliderData.length;
    updateSlider();
  }, 5000);
}

function updateSlider() {
  const data = sliderData[currentSlide];
  const slideIcon = document.getElementById('slideIcon');
  const slideTitle = document.getElementById('slideTitle');
  const slideMainContent = document.getElementById('slideContent1');
  const slideSubtitle = document.getElementById('slideSubtitle');
  const dots = document.querySelectorAll('.dot');

  slideIcon.textContent = data.icon;
  slideTitle.textContent = data.title;
  slideMainContent.textContent = data.content;
  slideSubtitle.textContent = data.subtitle;

  dots.forEach((dot, index) => {
    if (index === currentSlide) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

function initTimeline() {
  const timeline = document.getElementById('timeline');

  timeline.innerHTML = timelineData.map((item) => `
    <div class="timeline-item">
      <div class="timeline-marker">
        <div class="marker-icon">📅</div>
      </div>
      <div class="timeline-content">
        <h3>${item.event}</h3>
        <p class="date">${item.date}</p>
      </div>
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initSlider();
  initTimeline();
});

window.smoothScroll = smoothScroll;
