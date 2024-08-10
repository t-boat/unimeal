import { Link } from "react-router-dom";
import { useState } from "react";


const Login = () => {

    const [password, setPassword] = useState('');

    const [showPassword, setShowPassword] = useState(false);


    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };


    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };



    return (

        <div className="flex h-screen text-family">

            <div className="flex flex-[60%] justify-center items-center">

                <form method="post" className="border rounded-lg shadow-lg py-[2.5rem] px-[2rem] flex flex-col gap-[1.5rem]">

                    <div className="">

                        <p className="font-bold text-center text-[15pt] text-[rgba(0,0,0,0.5)]">Welcome!</p>

                        <p className="text-center text-[10pt] text-[rgba(0,0,0,0.5)]">Sign in to your account</p>

                    </div>


                    <div className="flex flex-col gap-3">

                        <fieldset>

                            <legend className="text-[9pt] text-[rgba(0,0,0,0.5)]">Email:</legend>

                            <input type="email" size={25} className="border border-[#B8A8AB] rounded outline-none w-full px-[0.25rem] py-1 text-[10pt]" />

                        </fieldset>


                        <fieldset>

                            <legend className="text-[9pt] text-[rgba(0,0,0,0.5)]">Password:</legend>

                            <input
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={handlePasswordChange}
                                className="border border-[#B8A8AB] rounded outline-none w-full px-[0.25rem] py-1 text-[10pt]"
                                size={25}
                            />

                            <p className="flex justify-between items-center mt-[0.1rem] mb-0 text-[9.5pt] text-[rgba(0,0,0,0.5)]">

                                <label className="flex gap-[0.2rem]"> <input type="checkbox" checked={showPassword} onChange={togglePasswordVisibility} /> Show Password</label>

                                {/* <span>Password is required</span> */}

                            </p>

                        </fieldset>


                        <button type="submit" className="rounded py-2 font-semibold bg-[#B8A8AB] text-white">SIGN IN</button>

                    </div>


                    <p className="text-center text-[10pt] text-[rgba(0,0,0,0.5)]">Don't have an account? <Link to={'/register'} className="text-blue-500 font-semibold">Sign Up</Link> </p>

                </form>

            </div>



            <div className="flex flex-[40%] justify-center items-center bg-[#DECDD1]">

                <div className="w-[70%] ">

                    <p className="text-3d text-center text-[30pt] font-bold mb-4">UnikMeal</p>

                    <p className="text-center text-[13pt] tracking-widest">...because you are <span className="my-rainbow   ">unique</span>!</p>

                </div>

            </div>

        </div>
    );
};

export default Login;