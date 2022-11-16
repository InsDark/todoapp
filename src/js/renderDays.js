const renderDays = (days, currentDay, calendar) => {
    calendar.textContent = '';
    days.forEach((day) => {
        const dayButton = document.createElement('button')
        dayButton.textContent = day
        dayButton.classList.add('btn-day')
        if(currentDay == day) {
            dayButton.classList.add('current')
        } else{
            dayButton.classList.add('inactive')
        }
        calendar.appendChild(dayButton)
    })
}

export {
    renderDays
}