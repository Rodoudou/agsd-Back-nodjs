import express from 'express';
import { getPost, getTest } from '../controllers/emailControllers.js';

const router = express.Router();

// const cors = require('cors');
// app.use(cors());

router.get('/',(req, res)=>{
    res.send('Hello Redouane Amrani')
})

router.get('/test',getTest)

router.post('/mail', getPost)

export default router;