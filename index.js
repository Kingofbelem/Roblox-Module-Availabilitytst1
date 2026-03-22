const express = require("express");
const app = express();

app.get("/status", (req, res) => {
    res.json({ enabled: true });
});

app.listen(3000, () => console.log("Server running"));
