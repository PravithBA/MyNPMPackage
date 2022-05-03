function has(array,str){
    if(!array || !str )
        return console.error('Didnt pass arguments')
    if(typeof array != 'array')
        array = [array]
    return (array.some(word => {return word.includes(str)}))
}
function dateTimeDifference(date1,date2,format){
    if(new Date(Date.parse(date1)) < new Date(Date.parse(date2))){
        let temp = new Date(Date.parse(date1))
        date1 = new Date(Date.parse(date2))
        date2 = temp
    }
    else{
        date1 = new Date(Date.parse(date1))
        date2 = new Date(Date.parse(date2))
    }
    switch(format){
        case 'milliseconds':return (date1-date2)/1000
        case 'seconds':return (date1-date2)/(1000*60)
        case 'minutes':return (date1-date2)/(1000 * 60 * 60)
        case 'days':return (date1-date2)/(1000 * 60 * 60 * 24)
        case 'months':return (date1.getMonth()-date2.getMonth())+((date1.getYear()-date2.getYear())*12)
        case 'years':return date1.getYear()-date2.getYear()
        default:return 'Invalid Format'
    }
}
module.exports = {has,dateTimeDifference}

















