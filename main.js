// Dice Roll Simulator Demo

// HTML Element for Output
let outputEl = document.getElementById("output");

// Menu Button
document.getElementById("go-btn").addEventListener("click", goBtnClicked);

function goBtnClicked() {
  // Get Menu Selection
  let selection = document.getElementById("menu").value;

  // Process Selection
  if (selection === "roll-once") {
    rollOnce();
  } else if (selection === "roll-five") {
    roll5Times();
  } else if (selection === "roll-n") {
    rollNTimes();
  } else if (selection === "snake-eyes") {
    snakeEyes();
  }
}

function rollOnce() {
  // Display Menu Title
  outputEl.innerHTML = "<h3>ROLL ONCE</h3>";

  // Random Dice Roll & Total
  let die1 = Math.floor(Math.random() * 6) + 1;
  let die2 = Math.floor(Math.random() * 6) + 1;
  let total = die1 + die2;

  // Add Results to output element
  let pEl = document.createElement("p");
  pEl.innerHTML = `${die1},${die2} (sum: ${total})`;
  outputEl.appendChild(pEl);
}

function roll5Times() {
  // Display Menu Title
  outputEl.innerHTML = "<h3>ROLL 5 TIMES</h3>";
  //use roll function to prevent repeated code
  doroll(5)
}

function rollNTimes() {
  // Display Menu Title
  let rollcount = +prompt('How many times would you like to roll');
  
  outputEl.innerHTML = `<h3>ROLL '${rollcount}' TIMES</h3>`;
  //this code doesn't need to be diffrent.
  doroll(rollcount)
}

function snakeEyes() {
  // Display Menu Title
  outputEl.innerHTML = "<h3>ROLL UNTIL SNAKE EYES</h3>";
  //create roll counter then roll the dice + increase counter once
  let rolls = 0;
  let die1 = Math.floor(Math.random() * 6) + 1;
  let die2 = Math.floor(Math.random() * 6) + 1;
  rolls++;
  //if die1 != die2 then reroll until it does
  while(die1 != die2){
    die1 = Math.floor(Math.random() * 6) + 1;
    die2 = Math.floor(Math.random() * 6) + 1;
    rolls++;
  }
  //add up the die
  let total = die1 + die2;
  // Add Results to output element
  let pEl = document.createElement("p");
  pEl.innerHTML = `${die1},${die2} (sum: ${total}) (rolls till snake eye: ${rolls})`;
  outputEl.appendChild(pEl);
}

function doroll(rollcount) {
  //create an array to store the values of the rolls
  let rolls = [];
  for(let i = 0; i < rollcount * 2; i++) {
    //roll and store it to an array index
    rolls[i] = Math.floor(Math.random() * 6) + 1;
  }
  console.log(rolls);
  //add up all the values in the array
  let total = 0;
  rolls.forEach(element => {
      total = total + element;
  });

  //add output element
  let pEl = document.createElement("p");
  //just calling the array here outputs the values seperated by commas
  //replace ',' with ', ' to allow for word wrapping
  pEl.innerHTML = `${rolls.toString().replaceAll(',',', ')} (sum: ${total})`;
  outputEl.appendChild(pEl);
}
