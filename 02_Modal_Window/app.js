const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsShowModal = document.querySelectorAll(".show-modal");

// show modal
for (let i = 0; i < 3; i++) {
  btnsShowModal[i].addEventListener("click", function () {
    modal.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
  });
}

// close modal
btnCloseModal.addEventListener("click", function () {
  modal.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
});
