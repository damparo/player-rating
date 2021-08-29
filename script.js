const playerName = document.getElementById("playerName");
const ballControl = document.getElementById("inputBallcontrol");
const passing = document.getElementById("inputPassing");
const shooting = document.getElementById("inputShooting");
const stamina = document.getElementById("inputStamina");
const fieldAwareness = document.getElementById("inputFieldawareness");
const saveBtn = document.getElementById("saveBtn");
const playerScore = document.getElementById("score");
const message1 = document.getElementById("message");
const cardArea = document.getElementById("playerArea");

// array for all cards information 
let cardInfo = [];

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

 
  let overallScore;
  addScores();
  function addScores() {
    overallScore =
      parseInt(ballControl.value) +
      parseInt(passing.value) +
      parseInt(shooting.value) +
      parseInt(stamina.value) +
      parseInt(fieldAwareness.value);
    

    console.log(overallScore);

    playerScore.innerHTML = overallScore;
  }

  playerData.individualScore = overallScore;

  console.log(playerData)



  cardInfo.push(playerData);

  console.log(cardInfo);


  localStorage.setItem("player", JSON.stringify(cardInfo));


  let getPlayerCardInfor = JSON.parse(localStorage.getItem("player")) || [];
  console.log(getPlayerCardInfor);

  const singlePlayerCard = document.createElement("div");
  singlePlayerCard.setAttribute("class", "card");

  
  const singleRowCard = document.createElement("div");
  singleRowCard.setAttribute("class", "row");


  const singlePlayerNameCol =  document.createElement("div");
  singlePlayerNameCol.setAttribute("class", "col");

  const singlePlayerScoreCol =  document.createElement("div");
  singlePlayerScoreCol.setAttribute("class", "col");

  singlePlayerCard.appendChild(singleRowCard);
  for (let i = 0; i < getPlayerCardInfor.length; i++) {

    console.log(getPlayerCardInfor[i]);
    // let singlePlayerCard = document.createElement("div");
    singlePlayerNameCol.innerHTML = "";
    singlePlayerScoreCol.innerHTML = "";

    singlePlayerNameCol.innerHTML = getPlayerCardInfor[i].playerNom;
    singlePlayerScoreCol.innerHTML = getPlayerCardInfor[i].individualScore;

    singleRowCard.appendChild(singlePlayerNameCol);
    singleRowCard.appendChild(singlePlayerScoreCol);
    singlePlayerCard.appendChild(singleRowCard);
    singlePlayerCard.classList.add("grab-card");
    singlePlayerCard.setAttribute("data-player", getPlayerCardInfor[i].playerNom);
      cardArea.appendChild(
        // singlePlayerCard.setAttribute("class", "card")
      singlePlayerCard
      );


  }






  }
 
});

