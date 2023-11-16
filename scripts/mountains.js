"use strict"

const mountainList=document.getElementById('mountainList')


window.onload = function (){
initMountainDropdown();
mountainList.onchange=onMountainSelectionChanged;
}






function initMountainDropdown(){
    for (let mountain of mountainsArray) {
        let TheOption = new Option(mountain.name);
      
        mountainList.appendChild(TheOption);
      }
}

function onMountainSelectionChanged(){
   
        displayMountain.replaceChildren("");
        
        let selectedValue = mountainList.value;
      
         let selectedMountain = mountainsArray.find(
           (mountain) => mountain.name === selectedValue
         );
        addMountainToCard(selectedMountain); }


    


function addMountainToCard(info) {
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
    let cardElevationParagraphText = document.createTextNode(`Elevation:${info.elevation}`);
    cardElevationParagraph.appendChild(cardElevationParagraphText);
  
    let cardEffortParagraph = document.createElement("p");
    cardEffortParagraph.className = "card-text";
    cardBody.appendChild(cardEffortParagraph);
    let cardEffortParagraphText = document.createTextNode(
      `Skill Level:${info.effort}`
    );
    cardEffortParagraph.appendChild(cardEffortParagraphText);
  }