import { Flip, toast } from "react-toastify";
import Loader from "./loader";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signUp } from "../services/auth";



const Register = () => {

    const [pword, setPword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handlePasswordChange = (e) => {
        setPword(e.target.value);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };



    //Sign Up logic

    const nextPage = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();


    const postForm = async (data) => {
        console.log(data);

        setIsSubmitting(true);

        let payload = {
            firstName: data.firstName,
            lastName: data.lastName,
            userName: data.userName,
            email: data.email,
            password: data.password,
            confirmPassword: data.password,
        };


        try {

            const res = await signUp(payload);

            toast.success(res.data.message, {
                position: "top-right",
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
                nextPage('/login');
            }, 4500);
        }

        catch (error) {
            console.log(error);
            toast.error('An error occured!', {
                position: "top-right",
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

            <div className="flex flex-[40%] justify-center items-center bg-[#DECDD1]">

                <div className="w-[90%] ">

                    <p className="text-3d text-center text-[30pt] font-bold mb-4">LiveUp</p>

                    <p className="text-center text-[13pt] tracking-widest">Become A <span className="my-rainbow">Better Version</span> Of Yourself</p>

                </div>

            </div>



            <div className="flex flex-[60%] justify-center items-center">

                <form onSubmit={handleSubmit(postForm)} className="border max-w-[400px] rounded-lg shadow-lg py-[1.5rem] px-[2rem] flex flex-col gap-[1rem]">

                    <div className="">

                        <p className="font-bold text-center text-[15pt] text-[rgba(0,0,0,0.5)]">Hello, guest!</p>

                        <p className="text-center text-[10pt] text-[rgba(0,0,0,0.5)]">Create your unique account</p>

                    </div>


                    <div className="flex flex-col">

                        <div className="flex gap-x-2">

                            <fieldset>

                                <legend className="text-[9pt] text-[rgba(0,0,0,0.5)]">Firstname:</legend>

                                <input
                                    type="text"
                                    size={20}
                                    placeholder="First name is required"
                                    className="border border-[#B8A8AB] rounded outline-none w-full px-[0.25rem] py-1 text-[10pt]"
                                    {...register('firstName', { required: '*First name required!' })}
                                />

                                <p className="flex items-center mt-0 mb-0 text-[9pt]">
                                    {errors.firstName ? (<span className="text-red-600 text[9pt]">{errors.firstName.message}</span>) : (/ /g, "\u00A0")}
                                </p>

                            </fieldset>

                            <fieldset>

                                <legend className="text-[9pt] text-[rgba(0,0,0,0.5)]">Lastname:</legend>

                                <input
                                    type="text"
                                    size={20}
                                    placeholder="Last name is required"
                                    className="border border-[#B8A8AB] rounded outline-none w-full px-[0.25rem] py-1 text-[10pt]"
                                    {...register('lastName', { required: '*Last name required!' })}
                                />

                                <p className="flex items-center mt-0 mb-0 text-[9pt]">
                                    {errors.lastName ? (<span className="text-red-600 text[9pt]">{errors.lastName.message}</span>) : (/ /g, "\u00A0")}
                                </p>

                            </fieldset>

                        </div>


                        <div className="flex gap-x-2">

                            <fieldset className="w-[65%]">

                                <legend className="text-[9pt] text-[rgba(0,0,0,0.5)]">E-mail:</legend>

                                <input
                                    type="email"
                                    size={20}
                                    placeholder="Your e-mail is required"
                                    className="border border-[#B8A8AB] rounded outline-none w-full px-[0.25rem] py-1 text-[10pt] "
                                    {...register('email', { required: '*E-mail is required!' })}
                                />

                                <p className="flex items-center mt-0 mb-0 text-[9pt]">
                                    {errors.email ? (<span className="text-red-600 text[9pt]">{errors.email.message}</span>) : (/ /g, "\u00A0")}
                                </p>

                            </fieldset>

                            <fieldset className="w-[35%]">

                                <legend className="text-[9pt] text-[rgba(0,0,0,0.5)]">Username:</legend>

                                <input
                                    type="text"
                                    size={20}
                                    placeholder="unique username"
                                    className="border border-[#B8A8AB] rounded outline-none w-full px-[0.25rem] py-1 text-[10pt] "
                                    {...register('userName', { required: '*Username required!' })}
                                />

                                <p className="flex text-wrap items-center mt-0 mb-0 text-[9pt]">
                                    {errors.userName ? (<span className="text-red-600 text[9pt]">{errors.userName.message}</span>) : (/ /g, "\u00A0")}
                                </p>

                            </fieldset>

                        </div>


                        <div className="flex gap-x-2">

                            <fieldset>

                                <legend className="text-[9pt] text-[rgba(0,0,0,0.5)]">Password:</legend>

                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    size={20}
                                    onChange={handlePasswordChange}
                                    placeholder="Minimum of 8 characters"
                                    title="8 characters minimum. Requires a digit, an uppercase, and a lowercase"
                                    className="border border-[#B8A8AB] rounded outline-none w-full px-[0.25rem] py-1 text-[10pt]"
                                    {...register('password', {
                                        required: '*Password required!', minLength: { value: 8, message: 'Must be 8 or more characters' }, pattern: { value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/, message: "*Requires a digit, an uppercase, a lowercase" },
                                    })}
                                />

                            </fieldset>


                            <fieldset>

                                <legend className="text-[9pt] text-[rgba(0,0,0,0.5)]">Confirm Password:</legend>

                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    size={20}
                                    onChange={handlePasswordChange}
                                    placeholder="Minimum of 8 characters"
                                    title="8 characters minimum. Requires a digit, an uppercase, and a lowercase"
                                    className="border border-[#B8A8AB] rounded outline-none w-full px-[0.25rem] py-1 text-[10pt]"
                                    {...register('confirmPassword', {
                                        required: '*Confirm password!', minLength: { value: 8, message: 'Must be 8 or more characters' }, pattern: { value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/, message: "*Requires a digit, an uppercase, a lowercase" },
                                    })}
                                />

                            </fieldset>

                        </div>


                        <p className="flex justify-between items-center mt-0 mb-2 text-wrap text-[9pt] text-[rgba(0,0,0,0.5)]">

                            <label className="flex gap-[0.2rem]"> <input type="checkbox" checked={showPassword} onChange={togglePasswordVisibility} /> Show Password</label>

                            {errors.password ? (<span className="text-red-600">{errors.password.message}</span>) : (/ /g, "\u00A0")}

                            {errors.confirmPassword ? (<span className="text-red-600">{errors.confirmPassword.message}</span>) : (/ /g, "\u00A0")}

                        </p>


                        <div className="flex flex-col items-center">

                            {/* <p className="text-[rgba(0,0,0,0.5)] text-[10pt] text-center leading-tight mb-1">

                                I agree to the <a href="#" className="text-blue-500">Terms and Conditions</a>

                            </p> */}

                            <button type="submit" className="w-full rounded py-2 font-semibold bg-[#B8A8AB] text-white hover:bg-blue-700 tracking-[3px]">

                                {isSubmitting ? <Loader /> : "CREATE ACCOUNT"}

                            </button>

                            <button type="reset" className="w-max text-[10pt] text-orange-700 hover:font-bold">Clear Form</button>

                        </div>

                    </div>


                    <p className="text-center text-[10pt] text-[rgba(0,0,0,0.5)]">Already have an account? <Link to={'/login'} className="text-blue-500 font-semibold hover:text-green-700">Login</Link> </p>

                </form>

            </div>

        </div>
    );


}



export default Register;