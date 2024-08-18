import { Bounce, Flip, toast } from "react-toastify";
import Loader from "./loader";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { logIn } from "../services/auth";



const Login = () => {

    //Password visibility
    const [pword, setPword] = useState('');
    const [showPassword, setShowPassword] = useState(false);


    const handlePasswordChange = (e) => {
        setPword(e.target.value);
    };


    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };



    //Sign in logic
    const nextPage = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();


    const postForm = async (data) => {

        console.log(data);

        setIsSubmitting(true);

        try {

            const res = await logIn({
                email: data.email,
                password: data.password
            });
            

            localStorage.setItem('accessToken', res.data.accessToken);


            toast.success(res.data.message, {
                position: "top-left",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Flip,
            });

            console.log('Response: ', res.data);

            setTimeout(() => {
                nextPage('/bmi');
            }, 4500);

        }

        catch (error) {
            console.log(error);
            toast.error('An error occured!', {
                position: "top-left",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Flip,
            });
        }

        finally {
            setIsSubmitting(false);
        }
    }




    return (

        <div className="flex h-screen text-family">

            <div className="flex flex-[60%] justify-center items-center">

                <form
                    onSubmit={handleSubmit(postForm)}
                    className="border rounded-lg shadow-lg py-[2.5rem] px-[2rem] flex flex-col gap-[1.5rem]">

                    <div className="">

                        <p className="font-bold text-center text-[15pt] text-[rgba(0,0,0,0.5)]">Welcome!</p>

                        <p className="text-center text-[10pt] text-[rgba(0,0,0,0.5)]">Sign in to your account</p>

                    </div>


                    <div className="flex flex-col">

                        <fieldset className="text[9pt]">

                            <legend className="text-[9pt] text-[rgba(0,0,0,0.5)]">Email:</legend>

                            <input
                                size={29}
                                type="email"
                                placeholder="e-mail"
                                {...register('email', { required: 'Email is required!' })}
                                className="border border-[#B8A8AB] rounded outline-none w-full px-[0.35rem] py-1 text-[10pt]"
                            />

                            <p className="flex justify-end items-center mt-0 mb-0 text-[9pt]">
                                {errors.email ? (<span className="text-red-600 text[9pt]">{errors.email.message}</span>) : (/ /g, "\u00A0")}
                            </p>

                        </fieldset>


                        <fieldset>

                            <legend className="text-[9pt] text-[rgba(0,0,0,0.5)]">Password:</legend>

                            <input
                                size={27}
                                placeholder="password"
                                type={showPassword ? 'text' : 'password'}
                                // value={pword}
                                onChange={handlePasswordChange}
                                {...register('password', { required: 'Password is required!' })}
                                className="border border-[#B8A8AB] rounded outline-none w-full px-[0.35rem] py-1 text-[10pt]"
                            />

                            <p className="flex justify-between items-center mt-0 mb-2 text-[9pt] text-[rgba(0,0,0,0.5)]">

                                <label className="flex gap-[0.2rem]"> <input type="checkbox" checked={showPassword} onChange={togglePasswordVisibility} /> Show Password</label>

                                {errors.password ? (<span className="text-red-600">{errors.password.message}</span>) : (/ /g, "\u00A0")}

                            </p>

                        </fieldset>


                        <button type="submit" className="rounded py-2 flex justify-center items-center font-semibold bg-[#B8A8AB] text-white hover:bg-blue-700 tracking-[3px]">

                            {isSubmitting ? <Loader /> : 'SIGN IN'}

                        </button>

                    </div>


                    <p className="text-center text-[10pt] text-[rgba(0,0,0,0.5)]">Don't have an account? <Link to={'/register'} className="text-blue-500 font-semibold hover:text-green-700">Sign Up</Link> </p>

                </form>

            </div>



            <div className="flex flex-[45%] justify-center items-center bg-[#DECDD1]">

                <div className="w-[90%] ">

                    <p className="text-3d text-center text-[30pt] font-bold mb-4">LiveUp</p>

                    <p className="text-center text-[13pt] tracking-widest"><span className="my-rainbow   ">unique</span> meal plans tailored to your needs</p>

                </div>

            </div>

        </div>
    );
};

export default Login;