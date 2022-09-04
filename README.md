# Gadget Hub

## Summary 

### Premise 
Gadget Hub is a place where people can purchase, discuss, and inquire anything gadget related. 

### Context and Justification
In this modern day and age, a product is only a finger tip away. With the use of advanced technologies, purchasing things have never been easier. 

## Features
### Major Features 
* Display list of products available
* Retrieve product information
    * Able to the product's brand name, stocks
* Filter through products
    * Produts can be filtered through their prices, amount of stocks available, amount sold, shipment location, and year of release
* Update a doccument/embedded document
    * Able to update the doument's fields and the field of its embedded documents
* Delete a document/embedded document
    * The product's listing, information and reviews can be as well as its embeded documents
* Signing up
    * A user can sign up with a valid email, which is necessary for acquiring the access token
* Logging in
    * A user can login, provided that they already signed up
* Delete a user
    * A user can can be removed through their unique ID

### Limitations and Pending Implementation
* Lack of email verification 
   * The API cannot verify if the provided email during signup is a valid email or if it's an email that's already been used 

## Sample Mongo Documents 
<details>
    <summary> See sample documents </summary> <br>
Sample document from the 'products' collection: 

``````
"category": "mobile",
"brand": "Huawei",
"productName": "Huawei Mate X2",
"productInfo": {
    "description": "A foldable 8 inch display that is concealed when folded",
    "dimensions": {
        "height": 161.8,
        "width": 145.8,
        "uom": "mm"
    },
    "yearMade": 2022
},
"pricePhp": 96557,
"stock": 20,
"shipsFrom": [
    {
        "country": "China",
        "city": "Shenzhen"
    }
],
"amountSold": 2,
"comments": [
    {
        "content": "Expensive and quite interesting",
        "ratings": 5,
        "likes": 127
    },
    {
        "content": "This is the best foldable phon ever",
        "ratings": 5,
        "likes": 182 
    }
    ]    
``````

    
Sample document from 'users' collection:
``````
name: "Tuco Salamanca",
email: "tuco.salamanca321@gmail.com",
password: "ihatechilipowder",
age: 41
``````
</details>


## API Documentation
<details>
    <summary> See entire documentation </summary> <br>

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

| Title | Retrieve a product’s brand name  |
| --- | --- |
| Method | GET |
| Endpoint Path | /products?brand=brand_name|
| Body | N/A |
| Parameters | [Parameters](./api-documentation/query-strings/01a-get-brand-params.md) |
| Expected Response | [Output](./api-documentation/query-strings/01-get-brand.md) |

| Title | Retrieve products with prices that are less than or equal to the given amount by the user |
| --- | --- |
| Method | GET |
| Endpoint Path | /products?price_less_than=price |
| Body | N/A |
| Parameters | [Parameters](./api-documentation/query-strings/02a-price-less-than-params.md) |
| Expected Response | [Output](./api-documentation/query-strings/02-price-less-than.md) |

| Title | Retrieve products with sales more than or equal to the given amount |
| --- | --- |
| Method | GET |
| Endpoint Path | /products?min_sold?=amount_sold |
| Body | N/A |
| Parameters | [Parameters](./api-documentation/query-strings/03-min-sold-params.md) |
| Expected Response | [Output](./api-documentation/query-strings/03-min-sold.md) |

| Title | Retrieve products that matches the country it ships from |
| --- | --- |
| Method | GET |
| Endpoint Path | /products?ships_from=country |
| Body | N/A |
| Parameters | [Parameters](./api-documentation/query-strings/04-ships-from-params.md) |
| Expected Response | [Output](./api-documentation/query-strings/04-ships-from.md) |


| Title | Filter products by stock |
| --- | --- |
| Method | GET |
| Endpoint Path | /products?stock=stock_number |
| Body | N/A |
| Parameters | [Parameters](./api-documentation/query-strings/05-stocks-params.md) |
| Expected Response | [Output](./api-documentation/query-strings/05-stocks.md) |

