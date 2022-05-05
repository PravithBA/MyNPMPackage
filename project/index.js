//array check
function has(array,str){
    if(!array || !str )
        return console.error('Didnt pass arguments')
    if(typeof array != 'array')
        array = [array]
    return (array.some(word => {return word.includes(str)}))
}
//date comparison
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
        case 'weeks':return (date1-date2)/(1000 * 60 * 60 * 24 * 7)
        case 'months':return (date1.getMonth()-date2.getMonth())+((date1.getYear()-date2.getYear())*12)
        case 'years':return date1.getYear()-date2.getYear()
        default:return 'Invalid Format'
    }
}
//rewrite json
function reWriteJson(jsonfile,newData) {
  const info = JSON.stringify(newData)
  fs.writeFile(`${jsonfile}`, info, err=>{
    if (err) throw err;
    return{sucess:true,path:jsonfile}
})
}
//write json
function writeJson(jsonfile,newData) { 
    var data = fs.readFileSync(jsonfile);
    var obj = JSON.parse(data);
    const rData = Object.assign(obj, newData);
    fs.writeFile (`${jsonfile}`, JSON.stringify(rData), function(err) {
        if (err) throw err;
        return{sucess:true,path:jsonfile}
        }
    );
}
//edit json
function editJson(jsonfile,Data,isMerge){
    if(isMerge)
        return reWriteJson(jsonfile,Data)
    return writeJson(jsonfile,Data)
}

module.exports = {has,dateTimeDifference,reWriteJson,writeJson,editJson}