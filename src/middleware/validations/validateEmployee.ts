// src/middleware/validations/validateEmployee.ts

import { ZodError, ZodType } from "zod";
import { RequestHandler } from "express";

export default function validateEmployee(
	schema: ZodType<any, any, any>
): RequestHandler {
	return (req, _, next) => {
		const result = schema.safeParse(req.body);
		if (!result.success) {
			throw new ZodError(result.error.issues);
		}
		next();
	};
}
