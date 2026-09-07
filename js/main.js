let plus = document.querySelectorAll(".plus"),
  close = document.querySelectorAll(".close"),
  next = document.querySelectorAll(".next"),
  prev = document.querySelectorAll(".prev"),
  modal = document.querySelector(".Modal"),
  box = document.querySelector(".box");

plus.forEach(function (e) {
  e.addEventListener("click", function () {
    modal.style.display = "block";
    setTimeout(function () {
      modal.style.opacity = "1";
    }, 1);
  });
});

prev.forEach(function (e) {
  e.addEventListener("click", function () {
    modal.style.opacity = "0";
    setTimeout(function () {
      modal.style.display = "none";
    }, 1000);
  });
});

modal.addEventListener("click", () => {
  console.log("Modal clicked");
  modal.style.opacity = "0";
    setTimeout(function () {
      modal.style.display = "none";
    }, 500);
  });

box.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("Box clicked");
});