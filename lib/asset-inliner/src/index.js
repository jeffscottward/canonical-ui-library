"use strict";

var fs = require("fs");
var argv = require("minimist")(process.argv.slice(2));
var shell = require("shelljs");
var base64Img = require("base64-img");

// Utils
var fileOrFolder = function fileOrFolder(_fileOrFolder) {
  return _fileOrFolder.split(".").length > 1;
};

var createFile = function createFile(fileNamePath, base64Val) {
  var stringTemplateFileNamePath = fileNamePath + ".js";
  var fileConents = "module.exports = '" + base64Val + "'";

  fs.appendFile(stringTemplateFileNamePath, fileConents, function (err) {
    if (err) throw err;
  });
};

if (argv.inline) {
  shell.cd("asset-inliner");

  // Inlined
  shell.mkdir("inlined");

  // Enter assets
  shell.cd("assets");

  // Folder list
  var folderList = shell.ls("-A", "./");

  // Remove fonts folder from list
  // Base64 encoding available through https://transfonter.org/
  folderList = folderList.filter(function (e) {
    return e !== "fonts";
  });

  var goIntoFolderAndDoMagic = function goIntoFolderAndDoMagic(folder) {
    // // Go into one folder
    shell.cd(folder);

    // // List all the files
    var filesList = shell.ls("-A", "./");

    // // For each file in list
    filesList.forEach(function (arrayitem) {
      base64Img.base64(arrayitem, function (err, data) {
        if (err) throw err;
        createFile("../inlined/" + folder + "/" + arrayitem, data);
      });
    });
    shell.cd("..");
  };

  folderList.forEach(function (arrayitem) {
    shell.mkdir("../inlined/" + arrayitem);
    // Make sure its a folder, not .DS_STORE
    if (!fileOrFolder(arrayitem)) {
      goIntoFolderAndDoMagic(arrayitem);
    }
  });

  // cl(process.cwd())
  shell.cp("-R", "fonts", "../inlined/fonts");
}

if (argv.recycle) {
  shell.rm("-rf", "inlined");
}