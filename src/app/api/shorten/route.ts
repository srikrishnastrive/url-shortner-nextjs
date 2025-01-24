import { UrlShortenerService } from "@/services/UrlShortnerService";
import { NextResponse } from "next/server";

const shortenerService = new UrlShortenerService();

export async function POST(req:Request){
    const {originalUrl} = await req.json();
    
    const shortUrl = await shortenerService.shortenUrl(originalUrl);
    return NextResponse.json({shortUrl});
}

export async function GET(){
    const response = await shortenerService.getAllUrls();
    return NextResponse.json({response});
}
