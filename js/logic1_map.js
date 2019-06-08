// Each Hq object contains the Company's name, Exchange, Symbol, Industry, Address, Latitude and Longitude
var HqData = myData;
console.log(HqData)
// An array which will be used to store created cityMarkers
var HqMarkers = [];


// Loop through the HQ array and create one marker for each companies object
var location1 = [];
for (var i = 0; i < HqData.length; i++) {
   location1 = [HqData[i]['Lat'],HqData[i]['Long']]
   HqMarkers.push(
       L.marker(location1).bindPopup("<h1>" + HqData[i].Company + "</h1> <hr> <h2>Address: " + HqData[i].Address + "</h2> <hr> <h3>Ticker: " + HqData[i].Symbol + "</h3> <hr> <h4>Exchange: " + HqData[i].Exchange + "</h4>")
   );
};
// Add all the cityMarkers to a new layer group.
// Now we can handle them as one group instead of referencing each individually
var HqLayer = L.layerGroup(HqMarkers);

console.log(HqMarkers);
// Define variables for our tile layers
var light = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
 maxZoom: 12,
 id: "mapbox.light",
 accessToken: API_KEY
});
console.log("2");
var dark = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
 // attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
 maxZoom: 12,
 id: "mapbox.dark",
 accessToken: API_KEY
});
console.log("3");
// Only one base layer can be shown at a time
var baseMaps = {
 "Light": light,
 "Dark": dark
};
console.log("4");
// Overlays that may be toggled on or off
var overlayMaps = {
 "Headquaters": HqLayer
};
console.log("5");
// Create map object and set default layers
var myMap = L.map("map", {
 center: [37.09, -95.71],
 zoom: 6,
 layers: [light, HqLayer]
});
console.log("6");
// Pass our map layers into our layer control
// Add the layer control to the map
L.control.layers(baseMaps, overlayMaps).addTo(myMap);
    