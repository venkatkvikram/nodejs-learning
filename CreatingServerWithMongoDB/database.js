const { MongoClient } = require("mongodb");
// Go to mongodb website
// create a free M0 cluster
// Create a user
// Get the connection string
const url = "mongodb+srv://venkatasai:apH08PfR9ekw1lAD@node-learn.0giuomi.mongodb.net/"; //database is managed on a AWS server by MongoDB
const client = new MongoClient(url);

const dbName = "HelloWorld";

async function main() {
  await client.connect();
  console.log("Successfully connected to server");
  const db = client.db(dbName);
  const collection = db.collection("User");
  const findResult = await collection.find({}).toArray();
  console.log("FOund docs =>", findResult);
  return "done";

}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
//MongoDB compass allows us to acess the database
