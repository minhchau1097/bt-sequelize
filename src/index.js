import express from 'express';
import cors from 'cors';
import rootRoute from './routes/rootRoutes.js';

const app = express();

// mở chặn cho tất cả FE
app.use(cors())
// Định nghĩa middleware trước khi vào request của api
app.use(express.json());
app.listen(8081) // nơi khởi tạo server BE với port 8080 (tự định nghĩa)
app.use('/api',rootRoute)