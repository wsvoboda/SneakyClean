// const myKey = config.API;

// function initMap() {
//   const sneakyCleanHouston = { lat: 29.795, lng: -95.569 };
//   const houstonMap = new google.maps.Map(
//     document.getElementById("houston-map"),
//     {
//       zoom: 12,
//       center: sneakyCleanHouston,
//     }
//   );
//   const houstonMarker = new google.maps.Marker({
//     position: sneakyCleanHouston,
//     map: houstonMap,
//   });
//   const sneakyCleanAtlanta = { lat: 33.848, lng: -84.373 };
//   const atlantaMap = new google.maps.Map(
//     document.getElementById("atlanta-map"),
//     {
//       zoom: 12,
//       center: sneakyCleanAtlanta,
//     }
//   );
//   const atlantaMarker = new google.maps.Marker({
//     position: sneakyCleanAtlanta,
//     map: atlantaMap,
//   });
//   const sneakyCleanTampa = { lat: 27.947, lng: -82.452 };
//   const tampaMap = new google.maps.Map(document.getElementById("tampa-map"), {
//     zoom: 12,
//     center: sneakyCleanTampa,
//   });
//   const tampaMarker = new google.maps.Marker({
//     position: sneakyCleanTampa,
//     map: tampaMap,
//   });
// }

const houstonZipInputBox = document.querySelector(".houston-zip-code");
const houstonZipSearchButton = document.querySelector(
  ".houston-zip-search-button"
);
const houstonZipResponse = document.querySelector(".houston-zip-query-answer");

const checkZipHouston = async () => {
  const distanceArray = await fetch(
    `https://cors-anywhere.herokuapp.com/https://www.zipcodeapi.com/rest/5bHSHbDtrU53Uoo7b1f2izlJu31yIw3HynfGvj7GnM6VwwWWbto1Ahv4XyMCouW8/distance.json/77043/${houstonZipInputBox.value}/mile`
  );
  const distanceValue = await distanceArray.json();
  const distanceToLocation = distanceValue.distance; // gives distance in miles
  if (distanceToLocation <= 50) {
    houstonZipResponse.innerHTML = "We service your area!";
  } else if (distanceToLocation > 50) {
    houstonZipResponse.innerHTML = "We don't service your area.";
  } else {
    houstonZipResponse.innerHTML = "Please enter a valid zip code";
  }
};

houstonZipSearchButton.addEventListener("click", (e) => {
  checkZipHouston();
});

const atlantaZipInputBox = document.querySelector(".atlanta-zip-code");
const atlantaZipSearchButton = document.querySelector(
  ".atlanta-zip-search-button"
);
const atlantaZipResponse = document.querySelector(".atlanta-zip-query-answer");

const checkZipAtlanta = async () => {
  const distanceArray = await fetch(
    `https://cors-anywhere.herokuapp.com/https://www.zipcodeapi.com/rest/5bHSHbDtrU53Uoo7b1f2izlJu31yIw3HynfGvj7GnM6VwwWWbto1Ahv4XyMCouW8/distance.json/30305/${atlantaZipInputBox.value}/mile`
  );
  const distanceValue = await distanceArray.json();
  const distanceToLocation = distanceValue.distance; // gives distance in miles
  if (distanceToLocation <= 50) {
    atlantaZipResponse.innerHTML = "We service your area!";
  } else if (distanceToLocation > 50) {
    atlantaZipResponse.innerHTML = "We don't service your area.";
  } else {
    atlantaZipResponse.innerHTML = "Please enter a valid zip code";
  }
};

atlantaZipSearchButton.addEventListener("click", (e) => {
  checkZipAtlanta();
});

const tampaZipInputBox = document.querySelector(".tampa-zip-code");
const tampaZipSearchButton = document.querySelector(".tampa-zip-search-button");
const tampaZipResponse = document.querySelector(".tampa-zip-query-answer");

const checkZipTampa = async () => {
  const distanceArray = await fetch(
    `https://cors-anywhere.herokuapp.com/https://www.zipcodeapi.com/rest/5bHSHbDtrU53Uoo7b1f2izlJu31yIw3HynfGvj7GnM6VwwWWbto1Ahv4XyMCouW8/distance.json/33602/${tampaZipInputBox.value}/mile`
  );
  const distanceValue = await distanceArray.json();
  const distanceToLocation = distanceValue.distance; // gives distance in miles
  if (distanceToLocation <= 50) {
    tampaZipResponse.innerHTML = "We service your area!";
  } else if (distanceToLocation > 50) {
    tampaZipResponse.innerHTML = "We don't service your area.";
  } else {
    tampaZipResponse.innerHTML = "Please enter a valid zip code";
  }
};

tampaZipSearchButton.addEventListener("click", (e) => {
  checkZipTampa();
});
