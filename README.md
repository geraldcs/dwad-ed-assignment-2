# Gadget Hub

## Summary 

### Premise 
Gadget Hub is a place where people can purchase, discuss, and inquire anything gadget related. 

### Context and Justification
In this modern day and age, a product is only a finger tip away. With the use of advanced technologies, purchasing things have never been easier. 

## Features


| Title | Default route |
| --- | --- |
| Method | GET |
| Endpoint Path | / |
| Body | N/A |
| Parameters | N/A |
| Expected Response | [Output](./api-documentation/01-default-route.md) |

| Title | Retrieve all the products |
| --- | --- |
| Method | GET |
| Endpoint Path | /products |
| Body | N/A |
| Parameters | N/A |
| Expected Response | [Output](./api-documentation/02-retrieve-all-products.md) |

| Title | Create a new product review |
| --- | --- |
| Method | POST |
| Endpoint Path | /products |
| Body |  |
| Parameters | * category (string): The category of the product
* brand (string): The brand of the product
* productName (string): The name of the product
* productInfo (object):  Information regarding the product
* pricePhp (Int32): The price of the product
* stock (Int32): The amount of stock left of the product
* shipsFrom (array of objects): The location of where the product is being shipped from
* amountSold (Int32): The amount of products sold
* comments (array of objects): Comments left by the users after purchasing the product |
| Expected Response |  |