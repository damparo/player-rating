const playerName = document.getElementById("playerName");
const ballControl = document.getElementById("inputBallcontrol");
const passing = document.getElementById("inputPassing");
const shooting = document.getElementById("inputShooting");
const stamina = document.getElementById("inputStamina");
const fieldAwareness =document.getElementById("inputFieldawareness");
const saveBtn = document.getElementById("saveBtn");

saveBtn.addEventListener("click", function(event){

    event.preventDefault();
    const playerData = {


    playerNom: playerName.value.trim(),
    ballCon: ballControl.value.trim(),
    pass: passing.value.trim(),
    shoot: shooting.value.trim(),
    stam: stamina.value.trim(),
    fieldAware: fieldAwareness.value.trim(),

};

console.log(playerData);


})
// saveBtn.addEventListener("click", function(event){

// console.log("hello");

// });














