import { PrismaClient } from "@prisma/client";
import { logger } from "./logger";

// ? Create Prisma Client
const prisma = new PrismaClient();

// ? Export
export { prisma };