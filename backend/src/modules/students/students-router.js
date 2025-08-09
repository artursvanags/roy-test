const express = require("express");
const router = express.Router();
const studentController = require("./students-controller");
const { validateRequest } = require("../../utils");
const {
    StudentCreateSchema,
    StudentUpdateSchema,
    StudentParamsSchema,
    StudentStatusSchema,
    StudentQuerySchema
} = require("./students-schema");

router.get("", validateRequest(StudentQuerySchema), studentController.handleGetAllStudents);
router.post("", validateRequest(StudentCreateSchema), studentController.handleAddStudent);
router.get("/:id", validateRequest(StudentParamsSchema), studentController.handleGetStudentDetail);
router.post("/:id/status", validateRequest(StudentStatusSchema), studentController.handleStudentStatus);
router.put("/:id", validateRequest(StudentUpdateSchema), studentController.handleUpdateStudent);

module.exports = { studentsRoutes: router };
