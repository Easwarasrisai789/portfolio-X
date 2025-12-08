// -------------------------
// Smooth nav active state
// -------------------------
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");

// Click – set active
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});

// Scroll – set active
window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY + 150;

  sections.forEach(section => {
    if (
      scrollPos >= section.offsetTop &&
      scrollPos < section.offsetTop + section.offsetHeight
    ) {
      const id = section.id;
      navLinks.forEach(link => {
        link.classList.toggle(
          "active",
          link.getAttribute("href") === `#${id}`
        );
      });
    }
  });
});

// -------------------------
// ES click → image → video
// -------------------------
const logoES = document.getElementById("logo-es");
const heroImage = document.getElementById("heroImage");
const esVideo = document.getElementById("esVideo");

// Ensure initial state
if (heroImage) heroImage.style.opacity = "1";
if (esVideo) esVideo.style.display = "none";

if (logoES && heroImage && esVideo) {
  logoES.addEventListener("click", () => {
    // Fade out image
    heroImage.style.transition = "opacity 0.4s ease";
    heroImage.style.opacity = "0";

    // Show + Play video
    esVideo.style.display = "block";
    esVideo.play();
  });

  // When video ends → image comes back
  esVideo.addEventListener("ended", () => {
    esVideo.style.display = "none";
    heroImage.style.opacity = "1"; // show image again
  });
}

// -------------------------
// Formspree AJAX submit
// -------------------------
const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = new FormData(form);

    status.innerHTML = "Sending...";
    status.style.color = "#1dd1a1";

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        status.innerHTML = "Message sent successfully!";
        form.reset();
      } else {
        status.innerHTML = "Error! Please try again.";
        status.style.color = "red";
      }
    } catch (error) {
      status.innerHTML = "Network error. Try again.";
      status.style.color = "red";
    }
  });
}

// -------------------------
// Resume Modal
// -------------------------
const openResume = document.getElementById("openResume");
const resumeModal = document.getElementById("resumeModal");
const closeResume = document.getElementById("closeResume");

if (openResume) {
  openResume.addEventListener("click", () => {
    resumeModal.style.display = "flex";
  });
}

if (closeResume) {
  closeResume.addEventListener("click", () => {
    resumeModal.style.display = "none";
  });
}

window.addEventListener("click", (e) => {
  if (e.target === resumeModal) {
    resumeModal.style.display = "none";
  }
});
const logoESBtn = document.getElementById("logo-es-btn");

if (logoESBtn && logoES) {
  logoESBtn.addEventListener("click", () => {
    logoES.click(); // trigger original ES animation
  });
}
