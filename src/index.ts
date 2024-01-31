import  Express, {Request, Response}  from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import allRoutes from './routes'
import { notFoundHandler } from './middlewares/errorsHandlers';
import { tokenMiddleware } from './middlewares/token';
dotenv.config();

const prisma = new PrismaClient();
//framework express
const app = Express();


//middleware
app.use(cors({origin: '*'}));
app.use(Express.json());
app.use('/api', tokenMiddleware , allRoutes); // http:localhost:4000/api
app.use(notFoundHandler);


export default app;
