import type { FastifySchemaTypeBox } from '../types';

export const createSchema = <T extends FastifySchemaTypeBox>(schema: T) => schema;
