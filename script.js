// PERSONALIZE THESE VALUES BEFORE PUBLISHING.
const portfolio = {
  email: "YOUR_EMAIL@example.com", // Replace with your professional email address.
  linkedin: "",                    // Paste your LinkedIn profile URL.
  github: ""                       // Paste your GitHub profile URL, if you have one.
};

document.getElementById("year").textContent = new Date().getFullYear();

const emailLink = document.getElementById("email-link");
if (portfolio.email && !portfolio.email.includes("YOUR_EMAIL")) {
  emailLink.href = `mailto:${portfolio.email}`;
} else {
  emailLink.addEventListener("click", (event) => {
    event.preventDefault();
    alert("Please add your email address in js/script.js before publishing this portfolio.");
  });
}

function setSocialLink(id, url) {
  const link = document.getElementById(id);
  if (url && url.trim()) {
    link.href = url;
  } else {
    link.hidden = true;
  }
}
setSocialLink("linkedin-link", portfolio.linkedin);
setSocialLink("github-link", portfolio.github);

const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
menuButton.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});
navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});
