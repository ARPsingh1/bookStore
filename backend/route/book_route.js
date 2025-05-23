import express from 'express';
import { addBook, deletebook, getBook } from '../controller/book_controller.js'; 
const router=express.Router();
 
router.get('/',getBook)
router.post('/',addBook)
router.delete('/:id', deletebook);

export default router;