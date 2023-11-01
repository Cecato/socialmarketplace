import type { NextApiRequest, NextApiResponse } from 'next'

const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = process.env.DB_URI;

const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
});

async function run( filterName : string) {
    try {
      
        await client.connect();

        const database = client.db("smp");
        const ratings = database.collection("product");

        const filter = { name: filterName};
        //const cursor = ratings.find(filter);

        //await cursor.forEach((doc: any) => console.dir(doc));
        const results = await ratings.find(filter).toArray();

        return { data: results };
    } finally {
     
        await client.close();
    }
}


 
export default async function handler(req: NextApiRequest, res: NextApiResponse){
    const filterName = req.query.id as string;
    try {
        const results = await run(filterName);
        res.status(200).json(results);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Ocorreu um erro ao buscar os documentos." });
    }
}