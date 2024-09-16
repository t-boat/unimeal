import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";


const LogOutButton = () => {

    const navigate = useNavigate();

    const logOutUser = () => {

        // Clear session-related data
        // sessionStorage.clear();
        
        //clear ocal storage data
        localStorage.removeItem('accessToken');
        localStorage.removeItem('currentUser');
        localStorage.removeItem('isAuthenticated');
        

        // Programmatically redirect to the login page
        navigate("/landing", { replace: true }); // "replace" removes the current entry from the history stack

        // Prevent going back to previous pages using the back button
        window.history.pushState(null, "", window.location.href);

        window.addEventListener("popstate", () => {
            navigate("/landing");
        });
    };
    


    return (

        <button onClick={logOutUser} className="flex items-center gap-1 text-[12pt] font-semibold px-[0.25em] py-[0.2em] border-black border-2 rounded-md hover:bg-red-950 hover:text-white">

            <LogOut className="size-[17px]" /> Logout

        </button>
    );
};

export default LogOutButton;