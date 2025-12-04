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

        const results = await collection.aggregate([{ $sample: { size: 10} }, { $project: { _id: 0, name: 1}}]).toArray();
        const names = results.map(item => item.name);
        
        async function randomTen(name : string){
            const query = `
                query ($search: String) {
                    Page(perPage: 10) {
                        media(search: $search, type: ANIME) {
                        id
                        title {
                            romaji
                            english
                        }
                        description
                        genres
                        averageScore
                        season
                        format
                        }    
                    }
                }
            `;
            const body = JSON.stringify({
                query, variables: { search : name },
            });
            const res = await fetch(aniLink, {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body,
            });
            
            const json = await res.json();

            return json?.data?.Page?.media?.[0] || null;
        }

        const animeList = await Promise.all(names.map(randomTen));
        const animeRevised = animeList.filter(item => item !== null);

        return NextResponse.json(animeRevised);
    }
    catch (e) {
        console.error(e);
        return NextResponse.json({ error: e.message }, { status: 500 });
    } 
    finally {
        await client.close();
  }
}

// (Invoke-WebRequest -Uri "http://localhost:3000/api/randomizedCall" -Method POST -ContentType "application/json").Content | ConvertFrom-Json | ConvertTo-Json -Depth 10
