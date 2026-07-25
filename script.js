const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");

navToggle?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

const strategyCopy = {
  audit: "We start by mapping the gaps between how your brand looks today and how it needs to be trusted tomorrow.",
  build: "Then we create the assets that make the brand consistent: content, video, visuals, website sections, and messaging.",
  scale: "Finally, we turn the presence into a repeatable system so your team can show up with clarity and momentum.",
};

document.querySelectorAll("[data-step]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-step]").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    const preview = document.querySelector("[data-strategy-preview] p");
    preview.textContent = strategyCopy[button.dataset.step];
  });
});

document.querySelectorAll("[data-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    document.querySelectorAll("[data-filter]").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    document.querySelectorAll("[data-category]").forEach((card) => {
      card.classList.toggle("hidden", filter !== "all" && card.dataset.category !== filter);
    });
  });
});

const products = {
  starter: {
    eyebrow: "Starter Presence",
    title: "Get credible fast.",
    body: "A focused brand and content setup for businesses that need a cleaner first impression before they scale.",
    items: ["Brand clarity sprint", "Social profile polish", "Content direction and templates"],
  },
  growth: {
    eyebrow: "Growth Engine",
    title: "Show up consistently.",
    body: "A monthly creative system for brands that need stronger visibility, sharper content, and practical direction.",
    items: ["Monthly content calendar", "Short-form video support", "Performance-led strategy calls"],
  },
  launch: {
    eyebrow: "Launch Buildout",
    title: "Go to market polished.",
    body: "A full digital presence package for startups preparing a new offer, rebrand, website, or campaign.",
    items: ["Landing page or website", "Campaign creative", "Launch messaging and assets"],
  },
};

document.querySelectorAll("[data-product]").forEach((button) => {
  button.addEventListener("click", () => {
    const product = products[button.dataset.product];
    document.querySelectorAll("[data-product]").forEach((item) => {
      item.classList.remove("active");
      item.setAttribute("aria-selected", "false");
    });
    button.classList.add("active");
    button.setAttribute("aria-selected", "true");
    document.querySelector("[data-product-card]").innerHTML = `
      <p class="eyebrow">${product.eyebrow}</p>
      <h3>${product.title}</h3>
      <p>${product.body}</p>
      <ul>${product.items.map((item) => `<li>${item}</li>`).join("")}</ul>
    `;
  });
});

document.querySelector("[data-contact-form]")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const status = document.querySelector("[data-form-status]");
  status.textContent = "Thanks. Your request is ready to send - connect this form to email or CRM next.";
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
