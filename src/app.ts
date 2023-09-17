import chalk from 'chalk';
import cors from 'cors';
import dotenv from 'dotenv';
import express, { json } from 'express';

dotenv.config();

const app = express();
app.use(cors());
app.use(json);

const port = Number(process.env.PORT) || 5000;
app.listen(port, (): void => {
  console.log(chalk.bgGreen(`Running server on port ${port}! 🚀`));
});
