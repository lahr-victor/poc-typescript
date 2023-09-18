import Joi from 'joi';
import { CreateBook } from '../protocols/books-protocol';

const create = Joi.object<CreateBook>({
  title: Joi
    .string()
    .trim()
    .min(1)
    .max(100)
    .required(),

  author: Joi
    .string()
    .trim()
    .min(1)
    .max(50)
    .required(),

  publisher: Joi
    .string()
    .trim()
    .min(1)
    .max(50)
    .required(),

  genre: Joi
    .string()
    .trim()
    .min(1)
    .max(20)
    .required(),
});

const bookSchema = { create };
export default bookSchema;
