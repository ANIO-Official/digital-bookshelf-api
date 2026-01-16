const Book = require('../models/Book')

async function createNewBook (req, res){
    try{
        const newBook = await Book.create(req.body)
        res.status(201).json([{message: 'New Book Added to Shelf.', book: newBook}])
    }catch (error){
        console.error('[ Error creating new book ]', error.message)
        res.status(400).json({error: "Failed to add new book to library."})
    }
}
async function viewLibrary (req, res){
    try{
        const foundBooks = await Book.find({}) //return all
        res.json(foundBooks)
    }catch (error){
        console.error('[ Error encountered while attempting to accesing all books. ]', error.message)
        res.status(404).json({error: "Failed to find books."})
    }
}
async function viewBook (req, res){
    try{
        const foundBooks = await Book.findById(req.params.id) //return all
        res.json(foundBooks)
    }catch (error){
        console.error('[ Error while looking for book by ID. Check if ID parameter is valid. ]', error.message)
        res.status(404).json({error: `Cannot find book of ID ${req.params.id}`})
    }
}
async function editBook (req, res){
    try{
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.json(updatedBook)
    }catch (error){
        console.error('[ Error editing book. Ensure the correct ID has been provided. ]', error.message)
        res.status(404).json({error: `Cannot find book of ID ${req.params.id} for editing.`})
    }
}
async function deleteBook (req, res){
    try{
        const deletedBook = await Book.findByIdAndDelete(req.params.id)
        if(deletedBook){
            console.log('Product Deleted.')
            res.redirect('/')
        }
    }catch (error){
         console.error('[ Error deleting book. Ensure the correct ID has been provided. ]', error.message)
        res.status(404).json({error: `Cannot find book of ID ${req.params.id} for deletion.`})
    }
}

module.exports = {
    createNewBook,
    viewLibrary,
    viewBook,
    editBook,
    deleteBook
}