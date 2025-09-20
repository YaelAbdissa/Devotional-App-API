import Joi from 'joi';
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

import userRoute from './routes/userRoute.js';
import devotionRoute from './routes/devotionRoute.js';



const app = express()

app.use(bodyParser.json());
dotenv.config();

// PORT env
const PORT = process.env.PORT || 3000;
const MONGOURL = process.env.MONGO_URl;;

// Connect to MongoDB
mongoose.connect(MONGOURL)
    .then(() => {
        console.log('Connected to MongoDB...');
        app.listen(PORT, () => console.log(`Server listening on port ${PORT}...`))
    })

    .catch(err => console.error('Could not connect to MongoDB...', err));

app.use(express.json());

app.use('/api/user', userRoute);
app.use('/api/devotion', devotionRoute);



