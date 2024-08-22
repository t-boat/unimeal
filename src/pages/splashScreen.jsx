import { useNavigate } from "react-router-dom";



const SplashScreen = () => {

    const nextPage = useNavigate();

    setTimeout(() => {
        nextPage('/landing');
    }, 10000);



    return (

        <div className="bg-[#000] text-[hsl(0,0%,28%)] flex flex-col items-center justify-center h-screen">

            <h1 className="text-[50px] font-bold font-mono tracking-[7px]">LiveUp</h1>

            <h3>Become A Better Version of Yourself</h3>

        </div>
    );
};

export default SplashScreen;