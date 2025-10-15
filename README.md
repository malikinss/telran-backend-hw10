# Homework 10: Employees Back-End with Role-Based Authentication

## 🧩 Task Definition

HW#10 focuses on implementing a secure and role-based Employees management backend.  
The main goals are:

-   Complete the basic Employees CRUD functionality.
-   Introduce authentication middleware to validate JWT tokens.
-   Implement role-based authorization:
    -   401 Unauthorized if token is missing or invalid.
    -   403 Forbidden if the user's role doesn't match the route.
    -   Continue request pipeline if authorized.
-   Update `index.ts` and error handlers to handle errors gracefully.
-   Define access rules:
    -   **GET /employees** – allowed for `ADMIN` and `USER`.
    -   **POST, PATCH, DELETE /employees** – allowed only for `ADMIN`.
    -   **POST /login** – public access.

---

## 📝 Description

This project is a Node.js/Express backend for managing employees.  
It uses TypeScript, in-memory storage with file persistence, and JWT-based authentication.  
The system supports role-based access for `ADMIN` and `USER` roles, ensuring security for sensitive operations.

---

## 🎯 Purpose

-   Build a secure REST API for employee management.
-   Learn how to implement authentication and authorization middleware.
-   Practice TypeScript and Express best practices.
-   Handle validation using Zod for reliable data input.

---

## ✨ Features

-   JWT-based authentication for login and API requests.
-   Role-based authorization for sensitive routes.
-   CRUD operations on employees:
    -   List all employees with optional department filtering.
    -   Add new employees.
    -   Update existing employees.
    -   Delete employees.
-   Input validation using Zod schemas.
-   In-memory storage with JSON file persistence.
-   Graceful shutdown saving all employee data.
-   Standardized error handling for common and validation errors.

---

## 🔍 How It Works

1. **Login:**  
   Users authenticate via `POST /login` with their credentials.  
   A JWT token is issued containing the user's role.

2. **Authentication Middleware:**  
   The `authenticate` middleware validates the token from `Authorization: Bearer <token>` header.  
   Throws `401` if token is missing or invalid.

3. **Authorization Middleware:**  
   The `auth` middleware checks the user role against allowed roles for the route.  
   Throws `403` if the role does not match.

4. **Employees CRUD:**

    - Routes `/api/employees` are protected by authentication and role checks.
    - `GET /api/employees` – accessible for both `USER` and `ADMIN`.
    - `POST, PATCH, DELETE /api/employees` – accessible only for `ADMIN`.

5. **Data Persistence:**  
   Employees are stored in-memory during runtime and saved to `data/employees.json` on server shutdown.

6. **Validation:**  
   Request bodies are validated with Zod schemas to ensure correct data types and constraints.

---

## 📜 Output Example

**GET /api/employees**

```json
[
	{
		"id": "f1a2b3c4-5678-90ab-cdef-1234567890ab",
		"fullName": "Alice Johnson",
		"avatar": "https://example.com/avatar.jpg",
		"department": "Development",
		"birthDate": "1995-05-20",
		"salary": 12000
	}
]
```

````

**POST /login**

```json
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

---

## 📦 Usage

1. Clone the repository:

```bash
git clone https://github.com/malikinss/telran-backend-hw9.git
cd telran-backend-hw9
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file with required environment variables:

```env
PORT=3000
JWT_SECRET=your_secret_key
```

4. Start the development server:

```bash
npm run dev
```

5. Server runs at:

```
http://localhost:3000
```

---

## 🚀 Usage Examples (HTTP)

**Login:**

```bash
curl -X POST http://localhost:3000/api/login \
-H "Content-Type: application/json" \
-d '{"email":"admin@tel-ran.com","password":"Admin12345"}'
```

**Get All Employees (with token):**

```bash
curl -X GET http://localhost:3000/api/employees \
-H "Authorization: Bearer <JWT_TOKEN>"
```

**Add Employee (ADMIN only):**

```bash
curl -X POST http://localhost:3000/api/employees \
-H "Authorization: Bearer <JWT_TOKEN>" \
-H "Content-Type: application/json" \
-d '{"fullName":"John Doe","avatar":"https://example.com/avatar.jpg","department":"QA","birthDate":"1990-01-01","salary":15000}'
```

---

## 🗂 Project Structure

```
src/
 ├─ config/
 │   └─ loadEnv.ts
 ├─ controller/
 │   ├─ accountingController.ts
 │   └─ employeeController.ts
 ├─ middleware/
 │   ├─ auth/
 │   │   └─ auth.ts
 │   ├─ errorHandlers/
 │   │   ├─ errorHandler.ts
 │   │   └─ zodMessageExtractor.ts
 │   └─ validations/
 │       ├─ schemas/
 │       │   └─ employeeSchema.ts
 │       └─ validateEmployee.ts
 ├─ model/
 │   ├─ dtoTypes/
 │   │   ├─ Account.ts
 │   │   ├─ Employee.ts
 │   │   └─ LoginData.ts
 │   └─ errorTypes/
 │       ├─ aaaErrors.ts
 │       └─ employeeErrors.ts
 ├─ route/
 │   ├─ authRoutes.ts
 │   └─ employeeRoutes.ts
 ├─ service/
 │   ├─ accounting/
 │   │   ├─ AccountingService.ts
 │   │   └─ AccountingServiceMap.ts
 │   └─ employee/
 │       ├─ EmployeesServiceMap.ts
 │       └─ EmployeesService.ts
 ├─ utils/
 │   ├─ fileStorage.ts
 │   ├─ mockData.ts
 │   ├─ security/
 │   │   ├─ JwtUtil.ts
 │   │   └─ PasswordUtil.ts
 │   └─ configFuncs.ts
 ├─ server/
 │   └─ app.ts
 └─ index.ts
```

---

## ✅ Dependencies

-   `express` – REST API framework
-   `dotenv` – Environment variable management
-   `jsonwebtoken` – JWT authentication
-   `zod` – Validation schemas
-   `bcrypt` – Password hashing
-   `morgan` – HTTP request logging
-   `uuid` – Unique ID generation
-   `nodemon` – Development auto-reload

---

## 📄 License

MIT License

---

## 🧮 Conclusion

This project demonstrates how to build a secure, role-based REST API using TypeScript, Express, JWT, and Zod.
It shows best practices in authentication, authorization, validation, error handling, and data persistence.

---

Made with ❤️ and `TypeScript` by **Sam-Shepsl Malikin**
````
