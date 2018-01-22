/* * * * * * * * * * * * * * * * * * * * * * * * * 
 * aBuddy, the Accountabilibuddy Bot             *
 * v0.0.1 - 2018-01-22                           *
 * Jordan Boggs                                  *
 * * * * * * * * * * * * * * * * * * * * * * * * *
 */

/*
 * REMINDER SCHEDULE
 * ------------
 * Sun      Mon       Tue       Wed       Thu       Fri       Sat   
 * Gym                Gym                 Gym                 Gym
 * Meditate Meditate  Meditate  Meditate  Meditate  Meditate  Meditate
 * Meds     Meds      Meds      Meds      Meds      Meds      Meds
 * ----------------NIGHT TIME ONLY-------------------------------------
 * To-do    To-do     To-do     To-do     To-do     To-do     To-do
 * --------------------------------------------------------------------
 * Once in week
 * Deep condition and wash hair
 */

const bud = "#buddy-chat";
const user = "#user-chat";
const day = new Date().getDay();
const hour = new Date().getHours();

let today = "";
let yes = 0;
let no = 0;

$(document).ready(function() {
  $(bud).html(
    `<h1>Welcome, Britney!</h1>
    <p>It's me, your friend and buddy, aBuddy the Accountabilibuddy Bot!</p>`
  );
  $(user).html(
    `<button id="greetings">Hi, buddy!</button>` 
  );
});

$(document).on("click", "#greetings", function() {
  $(bud).html(
    `<p>I'm going to ask you some questions so we can track your productivity. Remember, you agreed to this earlier so you'd better tell the truth!</p>`
  );
  $(user).html(`<button id="continue1">Okay...</button>`);
});

// These functions ask you what you've done
const meditate = function() {
  // Question prompt
  $(bud).html(
    `<p></p>`
  )
};

const gym = function() {
  // Question prompt
  $(bud).html(
    `<p>Since today is ${today}, that means it's a gym day! Did you work out 
    today?</p>`
  );
  $(user).html(
    `<button id="gym-yes" class="yes-button">Yes</button>
     <button id="gym-no" class="no-button">No</button>`
  );
  
  // Result
  $(document).on("click", "#gym-yes", function() {
    yes++;
    $(user).html("");
    $(bud).html(
      `<p>Hey, not bad! Keep up the good work!</p>`
    );
    setTimeout(meditate(), 1500);
  });
  
  $(document).on("click", "#gym-no", function() {
    no++;
    $(user).html("");
    $(bud).html(
      `<p>Aw, too bad. Don't forget to go tomorrow!</p>`
    );
    setTimeout(meditate(), 1500); 
  });
};

// This sets off the chain reaction of prompts
const reflection = function() {
  switch (day) {
    case 0:
      today = "Sunday";
      gym();
      break;
    case 1:
      today = "Monday";
      meditate();
      break;
    case 2:
      today = "Tuesday";
      gym();
      break;
    case 3:
      today = "Wednesday";
      meditate();
      break;
    case 4:
      today = "Thursday";
      gym();
      break;
    case 5:
      today = "Friday";
      meditate();
      break;
    case 6:
      today = "Saturday";
      gym();
      break;
  }
};
$(document).on("click", "#continue1", reflection());
