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

const zipInputBox = document.querySelector(".zip-code");
const zipSearchButton = document.querySelector(".zip-search-button");
const zipResponse = document.querySelector(".zip-query-answer");

const checkZipHouston = async () => {
  const distanceArray = await fetch(
    `https://cors-anywhere.herokuapp.com/https://www.zipcodeapi.com/rest/5bHSHbDtrU53Uoo7b1f2izlJu31yIw3HynfGvj7GnM6VwwWWbto1Ahv4XyMCouW8/distance.json/77043/${zipInputBox.value}/mile`
  );
  const distanceValue = await distanceArray.json();
  const distanceToLocation = distanceValue.distance; // gives distance in miles
  if (distanceToLocation <= 50) {
    zipResponse.innerHTML = "We service your area!";
  } else if (distanceToLocation > 50) {
    zipResponse.innerHTML = "We don't yet service your area.";
  } else {
    zipResponse.innerHTML = "Please enter a valid zip code";
  }
};

zipSearchButton.addEventListener("click", (e) => {
  checkZipHouston();
});
