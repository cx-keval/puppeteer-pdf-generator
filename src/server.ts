import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import router from "./routes";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5005;

//cors & helmet => for security
app.use(cors());
app.use(helmet());

// used to log requests
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));

app.use("/api/pdf/", router);

app.listen(PORT, () =>
    console.log("Server is running at http://localhost:" + PORT)
);
