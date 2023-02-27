// importing external packages
import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

// function to pull variables from dotenv file
dotenv.config();

// function to initialize express application
const app = express();
// pass middlewares
app.use(cors());
app.use(express.json({ limit: '50mb' }));

// create routes
app.get('/', async (req, res) => {
    res.status(200).json({
      message: 'Hello from openAI!',
    });
  });

// function to run application / start server
const startServer = async () => {
      app.listen(8080, () => console.log('Server started on port 8080'));
  };
  
  startServer();
  


