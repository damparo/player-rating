const playerName = document.getElementById("playerName");
const ballControl = document.getElementById("inputBallcontrol");
const passing = document.getElementById("inputPassing");
const shooting = document.getElementById("inputShooting");
const stamina = document.getElementById("inputStamina");
const fieldAwareness = document.getElementById("inputFieldawareness");
const saveBtn = document.getElementById("saveBtn");

saveBtn.addEventListener("click", function (event) {
  event.preventDefault();




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



  }
 
//   console.log(addScores());



});
// saveBtn.addEventListener("click", function(event){

// console.log("hello");

// });
