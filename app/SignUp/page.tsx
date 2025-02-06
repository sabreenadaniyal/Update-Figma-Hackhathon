'use client';
import React, { useState } from "react";

const SignUp: React.FC = () => {
    const [name, setName] = useState<string>("");
    const [fullname, setFullName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmpassword, setConfirmPassword] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !password) {
            alert("Please fill in all required fields.");
            return;
        }
        alert("Login successful!");
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="border-2 w-full max-w-md p-6 bg-white rounded-lg shadow-md border-gray-300">
                <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">Sign Up</h2>
                <form onSubmit={handleSubmit}>
                <input
                        type="text"
                        placeholder="Enter your name"
                        value={fullname}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full h-[50px] mt-2 p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
                    />
                    <input
                        type="text"
                        placeholder="Enter your fullName"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full h-[50px] mt-2 p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
                    />
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full h-[50px] mt-4 p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
                    />
                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full h-[50px] mt-4 p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
                    />
                     <input
                        type="password"
                        placeholder="Password Verification"
                        value={confirmpassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full h-[50px] mt-4 p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
                    />
                    <textarea
                        placeholder="Enter your message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full h-[100px] mt-4 p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
                    />
                    <button
                        type="submit"
                        className="w-full h-[50px] mt-6 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 transition duration-200"
                    >
                        SignUp Now
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;

