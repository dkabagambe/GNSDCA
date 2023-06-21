const hamburger = document.getElementById("hamburger");
hamburger.addEventListener("click", function (e) {
  const ul = document.querySelector("nav>ul");
  ul.classList.toggle("show");
  hamburger.classList.toggle("cross");
});
//gallery
const galleryImages = document.querySelectorAll(".gallery-image");
const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");
const modalImage = document.querySelector(".modal-image");
const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
let currentImageIndex;

galleryImages.forEach((image, index) => {
  image.addEventListener("click", () => {
    currentImageIndex = index;
    updateModalImage();

    modal.style.display = "flex";

    closeBtn.addEventListener("click", closeModal);
    prevBtn.addEventListener("click", showPreviousImage);
    nextBtn.addEventListener("click", showNextImage);
  });
});

function updateModalImage() {
  const selectedImage = galleryImages[currentImageIndex];
  modalImage.src = selectedImage.src;
  modalImage.alt = selectedImage.alt;

  if (currentImageIndex === 0) {
    prevBtn.style.display = "none";
  } else {
    prevBtn.style.display = "block";
  }

  if (currentImageIndex === galleryImages.length - 1) {
    nextBtn.style.display = "none";
  } else {
    nextBtn.style.display = "block";
  }
}

function showPreviousImage() {
  if (currentImageIndex > 0) {
    currentImageIndex--;
    updateModalImage();
  }
}

function showNextImage() {
  if (currentImageIndex < galleryImages.length - 1) {
    currentImageIndex++;
    updateModalImage();
  }
}

function closeModal() {
  modal.style.display = "none";
  closeBtn.removeEventListener("click", closeModal);
  prevBtn.removeEventListener("click", showPreviousImage);
  nextBtn.removeEventListener("click", showNextImage);
}

// this is the code for stopping cache override
