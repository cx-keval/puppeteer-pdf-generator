import type { Request, RequestHandler, Response } from "express";
import { generatePDF } from "../puppeteer/generatePDF";
import IGProfile from "../components/GlobalSearch/IGProfile";
import { IGProfileWithGraphs } from "../templates/GS/IGProfileWithGraphs";

//CONTROLLER For: /api/pdf/get-static-pdf
export const getIGProfile: RequestHandler = async (
    req: Request,
    res: Response
) => {
    try {
        const socialPage = req.body;

        //Save & Send the rendered HTML to the client
        const html = IGProfile({ socialPage });

        const data = {
            statHistory: socialPage?.statHistory,
            credibility: socialPage?.audience?.credibility,
            genders: socialPage?.audience?.genders,
            gendersPerAge: socialPage?.audience?.gendersPerAge,
            recentPosts: socialPage?.recentPosts?.map((e: any) => ({
                likes: e.likes,
                comments: e.comments,
                created: e.created,
            })),
        };

        const finalHTML = IGProfileWithGraphs({
            children: html,
            stringifiedData: JSON.stringify(data),
        });

        const pdf = await generatePDF(finalHTML);

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
