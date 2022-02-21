const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000;
// pass: rPX8HxW17qHxEZEt
// id: crudserver

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://crudserver:rPX8HxW17qHxEZEt@cluster0.qbyvq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
client.connect((err) => {
  const collection = client.db("personalDb").collection("user");
  app.post("/users", (req, res) => {
    const newUser = req.body;
    collection.insertOne(newUser, (err, result) => {
      res.send(result);
    });
  });
  // perform actions on the collection object
  // console.log("connected");
  // const user = { name: "John", email: "john@test.com", phone: "123456789" };
  // collection.insertOne(user).then((result) => console.log(result));
    // client.close();
});

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`server is running on port ${port}`));
