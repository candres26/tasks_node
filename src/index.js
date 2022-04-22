import app from "./app";
import "./database"
import { PORT } from './config';

app.listen(PORT, (req, res) => {
    console.log(`Servidor corriendo en puerto: ${PORT}`);
});