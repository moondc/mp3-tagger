import { Request, Response, Router } from 'express';
import { getFilesRecursively, findFileInDirectory } from './../helpers/filesystem';
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
    readMusicMetadata(decoded_path)
        .then(metadata => {
            console.log(metadata);
            return res.status(200).json(metadata);
        })
        .catch(err => {
            console.log(err)
            return res.status(500).json(err)
        });
});

router.get('/findFile', (req: Request, res: Response) => {
    const fileName = req.query.name as string;
    const decodedName = decodeURIComponent(fileName)
    const directory = req.query.dir as string;
    const decodedDir = decodeURIComponent(directory);
    const result = findFileInDirectory(decodedDir, decodedName);
    console.log({ result })
    return res.status(200).json({ fullFilePath: result });
});



export default router;
