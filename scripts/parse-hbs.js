import * as Handlebars from "handlebars";
import fs from "fs";
import path from "path";

const data = {
  name: "Long Nguyen",
};
const to = "toaddress@gmail.com";
const subject = "Test MJML with NodeJS";
const template = path.join(__dirname, "demo.hbs");
const templateContent = fs.readFileSync(template);
const compiledTemplate = Handlebars.compile(templateContent.toString())(data);
console.log("compile data", { to, subject, compiledTemplate });

// Your Custom Mail Function
// const Mail = new SendGrid('api_key');
// Mail({
//   to,
//   subject,
//   message: compiledTemplate,
// });
