var xlsx =require ("xlsx");
const fs =require('fs');
var workbook= xlsx.readFile('myFile/qaautomation.xlsx');
var worksheet= workbook.Sheets["Input"];
var contents=xlsx.utils.sheet_to_json(worksheet);
fs.writeFile('cypress/fixtures/input.json', JSON.stringify(contents),(error)=>{
    if(error) 
    throw error;
})
   
      