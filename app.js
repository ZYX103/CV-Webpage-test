const btnScrollTop = document.querySelector(".btn-scroll-top");

const hlink1 = document.querySelector(".hlink1");
const hlink2 = document.querySelector(".hlink2");
const hlink3 = document.querySelector(".hlink3");
const hlink4 = document.querySelector(".hlink4");
const hlink5 = document.querySelector(".hlink5");
const hlink6 = document.querySelector(".hlink6");

// Reveal NavBar vertically
const HeadertoggleButton = document.querySelector(".header-toggle-button");
const HeaderLinks = document.querySelector(".header-links");

HeadertoggleButton.addEventListener("click", function () {
  HeaderLinks.classList.toggle("active");
  console.log("bob");
});

// Defining scroll to function
function scroll(x, y) {
  window.scrollTo({ top: x, left: y, behavior: "smooth" });
}

// Activate scroll to top button, also transition
btnScrollTop.addEventListener("click", function () {
  scroll(0, 0);
});

// Scroll to top button - appear, dissapear
const ScrollFunc = function () {
  let y = window.scrollY;
  if (y > 200) {
    btnScrollTop.classList.remove("hidden");
  } else if (y < 200) {
    btnScrollTop.classList.add("hidden");
  }
};
window.addEventListener("scroll", ScrollFunc);
// end - scroll to top

// SCROLL TO SPECIFIC Y PLACE WHEN PRESSING HYPERLINK ON TOP
hlink2.addEventListener("click", function () {
  scroll(350, 0);
});
hlink3.addEventListener("click", function () {
  scroll(900, 0);
});

// MODAL HANDLING

const openModalHCJ = document.querySelectorAll(".skillbtn1");
const openModalPython = document.querySelector(".skillbtn4");
const openModalPhotoshop = document.querySelector(".skillbtn5");
const openModalAfterEffects = document.querySelector(".skillbtn6");
const openModalAutocad = document.querySelector(".skillbtn7");
const openMainModal = document.querySelector(".main-modal-container");
const openModalLumion = document.querySelector(".skillbtn11");
const openModalTwinmotion = document.querySelector(".skillbtn12");
const openMainContactButton = document.querySelector(".main-btn1");
const openModalDisclaimerButton = document.querySelectorAll(".hlink")[0];

const HCJModal = document.querySelector(".HTML-CSS-JS-modal");
const PythonModal = document.querySelector(".Python-modal");
const PhotoshopModal = document.querySelector(".Photoshop-modal");
const AfterEffectsModal = document.querySelector(".AfterEffects-modal");
const LumionModal = document.querySelector(".Lumion-modal");
const Twinmotion = document.querySelector(".Twinmotion-modal");
const ContactModal = document.querySelector(".Contact-modal");
const DisclaimerModal = document.querySelector(".Disclaimer-modal");
const AutocadModal = document.querySelector(".Autocad-modal");

//  s ovim sam probao otvorit sve buttone
const Modalproba = document.querySelectorAll(".skills-text-parent");

const closeModal = document.querySelectorAll(".close");
// const Video = document.querySelectorAll(".video-slide-element");

// INJECTING HTML CODE - PROBA ZA AUTOCAD modal
const AutocadDescription = {
  name: "Autocad",
  description:
    "First and a foremost on my list of useless skills for web development. But it's first software I improved to professional level and most have software for every (civil) engineer.",
  other: "",
};

// Funkcija koja injecta HTML kod iz Javascripta. Problem s njim je što na njemu ne rade event handleri koje sam do sad stavio. Riješiti---
// obrisati "hidden" ako želimo se odmah vidi
const injectModal = function (mov) {
  let code = mov.other != "" ? mov.other : "";
  const html = `<section class="modal-container hidden ${mov.name}-modal">
  <div class="modal">
    <h1>${mov.name}</h1>
    <h2>${code}</h2>
    <p>
    ${mov.description}
    </p>
    <button class="close closex"><i class="fas fa-times"></i></button>
  </div>
  </section>`;

  openMainModal.insertAdjacentHTML("afterbegin", html);
};

injectModal(AutocadDescription);

// Na elemente koji se injectaju ne rade dotadašnji eventi (tipa button click) jer su nastali nakon loadanja DOM-a.
// Ovdje je kreirana naredba koja otvara i injectana elemente.
openMainModal.addEventListener("click", function (e) {
  // console.log(e.target.classList);
  const AutocadModal = document.querySelector(".Autocad-modal");
  console.log(e.target.parentElement.parentElement.parentElement);
  if (e.target.parentElement.classList.contains("close")) {
    // AutocadModal.classList.toggle("hidden");
    AutocadModal.classList.add("hidden");
  }
});

