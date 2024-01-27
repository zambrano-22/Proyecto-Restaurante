import  Express, {Request, Response}  from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import allRoutes from './routes'
dotenv.config();

const prisma = new PrismaClient();
//framework express
const app = Express();


//middleware
app.use(cors({origin: '*'}));
app.use(Express.json());

app.use('/api', allRoutes); // http:localhost:4000/api


export default app;
