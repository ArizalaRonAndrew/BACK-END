import * as BookModel from "../models/BookModel.js";

export const fetchBooks = async (req, res) =>{
    try{
        const books = await BookModel.getBooks();
        res.status(200).json({success: true, message: books});
    }catch(e){
        console.log(e);
        res.status(500).json({
            sucess: false,
            message: "Internal Server Error"
        })
    }
    
}

export const createBook = async (req, res) => {
  const {TITLE, GENRE, STATUS} = req.body;
  try {
    const bookId = await BookModel.insertBook(TITLE, GENRE, STATUS);
    res.status(200).json({success: true, message: bookId}) 
    }catch (e){
      console.log(e);
      res.status(500).json({success: false, message: "Internal Server Error" })
  }
}

export const editBook = async (req, res) => {
  const {TITLE, GENRE, STATUS} = req.body;
  const {bookId} = req.params;

  try {
    const updatedId = await BookModel.updateBook(TITLE, GENRE, STATUS, bookId);
    res.status(200).json({success: true, message: updatedId}) 
    }catch(e){
      console.log(e);
      res.status(500).json({success: false, message: "Internal Server Error" })
  }
}

export const deleteBook = async (req, res) => {
  const {bookId} = req.params;

  try {
    const deletedId = await BookModel.deleteBook(bookId);
    res.status(200).json({success: true, message: deletedId}) 
    }catch(e){
      console.log(e);
      res.status(500).json({success: false, message: "Internal Server Error" })
  }
}