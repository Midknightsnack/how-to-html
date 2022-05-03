/**
 * Project: How-To-HTML
 * 
 * File: weather-main.js
 * Programmer: Florentino Becerra
 * Date: 04/29/2022
 * Revised: 05/03/2022
 * 
 * This script is responsible for pulling the weather based on the location
 * The API that will be used is the Open Weather Map API
 * and will be processed by the Fetch API, or via the fetch method
 * For the time being, data will be for a city in California
 */


/**  getWeather
 * This function is responsible for gathering data from Open Weather Map
 * via fetch API
 * The location being used for the time being is a city in California
 * which is denoted by a city identifier that Open Weather Map provides
 * 
 * @return: void
 */

function getWeather() {
	const key = "e446226a7ddf615423c52fe9df7f137a";
	const cityId = 5351247;

	// Invoke the fetch API via the fetch method
	fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityId+ '&appid=' + key)
		.then(function(resp) { return resp.json() })
		.then(function(data) { displayWeather(data) });

}  // End of "getWeather"


/**  displayWeather
 * This function properly displays meaningful parts of a weather report
 * 
 * @param: Data retrieved from the Open Weather Map API
 * 
 * @return: void
 */

function displayWeather( weatherData ) {
	// As open weather returns temperatures in Kelvin units, make the appropriate conversion
	// let cTemp = Math.round(parseFloat(d.main.temp)-273.15);
	let fTemp = Math.round(((parseFloat(weatherData.main.temp)-273.15)*1.8)+32);

	// Now place it all in the placeholders
	document.getElementById("location").innerHTML = "Current Weather For " + weatherData.name;
	document.getElementById("description").innerHTML = "Conditions: " + weatherData.weather[0].description + ".";
	document.getElementById("temp").innerHTML = "Temperature: " + fTemp + "&deg; Fahrenheit";
	document.getElementById("modalMsg").innerHTML = "Weather information displayed.";

	// Clear the accessible message
	setTimeout(clearAccessibleMsg, 4000);
}  // End of "displayWeather"


function clearAccessibleMsg() {
	document.getElementById("modalMsg").innerHTML = "";
}  // End of "clearAccessibleMsg"
