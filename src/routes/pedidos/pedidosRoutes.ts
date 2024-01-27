import  Express  from 'express';
import {
    getMethod,
    getMethodById,
    postMethod,
    putMethod,
    deleteMethod
} from '../../controllers/pedidos/pedidosController'

const router = Express.Router();

// /api/pedidos

router.get('/', getMethod); // /api/pedidos -> obtiene todos los pedidos
router.get('/:id', getMethodById); // /api/categorias/1 -> obtiene un pedido en especifico
router.post('/', postMethod); // /api/categorias -> crea un nuevo pedido
router.put('/:id', putMethod); // /api/categorias/1 -> aptualiza un pedido
router.delete('/:id', deleteMethod); // /api/categorias/1 -> elimina un pedido

export default router;