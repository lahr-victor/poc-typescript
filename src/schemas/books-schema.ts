import Joi from 'joi';
import { CreateBook, QueryParams } from '../protocols/books-protocol';

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

const readAll = Joi.object<QueryParams>({
  title: Joi
    .string()
    .trim()
    .min(1)
    .max(100)
    .optional(),

  author: Joi
    .string()
    .trim()
    .min(1)
    .max(50)
    .optional(),

  publisher: Joi
    .string()
    .trim()
    .min(1)
    .max(50)
    .optional(),

  genre: Joi
    .string()
    .trim()
    .min(1)
    .max(20)
    .optional(),

  hasBeenRead: Joi
    .boolean()
    .optional(),
});

const bookSchema = { create, readAll };
export default bookSchema;
