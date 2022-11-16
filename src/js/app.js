import  {daysOfTheYear}  from "./daysOfYear.js"
import {checkYear}  from "./typeOfYear.js"
import {renderDays}  from "./renderDays.js"
import {getTasks}  from "./tasks.js"
import {renderTasks} from "./renderTasks.js"
import{addTask} from "./addtask.js"

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
const calendar = document.querySelector('.calendar')

let currentDay = new Date().getDate()
let indexMonth = new Date().getMonth()
let currentMonth = monthsOfYear[indexMonth]

const setDay = (day, month, year) => {
    dateTxt.textContent = `${day} of ${month} of ${year}`
}

setDay(currentDay, currentMonth, currentYear)

let days = daysOfTheYear.get(currentMonth)

renderDays(days, currentDay, calendar)

let frontDays = document.querySelectorAll('.btn-day')

document.addEventListener('click', (e)=> {
    if(e.target.classList.contains('btn-day')){
        let dayReq = e.target.textContent
        setDay(dayReq, currentMonth, currentYear)
        let res = getTasks(`${currentYear}-${indexMonth + 1}-${dayReq}`)
        frontDays[currentDay-1].classList.remove('current')
        frontDays[currentDay-1].classList.add('inactive')
        currentDay = dayReq
        frontDays[currentDay-1].classList.remove('inactive')
        frontDays[currentDay-1].classList.add('current')
        res.then(task => renderTasks(task));
    }
    if(e.target.classList.contains('fa-angle-right')){
        if(indexMonth === 11){
            indexMonth = 0;
            currentYear++;
            yearStatus = checkYear(currentYear);
            monthsOfYear = allMonths.filter((month) => {
                if(yearStatus === true){
                    return month !== 'February'
                } else{
                    return month !== 'FebruaryBis'
                }
            })
            currentMonth = monthsOfYear[indexMonth];
            setDay(currentDay, currentMonth, currentYear)
            renderDays(days, currentDay, calendar)
        } else{
            indexMonth++;
            currentMonth = monthsOfYear[indexMonth]
            days = daysOfTheYear.get(currentMonth)
            renderDays(days, currentDay, calendar)
            setDay(currentDay, currentMonth, currentYear)
            let res = getTasks(`${currentYear}-${indexMonth-1}-${currentDay}`)
            res.then((tasks) => renderTasks(tasks));
            frontDays = document.querySelectorAll('.btn-day');
        }
    }
    if(e.target.classList.contains('fa-angle-left')){
        if(indexMonth === 0){
            indexMonth = 11;
            currentYear--;
            yearStatus = checkYear(currentYear);
            monthsOfYear = allMonths.filter((month) => {
                if(yearStatus === true){
                    return month !== 'February'
                } else{
                    return month !== 'FebruaryBis'
                }
            })
            currentMonth = monthsOfYear[indexMonth];
            setDay(currentDay, currentMonth, currentYear)
            renderDays(days, currentDay, calendar)
        } else{
        indexMonth--;
        currentMonth = monthsOfYear[indexMonth]
        days = daysOfTheYear.get(currentMonth)
        renderDays(days, currentDay, calendar)
        setDay(currentDay, currentMonth, currentYear)
        let res = getTasks(`${currentYear}-${indexMonth-1}-${currentDay}`)
        res.then((tasks) => renderTasks(tasks));
        frontDays = document.querySelectorAll('.btn-day');
        }
    }
})
let tasksContainer = document.querySelector('.tasks-container')
let tasksAlert = document.querySelector('.task-msg')
let taskTitle = document.querySelector("[name='taskName']")
document.addEventListener('submit', (e) => {
    if(e.target.classList.contains('form-tasks')){
        e.preventDefault();
        if(!taskTitle.value.trim()){
            tasksAlert.textContent = 'The task should not be empty';
            setTimeout(() => {
                tasksAlert.textContent = '';
            }, 4000)
        } else{
            let res = addTask(taskTitle.value)
            taskTitle.value = '';
            res.then((resolve) => {
                if(resolve == 1){
                    tasksAlert.style.color = 'green'
                    tasksAlert.textContent = 'The task was successfully added';
                    setTimeout(() => {
                        tasksAlert.textContent = ''
                    }, 4000)
                } else{
                    tasksAlert.style.color = 'red'
                    tasksAlert.textContent = 'Something went wrong';
                    setTimeout(() => {
                        tasksAlert.textContent = ''
                    }, 4000)
                }
            })
        }
        
    }
})