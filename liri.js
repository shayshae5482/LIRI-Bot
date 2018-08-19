//var request = require("require");
require("dotenv").config();

//pull the keys.js codes//
var fs = require("fs");
var keys = require("./keys");
var Spotify = require("node-spotify-api");
//console.log(keys.Spotify);


//call the OMDB//
var request = require("request");

request("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy", function (error, response, body) {

  if (!error && response.statusCode === 200) {

    console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
  }

});

///read file for spotify//
fs.readFile("random.txt", "utf8", function (err, data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);

});



var spotify = new Spotify(keys.spotify);


//process.argv is an array of data that we are obtaining from user-input to use in our code
var nodeArgs = process.argv;

console.log(process.argv.length);
//show if the process.argv will pull. It pulled!!! Yeah!



