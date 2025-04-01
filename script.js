//icon navbar
let menu = document.querySelector('#menu-icon');
let  navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Toggle menu
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('nav a');

window.onscroll = () => {
  sections.forEach(section => {
    let top = window.scrollY;
    let offset = section.offsetTop - 150;
    let height = section.offsetHeight;
    let id = section.getAttribute('id');

    if (top >= offset && top < offset + height) {
        navLinks.forEach(link => {
            link.classList.remove('active');
            document.querySelector('heade nav a[href*=' + id + ']').classList.add('active');
        });
      };
    });

    /* sticky navbar */
    let header = document.querySelector('header');

    MediaElementAudioSourceNode.classList.remove('bx-x');
    navbar.classList.remove('active');  
//remove toggle icon and navbar when click navbar link (scroll)
    header.classList.toggle('sticky', window.scrollY > 100);
};

//scroll reveal
ScrollReveal({ 
    
    distance: '80px',
    duration: 2000,
    delay: 200
});
  
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .email-btn, .phn-btn, .technical-skills',{ origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

//typed js

const typed = new Typed('.multiple-text', {
    strings: ['IT professional', 'Support Analyst', 'Consultant', 'Web Developer', 'Man united fan', 'Community volunteer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
//Default table sort

document.addEventListener("DOMContentLoaded", function () {
    const table = document.getElementById("skills-table");
    if (!table) return; // Ensure the table exists

    const tbody = table.querySelector("tbody");
    const rows = Array.from(tbody.querySelectorAll("tr"));

    // Sort rows by the second column (Proficiency/Experience)
    rows.sort((a, b) => {
        const aText = a.cells[1].textContent.trim();
        const bText = b.cells[1].textContent.trim();

        // Extract numeric values from the text (e.g., "4 years")
        const aValue = parseInt(aText.match(/\d+/) || [0], 10);
        const bValue = parseInt(bText.match(/\d+/) || [0], 10);

        return bValue - aValue; // Sort in descending order
    });

    // Append sorted rows back to the table body
    rows.forEach(row => tbody.appendChild(row));
});

document.addEventListener("DOMContentLoaded", function () {
    const table = document.getElementById("skills-table");
    if (!table) return; // Ensure the table exists

    const tbody = table.querySelector("tbody");
    const rows = Array.from(tbody.querySelectorAll("tr"));

    // Sort rows by the second column (Proficiency/Experience)
    rows.sort((a, b) => {
        const aText = a.cells[1].textContent.trim();
        const bText = b.cells[1].textContent.trim();

        // Extract numeric values from the text (e.g., "4 years")
        const aValue = parseFloat(aText.match(/\d.+/) || [0], 10);
        const bValue = parseFloat(bText.match(/\d.+/) || [0], 10);

        return bValue - aValue; // Sort in descending order
    });

    // Append sorted rows back to the table body
    rows.forEach(row => tbody.appendChild(row));
});


document.addEventListener("DOMContentLoaded", function () {
    const table = document.getElementById("functional-skills");
    if (!table) return; // Ensure the table exists

    const tbody = table.querySelector("tbody");
    const rows = Array.from(tbody.querySelectorAll("tr"));

    // Sort rows by the second column (Proficiency/Experience)
    rows.sort((a, b) => {
        const aText = a.cells[1].textContent.trim();
        const bText = b.cells[1].textContent.trim();

        // Extract numeric values from the text (e.g., "4 years")
        const aValue = parseFloat(aText.match(/\d.+/) || [0], 10);
        const bValue = parseFloat(bText.match(/\d.+/) || [0], 10);

        return bValue - aValue; // Sort in descending order
    });

    // Append sorted rows back to the table body
    rows.forEach(row => tbody.appendChild(row));
});
