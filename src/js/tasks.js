const getTasks = async(date) => {
    try {
        const req = await fetch(`http://localhost/TodoApp/api/${date}`)
        const data = await req.json();
        return data;
    } catch (err){
        console.error(err)
    }
}

export {
    getTasks
}