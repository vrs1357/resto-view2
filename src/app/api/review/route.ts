import { addReview } from "@/services/helpers";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    const { value } = await request.json();

    await addReview(value);

    return Response.json("Successful", { status: 200 });
}