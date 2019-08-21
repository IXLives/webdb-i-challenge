# Database Queries

## Find all customers with postal code 1010

SELECT * FROM [Customers] WHERE PostalCode = 1010

## Find the phone number for the supplier with the id 11

SELECT Phone FROM Suppliers where SupplierID = 11

## List first 10 orders ever places, descending by the order date

SELECT * FROM [Orders] order by orderdate desc limit 10 -- 10 orders descending
SELECT * FROM [Orders] order by orderdate asc limit 10 -- first 10 orders ever placed

## Find all customers that live in London, Madrid, or Brazil

SELECT * FROM [Customers] where city = 'Madrid' or city = 'London' or country = 'Brazil'

## Add a customer record for "The Shire", the contact name is "Bilbo Baggins" the address is -"1 Hobbit-Hole" in "Bag End", postal code "111" and the country is "Middle Earth"

insert into customers (customername, contactName, address, city, postalcode, country) values ('The Shire', 'Bilbo Baggins', '1 Hobbit-Hole', 'Bag End', '111', 'Middle Earth')

## Update Bilbo Baggins record so that the postal code changes to "11122"

update customers set postalcode = '11122' where customerid = '93'

## (Stretch) Find a query to discover how many different cities are stored in the Customers table. Repeats should not be double counted

## (Stretch) Find all suppliers who have names longer than 20 characters. You can use `length(SupplierName)` to get the length of the name
