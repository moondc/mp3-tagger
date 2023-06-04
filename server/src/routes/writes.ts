import { Request, Response, Router } from 'express';
import { writeMusicMetadata, readMusicMetadata } from '../helpers/metadata';
import { renameFileSync } from '../helpers/filesystem';
import { getNewName } from '../helpers/filenamer';


const router: Router = Router();

router.post('/', (req: Request, res: Response) => {
    const body = req.body;
    res.status(200).json({
        message: 'POST request to the homepage',
        data: body
    });
});

router.post('/modifyTags', (req: Request, res: Response) => {
    const filepath = req.query.path as string;
    const decoded_path = decodeURIComponent(filepath)
    const tags = req.body;

    readMusicMetadata(decoded_path).then(existingTag => {
        const new_tags = { ...existingTag, ...tags }
        writeMusicMetadata(decoded_path, new_tags)
            .then(metadata => {
                return res.status(200).json(metadata);
            })
            .catch(err => {
                return res.status(500).json(err)
            });
    });
});

router.post('/renameFile', async (req: Request, res: Response) => {
    const currentFile = req.body.currentFile;
    const pattern = req.body.pattern;
    const newFileName = await getNewName(currentFile, pattern);
    const result = renameFileSync(currentFile, newFileName)
    if (result) {
        return res.status(200).json({ result: true, newFile: newFileName });
    }
    return res.status(200).json({ result: false });
});


export default router;
