
myBtn = document.querySelectorAll("button");

myBtn.forEach(function(myBtn) {
  myBtn.addEventListener("click", function() {
    alert("Hello World!");
  });
});