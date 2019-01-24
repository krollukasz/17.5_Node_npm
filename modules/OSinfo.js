var os = require("os"); // zaimportowanie modułu "os"
var colors = require("colors"); // zaimportowanie modułu "colors"
var conversionTime = require("../modules/conversionTime"); // zaimportowanie modułu conversionTime z folderu "modules"

function getOSinfo () {
  var type =  os.type();
  if (type === "Darwin") {
    type = "OSX";
  } else if (type === "Windows_NT") {
    type = "Windows";
  }
  var release = os.release();
  var cpu = os.cpus()[0].model;
  var userInfo = os.userInfo();
  console.log("System: ".green, type);
  console.log("Release: ".yellow, release);
  console.log("CPU Model: ".grey, cpu);
  conversionTime.conversionTime();
  // console.log("Uptime: ".blue, time.print(uptime));
  console.log("User info: ".green, userInfo.username);
  console.log("Home dir: ".red, userInfo.homedir);
}

exports.print = getOSinfo;