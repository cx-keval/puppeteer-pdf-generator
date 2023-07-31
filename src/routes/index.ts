import { Router } from "express";
import { getSimpleProfilePDF } from "../controllers/getSimpleProfilePDF";
import { getGraphPDF } from "../controllers/getGraphPDF";
import { getStaticPDF } from "../controllers/getStaticPDF";
import { getIGProfile } from "../controllers/getIGProfile";

const router = Router();

//ROUTE: /api/pdf/simple-profile - To get simple Profile PDF without graphs
router.post("/simple-profile", getSimpleProfilePDF);

router.post("/get-static-pdf", getStaticPDF);

//ROUTE: /api/pdf/graph-pdf - To get PDF with graph
router.post("/graph-pdf", getGraphPDF);

//ROUTE: /api/pdf/ig-profile - To get Global Search's IG Profile PDF with graph
router.post("/ig-profile", getIGProfile);

export default router;
