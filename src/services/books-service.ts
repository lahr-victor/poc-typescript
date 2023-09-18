import { Book, CreateBook, QueryParams } from '../protocols/books-protocol';
import booksRepository from '../repositories/books-repository';

async function create(book: CreateBook): Promise<CreateBook> {
  return booksRepository.create(book);
}

async function readAll(params: QueryParams): Promise<Book[]> {
  return booksRepository.readAll(params);
}

async function toggleHasBeenRead(id: string): Promise<Book> {
  return booksRepository.toggleHasBeenRead(id);
}

async function remove(id: string): Promise<Book> {
  return booksRepository.remove(id);
}

const booksService = {
  create,
  readAll,
  toggleHasBeenRead,
  remove,
};
export default booksService;
