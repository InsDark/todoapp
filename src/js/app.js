import  {daysOfTheYear}  from "./daysOfYear.js"

console.log(daysOfTheYear);


const dateTxt = document.querySelector('.date')
const monthsOfYear = ['April','February','March', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

let currentDay = new Date().getDate()
let currentMonth = new Date().getMonth() -1
let currentYear = new Date().getFullYear()
dateTxt.textContent = `${currentDay} of ${monthsOfYear[currentMonth]} of ${currentYear}`

document.addEventListener('click', (e)=> {
    if(e.target.classList.contains('fa-angle-right')){
        currentDay++;
        setDay(currentDay, currentMonth, currentYear);
    }
    if(e.target.classList.contains('fa-angle-left')){
        currentDay--;
        setDay(currentDay, currentMonth, currentYear)
    }
    if(currentDay >= 31) {
        currentDay = 0;
        currentMonth++;
    }
    if(currentMonth >=11){
        currentMonth = 0;
        currentYear++;   }
})
const setDay = (day, month, year) => {
    dateTxt.textContent = `${day} of ${monthsOfYear[month]} of ${year}`
}
