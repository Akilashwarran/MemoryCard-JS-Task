document.addEventListener("DOMContentLoaded", function () {
    let cards = document.querySelectorAll(".card");
    let audio = document.getElementById('myAudio');
    let timerDisplay = document.getElementById('timer');
    let flipsDisplay = document.getElementById('flips');
    let flips = 0;
    let matchedCards = [];
    let firstCard, secondCard;
    let lockBoard = false;
    let timer;

    function flipCard() {
        if (lockBoard) return;
        if (this === firstCard) return;

        this.classList.add('flipped');

        // Play audio
        audio.play();
        flips++;
        flipsDisplay.textContent = 'Flips: ' + flips;
        // Animation
       

        if (!firstCard) {
            firstCard = this;
            return;
        }

        secondCard = this;
        checkForMatch();
         startTimer(19, timerDisplay);
    }
    function addSprinkles() {
    let colors = ["#ffcc00", "#ff6699", "#66ccff", "#99ff99"];
    let shapes = ["circle", "square", "triangle"];

    let numSprinkles = 50;
    for (let i = 0; i < numSprinkles; i++) {
        let color = colors[Math.floor(Math.random() * colors.length)];
        let shape = shapes[Math.floor(Math.random() * shapes.length)];
        let sprinkles = document.createElement("div");
        sprinkles.classList.add("sprinkles");
        sprinkles.style.backgroundColor = color;
        sprinkles.style.borderRadius = shape === "circle" ? "50%" : shape === "triangle" ? "50% 50% 0 0" : "0";
        sprinkles.style.left = Math.random() * 100 + "%";
        sprinkles.style.top = Math.random() * 100 + "%";
        document.body.appendChild(sprinkles); 
        setTimeout(() => {
            sprinkles.remove();
        }, Math.random() * 1000);
    }
}

    function checkForMatch() {
        let isMatch = firstCard.querySelector('img').src === secondCard.querySelector('img').src;

        if (isMatch) {
            disableCards();
            matchedCards.push(firstCard, secondCard);
            if (matchedCards.length === cards.length) {
                clearInterval(timer);
                openModal('Congratulations! You won!');
            }
        } else {
            lockBoard = true;
            setTimeout(() => {
                firstCard.classList.remove('flipped');
                secondCard.classList.remove('flipped');
                resetBoard();
            }, 1000);
        }
       
    }

    function disableCards() {
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
         addSprinkles();
        resetBoard();
    }

    function resetBoard() {
        [firstCard, secondCard] = [null, null];
        lockBoard = false;
    }

    function startTimer(duration, display) {
        timer = duration; 
        let minutes, seconds;
        let interval = setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = "Time: " + minutes + ":" + seconds;

                    if (--timer < 0) {
                clearInterval(interval);
                lockBoard = true;
                display.textContent = "Time: 00:00 " ;
                openModal('Time is up!');

            }

        }, 1000);
    }

    cards.forEach(card => card.addEventListener('click', flipCard));

   

    var imgPaths = [
        "assets/praba.jpeg",
        "assets/mukesh.jpeg",
        "assets/karthik.jpeg",
        "assets/sunil.jpeg",
        "assets/srija.jpeg",
        "assets/vidhya.jpeg"
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
        cards.forEach(function (card, index) {
            card.src = shuffledPaths[index];
            card.parentElement.classList.remove('flipped');
        });
    }


    setImgSrc();


    var refreshbtn = document.querySelector('button');
    refreshbtn.addEventListener('click', function() {
        location.reload();
    });

});


document.addEventListener("DOMContentLoaded", function() {

  
});




var modal = document.getElementById("myModal");


var span = document.getElementsByClassName("close")[0];


function openModal(message) {
  document.getElementById('modal-message').textContent = message;
  modal.style.display = "block";
}


span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}




