import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { CreateBook } from '../protocols/books-protocol';
import booksService from '../services/books-service';

async function create(req: Request, res: Response): Promise<Response> {
  const book = req.body as CreateBook;
  await booksService.create(book);

  return res.sendStatus(httpStatus.CREATED);
}

const booksController = { create };
export default booksController;
