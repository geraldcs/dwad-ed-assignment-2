http://localhost:4000/products?min_sold=10

Expected Response 
```
[
  {
    "_id": "630e30660066909460adbb9d",
    "brand": "Apple",
    "productName": "iPhone 12",
    "productInfo": {
      "description": "Apple's mainstream flagship iPhone for 2020",
      "dimensions": {
        "height": 146.7,
        "width": 71.5,
        "uom": "mm"
      },
      "yearMade": 2020
    },
    "pricePhp": 50890,
    "amountSold": 20
  },
  {
    "_id": "630eb9860568f3e9c5f804f7",
    "brand": "Apple",
    "productName": "iPhone 13 Pro Max",
    "productInfo": {
      "description": "The largest flagship phone of the year 2022",
      "dimensions": {
        "height": 160.8,
        "width": 78.1,
        "uom": "mm"
      },
      "yearMade": 2022
    },
    "pricePhp": 61356,
    "amountSold": 12
  }
]
```