import  Express  from 'express';
import categoriasRoutes from './categorias/categoriasRoutes';
import clientesRoutes from './clientes/clientesRoutes';
import pedidosRoutes from './pedidos/pedidosRoutes';
import productosRoutes from './productos/productosRoutes';
import usuariosRoutes from './usuarios/usuariosRoutes';
import uploadRoutes from './upload/uploadRoutes'

const router = Express.Router();

// /api

router.use('/categorias', categoriasRoutes); // /api/categorias
router.use('/clientes', clientesRoutes); // /api/clientes
router.use('/pedidos', pedidosRoutes); // /api/pedidos
router.use('/productos', productosRoutes); // /api/productos
router.use('/usuarios', usuariosRoutes); // /api/usuarios
router.use('/upload', uploadRoutes); // /api/upload

export default router;