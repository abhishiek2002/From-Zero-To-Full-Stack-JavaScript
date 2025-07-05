import express from "express";

const allStudents = (req, res) => res.send("All students");
const newStudent = (req, res) => res.send("Add new student");
const updateStudent = (req, res) => res.send("Update student info");
const deleteStudent = (req, res) => res.send("Remove student");


export { allStudents, newStudent, updateStudent, deleteStudent };