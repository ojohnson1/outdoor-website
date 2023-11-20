"use strict"
//HTML Elements
const mountainList=document.getElementById('mountainList')

//this happens when the page is "ready" all loaded in the browser, it's the first of our code to run..
window.onload = function (){
initMountainDropdown();
mountainList.onchange=onMountainSelectionChanged;
getSunsetForMountain();
}





//this is the dropdown populated with no selection
function initMountainDropdown(){
    for (let mountain of mountainsArray) {
        let TheOption = new Option(mountain.name);
      
        mountainList.appendChild(TheOption);
      }
}



//this happens when a new value is selected in the location dropdown
async function onMountainSelectionChanged(){
   
        displayMountain.replaceChildren("");
        
        let selectedValue = mountainList.value;
      
         let selectedMountain = mountainsArray.find(
           (mountain) => mountain.name === selectedValue
         );
        
         const sunsetData = await  getSunsetForMountain (
         selectedMountain.coords.lat,
         selectedMountain.coords.lng
         )
      
        addMountainToCard(selectedMountain,sunsetData); }

     
// Bootstrap card created programmatically that each object selected is displayed in
function addMountainToCard(info,sunsetData) {
    let cardItemDiv = document.createElement("div");
    cardItemDiv.className = "card";
    displayMountain.appendChild(cardItemDiv);
    let cardImg = new Image()
    cardImg.src= `images/${info.img}`
    cardImg.className="card-img-top" 

    cardItemDiv.appendChild(cardImg)

    let cardBody = document.createElement("div");
    cardBody.className = "card-body";
    cardItemDiv.appendChild(cardBody);
    let cardTitle = document.createElement("h5");
    cardTitle.classname = "card-title";
    cardBody.appendChild(cardTitle);
    let cardTitleTextNode = document.createTextNode(info.name);
    cardTitle.appendChild(cardTitleTextNode);
 
    let cardDescriptionParagraph = document.createElement("p");
    cardDescriptionParagraph.className = "card-text";
    cardBody.appendChild(cardDescriptionParagraph);
    let cardDescriptionParagraphText = document.createTextNode(
      `Description: ${info.desc}`
    );
    cardDescriptionParagraph.appendChild(cardDescriptionParagraphText);
  
    let cardElevationParagraph = document.createElement("p");
    cardElevationParagraph.className = "card-text";
    cardBody.appendChild(cardElevationParagraph);
    let cardElevationParagraphText = document.createTextNode(`Elevation: ${info.elevation}`);
    cardElevationParagraph.appendChild(cardElevationParagraphText);
  
    let cardEffortParagraph = document.createElement("p");
    cardEffortParagraph.className = "card-text";
    cardBody.appendChild(cardEffortParagraph);
    let cardEffortParagraphText = document.createTextNode(
      `Skill Level: ${info.effort}`
    );
    cardEffortParagraph.appendChild(cardEffortParagraphText);

    let cardSunRiseParagraph = document.createElement("p");
    cardSunRiseParagraph.className = "card-text";
    cardBody.appendChild(cardSunRiseParagraph);
    let cardSunRiseParagraphText = document.createTextNode(
      `Sunrise: ${sunsetData.results.sunrise} (UTC)`
    );
    cardSunRiseParagraph.appendChild(cardSunRiseParagraphText);

    let cardSunSetParagraph = document.createElement("p");
    cardSunSetParagraph.className = "card-text";
    cardBody.appendChild(cardSunSetParagraph);
    let cardSunSetParagraphText = document.createTextNode(
      `Sunset: ${sunsetData.results.sunset} (UTC)`
    );
    cardSunSetParagraph.appendChild(cardSunSetParagraphText);

  
  }


  // Sunset and Sunrise

  // function that can "fetch" the sunrise/sunset times
async function getSunsetForMountain(lat, lng){
  let response = await fetch(
  `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=today`);
  let data = await response.json();
  return data;
  } 