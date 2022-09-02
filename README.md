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

</details>

## Testing

## Credits