// ako se ovo ispod uključi onda nijedan open modal ne radi
// Modalproba.forEach("click", function (i) {
//   i.addEventListener("click", function (j) {
//   });
// });

// TOGGLE HIDDEN CLASS TO SHOW MODAL
openModalHCJ.forEach(function (i) {
  i.addEventListener("click", function () {
    HCJModal.classList.toggle("hidden");
  });
});

openModalPython.addEventListener("click", function () {
  PythonModal.classList.toggle("hidden");
});

// OVO NE RADI JER JE INJECTAN html KOD OD ACADA
// openModalAutocad.addEventListener("click", function () {
//   AutocadModal.classList.toggle("hidden");
// });

openModalPhotoshop.addEventListener("click", function () {
  PhotoshopModal.classList.toggle("hidden");
});

openModalAfterEffects.addEventListener("click", function () {
  AfterEffectsModal.classList.toggle("hidden");
});

openModalLumion.addEventListener("click", function () {
  LumionModal.classList.toggle("hidden");
});

openModalTwinmotion.addEventListener("click", function () {
  Twinmotion.classList.toggle("hidden");
});

openModalTwinmotion.addEventListener("click", function () {
  Twinmotion.classList.toggle("hidden");
});

hlink6.addEventListener("click", function () {
  ContactModal.classList.toggle("hidden");
});

openMainContactButton.addEventListener("click", function () {
  ContactModal.classList.toggle("hidden");
});

openModalDisclaimerButton.addEventListener("click", function () {
  DisclaimerModal.classList.toggle("hidden");
});

// CLOSE MODAL WINDOWS
closeModal.forEach(function (i) {
  i.addEventListener("click", function (e) {
    const parent = e.currentTarget.parentElement.parentElement;
    parent.classList.add("hidden");
  });
});

// ALTERNATIVE WAY TO WRITE CODE ON TOP
// for (const [i, j] of closeModal.entries()) {
//   j.addEventListener("click", function (e) {
//     const parent = e.currentTarget.parentElement.parentElement;
//     parent.classList.add("hidden");
//   });
// }

// 2nd ALTERNATIVE WAY TO WRITE CODE ON TOP
// for (const i of closeModal) {
//   i.addEventListener("click", function (e) {
//     const parent = e.currentTarget.parentElement.parentElement;
//     parent.classList.add("hidden");
//   });
// }

$(".openModalPhotoshop").hover(function () {
  $(this).removeClass("skills-text-parent");
});

$(document).ready(function () {
  $(".openModalPhotoshop").hover(
    function () {
      $(this).addClass("hidden");
    },
    function () {
      $(this).removeClass("skills-text-parent");
    }
  );
});

// SLIDING
const slides = document.querySelectorAll(".slide-img");
const videoSlides = document.querySelectorAll(".video-slide-element");
const nextBtn = document.querySelectorAll(".next-btn");
const prevBtn = document.querySelectorAll(".previous-btn");

// MANAGING SLIDING
slides.forEach(function (slide, index) {
  // . left targets left property
  slide.style.left = `${index * 100}%`;
});

videoSlides.forEach(function (slide, index) {
  // . left targets left property
  slide.style.left = `${index * 100}%`;
});

let counterPhotoshop = 0;
let counterLumion = 0;

prevBtn.forEach(function (i) {
  i.addEventListener("click", function (e) {
    let parent =
      e.currentTarget.parentElement.parentElement.parentElement.classList;
    if (parent.contains("Lumion-modal")) {
      counterLumion--;
      if (counterLumion < 0) {
        counterLumion = videoSlides.length - 1;
      }
      carousel();
    } else {
      counterPhotoshop--;
      if (counterPhotoshop < 0) {
        counterPhotoshop = slides.length - 1;
      }
      carousel2();
    }
  });
});

nextBtn.forEach(function (i) {
  i.addEventListener("click", function (e) {
    let parent =
      e.currentTarget.parentElement.parentElement.parentElement.classList;
    if (parent.contains("Lumion-modal")) {
      counterLumion++;
      if (counterLumion > videoSlides.length - 1) {
        counterLumion = 0;
      }
      carousel();
    } else {
      counterPhotoshop++;
      if (counterPhotoshop > slides.length - 1) {
        counterPhotoshop = 0;
      }
      carousel2();
    }
  });
});

function carousel() {
  videoSlides.forEach(function (slide) {
    slide.style.transform = `translateX(${-counterLumion * 100}%)`;
  });
}

function carousel2() {
  slides.forEach(function (slide) {
    slide.style.transform = `translateX(${-counterPhotoshop * 100}%)`;
  });
}
