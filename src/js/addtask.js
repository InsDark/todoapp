const addTask = async (title) => {
    const data = new FormData()
    data.append('title', 'hola a todos')
    const req = await fetch(`http://localhost/TodoApp/api/post.php`, {
        method: 'POST',
        body: data
    })
    const res = await req.json()
    console.log(res);
} 


export {
    addTask
}