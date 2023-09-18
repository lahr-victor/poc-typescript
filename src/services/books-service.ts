import { CreateBook } from '../protocols/books-protocol';
import booksRepository from '../repositories/books-repository';

async function create(book: CreateBook): Promise<CreateBook> {
  return booksRepository.create(book);
}

const booksService = { create };
export default booksService;
