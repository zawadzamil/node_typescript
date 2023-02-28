import express from "express";
import { router } from "./Routes";

import { connectDB } from "./Database/Util/connection";

const app: express.Application = express();
app.use(express.json());

const PORT = process.env.PORT || 3001;

// Connect to Mongoose/ MongoDB
connectDB();

app.use("/", router);

app.listen(PORT, (): void => {
    console.log(`Listening on ${PORT}`);
});
