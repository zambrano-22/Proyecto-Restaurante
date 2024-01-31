import  Express  from 'express';
import {
    getMethod,
    getMethodById,
    loginMethod,
    postMethod,
    putMethod,
    deleteMethod
} from '../../controllers/usuarios/usuariosController'

const router = Express.Router();

// /api/usuarios

router.get('/', getMethod); // /api/usuarios -> obtiene todos los usuarios
router.get('/:id', getMethodById); // /api/usuarios/1 -> obtiene un usuario en especifico
router.post('/', postMethod); // /api/usuarios -> crea un nuevo usuario
router.post('/login', loginMethod); // /api/usuarios -> crea un nuevo usuario
router.put('/:id', putMethod); // /api/usuarios/1 -> aptualiza un usuario
router.delete('/:id', deleteMethod); // /api/usuarios/1 -> elimina un usuario

export default router;