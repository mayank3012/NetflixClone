import Input from "@/components/Input"
import { useCallback, useState } from 'react'
import axios from 'axios'


const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");
    const [variant, setVariant] = useState("login");

    const toggleVariant = useCallback(() => {
        setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login');
    }, []);

    const register = useCallback(async () => {
        try {
            await axios.post('/api/register', {
                email,
                name,
                password
            })
        } catch (error) {
            console.log(error)
        }
    }, [])
    return (
        <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
            <div className="bg-black w-full h-full md:bg-opacity-50 overflow-y-auto">
                <nav className="px-12 py-5">
                    <img src='/images/logo.png' alt='logo' className="h-12" />
                </nav>
                <div className="flex justify-center p-5">
                    <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 md:w-2/3 lg:max-w-md rounded-md w-full">
                        <h2 className="text-white text-2xl md-8 font-semibold">
                            {variant === 'login' ? 'Sign in' : 'Register'}
                        </h2>
                        <div className="flex flex-col gap-4 mt-4">
                            {variant === 'register' && (
                                <Input
                                    label='User Name'
                                    onChange={(e: any) => { setUserName(e.target.value) }}
                                    id="userName"
                                    value={userName}
                                />
                            )}
                            <Input
                                label='Email'
                                onChange={(e: any) => { setEmail(e.target.value) }}
                                id="email"
                                type="email"
                                value={email}
                            />
                            <Input
                                label='Password'
                                onChange={(e: any) => { setPassword(e.target.value) }}
                                id="password"
                                type="password"
                                value={password}
                            />
                        </div>
                        <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
                            {variant === 'login' ? 'Login' : 'Register'}
                        </button>

                        {variant === 'login' ?
                            (
                                <p className="text-neutral-500 mt-12">
                                    First time using Netflix
                                    <span onClick={toggleVariant} className="text-white ml-1 hover:underline cursor-pointer">
                                        Create new account
                                    </span>
                                </p>
                            )
                            :
                            (
                                <p className="text-neutral-500 mt-12">
                                    Already have an Account
                                    <span onClick={toggleVariant} className="text-white ml-1 hover:underline cursor-pointer">
                                        Sign in
                                    </span>
                                </p>
                            )}

                    </div>
                </div>
            </div>
        </div >
    )
}

export default Auth