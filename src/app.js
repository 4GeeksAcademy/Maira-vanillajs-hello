import "bootstrap";
import "./style.css";

window.onload = function () {
  let who = ['The teacher', 'My neighbor', 'The firefighter', 'My best friend', 'My dog'];
  let action = ['kicked', 'painted', 'ate', 'lose', 'threw'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['after the meeting.', 'when the phone rang.', 'while I was cooking.', 'during the class.'];


  function randomExcuse() {
    const randomWho = who[Math.floor(Math.random() * who.length)]
    const randomAction = action[Math.floor(Math.random() * action.length)]
    const randomWhat = what[Math.floor(Math.random() * what.length)]
    const randomWhen = when[Math.floor(Math.random() * when.length)]
    return `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;
  }


  document.getElementById("excuse").innerHTML = (randomExcuse());
  console.log(randomExcuse());

}



