import weightScale from "../assets/scaleImage.svg";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import breakFastOne from '../assets/breakfast1.jpg';
import breakFastTwo from '../assets/breakfast2.jpg';
import breakFastThree from '../assets/breakfast3.jpg';
import breakFastFour from '../assets/breakfast4.jpg';
import lunchOne from '../assets/lunch1.jpg';
import lunchTwo from '../assets/lunch2.jpg';
import lunchThree from '../assets/lunch4.webp';
import lunchFour from '../assets/lunch3.webp';
import dinnerOne from '../assets/dinner3.jpg';
import dinnerTwo from '../assets/dinner2.jpg';
import dinnerThree from '../assets/dinner1.jpg';
import dinnerFour from '../assets/dinner4.jpg';



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
            document.getElementById('recommend').style.opacity = 1;
        }

        else if (bmiValue >= 18.5 && bmiValue < 25.0) {
            document.getElementById("interpretation").innerText = "normal";
            document.getElementById("recommend-action").innerText = "maintain healthy weight";
            document.getElementById('recommend').style.opacity = 1;
        }

        else if (bmiValue >= 25 && bmiValue < 30.0) {
            document.getElementById("interpretation").innerText = "overweight";
            document.getElementById("recommend-action").innerText = "burn some fat";
            document.getElementById('recommend').style.opacity = 1;
        }

        else if (bmiValue >= 30.0) {
            document.getElementById("interpretation").innerText = "obesity";
            document.getElementById("recommend-action").innerText = "lose weight and reduce risk of illness";
            document.getElementById('recommend').style.opacity = 1;
        }

        else { document.getElementById("interpretation").innerText = "invalid BMI"; }
    }





    return (

        <div className="text-family ">

            <p className="my-[2rem] text-center text-[15pt] font-semibold">
                Great to see you, <span className="text-[rgb(176,42,48)]">{currentUser}</span>
            </p>

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



            <Link id="recommend" style={{ opacity: 0, color: 'blue' }} className="my-[1rem] flex justify-center gap-1" to={`/meals?bmi=${bmi}`}>

                Based on your Body Mass Index, get recommended meals to

                <span id="recommend-action" className="my-rainbow font-semibold" ></span>

            </Link>



            <p className="mt-[3rem] mb-[1rem] text-[13pt] text-[rgba(0,0,0,0.5)] font-semibold border-b max-w-fit mx-auto">
                Introduction to the Body Mass Index
            </p>

            <p className="mx-[4rem] text-[rgba(0,0,0,0.6)]">
                Body Mass Index (BMI) is widely used as an indicator of body fat content. Your weight alone is not sufficient to establish if you are in a healthy weight range. For example, a tall but slender person can weigh more than a short but plump individual. But the former may enjoy better health as long as their weight is suitable for their height. The ideal weight is also likely to differ for men and women of similar heights. <br /> <br />

                How then do you know whether you fall in the healthy weight range or not? Your BMI solves this confusion. It correlates your weight with your height and evaluates whether your weight is appropriate for your stature. You can use a BMI calculator to find out your BMI. <br /> <br />

                Although not an exact measurement of body fat percentage, in most cases, BMI is a reliable tool for establishing risk levels for illnesses, especially ailments related to excess body fat. Many healthcare professionals use BMI to determine effective doses for medicines. Often people with a higher BMI need higher doses. Hence, it is crucial to be aware of your BMI to ensure your overall wellness.
            </p>



            {/* <div className="flex flex-col justify-center items-center text-family">

                <div id="recommendation1" style={{ display: 'none' }} className="w-[70%]">

                    <p className="text-[rgb(176,42,48)] text-[13pt] text-center mt-[3rem] mb-[2rem]" >Based on your BMI, the meals below are recommended for you to gain some weight.</p>

                    <p>
                        To help you gain weight, focus on meals that are rich in calories, protein, and healthy fats. Here's a mix of meal ideas to get you started: <br /> <br />
                    </p>

                    <p className="font-bold text-[15pt] text-[rgb(176,42,48)]">Breakfast</p> <br />
                    <p className=''>
                        <img src={breakFastOne} alt="" className='object-scale-down size-[150px] float-left mr-4' />
                        1. Oatmeal with Nuts and Fruits: Cook oats with whole milk, add a tablespoon of peanut butter, a handful of nuts (like almonds or walnuts), and top with sliced bananas or berries. <br />
                        2. Avocado Toast with Eggs: Whole-grain toast with mashed avocado, topped with poached eggs, and a sprinkle of feta cheese. <br />
                        3. Greek Yogurt with Granola and Honey: Full-fat Greek yogurt mixed with granola, nuts, dried fruits, and a drizzle of honey. <br /> <br /> <br />
                    </p>

                    <p className="text-right font-bold text-[15pt] text-[rgb(176,42,48)]">Lunch</p> <br />
                    <p>
                        <img src={lunchOne} alt="" className='object-scale-down size-[150px] float-right ml-4' />
                        1. Grilled Chicken Wrap: Whole-wheat wrap filled with grilled chicken, avocado, cheese, lettuce, and a creamy dressing. <br />
                        2. Salmon with Quinoa and Veggies: Grilled or baked salmon served with quinoa, roasted vegetables, and a drizzle of olive oil. <br />
                        3. Pasta with Pesto and Chicken: Whole-grain pasta tossed with pesto sauce, grilled chicken, and a side of garlic bread. <br /> <br /> <br />
                    </p>

                    <p className="font-bold text-[15pt] text-[rgb(176,42,48)]">Dinner</p> <br />
                    <p>
                        <img src={dinnerOne} alt="" className='object-scale-down size-[150px] float-left mr-4' />
                        1. Baked Sweet Potatoes with Ground Turkey: Sweet potatoes stuffed with ground turkey, black beans, and topped with cheese and sour cream. <br />
                        2. Beef Stir-Fry with Rice: Lean beef strips stir-fried with mixed vegetables in a soy-ginger sauce, served over brown rice. <br />
                        3. Chicken Alfredo with Broccoli: Whole-grain fettuccine with a creamy Alfredo sauce, grilled chicken, and steamed broccoli. <br /> <br /> <br />
                    </p>

                    <p className="font-bold">Snacks</p> <br />
                    1. Smoothies: Blend whole milk, Greek yogurt, a banana, peanut butter, and a handful of spinach or berries. <br />
                    2. Trail Mix: A mix of nuts, seeds, dried fruits, and dark chocolate chunks. <br />
                    3. Cheese and Whole-Grain Crackers: Pair cheese slices with whole-grain crackers and some apple or pear slices. <br /> <br />

                    <p className="font-bold">Desserts</p> <br />
                    1. Protein-Packed Brownies: Brownies made with added protein powder, nuts, and dark chocolate. <br />
                    2. Frozen Yogurt with Toppings: Full-fat frozen yogurt topped with granola, nuts, and a drizzle of honey. <br />
                    3. Rice Pudding: Made with whole milk, cinnamon, raisins, and a sprinkle of nuts. <br /> <br />

                    Tips: <br />
                    - Eat frequently throughout the day, aiming for three main meals and two to three snacks. <br />
                    - Add healthy fats like olive oil, avocado, nuts, and seeds to meals for extra calories. <br />
                    - Include protein in every meal to support muscle growth. <br />
                    - Stay hydrated but avoid drinking water before meals to avoid feeling too full. <br /> <br />

                    These meal ideas should help you increase your calorie intake in a healthy and balanced way, allowing you to gain healthy weight.

                </div>




                <div id="recommendation2" style={{ display: 'none' }} className="w-[70%]">

                    <p className="text-[rgb(176,42,48)] text-[13pt] text-center mt-[3rem] mb-[2rem]" >Based on your BMI, the meals below are recommended for you to maintain your healthy weight.</p>

                    <p>
                        For someone with a normal BMI looking to maintain a healthy weight, it's important to focus on balanced meals that provide all essential nutrients. Here are some meal ideas for each part of the day: <br /> <br />
                    </p>

                    <p className="font-bold text-[15pt] text-[rgb(176,42,48)]">Breakfast</p> <br />
                    <p className=''>
                        <img src={breakFastTwo} alt="" className='object-scale-down size-[150px] float-left mr-4' />
                        ** Whole-Grain Toast with Avocado and Eggs: Top whole-grain toast with mashed avocado and a poached or scrambled egg. Add a side of fresh tomatoes or a piece of fruit. <br />
                        ** Oatmeal with Fresh Fruit and Nuts: Cook oats with milk or a plant-based alternative. Top with sliced bananas, berries, a handful of nuts, and a drizzle of honey. <br />
                        ** Greek Yogurt with Granola and Berries: Choose plain Greek yogurt, add a serving of granola, and mix in fresh berries. <br /> <br /> <br />
                    </p>

                    <p className="text-right font-bold text-[15pt] text-[rgb(176,42,48)]">Lunch</p> <br />
                    <p>
                        <img src={lunchTwo} alt="" className='object-scale-down size-[150px] float-right ml-4' />
                        ** Vegetable Stir-Fry with Tofu: Stir-fry a mix of colorful vegetables (like bell peppers, broccoli, and carrots) with tofu. Serve over brown rice or quinoa. <br />
                        ** Turkey and Avocado Sandwich: Use whole-grain bread, lean turkey slices, avocado, lettuce, and tomato. Pair with a side of carrot sticks or a small apple. <br />
                        ** Grilled Chicken Salad: Mix grilled chicken breast with a variety of leafy greens, cherry tomatoes, cucumbers, and a light vinaigrette. Add some quinoa or whole-grain bread on the side. <br /> <br /> <br />
                    </p>

                    <p className="font-bold text-[15pt] text-[rgb(176,42,48)]">Dinner</p> <br />
                    <p>
                        <img src={dinnerTwo} alt="" className='object-scale-down size-[150px] float-left mr-4' />
                        ** Baked Salmon with Sweet Potatoes and Asparagus: Season salmon with herbs and bake until cooked. Serve with roasted sweet potatoes and steamed asparagus. <br />
                        ** Quinoa Bowl with Roasted Vegetables and Chickpeas: Combine cooked quinoa with roasted vegetables (like zucchini, bell peppers, and eggplant), chickpeas, and a tahini dressing. <br />
                        ** Chicken and Vegetable Stir-Fry: Stir-fry chicken breast with a variety of vegetables (like snow peas, bell peppers, and mushrooms) in a light soy or teriyaki sauce. Serve over brown rice. <br /> <br /> <br />
                    </p>

                    <p className="font-bold">Snacks</p> <br />
                    ** Mixed Nuts and Seeds: A small handful of almonds, walnuts, and sunflower seeds. <br />
                    ** Apple Slices with Peanut Butter: A sliced apple with a tablespoon of natural peanut butter. <br />
                    ** Hummus with Carrot and Cucumber Sticks: A small portion of hummus with sliced veggies. <br /> <br />

                    General Tips: <br />
                    - Portion Control: Focus on portion sizes to avoid overeating, even with healthy foods. <br />
                    - Stay Hydrated: Drink plenty of water throughout the day. <br />
                    - Variety: Include a variety of foods in your diet to ensure you're getting all the nutrients you need. <br />
                    - Limit Processed Foods: Minimize the intake of processed and sugary foods. <br /> <br />

                    These meals are designed to be balanced, providing a mix of macronutrients (protein, fats, and carbohydrates) along with plenty of vitamins and minerals.

                </div>




                <div id="recommendation3" style={{ display: 'none' }} className="w-[70%]">

                    <p className="text-[rgb(176,42,48)] text-[13pt] mt-[3rem] mb-[2rem]" >Based on your BMI, the meals below are recommended for you to shed some weight.</p>

                    <p>
                        Here are some meal ideas that can help with weight loss while providing essential nutrients: <br /> <br />
                    </p>

                    <p className="font-bold text-[15pt] text-[rgb(176,42,48)]">Breakfast</p> <br />
                    <p className=''>
                        <img src={breakFastThree} alt="" className='object-scale-down size-[150px] float-left mr-4' />
                        1. Veggie Omelette: <br />
                        - 2-3 egg whites with one whole egg <br />
                        - Spinach, mushrooms, bell peppers, onions <br />
                        - Cooked in a non-stick pan with minimal oil <br /> <br />

                        2. Greek Yogurt with Chia Seeds and Fruit: <br />
                        - Plain Greek yogurt <br />
                        - Chia seeds <br />
                        - A serving of sliced fruit (e.g., kiwi, peach) <br /> <br />

                        3. Oatmeal with Berries and Nuts: <br />
                        - Rolled oats cooked in water or almond milk <br />
                        - Topped with fresh berries (e.g., blueberries, strawberries) <br />
                        - A sprinkle of nuts (e.g., almonds, walnuts) <br /> <br /> <br />

                    </p>

                    <p className="text-left font-bold text-[15pt] text-[rgb(176,42,48)]">Lunch</p> <br />
                    <p>
                        <img src={lunchThree} alt="" className='object-scale-down size-[150px] float-left mr-4' />
                        1. Turkey Wrap: <br />
                        - Whole wheat or lettuce wrap <br />
                        - Sliced turkey breast <br />
                        - Spinach, tomato, avocado <br />
                        - Mustard or hummus for flavor <br /> <br />

                        2. Grilled Chicken Salad: <br />
                        - Grilled chicken breast <br />
                        - Mixed greens (e.g., spinach, arugula) <br />
                        - Cherry tomatoes, cucumbers, avocado <br />
                        - Dressing: Olive oil and balsamic vinegar <br /> <br />

                        3. Quinoa Bowl: <br />
                        - Cooked quinoa <br />
                        - Roasted vegetables (e.g., zucchini, carrots, broccoli) <br />
                        - A protein source (e.g., grilled tofu, chickpeas) <br />
                        - Drizzle with tahini or lemon juice <br /> <br /> <br />

                    </p>

                    <p className="font-bold text-[15pt] text-[rgb(176,42,48)]">Dinner</p> <br />
                    <p>
                        <img src={dinnerThree} alt="" className='object-scale-down size-[150px] float-left mr-4' />
                        1. Stir-fried Vegetables with Lean Protein: <br />
                        - Stir-fry a mix of vegetables (e.g., bell peppers, broccoli, snap peas) <br />
                        - Add lean protein (e.g., shrimp, chicken, tofu) <br />
                        - Serve over a small portion of brown rice or cauliflower rice <br /> <br />

                        2. Stuffed Bell Peppers: <br />
                        - Bell peppers stuffed with a mix of ground turkey, brown rice, and vegetables <br />
                        - Season with herbs and spices <br />
                        - Baked until peppers are tender <br /> <br />

                        3. Baked Salmon with Asparagus: <br />
                        - Baked or grilled salmon fillet <br />
                        - Steamed or roasted asparagus <br />
                        - Quinoa or brown rice on the side <br /> <br /> <br />
                    </p>

                    <p className="font-bold">Snacks</p> <br />
                    1. Apple Slices with Almond Butter: <br />
                    2. Carrot and Cucumber Sticks with Hummus: <br />
                    3. A Handful of Nuts (e.g., almonds, walnuts): <br /> <br />

                    Tips: <br />
                    - Focus on whole, unprocessed foods. <br />
                    - Incorporate plenty of vegetables into each meal. <br />
                    - Choose lean proteins and healthy fats. <br />
                    - Control portion sizes, especially with high-calorie foods like nuts and oils. <br />
                    - Stay hydrated by drinking plenty of water. <br /> <br />

                    These meals are designed to be nutrient-dense and filling while helping with weight management.

                </div>




                <div id="recommendation4" style={{ display: 'none' }} className="w-[70%]">

                    <p className="text-[rgb(176,42,48)] text-[13pt] mt-[3rem] mb-[2rem]" >Based on your BMI, the meals below are recommended for you to support fat burning and get rid of extra weight faster.</p>

                    <p>
                        To help burn fat while still maintaining a balanced diet, here are some meal ideas that are nutrient-rich and can support speedy weight loss: <br /> <br />
                    </p>

                    <p className="font-bold text-[15pt] text-[rgb(176,42,48)]">Breakfast</p> <br />
                    <p className=''>
                        <img src={breakFastFour} alt="" className='object-scale-down size-[150px] float-left mr-4' />
                        1. Greek Yogurt with Berries and Nuts <br />
                        * A cup of plain Greek yogurt. <br />
                        * A handful of mixed berries (blueberries, strawberries, raspberries). <br />
                        * Sprinkle with a tablespoon of nuts (walnuts or almonds) and chia seeds. <br /> <br />

                        2. Omelette with Veggies and Avocado <br />
                        * 2-3 eggs (or egg whites) cooked with spinach, tomatoes, bell peppers, and mushrooms. <br />
                        * A quarter of an avocado on the side. <br />
                        * Serve with a small piece of whole-grain toast. <br /> <br /> <br />


                    </p>

                    <p className="text-left font-bold text-[15pt] text-[rgb(176,42,48)]">Lunch</p> <br />
                    <p>
                        <img src={lunchFour} alt="" className='object-scale-down size-[150px] float-left mr-4' />
                        1. Grilled Chicken Salad <br />
                        * Grilled chicken breast on a bed of mixed greens. <br />
                        * Add cherry tomatoes, cucumbers, red onions, and avocado. <br />
                        * Dress with olive oil and balsamic vinegar. <br /> <br />

                        2. Quinoa and Chickpea Bowl <br />
                        * Cooked quinoa mixed with roasted chickpeas. <br />
                        * Add sautéed spinach, roasted sweet potatoes, and a dollop of hummus. <br />
                        * Sprinkle with fresh parsley and a squeeze of lemon juice. <br /> <br /> <br />
                    </p>

                    <p className="font-bold text-[15pt] text-[rgb(176,42,48)]">Dinner</p> <br />
                    <p>
                        <img src={dinnerFour} alt="" className='object-scale-down size-[150px] float-left mr-4' />
                        1. Stuffed Bell Peppers: <br />
                        * Bell peppers stuffed with a mix of ground turkey, brown rice, and vegetables <br />
                        * Season with herbs and spices <br />
                        * Baked until peppers are tender <br /> <br />

                        2. Salmon with Steamed Veggies <br />
                        * Grilled or baked salmon fillet. <br />
                        * Serve with steamed broccoli, carrots, and asparagus. <br />
                        * Add a small portion of brown rice or quinoa on the side. <br /> <br /> <br />
                    </p>

                    <p className="font-bold">Snacks</p> <br />
                    1. Apple Slices with Peanut Butter <br />
                    - Sliced apple with a tablespoon of natural peanut butter. <br />
                    2. Carrot and Cucumber Sticks with Hummus <br />
                    - Fresh carrot and cucumber sticks with a serving of hummus. <br />
                    3. Mixed Nuts <br />
                    - A small handful of mixed nuts (almonds, walnuts, cashews). <br /> <br />

                    Tips: <br />
                    - Portion Control: Keep an eye on portion sizes, especially for calorie-dense foods like nuts and oils. <br />
                    - Protein Intake: Ensure each meal contains a source of lean protein to keep you full and support muscle maintenance. <br />
                    - Hydration: Drink plenty of water throughout the day. <br />
                    - Healthy Fats: Include sources of healthy fats like avocados, nuts, and olive oil, but be mindful of portions. <br /> <br />

                    These meals are designed to be satisfying while helping to create a calorie deficit for fat loss.

                </div>

                <div id='recommendation5' style={{ display: 'none' }} className='mt-[3rem] text-center text-[13pt]'>Unfortunately, without a valid BMI value, I cannot recommend a meal for you. <br />Kindly head back to the previous page and compute your BMI. Then I will be happy to recommend something "special" for you. </div>

            </div> */}

        </div>

    );
};

export default CalculatorPage;