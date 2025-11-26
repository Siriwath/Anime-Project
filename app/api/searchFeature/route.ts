// This is the file to handle the api call to a specific tag ie. Anime Name, Genere, Ratings etc.
import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const aniLink = process.env.API_LINK!; 
const uri = process.env.DB_URI!;
const client = new MongoClient(uri);


export async function POST(req: Request) {
  try {
    // Takes user input
    const { name, genre, averageScore, season, format } = await req.json();

    // Makes a object containing user input depending on what they put in
    const variables = {
      search: name || undefined,
      genre: genre || undefined,
      averageScore: averageScore || undefined,
      season: season || undefined,
      format: format || undefined,
    };

    // If the user input a name this is stored in the database
        if (name) {
      await client.connect();
      const db = client.db("animeDB");
      const collection = db.collection("searchedNames");

      await collection.updateOne(
        { name },
        { $setOnInsert: { name, searchedAt: new Date() } },
        { upsert: true }
      );
    }

    // Stuffy stuff. This is how the result will look it returns it as a json object so you still need to extract the data inside. 
    // I think it makes the frontend easier lmk
    // If you want to access stuff it will be (if you set what this returns to data)
    // To access things for example it wil be data.data.Page.media gives you the list of variables so like set that to animeList or smtn.
    // So after that you set it to what i said ^, i forgot the fucnctions but .title.romanji = name, .description = DUHHH, .generes = Array, averageScore, season, format
    const query = `
      query ($search: String, $genre: String, $averageScore: Int, $season: MediaSeason, $format: MediaFormat) {
        Page(perPage: 10) {
          media(
            search: $search,
            genre: $genre,
            averageScore_greater: $averageScore,
            season: $season,
            format: $format,
            type: ANIME
          ) {
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

    // Kidnap that data
    const response = await fetch(aniLink, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, variables }),
    });

    const data = await response.json();

    //  Light work no reaction | Return the stuffy stuff (List of up to 10 per page of matching search)
    return NextResponse.json(data);
  // Explodes if theres an error
} catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    } else {
      return NextResponse.json({ error: "Unknown error occurred" }, { status: 500 });
    }
  }
  finally{
    await client.close();
  }
}