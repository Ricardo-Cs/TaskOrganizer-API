import app from "./app";
import dotenv from 'dotenv';

dotenv.config();

app.listen(process.env.SERVER_PORT, () => {
    console.log('Server running on Port 5000')
})