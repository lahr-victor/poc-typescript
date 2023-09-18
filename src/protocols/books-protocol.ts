export type Book = {
  id: number;
  title: string;
  author: string;
  publisher: string;
  genre: string;
  hasBeenRead: boolean;
};

export type CreateBook = Omit<Book, 'id' | 'hasBeenRead'>;

export type QueryParams = {
  title?: string;
  author?: string;
  publisher?: string;
  genre?: string;
  hasBeenRead?: boolean;
};
