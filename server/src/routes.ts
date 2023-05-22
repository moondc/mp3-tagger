import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();

// GET Route
router.get('/', (req: Request, res: Response) => {
    res.status(200).json({ message: 'GET request to the homepage' });
});

// POST Route
router.post('/', (req: Request, res: Response) => {
    const body = req.body;
    res.status(200).json({
        message: 'POST request to the homepage',
        data: body
    });
});

export default router;
