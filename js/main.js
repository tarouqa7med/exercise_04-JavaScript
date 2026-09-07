
let plus = document.querySelectorAll(".plus"),
    modal = document.querySelector(".Modal");

plus.forEach(function (e) {
  e.addEventListener("click", function () {
    modal.style.display = "block";
  })
})