# Simple Javscript
> Smpljavascript is an package that makes some parts of javascript easier

> If you found a bug or you have any ideas on what to do message me on **Discord** e.#1999 or Pig destroyer#0613

# Installation

Manually:
```html
  <script src="smpljavascript.js"></script>
```
From `npm`:
```js
  npm i smpljavascript
```
As `CommonJS` or `AMD` module:
```js
  const smpjs = require('smpljavascript')
```
 

# Functions

## has(array,str)
 Checks an array for having a specific word and returns true or false
### Usage
```js
const has = require("smpljavascript")

 array = ['James ate today']
 str = 'ate'

has(array,str)
```
> Output of `true` expected

## dateTimeDifference(date1,date2,format) 
Tells a date/time difference between 2 dates 

### Usage

```js
const dateTimeDifference = require("smpljavascript")

dateTimeDifference('01 Jan 2050 00:00:00 GMT','01 Jan 1990 00:00:00 GMT','days')
```
> Output of `21915` expected

## reWriteJson(jsonFile,newData)
rewrites fields in the json file and adds new fields

### Usage
```js
const { editJson } = require('smpljavascrpt')

const newData = {
  "Mat":"40"
}
const jsonfile = './test.json'
editJson(jsonfile,newData,false)

```
> Output of "Done" will be in console and
```json
{"Nick":"29","Mat": "40"}
```
> expected in json file


## writeJson(jsonFile,newData)
 adds new fields to the existing fields in the json file

 ### Usage
 ```js
const { reWriteJson } = require("smpljavascript")

const newData = {
 "Nick": "29"
}
const jsonfile = ("./test.json")

writeJson(jsonfile,newData)
```
> Output of "Done" will be in console and
```json
{"Nick":"29"}
```
> expected in json file
## editJson(jsonfile,newData,false)
 the same as reWriteJson,writeJson but in one fuction.

### Usage
```js
const { editJson } = require('smpljavascrpt')

const jsonfile = './test.json'
const newData = {
  "Mat":"40"
}
editJson(jsonfile,newData,false)
```
> Output of "Done" will be in console and
```json
{"Mat": "40"}
```
> expected in json file
```js
const { editJson } = require('smpljavascrpt')

const jsonfile = './test.json'
const newData = {
  "Mat":"40"
}
editJson(jsonfile,newData,true)
```
> Output of "Done" will be in console and
```json
{"Nick":"29","Mat": "40"}
```
> expected in json file

## random(array) 
Randomizes an item from an array 

### Usage

```js
const { random } = require("smpljavascript")

const array = [ "grape", "apple"]

random(array)
```
> Output of `grape` or `apple` expected

## shuffle(array) 
Shuffles an array

### Usage

```js
const { shuffle } = require("smpljavascript")

const array = [ "grape", "apple"]

shuffle(array)
```
> Output of `["grape", "apple"]` or `[ "apple", "grape"]` expected

##  randomUniqIdGen(length) 
Generates an ID that uniq every time

### Usage

```js
const { randomUniqIdGen } = require("smpljavascript")

length = 10

randomUniqIdGen(length)
```
> Output of `"jnsZObx3g^"`

Note: This function json creates a file where all the ids generated will be stored... So if you want to reset all the ids you can just delete the file... If you want to remove some ids then just delete that id in the file