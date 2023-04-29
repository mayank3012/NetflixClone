import useCurrentUser from "@/hooks/useCurrentUser";
import checkLogin from "@/utils/checkLogin"
import { NextPageContext } from "next"
import { useRouter } from "next/router";

export async function getServerSideProps(constext: NextPageContext) {
    return checkLogin(constext);
}

const profiles = () => {
    const router = useRouter();
    const { data: user } = useCurrentUser();
    return (
        <div className="flex justify-center items-center h-full">
            <div className="flex flex-col">
                <h1 className="text-white text-3xl md:text:6xl text-center">Who is watching?</h1>
                <div className="flex items-center justify-center gap-8 mt-10">
                    <div onClick={() => router.push('/')}>
                        <div className="group flex-row w-44 mx-auto">
                            <div className="
                                w-44
                                h-44
                                rounded-md
                                flex
                                items-center
                                justify-center
                                border-transparent
                                border-2
                                group-hover:cursor-pointer
                                group-hover:border-white
                                overflow-hidden
                                transition
                            ">
                                <img src="images/default-blue.png" alt="image" />
                            </div>
                            <div className="
                                text-gray-400
                                text-center
                                mt-4
                                text-2xl
                                capitalize
                                group-hover:text-white
                                group-hover:cursor-pointer
                                transition
                            ">
                                {user?.name}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default profiles