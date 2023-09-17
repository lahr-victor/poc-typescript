import { Request, Response, NextFunction } from 'express';
import { ObjectSchema } from 'joi';
import applicationError from '../errors/index';

function body(schema: ObjectSchema) {
  return (req: Request, res: Response, next: NextFunction): void => {
    const validation = schema.validate(req.body, { abortEarly: false });

    if (validation.error) {
      const errors = validation.error.details.map((detail) => detail.message);
      throw applicationError.unprocessable(errors);
    }

    return next();
  };
}

function query(schema: ObjectSchema) {
  return (req: Request, res: Response, next: NextFunction): void => {
    const validation = schema.validate(req.query, { abortEarly: false });

    if (validation.error) {
      const errors = validation.error.details.map((detail) => detail.message);
      throw applicationError.unprocessable(errors);
    }

    return next();
  };
}

const schemaValidator = { body, query };
export default schemaValidator;
