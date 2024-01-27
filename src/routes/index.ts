import  Express  from "express";

const router = Express.Router();

// /api

router.use('/categorias'); // /api/categorias
router.use('/clientes'); // /api/clientes
router.use('/pedidos'); // /api/pedidos
router.use('/productos'); // /api/productos
router.use('/usuarios'); // /api/usuarios

export default router;