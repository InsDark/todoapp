const removeTask = async (taskId) => {
    try{
        const data = new FormData();
        data.append('task-id', taskId);
        const req = await fetch(`http://localhost/TodoApp/api/delete.php`, {
            method: 'POST',
            body: data
        });
        const res = await req.json();
        return res;
    } catch(err){
        console.error(err)
    }
}
export{
    removeTask
}