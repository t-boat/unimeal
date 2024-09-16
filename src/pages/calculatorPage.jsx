import weightScale from "../assets/scaleImage.svg";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import LogOutButton from "./logOutButton";
import { useMediaQuery } from 'react-responsive'



const CalculatorPage = () => {

    // document.addEventListener('DOMContentLoaded', function () {
    //     /* DOM tree fully parsed and available here */
    // });
    const { register, handleSubmit, watch, formState: { errors } } = useForm();


    const h = watch("height");
    const height = h / 100;
    const heightSquared = height * height;

    const weight = watch("weight");


    const bmi = (weight / heightSquared).toFixed(1);

    const bmiValue = Number(bmi);


    // const storage = window.localStorage;
    // storage.setItem("bmi", bmi);
    const currentUser = localStorage.getItem('currentUser');


    const bmiCalculator = () => {

        // const bmi = Math.round((weight / heightSquared) * 100) / 100;

        document.getElementById("bmi").innerText = bmi;


        if (bmiValue < 18.5) {
            document.getElementById("interpretation").innerText = "underweight";
            document.getElementById("recommend-action").innerText = "gain weight";
            document.getElementById('recommend').style.display = 'block';
        }

        else if (bmiValue >= 18.5 && bmiValue < 25.0) {
            document.getElementById("interpretation").innerText = "normal";
            document.getElementById("recommend-action").innerText = "maintain healthy weight";
            document.getElementById('recommend').style.display = 'block';
        }

        else if (bmiValue >= 25 && bmiValue < 30.0) {
            document.getElementById("interpretation").innerText = "overweight";
            document.getElementById("recommend-action").innerText = "burn some fat";
            document.getElementById('recommend').style.display = 'block';
        }

        else if (bmiValue >= 30.0) {
            document.getElementById("interpretation").innerText = "obesity";
            document.getElementById("recommend-action").innerText = "lose weight and reduce risk of illness";
            document.getElementById('recommend').style.display = 'block';
        }

        else { document.getElementById("interpretation").innerText = "invalid BMI"; }
    }



    //Define the breakpoints
    const defaultView = useMediaQuery({ minWidth: 950 });
    const isTablet = useMediaQuery({ minWidth: 600, maxWidth: 949.9 });
    const isSmartPhone = useMediaQuery({ maxWidth: 599.9 });



    return (

        <>

            {defaultView &&

                <div className="text-family">

                    <div className="absolute top-2 right-2">
                        <LogOutButton />
                    </div>

                    <p className="mt-[3.5rem] mb-[1rem] text-center text-[15pt] font-semibold">
                        Welcome, <span className="text-[rgb(176,42,48)]">{currentUser}</span>
                    </p>


                    <p className="mb-[2rem] text-center">
                        Calculate your BMI for today and let's make personalized meal recommendations for you to keep your weight in check and stay healty.
                    </p>


                    <div className="flex bg-[rgba(222,205,209,0.2)] px-[2rem]">

                        <div className="w-full flex items-center gap-6">

                            <div>
                                <img src={weightScale} alt="" />
                            </div>

                            <div className="text-[rgba(176,42,48,0.8)]">
                                <p className="text-[26pt] font-black">Calculate</p>
                                <p className="text-[15pt] font-semibold">Body Mass Index</p>
                            </div>

                        </div>


                        <div className="flex gap-[2rem] py-8 w-min">

                            <form
                                method="post"
                                onSubmit={handleSubmit(bmiCalculator)}
                                className="flex flex-col items-center justify-around px-4 bg-[rgba(176,42,48,0.4)] rounded-lg shadow-2xl">

                                <div className="flex items-center gap-[1.5rem]">

                                    <div>

                                        <label htmlFor="height" className="text-[9pt]">HEIGHT:</label>

                                        <div className="flex items-center gap-2">

                                            <input
                                                type="number"
                                                id="height"
                                                className="flex w-[80px] border border-[#B8A8AB] outline-none rounded px-[0.5rem] py-1 text-[15pt] font-bold"
                                                {...register("height", { required: "required field" })}
                                            />

                                            <span className="text-[13pt]">cm</span>

                                        </div>

                                        <p className="flex mt-[0.1rem] mb-0 text-[9pt] whitespace-nowrap">
                                            {errors.height ? (<span className="text-red-600 text[9pt]">{errors.height.message}</span>) : (/ /g, "\u00A0")}
                                        </p>

                                    </div>


                                    <div>

                                        <label htmlFor="weight" className="text-[9pt]">WEIGHT:</label>

                                        <div className="flex items-center gap-2">

                                            <input
                                                type="number"
                                                id="weight"
                                                className="flex w-[80px] border border-[#B8A8AB] outline-none rounded px-[0.5rem] py-1 text-[15pt] font-bold"
                                                {...register("weight", { required: "required field" })}
                                            />

                                            <span className="text-[13pt]">kg</span>

                                        </div>

                                        <p className="flex mt-[0.1rem] mb-0 text-[9pt] whitespace-nowrap">
                                            {errors.weight ? (<span className="text-red-600 text[9pt]">{errors.weight.message}</span>) : (/ /g, "\u00A0")}
                                        </p>

                                    </div>

                                </div>


                                <button
                                    type="submit"
                                    className="py-[0.74rem] px-[1.5rem] font-semibold rounded-full bg-[#DECDD1] hover:bg-blue-700 hover:text-white">
                                    Calculate
                                </button>

                            </form>


                            <div className="w-[250px] flex flex-col items-center gap-[1.5rem] p-4 bg-[rgba(176,42,48,0.4)] rounded-lg shadow-2xl">

                                <div className="flex flex-col items-center justify-center">

                                    <p>Your BMI is:</p>

                                    <p id="bmi" className="flex bg-white rounded px-[0.5rem] text-[25pt] font-bold">--</p>

                                </div>

                                <div className="flex flex-col items-center justify-center">

                                    <p className="text-center">The CDC considers this as:</p>

                                    <p id="interpretation" className="flex bg-white rounded px-[0.5rem] text-[18pt] font-bold">--</p>

                                </div>

                            </div>

                        </div>

                    </div>



                    <Link id="recommend" style={{ display: "none", color: 'blue' }} to={`/meals?bmi=${bmi}`} className="max-w-fit mx-auto mt-[1rem]" >

                        Based on your Body Mass Index, CLICK HERE to get recommended meals to <span id="recommend-action" className="my-rainbow font-semibold" ></span>

                    </Link>



                    <p className="mt-[3rem] mb-[1rem] text-[13pt] text-[rgba(0,0,0,0.5)] font-semibold border-b max-w-fit mx-auto">
                        Introduction to the Body Mass Index
                    </p>

                    <p className="mx-[4rem] text-[rgba(0,0,0,0.6)]">
                        Body Mass Index (BMI) is widely used as an indicator of body fat content. Your weight alone is not sufficient to establish if you are in a healthy weight range. For example, a tall but slender person can weigh more than a short but plump individual. But the former may enjoy better health as long as their weight is suitable for their height. The ideal weight is also likely to differ for men and women of similar heights. <br /> <br />

                        How then do you know whether you fall in the healthy weight range or not? Your BMI solves this confusion. It correlates your weight with your height and evaluates whether your weight is appropriate for your stature. You can use a BMI calculator to find out your BMI. <br /> <br />

                        Although not an exact measurement of body fat percentage, in most cases, BMI is a reliable tool for establishing risk levels for illnesses, especially ailments related to excess body fat. Many healthcare professionals use BMI to determine effective doses for medicines. Often people with a higher BMI need higher doses. Hence, it is crucial to be aware of your BMI to ensure your overall wellness.
                    </p>

                </div>
            }



            {isTablet &&

                <div className="text-family">

                    <div className="absolute top-2 right-2">
                        <LogOutButton />
                    </div>

                    <p className="mt-[4rem] mb-[1rem] text-center text-[15pt] font-semibold">
                        Welcome, <span className="text-[rgb(176,42,48)]">{currentUser}</span>
                    </p>


                    <p className="mb-[2rem] text-center">
                        Calculate your BMI for today and let's make personalized meal recommendations for you to keep your weight in check and stay healty.
                    </p>


                    <div className="flex flex-col items-center gap-[2rem] pt-[1rem] pb-[2rem] bg-[rgba(222,205,209,0.2)]">

                        <div className="flex items-center gap-6">

                            <div>
                                <img src={weightScale} alt="" />
                            </div>

                            <div className="text-[rgba(176,42,48,0.8)]">
                                <p className="text-[25pt] font-black">Calculate</p>
                                <p className="text-[15pt] font-semibold">Body Mass Index</p>
                            </div>

                        </div>


                        <div className="flex gap-[2rem] max-w-min">

                            <form
                                method="post"
                                onSubmit={handleSubmit(bmiCalculator)}
                                className="flex flex-col items-center justify-around px-4 bg-[rgba(176,42,48,0.4)] rounded-lg shadow-2xl">

                                <div className="flex items-center gap-[1.5rem]">

                                    <div>

                                        <label htmlFor="height" className="text-[9pt]">HEIGHT:</label>

                                        <div className="flex items-center gap-1">

                                            <input
                                                type="number"
                                                id="height"
                                                className="flex w-[80px] border border-[#B8A8AB] outline-none rounded px-[0.5rem] py-1 text-[15pt] font-bold"
                                                {...register("height", { required: "required field" })}
                                            />

                                            <span className="text-[13pt]">cm</span>

                                        </div>

                                        <p className="flex mt-[0.1rem] mb-0 text-[9pt] whitespace-nowrap">
                                            {errors.height ? (<span className="text-red-600 text[9pt]">{errors.height.message}</span>) : (/ /g, "\u00A0")}
                                        </p>

                                    </div>


                                    <div>

                                        <label htmlFor="weight" className="text-[9pt]">WEIGHT:</label>

                                        <div className="flex items-center gap-1">

                                            <input
                                                type="number"
                                                id="weight"
                                                className="flex w-[80px] border border-[#B8A8AB] outline-none rounded px-[0.5rem] py-1 text-[15pt] font-bold"
                                                {...register("weight", { required: "required field" })}
                                            />

                                            <span className="text-[13pt]">kg</span>

                                        </div>

                                        <p className="flex mt-[0.1rem] mb-0 text-[9pt] whitespace-nowrap">
                                            {errors.weight ? (<span className="text-red-600 text[9pt]">{errors.weight.message}</span>) : (/ /g, "\u00A0")}
                                        </p>

                                    </div>

                                </div>


                                <button
                                    type="submit"
                                    className="py-[0.74rem] px-[1.5rem] font-semibold rounded-full bg-[#DECDD1] hover:bg-blue-700 hover:text-white">
                                    Calculate
                                </button>

                            </form>


                            <div className="w-[250px] flex flex-col items-center gap-[1.5rem] p-4 bg-[rgba(176,42,48,0.4)] rounded-lg shadow-2xl">

                                <div className="flex flex-col items-center justify-center">

                                    <p>Your BMI is:</p>

                                    <p id="bmi" className="flex bg-white rounded px-[0.5rem] text-[25pt] font-bold">--</p>

                                </div>

                                <div className="flex flex-col items-center justify-center">

                                    <p className="text-center">The CDC considers this as:</p>

                                    <p id="interpretation" className="flex bg-white rounded px-[0.5rem] text-[18pt] font-bold">--</p>

                                </div>

                            </div>

                        </div>

                    </div>



                    <Link id="recommend" style={{ display: "none", color: 'blue' }} to={`/meals?bmi=${bmi}`} className="max-w-fit mx-auto mt-[1rem] text-center" >

                        Based on your Body Mass Index, CLICK HERE to get recommended meals to <span id="recommend-action" className="my-rainbow font-semibold" ></span>

                    </Link>



                    <p className="mt-[3rem] mb-[1rem] text-[13pt] text-[rgba(0,0,0,0.5)] font-semibold border-b max-w-fit mx-auto">
                        Introduction to the Body Mass Index
                    </p>

                    <p className="mx-[4rem] text-[rgba(0,0,0,0.6)]">
                        Body Mass Index (BMI) is widely used as an indicator of body fat content. Your weight alone is not sufficient to establish if you are in a healthy weight range. For example, a tall but slender person can weigh more than a short but plump individual. But the former may enjoy better health as long as their weight is suitable for their height. The ideal weight is also likely to differ for men and women of similar heights. <br /> <br />

                        How then do you know whether you fall in the healthy weight range or not? Your BMI solves this confusion. It correlates your weight with your height and evaluates whether your weight is appropriate for your stature. You can use a BMI calculator to find out your BMI. <br /> <br />

                        Although not an exact measurement of body fat percentage, in most cases, BMI is a reliable tool for establishing risk levels for illnesses, especially ailments related to excess body fat. Many healthcare professionals use BMI to determine effective doses for medicines. Often people with a higher BMI need higher doses. Hence, it is crucial to be aware of your BMI to ensure your overall wellness.
                    </p>

                </div>
            }



            {isSmartPhone &&

                <div className="text-family">

                    <div className="absolute top-2 right-2">
                        <LogOutButton />
                    </div>

                    <p className="mt-[4rem] mb-[1rem] text-center text-[12.5pt] font-semibold">
                        Welcome, <span className="text-[rgb(176,42,48)]">{currentUser}</span>
                    </p>


                    <p className="mb-[2rem] text-center">
                        Calculate your BMI for today and let's make personalized meal recommendations for you to keep your weight in check and stay healty.
                    </p>


                    <div className="flex flex-col items-center gap-[2rem] pt-[1rem] pb-[2rem] bg-[rgba(222,205,209,0.2)]">

                        <div className="flex items-center gap-4 w-[265px]">

                            <div>
                                <img src={weightScale} alt="" />
                            </div>

                            <div className="text-[rgba(176,42,48,0.8)]">
                                <p className="text-[20pt] font-black">Calculate</p>
                                <p className="text-[13pt] font-semibold">Body Mass Index</p>
                            </div>

                        </div>


                        <div className="flex flex-col gap-[2rem] max-w-min">

                            <form
                                method="post"
                                onSubmit={handleSubmit(bmiCalculator)}
                                className="h-[180px] flex flex-col items-center justify-around px-4 bg-[rgba(176,42,48,0.4)] rounded-lg shadow-2xl">

                                <div className="flex items-center gap-[1.5rem]">

                                    <div>

                                        <label htmlFor="height" className="text-[9pt]">HEIGHT:</label>

                                        <div className="flex items-center gap-1">

                                            <input
                                                type="number"
                                                id="height"
                                                className="flex w-[80px] border border-[#B8A8AB] outline-none rounded px-[0.5rem] py-1 text-[15pt] font-bold"
                                                {...register("height", { required: "required field" })}
                                            />

                                            <span className="text-[13pt]">cm</span>

                                        </div>

                                        <p className="flex mt-[0.1rem] mb-0 text-[9pt] whitespace-nowrap">
                                            {errors.height ? (<span className="text-red-600 text[9pt]">{errors.height.message}</span>) : (/ /g, "\u00A0")}
                                        </p>

                                    </div>


                                    <div>

                                        <label htmlFor="weight" className="text-[9pt]">WEIGHT:</label>

                                        <div className="flex items-center gap-1">

                                            <input
                                                type="number"
                                                id="weight"
                                                className="flex w-[80px] border border-[#B8A8AB] outline-none rounded px-[0.5rem] py-1 text-[15pt] font-bold"
                                                {...register("weight", { required: "required field" })}
                                            />

                                            <span className="text-[13pt]">kg</span>

                                        </div>

                                        <p className="flex mt-[0.1rem] mb-0 text-[9pt] whitespace-nowrap">
                                            {errors.weight ? (<span className="text-red-600 text[9pt]">{errors.weight.message}</span>) : (/ /g, "\u00A0")}
                                        </p>

                                    </div>

                                </div>


                                <button
                                    type="submit"
                                    className="py-[0.74rem] px-[1.5rem] font-semibold rounded-full bg-[#DECDD1] hover:bg-blue-700 hover:text-white">
                                    Calculate
                                </button>

                            </form>


                            <div className="w-[265px] flex flex-col items-center gap-[1.5rem] p-4 bg-[rgba(176,42,48,0.4)] rounded-lg shadow-2xl">

                                <div className="flex flex-col items-center justify-center">

                                    <p>Your BMI is:</p>

                                    <p id="bmi" className="flex bg-white rounded px-[0.5rem] text-[25pt] font-bold">--</p>

                                </div>

                                <div className="flex flex-col items-center justify-center">

                                    <p className="text-center">The CDC considers this as:</p>

                                    <p id="interpretation" className="flex bg-white rounded px-[0.5rem] text-[18pt] font-bold">--</p>

                                </div>

                            </div>

                        </div>

                    </div>



                    <Link id="recommend" style={{ display: "none", color: 'blue' }} to={`/meals?bmi=${bmi}`} className="max-w-fit mx-auto mt-[1rem] text-center" >

                        Based on your Body Mass Index, CLICK HERE to get recommended meals to <span id="recommend-action" className="my-rainbow font-semibold" ></span>

                    </Link>



                    <p className="mt-[3rem] mb-[1rem] text-[13pt] text-[rgba(0,0,0,0.5)] font-semibold border-b max-w-fit mx-auto">
                        Introduction to the Body Mass Index
                    </p>

                    <p className="mx-[4rem] text-[rgba(0,0,0,0.6)]">
                        Body Mass Index (BMI) is widely used as an indicator of body fat content. Your weight alone is not sufficient to establish if you are in a healthy weight range. For example, a tall but slender person can weigh more than a short but plump individual. But the former may enjoy better health as long as their weight is suitable for their height. The ideal weight is also likely to differ for men and women of similar heights. <br /> <br />

                        How then do you know whether you fall in the healthy weight range or not? Your BMI solves this confusion. It correlates your weight with your height and evaluates whether your weight is appropriate for your stature. You can use a BMI calculator to find out your BMI. <br /> <br />

                        Although not an exact measurement of body fat percentage, in most cases, BMI is a reliable tool for establishing risk levels for illnesses, especially ailments related to excess body fat. Many healthcare professionals use BMI to determine effective doses for medicines. Often people with a higher BMI need higher doses. Hence, it is crucial to be aware of your BMI to ensure your overall wellness.
                    </p>

                </div>
            }

        </>

    );
};

export default CalculatorPage;