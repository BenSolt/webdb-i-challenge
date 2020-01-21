-- Database Queries

-- Find all customers with postal code 1010

    SELECT PostalCode FROM Customers
    where PostalCode=1010;


-- Find the phone number for the supplier with the id 11
    SELECT ContactName FROM Suppliers
    where SupplierID=11;

    -> Petra Winkler


-- List first 10 orders placed, sorted descending by the order date
    SELECT * FROM Orders
    ORDER BY OrderDate DESC
    LIMIT 10;
    



-- Find all customers that live in London, Madrid, or Brazil

    SELECT City, CustomerName FROM Customers
    Where City='London';

    SELECT City, CustomerName FROM Customers
    Where City='Madrid';

    SELECT City, CustomerName FROM Customers
    Where City='Brazil';


-- Add a customer record for "The Shire", the contact name is "Bilbo Baggins" the address is -"1 Hobbit-Hole" in "Bag End", postal code "111" and the country is "Middle Earth"

    insert into Customers (Country, CustomerName, ContactName, Address, City, PostalCode)
    values('Middle Earth','The Shire','Bilbo Baggins','1 Hobbit-Hole','Bag End','111')

-- Update Bilbo Baggins record so that the postal code changes to "11122"

    update Customers
    set CustomerName = 'The Shire', Country = 'MiddleEarth'
    where PostalCode = '11122'

-- (Stretch) Find a query to discover how many different cities are stored in the Customers table. Repeats should not be double counted

-- (Stretch) Find all suppliers who have names longer than 20 characters. You can use `length(SupplierName)` to get the length of the name
