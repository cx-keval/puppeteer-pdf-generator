import { Router } from "express";
import { getSimpleProfilePDF } from "../controllers/getSimpleProfilePDF";
import { getGraphPDF } from "../controllers/getGraphPDF";

const router = Router();

//ROUTE: /api/pdf/simple-profile - To get simple Profile PDF without graphs
router.post("/simple-profile", getSimpleProfilePDF);

//ROUTE: /api/pdf/graph-pdf - To get PDF with graph
router.post("/graph-pdf", getGraphPDF);

export default router;
