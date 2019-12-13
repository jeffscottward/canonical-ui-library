const fs = require("fs");
const argv = require("minimist")(process.argv.slice(2));
const shell = require("shelljs");
const base64Img = require("base64-img");

// Utils
const fileOrFolder = fileOrFolder => fileOrFolder.split(".").length > 1;

const createFile = (fileNamePath, base64Val) => {
  const stringTemplateFileNamePath = fileNamePath + ".js";
  const fileConents = `module.exports = '${base64Val}'`;

  fs.appendFile(stringTemplateFileNamePath, fileConents, err => {
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
  let folderList = shell.ls("-A", "./");

  // Remove fonts folder from list
  // Base64 encoding available through https://transfonter.org/
  folderList = folderList.filter(e => e !== "fonts");

  const goIntoFolderAndDoMagic = folder => {
    // // Go into one folder
    shell.cd(folder);

    // // List all the files
    const filesList = shell.ls("-A", "./");

    // // For each file in list
    filesList.forEach(arrayitem => {
      base64Img.base64(arrayitem, (err, data) => {
        if (err) throw err;
        createFile("../inlined/" + folder + "/" + arrayitem, data);
      });
    });
    shell.cd("..");
  };

  folderList.forEach(arrayitem => {
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
