const express = require("express");
const cors = require("cors");
const app = express();

require("./config/mongoose.config.ts");
require("./routes/blogPost.routes");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 8000;
app.listen(port, () => console.log(`Listening on port: ${port}`));
