import db from '../database/database-connection';
import { CreateBook } from '../protocols/books-protocol';

async function create(book: CreateBook): Promise<CreateBook> {
  const {
    title,
    author,
    publisher,
    genre,
  } = book;

  const { rows } = await db.query<CreateBook>(
    `
    INSERT INTO
      books (title, author, publisher, genre) 
    VALUES
      (
        $1, $2, $3, $4
      )
    ;
    `,
    [title.trim(), author.trim(), publisher.trim(), genre.trim()],
  );

  return rows[0];
}

const booksRepository = { create };
export default booksRepository;
