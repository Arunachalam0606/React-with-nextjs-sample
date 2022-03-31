import { MongoClient } from "mongodb";
// /api/new-meetup
//POST /api/new-meetup

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://arunachalam:arun0606@cluster0.ja4vd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    );

    const db = client.db();

    const meetupsCollection = db.collection("myFirstNextDatabase");

    const result = await meetupsCollection.insertOne( data );
    console.log(result);
    client.close();
    res.status(201).json({ message: "Inserted" });
  }
}

export default handler;
