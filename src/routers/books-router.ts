import { Router } from 'express';
import schemaValidator from '../middlewares/schemaValidator-middleware';
import bookSchema from '../schemas/books-schema';
import booksController from '../controllers/books-controller';

const booksRouter = Router();

booksRouter.post(
  '/books',
  schemaValidator.body(bookSchema.create),
  booksController.create,
);

export default booksRouter;
