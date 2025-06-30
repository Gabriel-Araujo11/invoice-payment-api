import express from 'express';
import billRoutes from './routes/billRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', billRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
