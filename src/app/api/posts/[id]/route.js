import Posts from "@/models/Posts";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const { id } = params;

  try {
    await connect();

    const post = await Posts.findById(id);

    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (error) {
    return new NextResponse(`Database error ${error}`, { status: 200 });
  }
};

export const DELETE = async (request, { params }) => {
  const { id } = params;

  try {
    await connect();

    await Posts.findByIdAndDelete(id);

    return new NextResponse("Deleted the post successfully!", { status: 200 });
  } catch (error) {
    return new NextResponse(`Database error ${error}`, { status: 200 });
  }
};
