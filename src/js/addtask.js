const addTask = async (title, time) => {
    const data = new FormData()
    data.append('title', title)
    data.append('time', time)
    const req = await fetch(`http://localhost/TodoApp/api/post.php`, {
        method: 'POST',
        body: data
    })
    const res = await req.json()
    return res;
} 


export {
    addTask
}