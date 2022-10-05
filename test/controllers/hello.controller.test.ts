import { HelloController } from '../../src/controllers/hello';

test('return Hello World message', async () => {
  const controller = new HelloController();
  const response = await controller.getMessage();
  expect(response.message).toBe("Hello World");
});