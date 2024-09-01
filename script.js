const popup = document.getElementById("popup");
const popupImage = document.getElementById("popup--image");
const close = document.querySelector(".popup--close");
document
  .querySelectorAll(".portfolio--grid_container--grid_item")
  .forEach((item) => {
    item.addEventListener("click", function () {
      popup.style.display = "flex";
      popupImage.src = this.src;
    });
  });
close.addEventListener("click", function () {
  popup.style.display = "none";
});
popup.addEventListener("click", function (event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
});

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    alert(`Name: ${username}\nEmail: ${email}\nMessage: ${message}`);
  });
