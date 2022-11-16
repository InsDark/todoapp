const addTask = async (title) => {
    const data = new FormData()
    data.append('title', title)
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