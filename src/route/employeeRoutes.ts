// src/route/employeeRoutes.ts

import express from "express";
import {
	getAllEmployees,
	createEmployee,
	updateEmployee,
	deleteEmployee,
} from "../controller/employeeController.ts";
import validation from "../middleware/validations/validateEmployee.ts";
import employeeSchema from "../middleware/validations/schemas/employeeSchema.ts";

const router = express.Router();

// GET /api/employees - Get all employees
router.get("/", getAllEmployees);

// POST /api/employees - Create a new employee
router.post("/", validation(employeeSchema), createEmployee);

// PATCH /api/employees/:id - Update an existing employee
router.patch("/:id", validation(employeeSchema.partial()), updateEmployee);

// DELETE /api/employees/:id - Delete an employee
router.delete("/:id", deleteEmployee);

export default router;
