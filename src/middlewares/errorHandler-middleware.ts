import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status';

function errorHandler(error: Error, req: Request, res: Response, next: NextFunction): Response {
  if (error.name === 'unprocessable') {
    return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.message);
  }

  return res.status(httpStatus.INTERNAL_SERVER_ERROR).send('Sorry, something went wrong! 💀');
}

export default errorHandler;
