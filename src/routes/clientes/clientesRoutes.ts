import  Express  from 'express';
import {
    getMethod,
    getMethodById,
    postMethod,
    putMethod,
    deleteMethod
} from '../../controllers/clientes/clientesController'

const router = Express.Router();

// /api/clientes

router.get('/', getMethod); // /api/clientes -> obtiene todos los clientes
router.get('/:id', getMethodById); // /api/clientes/1 -> obtiene un cliente en especifico
router.post('/', postMethod); // /api/clientes -> crea un nuevo cliente
router.put('/:id', putMethod); // /api/clientes/1 -> aptualiza un cliente
router.delete('/:id', deleteMethod); // /api/clientes/1 -> elimina un cliente

export default router;