// This is the file to handle the randomization of animes on the frontpage
import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const aniLink = process.env.API_LINK!;
const uri = process.env.DB_URI!;
const client = new MongoClient(uri);


export async function POST(){
    try {


        await client.connect();
        const db = client.db("animeDB");
        const collection = db.collection("searchedNames");

        const results = await collection.find({}, { projection: { _id: 0, name: 1 } }).toArray();
        
        return NextResponse.json(results);


    }
    catch (e) {
        console.error(e);
        return NextResponse.json({ error: e.message }, { status: 500 });
    } 
    finally {
        await client.close();
  }
}