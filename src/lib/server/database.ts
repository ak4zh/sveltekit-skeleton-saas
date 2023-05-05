import { dev } from '$app/environment';
import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as {
	prisma: PrismaClient | undefined
}

const prisma =
	globalForPrisma.prisma ??
	new PrismaClient({
		log: dev ? ['query', 'info', 'warn', 'error'] : [],
	})

if (dev) {
	interface QueryEvent {
		timestamp: Date;
		query: string;
		params?: unknown[];
		duration: number;
		target: number;
	}
    prisma.$on('query', (e: QueryEvent) => {
        console.log('Query: ' + e.query)
        console.log('Params: ' + e.params)
        console.log('Duration: ' + e.duration + 'ms')
    })    
}

if (process.env.NODE_ENV === 'development') globalForPrisma.prisma = prisma

export { prisma };

type Models = Extract<PrismaClient[keyof PrismaClient], { fields: unknown }>;
export function exclude<T extends Models["fields"]>(fields: object, exclude: (keyof T)[]) {
	const keys = Object.keys(fields) as (keyof T)[];
	const excludeSet = new Set(exclude);
	const attributes: Partial<Record<keyof T[][number], boolean>> = {};
	for (const key of keys)
		if (excludeSet.has(key)) attributes[key] = false;
		else attributes[key] = true;
	return attributes;
}