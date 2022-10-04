import express from 'express';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import 'reflect-metadata';

import Router from './routes';
import PostgresDataSource from './config/database';

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

PostgresDataSource.initialize()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`listening on ${PORT}`);
    });
  })
  .catch(err => {
    console.log("Unable to connect to db", err);
    process.exit(1);
  });
