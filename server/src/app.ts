import express, { Application } from 'express';
import router from './routes';

const app: Application = express();
const port = 3000;

// Use JSON parser for all incoming requests
app.use(express.json());

// Routes
app.use('/', router);

// Start the Express server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
