import  Express  from 'express';
import {
    getMethod,
    getMethodById,
    postMethod,
    putMethod,
    deleteMethod
} from '../../controllers/usuarios/usuariosController'

const router = Express.Router();

// /api/usuarios

router.get('/', getMethod); // /api/usuarios -> obtiene todos los usuarios
router.get('/:id', getMethodById); // /api/categorias/1 -> obtiene un usuario en especifico
router.post('/', postMethod); // /api/categorias -> crea un nuevo usuario
router.put('/:id', putMethod); // /api/categorias/1 -> aptualiza un usuario
router.delete('/:id', deleteMethod); // /api/categorias/1 -> elimina un usuario

export default router;