-- DROP DATABASE `stock_db`
DROP DATABASE `stock_db`;
-- Create and use stock_db
CREATE DATABASE stock_db;
USE stock_db;
-- Alter all the table to change the datatype from datetime to date
ALTER TABLE `stock_db`.`aapl_stock` 
CHANGE COLUMN `dates` `dates` DATE NULL DEFAULT NULL ;
ALTER TABLE `stock_db`.`ctsh_stock` 
CHANGE COLUMN `dates` `dates` DATE NULL DEFAULT NULL ;
ALTER TABLE `stock_db`.`fb_stock` 
CHANGE COLUMN `dates` `dates` DATE NULL DEFAULT NULL ;
ALTER TABLE `stock_db`.`googl_stock` 
CHANGE COLUMN `dates` `dates` DATE NULL DEFAULT NULL ;
ALTER TABLE `stock_db`.`ibm_stock` 
CHANGE COLUMN `dates` `dates` DATE NULL DEFAULT NULL ;
ALTER TABLE `stock_db`.`mcd_stock` 
CHANGE COLUMN `dates` `dates` DATE NULL DEFAULT NULL ;
ALTER TABLE `stock_db`.`msft_stock` 
CHANGE COLUMN `dates` `dates` DATE NULL DEFAULT NULL ;
ALTER TABLE `stock_db`.`tsla_stock` 
CHANGE COLUMN `dates` `dates` DATE NULL DEFAULT NULL ;

-- Adding the Primary key
-- alter table aapl_stock add column `id` int(10) unsigned primary KEY AUTO_INCREMENT;
-- alter table ctsh_stock add column `id` int(10) unsigned primary KEY AUTO_INCREMENT;
-- alter table fb_stock add column `id` int(10) unsigned primary KEY AUTO_INCREMENT;
-- alter table googl_stock add column `id` int(10) unsigned primary KEY AUTO_INCREMENT;
-- alter table ibm_stock add column `id` int(10) unsigned primary KEY AUTO_INCREMENT;
-- alter table mcd_stock add column `id` int(10) unsigned primary KEY AUTO_INCREMENT;
-- alter table msft_stock add column `id` int(10) unsigned primary KEY AUTO_INCREMENT;
-- alter table tsla_stock add column `id` int(10) unsigned primary KEY AUTO_INCREMENT;


