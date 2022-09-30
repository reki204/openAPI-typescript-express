import express from 'express';
import { HelloController } from '../controllers/hello';

const router = express.Router();

router.get('/hello', async (req: express.Request, res: express.Response) => {
  const controller = new HelloController();
  const response = await controller.getMessage();

  return res.send(response);
});

export default router;
