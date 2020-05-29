Stock Financial Data Visualization
Overview

The objective of the project is to create Interactive visual representation of eight US Stock data. A user will be able to interactively view various information about these eight company which helps them make informative investment decisions.

The eight selected companies are:

    Apple
    Microsoft
    Google
    IBM
    Cognizant
    Tesla
    Facebook
    McDonald

Data Source

    Our company details will be scrape by yahoo finance
    Our graph data source will be json format from Alpha Vantage API.
    Our will be 100 data point for each companies
    Our data is daily adjusted for each companies
    Our data API returns daily time series (date, daily open, daily high, daily low, daily close, daily volume, daily adjusted close, and split/dividend events).

URL’s:

    https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=&outputsize=compact&apikey=<api_key>
    https://ca.finance.yahoo.com/

Goals

    Extract stock data for five major companies using API
    Transform the data using python pandas
    Load the data to MySQL DB
    HTML Visualization of the data
    Using Flask for navigation routes
    User will be able to lookup company info details visually

Specifications

Python, Pandas, MySQL, Json, HTML, JavaScript, Plotly, D3, Leaflet, bsoup, jupyter notebook, splinter (browser), request
HTML

● Leverages JavaScript manipulation of the record ● Leverage CSS for the styling ● Leverage Bootstrap for layout canvas ● Leverage plotly, leaflet for graphs and heatmaps
Milestones

I. Extraction

Extraction of the Data occurred from Alpha Vantage API. Import the following library modules such as requests, json, pandas, datetime, re (regex).
Alpha Vantage API access guidance:

● Obtain free API key
● Use daily adjusted Json API call
Yahoo Finance Data scrape guidance:

● Beautiful soup ● Chrome driver ● Splinter (browser)

II. Transformation

The following transformation was completed to the data. ● Drop Null values

III. Loading

The loading of the data involves the creation RDS on MySQL from data frame. A connection engine for data load to MySQL. The data will be in three tables as follows

Table 1 - Yahoo finance data

Table 2 - Alpha Vantage data
