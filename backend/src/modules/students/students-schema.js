const { z } = require("zod");

// Simple reusable validators
const idField = z.string().regex(/^\d+$/, "ID must be a number");
const dateField = z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be in YYYY-MM-DD format");

// Base student fields
const studentBody = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Valid email is required"),
    gender: z.enum(["Male", "Female", "Other"]).optional(),
    phone: z.string().optional(),
    dob: dateField.optional(),
    currentAddress: z.string().optional(),
    permanentAddress: z.string().optional(),
    fatherName: z.string().optional(),
    fatherPhone: z.string().optional(),
    motherName: z.string().optional(),
    motherPhone: z.string().optional(),
    guardianName: z.string().optional(),
    guardianPhone: z.string().optional(),
    relationOfGuardian: z.string().optional(),
    class: z.string().optional(),
    section: z.string().optional(),
    admissionDate: dateField.optional(),
    roll: z.number().int().positive().optional(),
    systemAccess: z.boolean().optional()
});

const StudentCreateSchema = z.object({
    body: studentBody
});

const StudentUpdateSchema = z.object({
    params: z.object({ id: idField }),
    body: studentBody.partial()
});

const StudentParamsSchema = z.object({
    params: z.object({ id: idField })
});

const StudentStatusSchema = z.object({
    params: z.object({ id: idField }),
    body: z.object({ status: z.boolean() })
});

const StudentQuerySchema = z.object({
    query: z.object({
        name: z.string().optional(),
        className: z.string().optional(),
        section: z.string().optional(),
        roll: z.coerce.number().int().positive().optional()
    })
});

module.exports = {
    StudentCreateSchema,
    StudentUpdateSchema,
    StudentParamsSchema,
    StudentStatusSchema,
    StudentQuerySchema
};