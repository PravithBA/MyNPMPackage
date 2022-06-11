    const fs = require('fs')

    //array check
    function has(array,str){ 
        return array.some(word => word.includes(str))
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
        fs.writeFile(jsonfile, info, err=>{
        if(err){
        } else {
            return 'Done'
        }
        })
    }

    //write json
    function writeJson(jsonfile,newData) { 
        let data = fs.readFileSync(jsonfile);
        let obj = JSON.parse(data);
        const rData = Object.assign(obj, newData);
        fs.writeFile (`${jsonfile}`, JSON.stringify(rData), function(err) {
        if (err) throw err;
        return 'Done'
        }
        );
    }

    //editJson
    function editJson(jsonfile,newData,isMerge){
        if(isMerge)
            return writeJson(jsonfile,newData)
        return reWriteJson(jsonfile,newData)
    }

    //get Random Array Element
    function random(array) {
        return array[Math.floor(Math.random() * array.length)];
    }
    //shuffle elements
    function shuffle(array){
        let newArr = []
        let index
        for(i = 0;i < array.length; i++){
            index = Math.floor(Math.random() * array.length)
            newArr.push(array[index])
            array.splice(index, 0)
        }    
        return newArr
    }
    //generate random uniq ID
    function randomUniqIdGen(length){
        const path = 'smplJsIds.json'
        let data 
        if(fs.existsSync(path)){
            if(fs.readFileSync(path).length != 0)
                data = JSON.parse(fs.readFileSync(path))
            else{
                fs.writeFileSync(path, '{}')
                data = {}
            }
        }else
            data = {}
        if(!fs.existsSync(path)){
            fs.appendFileSync(path, `{}`)
            fs.writeFileSync(path, '{}')
        }
        let generatedID = generateString(length)
        let i  = Math.pow(88,20)
        while (data[`${generatedID}`] && i != 0){
            generatedID = generateString(length)
            i--
        }
        let jsonId = {}
        jsonId[`${generatedID}`] = true
        writeJson(path,jsonId)
        return generatedID
    }
    function generateString(length) {
        const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = ' ';
        const charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result.replace(' ','');
    }
    module.exports = {has,dateTimeDifference,reWriteJson,writeJson,editJson,random,shuffle,randomUniqIdGen}

