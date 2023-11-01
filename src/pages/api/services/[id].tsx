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

async function run(filterName: string) {
    try {
        await client.connect();

        const database = client.db("smp");
        const ratings = database.collection("product");

        // Consultar o banco de dados com base no campo "name" fornecido na rota
        const result = await ratings.findOne({ name: filterName });

        if (result && result.services) {
            return result.services;
        } else {
            return null;
        }

    } finally {
        await client.close();
    }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { query: { id } } = req;

    try {
        const results = await run(id as string);
        if (results) {
            res.status(200).json(results);
        } else {
            res.status(404).json({ error: "Produto não encontrado." });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Ocorreu um erro ao buscar o documento." });
    }
}