// // create a connection to the mySQL database.

// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "root123",
//   database: "stock_db"
// });

// // Database Query
// con.connect(function(err) {
//     if (err) throw err;
//     // con.query("SELECT * FROM tweets", function (err, result, fields) {
//     appleData = con.query("SELECT * FROM aapl_stock", function (err, result, fields) {
//         if (err) throw err;
//           console.log(aaplData);
//     });
//     });

    // cognizantData = con.query("SELECT * FROM ctsh_stock", function (err, result, fields) {
    //     if (err) throw err;
    //     //   console.log(aaplData);
    // googleData = con.query("SELECT * FROM googl_stock", function (err, result, fields) {
    //     if (err) throw err;
    //        //   console.log(aaplData); 
    // microsoftData = con.query("SELECT * FROM msft_stock", function (err, result, fields) {
    //   if (err) throw err;
    // //   console.log(aaplData);
    // teslaData = con.query("SELECT * FROM tsla_stock", function (err, result, fields) {
    //     if (err) throw err;
    //     //   console.log(aaplData);
    // ibmData = con.query("SELECT * FROM ibm_stock", function (err, result, fields) {
    //     if (err) throw err;
    //     //   console.log(aaplData);
    // facebookData = con.query("SELECT * FROM fb_stock", function (err, result, fields) {
    //     if (err) throw err;
    //        //   console.log(aaplData); 
    // mcdonaldsData = con.query("SELECT * FROM mcd_stock", function (err, result, fields) {
    //   if (err) throw err;
    //   console.log(aaplData);
    //   console.log(result[7].Handle);
//     });
//   });

 
// coding js

// from data.js
var appleData = df_AAPL_df;
// appleData = JSON.parse(appleData);
// console.log(appleData.close[idx]);
console.log(appleData)

var tbody = d3.select("tbody");
var columns = ["Dates", "Tickers", "Open", "High", "Low", "Close", "Ajd Close", "volume", "Dividend"]
// console.log(columns);

var populate = (appleData) => {
    console.log(appleData.dates)
    //   columns.forEach(column => row.append("td").text(stockDate[column])
    Object.entries(appleData.dates).forEach(function([key,value]){
        var row = tbody.append("tr");
        var cell = tbody.append("td");// appending/filling all the rows
        cell.text(value);
     });
     Object.entries(appleData.tickers).forEach(function([key,value]){
        var row = tbody.append("tr");
        var cell = tbody.append("td");// appending/filling all the rows
        cell.text(value);
     });
  }
  //Populate table
  populate(appleData);

//   var populate = (cognizantData) => {
//     cognizantData.forEach(stockDate => {
//       var row = tbody.append("tr");
//       columns.forEach(column => row.append("td").text(stockDate[column])
//       )
//     });
//   }
//   //Populate table
//   populate(cognizantData);

//   var populate = (googleData) => {
//     googleData.forEach(stockDate => {
//       var row = tbody.append("tr");
//       columns.forEach(column => row.append("td").text(stockDate[column])
//       )
//     });
//   }
//   //Populate table
//   populate(googleData);

//   var populate = (microsoftData) => {
//     microsoftData.forEach(stockDate => {
//       var row = tbody.append("tr");
//       columns.forEach(column => row.append("td").text(stockDate[column])
//       )
//     });
//   }
//   //Populate table
//   populate(microsoftData);

//   var populate = (teslaData) => {
//     teslaData.forEach(stockDate => {
//       var row = tbody.append("tr");
//       columns.forEach(column => row.append("td").text(stockDate[column])
//       )
//     });
//   }
//   //Populate table
//   populate(teslaData);

//   var populate = (ibmData) => {
//     ibmData.forEach(stockDate => {
//       var row = tbody.append("tr");
//       columns.forEach(column => row.append("td").text(stockDate[column])
//       )
//     });
//   }
//   //Populate table
//   populate(ibmData);

//   var populate = (facebookData) => {
//     facebookData.forEach(stockDate => {
//       var row = tbody.append("tr");
//       columns.forEach(column => row.append("td").text(stockDate[column])
//       )
//     });
//   }
//   //Populate table
//   populate(facebookData);

//   var populate = (mcdonaldsData) => {
//     mcdonaldsData.forEach(stockDate => {
//       var row = tbody.append("tr");
//       columns.forEach(column => row.append("td").text(stockDate[column])
//       )
//     });
//   }
//   //Populate table
//   populate(mcdonaldsData);