
function openModal() {
        li.forEach(function (li) {
                li.classList.remove("active");
        })
        let currentLi = li_Array[imageIndex];
        currentLi.classList.add("active");
        
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
        nextImageIndex = ++imageIndex;

        if (nextImageIndex >= imagesArray.length) {
                nextImageIndex = 0;
                imageIndex = 0;
        }
        let newAttribute = imagesArray[nextImageIndex].getAttribute("src");
        modalImg.setAttribute("src", newAttribute);

        nextLiIndex = ++Li_Index;
        
        if (nextLiIndex >= li_Array.length) {
                nextLiIndex = 0;
                Li_Index = 0;
        }

        li.forEach(function (li) {
                li.classList.remove("active");
        })
        let currentLi = li_Array[imageIndex];
        currentLi.classList.add("active");
}
function getPrevImage() {
        prevImageIndex = --imageIndex;
        
        if (prevImageIndex <= -1) {
                prevImageIndex = imagesArray.length - 1;
                imageIndex = imagesArray.length - 1;
        }
        let newAttribute = imagesArray[prevImageIndex].getAttribute("src");
        modalImg.setAttribute("src", newAttribute);

        prevLiIndex = --Li_Index;

        if (prevLiIndex <= -1) {
                prevLiIndex = li_Array.length - 1;
                Li_Index = li_Array.length - 1;
        }

        li.forEach(function (li) {
                li.classList.remove("active");
        })
        let currentLi = li_Array[imageIndex];
        currentLi.classList.add("active");
}
function getClickedNumberAndImage() {
        li.forEach(function (li) {
                li.classList.remove("active");
        })
        this.classList.add("active");
}