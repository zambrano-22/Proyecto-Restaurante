import  Express  from 'express';
import {
    getMethod,
    getMethodById,
    postMethod,
    putMethod,
    deleteMethod
} from '../../controllers/categorias/categoriasController'

const router = Express.Router();

// /api/categorias

router.get('/', getMethod); // /api/categorias -> obtiene todas las categorias
router.get('/:id', getMethodById); // /api/categorias/1 -> obtiene una categoria en especifico
router.post('/', postMethod); // /api/categorias -> crea una nueva categoria
router.put('/:id', putMethod); // /api/categorias/1 -> aptualiza una categorias
router.delete('/:id', deleteMethod); // /api/categorias/1 -> elimina una categorias

export default router;