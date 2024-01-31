import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import bcrypy from 'bcrypt';
import jwt from 'jsonwebtoken';
const prisma = new PrismaClient();

const getMethod = async(req: Request, res: Response) => {
    try {
        const result = await prisma.usuarios.findMany();
        return res.status(200).json(result);
    } catch (error) {
        console.log("error::controller::usuarios", error);
        return res.status(500).json(error);
    }
}

const getMethodById = async(req: Request, res: Response) => {
    const {id} = req.params;
    try {
        const result = await prisma.usuarios.findUnique({where: {id: parseInt(id)}});
        return res.status(200).json(result);
    } catch (error) {
        console.log("error::controller::usuarios", error);
        return res.status(500).json(error);
    }
}

const postMethod = async(req: Request, res: Response) => {
    try {
        const {body} = req;
        //primero que no exista en la base de datos
        const exists = await prisma.usuarios.findUnique({where: {correo: body.correo}});
        if (exists) {
            return res.status(400).json({message: 'El correo electronico ya extiste'});
        }

        const hashedPassword = await bcrypy.hashSync(body.clave, 10);
        body.clave = hashedPassword;
        const result = await prisma.usuarios.create({data: body});
        return res.status(201).json(result);
    } catch (error) {
        console.log("error::controller::usuarios", error);
        return res.status(500).json(error);
    }
}

const putMethod = async(req: Request, res: Response) => {
    const {id} = req.params;
    const {body} = req;
    try {
        const result = await prisma.usuarios.update({
            where: {id: parseInt(id)},
            data: body
        });
        return res.status(200).json(result);
    } catch (error) {
        console.log("error::controller::usuarios", error);
        return res.status(500).json(error);
    }
}

const deleteMethod = async(req: Request, res: Response) => {
    const {id} = req.params;
    try {
        const result = await prisma.usuarios.delete({
            where: {id: parseInt(id)}
        });
        return res.status(200).json(result);
    } catch (error) {
        console.log("error::controller::usuarios", error);
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