import  Express  from 'express';
import {
    uploadMethod
} from '../../controllers/upload/uploadController';
import { uploadMiddleware } from '../../middlewares/upload';

const router = Express.Router();

// /api/upload

router.post('/', uploadMiddleware, uploadMethod); // /api/uploads -> crea un nuevo producto


export default router;