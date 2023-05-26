import { Request, Response, Router } from 'express';
import { writeMusicMetadata, readMusicMetadata } from '../helpers/metadata';


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
        console.log(new_tags);
        writeMusicMetadata(decoded_path, new_tags)
            .then(metadata => {
                //console.log(metadata);
                return res.status(200).json(metadata);
            })
            .catch(err => {
                //console.log(err)
                return res.status(500).json(err)
            });
    });
});


export default router;
