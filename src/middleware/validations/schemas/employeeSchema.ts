// src/middleware/validations/schemas/employeeSchema.ts

import z from "zod";

/** Zod schema for validating employee data. */
const employeeSchema = z.object({
	id: z.uuid().optional(),
	fullName: z.string().min(2, "Full Name is required"),
	avatar: z.url("Avatar must be a valid URL"),
	department: z.string().min(2, "Department is required"),
	birthDate: z
		.string()
		.regex(
			/^\d{4}-\d{2}-\d{2}$/,
			"Birth Date must be in YYYY-MM-DD format"
		),
	salary: z.number().min(0, "Salary must be a positive number"),
});

export default employeeSchema;
