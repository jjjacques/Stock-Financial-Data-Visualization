-- query to do union for all the tables
SELECT * FROM stock_db.aapl_stock
UNION
SELECT * FROM stock_db.ctsh_stock
union
select * from stock_db.fb_stock
union
select * from stock_db.googl_stock
union
select * from stock_db.ibm_stock
union
select * from stock_db.mcd_stock
union 
select * from stock_db.msft_stock
union
select * from stock_db.tsla_stock
ORDER BY dates desc;
-- grabing the rows which is required for appl_table_csv

SELECT dates, open, close, volume FROM stock_db.aapl_stock;
SELECT dates, open, close, volume FROM stock_db.ibm_stock;