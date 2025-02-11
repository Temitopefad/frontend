import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../Redux/features/auth/authApi";
import { setUser } from "../Redux/features/auth/authSlice";

const Login = () => {
    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const [loginUser, { isLoading: loginLoading }] = useLoginUserMutation();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await loginUser({ email, password }).unwrap();
            dispatch(setUser(response.user));
            setMessage("Login Successful");
            navigate("/");
        } catch (error) {
            setMessage("Invalid email or password");
        }
    };

    return (
        <section className="h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-bold text-center mb-6">Welcome Back</h2>

                {message && <p className="text-red-500 text-center mb-4">{message}</p>}

                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-primary focus:border-primary outline-none transition"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-primary focus:border-primary outline-none transition"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-primary text-white p-3 rounded-lg hover:bg-primary-dark transition duration-200"
                        disabled={loginLoading}
                    >
                        {loginLoading ? "Logging in..." : "Login"}
                    </button>
                </form>

                <p className="text-center text-sm mt-4">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-primary font-semibold hover:underline">
                        Sign up
                    </Link>
                </p>
            </div>
        </section>
    );
};

export default Login;
