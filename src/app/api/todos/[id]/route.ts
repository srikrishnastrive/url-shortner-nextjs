import { NextResponse } from "next/server";




export async function GET(request:Request, {params}: {params:{id:string}}){
    const {id} = params;
    const {searchParams} = new URL(request.url);
    console.log(searchParams.get('title'));

    return NextResponse.json({
        todo :'Todo'+id
    })
}


export async function POST(request:Request){
    console.log(await request.json());
    return NextResponse.json({
       response:'true'
    })
}
