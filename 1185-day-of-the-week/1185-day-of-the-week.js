/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
var dayOfTheWeek = function(day, month, year) {

//      Given Date return day of week as string e.g "Sunday"



// 4) High Level Strategys

//      1. get day of week from date and return as string
var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
let getNewDate=new Date(year, month -1,day);
let getNewDate3=new Date(getNewDate)
let getDayOfWeek=getNewDate3.getDay();
return days[getDayOfWeek]
};