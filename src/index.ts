import express from "express";
const PORT: string | number = process.env.PORT || 8000;
const app: express.Application = express();

app.get("/ping", async (req: express.Request, res: express.Response) => {
  res.send({ message: "pong" });
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
