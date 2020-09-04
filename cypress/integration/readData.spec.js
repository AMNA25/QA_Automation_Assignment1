
var Excel = require("exceljs");
var workbook = new Excel.Workbook();

 workbook.xlsx.readFile('qaautomation.xlsx').then(function(){
    var worksheet= workbook.getWorksheet('Input');
    var row=worksheet.getRow(2); 
    var val=row.getCell(2).value; //read value from cell B2
    var row1=worksheet.getRow(3); 
    var val1=row1.getCell(2).value;  //read value from cell B3
    val.commit()
    val1.commit()
        
    })
    modules.export(val,val1)