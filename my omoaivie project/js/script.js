console.log("Hello world!");

const myName = "Ibrahim Hamadoun Macinanké";
const h1 = document.querySelector(".rubrique-primaire");
console.log(h1);

// h1.addEventListener("click", function () {
//   h1.textContent = myName;
//   h1.style.backgroundColor = "red";
//   h1.style.padding = "5rem";
// });

// J'ajoute El a la fin du nom donné a un variable pour dire que c'est un élément HTML

// Définir l'année en cours automatiquement
const annéeEl = document.querySelector(".année");
const currentYear = new Date().getFullYear();
annéeEl.textContent = currentYear;

// Faites fonctionner la navigation mobile

const boutonNavigationEl = document.querySelector(
  ".navigation-mobile-par-bouton"
);
const entêteEl = document.querySelector(".entête");

boutonNavigationEl.addEventListener("click", function () {
  entêteEl.classList.toggle("ouvrir-la-navigation");
});

/////////////////////////////////////////////////////////////////////////
// Animation de défilement fluide

const tousLesLiens = document.querySelectorAll("a:link");

tousLesLiens.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Revenir en haut
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    //Faites défiler vers d'autres liens
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Ferme la navigation mobile
    if (link.classList.contains("lien-nav-principal"))
      entêteEl.classList.toggle("ouvrir-la-navigation");
  });
});

//////////////////////////////////////////////////////////////////
// Navigation collante

const heroSectionEl = document.querySelector(".section-hero");

const observerobs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("collante");
    }
    if (ent.isIntersecting === true) {
      document.body.classList.remove("collante");
    }
  },
  {
    // Dans la fenêtre
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
observerobs.observe(heroSectionEl);

///////////////////////////////////////////////////////////////////////
// Correction de la propriété flexbox gap manquante
//dans certaines versions de Safari

function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var estPrisEnCharge = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(estPrisEnCharge);

  if (!estPrisEnCharge) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
