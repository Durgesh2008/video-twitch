import { PrismaClient } from "@prisma/client";

// Prevent creating multiple PrismaClient instances during hot reload in development
declare global {
  var prisma: PrismaClient | undefined;
}

// Initialize PrismaClient only once
export const db = globalThis.prisma || new PrismaClient();

// Assign PrismaClient instance to global variable for development environment
if (process.env.NODE_ENV !== 'production') globalThis.prisma = db;
