const express = require('express')
const router = express.Router()
require("dotenv").config();
const port = process.env.PORT || 3001; //access port variable for root
const bookController = require('../controllers/bookController')

//Root
router.get('/', (req, res) =>{
    res.send(`
        <h1>Bookshelf Directory</h1>

        <a href="http://localhost:${port}/bookshelf/view-library">
        <button>
            View Library
        </button>
        </a>

        <p>
        <h2>Routes Available</h2>
        <p><i>Add these to the current url.</i></p>
        <h3>Create</h3> /add-to-library </br>
        Books contain: title (required string), author (required string), A unique isbn, a publicationDate, and
        an inStock status (will default to true when not provided.)</br>
        <h4>Example</h4>
        {
        "title": "Little Nightmares",
        "author": "Betora Storyteller",
        "isbn": "0952FB236",
        "publicationDate": "2018-11-13",
        "inStock": true
        
        }</br>
        <h3>Read All</h3> Use button above or /view-library </br>
        <h3>Read Book by ID</h3> /view-book/:id </br>
        <h3>Update Book by ID</h3> /edit-book/:id </br>
        <h3>Delete Book by ID</h3> /delete-book/:id
        </p></br>
        <p><i>Find all IDs within the main 'Read All' Route.</i></p>
        `)
})

//Create
router.post('/add-to-library', bookController.createNewBook)

//Read All
router.get('/view-library', bookController.viewLibrary)

//Read by ID
router.get('/view-book/:id', bookController.viewBook)

//Update
router.put('/edit-book/:id', bookController.editBook)

//Delete
router.delete('/delete-book/:id', bookController.deleteBook)

module.exports = router