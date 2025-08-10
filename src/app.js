import "bootstrap";
import "./style.css";



window.onload = function () {
  let who = ['The teacher','My neighbor','The firefighter','My best friend', 'My dog'];
  let action = ['kicked','painted','ate','lose','threw'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['after the meeting.','when the phone rang.','while I was cooking.','during the class.'];

  let randomWho = who[Math.floor(Math.random() * who.length)]
  let randomAction = action[Math.floor(Math.random() * action.length)]
  let randomWhat = what[Math.floor(Math.random() * what.length)]
  let randomWhen = when[Math.floor(Math.random() * when.length)]

  let newExcuse = (randomWho +' '+ randomAction +' '+ randomWhat +' '+ randomWhen);

  document.getElementById("excuse").innerHTML=(newExcuse);
  
  //write your code here
  console.log(newExcuse);
};