| Title | Create a new product review |
| --- | --- |
| Method | POST |
| Endpoint Path | /products |
| Body | [Body](./api-documentation/03a-create-new-product.md) |
| Parameters | [Parameters](./api-documentation/03b-create-new-product-review-parameters.md) |
| Expected Response | [Output](./api-documentation/03-create-new-output.md) |

| Title | Get information on a product by its ID |
| --- | --- |
| Method | GET |
| Endpoint Path | /products/:productId |
| Body | N/A |
| Parameters | [Parameters](./api-documentation/04-get-info-product-id-params.md) |
| Expected Response | [Output](./api-documentation/04-get-info-product-id.md) |

| Title | Update a document |
| --- | --- |
| Method | PUT |
| Endpoint Path | /products/:productId |
| Body | [Body](./api-documentation/05a-update-document-body.md) |
| Parameters | [Parameters](./api-documentation/05-update-document-params.md) |
| Expected Response | [Output](./api-documentation/05b-update-document-response.md) |

| Title | Delete an document by its ID |
| --- | --- |
| Method | DELETE |
| Endpoint Path | /products/:productId |
| Body | N/A |
| Parameters | [Parameters](./api-documentation/06-delete-params.md) |
| Expected Response | [Output](./api-documentation/06-delete-response.md) |

| Title | Create embedded document (comments) |
| --- | --- |
| Method | POST |
| Endpoint Path | /products/:productId/coments |
| Body | [Body](./api-documentation/07-create-embed-doc-body.md) |
| Parameters | [Parameters](./api-documentation/07a-create-embed-doc-params.md) |
| Expected Response | [Output](./api-documentation/07b-create-embed-doc-response.md) |

| Title | Retrieve information from a product using its ID |
| --- | --- |
| Method | GET |
| Endpoint Path | /products/:productId/product_info |
| Body | N/A |
| Parameters | [Parameters](./api-documentation/08a-retrieve-info-params.md) |
| Expected Response | [Output](./api-documentation/08-retrieve-info.md) |

| Title | Update an embedded document (inside the comments field) |
| --- | --- |
| Method | PUT |
| Endpoint Path | /comments/:commentId |
| Body | [Body](./api-documentation/09-update-embed-doc.md) |
| Parameters | [Parameters](./api-documentation/09a-update-embed-docs-params.md) |
| Expected Response | [Output](./api-documentation/09b-update-embed-doc-response.md) |

| Title | Delete an embedded document (comment) |
| --- | --- |
| Method | DELETE |
| Endpoint Path | /comments/:commentId |
| Body | N/A |
| Parameters | [Parameters](./api-documentation/10a-delete-embed-body-params.md) |
| Expected Response | [Output](./api-documentation/10-delete-embed-body.md) |

| Title | Creates a new user |
| --- | --- |
| Method | POST |
| Endpoint Path | /users |
| Body | [Body](./api-documentation/11-create-user-body.md) |
| Parameters | [Parameters](./api-documentation/11a-create-user-params.md) |
| Expected Response | [Output](./api-documentation/11b-create-user-response.md) |

| Title | Allows the user to login |
| --- | --- |
| Method | POST |
| Endpoint Path | /login |
| Body | [Body](./api-documentation/12-login-body.md) |
| Parameters | [Parameters](./api-documentation/12a-login-params.md) |
| Expected Response | [Output](./api-documentation/12b-login-response.md) |

| Title | Retrieve the profile of the user |
| --- | --- |
| Method | GET |
| Endpoint Path | /user/:userId |
| Body | N/A |
| Parameters | [Parameters](./api-documentation/13-user-profile-response-params.md) |
| Expected Response | [Output](./api-documentation/13-user-profile-response.md) |
</details>

## Testing
<details>
    <summary> See test cases </summary> 
 Notes: 
   
* The user should have already accomplished the following:
   * Have signed up for an account
   * Acquire the access token through logging in to perform CRUD operations on endpoints
   * Inside ARC, the authorzation should be set to Bearer and the access token is already added
