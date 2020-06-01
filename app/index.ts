import express from 'express';
import cors from 'cors';

const normalizePort = (port: string) => parseInt(port, 10);
const PORT = normalizePort(process.env.PORT || '5000');

const app: express.Application = express();
const router: express.Router = express.Router();

import apiRouter from './routers';

// adding cors
app.use(cors());

// Health check
app.get('/', (req, res) => {
    const hello = {
        hello: 'Hello BICE LAB',
        methods: [
            {
                url_params: '/api/indicators/last',
                descriptor: 'Método que entrega los ultimos valores de los elementos',
                structure: {
                    base_url: '/api/indicators/last',
                    params: null,
                },
            },
            {
                url_params: '/api/indicators/:key/values',
                descriptor: 'Método que entrega los ultimos valores de un elemento en particular',
                structure: {
                    base_url: '/api/indicators/last',
                    params: {
                        key: 'cobre|dolar|euro|ipc|ivp|oro|plata|uf|utm|yen',
                    },
                },
            },
        ],
    };
    res.send(hello);
});

// Router
router.use('/api', apiRouter);

// Mounting router
app.use('/', router);

// Start server
app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Starting server at port ${PORT}`);
});
