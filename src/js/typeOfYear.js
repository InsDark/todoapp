const checkYear = (year) => {
    let yearStatus = (year % 4 === 0) ? true : false;
    return yearStatus
}

export{
    checkYear
}