const playerName = document.getElementById("playerName");
const ballControl = document.getElementById("inputBallcontrol");
const passing = document.getElementById("inputPassing");
const shooting = document.getElementById("inputShooting");
const stamina = document.getElementById("inputStamina");
const fieldAwareness = document.getElementById("inputFieldawareness");
const saveBtn = document.getElementById("saveBtn");
const playerScore = document.getElementById("score");
const message1 = document.getElementById("message")

// create function if input is left blank


function displayError (message) {

  message1.textContent = message;


}






saveBtn.addEventListener("click", function (event) {
  event.preventDefault();





if (playerName.value === "" || ballControl.value === "" || passing.value === "" || shooting.value  === "" || stamina.value === "" || fieldAwareness.value === ""){
  displayError("Please fill out all fields");
};



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
  function addScores (){


    const overallScore = parseInt(ballControl.value) + parseInt(passing.value) + parseInt(shooting.value) + parseInt(stamina.value) + parseInt(fieldAwareness.value)
    //  + passing + shooting + stamina + fieldAwareness;

    console.log(overallScore);


    playerScore.innerHTML = overallScore;





  }
 



//   console.log(addScores());



});
// saveBtn.addEventListener("click", function(event){

// console.log("hello");

// });
