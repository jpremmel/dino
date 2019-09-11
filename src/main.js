import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DinoMaker } from "./dino.js";

$(document).ready(function() {
  $("#dino").submit(function(event) {
    event.preventDefault();
    $("#dino").hide();
    let dinoMaker = new DinoMaker();
    let namePromise = dinoMaker.getDinoName();
    let gifPromise = dinoMaker.getDinoGif();

    namePromise.then(function(response) {
      const dinoName = JSON.parse(response);
      $('.output').append(`<h4>Your dino's name is ${dinoName[0][0]}</h4>`);
    });

    gifPromise.then(function(response) {
      const gifResponse = JSON.parse(response);
      $(".output").append(`<img src="${gifResponse.data.images.downsized_large.url}">`);
    });



    $(".output").show();


  });

});
