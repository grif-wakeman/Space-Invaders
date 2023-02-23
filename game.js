(function () {


    const backgroundSection = document.getElementById("background-section");

    const PlayerCharacter = document.createElement("div");
    PlayerCharacter.classList.add("player-character");
    backgroundSection.appendChild(PlayerCharacter);

    PlayerCharacter.style.top = 0;
    PlayerCharacter.style.left = 0;

    let moveBy = 20;
    


    window.addEventListener("keydown", (event) => {
        switch (event.code) {
          case "ArrowLeft":
            PlayerCharacter.style.left =
              parseInt(PlayerCharacter.style.left) - moveBy + "px";
              
              PlayerCharacter.classList.remove("rotateUp")
              PlayerCharacter.classList.remove("rotateRight")
              PlayerCharacter.classList.remove("rotateDown")
              PlayerCharacter.classList.add("rotateLeft")
            break;
          case "ArrowRight":
            PlayerCharacter.style.left =
              parseInt(PlayerCharacter.style.left) + moveBy + "px";
              PlayerCharacter.classList.remove("rotateUp")
              PlayerCharacter.classList.remove("rotateLeft")
              PlayerCharacter.classList.remove("rotateDown")
              PlayerCharacter.classList.add("rotateRight")
            break;
          case "ArrowUp":
            
            PlayerCharacter.style.top =
              parseInt(PlayerCharacter.style.top) - moveBy + "px";
              
              PlayerCharacter.classList.remove("rotateLeft")
              PlayerCharacter.classList.remove("rotateRight")
              PlayerCharacter.classList.remove("rotateDown")
              PlayerCharacter.classList.add("rotateUp")
            break;
          case "ArrowDown":
            PlayerCharacter.style.top =
              parseInt(PlayerCharacter.style.top) + moveBy + "px";
              
              PlayerCharacter.classList.remove("rotateUp")
              PlayerCharacter.classList.remove("rotateRight")
              PlayerCharacter.classList.remove("rotateLeft")
              PlayerCharacter.classList.add("rotateDown")
            break;
          case "Space":
            const audio = new Audio("./sfx/blaster-2-81267.mp3")
            audio.volume = 0.2;
            audio.play();
        }


    });


})();