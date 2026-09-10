
function openModal() {
        modal.classList.add("active");
        setTimeout(function () {
                modal.classList.add("show");
        }, 1);
}
function closeModal() {
        modal.classList.remove("show");
        setTimeout(function () {
                modal.classList.remove("active");
        }, 500);
}
function getNextImage() {
        let nextImageIndex = ++imageIndex;

        if (nextImageIndex >= imagesArray.length) {
                nextImageIndex = 0;
                imageIndex = 0;
        }
        let newAttribute = imagesArray[nextImageIndex].getAttribute("src");
        modalImg.setAttribute("src", newAttribute);
}
function getNextNumber() {
        let nextLiIndex = ++LiIndex;

        if (nextLiIndex >= 9) {
                nextLiIndex = 0;
                LiIndex = 0;
        }
}
function getPrevImage() {
        let prevImageIndex = --imageIndex;
        
        if (prevImageIndex <= -1) {
                prevImageIndex = 8;
                imageIndex = 8;
        }
        let newAttribute = imagesArray[prevImageIndex].getAttribute("src");
        modalImg.setAttribute("src", newAttribute);
}
function getPrevNumber() {
        let prevLiIndex = --LiIndex;

        if (prevLiIndex <= -1) {
                prevLiIndex = 8;
                LiIndex = 8;
        }
}