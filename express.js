import express from "express";

const app = express();


const getUser = (name) => {
    return {
        nombre: name ? name : 'Pepe'
    };
};

app.get("/", (_req, res) => {
    res.status(200).json({ status: "ok" });
});

app.get("/user", (req, res) => {
    res.json(getUser());
});

app.get("/user/:nombre", (req, res) => {
    res.json(getUser(req.params.nombre));
});


app.listen(process.env.PORT || 8080);
