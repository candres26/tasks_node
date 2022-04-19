import app from "./app";

const PORT = 3000;

app.listen(PORT, (req, res) => {
    console.log(`Servidor corriendo en puerto: ${PORT}`);
});