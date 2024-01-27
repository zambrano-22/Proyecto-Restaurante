import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

const getMethod = async(req: Request, res: Response) => {
    try {
        const result = await prisma.productos.findMany();
        return res.status(200).json(result);
    } catch (error) {
        console.log("error::controller::productos", error);
        return res.status(500).json(error);
    }
}

const getMethodById = async(req: Request, res: Response) => {
    const {id} = req.params;
    try {
        const result = await prisma.productos.findUnique({where: {id: parseInt(id)}});
        return res.status(200).json(result);
    } catch (error) {
        console.log("error::controller::productos", error);
        return res.status(500).json(error);
    }
}

const postMethod = async(req: Request, res: Response) => {
    try {
        const {body} = req;
        const result = await prisma.productos.create({data: body});
        return res.status(200).json(result);
    } catch (error) {
        console.log("error::controller::productos", error);
        return res.status(500).json(error);
    }
}

const putMethod = async(req: Request, res: Response) => {
    const {id} = req.params;
    const {body} = req;
    try {
        const result = await prisma.productos.update({
            where: {id: parseInt(id)},
            data: body
        });
        return res.status(200).json(result);
    } catch (error) {
        console.log("error::controller::productos", error);
        return res.status(500).json(error);
    }
}

const deleteMethod = async(req: Request, res: Response) => {
    const {id} = req.params;
    try {
        const result = await prisma.productos.delete({
            where: {id: parseInt(id)}
        });
        return res.status(200).json(result);
    } catch (error) {
        console.log("error::controller::productos", error);
        return res.status(500).json(error);
    }
}

export{
    getMethod,
    getMethodById,
    postMethod,
    putMethod,
    deleteMethod
};