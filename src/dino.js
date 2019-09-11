export class DinoMaker {
  getDinoName() {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=1&words=1`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
  getDinoGif() {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `http://api.giphy.com/v1/gifs/random?api_key=${process.env.API_KEY}&rating=g&tag=dinosaur`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}

export class Conversation {
  generateFact() { // Conversation only has 1 method and that's it. Not a property.
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://uselessfacts.jsph.pl/random.json?language=en`; // unique to this promise. unique API. Sometimes a key isn't needed; only the URL
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}
