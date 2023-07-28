import type { Request, RequestHandler, Response } from "express";
import { generatePDF } from "../puppeteer/generatePDF";
import { getStaticPage } from "../utils/loadStaticPage";

//CONTROLLER For: /api/pdf/get-static-pdf
export const getStaticPDF: RequestHandler = async (
    _: Request,
    res: Response
) => {
    try {
        //Save & Send the rendered HTML to the client
        const htmlTemplate = getStaticPage();

        const pdf = await generatePDF(htmlTemplate);

        if (pdf) {
            res.writeHead(200, {
                "Content-Type": "application/pdf",
                "Content-Disposition":
                    "attachment; filename=downloaded-file.pdf",
            });
            res.end(pdf);
        } else {
            res.status(400).json({ message: "Something went wrong" });
        }
    } catch (error) {
        console.log(error);
    }
};
