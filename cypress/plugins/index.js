const { Workbook } = require("exceljs");
/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
var xlsx =require ("xlsx");
const fs=require ('fs');
var workbook= xlsx.readFile("myFile/qaautomation.xlsx");
var worksheet= workbook.Sheets["Input"];
//var worksheet2=workbook.Sheets["Series Cast"];
//var data= xlsx.utils.sheet_to_json(worksheet);
//console.log(data);
var cellB2value= 'B2';
var cellB2=worksheet[cellB2value];
var cellB2_value=(cellB2.v);
var cellB3value= 'B3';
var cellB3=worksheet[cellB3value];
var cellB3_value=(cellB3.v);
var cellB4value= 'B4';
var cellB4=worksheet[cellB4value];
var cellB4_value=(cellB4.v);
var cellB5value= 'B5';
var cellB5=worksheet[cellB5value];
var cellB5_value=(cellB5.v);
var cellB6value= 'B6';
var cellB6=worksheet[cellB6value];
var cellB6_value=(cellB6.v);
var cellB7value= 'B7';
var cellB7=worksheet[cellB7value];
var cellB7_value=(cellB7.v);
var cellB8value= 'B8';
var cellB8=worksheet[cellB8value];
var cellB8_value=(cellB8.v);
var cellB9value= 'B9';
var cellB9=worksheet[cellB9value];
var cellB9_value=(cellB9.v);
var cellB10value= 'B10';
var cellB10=worksheet[cellB10value];
var cellB10_value=(cellB10.v);
var cellB11value= 'B11';
var cellB11=worksheet[cellB11value];
var cellB11_value=(cellB11.v);
var cellB12value= 'B12';
var cellB12=worksheet[cellB12value];
var cellB12_value=(cellB12.v);

module.exports = (on, config) => {
  on('task',{
    g_value(){
      console.log(cellB2_value)
      return cellB2_value
    },
    s_value(){
      console.log(cellB3_value)
      return cellB3_value
    },
    l_value(){
      console.log(cellB4_value)
      return cellB4_value
    },
    h_value(){
      console.log(cellB5_value)
      return cellB5_value
    },
    e_value(){
      console.log(cellB6_value)
      return cellB6_value
    },
    p_value(){
      console.log(cellB7_value)
      return cellB7_value
    },
    ph_value(){
      console.log(cellB8_value)
      return cellB8_value
    },
    a_value(){
      console.log(cellB9_value)
      return cellB9_value
    },
    t1_value(){
      console.log(cellB10_value)
      return cellB10_value
    },
    t2_value(){
      console.log(cellB11_value)
      return cellB11_value
    },
    t3_value(){
      console.log(cellB12_value)
      return cellB12_value
    }
  })
  
     
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
}

