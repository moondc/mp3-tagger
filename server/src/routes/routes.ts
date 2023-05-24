import express, { Router } from 'express';
import reads from './reads';
import writes from './writes';

const router: Router = express.Router();

router.use('/', reads);

router.use('/', writes);


export default router;
