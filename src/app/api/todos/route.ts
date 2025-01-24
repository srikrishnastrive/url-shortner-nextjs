import { NextResponse } from "next/server";




export async function GET(){
    return NextResponse.json({
        todos:['todo1','todo2']
    })
}


export async function POST(){
    return NextResponse.json({
        todo:'Todo 3'
    },{status:200})
}
