import { client } from "@/db/client";
import { Int32 } from "mongodb";

export async function test() {
  await client.connect();
  const database = client.db("resto-view-db");
  const users = database.collection("users");

  const user = users.find({});

  while (await user.hasNext()) {
    console.log(await user.next());
  }
}
let date: any = new Date();
const startYear = new Date(date.getFullYear(), 0, 0);
const diffMilliseconds = date.getTime() - startYear.getTime();
const daysSinceStartOfYear = Math.floor(
  diffMilliseconds / (1000 * 60 * 60 * 24)
);
var num = 50;

export async function addReview(value: number) {
  try {
    await client.connect();
    const database = client.db("resto-view-db");
    const reviews = database.collection("reviews");
    const date = daysSinceStartOfYear;
    const review = { Number: num, Score: value, Date: date };
    num++;
    const result = await reviews.insertOne(review);
    console.log(`A document was inserted with the _id: ${result.insertedId}`);
  } catch (e) {
    console.log("e :>> ", e);
  } finally {
    await client.close();
  }
}

export async function readReview(request: any) {
  try {
    await client.connect();
    console.log("Connected to DB");
    let database = client.db("resto-view-db");
    let reviews = database.collection("reviews");
    const query = { Date: request };
    const toReturn = await reviews.find(query).toArray();
    await client.close();
    return toReturn;
  } catch {
    await client.close();
    console.log("error - see stack trace");
    return new Array(0);
  }
}
