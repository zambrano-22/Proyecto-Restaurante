import  Express  from 'express';
import {
    getMethod,
    getMethodById,
    postMethod,
    putMethod,
    deleteMethod
} from '../../controllers/productos/productosController'

const router = Express.Router();

// /api/productos

router.get('/', getMethod); // /api/productos -> obtiene todos los productos
router.get('/:id', getMethodById); // /api/categorias/1 -> obtiene un producto en especifico
router.post('/', postMethod); // /api/categorias -> crea un nuevo producto
router.put('/:id', putMethod); // /api/categorias/1 -> aptualiza un producto
router.delete('/:id', deleteMethod); // /api/categorias/1 -> elimina un producto

export default router;