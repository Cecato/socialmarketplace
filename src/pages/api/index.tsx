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

async function run() {
    try {
      
        await client.connect();

        const database = client.db("smp");
        const ratings = database.collection("product");
        const results = await ratings.find({}).toArray();

        return results;
    } finally {
     
        await client.close();
    }
}


 
export default async function handler(req: NextApiRequest, res: NextApiResponse){
    
    try {
        const results = await run();
        res.status(200).json(results);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Ocorreu um erro ao buscar os documentos." });
    }
}