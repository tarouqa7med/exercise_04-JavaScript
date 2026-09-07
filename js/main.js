
let plus = document.querySelectorAll(".plus"),
    close=document.querySelectorAll(".close"),
    modal = document.querySelector(".Modal");

plus.forEach(function (e) {
  e.addEventListener("click", function () {
    modal.style.display = "block";
    modal.style.opacity = "1";
  })
})

close.forEach(function (e) {
  e.addEventListener("click", function () {
    modal.style.display = "none";
    modal.style.opacity = "0";
    console.log("ijhkjh")
  });
});