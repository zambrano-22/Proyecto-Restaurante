-- CreateTable
CREATE TABLE "Usuarios" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "correo" TEXT NOT NULL,
    "clave" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "fechaCreacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fechaActualizacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Clientes" (
    "id" SERIAL NOT NULL,
    "tipoDocumento" TEXT NOT NULL,
    "numDocumento" TEXT NOT NULL,
    "edad" INTEGER NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "correo" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,
    "ciudad" TEXT NOT NULL,
    "notas" TEXT NOT NULL,
    "fechaCreacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fechaActualizacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Clientes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Productos" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "precio" DECIMAL(65,30) NOT NULL,
    "descripcion" TEXT NOT NULL,
    "image" TEXT NOT NULL DEFAULT 'https://via.placeholder.com/300k',
    "fechaCreacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fechaActualizacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Productos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Categorias" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "fechaCreacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fechaActualizacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Categorias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pedidos" (
    "id" SERIAL NOT NULL,
    "clienteId" INTEGER NOT NULL,
    "subtotal" DECIMAL(65,30) NOT NULL,
    "total" DECIMAL(65,30) NOT NULL,
    "fechaCreacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fechaActualizacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Pedidos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PedidosItems" (
    "id" SERIAL NOT NULL,
    "productoId" INTEGER NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "subtotal" DECIMAL(65,30) NOT NULL,
    "fechaCreacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fechaActualizacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PedidosItems_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuarios_correo_key" ON "Usuarios"("correo");

-- CreateIndex
CREATE UNIQUE INDEX "Clientes_correo_key" ON "Clientes"("correo");

-- AddForeignKey
ALTER TABLE "Pedidos" ADD CONSTRAINT "Pedidos_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Clientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PedidosItems" ADD CONSTRAINT "PedidosItems_productoId_fkey" FOREIGN KEY ("productoId") REFERENCES "Productos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
