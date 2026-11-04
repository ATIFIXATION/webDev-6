import express from "express";
const app = express();

const port = 3001;

app.use(express.json());

let teadata=[] 
let nextid=1

app.post("/api/teas", (req, res) => {
  const { name, price } = req.body;
  const newTea = { id: nextid++, name, price };
  teadata.push(newTea); 
  res.status(201).json(newTea);
})

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
