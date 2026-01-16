const mongoose = require("mongoose");
const { Schema } = mongoose;

//Structure Schema with Validation
const bookSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  author: {
    type: String,
    required: [true, "Author is required"],
  },
  isbn: {
    type: String,
    unique: [true, "ISBN must be unique and a string."]
  },
  publicationDate: Date,
  inStock: {
    type: Boolean,
    default: true,
  },
});

//Compile and Export
const Book = mongoose.model('Book', bookSchema);
module.exports = Book