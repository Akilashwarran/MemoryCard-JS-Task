document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");
    var audio = document.getElementById('myAudio');
    cards.forEach((card) => {
        card.addEventListener("click", function () {
            card.classList.toggle("flipped");

            //----------- audio --------------

            audio.play()
 
            //----------- animations -------------------

            const colors = ["#ffcc00", "#ff6699", "#66ccff", "#99ff99"];
            const shapes = ["circle", "square", "triangle"];

            const numSprinkles = 50;
            for (let i = 0; i < numSprinkles; i++) {
                const color = colors[Math.floor(Math.random() * colors.length)];
                const shape = shapes[Math.floor(Math.random() * shapes.length)];
                const sprinkles = document.createElement("div");
                sprinkles.classList.add("sprinkles");
                sprinkles.style.backgroundColor = color;
                sprinkles.style.borderRadius = shape === "circle" ? "50%" : shape === "triangle" ? "50% 50% 0 0" : "0";
                sprinkles.style.left = Math.random() * 100 + "%";
                sprinkles.style.top = Math.random() * 100 + "%";
                card.appendChild(sprinkles);
                setTimeout(() => {
                    sprinkles.remove();
                }, Math.random() * 1000);
            }
        });
    });
});

//----------------------- selection types -------------------

// var modal = document.getElementById("modal");

// var btn = document.getElementById("openModalBtn");

// var span = document.getElementsByClassName("close")[0];

// btn.onclick = function() {
//   modal.style.display = "block";
// }

// span.onclick = function() {
//   modal.style.display = "none";
// }

// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }
// ----------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function() {

    var imgPaths = [
        "assets/akil.jpeg",
        "assets/asha.jpeg",
        "assets/jey.webp",
        "assets/theekshi.webp",
        "assets/pattabi.jpeg",
        "assets/vicky.jpeg"
    ];

  
    function shuffle(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    
    function setImgSrc() {
        var shuffledPaths = shuffle(imgPaths.concat(imgPaths)); 
        var cards = document.querySelectorAll('.card img');
        cards.forEach(function(card, index) {
            card.src = shuffledPaths[index];
            card.parentElement.classList.remove('flipped'); 
        });
    }

   
    setImgSrc();

  
    var refreshbtn = document.querySelector('button');
    refreshbtn.addEventListener('click', function() {
        setImgSrc();
    });
});

