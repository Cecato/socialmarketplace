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

        const result = await ratings.findOne(filter, {
            projection: {
                _id: 1,
                name: 1,
                services: 1
            }
        });
      
        if (result) {
            return result;
        } else {
            throw new Error("Documento não encontrado");
        }

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