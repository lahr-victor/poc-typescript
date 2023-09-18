import db from '../database/database-connection';
import { Book, CreateBook, QueryParams } from '../protocols/books-protocol';

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

async function readAll({
  title,
  author,
  publisher,
  genre,
  hasBeenRead,
}: QueryParams): Promise<Book[]> {
  const values = [];

  let query = `
    SELECT
      id,
      title,
      author,
      publisher,
      genre,
      "hasBeenRead" 
    FROM
      books 
    WHERE
      1=1
  `;

  if (title) {
    values.push(`%${title}%`);
    query += `
      AND title ILIKE $${values.length}
    `;
  }

  if (author) {
    values.push(`%${author}%`);
    query += `
      AND author ILIKE $${values.length}
    `;
  }

  if (publisher) {
    values.push(`%${publisher}%`);
    query += `
      AND publisher ILIKE $${values.length}
    `;
  }

  if (genre) {
    values.push(`%${genre}%`);
    query += `
      AND genre ILIKE $${values.length}
    `;
  }

  if (hasBeenRead !== undefined) {
    values.push(hasBeenRead);
    query += `
      AND "hasBeenRead" = $${values.length}
    `;
  }

  query += `
    ORDER BY
        author DESC, title
    ;
  `;

  const { rows } = await db.query(
    query,
    values,
  );

  return rows;
}

const booksRepository = { create, readAll };
export default booksRepository;
