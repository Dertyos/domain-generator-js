/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { Generator } from "webpack";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let extension = [".com", ".org", ".net", ".tv"];

  function randomBetween(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function domainGenerator() {
    let p = pronoun[randomBetween(1, 2) - 1];
    let a = adj[randomBetween(1, 2) - 1];
    let n = noun[randomBetween(1, 2) - 1];
    let e = extension[randomBetween(1, 4) - 1];

    let domain = p + a + n + e;
    return domain;
  }
  document.getElementById("generator").innerHTML = domainGenerator();
};
