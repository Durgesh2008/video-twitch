import { PrismaClient } from "@prisma/client";
// prevent to create many PrismaClient when hot reaload in delvelopment we hot reload many times 
declare global{
    var prisma : PrismaClient | undefined
}

export const db = globalThis.prisma | new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalThis.prisma = db 