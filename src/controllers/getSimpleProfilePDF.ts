import type { Request, RequestHandler, Response } from "express";
import ReactDOMServer from "react-dom/server";
import { SimpleProfile } from "../components/SimpleProfile";
import { generatePDF } from "../puppeteer/generatePDF";
import { getHTMLPage } from "../utils/getHTMLPage";

//CONTROLLER For: /api/user/createuser - To register new user account
export const getSimpleProfilePDF: RequestHandler = async (
    req: Request,
    res: Response
) => {
    try {
        const jsx = SimpleProfile(req.body);
        const html = ReactDOMServer.renderToString(jsx);

        //Save & Send the rendered HTML to the client
        const htmlTemplate = getHTMLPage(html);
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
