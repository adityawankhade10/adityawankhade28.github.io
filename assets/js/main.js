/**
* Template Name: Personal
* Template URL: https://bootstrapmade.com/personal-free-resume-bootstrap-template/
* Updated: Nov 04 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Init typed.js
   */
  const selectTyped = document.querySelector('.typed');
  if (selectTyped) {
    let typed_strings = selectTyped.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Animate the skills items on reveal
   */
  let skillsAnimation = document.querySelectorAll('.skills-animation');
  skillsAnimation.forEach((item) => {
    new Waypoint({
      element: item,
      offset: '80%',
      handler: function(direction) {
        let progress = item.querySelectorAll('.progress .progress-bar');
        progress.forEach(el => {
          el.style.width = el.getAttribute('aria-valuenow') + '%';
        });
      }
    });
  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });
  
document.addEventListener('DOMContentLoaded', () => {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const currentTheme = localStorage.getItem('theme') || 'light';

  document.body.classList.add(`${currentTheme}-mode`);

  themeToggleBtn.addEventListener('click', () => {
      if (document.body.classList.contains('light-mode')) {
          document.body.classList.replace('light-mode', 'dark-mode');
          localStorage.setItem('theme', 'dark');
      } else {
          document.body.classList.replace('dark-mode', 'light-mode');
          localStorage.setItem('theme', 'light');
      }
  });
});

/**
 * Hover Animation for Math SVG Circle
 */
document.addEventListener('DOMContentLoaded', () => {
  const svgCircle = document.querySelector('.math-svg circle');
  if (svgCircle) {
    svgCircle.addEventListener('mouseenter', () => {
      svgCircle.setAttribute('fill', 'yellow');
    });
    svgCircle.addEventListener('mouseleave', () => {
      svgCircle.setAttribute('fill', 'lightblue');
    });
  }
});

// Function to get the current time and format it
function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const currentTime = `${hours}:${minutes}:${seconds}`;

  // Update the clock element with the current time
  document.getElementById('clock').textContent = currentTime;
}

// Initialize the clock and update it every second
document.addEventListener('DOMContentLoaded', () => {
  updateClock(); // Update immediately on load
  setInterval(updateClock, 1000); // Update every second
});

document.addEventListener('DOMContentLoaded', () => {
  // Function to validate email
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Function to validate phone number
  const isValidPhone = (phone) => {
    const phoneRegex = /^\+?[0-9]{10,15}$/; // Allow + and 10 to 15 digits
    return phoneRegex.test(phone);
  };

  // Function to validate address
  const isValidAddress = (address) => {
    return address.trim().length > 0; // Ensure address is not empty
  };

  // Function to handle form submission
  const handleFormSubmission = (event) => {
    event.preventDefault();

    // Collecting form data
    const formData = {
      name: document.getElementById('name').value.trim(),
      surname: document.getElementById('surname').value.trim(),
      email: document.getElementById('email').value.trim(),
      phone: document.getElementById('phone').value.trim(),
      address: document.getElementById('address').value.trim(),
      attribute1: parseFloat(document.getElementById('attr1').value) || 0,
      attribute2: parseFloat(document.getElementById('attr2').value) || 0,
      attribute3: parseFloat(document.getElementById('attr3').value) || 0,
      attribute4: parseFloat(document.getElementById('attr4').value) || 0,
      attribute5: parseFloat(document.getElementById('attr5').value) || 0,
    };

    // Validation
    if (!isValidEmail(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (!isValidPhone(formData.phone)) {
      alert('Please enter a valid phone number with at least 10 digits.');
      return;
    }

    if (!isValidAddress(formData.address)) {
      alert('Please enter a valid address.');
      return;
    }

    // Calculate the average of numeric attributes
    const numericAttributes = [
      formData.attribute1,
      formData.attribute2,
      formData.attribute3,
      formData.attribute4,
      formData.attribute5,
    ];
    const average =
      numericAttributes.reduce((sum, value) => sum + value, 0) /
      numericAttributes.length;

    // Determine the color based on the average value
    let averageColor = 'green'; // Default color
    if (average < 10) {
      averageColor = 'red';
    } else if (average < 20) {
      averageColor = 'orange';
    }

    // Display data on the webpage
    const resultSection = document.getElementById('result-section');
    resultSection.innerHTML = `
      <p><strong>Name:</strong> ${formData.name}</p>
      <p><strong>Surname:</strong> ${formData.surname}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Phone:</strong> ${formData.phone}</p>
      <p><strong>Address:</strong> ${formData.address}</p>
      <p><strong>Attribute 1:</strong> ${formData.attribute1}</p>
      <p><strong>Attribute 2:</strong> ${formData.attribute2}</p>
      <p><strong>Attribute 3:</strong> ${formData.attribute3}</p>
      <p><strong>Attribute 4:</strong> ${formData.attribute4}</p>
      <p><strong>Attribute 5:</strong> ${formData.attribute5}</p>
      <p><strong>${formData.name} ${formData.surname} (${formData.email}):</strong> 
        <span style="color: ${averageColor}; font-weight: bold;">Average = ${average.toFixed(2)}</span>
      </p>
    `;

    // Log data to the console
    console.log('Form Data:', formData);
  };

  // Attach the event listener to the submit button
  document.getElementById('submit-button').addEventListener('click', handleFormSubmission);
});



})();

