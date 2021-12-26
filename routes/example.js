// import express
import express from "express";
// import controllers
import { GetAll, 
    GetById, 
    Save, 
    Update,
    Delete } from "../controllers/exampleCtrl.js";

    // express router
const router = express.Router();

// Route get All
router.get('/', GetAll);
// Route get single
router.get('/:id', GetById);
// Route CREATE
router.post('/', Save);
// Route UPDATE
router.patch('/:id', Update);
// Route DELETE Product
router.delete('/:id', Delete);

// export router
export default router;

