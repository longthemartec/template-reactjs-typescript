import fs from "fs";
import path from "path";
import mjml from "mjml";

// parse single file
const fileOne = "demo.mjml";
console.warn(`Template: ${fileOne}`);
let fileContentOne = fs.readFileSync(path.join(__dirname, fileOne));
fileContentOne = mjml(fileContentOne.toString());
const hbsOne = path.join(__dirname, fileOne.replace(".mjml", ".hbs"));
fs.writeFileSync(hbsOne, fileContentOne.html);

/**
 * parse all files in folder
 */
const mjmlFolder = path.join(__dirname, "..", "src/assets/mjml");

fs.readdir(mjmlFolder, (err, files) => {
  if (err) {
    return console.error(err);
  }
  let hbs;
  let fileContent;
  files.forEach((file) => {
    console.warn(`Template: ${file}`);
    fileContent = fs.readFileSync(path.join(__dirname, "./mjml", file));
    fileContent = mjml(fileContent.toString());
    hbs = path.join(__dirname, `./hbs/${file.replace(".mjml", ".hbs")}`);
    fs.writeFileSync(hbs, fileContent.html);
  });
  return true;
});
