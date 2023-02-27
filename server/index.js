// importing external packages
import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

// import internal components
import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';


// function to pull variables from dotenv file
dotenv.config();

// function to initialize express application
const app = express();

// pass middlewares
app.use(cors());
app.use(express.json({ limit: '50mb' }));

// import routes
app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);

// create routes
app.get('/', async (req, res) => {
    res.status(200).json({
      message: 'Hello from openAI!',
    });
  });

  const startServer = async () => {
    try {
      connectDB(process.env.MONGODB_URL);
      app.listen(8080, () => console.log('Server started on port 8080'));
    } catch (error) {
      console.log(error);
    }
  };
  
  startServer();
  


