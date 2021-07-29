
let inputArr = process.argv.slice(2);

let fs = require("fs");
let path = require("path");

let helpObj = require("./command/help");
let treeObj = require("./command/tree");
let organizeObj = require("./command/organize");

let command = inputArr[0];
let types = {
    media: ["mp4","mkv"],
    archives: ['zip','7z','rar','tar','iso','ar','xz'],
    documents: ['docx','doc','pdf','xlsx','xls','odt','ods','odp','txt','ps'],
    app: ['exe','dmg','pkg','deb']
}

switch(command){
    case "tree":
        treeObj.treeFxn(inputArr[1]);
        break;
    case "organize":
        organizeObj.organizeFxn(inputArr[1]);
        break;
    case "help":
        helpObj.helpFxn();
        break;
    default:
        console.log("Please input right command"); 
        break;           
}


