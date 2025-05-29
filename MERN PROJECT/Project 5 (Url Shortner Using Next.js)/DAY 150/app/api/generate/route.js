import clientPromise from "@/lib/mongodb"
import { NextResponse } from "next/server"

export async function POST(request) {
  try {
    const body = await request.json();

    const client = await clientPromise;
    const db = client.db("Ushort");
    const collection = db.collection("url");

    // Check if the short URL exists
    const doc = await collection.findOne({ shorturl: body.shorturl });
    if (doc) {
      return NextResponse.json({
        success: false,
        error: true,
        message: 'URL already exists!'
      });
    }

    // Insert new URL
    const result = await collection.insertOne({
      url: body.url,
      shorturl: body.shorturl
    });

    return NextResponse.json({
      success: true,
      error: false,
      message: 'URL Generated Successfully'
    });

  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json({
      success: false,
      error: true,
      message: 'Something went wrong'
    }, { status: 500 });
  }
}
