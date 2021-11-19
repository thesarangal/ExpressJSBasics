function productKey(request, response, next){

    // Valid API Key
    const validKey = "12345678"

    // Get Query
    const inputKey = request.query.productKey

    // Validate API Key
    if(inputKey && inputKey === validKey){
        next()
        return
    }

    // Send Error Response
    response.json({
        status: false,
        message: "You are not authorized"
    })
}

module.exports = productKey