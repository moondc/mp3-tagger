import { Request, Response, Router } from 'express';
import { getFilesRecursively } from './../helpers/filesystem';
import { readMusicMetadata } from '../helpers/metadata';

const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
    res.status(200).json({ message: 'Server is up' });
});

router.get('/files_recursively', (req: Request, res: Response) => {
    const dirpath = req.query.path as string;
    const decoded_path = decodeURIComponent(dirpath)
    const result = getFilesRecursively(decoded_path);
    console.log(result);
    res.status(200).json(result);
});

router.get('/file', (req: Request, res: Response) => {
    const filepath = req.query.path as string;
    const decoded_path = decodeURIComponent(filepath)
    const metadata = readMusicMetadata(decoded_path);
    res.status(200).json({ message: `${metadata}` });
});

export default router;
