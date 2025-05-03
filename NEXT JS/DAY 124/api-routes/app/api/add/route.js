import { NextResponse } from 'next/server';

export async function POST(request) {
    let data = await request.json()
    console.log(data);
    return NextResponse.json({
        Success: true, data
    });
}
