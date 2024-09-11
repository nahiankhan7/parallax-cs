document.addEventListener("DOMContentLoaded", () => {
  const galleryItems = document.querySelectorAll(".gallery-item");
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.querySelector(".lightbox-image");
  const closeBtn = document.querySelector(".close");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  let currentIndex = 0;

  const openLightbox = (index) => {
    currentIndex = index;
    lightboxImage.src = galleryItems[currentIndex].src;
    lightbox.style.display = "flex";
  };

  const closeLightbox = () => {
    lightbox.style.display = "none";
  };

  const showPrevImage = () => {
    currentIndex =
      currentIndex > 0 ? currentIndex - 1 : galleryItems.length - 1;
    lightboxImage.src = galleryItems[currentIndex].src;
  };

  const showNextImage = () => {
    currentIndex =
      currentIndex < galleryItems.length - 1 ? currentIndex + 1 : 0;
    lightboxImage.src = galleryItems[currentIndex].src;
  };

  galleryItems.forEach((item, index) => {
    item.addEventListener("click", () => openLightbox(index));
  });

  closeBtn.addEventListener("click", closeLightbox);
  prevBtn.addEventListener("click", showPrevImage);
  nextBtn.addEventListener("click", showNextImage);

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });
});
