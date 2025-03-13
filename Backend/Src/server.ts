import express from 'express';
import initRoutes from './Routes/routes'
import cors from 'cors';

const app = express();

app.use(
    cors({
        origin: '*', // Permitindo todas as requisições
    })
);
const port = 8080;

initRoutes(app);
app.listen(port, () => console.log(`Acesse: http://localhost:${port}/`));