* `portnumber` is simply a placeholder, change it according to the corresponding number on your local mahine
* If a user wishes to get the access token, they can refer to test case # below

1. Testing the default endpoint 
   * in your Express application, make sure to start the server by typing `nodemon`
   * open Advanced REST Client app
   * make sure that the method is set to GET
   * remove any headers
   * type in the address bar: `http://localhost:portnumber/`
   * please note that the testing/editing is done on a local machine, if the user chooses to use Gitpod, simply replace the word `localhost`
   * click the arrow button to send the request
   * the expected response would be a status 200, signifying that the server is up and running
   * in the index.js, I have set a JSON object as a response (refer to the expected response to see the actual result)
   
| Method | GET |
| --- | --- |
| Endpoint Path | / |
| Body | N/A |
| Parameters | N/A |
| Expected Response | [Output](./api-documentation/01-default-route.md) |

2. Searhing for all the products listed
   * make sure that the method is set to GET
   * remove any headers
   * type in the address bar: `http://localhost:portnumber/products`
   * click the arrow button to send the request
   * inside the Response section, it will return an array of objects containing the products and its information
   
| Method | GET |
| --- | --- |
| Endpoint Path | /products |
| Body | N/A |
| Parameters | N/A |
| Expected Response | [Output](./api-documentation/02-retrieve-all-products.md) |

3. Searching for a brand called 'Apple' 
   * make sure that the method is set to GET
   * remove any headers
   * the query string starts after the question mark
   * query string allows the user to write out an object in a string format
   * since we're looking for {brand: "Apple"}, type in the address bar: `http://localhost:portnumber?brand=apple`
   * the response will be an array of objects containing the produts with 'Apple' as the brand.
   
| Method | GET |
| --- | --- |
| Endpoint Path | /products?brand=brand_name|
| Body | N/A |
| Parameters | [Parameters](./api-documentation/query-strings/01a-get-brand-params.md) |
| Expected Response | [Output](./api-documentation/query-strings/01-get-brand.md) |

4. Searching for a product that's less than 40,000
   * make sure that the method is set to GET
   * remove any headers
   * since we're looking for a product that is less than or equal to 40,000, type in the address bar: `http://localhost:portnumber?price_less_than=40000`
   * inside the Response section, it will return an array of objects containing the product that meets the criteria along with its information
   
| Method | GET |
| --- | --- |
| Endpoint Path | /products?price_less_than=price |
| Body | N/A |
| Parameters | [Parameters](./api-documentation/query-strings/02a-price-less-than-params.md) |
| Expected Response | [Output](./api-documentation/query-strings/02-price-less-than.md) |

5. Searching for products that sold at least 10 units
   * make sure that the method is set to GET
   * remove any headers
   * since we're looking for a product that sold at least 10 units, type in the address bar: /products?min_sold?=10
      * make sure that the query inside the express application is in `ParseInt()` for it to view the query as an integer
   *  inside the Response section, it will return an array of objects containing the 'iPhone 12' and 'iPhone 13 Pro Max'

| Method | GET |
| --- | --- |
| Endpoint Path | /products?min_sold?=amount_sold |
| Body | N/A |
| Parameters | [Parameters](./api-documentation/query-strings/03-min-sold-params.md) |
| Expected Response | [Output](./api-documentation/query-strings/03-min-sold.md) |

6. Searching for a product that ships from China 
   * make sure that the method is set to GET
   * remove any headers
   * we're looking for a product is shipped from a specific country
   * note that it is an array of nested objects, and it has two fields: "country", and "city"
   * the result will return any product so long as it corresponds to the "country"
   * type in the address bar: `/products?ships_from=China`
   * after sending the request, it will return the following products: iPhone SE (3rd generation), Nothing Phone 1, Oppo Reno 3 and Huawei Mate X2
   
| Method | GET |
| --- | --- |
| Endpoint Path | /products?ships_from=country |
| Body | N/A |
| Parameters | [Parameters](./api-documentation/query-strings/04-ships-from-params.md) |
| Expected Response | [Output](./api-documentation/query-strings/04-ships-from.md) |

