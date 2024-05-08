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

//----------------------- selection types -------------------

// Get the modal
var modal = document.getElementById("modal");

// Get the button that opens the modal
var btn = document.getElementById("openModalBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
