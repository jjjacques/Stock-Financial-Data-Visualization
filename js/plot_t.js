// Submit Button handler
function handleSubmit() {
  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input value from the form
  var stock = d3.select("#stockInput").node().value;
  console.log(stock);

  // clear the input value
  d3.select("#stockInput").node().value = "";

  // Build the plot with the new stock
  buildPlot(stock);
}

function buildPlot(stock) {
  var api_key = "Y5AE5LOO06SXQ60H";
    // daily adjusted url
    var url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${stock}&outputsize=compact&apikey=${api_key}`;
    // intraday url
    // var url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${stock}&interval=5min&apikey=${api_key}`;
    
  d3.json(url).then(function(data) {

    // Grab values from the response json object to build the plots
    var name = data["Meta Data"]["2. Symbol"];
    var dates = [];
    var openingPrices = [];
    var closingPrices = [];
    var highPrices = [];
    var lowPrices = [];
    // var adjustedclosePrice = [];
    var volume = [];
    var dividendAmount = [];
    // append each metadata key and values 
  Object.entries(data["Time Series (Daily)"]).forEach(([key, value]) => {
  // Object.entries(data["Time Series (5min)"]).forEach(([key, value]) => {
  dates.push(key);
  openingPrices.push(value['1. open']);
  closingPrices.push(value['4. close']);
  highPrices.push(value['2. high']);
  lowPrices.push(value['3. low']);
  // adjustedclosePrice.push(value['5. adjusted close']);
  volume.push(value['6. volume']);
  // volume.push(value['5. volume']);
  dividendAmount.push(value['7. dividend amount']);
  
  }); 
    var startDate = dates[-1];
    var endDate = dates[0];
  console.log(dates);

  
  var trace1 = {
      type: "scatter",
      mode: "lines",
      name: name,
      x: dates,
      y: closingPrices,
      line: {
        color: "#17BECF"
      },
      title: "Price"
      
    };

    // Candlestick Trace
    var trace2 = {
      type: "candlestick",
      x: dates,
      high: highPrices,
      low: lowPrices,
      open: openingPrices,
      close: closingPrices
    };

    var trace3 = {
      type: "bar",
      name: name,
      x: dates,
      y: volume,
      yaxis: 'y2',
      line: {
        color: "#pink"
      },
      yaxis2: {
        title: 'Volume'  
      }
    };

    var data = [trace1, trace2];
    var data1 = [trace3];

    var layout = {
      title: `${stock} closing prices`,
      xaxis: {
        range: [startDate, endDate],
        type: "date",
        rangeslider: {visible:true}
      },
      
      yaxis: {
        autorange: true,
        type: "linear",
        title: "Price"
      },
      yaxis2: {
        title: 'Volume',
        margin: {
          l: 100,
          r: 100,
          t: 100,
          b: 100
        },
      
        // titlefont: {color: '#9467bd'},
        // tickfont: {color: '#9467bd'},
        // overlaying: 'y',
        side: 'left',
  
      }
    };

    Plotly.newPlot("plot", data, layout);
    Plotly.newPlot("volumeplot", data1, layout);
  });
}




// Add event listener for submit button
d3.select("#submit").on("click", handleSubmit);
