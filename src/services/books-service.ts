import { Book, CreateBook, QueryParams } from '../protocols/books-protocol';
import booksRepository from '../repositories/books-repository';

async function create(book: CreateBook): Promise<CreateBook> {
  return booksRepository.create(book);
}

async function readAll(params: QueryParams): Promise<Book[]> {
  return booksRepository.readAll(params);
}

const booksService = { create, readAll };
export default booksService;
