import Posts from "@/models/Posts";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  const url = new URL(request.url);
  const username = url.searchParams.get("username");

  try {
    await connect();

    const posts = await Posts.find(username && { username });

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new NextResponse(`Database error ${error}`, { status: 500 });
  }
};

export const POST = async (request) => {
  const body = await request.json();

  const newPost = new Posts(body);

  console.log(newPost);

  try {
    await connect();

    await newPost.save();

    return new NextResponse("Post added!", { status: 201 });
  } catch (error) {
    return new NextResponse(`Database error ${error}`, { status: 500 });
  }
};
