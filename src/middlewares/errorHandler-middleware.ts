import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status';

function errorHandler(error: Error, req: Request, res: Response, next: NextFunction): Response {
  return res.status(httpStatus.INTERNAL_SERVER_ERROR).send('Sorry, something went wrong! 💀');
}

export default errorHandler;
