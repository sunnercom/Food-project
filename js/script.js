var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  navigation: {
    nextEl: ".next-one",
    prevEl: ".prev-one",
  },
  loop: true,
  breakpoints: {
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    760: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    630: {
      slidesPerView: 2,
    },
    480: {
      slidesPerView: 1.5,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 15,
    }
  }
});

function toggleAccordion(sectionNumber) {
  var accordionContent = document.querySelectorAll('.accordion-content');
  var currentAccordionContent = accordionContent[sectionNumber - 1];

  // Barcha accordion-content'larini yopish
  for (var i = 0; i < accordionContent.length; i++) {
    accordionContent[i].style.display = 'none';
  }

  // Bosilgan accordion-content'ni ochish yoki yopish
  if (currentAccordionContent.style.display === 'block') {
    currentAccordionContent.style.display = 'none';
  } else {
    currentAccordionContent.style.display = 'block';
  }
}
