import express from 'express';
import router from "./routes/router.js";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

app.use('/', router);

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
