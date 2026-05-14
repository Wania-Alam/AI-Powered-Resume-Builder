const express = require("express");
const router = express.Router();

const Resume = require("../models/Resume");


// ===============================
// GET ALL RESUMES
// GET /api/resume
// ===============================
router.get("/", async (req, res) => {
  try {
    const resumes = await Resume.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: resumes.length,
      data: resumes,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch resumes",
      error: error.message,
    });
  }
});


// ===============================
// CREATE RESUME
// POST /api/resume
// ===============================
router.post("/", async (req, res) => {
  try {
    const newResume = await Resume.create(req.body);

    res.status(201).json({
      success: true,
      message: "Resume created successfully",
      data: newResume,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create resume",
      error: error.message,
    });
  }
});


// ===============================
// UPDATE RESUME
// PUT /api/resume/:id
// ===============================
router.put("/:id", async (req, res) => {
  try {
    const updatedResume = await Resume.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedResume) {
      return res.status(404).json({
        success: false,
        message: "Resume not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Resume updated successfully",
      data: updatedResume,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update resume",
      error: error.message,
    });
  }
});


// ===============================
// DELETE RESUME
// DELETE /api/resume/:id
// ===============================
router.delete("/:id", async (req, res) => {
  try {
    const deletedResume = await Resume.findByIdAndDelete(req.params.id);

    if (!deletedResume) {
      return res.status(404).json({
        success: false,
        message: "Resume not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Resume deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete resume",
      error: error.message,
    });
  }
});

module.exports = router;