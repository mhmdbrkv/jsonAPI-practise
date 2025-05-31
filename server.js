import express from "express";
import usersRouter from "./routes/users.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/api/users", usersRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
