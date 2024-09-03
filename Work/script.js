// Modal functionality for the gallery
document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modal-img");
    var captionText = document.getElementById("caption");
    var closeBtn = document.getElementsByClassName("close")[0];

    document.querySelectorAll('.gallery-item').forEach(function (img) {
        img.onclick = function () {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }
    });

    closeBtn.onclick = function () {
        modal.style.display = "none";
    }
});