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

booksRouter.get(
  '/books',
  schemaValidator.query(bookSchema.readAll),
  booksController.readAll,
);

booksRouter.put(
  '/books',
  booksController.toggleHasBeenRead,
);

booksRouter.delete(
  '/books',
  booksController.remove,
);

export default booksRouter;
