/**
 * # To Create Project: npm init
 * and Enter the project related data
 * 
 * OR npm init -y
 * to Skip Data Entering Process
 *  
 * # To Start Server: node index
 * 
 * # To Install Any Package: npm install PACKAGE_NAME i.e. npm install express
 * OR npm i PACKAGE_NAME i.e. npm i express
 * 
 * #. To Start Server with Auto Restart on Changes: npm run dev
 * where 'dev' is script name which is defined under 'scripts' in 'package.json' file.
 * 
 * To Install 'nodeom': npm install -D nodemon
 * where '-D' means package will install for development mode only.
 * 
 * # To Install EJS (Template Engine): npm i ejs
 */ 

// Imports
const express = require('express')
const path = require('path')
const mainRouter = require('./routes/index')
const inventoryRouter = require('./routes/inventory')

// Initialize Express
const app = express()

// Set PORT
// Change PORT in Terminal via:
// > PORT = 5000 node server
const PORT = process.env.PORT || 3000

// Overide View Engine
app.set('view engine', 'ejs')

// Override Views
app.set('views', path.resolve(__dirname) + '/templates')

// Log EJS Settings
console.log(`View Engine: ${app.get('view engine')}`)
console.log(`EJS Views Location: ${app.get('views')}`)

// StaticMiddleware: To Render Static Files
app.use(express.static('public'))

// Add Routes to Server
app.use(mainRouter)

// To receive BODY Request Parameters as JSON
app.use(express.json())

// To Add Prefix in Routes
app.use("/api", inventoryRouter)

// Server Route "/"
app.get("/", (request, response) => {

    // To send text in the response
    //response.send("Hello Express")

    // To send file in the response
    response.sendFile(path.resolve(__dirname) + '/index.html')
})

// Server Route "/contact"
app.get("/contact", (request, response) => {

    // To send file to EJS for Rendering EJS File
    response.render('contact', 
    {
        title: 'Contact Us'
    } // Passing Object to EJS File for Dynamic Data
    )
})

// Simple Error Handling when Unavailable Requested Path
app.use((request, response, next) => {

    // Pass JSON Response
    response.json({
        status: false,
        message: "Page not found"
        })
})

// Listen Server Request on PORT
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})

