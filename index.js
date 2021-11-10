
const _ = require('lodash')


function  cloneAndFreeze(obj){
   var deepCopy = _.cloneDeep(obj);
   return Object.freeze(deepCopy);
}

let obj = {
    "name":"Tehila"
}
let a = cloneAndFreeze(obj);
a.name = "ggg"
console.log(obj.name)