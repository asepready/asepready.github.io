// import express
import express from "express";
// import controllers
import { GetAll, 
    GetById, 
    Save, 
    Update,
    Delete } from "../controllers/authorCtrl.js";

    // express router
const router = express.Router();

// Route get All
router.get('/author/', GetAll);
// Route get single
router.get('/author/:id', GetById);
// Route CREATE
router.post('/author/', Save);
// Route UPDATE
router.patch('/author/:id', Update);
// Route DELETE Product
router.delete('/author/:id', Delete);

// export router
export default router;

