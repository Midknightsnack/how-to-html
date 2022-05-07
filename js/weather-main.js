/**
 * Project: How-To-HTML
 * 
 * File: weather-main.js
 * Programmer: Florentino Becerra
 * Date: 04/29/2022
 * Revised: 05/06/2022
 * 
 * This script is responsible for pulling the weather based on the location
 * The API that will be used is the Open Weather Map API
 * and will be processed by the Fetch API, or via the fetch method
 * For the time being, data will be for a city in California
 */


/**  getWeather
 * This function is responsible for gathering data from Open Weather Map
 * via fetch API (fetch method)
 * The location being used for the time being is Fullerton, California
 * which is denoted by a city identifier that Open Weather Map provides
 * 
 * @return: void
 */

function getWeather() {
	// Paste the API key in between this variable's quotation marks
	// no additional pasting required after that
	const API_KEY = "";
	const cityId = 5351247;

	// Invoke the fetch API via the fetch method
	fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityId+ '&appid=' + API_KEY)
		.then(function(resp) { return resp.json() })
		.then(function(data) { displayWeather(data) });

}


/**  displayWeather
 * This function properly displays meaningful parts of a weather report
 * The temperature, location, and the condition are displayed
 * to the appropriate parts of the modal's section. 
 * 
 * @param: Data retrieved from the Open Weather Map API
 * 
 * @return: void
 */

function displayWeather( weatherData ) {
	// As open weather returns temperatures in Kelvin units, make the appropriate conversion
	let fTemp = Math.round(((parseFloat(weatherData.main.temp)-273.15)*1.8)+32);

	// Now place it all in the placeholders
	document.getElementById("location").innerHTML = "Current Weather For " + weatherData.name;
	document.getElementById("description").innerHTML = "Conditions: " + weatherData.weather[0].description + ".";
	document.getElementById("temp").innerHTML = "Temperature: " + fTemp + "&deg; F";
	document.getElementById("modalMsg").innerHTML = "Weather information displayed.";

	// Clear the accessible message
	setTimeout(clearAccessibleMsg, 4000);
}


/**  clearAccessibleMsg
 * Clear the modal's inner screen reader announcement when
 * a call from the setTimeout method has been performed
 * 
 * @return: void
 */

function clearAccessibleMsg() {
	document.getElementById("modalMsg").innerHTML = "";
}
