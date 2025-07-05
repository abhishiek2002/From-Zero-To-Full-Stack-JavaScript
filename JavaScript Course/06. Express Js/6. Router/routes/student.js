import express from "express";
const router = express.Router();

router.get("/all", (req, res) => {
  res.send("All Students");
});
router.post("/create", (req, res) => {
  res.send("Sign in New Student");
});
router.put("/update", (req, res) => {
  res.send("Update Student Id");
});
router.delete("/delete", (req, res) => {
  res.send("Remove Student");
});

export default router;