7. Filter products according to the amount of stocks
   * this route uses MongoDB operator '$eq', therefore it will return an exact amount, or will return nothing if it does not find any value to match
   * to test, look for products who only has 10 units 
   * type in the address bar: `http://localhost:portnumber/products?stock=10`
   * after sending the request, it will return 'Oppo Reno 3' and its product information
   
| Method | GET |
| --- | --- |
| Endpoint Path | /products?stock=stock_number |
| Body | N/A |
| Parameters | [Parameters](./api-documentation/query-strings/05-stocks-params.md) |
| Expected Response | [Output](./api-documentation/query-strings/05-stocks.md) |

8. Creating a new product
   * set method to POST 
   * switch the tab from HEADERS to BODY
   * make sure that it's set on Raw input and the Mime type is JSON
   * forgetting to do the second and third steps, will cause the ARC to fail
   * inside the BODY section, create `{}`, fill in the fields (refer to the Body below)
   *  make sure that the address bar is set to `http://localhost:portnumber/products`
   * send in the request 
   * the response will be a JSON object with the message: "New product review has been added", and below it is the inserted ID
   
| Method | POST |
| --- | --- |
| Endpoint Path | /products |
| Body | [Body](./api-documentation/03a-create-new-product.md) |
| Parameters | [Parameters](./api-documentation/03b-create-new-product-review-parameters.md) |
| Expected Response | [Output](./api-documentation/03-create-new-output.md) |

9. Retrieving an ID 
   * switch the method back to GET and the tab to HEADERS
   * remove any headers
   * copy any ObjectId from the `http://localhost:portnumber/products`
   * paste the ObjectId and replace the `:productId` parameter    
   * type in the address bar `http://localhost:portnumber/products/:productId`
   * this will return all the fields of the document along with the nested objects
   
| Method | GET |
| --- | --- |
| Endpoint Path | /products/:productId |
| Body | N/A |
| Parameters | [Parameters](./api-documentation/04-get-info-product-id-params.md) |
| Expected Response | [Output](./api-documentation/04-get-info-product-id.md) |

10. Updating field(s)
   * switch to PUT method
   * make sure that the Mime type is set to JSON
   * this route can update both single and mutliple fields
   * in this test, let's change a single field (product's name)
   * `http://localhost/products/630eb9ee0568f3e9c5f804f8`
   * inside the Raw input, {"productName": "Oppo Reno 3"} to change the product's name
   * send the request
   * a JSON object will be sent as a response (refer to the Output to see the whole message)
   
| Method | PUT |
| --- | --- |
| Endpoint Path | /products/:productId |
| Body | [Body](./api-documentation/05a-update-document-body.md) |
| Parameters | [Parameters](./api-documentation/05-update-document-params.md) |
| Expected Response | [Output](./api-documentation/05b-update-document-response.md) |

11. Delete a product
   * switch to DELETE method
   * copy any ObjectId from the `http://localhost:portnumber/products`
   * paste the ObjectId and replace the `:productId` parameter    
   * type in the address bar `http://localhost:portnumber/products/:productId`
   * after sending the request, a JSON object will be sent back confirming the deletion
   
| Method | DELETE |
| --- | --- |
| Endpoint Path | /products/:productId |
| Body | N/A |
| Parameters | [Parameters](./api-documentation/06-delete-params.md) |
| Expected Response | [Output](./api-documentation/06-delete-response.md) |

12. Editing an embedded document (comments)
   * switch to POST method
   * switch the tab to BODY
   * set Mime type to JSON
   * inside the body, input the fields that you want to update and edit the content
      * refer to the table below for the key-value pair sample in the Body section
   * after sending the quest a JSON object will be sent back (refer to the Output to see the entire response)
 
