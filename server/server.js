import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectdb from './mongodb.js';
import router from './browse/userRoutes.js';
import imageRouter from './browse/imageRoutes.js';

const  app =express();
app.use(express.json());
dotenv.config();
app.use(cors());
connectdb();

app.use('/api/user', router);
app.use('/api/image', imageRouter);
app.get('/' , (req, res) => {
    res.send('Hello from the server!');
}
);
app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on port ${process.env.PORT || 5000}`);
}
);