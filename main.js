var images = ["images/img1.jpg","images/img2.jpg","images/img3.jpg","images/img4.jpg","images/img5.jpg","images/img6.jpg"];
var currentIndex = 0;
var ImageElement = document.getElementById("slide_img");

function changeImg () {
    ImageElement.style.opacity = 0;
    setTimeout(function() {
        ImageElement.src = images[currentIndex];
        ImageElement.style.opacity = 1;
        currentIndex = (currentIndex + 1) % images.length;
    }, 500);
}

setInterval(changeImg, 5000);