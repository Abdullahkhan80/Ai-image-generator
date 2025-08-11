import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from './AppContext';
import { toast } from 'react-toastify';
import axios from 'axios';
const Login = () => {
    const { setshowLogin, setToken, setloader, loadCredit, setuser, backendUrl } = useContext(AppContext);
    const [isLogin, setIsLogin,] = useState(true);

    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'unset';
        }
    }, [])
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")



    const formhandler = async (e) => {
        e.preventDefault();
        setloader(true)
        try {
            const url = backendUrl.endsWith('/') ? backendUrl : backendUrl + '/';
            if (isLogin) {

                const { data } = await axios.post(url + "api/user/login", { email, password });
                if (data.success) {
                    setToken(data.token);
                    setuser(data.user);
                    localStorage.setItem("Authorization", data.token);
                    await loadCredit(); // <-- Add this line
                    toast.success("Login successful");
                    setloader(false)
                    setshowLogin(false);
                } else {
                    toast.error(data.message || "Login failed");
                }
            } else {
                const { data } = await axios.post(url + "api/user/register", { name, email, password });
                if (data.success) {
                    setToken(data.token);
                    setuser(data.user);
                    localStorage.setItem("Authorization", "Bearer " + data.token);
                    console.log("signed up ");
                    toast.success("Sign Up successful");
                    setshowLogin(false);
                    setloader(false)
                } else {
                    toast.error(data.message || "Sign Up failed");
                }
            }
        } catch (error) {
            console.error(error); // For debugging
            setloader(false)
            if (error.response && error.response.data && error.response.data.message) {
                toast.error(error.response.data.message);
            } else if (error.message) {
                toast.error(error.message);
            } else {
                toast.error("An error occurred. Please try again.");
            }
        }
        setloader(false)
    };

    return (
        <section className="w-full min-h-screen fixed z-50 overflow-hidden flex flex-col items-center justify-center bg-gradient-to-br from-purple-950 via-gray-800 to-gray-900 px-2 md:px-4 py-10 md:py-16">
            <div className="fixed top-0 right-0 text-white p-10 font-extrabold text-xl cursor-pointer" onClick={() => setshowLogin(false)}>X</div>
            <div className="w-full max-w-md bg-gray-800/90 rounded-3xl shadow-2xl p-6 md:p-10 flex flex-col items-center gap-6 border border-gray-700">
                <h1 className="text-2xl md:text-3xl font-extrabold text-lime-400 text-center mb-2 tracking-tight drop-shadow-lg">
                    {isLogin ? 'Login to PIXORA' : 'Sign Up for PIXORA'}
                </h1>
                <form className="w-full flex flex-col gap-4" onSubmit={formhandler}>

                    {!isLogin && (
                        <input
                            type="text"
                            onChange={(e) => setName(e.target.value)} value={name}
                            placeholder="Full Name"
                            className="w-full rounded-xl p-3 bg-gray-900 text-white border border-gray-700 focus:border-lime-400 focus:ring-2 focus:ring-lime-400 outline-none text-base placeholder-gray-500"
                            required
                        />
                    )}
                    <input
                        type="email"
                        onChange={(e) => setEmail(e.target.value)} value={email}
                        placeholder="Email"
                        className="w-full rounded-xl p-3 bg-gray-900 text-white border border-gray-700 focus:border-lime-400 focus:ring-2 focus:ring-lime-400 outline-none text-base placeholder-gray-500"
                        required
                    />
                    <input
                        type="password"
                        onChange={(e) => setPassword(e.target.value)} value={password}
                        placeholder="Password"
                        className="w-full rounded-xl p-3 bg-gray-900 text-white border border-gray-700 focus:border-lime-400 focus:ring-2 focus:ring-lime-400 outline-none text-base placeholder-gray-500"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full py-3 bg-lime-400 text-black font-bold rounded-2xl hover:bg-lime-500 transition-colors text-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-lime-400 focus:ring-offset-2 mt-2"
                    >
                        {isLogin ? 'Login' : 'Sign Up'}
                    </button>
                </form>
                <div className="text-gray-400 text-sm mt-2">
                    {isLogin ? (
                        <>
                            Don't have an account?{' '}
                            <button className="text-lime-400 hover:underline font-bold" onClick={() => setIsLogin(false)}>
                                Sign Up
                            </button>
                        </>
                    ) : (
                        <>
                            Already have an account?{' '}
                            <button className="text-lime-400 hover:underline font-bold" onClick={() => setIsLogin(true)}>
                                Login
                            </button>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Login;