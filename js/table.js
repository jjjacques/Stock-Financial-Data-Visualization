// Ajax code to load csv to html

$(document).ready(function(){
 $('#load_data').click(function(){
  $.ajax({
   url:"assets/csv/Final_stock_details.csv",
//    url2:"assets/csv/CTSH_df.csv",
//    url3:"assets/csv/FB_df.csv",
//    url4:"assets/csv/GOOGL_df.csv",
//    url5:"assets/csv/IBM_df.csv",
//    url6:"assets/csv/MCD_df.csv",
//    url7:"assets/csv/MSFT_df.csv",
//    url8:"assets/csv/TSLA_df.csv",
   dataType:"text",
   success:function(data)
   {
    var stock_data = data.split(/\r?\n|\r/);
    var table_data = '<table class="table table-bordered table-striped">';
    for(var count = 0; count<stock_data.length; count++)
    {
     var cell_data = stock_data[count].split(",");
     table_data += '<tr>';
     for(var cell_count=0; cell_count<cell_data.length; cell_count++)
     {
      if(count === 0)
      {
       table_data += '<th>'+cell_data[cell_count]+'</th>';
      }
      else
      {
       table_data += '<td>'+cell_data[cell_count]+'</td>';
      }
     }
     table_data += '</tr>';
    }
    table_data += '</table>';
    $('.stock_table').html(table_data);
   }
  });
 });
 
});