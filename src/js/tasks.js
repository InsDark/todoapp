const getTasks = async() => {
    try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        const data = await res.json();
        console.log(data)
        return data;
    } catch (err){
        console.error(err)
    }
}

export {
    getTasks
}