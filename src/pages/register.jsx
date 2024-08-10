import { Link } from "react-router-dom";
import { useState } from "react";


const Register = () => {

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

            <div className="flex flex-[40%] justify-center items-center bg-[#B8A8AB]">

                <div className="w-[70%] ">

                    <p className="text-3d coin text-center text-[30pt] font-bold mb-4">UnikMeal</p>

                    <p className="text-center text-[13pt] text-slate-800 tracking-widest">Uniquely curated meal plans</p>

                </div>

            </div>



            <div className="flex flex-[60%] justify-center items-center">

                <form method="post" className="border rounded-lg shadow-lg py-[2.5rem] px-[2rem] flex flex-col gap-[1.3rem]">

                    <div className="">

                        <p className="font-bold text-center text-[15pt] text-[rgba(0,0,0,0.5)]">Hello, unik!</p>

                        <p className="text-center text-[10pt] text-[rgba(0,0,0,0.5)]">Create your unique account</p>

                    </div>


                    <div className="flex flex-col gap-3">

                        <fieldset>

                            <legend className="text-[9pt] text-[rgba(0,0,0,0.5)]">Name:</legend>

                            <input type="text" size={30} className="border border-[#B8A8AB] rounded outline-none w-full px-[0.25rem] py-1 text-[10pt]" />

                        </fieldset>

                        <fieldset>

                            <legend className="text-[9pt] text-[rgba(0,0,0,0.5)]">E-mail:</legend>

                            <input type="email" size={30} className="border border-[#B8A8AB] rounded outline-none w-full px-[0.25rem] py-1 text-[10pt]" />

                        </fieldset>

                        <fieldset>

                            <legend className="text-[9pt] text-[rgba(0,0,0,0.5)]">Password:</legend>

                            <input
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={handlePasswordChange}
                                className="border border-[#B8A8AB] rounded outline-none w-full px-[0.25rem] py-1 text-[10pt]"
                                size={30}
                            />

                            <p className="flex justify-between items-center mt-[0.1rem] mb-0 text-[9.5pt] text-[rgba(0,0,0,0.5)]">

                                <label className="flex gap-[0.2rem]"> <input type="checkbox" checked={showPassword} onChange={togglePasswordVisibility} /> Show Password</label>

                                {/* <span>Password is required</span> */}

                            </p>

                        </fieldset>

                    </div>


                    <div>

                        <p className="text-[rgba(0,0,0,0.5)] text-[10pt] text-center leading-tight mb-1">

                            By creating an account, you agree to our <br />

                            <a href="#" className="text-blue-500">Terms and Conditions</a>

                        </p>

                        <button type="submit" className="w-full rounded py-2 font-semibold bg-[#B8A8AB] text-white">CREATE ACCOUNT</button>

                    </div>


                    <p className="text-center text-[10pt] text-[rgba(0,0,0,0.5)]">Already have an account? <Link to={'/login'} className="text-blue-500 font-semibold">Login</Link> </p>

                </form>

            </div>

        </div>
    );


}



export default Register;