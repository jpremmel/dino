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
    let promise = dinoMaker.getDino();

    promise.then(function(response) {
      const dinoName = JSON.parse(response);


      $('.output').append(`<h4>Your dino's name is ${dinoName[0][0]}</h4>`);
    });




    $(".output").show();


  });

});
