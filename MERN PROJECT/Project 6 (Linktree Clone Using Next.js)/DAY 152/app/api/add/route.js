import clientPromise from "@/lib/mogodb";

export async function POST(request) {
    try {
        const body = await request.json();

        // Sanitize handle: lowercase, remove special characters (only letters, numbers, _ and - allowed)
        const cleanHandle = body.handle.toLowerCase().replace(/[^a-z0-9_-]/g, '');

        const client = await clientPromise;
        const db = client.db("bittree");
        const collection = db.collection("links");

        // Check if the handle is already taken
        const existingDoc = await collection.findOne({ handle: cleanHandle });

        if (existingDoc) {
            return Response.json({
                success: false,
                error: true,
                message: "This Bittree already exists!",
                result: null,
            });
        }

        // Prepare the final sanitized document
        const sanitizedBody = {
            ...body,
            handle: cleanHandle, // Replace with sanitized handle
        };

        const result = await collection.insertOne(sanitizedBody);

        return Response.json({
            success: true,
            error: false,
            message: "Your Bittree has been generated!",
            result: result,
        });
    } catch (error) {
        console.error("Error in POST /api/add:", error);
        return Response.json({
            success: false,
            error: true,
            message: "Internal Server Error",
            result: null,
        }, { status: 500 });
    }
}