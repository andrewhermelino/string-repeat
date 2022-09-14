const dateFormater = (date) => {
    const day = date.getDate();
    const month = date.getMonth()+1;
    const year = date.getFullYear();

    const dayFormat = day < 10 ? '0'+day : ''+day;
    const monthFormat = month < 10 ? '0'+month : ''+month;
    const yearFormat = year;
    
    return `${dayFormat}/${monthFormat}/${yearFormat}`
}