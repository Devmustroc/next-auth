import { PrismaClient } from "@prisma/client";
import { GiDelicatePerfume } from "react-icons/gi";

declare global {
    var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

if (process.env.MODE_ENV !== "development") {
  globalThis.prisma = db;
}