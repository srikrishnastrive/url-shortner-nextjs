import { UrlShortenerService } from "@/services/UrlShortnerService";
import { NextResponse } from "next/server";
import { cache } from "react";

const shortenerService = new UrlShortenerService();

const fetchUrls = cache(async () => {
    try {
        const response = await shortenerService.getAllUrls();
        return response;
    } catch (error) {
        console.error("Error fetching URLs:", error);
        throw new Error("Failed to fetch URLs.");
    }
});


export async function GET() {
    try {
        const urls = await fetchUrls();
        const response = NextResponse.json({ urls });
        response.headers.set("Cache-Control", "public, max-age=3600, s-maxage=3600, stale-while-revalidate=59");
        return response;
    } catch (error) {
        console.error("Error in GET handler:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

