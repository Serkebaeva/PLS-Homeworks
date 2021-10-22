const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", checksections);

checksections();

function checksections() {
  const bottomScrollTriger = window.innerHeight / 2;

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < bottomScrollTriger) {
      section.classList.add("show");
    } else {
      section.classList.remove("show");
    }
  });
}
