import maleFoto from "../assets/male.webp";
import femaleFoto from "../assets/female.webp";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";


const Landing = () => {
    return (
        <div className="text-family flex justify-center items-center h-screen relative">

            <nav className="absolute top-0 flex justify-between items-center w-full h-[60px] px-[2rem]">

                <div>
                    <a href="#" className="text-[20pt] font-bold text-3d">LiveUp</a>
                </div>

                <div className="flex gap-x-[2rem]">

                    <Link to={"/login"} className="bg-[#DECDD1] px-[30px] py-[8px] rounded font-semibold shadow-xl hover:bg-blue-700 hover:text-white">Login</Link>

                    <Link to={"/register"} className="bg-[#DECDD1] px-[22px] py-[8px] rounded font-semibold shadow-xl hover:bg-blue-700 hover:text-white">Sign Up</Link>

                </div>

            </nav>


            <div className="flex flex-col gap-[2rem] items-center justify-evenly w-[60%]">

                <p className="text-[30pt] font-bold text-[rgba(0,0,0,0.5)]">UNIQUE MEAL PLANS</p>

                <div>

                    <p className="text-center text-[17pt] font-semibold text-[rgba(0,0,0,0.5)] mb-6">
                        <TypeAnimation 
                        sequence={[
                            "...to lose weight",
                            2000,
                            "...to achieve body goals",
                            2000,
                            "...to stay healthy",
                            2000,
                        ]}
                        repeat={Infinity}
                        />
                    </p>

                    <div className="flex">
                        <img src={femaleFoto} alt="" className="object-scale-down"/>
                        <img src={maleFoto} alt="" className="object-scale-down"/>
                    </div>

                </div>

                <div className="w-[79%]">

                    <p className="flex items-baseline gap-1">
                        
                        <input type="checkbox" id="consent" defaultChecked/>

                        <label htmlFor="consent" className="text-[rgba(0,0,0,0.5)] text-[11pt]">By continuing, I agree with the Terms of Service, Money-Back Policy, Privacy Policy, Subscription Terms, and Cookie Policy.</label>
                    </p>

                    <p className="text-[rgba(0,0,0,0.5)] text-[10pt] mt-4">We recommend you consult your physician before starting to follow any weight loss program.</p>

                </div>

            </div>

        </div>
    );
};

export default Landing;