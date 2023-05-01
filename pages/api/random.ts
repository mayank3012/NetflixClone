import { NextApiRequest, NextApiResponse } from "next";
import serverAuth from "@/libs/serverAuth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.method !== 'GET') {
            return res.status(405).end();
        }
        await serverAuth(req, res);
        const moviesCount = await prismadb.movie.count();
        if (moviesCount > 0) {
            const index = Math.floor(Math.random() * moviesCount);
            const randomMovie = await prismadb.movie.findMany({
                take: 1,
                skip: index
            });
            return res.status(200).json(randomMovie[0]);
        }
        return res.status(400).end();

    } catch (error) {
        console.log(error);
        return res.status(400).end();
    }
}