# Gadget Hub

## Summary 

### Premise 
Gadget Hub is a place where people can purchase, discuss, and inquire anything gadget related. 

### Context and Justification
In this modern day and age, a product is only a finger tip away. With the use of advanced technologies, purchasing things have never been easier. 

## Features

## API Documentation
<details>
    <summary> See entire documentation </summary>

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

| Title | Retrieve products which prices are less than or equal to the given amount by the user |
| --- | --- |
| Method | GET |
| Endpoint Path | /products?price_less_than=price_placeholder |
| Body | N/A |
| Parameters | N/A |
| Expected Response | Output |

| Title | Retrieve products with sales more than or equal to the given amount |
| --- | --- |
| Method | GET |
| Endpoint Path | /products?min_sold?=amount_sold_placeholder |
| Body | N/A |
| Parameters | N/A |
| Expected Response | Output |

| Title | Retrieve products that matches the country it ships from |
| --- | --- |
| Method | GET |
| Endpoint Path | /products?ships_from=country_placeholder |
| Body | N/A |
| Parameters | N/A |
| Expected Response | Output |

| Title | Retrieve products that are either older or newer than the provided year |
| --- | --- |
| Method | GET |
| Endpoint Path | /products?exclude_year=year_placeholder |
| Body | N/A |
| Parameters | N/A |
| Expected Response | Output |

| Title | Filter products by stock |
| --- | --- |
| Method | GET |
| Endpoint Path | /products?stock=stock_number_placeholder |
| Body | N/A |
| Parameters | N/A |
| Expected Response | Output |

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
| Parameters | [Parameters](./api-documentation/04-get-info-product-id-params.md)  |
| Expected Response | [Output](./api-documentation/04-get-info-product-id.md) |

| Title | Update a document |
| --- | --- |
| Method | PUT |
| Endpoint Path | /products/:productId |
| Body | [Body](./api-documentation/05a-update-document-body.md) |
| Parameters | [Parameters](./api-documentation/05-update-document-params) |
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
| Parameters | N/A |
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
| Parameters | N/A |
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
| Parameters | N/A |
| Expected Response | [Output](./api-documentation/13-user-profile-response.md) |
</details>

## Testing

## Credits