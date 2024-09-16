import maleFoto from "../assets/male.webp";
import femaleFoto from "../assets/female.webp";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import { useMediaQuery } from 'react-responsive'




const Landing = () => {

    //Define the breakpoints

    // const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' });
    // const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' });
    // const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
    // const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
    // const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });

    // const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 })
    // const isBigScreen = useMediaQuery({ minWidth: 1824 })
    // const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
    // const isPortrait = useMediaQuery({ orientation: 'portrait' })
    // const isRetina = useMediaQuery({ minResolution: '2dppx' })

    const defaultView = useMediaQuery({ minWidth: 992 });
    const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 991.9 });
    const isMobile = useMediaQuery({ maxWidth: 480.9 });
    // const isDesktopOrLaptop = useMediaQuery({ minWidth: 992 });




    return (
        <>

            {isMobile &&

                <div className="text-family flex justify-center items-center h-screen ">

                    <div className="flex flex-col gap-[2rem] items-center w-[80%] ">

                        <p className="text-[1.4em] tracking-[7px] font-bold text-3d">LiveUp</p>

                        <p className="text-[1.4em] font-bold text-[rgba(0,0,0,0.5)]">UNIQUE MEAL PLANS</p>

                        <div>

                            <p className="text-center text-[1.1em] font-semibold text-[rgba(0,0,0,0.5)] mb-6">
                                <TypeAnimation
                                    sequence={[
                                        "to lose weight",
                                        2000,
                                        "to achieve body goals",
                                        2000,
                                        "to stay healthy",
                                        2000,
                                    ]}
                                    repeat={Infinity}
                                />
                            </p>

                            <div className="flex justify-around">
                                <img src={femaleFoto} alt="" className="object-contain w-[49%]" />
                                <img src={maleFoto} alt="" className="object-contain w-[49%]" />
                            </div>

                        </div>

                        <div className="w-[90%]">

                            <p className="text-[rgba(0,0,0,0.5)] text-[10pt]">

                                By continuing, you agree with the Terms of Service, Money-Back Policy, Privacy Policy, Subscription Terms, and Cookie Policy.

                            </p>

                            <p className="text-[rgba(0,0,0,0.5)] text-[10pt] mt-2 mb-4">

                                We recommend you consult your physician before starting to follow any weight loss program.

                            </p>

                            <div className="flex justify-between w-full">

                                <Link to={"/login"} className="font-semibold text-[11pt] text-black text-center w-[45%] py-[0.25rem] rounded border-2 border-black tracking-[4px]">Login</Link>

                                <Link to={"/register"} className="font-semibold text-[11pt] text-black text-center w-[45%] py-[0.25rem] rounded border-2 border-black tracking-[3px]">Signup</Link>

                            </div>

                        </div>

                    </div>

                </div>
            }



            {isTablet &&

                <div className="text-family flex justify-center items-center h-screen relative">

                    <nav className="absolute top-0 flex justify-between items-center w-full h-[60px] px-[1.5rem]">

                        <p className="text-[1.2em] font-bold tracking-[3px] text-3d">LiveUp</p>

                        <div className="flex gap-[1rem]">

                            <Link to={"/login"} className="font-semibold tracking-[2px] text-[12.5pt] text-[rgba(0,0,0,0.5)]">Login</Link>

                            <Link to={"/register"} className="font-semibold tracking-[2px] text-[12.5pt] text-[rgba(0,0,0,0.5)]">Signup</Link>

                        </div>

                    </nav>


                    <div className="flex flex-col gap-[2rem] items-center justify-evenly mt-[2.5rem] w-[80%] ">

                        <p className="text-[1.6em] font-bold text-[rgba(0,0,0,0.5)]">UNIQUE MEAL PLANS</p>

                        <div>

                            <p className="text-center text-[1.2em] font-semibold text-[rgba(0,0,0,0.5)] mb-6">
                                <TypeAnimation
                                    sequence={[
                                        "to lose weight",
                                        2000,
                                        "to achieve body goals",
                                        2000,
                                        "to stay healthy",
                                        2000,
                                    ]}
                                    repeat={Infinity}
                                />
                            </p>

                            <div className="flex justify-around">
                                <img src={femaleFoto} alt="" className="object-contain w-[49%]" />
                                <img src={maleFoto} alt="" className="object-contain w-[49%]" />
                            </div>

                        </div>

                        <div className="w-[90%] text-center">

                            <p className="text-[rgba(0,0,0,0.5)] text-[10pt]">

                                By continuing, you agree with the Terms of Service, Money-Back Policy, Privacy Policy, Subscription Terms, and Cookie Policy.

                            </p>

                            <p className="text-[rgba(0,0,0,0.5)] text-[10pt] mt-4">

                                We recommend you consult your physician before starting to follow any weight loss program.

                            </p>

                        </div>

                    </div>

                </div>
            }



            {defaultView &&

                <div className="text-family flex justify-center items-center h-screen relative">

                    <nav className="absolute top-0 flex justify-between items-center w-full h-[60px] px-[1.5rem]">

                        <p className="text-[1.6em] font-bold tracking-[3px] text-3d">LiveUp</p>

                        <div className="flex gap-[1.5rem]">

                            <Link to={"/login"} className="font-semibold tracking-[3px] text-[12.5pt] text-black bg-[#DECDD1] py-2 px-5 rounded hover:bg-blue-700 hover:text-white shadow-lg">Login</Link>

                            <Link to={"/register"} className="font-semibold tracking-[2.5px] text-[12.5pt] text-black bg-[#DECDD1] py-2 px-4 rounded hover:bg-blue-700 hover:text-white shadow-lg">Signup</Link>

                        </div>

                    </nav>


                    <div className="flex flex-col gap-[2rem] items-center justify-evenly mt-[2rem] w-[80%] ">

                        <p className="text-[1.8em] font-bold text-[rgba(0,0,0,0.5)]">UNIQUE MEAL PLANS</p>

                        <div>

                            <p className="text-center text-[1.3em] font-semibold text-[rgba(0,0,0,0.5)] mb-6">
                                <TypeAnimation
                                    sequence={[
                                        "to lose weight",
                                        2000,
                                        "to achieve body goals",
                                        2000,
                                        "to stay healthy",
                                        2000,
                                    ]}
                                    repeat={Infinity}
                                />
                            </p>

                            <div className="flex justify-around">
                                <img src={femaleFoto} alt="" className="object-contain w-[49%]" />
                                <img src={maleFoto} alt="" className="object-contain w-[49%]" />
                            </div>

                        </div>

                        <div className="w-[90%] text-center">

                            <p className="text-[rgba(0,0,0,0.5)] text-[12pt]">

                                By continuing, you agree with the Terms of Service, Money-Back Policy, Privacy Policy, Subscription Terms, and Cookie Policy.

                            </p>

                            <p className="text-[rgba(0,0,0,0.5)] text-[12pt] mt-4">

                                We recommend you consult your physician before starting to follow any weight loss program.

                            </p>

                        </div>

                    </div>

                </div>
            }

        </>
    );
};

export default Landing;