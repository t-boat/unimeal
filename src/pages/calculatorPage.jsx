import weightScale from "../assets/scaleImage.svg";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";



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

    const storage = sessionStorage;
    storage.setItem("bmi", bmi);

    const bmiCalculator = () => {

        // const bmi = Math.round((weight / heightSquared) * 100) / 100;

        document.getElementById("bmi").innerText = bmi;


        // if (bmiValue < 18.5) {
        //     document.getElementById("interpretation").innerText = "underweight";
        //     document.getElementById("recommend-action").innerText = "gain weight";
        //     document.getElementById('recommend').style.opacity = 1;
        // }

        // else if (bmiValue >= 18.5 && bmiValue < 25.0) {
        //     document.getElementById("interpretation").innerText = "normal";
        //     document.getElementById("recommend-action").innerText = "maintain healthy weight";
        //     document.getElementById('recommend').style.opacity = 1;
        // }

        // else if (bmiValue >= 25 && bmiValue < 30.0) {
        //     document.getElementById("interpretation").innerText = "overweight";
        //     document.getElementById("recommend-action").innerText = "burn some fat";
        //     document.getElementById('recommend').style.opacity = 1;
        // }

        // else if (bmiValue >= 30.0) {
        //     document.getElementById("interpretation").innerText = "obesity";
        //     document.getElementById("recommend-action").innerText = "lose weight and reduce risk of illness";
        //     document.getElementById('recommend').style.opacity = 1;
        // }

        // else { document.getElementById("interpretation").innerText = "invalid BMI"; }
    }



    // const recommendation = () => {

    //     if (bmiValue < 18.5) {

    //         document.getElementById("recommendation").style.display = 'block';

    //         document.getElementById("recommendation").innerText = ``;
    //     }

    //     else if (bmiValue >= 18.5 && bmiValue < 25.0) {

    //         document.getElementById("recommendation").style.display = 'block';

    //         document.getElementById("recommendation").innerText = ``;
    //     }

    //     else if (bmiValue >= 25 && bmiValue < 30.0) {

    //         document.getElementById("recommendation").style.display = 'block';

    //         document.getElementById("recommendation").innerText = ``;
    //     }

    //     else if (bmiValue >= 30.0) {

    //         document.getElementById("recommendation").style.display = 'block';

    //         document.getElementById("recommendation").innerText = ``;
    //     }

    //     else {

    //         document.getElementById("recommendation").style.display = 'block';

    //         document.getElementById("recommendation").innerText = `I don't have a recommendation for you.`;
    //     }
    // }




    return (

        <div className="text-family ">

            <p className="my-[2rem] text-center text-[15pt] font-semibold">Great to see you!</p>

            <p className="my-[2rem] text-center">Calculate your BMI for today and let's make personalized meal recommendations for you to keep your weight in check and stay healty.</p>

            <div className="flex bg-[rgba(222,205,209,0.2)] px-[2rem]">

                <div className="w-full flex items-center gap-6">

                    <div>
                        <img src={weightScale} alt="" />
                    </div>

                    <div className="text-[rgb(176,42,48)]">
                        <p className="text-[30pt] font-black">BMI Calculator</p>
                        <p className="text-[15pt] font-semibold">Body Mass Index</p>
                    </div>

                </div>


                <div className="flex gap-[2rem] py-6 w-min">

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

                            <p className="text-center">
                                Get meal <br /> recommendations <br /> <Link to={`/meals`} className="text-blue-700 font-semibold">here</Link>
                            </p>

                            {/* <p id="interpretation" className="flex bg-white rounded px-[0.5rem] text-[18pt] font-bold">--</p> */}

                        </div>

                    </div>

                </div>

            </div>


            {/* <p id="recommend" style={{ opacity: 0, color: 'blue' }} className="my-[1rem] flex justify-center gap-1">

                Based on your Body Mass Index, get recommended meal plans to

                <button id="recommend-action" className="my-rainbow font-semibold" onClick={recommendation}></button>

            </p> */}

            {/* <p id="recommendation" style={{ display: 'none' }} className="px-[4rem]"></p> */}


            <p className="mt-[3rem] mb-[1rem] text-[13pt] text-[rgba(0,0,0,0.5)] font-semibold border-b max-w-fit mx-auto">Introduction to the Body Mass Index</p>


            <p className="mx-[4rem] text-[rgba(0,0,0,0.6)]">
                Body Mass Index (BMI) is widely used as an indicator of body fat content. Your weight alone is not sufficient to establish if you are in a healthy weight range. For example, a tall but slender person can weigh more than a short but plump individual. But the former may enjoy better health as long as their weight is suitable for their height. The ideal weight is also likely to differ for men and women of similar heights. <br /> <br />

                How then do you know whether you fall in the healthy weight range or not? Your BMI solves this confusion. It correlates your weight with your height and evaluates whether your weight is appropriate for your stature. You can use a BMI calculator to find out your BMI. <br /> <br />

                Although not an exact measurement of body fat percentage, in most cases, BMI is a reliable tool for establishing risk levels for illnesses, especially ailments related to excess body fat. Many healthcare professionals use BMI to determine effective doses for medicines. Often people with a higher BMI need higher doses. Hence, it is crucial to be aware of your BMI to ensure your overall wellness
            </p>

        </div>

    );
};

export default CalculatorPage;