function apiKey(request, response, next){

    // Valid API Key
    const api_key = "12345678"

    // Get Query
    const inputKey = request.query.key

    // Validate API Key
    if(inputKey && inputKey === api_key){
        next()
        return
    }

    // Send Error Response
    response.json({
        status: false,
        message: "You are not authorized"
    })
}

module.exports = apiKey