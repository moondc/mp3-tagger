import { Request, Response, Router } from 'express';

const router: Router = Router();

router.post('/', (req: Request, res: Response) => {
    const body = req.body;
    res.status(200).json({
        message: 'POST request to the homepage',
        data: body
    });
});


export default router;
