(function () {

    /*   const backgroundSection = document.getElementById("background-section")
      const PlayerCharacter = document.createElement("div");
  
      PlayerCharacter.classList.add("player-character");
      backgroundSection.appendChild(PlayerCharacter);
  
      PlayerCharacter.style.top = 0;
      PlayerCharacter.style.left = 0;
  
      let moveBy = 10;
  
      window.addEventListener("keydown", (event) => {
          switch (event.key) {
            case "ArrowLeft":
              PlayerCharacter.style.left =
                parseInt(PlayerCharacter.style.left) - moveBy + "px";
              break;
            case "ArrowRight":
              PlayerCharacter.style.left =
                parseInt(PlayerCharacter.style.left) + moveBy + "px";
              break;
            case "ArrowUp":
              PlayerCharacter.style.top =
                parseInt(PlayerCharacter.style.top) - moveBy + "px";
              break;
            case "ArrowDown":
              PlayerCharacter.style.top =
                parseInt(PlayerCharacter.style.top) + moveBy + "px";
              break;
          }
      })
  
   */

    const backgroundSection = document.getElementById("background-section");

    const PlayerCharacter = document.createElement("div");
    PlayerCharacter.classList.add("player-character");
    backgroundSection.appendChild(PlayerCharacter);

    PlayerCharacter.style.top = 0;
    PlayerCharacter.style.left = 0;

    let moveBy = 20;

    window.addEventListener("keydown", (event) => {
        switch (event.key) {
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
        }

       /*  if (event.key === "ArrowLeft") {
            PlayerCharacter.style.left =
                parseInt(PlayerCharacter.style.left) - moveBy + "px";
            PlayerCharacter.classList.add("rotateLeft")
            PlayerCharacter.classList.remove("rotateUp")
            PlayerCharacter.classList.remove("rotateRight")
            PlayerCharacter.classList.remove("rotateDown")
        } else if (event.key === "ArrowRight") {
            PlayerCharacter.style.left =
                parseInt(PlayerCharacter.style.left) + moveBy + "px";
            PlayerCharacter.classList.add("rotateRight")
            PlayerCharacter.classList.remove("rotateUp")
            PlayerCharacter.classList.remove("rotateLeft")
            PlayerCharacter.classList.remove("rotateDown")
        } else if (event.key === "ArrowUp") {
            PlayerCharacter.style.top =
                parseInt(PlayerCharacter.style.top) - moveBy + "px";
            PlayerCharacter.classList.add("rotateUp")
            PlayerCharacter.classList.remove("rotateLeft")
            PlayerCharacter.classList.remove("rotateRight")
            PlayerCharacter.classList.remove("rotateDown")
        } else if (event.key === "ArrowDown") {
            PlayerCharacter.style.top =
                parseInt(PlayerCharacter.style.top) + moveBy + "px";
            PlayerCharacter.classList.add("rotateDown")
            PlayerCharacter.classList.remove("rotateUp")
            PlayerCharacter.classList.remove("rotateRight")
            PlayerCharacter.classList.remove("rotateLeft")
        }
 */

    });


})();