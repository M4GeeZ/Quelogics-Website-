import express from 'express';
import contactRoutes from './routes/contactRoutes.js';

const app = express();
app.use(express.json());
app.use('/api', contactRoutes);

app.get('/', (req, res) => {
  res.send('Quelogics server running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
