  d3.csv("assets/csv/companyData_df.csv", function(d) {
    return {
      Ticker : d.Ticker,
      Company_Name : d.Company_Name,
      Description : d.Description,
      Telephone : +d.Telephone,
      Address: d.Address,
      Key_Execs_Name: d.Key_Execs_Name,
      Key_Execs_Title: d.Key_Execs_Title,
      Web_URL: d.Web_URL,
      Articles1 : d.Articles1,
      Articles2 : d.Articles2,
      Articles3 : d.Articles3,
      Articles4 : d.Articles4,
      Articles5 : d.Articles5,
      Tweets : d.Tweets,
      Following: d.Following,
      Followers: d.Followers,
      Likes: d.Likes,
      Handle: d.Handle,
    };
  }).then(function(data) {
  console.log(data);
  
  d3.select("#descr_info").insert("p").text(data[0].Description);
  d3.select("#tweets").insert("p").text(data[0].Articles1);
  d3.select("#tweets").insert("p").text(data[0].Articles2);
  d3.select("#tweets").insert("p").text(data[0].Articles3);
  d3.select("#tweets").insert("p").text(data[0].Articles4);
  d3.select("#tweets").insert("p").text(data[0].Articles5);

  // var divs = d3.select('#parent').selectAll('p').data(data).enter().append('div');
  
  buildPlot("aapl");

  }); 
