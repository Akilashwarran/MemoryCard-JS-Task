document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");
    var audio = document.getElementById('myAudio');
    cards.forEach((card) => {
        card.addEventListener("click", function () {
            card.classList.toggle("flipped");
            audio.play()
        });
    });
});
