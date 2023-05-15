import cors from 'cors';
import express, { Application, Request, Response } from 'express';

const app: Application = express();
// server port
const port: number | string = process.env.PORT || 5005;
// database require
// connect();
// parser
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
	res.send('Hello World!');
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
