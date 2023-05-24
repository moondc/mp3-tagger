import express, { Application } from 'express';
import router from './routes/routes';

const app: Application = express();
const cors = require('cors');
const port = 3000;


// Use JSON parser for all incoming requests
app.use(express.json());

// Cors configuration that allows anything and everything
app.use(cors());

// Routes
app.use('/', router);

// Start the Express server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
