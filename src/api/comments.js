import { MongoClient } from "mongodb";

async function handler(req, res) {
  //   if (req.method === "POST") {
  //     const data = req.body;
  //     const client = await MongoClient.connect(
  //       "mongodb+srv://yauheni:68oqJ5nDdnaEribb@cluster0.x7tkp.mongodb.net/commentsGuitarLessonsPoznan?retryWrites=true&w=majority"
  //     );
  //     const db = client.db();
  //     const commentsGuitarLessonsPoznanCollection = db.collection(
  //       "commentsGuitarLessonsPoznan"
  //     );
  //     const result = await commentsGuitarLessonsPoznanCollection.insertOne(data);
  //     console.log(result);
  //     client.close();
  //     res.status(201).json({ message: "Comment Save" });
  //   }
}

export default handler;
