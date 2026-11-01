const trigger = document.querySelector("[data-discover-project]");
const template = document.querySelector("#project-content-template");
const hero = document.querySelector(".hero");

trigger?.addEventListener("click", () => {
  if (!template || !hero || trigger.disabled) return;

  const content = template.content.cloneNode(true);
  const section = content.querySelector(".project-reveal");
  if (!section) return;

  trigger.disabled = true;
  trigger.setAttribute("aria-expanded", "true");
  trigger.innerHTML = 'Project details <i data-lucide="arrow-down" class="button-icon" aria-hidden="true"></i>';

  hero.after(content);
  window.lucide?.createIcons();

  requestAnimationFrame(() => {
    section.classList.add("is-visible");
    section.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      block: "start"
    });
  });
});
