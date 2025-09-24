//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                  "GIYU-MD" whatsapp bot                                              //
//                                                                                                      //
//                                         Ｖ：1.0.0                                                     //
//                                                                                                      //
//
//                                          
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : "GIYU-MD" whatsapp bot 
//  * @version      : 1.0
//  * @author       : Tharindu ranasingha
//  * @youtube      : 
//  * @description  : "GIYU-MD", A Multi-functional WhatsApp bot created by Tharindu Ranasingha.
//*
//*
//Base by Tharindu Ranasingha
//GitHub: @xtharindudranasingha-svg
//WhatsApp: +94786073208
//Want more free bot scripts? Follow to my Whatsapp channel: 
//   * Created By: GitHub: xtharindudranasingha-svg
//   * Credit To:Tharindu Ranasingha
//   * Created year: 2025 GIYU-MD.
//  

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
PORT: process.env.PORT || "8000"
};
