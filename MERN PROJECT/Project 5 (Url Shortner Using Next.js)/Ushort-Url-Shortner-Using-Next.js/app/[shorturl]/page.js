import { redirect } from "next/navigation";
import clientPromise from "@/lib/mongodb";

export default async function Page({ params }) {
    const shorturl = params.shorturl;

    const client = await clientPromise;
    const db = client.db("Ushort");
    const collection = db.collection("url");

    const doc = await collection.findOne({ shorturl });
    console.log("Fetched doc:", doc);

    if (doc && doc.url) {
        const fullUrl = doc.url.startsWith("http") ? doc.url : `https://${doc.url}`;
        redirect(fullUrl);
    } else {
        redirect(process.env.NEXT_PUBLIC_HOST || "http://localhost:3000/");
    }
}
