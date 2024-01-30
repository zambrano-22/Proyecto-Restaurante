import multer from "multer";
import { Request, Response, NextFunction } from "express";
import path from "path";

const uploadPath = path.join(__dirname, '../../uploads');
//Configurar el storage
const storage = multer.diskStorage({
    destination: (req: Request, file, cb) => {
        cb(null, uploadPath);
    },
    filename: (req: Request, file, cb) => {
        cb(null, Date.now()+'-'+file.originalname);
    },
});

//Configurar el middleware
const upload = multer({storage: storage}).single('file');

const uploadMiddleware = (req: Request, res: Response, nex: NextFunction) => {
    upload(req, res, (err: any)=>{
        if (err) return res.status(500).json(err);
        nex();
    })
}

export{uploadMiddleware};