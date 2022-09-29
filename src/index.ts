import express from 'express';
import morgan from 'morgan';
const PORT: string | number = process.env.PORT || 8000;
const app: express.Application = express();

app.use(express.json());
app.use(morgan("tiny"));
app.use(express.static('public'));

app.get('/hello', async (req: express.Request, res: express.Response) => {
  res.send({ message: 'hello' });
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
