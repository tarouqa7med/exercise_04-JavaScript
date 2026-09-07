
let plus_icon = document.getElementById("plus"),
  modal = document.getElementById("modal");

plus_icon.addEventListener("click", function () {
  console.log(plus_icon);
}) 

plus_icon.addEventListener("click", () => {
  modal.classList.add("active");
  setTimeout(function () {
    modal.classList.add("show");
  }, 1); 
})