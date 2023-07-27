import { Request, RequestHandler, Response } from "express";
import ReactDOMServer from "react-dom/server";
import { generatePDF } from "../puppeteer/generatePDF";
import { getHTMLPageWithGraph } from "../utils/getHTMLPageWithGraph";
import { Graph } from "../components/Graph";

//ROUTE: /api/pdf/graph-pdf - To get PDF with graph
export const getGraphPDF: RequestHandler = async (
    req: Request,
    res: Response
) => {
    try {
        const jsx = Graph();
        const html = ReactDOMServer.renderToString(jsx);

        // Send the rendered HTML to the client
        const htmlTemplate = getHTMLPageWithGraph(
            html,
            JSON.stringify(req.body)
        );

        const pdf = await generatePDF(htmlTemplate);

        if (pdf) {
            res.writeHead(200, {
                "Content-Type": "application/pdf",
                "Content-Disposition":
                    "attachment; filename=downloaded-file.pdf",
            });
            res.end(pdf);
        } else {
            res.status(500).json({ message: "Something went wrong" });
        }
    } catch (error) {
        console.log(error);
    }
};
