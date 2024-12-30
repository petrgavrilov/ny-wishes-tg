const fs = require("fs");
const path = require("path");

// Replace with the path to your directory
const directoryPath = "./wishes";

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error("Error reading directory:", err);
    return;
  }

  files.forEach((file) => {
    // Extract the file extension
    const ext = path.extname(file);
    const name = path.basename(file, ext);

    const newFileName = `${name.replace("-crunch", "")}${ext}`;
    const oldFilePath = path.join(directoryPath, file);
    const newFilePath = path.join(directoryPath, newFileName);

    fs.rename(oldFilePath, newFilePath, (renameErr) => {
      if (renameErr) {
        console.error(`Error renaming file ${file}:`, renameErr);
      } else {
        console.log(`Renamed: ${file} -> ${newFileName}`);
      }
    });
  });
});
