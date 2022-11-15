const renderDays = (days, currentDay, calendar) => {
    const form = document.createElement('form')
    form.setAttribute('method', 'POST')
    form.setAttribute('action', './../php/getTask.php')
    
    days.forEach((day) => {
        const ancleHidden = document.createElement('input')
        ancleHidden.type = 'hidden'
        ancleHidden.value = day
        ancleHidden.name = 'dayId'

        const ancle = document.createElement('input')
        ancle.type = 'submit'
        ancle.value = day
        ancle.classList.add('btn-day')
        if(currentDay === day) {
            ancle.classList.add('current')
        } else{
            ancle.classList.add('inactive')
        }
        form.appendChild(ancleHidden)
        form.appendChild(ancle)
    })
    calendar.appendChild(form);
}

export {
    renderDays
}