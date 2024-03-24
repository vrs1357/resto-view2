import { client } from "@/db/client";

export async function test() {
  const database = client.db("resto-view-db");
  const users = database.collection("users");

  const user = users.find({});

  while (await user.hasNext()) {
    console.log(await user.next());
  }
}
