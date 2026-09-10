let plusBtns = document.querySelectorAll(".col .plusBtn"),
        modal = document.getElementById("modal"),
        box = modal.firstElementChild,
        closeBtn = modal.querySelector(".close"),
        modalImg = document.querySelector(".Modal img"),
        nextBtn = modal.querySelector(".next"),
        prevBtn = modal.querySelector(".prev"),
        images = document.querySelectorAll(".image"),
        imagesArray = Array.from(images),
        li = document.querySelectorAll("li");
        li_Array = Array.from(li);

let imageIndex, LiIndex;

plusBtns.forEach(function (plusBtn) {
        plusBtn.addEventListener("click", function () {
                let currentImg = plusBtn.parentElement.previousElementSibling,
                        imgSrc = currentImg.getAttribute("src");
                imageIndex = imagesArray.indexOf(currentImg);

                modal.querySelector("img").setAttribute("src", imgSrc);
                openModal();
        });
});

modal.addEventListener("click", closeModal);

box.addEventListener("click", function (eee) {
        eee.stopPropagation();
});

closeBtn.addEventListener("click", closeModal);

nextBtn.addEventListener("click", getNextImage);

nextBtn.addEventListener("click", getNextNumber);

prevBtn.addEventListener("click", getPrevImage);

prevBtn.addEventListener("click", getPrevNumber);