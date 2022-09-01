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
| Body | [Body](./api-documentation/03a-create-new-product.md) |
| Parameters | [Parameters](./api-documentation/03b-create-new-product-review-parameters.md) |
| Expected Response | [Output](./api-documentation/03-create-new-output.md) |

| Title | Get information on a product by its ID |
| --- | --- |
| Method | GET |
| Endpoint Path | /products/:productId |
| Body | N/A |
| Parameters | productId (ObjectId): the unique Id of the product that we’re going to get information for  |
| Expected Response | [Output](./api-documentation/04-get-info-product-id.md) |

| Title | Update a document |
| --- | --- |
| Method | PUT |
| Endpoint Path | /products/:productId |
| Body | [Body](./api-documentation/05a-update-document-body.md) |
| Parameters | [Parameters](./api-documentation/05-update-document-params) |
| Expected Response | [Output](./api-documentation/05b-update-document-response.md) |