const {reWriteJson} = require("smpljavascript")

let newData = {
    "Mat": "40"
}
const jsonfile = ("./test.json")

reWriteJson(jsonfile,newData)