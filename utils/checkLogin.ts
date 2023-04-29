import { NextPageContext } from 'next'
import { getSession } from 'next-auth/react';
const checkLogin = async (context: NextPageContext) => {
    const session = await getSession(context);
    if (!session) {
        return {
            redirect: {
                destination: '/auth',
                permanent: false
            }
        }
    }
    return {
        props: {}
    }
}

export default checkLogin