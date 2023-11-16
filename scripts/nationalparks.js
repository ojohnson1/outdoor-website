"use strict";
const radioBtns= document.querySelectorAll("input [name='flexRadio'] :checked");
const locationList = document.getElementById("locationList");
const displayParkDiv = document.getElementById("parkDisplay");
const parkTypeList = document.getElementById("parkTypeList");

//this happens when the page is "ready" all loaded in the browser, it's the first of our code to run..
window.onload = function () {
  initLocationDropdown();
  initParkTypeDropdown();
  locationList.onchange = onLocationListSelectionChanged;
  parkTypeList.onchange = onParkTypeSelectionChanged;
  locationRadio.onchange = onSelectionTypeChosen;
  parkTypeRadio.onchange = onSelectionTypeChosen;
  seeAllRadio.onchange = onSelectionTypeChosen;
  parkTypeList.style.display = "none";
  locationList.style.display = "none";
};

//this happens when a radio button is selected
function onSelectionTypeChosen() {
  if (locationRadio.checked) {
    displayParkDiv.replaceChildren("");
    locationList.style.display = "block";
    parkTypeList.style.display = "none";
   locationList.selectedIndex=0; // this causes the selected to return to the first option in the dropdown list if the dropdown was already used
 
  } else if (parkTypeRadio.checked) {
    displayParkDiv.replaceChildren("");
    parkTypeList.style.display = "block";
    locationList.style.display = "none";
    parkTypeList.selectedIndex=0;
    
  } else {
    displayParkDiv.replaceChildren("");
    parkTypeList.style.display = "none";
    locationList.style.display = "none";
    nationalParksArray.forEach((element) => addParkToCard(element));
  }
}



//this is called from window.onload
function initLocationDropdown() {
  for (let location of locationsArray) {
    let TheOption = new Option(location);
    locationList.appendChild(TheOption);
  }
}

//this is called from window.onload
function initParkTypeDropdown() {
  for (let type of parkTypesArray) {
    let TheOption = new Option(type);
    parkTypeList.appendChild(TheOption);
  }
}


//this happens when a new value is selected in the location dropdown
function onLocationListSelectionChanged() {
  displayParkDiv.replaceChildren("");
  let selectedValue = locationList.value;
  let specifiedLocations = nationalParksArray.filter(
    (location) => location.State === selectedValue
  );

  specifiedLocations.forEach((element) => addParkToCard(element));
}

//this happens when a new value is selected in the parktype dropdown
function onParkTypeSelectionChanged() {
  displayParkDiv.replaceChildren("");
  let selectedValue = parkTypeList.value;
  let specifiedParkType = nationalParksArray.filter((location) =>
    location.LocationName.toLocaleLowerCase().includes(selectedValue.toLocaleLowerCase())
   
  );
  specifiedParkType.forEach((element) => addParkToCard(element));
}

//this happens when it is called explicitely from code.
function addParkToCard(location) {
  let cardItemDiv = document.createElement("div");
  cardItemDiv.className = "card";
  parkDisplay.appendChild(cardItemDiv);
  let cardBody = document.createElement("div");
  cardBody.className = "card-body";
  cardItemDiv.appendChild(cardBody);
  let cardTitle = document.createElement("h5");
  cardTitle.classname = "card-title";
  cardBody.appendChild(cardTitle);
  let cardTitleTextNode = document.createTextNode(location.LocationName);
  cardTitle.appendChild(cardTitleTextNode);
  let cardSubtitle = document.createElement("h6");
  cardSubtitle.className = "card-subtitle mb-2";
  cardBody.appendChild(cardSubtitle);
  let cardSubtitleText = document.createTextNode(
    `${location.Address} \n ${location.City}, ${location.State} ${location.ZipCode}`
  );
  cardSubtitle.appendChild(cardSubtitleText);
  let cardPhoneParagraph = document.createElement("p");
  cardPhoneParagraph.className = "card-text";
  cardBody.appendChild(cardPhoneParagraph);
  let cardPhoneParagraphText = document.createTextNode(
    `Phone: ${location.Phone}`
  );
  cardPhoneParagraph.appendChild(cardPhoneParagraphText);

  let cardFaxParagraph = document.createElement("p");
  cardFaxParagraph.className = "card-text";
  cardBody.appendChild(cardFaxParagraph);
  let cardFaxParagraphText = document.createTextNode(`Fax:${location.Fax}`);
  cardFaxParagraph.appendChild(cardFaxParagraphText);

  let cardTypeParagraph = document.createElement("p");
  cardTypeParagraph.className = "card-text";
  cardBody.appendChild(cardTypeParagraph);
  let cardTypeParagraphText = document.createTextNode(
    `Type:${location.Location.type}`
  );
  cardTypeParagraph.appendChild(cardTypeParagraphText);
}
