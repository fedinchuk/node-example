import express from "express";

const app = express();
const port = 3000;

app.get("/hello", (_reg, res) => {
  res.send("Вітаємо у світі Node.js і Express!");
});

app.listen(port, () => {
  console.log(`Відповідь з серверна на порт ${port}`);
});