| Method | POST |
| --- | --- |
| Endpoint Path | /products/:productId/comments |
| Body | [Body](./api-documentation/07-create-embed-doc-body.md) |
| Parameters | [Parameters](./api-documentation/07a-create-embed-doc-params.md) |
| Expected Response | [Output](./api-documentation/07b-create-embed-doc-response.md) |

13. Retrieving product info through ID
   * switch the method back to GET and the tab to HEADERS
   * remove any headers
   * copy any ObjectId from the `http://localhost:portnumber/products`
   * paste the ObjectId and replace the `:productId` parameter    
   * type in the address bar `http://localhost:portnumber/products/:productId/product_info`
   * this will return all the fields of the selected product along with all its fields
   
| Method | GET |
| --- | --- |
| Endpoint Path | /products/:productId/product_info |
| Body | N/A |
| Parameters | [Parameters](./api-documentation/08a-retrieve-info-params.md) |
| Expected Response | [Output](./api-documentation/08-retrieve-info.md) |

14. Editing an object inside an array
   * switch to PUT method
   * set the Mime type is set to JSON
   * this route can update both single and mutliple fields
   * in this test, we'll be changing all the fields of an embedded document
   * `http://localhost/comments/:commentId`
   * inside the Raw input, input the updated field and value (refer to BODY below)
   * send the request
   * a JSON object will be sent as a response confirming the update (refer to the Output to see the whole message)
   
| Method | PUT |
| --- | --- |
| Endpoint Path | /comments/:commentId |
| Body | [Body](./api-documentation/09-update-embed-doc.md) |
| Parameters | [Parameters](./api-documentation/09a-update-embed-docs-params.md) |
| Expected Response | [Output](./api-documentation/09b-update-embed-doc-response.md) |

15. Deleting an object inside the array
   * switch to DELETE method
   * `http://localhost/comments/:commentId`, to select which embedded document you want to update
   * send the request
   * a JSON object will be sent as a response confirmin the deletion (refer to the Output to see the whole message)
   
| Method | DELETE |
| --- | --- |
| Endpoint Path | /comments/:commentId |
| Body | N/A |
| Parameters | [Parameters](./api-documentation/10a-delete-embed-body-params.md) |
| Expected Response | [Output](./api-documentation/10-delete-embed-body.md) |

16. Create a user
   * switch to POST method
   * switch the tab to BODY
   * set Mime type to JSON
   * inside the body, input the necessary fields that you want to update and edit the content
      * refer to the table below for the key-value pair sample in the Body section
   * after sending the request, a JSON object will be sent back (refer to the Output to see the entire response)
   
| Method | POST |
| --- | --- |
| Endpoint Path | /users |
| Body | [Body](./api-documentation/11-create-user-body.md) |
| Parameters | [Parameters](./api-documentation/11a-create-user-params.md) |
| Expected Response | [Output](./api-documentation/11b-create-user-response.md) |

17. Logging in
   * ensure that the user has already signed up for an account otherwise they will not be able to login
   
| Method | POST |
| --- | --- |
| Endpoint Path | /login |
| Body | [Body](./api-documentation/12-login-body.md) |
| Parameters | [Parameters](./api-documentation/12a-login-params.md) |
| Expected Response | [Output](./api-documentation/12b-login-response.md) |

18. 
   
| Method | GET |
| --- | --- |
| Endpoint Path | /user/:userId |
| Body | N/A |
| Parameters | [Parameters](./api-documentation/13-user-profile-response-params.md) |
| Expected Response | [Output](./api-documentation/13-user-profile-response.md) |
   
Final notes: Doing this in POSTMAN or any similar application will yield similar results, so long as the prerequisite is met.
</details>    

## Design
### Technologies Used 
* Node.js
   * Backend framework
   * Allows the usage of npm
* MongoDB
   * NoSQL document-oriented database program
   * Used to store the products and user collection
* Express.js
   * Standard server framework for Node.js
* Advanced REST Client
   * Used for testing routes and performing CRUD operations

## Credits
* The comments for the products can be found in https://shopee.sg/collections/1055161 and https://shopee.sg/search?keyword=phone
