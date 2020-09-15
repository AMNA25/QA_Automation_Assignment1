var xlsx =require ("xlsx");
const fs =require('fs');
var workbook= xlsx.readFile("myFile/qaautomation.xlsx");
var worksheet=workbook.Sheets["Series Cast"];
var workbook1= fs.readFileSync('cypress/fixtures/castInfo.json');
var load=JSON.parse(workbook1);
console.log(load);
xlsx.utils.sheet_add_json(worksheet, load);
xlsx.writeFile(workbook,'myFile/qaautomation1.xlsx');
