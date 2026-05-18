const express = require('express')

const router = express.Router()

const auth = require('../middleware/auth')

const {
  createDocument,
  getMyDocuments,
  getSingleDocument,
  updateDocument,
  deleteDocument
} = require('../controllers/documentController')

// CREATE
router.post(
  '/create',
  auth,
  createDocument
)

// GET ALL
router.get(
  '/my-documents',
  auth,
  getMyDocuments
)

// GET SINGLE
router.get(
  '/single/:id',
  auth,
  getSingleDocument
)

// UPDATE
router.put(
  '/update/:id',
  auth,
  updateDocument
)

// DELETE
router.delete(
  '/delete/:id',
  auth,
  deleteDocument
)

module.exports = router