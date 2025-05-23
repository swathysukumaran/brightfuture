import express from 'express';
import http from 'http';
import bodyparser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './router';
import dotenv from 'dotenv';
import { SpeechClient } from '@google-cloud/speech';
require('dotenv').config();
const app=express();
const allowedOrigins = [
  'http://localhost:5173',
  'https://brightfuture-1.onrender.com', 
];
app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));

app.use(compression());
app.use(cookieParser());

const client = new SpeechClient();
const server=http.createServer(app);

server.listen(8081,()=>{
    console.log('Server is running on http://localhost:8081/');
});
dotenv.config();
const MONGO_URL=process.env.MONGO_URL;
console.log('Mongo URL:',MONGO_URL);

mongoose.Promise=Promise;
mongoose.connect(process.env.MONGO_URL);
mongoose.connection.on('error',(error:Error)=>{console.log(error);});

app.use(bodyparser.json({ limit: '50mb' }));
app.use(express.json({ limit: '50mb' }));

// Increase URL-encoded payload size limit
app.use(bodyparser.urlencoded({ 
  limit: '50mb', 
  extended: true 
}));
app.use('/',router())