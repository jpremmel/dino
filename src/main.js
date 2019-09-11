import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DinoMaker, Conversation } from "./dino.js";


$(document).ready(function() {
  $("#dino").submit(function(event) {
    event.preventDefault();
    $("#dino").hide();
    let dinoMaker = new DinoMaker(); //imported from dino.js. Has the method getDinoName() defined within it.
    let name; //to create a variable where we will eventually store the dino's name for later use.

    let namePromise = dinoMaker.getDinoName();
    namePromise.then(function(response) {
      const dinoName = JSON.parse(response); // main nameless array in Postman
      name = dinoName[0][0]; //access the main array at index 0 and the subarray at index 0. 00 since we are only grabbing one word from one paragraph
      $('.output').append(`<h4>Your dino's name is ${name}!</h4>`);
      $('#dino-name').text(name); // name was declared on line 13 and defined on line 18
    });

    let gifPromise = dinoMaker.getDinoGif();
    gifPromise.then(function(response) {
      const gifResponse = JSON.parse(response);
      $(".output").append(`<img src="${gifResponse.data.images.downsized_medium.url}">`);
    });
    $(".output").show();
    $(".dino-name").text(name);
    $(".conversation").show();

    let conversation = new Conversation();
    $("#query").on("click", function() {
      let fact = conversation.generateFact(); //running generateFact on conversation (new instance of Conversation, declared in line 32) generateFact returns a new instance of Promise object.
      fact.then(function(response) { // .then only executes callback function after promise has been fulfilled.
        const generatedFact = JSON.parse(response);
        $('.conversation').append(`<p><strong>${name} says:</strong> "${generatedFact.text}"</p>`);
      })

    });
  });

});
