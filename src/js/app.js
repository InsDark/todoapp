import  {daysOfTheYear}  from "./daysOfYear.js"

const monthsOfYear = [...daysOfTheYear.keys()];

const dateTxt = document.querySelector('.date')

let currentDay = new Date().getDate()
let Month = new Date().getMonth()
let currentYear = new Date().getFullYear()

let currenMonth = monthsOfYear[Month]

const calendar = document.querySelector('.calendar')
const days = daysOfTheYear.get(currenMonth)

days.forEach((day) => {
    const ancle = document.createElement('h3')
    ancle.textContent = day
    calendar.appendChild(ancle);
})

dateTxt.textContent = `${currentDay} of ${currenMonth} of ${currentYear}`

document.addEventListener('click', (e)=> {
    if(e.target.classList.contains('fa-angle-right')){
        currentDay++;
        setDay(currentDay, Month, currentYear);
    }
    if(e.target.classList.contains('fa-angle-left')){
        currentDay--;
        setDay(currentDay, Month, currentYear)
    }
    if(currentDay >= 31) {
        currentDay = 0;
        Month++;
    }
    if(Month >=11){
        Month = 0;
        currentYear++;   }
})
const setDay = (day, month, year) => {
    dateTxt.textContent = `${day} of ${monthsOfYear[month]} of ${year}`
}
