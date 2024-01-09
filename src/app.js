/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {};
document.querySelector("#excuse").innerHTML = excuseGenerator();

function excuseGenerator() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  const whoRandom = Math.floor(Math.random() * who.length);
  const actionRandom = Math.floor(Math.random() * action.length);
  const whatRandom = Math.floor(Math.random() * what.length);
  const whenRandom = Math.floor(Math.random() * when.length);
  return (
    who[whoRandom] +
    " " +
    action[actionRandom] +
    " " +
    what[whatRandom] +
    " " +
    when[whenRandom]
  );
}
