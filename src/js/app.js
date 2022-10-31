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
    if(currentDay === day) {
        ancle.classList.add('current')
    } else{
        ancle.classList.add('inactive')
    }
    calendar.appendChild(ancle);
})
const frontDays = document.querySelectorAll('.calendar h3')

dateTxt.textContent = `${currentDay} of ${currenMonth} of ${currentYear}`

document.addEventListener('click', (e)=> {
    if(e.target.classList.contains('fa-angle-right')){
        currentDay++;
        frontDays[currentDay-2].classList.remove('current');
        frontDays[currentDay-1].classList.add('current')
        frontDays[currentDay-1].classList.remove('inactive')
        setDay(currentDay, Month, currentYear);
    }
    if(e.target.classList.contains('fa-angle-left')){
        currentDay--;
        frontDays[currentDay].classList.remove('current');
        frontDays[currentDay-1].classList.add('current')
        frontDays[currentDay-1].classList.remove('inactive')
        setDay(currentDay, Month, currentYear);
    }
})
const setDay = (day, month, year) => {
    dateTxt.textContent = `${day} of ${monthsOfYear[month]} of ${year}`
}
