const playerName = document.getElementById("playerName");
const ballControl = document.getElementById("inputBallcontrol");
const passing = document.getElementById("inputPassing");
const shooting = document.getElementById("inputShooting");
const stamina = document.getElementById("inputStamina");
const fieldAwareness = document.getElementById("inputFieldawareness");
const saveBtn = document.getElementById("saveBtn");
const playerScore = document.getElementById("score");
const message1 = document.getElementById("message");

// create function if input is left blank

function displayError(message) {

  switch (message){
    case "Please fill out all fields":
      message1.textContent = message;
      break;
    case "everthingelse":
      message1.textContent = "";
      break;
  }
}

saveBtn.addEventListener("click", function (event) {
  event.preventDefault();

  if (
    playerName.value === "" ||
    ballControl.value === "" ||
    passing.value === "" ||
    shooting.value === "" ||
    stamina.value === "" ||
    fieldAwareness.value === ""
  ) {
    displayError("Please fill out all fields");
  }else { 
  displayError("everthingelse")
  const playerData = {
    playerNom: playerName.value.trim(),
    ballCon: ballControl.value,
    pass: passing.value,
    shoot: shooting.value,
    stam: stamina.value,
    fieldAware: fieldAwareness.value,
  };

  console.log(playerData);

  addScores();
  function addScores() {
    const overallScore =
      parseInt(ballControl.value) +
      parseInt(passing.value) +
      parseInt(shooting.value) +
      parseInt(stamina.value) +
      parseInt(fieldAwareness.value);
    

    console.log(overallScore);

    playerScore.innerHTML = overallScore;
  }
  }
 
});

