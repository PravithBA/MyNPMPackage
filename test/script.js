const {editJson} = require("smpljavascript")

let newData = {
    "Mat": "40",
    "LOLOL":"LOL"
}
const jsonfile = ("./test.json")

editJson(jsonfile,newData)