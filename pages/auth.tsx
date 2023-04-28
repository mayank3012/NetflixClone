import Input from "@/components/Input"
import { useCallback, useState } from 'react'
import axios from 'axios'
import { signIn } from 'next-auth/react';
import { useRouter } from "next/router";
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'
import Spinner from "@/components/Spinner";
import Alert from "@/components/Alert";


const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [variant, setVariant] = useState("login");
    const [showSpinner, setShowSpinner] = useState(false);
    const [alert, setAlert] = useState({
        showAlert: false,
        message: '',
    });
    const router = useRouter();

    const toggleVariant = useCallback(() => {
        setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login');
    }, []);

    const login = useCallback(async () => {
        try {
            setShowSpinner(true);
            await signIn('credentials', {
                email,
                password,
                redirect: false,
                callbackUrl: '/'
            }).then((res) => {
                if (res?.ok) {
                    router.push('/')
                }
                else {
                    setAlert({
                        showAlert: true,
                        message: res?.error || ''
                    })
                }
                setShowSpinner(false);
            })
        }
        catch (error) {
            console.log(error);
            setAlert({
                showAlert: true,
                message: 'Something went Wrong'
            })
            setShowSpinner(false);
        }
    }, [email, password]);

    const register = useCallback(async () => {
        try {
            setShowSpinner(true)
            await axios.post('/api/register', {
                email,
                name,
                password
            }).then(() => {
                router.push('/')
                setShowSpinner(false)
                login();
            }).catch(error => {
                setAlert({
                    showAlert: true,
                    message: error?.response.data.error || ''
                })
                setShowSpinner(false)
            })
        } catch (error) {
            console.log(error)
            setShowSpinner(false);
        }
    }, [email, name, password])


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
                                    onChange={(e: any) => { setName(e.target.value) }}
                                    id="userName"
                                    value={name}
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
                        <button disabled={showSpinner} onClick={variant === 'login' ? login : register} className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition disabled:bg-red-950 disabled:cursor-not-allowed">
                            {showSpinner &&
                                <Spinner size={1} />
                            }
                            {variant === 'login' ? 'Login' : 'Register'}
                        </button>
                        <div className="flex flex-row justify-center items-center mt-8 gap-4 ">
                            <div
                                onClick={() => signIn('google', { callbackUrl: '/' })}
                                className="
                                    w-10
                                    h-10
                                    bg-white
                                    rounded-full
                                    flex
                                    items-center
                                    justify-center
                                    cursor-pointer
                                    hover:opacity-80
                                    transition
                                ">
                                <FcGoogle size={30} />
                            </div>
                            <div
                                onClick={() => signIn('github', { callbackUrl: '/' })}
                                className="
                                    w-10
                                    h-10
                                    bg-white
                                    rounded-full
                                    flex
                                    items-center
                                    justify-center
                                    cursor-pointer
                                    hover:opacity-80
                                    transition
                                ">
                                <FaGithub size={30} />
                            </div>
                        </div>

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
                {alert.showAlert && (<Alert message={alert.message} closeAlert={() => {
                    setAlert({
                        ...alert, showAlert: false
                    })
                }} />)}
            </div>
        </div >
    )
}

export default Auth