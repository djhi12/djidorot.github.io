
let daynames = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
]

let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

let d = new Date();
let dayName = daynames[d.getDay()];
let monthName = months[d.getMonth()];
let year = d.getFullYear();
let fulldate = dayName + ", " + d.getDate() + " " + monthName + ", " + year;

/*--monthName---*/
document.getElementById("Date").innerHTML = fulldate;

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}



/*---------------------------------------WIND CHILL--------------------------------------------------------*/
/*
 *Add a computed wind chill value to the weather summary on the town page.
 *Get the two input values of temperature and wind speed.
 *Either calculate and display the windchill factor value or display "N/A"
  (not applicable) if the input values did not meet the requirements.
 */

 // Formula = f = 35.74 + 0.6215 * (t) - 35.75 * s**0.16 + 0.4275 * t * s**0.16
 // f = wind chill factor in Fahrenheit
 // t = air average temperature in Fahrenheit
 // s = wind speed in miles per hour.

 // Input requirements: Windchill temperature is officially defined for temperatures 
 // at or below 10 °C (50 °F) and wind speeds above 4.8 kilometers per hour (3.0 mph).

 // #weatherSummary
 // #Currently
 // #High
 // #windChill
 // #Humidity
 // #windSpeed

 // 




 let t = ParseInt(document.getElementById("Currently").value);
 let s = ParseInt(document.getElementById("windSpeed").value);

 if (f ) {
 }

 let f = 35.74 + 0.6215 * (t) - 35.75 * s**0.16 + 0.4275 * t * s**0.16;

document.getElementById("output").innerHTML = f;

 