/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let extension = [".com", ".org", ".net", ".tv"];

function domainGenerator() {
  var domain = "";
  for (let x of pronoun) {
    for (let j of adj) {
      for (let a of noun) {
        for (let i of extension) {
          domain += "<p>" + x + j + a + i + "</p>";
        }
      }
    }
  }
  return domain;
}

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  document.querySelector("#generator").innerHTML = domainGenerator();
};
