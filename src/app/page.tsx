import { test } from "@/services/helpers";
import Image from "next/image";

export default async function Home() {
  await test();
  return <h1>Hello</h1>;
}
