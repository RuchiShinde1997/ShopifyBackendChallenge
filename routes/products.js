const express = require('express')
const route = express.Router();

const Products = require('../models/productSchema')

route.post("/createItem", (req, res) => {
    productRequest = req.body
    let newProduct = new Products()
    newProduct.productTag = productRequest.productTag
    newProduct.name = productRequest.name
    newProduct.brandName = productRequest.brandName
    newProduct.quantity = productRequest.quantity
    newProduct.unitPrice = productRequest.unitPrice
    newProduct.updatedBy = productRequest.updatedBy
    newProduct.save().then(result => {
        res.status(201).send("Items created successfully.")
    }).catch(err => {
        res.status(500).send("Item could not be created.")
    })

})

route.get("/getItems", (req, res) => {
    Products.find({deleted: false}).then(result => {
        res.status(200).send(result)
    }).catch(err => {
        res.status(500).send("Could not get the items.")
    })
})

route.put("/updateItems/itemTag/:productTag", (req, res) => {
    let productTag = req.params.productTag
    let requestBody = req.body
    requestBody["lastUpdated"] = new Date()
    Products.updateOne({ productTag: productTag }, requestBody).then(result => {
        res.status(200).send("Item updated successfully.")
    }).catch(err => {
        res.send(500).send("Item could not be updated.")
    })
})

route.delete("/deleteItem/itemTag/:productTag", (req, res) => {
    let productTag = req.params.productTag
    let commentsBody = req.body.comments
    Products.find({ productTag: productTag, deleted: false }).then(result => {
        console.log(result)
        if (result.length > 0) {
            Products.updateMany({ productTag: productTag }, {deleted: true, deletionComments: commentsBody}).then(deleteResult => {
                res.status(200).send("Item(s) deleted")
            }).catch(error => {
                res.status(200).send("Item(s) could not be deleted")
            })
        } else {
                res.status(500).send("Item not found")
        }
    }).catch(err => {
        res.status(500).send("Item could not be deleted")
    })
})

route.patch("/undeleteItem/itemTag/:productTag", (req, res)=>{
    let productTag = req.params.productTag
    Products.updateMany({productTag: productTag}, {deleted: false}).then(result => {
        res.status(200).send("Items restored")
    }).catch(error => {
        res.status(500).send("Could not undelete items")
    })
})

module.exports = route;