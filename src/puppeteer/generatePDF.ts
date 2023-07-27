import puppeteer from "puppeteer";

export const generatePDF = async (template: string) => {
    try {
        // Create a browser instance
        const browser = await puppeteer.launch();

        // Create a new page
        const page = await browser.newPage();

        // Set html markup to page and wait until all network requests are fulfilled
        await page.setContent(template, {
            waitUntil: "networkidle2",
        });

        //To reflect CSS used for screens instead of print
        await page.emulateMediaType("screen");

        // Measure the page height and store it to set the PDF height.
        const pdfHeight = await page.evaluate(() => {
            const body = document.body;
            const html = document.documentElement;
            return Math.max(
                body?.scrollHeight || 0,
                body?.offsetHeight || 0,
                html?.clientHeight || 0,
                html?.scrollHeight || 0,
                html?.offsetHeight || 0
            );
        });

        // Get PDF buffer in variable
        const pdf = await page.pdf({
            margin: {
                // path: "result.pdf", // <-- apply this if you want to save file in root dir. of server
                top: "50px",
                right: "50px",
                bottom: "50px",
                left: "50px",
            },
            printBackground: true,
            // format: "A4" // <-- apply format as needed
            // Note: don't specify format and set a manual height if you want single Long page
            height: pdfHeight + "px",
        });

        // Close the browser instance
        await browser.close();

        return pdf;
    } catch (error) {
        console.log(error);
        return false;
    }
};
