const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

// Routers
const moviesRouter = require('./routes/movies')

const port = process.env.PORT || 3030

const app = express()

app.set('view engine', 'pug')

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json())

app.use(moviesRouter)

app.listen(port, () => console.log(`Server running on port ${port}`))
