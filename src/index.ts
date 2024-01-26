import  Express, {Request, Response}  from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

//framework express
const app = Express();


//middleware
app.use(cors({origin: '*'}));
app.use(Express.json());

app.use('/', (req: Request, res: Response)=>{
    res.send("Hola Mundo")
})


export default app;
