// This is the file to handle the randomization of animes on the frontpage
import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const aniLink = process.env.API_LINK!;
const uri = process.env.DB_URI!;
const client = new MongoClient(uri);


export async function POST(req: Request){
    






}