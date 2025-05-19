const express = require("express");
const bookRoutes = require("./routes/bookRoutes");

const app = express();
app.use(express.json());

app.get("/api/books", bookRoutes);

app.use((req, res, next)=> {
    res.status(404).json({
        message: "Not found",
        status: "fail",
        requestedUrl: req.originalUrl
    })
}
)

app.listen(3000, () => {
  console.log("welcome to port 3000");
});
