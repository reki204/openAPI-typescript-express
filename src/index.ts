import express from 'express';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import Router from './routes';

const app: express.Application = express();
const PORT: string | number = process.env.PORT || 8000;

app.use(express.json());
app.use(morgan("tiny"));
app.use(express.static('public'));
app.use('/docs', swaggerUi.serve, swaggerUi.setup(undefined, {
  swaggerOptions: {
    url: '/swagger.json',
  },
}));
app.use(Router);

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
