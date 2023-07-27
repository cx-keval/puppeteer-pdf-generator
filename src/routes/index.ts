import { Router } from "express";
import { getSimpleProfilePDF } from "../controllers/getSimpleProfilePDF";

const router = Router();

//ROUTE: /api/psd/simple-profile - To get simple Profile PDF without graphs
router.post("/simple-profile", getSimpleProfilePDF);

export default router;
