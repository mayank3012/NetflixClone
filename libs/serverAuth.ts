import { NextApiRequest } from "next";
import { getSession } from "next-auth/react";
import prismadb from '@/libs/prismadb';

const serverAuth = async (req: NextApiRequest) => {
    const session = await getSession({ req });
    if (!session?.user?.email) {
        throw new Error('Not Signed In');
    }

    const current = prismadb.user.findUnique({
        where: {
            email: session?.user?.email
        }
    })

    if (!current) {
        throw new Error("Not Signed In")
    }
    return current;
}

export default serverAuth;