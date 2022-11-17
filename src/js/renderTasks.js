let tasksContainer = document.querySelector('.container-tasks')

const renderTasks = (arr) =>{
    if(arr) {
        tasksContainer.textContent = ' '
        arr.forEach(task =>{
            const div = document.createElement('div');
            div.classList.add('task-item');
            const {task_title, task_id} = task;
            div.setAttribute('task-id', task_id)
            div.innerHTML = `<h4>${task_title}</h4> <button class='btn-delete'><i class="fa-solid fa-trash"></i>Delete</button>`
            
            tasksContainer.appendChild(div);
        })
    } else {
        return null;
    }
}

export {
    renderTasks
}