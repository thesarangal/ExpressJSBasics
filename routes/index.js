/**
 * Router
*/

// Imports
const router = require('express').Router()
const path = require('path')

// Server Route "/download"
router.get("/download", (request, response) => {

    // Pass file in the response for downloading
    response.download(path.resolve(__dirname, '..') + '/index.html')
})

module.exports = router