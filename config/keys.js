
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://usermee_30:aim2reach@cluster0-yofix.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});