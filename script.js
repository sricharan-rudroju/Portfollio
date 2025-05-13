// Scroll to Top Button
const scrollTopBtn = document.createElement('button');
scrollTopBtn.textContent = '↑';
scrollTopBtn.style.position = 'fixed';
scrollTopBtn.style.bottom = '20px';
scrollTopBtn.style.right = '20px';
scrollTopBtn.style.padding = '10px 15px';
scrollTopBtn.style.fontSize = '1.5rem';
scrollTopBtn.style.fontWeight='bolder';
scrollTopBtn.style.backgroundColor = '#00f2fe';
scrollTopBtn.style.color = 'black';
scrollTopBtn.style.border = 'none';
scrollTopBtn.style.borderRadius = '50%';
scrollTopBtn.style.cursor = 'pointer';
scrollTopBtn.style.display = 'none'; // Initially hidden
document.body.appendChild(scrollTopBtn);

window.onscroll = function () {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    scrollTopBtn.style.display = 'block'; // Show button when scrolled down
  } else {
    scrollTopBtn.style.display = 'none'; // Hide button when at top
  }
};

scrollTopBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Toggle Mobile Navigation
const menuToggleBtn = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggleBtn.addEventListener('click', function () {
  navMenu.classList.toggle('active');
});

// // Light/Dark Mode Toggle
// const themeToggleBtn = document.querySelector('#theme-toggle');
// const body = document.body;

// themeToggleBtn.addEventListener('click', function () {
//   body.classList.toggle('dark-mode');
//   if (body.classList.contains('dark-mode')) {
//     localStorage.setItem('theme', 'dark');
//   } else {
//     localStorage.setItem('theme', 'light');
//   }
// });

// Check saved theme in localStorage on page load
const dynamicText = document.getElementById('dynamic-text');
const roles = ['Learner', 'Coder', 'Developer'];
const color = '#007acc';

let currentIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentRole = roles[currentIndex];
  dynamicText.style.color = color;

  // Add or remove characters
  dynamicText.textContent = currentRole.substring(0, charIndex);

  if (!isDeleting) {
    if (charIndex < currentRole.length) {
      charIndex++;
      setTimeout(typeEffect, 150); // Typing speed
    } else {
      // Pause before deleting
      setTimeout(() => {
        isDeleting = true;
        typeEffect();
      }, 1000);
    }
  } else {
    if (charIndex > 0) {
      charIndex--;
      setTimeout(typeEffect, 100); // Deleting speed
    } else {
      // Move to next word
      isDeleting = false;
      currentIndex = (currentIndex + 1) % roles.length;
      setTimeout(typeEffect, 500); // Pause before typing next word
    }
  }
}

typeEffect(); // Start the effect



// Get modal and buttons
const readMoreBtn = document.getElementById('read-more-btn');
const aboutModal = document.getElementById('about-modal');
const backBtn = document.getElementById('back-btn');

// Show modal when 'Read More' is clicked
readMoreBtn.addEventListener('click', () => {
  aboutModal.style.display = 'flex';
});

// Hide modal and go back to home when 'Back' is clicked
backBtn.addEventListener('click', (e) => {
  e.preventDefault();
  aboutModal.style.display = 'none';

  const aboutSection = document.getElementById('about');
  aboutSection.scrollIntoView({ behavior: 'smooth' });
});

// // Close modal and return to About section when clicking outside modal content
aboutModal.addEventListener('click', (e) => {
  if (e.target === aboutModal) {
    aboutModal.style.display = 'none';
    const aboutSection = document.getElementById('about');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  }
});



document.querySelector('.contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting the usual way

  // Gather the form data
  const formData = new FormData(this);

  // Display loading or success message
  document.querySelector('.submit-btn').textContent = 'Sending...';

  // Send the form data to the server using fetch (AJAX)
  fetch('submit_form.php', {
    method: 'POST',
    body: formData
  })
  .then(response => response.text()) // Get the response from the PHP script
  .then(data => {
    console.log(data); // Log the server response
    if (data === 'Success') {
      alert('Thank you for your message! We will get back to you shortly.');
    } else {
      alert('Sorry, something went wrong. Please try again later.');
    }
    // Reset the form after successful submission
    document.querySelector('.contact-form').reset();
    document.querySelector('.submit-btn').textContent = 'Send Message';
  })
  .catch(error => {
    console.error('Error:', error);
    alert('There was an error submitting the form. Please try again later.');
    document.querySelector('.submit-btn').textContent = 'Send Message';
  });
});











