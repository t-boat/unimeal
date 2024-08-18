import weightScale from "../assets/scaleImage.svg";
import { useForm } from "react-hook-form";


const CalculatorPage = () => {

    // window.addEventListener('DOMContentLoaded', function () {
    //     /* DOM tree fully parsed and available here */
    // });
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const weight = watch("weight");
    const height = watch("height") / 100;

    const heightSquared = height * height;
    
    
    const bmiCalculator = () => {

        const bmi = (weight / heightSquared).toFixed(1);    
        // const bmi = Math.round((weight / heightSquared) * 100) / 100;
        document.getElementById("bmi").innerText = bmi;

        const bmiValue = Number(bmi);

        if (bmiValue < 18.5) {document.getElementById("interpretation").innerText = "underweight";}

        else if(bmiValue >= 18.5 && bmiValue < 25.0) {document.getElementById("interpretation").innerText = "normal";}

        else if (bmiValue >= 25 && bmiValue < 30.0) {document.getElementById("interpretation").innerText = "overweight";}

        else if (bmiValue >= 30.0) {document.getElementById("interpretation").innerText = "obesity";}

        else {document.getElementById("interpretation").innerText = "invalid";}
    }


    



    return (

        <div>

            <p className="my-[2rem] text-center">Hello, username</p>

            <div className="text-family flex mx-[4rem] bg-[rgba(222,205,209,0.1)] rounded-xl">

                <div className="w-full flex items-center gap-6 pl-4">

                    <div>
                        <img src={weightScale} alt="" />
                    </div>

                    <div className="text-[rgb(176,42,48)]">
                        <p className="text-[30pt] font-black">BMI Calculator</p>
                        <p className="text-[15pt] font-semibold">Body Mass Index</p>
                    </div>

                </div>


                <div className="flex gap-[2rem] p-6 w-min">

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

                            <p>This is considered:</p>

                            <p id="interpretation" className="flex bg-white rounded px-[0.5rem] text-[18pt] font-bold">--</p>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );
};

export default CalculatorPage;