const renderDays = (days, currentDay, calendar) => {
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
}

export {
    renderDays
}