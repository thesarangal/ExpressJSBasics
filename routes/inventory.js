/**
 * Inventory Router
*/

// Imports
const router = require('express').Router()
const { json } = require('express')
const path = require('path')
const apiKeyMiddleware = require('../middleware/apiKey')
const productKeyMiddleware = require('../middleware/productKey')

// Apply Middle on Router Level
router.use(apiKeyMiddleware)

// Server Route "/products" with Route Level Middleware
// To Pass Multiple Middleware Just Pass in Array Format: [productKeyMiddleware, productKeyMiddleware]
router.get("/products", productKeyMiddleware, (request, response) => {

    // Pass JSON Response
    response.json({
        status: true,
        message: "Success",
        data: [
        {
            id: 1,
            type: "Windows",
            version: 10
        },
        {
            id: 2,
            type: "Mac",
            version: 12
        },
        {
            id: 3,
            type: "Ubunto",
            version: 18
        }
    ]})
})

// Server Route "/products" with POST method
router.post("/product", (request, response) => {

    const {firstName, lastName} = request.body

    if(!firstName || firstName.replace(/\s/g,"") == "") return response.status(422).json({
        status: false,
        message: "firstName can't be empty"
    })

    if(!lastName || lastName.replace(/\s/g,"") == "") return response.status(422).json({
        status: false,
        message: "lastName can't be empty"
    })

    // Pass JSON Response
    response.json({
        status: true,
        message: "Success",
        data: request.body
        })
})

// Server Route "/products" with DELETE method
router.delete("/product/:productId", (request, response) => {

    const productId= request.params.productId

    if(!productId || productId.replace(/\s/g,"") == "") return response.status(422).json({
        status: false,
        message: "Provide ProductId in the path"
    })

    // Pass JSON Response
    response.json({
        status: true,
        message: "Success",
        data: `Product (${productId}) has been deleted from the database successfully.`
        })
})

module.exports = router