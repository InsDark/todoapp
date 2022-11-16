const renderTasks = (arr) =>{
    if(arr) {
        arr.forEach(task =>{
            const {title} = task;
        })
    } else {
        return null;
    }
}

export {
    renderTasks
}