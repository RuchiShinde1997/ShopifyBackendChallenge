# ShopifyBackendChallenge

## Inventory Management System
The APIs perform the following features:
- Create items
- Retrieve all items
- Update items
- Delete items with deletion comments
- Undelete items

### How to use the application?
To test the APIs you would need [Postman](https://www.postman.com/downloads/). 
- Clone the repository [ShopifyBackendChallenge](https://github.com/RuchiShinde1997/ShopifyBackendChallenge)
- cd ShopifyBackendChallenge
- npm i
- npm start
- Now the app is ready to run on your localhost.

If running on localhost, the endpoint will be http://localhost:3000.

If using the Replit app, the endpoint will be https://ShopifyBackendChallenge.ruchishinde.repl.co

### Requests and URIs
All request bodies are sent as raw JSON requests.
1. Create item
   
URI: /items/createItem\
Request Type: POST\
Request: 
{
    "productTag": "dell-latitude7440",
    "name": "Latitude 5440",
    "brandName": "Dell",
    "quantity": 10,
    "unitPrice": 10000,
    "updatedBy": "admin"
}

2. Retrieve all items

URI: /items/getItems
Request Type: GET\

3. Update items

URI: /items/updateItems/itemTag/dell-latitude
Request Type: PUT\
Request:
{
    "name": "Latitude 7440"
}

4. Delete items
URI: /items/deleteItem/itemTag/dell-latitude
Request Type: DELETE\
Request:
{
    "deletionComments": "Testing"
}
5. Undelete items

URI: items/undeleteItem/itemTag/dell-latitude5440
Request Type: PATCH
