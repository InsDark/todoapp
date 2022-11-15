import  {daysOfTheYear}  from "./daysOfYear.js"
import {checkYear}  from "./typeOfYear.js"
import {renderDays}  from "./renderDays.js"
import {getTasks}  from "./tasks.js"

let currentYear = new Date().getFullYear()
let yearStatus = checkYear(currentYear)

const allMonths = [...daysOfTheYear.keys()];

let monthsOfYear = allMonths.filter((month) => {
    if(yearStatus === true){
        return month !== 'February'
    } else{
        return month !== 'FebruaryBis'
    }
})

const dateTxt = document.querySelector('.date')

let currentDay = new Date().getDate()
let Month = new Date().getMonth()

let currentMonth = monthsOfYear[Month]

const calendar = document.querySelector('.calendar')

const setDay = (day, month, year) => {
    dateTxt.textContent = `${day} of ${month} of ${year}`
}

setDay(currentDay, currentMonth, currentYear)

let days = daysOfTheYear.get(currentMonth)

renderDays(days, currentDay, calendar)

let frontDays = document.querySelectorAll('.btn-day')

document.addEventListener('click', (e)=> {
    if(e.target.classList.contains('btn-day')){
        let task = getTasks();
        e.preventDefault()
        console.log(task)
        // frontDays[currentDay-1].classList.remove('current')
        // frontDays[currentDay-1].classList.add('inactive')
        // currentDay = e.target.textContent
        // frontDays[currentDay-1].classList.remove('inactive')
        // frontDays[currentDay-1].classList.add('current')
    }
    if(e.target.classList.contains('fa-angle-right')){
        if(currentDay === days.length){
            let childrens = Array.from(calendar.children)
            childrens.forEach((node)=>{
                node.remove()
            })
            currentDay = 1;
            Month++;
            currentMonth = monthsOfYear[Month]
            setDay(currentDay, currentMonth, currentYear)
            days = daysOfTheYear.get(currentMonth)
            renderDays(days, currentDay, calendar)
            frontDays = document.querySelectorAll('.calendar h3')
        } else {
            currentDay++;
            frontDays[currentDay-2].classList.remove('current');
            frontDays[currentDay-1].classList.add('current')
            frontDays[currentDay-1].classList.remove('inactive')
            setDay(currentDay, currentMonth, currentYear);
        }
    }
    if(e.target.classList.contains('fa-angle-left')){
        if(currentDay === 1){
            let childrens = Array.from(calendar.children)
            childrens.forEach((node)=>{
                node.remove()
            })
            Month--;
            currentMonth = monthsOfYear[Month]
            days = daysOfTheYear.get(currentMonth)
            currentDay = days.length;
            setDay(currentDay, currentMonth, currentYear)
            renderDays(days, currentDay, calendar)
            frontDays = document.querySelectorAll('.calendar h3')
        } else{
        currentDay--;
        frontDays[currentDay].classList.remove('current');
        frontDays[currentDay-1].classList.add('current')
        frontDays[currentDay-1].classList.remove('inactive')
        setDay(currentDay, currentMonth, currentYear);
        }
    }
})