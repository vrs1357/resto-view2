import { client } from "@/db/client";
import { Int32 } from "mongodb";

export async function test() {
  const database = client.db("resto-view-db");
  const users = database.collection("users");

  const user = users.find({});

  while (await user.hasNext()) {
    console.log(await user.next());
  }
}

export async function addReview(value: number) {
  try {
    const database = client.db("resto-view-db");
    const reviews = database.collection("reviews");
    const date = Math.round(Math.random() * (84 - 81) + 81);
    const review = { Number: 110, Score: value, Date: date };
    const result = await reviews.insertOne(review);
    console.log(`A document was inserted with the _id: ${result.insertedId}`);
  } catch (e) {
    console.log("e :>> ", e);
  }
}
